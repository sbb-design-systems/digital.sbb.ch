const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const litPlugin = require('@lit-labs/eleventy-plugin-lit');
const lodash = require("lodash");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require('markdown-it-attrs')
const md = new markdownIt();
const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: false
}
const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs).use(markdownItAnchor).disable('code');

// Cache-Busting: hängt einen Content-Hash an Asset-URLs an (z. B. /assets/css/styles.css?v=1a2b3c4d),
// damit nginx sie als "immutable" ausliefern kann. Gesucht wird zuerst im Build-Output
// (Sass, esbuild, cpx schreiben direkt nach dist), dann in src (Passthrough-Copy).
const assetHashCache = new Map();
function assetHash(url) {
    if (typeof url !== "string") return url;
    const relPath = url.split("?")[0].replace(/^\//, "");
    const file = [path.join("dist", relPath), path.join("src", relPath)].find((candidate) => fs.existsSync(candidate));
    if (!file) return url;

    const { mtimeMs, size } = fs.statSync(file);
    const cacheKey = `${file}:${mtimeMs}:${size}`;
    if (!assetHashCache.has(cacheKey)) {
        const hash = crypto.createHash("md5").update(fs.readFileSync(file)).digest("hex").slice(0, 8);
        assetHashCache.set(cacheKey, hash);
    }
    return `${url}?v=${assetHashCache.get(cacheKey)}`;
}

// Liest die Pixelmasse einer WebP- oder SVG-Datei, ohne zusätzliche Abhängigkeit.
function readImageSize(file) {
    if (file.endsWith(".svg")) {
        const svgTag = fs.readFileSync(file, "utf8").match(/<svg\b[^>]*>/i)?.[0] ?? "";
        const attr = (name) => svgTag.match(new RegExp(`\\s${name}="([\\d.]+)(?:px)?"`))?.[1];
        const viewBox = svgTag.match(/viewBox="[\d.-]+[\s,]+[\d.-]+[\s,]+([\d.]+)[\s,]+([\d.]+)"/);
        const width = attr("width") ?? viewBox?.[1];
        const height = attr("height") ?? viewBox?.[2];
        return width && height ? { width: Math.round(width), height: Math.round(height) } : null;
    }

    const buf = fs.readFileSync(file);
    // Einzelne .webp-Dateien sind in Wahrheit PNGs
    if (buf.toString("ascii", 1, 4) === "PNG") {
        return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
    }
    if (buf.toString("ascii", 0, 4) !== "RIFF" || buf.toString("ascii", 8, 12) !== "WEBP") return null;
    switch (buf.toString("ascii", 12, 16)) {
        case "VP8 ":
            return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
        case "VP8L":
            return {
                width: 1 + (((buf[22] & 0x3f) << 8) | buf[21]),
                height: 1 + (((buf[24] & 0x0f) << 10) | (buf[23] << 2) | ((buf[22] & 0xc0) >> 6)),
            };
        case "VP8X":
            return { width: 1 + buf.readUIntLE(24, 3), height: 1 + buf.readUIntLE(27, 3) };
        default:
            return null;
    }
}

// Liefert width/height-Attribute für ein Bild, damit der Browser den Platz vor dem Laden
// reserviert (verhindert Layout Shifts). Lyne setzt global img { aspect-ratio: var(--sbb-image-aspect-ratio) }
// und hebelt damit das Seitenverhältnis aus width/height aus – deshalb wird es zusätzlich über die
// Lyne-Variable gesetzt. "auto" lässt nach dem Laden das echte Bildverhältnis gewinnen.
// Fehlt die Datei, bleibt das Attribut leer.
const imageSizeCache = new Map();
function imageAttrs(url) {
    if (typeof url !== "string") return "";
    const file = path.join("src", url.split("?")[0].replace(/^\//, ""));
    if (!fs.existsSync(file)) return "";

    const cacheKey = `${file}:${fs.statSync(file).mtimeMs}`;
    if (!imageSizeCache.has(cacheKey)) {
        imageSizeCache.set(cacheKey, readImageSize(file));
    }
    const size = imageSizeCache.get(cacheKey);
    return size
        ? `width="${size.width}" height="${size.height}" style="--sbb-image-aspect-ratio: auto ${size.width} / ${size.height}"`
        : "";
}

function sortByOrder(values) {
    let vals = [...values];     // this *seems* to prevent collection mutation...
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
}

function appendDotToHeadings(content) {
    const lines = content.split("\n");
    let inCodeBlock = false;

    return lines.map((line) => {
        if (/^\s*(```|~~~)/.test(line)) {
            inCodeBlock = !inCodeBlock;
            return line;
        }
        if (inCodeBlock) {
            return line;
        }

        return line.replace(/^(\s{0,3}#{1,6}\s+)(.+?)(\s*\{[^}]*\})?\s*$/, (match, prefix, text, attrs) => {
            // optionale schliessende Hashes ("## Titel ##") entfernen
            let title = text.replace(/\s+#+\s*$/, "").trimEnd();
            // schliessende Markdown-Zeichen ignorieren, damit "**Fertig!**" erkannt wird
            const visibleEnd = title.replace(/[*_`~]+$/, "");
            if (/[.!?]$/.test(visibleEnd)) {
                return match; // Punkt, Frage- oder Ausrufezeichen schon da
            }
            return prefix + title + "." + (attrs || "");
        });
    }).join("\n");
}

module.exports = async function(eleventyConfig) {
    const { EleventyI18nPlugin } = await import("@11ty/eleventy");
    // Eleventy v4 uses its async fork of Nunjucks. Use that same runtime here so
    // rendered macros remain marked as safe after their Promise resolves.
    const { default: nunjucks } = await import("@11ty/nunjucks");

    const macroNames = [
        "imageWithMode",
        "imageOnGreyBackground",
        "imageSpec",
        "principleImage",
        "webpImage",
        "svgImage",
        "buttonGroup",
        "specificationLinks",
        "lynePlayground",
        "lyneExamples",
        "lyneComponentLinks"
    ];

    eleventyConfig.amendLibrary("njk", (env) => {
        macroNames.forEach((macroName) => {
            const macroTemplate = `{% from "macros/macros.njk" import ${macroName} %}{{ ${macroName}(params) | safe }}`;
            env.addGlobal(macroName, (params = {}) => {
                return env
                    .renderString(macroTemplate, { params })
                    .then((renderedMacro) => new nunjucks.runtime.SafeString(renderedMacro));
            });
        });
    });

    eleventyConfig.setQuietMode(true);

    // Enable SSR only for production builds.
    if (process.env.BUILD_MODE === 'production') {
           
            eleventyConfig.setQuietMode(false);
            console.log(`Activated SSR plugin`);
            eleventyConfig.addPlugin(litPlugin, {
                mode: 'worker',
                componentModules: [
                    './node_modules/@sbb-esta/lyne-elements/index.js',
                    './node_modules/@sbb-esta/lyne-elements-experimental/index.js',
                ],
            });
            
        } 
    else { 
       // console.log(`SSR plugin not active`);
    }


    eleventyConfig.setLibrary('md', markdownLib)
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy("src/assets/videos");
    eleventyConfig.addPassthroughCopy("src/assets/js");
    eleventyConfig.addPassthroughCopy("src/assets/fonts");
    eleventyConfig.addPassthroughCopy("src/assets/downloads");
    eleventyConfig.addPassthroughCopy("src/assets/studies");
    eleventyConfig.addPassthroughCopy("src/assets/templates");
    eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });
    eleventyConfig.addPassthroughCopy({ 'src/googlec598c9eee38cf153.html': '/googlec598c9eee38cf153.html' });

    eleventyConfig.addPreprocessor("macro-inject", ".njk,.md", (data, content) => {
        return `{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}\n` + content;
    }); 
    eleventyConfig.addWatchTarget("src/assets/css/**/*.scss");
    eleventyConfig.addWatchTarget("dist/assets/css/**/*.css");
    
    eleventyConfig.addFilter("sortByOrder", sortByOrder);
    eleventyConfig.addFilter("assetHash", assetHash);
    eleventyConfig.addFilter("imageAttrs", imageAttrs);

    eleventyConfig.addFilter("sortLyneComponentsByOrder", (obj) => {
        if (!obj || typeof obj !== "object") {
            return obj;
        }

        const entries = Object.entries(obj);
        entries.sort(([, a], [, b]) => {
            const orderA = a?.config?.order ?? Number.POSITIVE_INFINITY;
            const orderB = b?.config?.order ?? Number.POSITIVE_INFINITY;
            return orderA - orderB;
        });

        return Object.fromEntries(entries);
    });

    eleventyConfig.addFilter("sortColorsByOrder", (obj) => {
        if (!obj || typeof obj !== "object") {
            return obj;
        }

        const entries = Object.entries(obj);
        entries.sort(([, a], [, b]) => {
            const orderA = a?.order ?? Number.POSITIVE_INFINITY;
            const orderB = b?.order ?? Number.POSITIVE_INFINITY;
            return orderA - orderB;
        });

        return Object.fromEntries(entries);
    });  

    // Custom filter to capitalize each word in a string
    eleventyConfig.addFilter("capitalizeWords", function(value) {
    if (typeof value !== 'string') {
      return ''; // or handle the undefined case as needed
    }
  
    return value.replace(/\b\w/g, char => char.toUpperCase());
  });  

    eleventyConfig.addFilter("lastOfArray", function(array) {return array.slice(-1);});
    eleventyConfig.addFilter("absolutelinks", (post) => {
        if (post === undefined || post === null) {
            return post;
        }
        const source = typeof post === "string" ? post : String(post);
        const content = source.replaceAll("](/docs/", "](https://lyne-storybook.app.sbb.ch/?path=/docs/").replaceAll("](/story/", "](https://lyne-storybook.app.sbb.ch/?path=/story/");
        function wrapTablesWithSbbTableWrapper(content) {
            //const tableRegex = /((?:\|[^|\n]*\|.*\n)+)/g;
            const tableRegex = /(\|[^\n]+\|\n)(\|[^\n]+\|\n)*/g;
            return content.replace(tableRegex, (match) => `<sbb-table-wrapper>\n\n${match}\n\n{.sbb-table .sbb-table--striped}\n\n</sbb-table-wrapper>\n\n`);
        }
        const updatedContent = wrapTablesWithSbbTableWrapper(content);
        return appendDotToHeadings(updatedContent);});

    eleventyConfig.addFilter("defaultlanguagecontent", (array, currPage) => {
        currPage = currPage.slice(3);
        const pageArr = array.filter((page) => page.url == "/de"+currPage);
        return pageArr;});

    eleventyConfig.addPlugin(EleventyI18nPlugin, {defaultLanguage: "de",});

    eleventyConfig.addFilter("include", (arr, path, value) => {
    value = lodash.deburr(value).toLowerCase();
    return arr.filter((item) => {
        let pathValue = lodash.get(item, path);
        pathValue = lodash.deburr(pathValue).toLowerCase();
        if (pathValue.length == value.length && pathValue.includes(value) == true) {
            return true;
        } else {
            return false;
        }
        });
    });

    eleventyConfig.addFilter("exclude", (arr, path, value) => {
        value = lodash.deburr(value).toLowerCase();
        return arr.filter((item) => {
            let pathValue = lodash.get(item, path);
            pathValue = lodash.deburr(pathValue).toLowerCase();
            if (pathValue.length == value.length && pathValue.includes(value) == true) {
                return false;
            } else {
                return true;
            }
            });
        });

    eleventyConfig.addFilter("removeLastPathSegment", function(url) {
        if (typeof url !== 'string') return url;
        // Entfernt alles nach dem letzten "/"
        return url.substring(0, url.lastIndexOf('/'));
        });    

    eleventyConfig.addFilter("lyneexample", (pattern) => {
        const lyneStories = require('@sbb-esta/lyne-elements/dist/collection/storybundle');    
        const rawStories = lyneStories[pattern];
        const stories = [];
        let ignoreArgs = [];
        const defaultExport = rawStories.default;
        const defaultExportKeys = Object.keys(defaultExport);

        if (defaultExportKeys.includes('documentation')) {
            const docu = defaultExport.documentation;
            const docuKeys = Object.keys(docu);

            if (docuKeys.includes('disableArgs')) {
                ignoreArgs = docu.disableArgs;
            }
        }
        Object.keys(rawStories).forEach((key) => {
            if (key !== 'default') {
                const storyObject = {};
                const story = rawStories[key];
                const storyKeys = Object.keys(story);

                // handle documentation key
                if (storyKeys.includes('documentation')) {
                storyObject.documentation = story.documentation;
                } else {
                storyObject.documentation = {};
                }

                // handle container key
                const docuKeys = Object.keys(storyObject.documentation);

                if (docuKeys.includes('container')) {
                storyObject.documentation.container = story.documentation.container;
                } else {
                storyObject.documentation.container = {};
                }

                const unCamelCase = (string) =>
                string.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3');

                storyObject.documentation.title = unCamelCase(key);

                // adopt styles
                const containerKeys = Object.keys(storyObject.documentation.container);

                if (containerKeys.includes('styles')) {
                const rawStyles = storyObject.documentation.container.styles;
                const stylesKeys = Object.keys(rawStyles);
                let styles = '';

                stylesKeys.forEach((styleKey) => {
                    const style = rawStyles[styleKey];

                    styles += `${styleKey}: ${style};`;
                });

                storyObject.documentation.container.styles = styles;
                } else {
                    storyObject.documentation.container.styles = '';
                }

                if (story && Object.keys(story).includes('args')) {
                    storyObject.element = story.args;
                }
                stories.push(storyObject);
            }
        });
        return stories;
        }); 

    eleventyConfig.addFilter("renderUsingMarkdown", function(rawString) {
        return markdownLib.render(rawString);
      });  


      

    return {
        templateFormats: ["njk", "md"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data",
            output: "dist"
        }
    };
};
