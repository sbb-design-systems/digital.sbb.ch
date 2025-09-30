//const litPlugin = require('@lit-labs/eleventy-plugin-lit');
const sass = require("sass");
const path = require("node:path");
const lodash = require("lodash");
const nunjucks = require("nunjucks");
const markdownIt = require("markdown-it");
const md = new markdownIt();

const markdownItAttrs = require('markdown-it-attrs')
const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: false
}
const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs).disable('code');

function sortByOrder(values) {
    let vals = [...values];     // this *seems* to prevent collection mutation...
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
}


module.exports = async function(eleventyConfig) {
    const { EleventyI18nPlugin } = await import("@11ty/eleventy");

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
            const macroTemplate = `{% from "macros/macros.njk" import ${macroName} %}{{ ${macroName}(params) }}`;
            env.addGlobal(macroName, (params = {}) => {
                return env.renderString(macroTemplate, { params });
            });
        });
    });

    eleventyConfig.setQuietMode(true);

    // Can be activated by running "SSR=1 npm start" on Unix systems
    if (process.env.BUILD_MODE === 'production' || process.env.SSR) {
            /*
            eleventyConfig.setQuietMode(false);
            console.log(`Activated SSR plugin`);
            eleventyConfig.addPlugin(litPlugin, {
                mode: 'worker',
                componentModules: [
                    './node_modules/@sbb-esta/lyne-elements/index.js',
                    './node_modules/@sbb-esta/lyne-elements-experimental/index.js',
                ],
            });*/
        } 
    else { 
        //console.log(`SSR plugin not active`);
    }


    eleventyConfig.setLibrary('md', markdownLib)
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy("src/assets/videos");
    eleventyConfig.addPassthroughCopy("src/assets/js");
    eleventyConfig.addPassthroughCopy("src/assets/fonts");
    eleventyConfig.addPassthroughCopy("src/assets/downloads");
    eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });
    eleventyConfig.addPassthroughCopy({ 'src/googlec598c9eee38cf153.html': '/googlec598c9eee38cf153.html' });

    eleventyConfig.addPreprocessor("macro-inject", ".njk,.md", (data, content) => {
        return `{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}\n` + content;
    }); 



    eleventyConfig.addTemplateFormats("scss");
    eleventyConfig.addExtension("scss", {
        outputFileExtension: "css", 
        compile: function (inputContent, inputPath) {
            let parsed = path.parse(inputPath);
            if (parsed.name.startsWith("partial-")) {
                return;
            }
            let result = sass.compileString(inputContent, {
            loadPaths: [
                parsed.dir || ".",
                this.config.dir.includes,
                "./",
                "node_modules"
            ]
            });
            this.addDependencies(inputPath, result.loadedUrls);
            return async (data) => {
                return result.css;
            };
        }
    });
    
    eleventyConfig.addFilter("sortByOrder", sortByOrder);

    eleventyConfig.addFilter("sortLyneComponentsByOrder", (obj) => {
        const sorted = {};
        Object.keys(obj)
          .sort((a, b) => {
            return obj[a].config.order > obj[b].config.order ? 1 : -1;
          })
          .forEach((name) => (sorted[name] = obj[name]));
        return sorted;
      });

    eleventyConfig.addFilter("sortColorsByOrder", (obj) => {
        const sorted = {};
        Object.keys(obj)
          .sort((a, b) => {
            return obj[a].order > obj[b].order ? 1 : -1;
          })
          .forEach((name) => (sorted[name] = obj[name]));
        return sorted;
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
            return content.replace(tableRegex, (match) => `<sbb-table-wrapper>\n\n${match}\n\n{.sbb-table}\n\n</sbb-table-wrapper>\n\n`);
        }
        const updatedContent = wrapTablesWithSbbTableWrapper(content);
        return updatedContent;});

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
