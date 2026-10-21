// Allgemeine Filter für die Templates: Sortieren, Filtern von Listen, Text und Markdown
const fs = require("fs");
const lodash = require("lodash");
const { readSourceFile } = require("./shared");
const { markdownLib } = require("./markdown");

function sortByOrder(values) {
    let vals = [...values];     // this *seems* to prevent collection mutation...
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
}

function sortColorsByOrder(obj) {
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
}

// Kategorie-Filter einer Übersichtsseite: nur Kategorien, die in der angezeigten Liste vorkommen
// (list wie in browser.njk: designtokens/basics, components, templates, patterns; leer = alle Listen)
function listCategories(categories, systemData, list) {
    const lists = {
        designtokens: ["design-tokens", "basics"],
        basics: ["design-tokens", "basics"],
        components: ["components"],
        templates: ["templates"],
        patterns: ["patterns"],
    }[list];
    const entries = [...Object.values(systemData?.components ?? {}), ...Object.values(systemData?.templates ?? {})]
        .map((entry) => entry?.config)
        .filter((config) => config && config.showInFirstLevel !== false && (!lists || lists.includes(config.list)));
    const used = new Set(entries.flatMap((config) => config.categories ?? []));
    return (categories ?? []).filter((category) => used.has(category));
}

// Einträge, deren Wert unter path (ohne Akzente, Gross-/Kleinschreibung) genau value entspricht
const matchesPath = (item, path, value) => {
    const pathValue = lodash.deburr(lodash.get(item, path)).toLowerCase();
    return pathValue.length == value.length && pathValue.includes(value) == true;
};
const includeByPath = (arr, path, value) => arr.filter((item) => matchesPath(item, path, lodash.deburr(value).toLowerCase()));
const excludeByPath = (arr, path, value) => arr.filter((item) => !matchesPath(item, path, lodash.deburr(value).toLowerCase()));

// Setzt an jede Markdown-Überschrift ausserhalb von Code-Blöcken einen Punkt (SBB-Schreibregel)
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

// Lyne-README für die HTML-Seite: Storybook-Links absolut, Tabellen im sbb-table-wrapper, Punkt an Überschriften
function absoluteLinks(post) {
    if (post === undefined || post === null) {
        return post;
    }
    const source = typeof post === "string" ? post : String(post);
    // Relative Storybook-Links aus den Lyne-READMEs ("/docs/…", "docs/…", "/story/…") auf die aktuelle Storybook
    const content = source.replace(/\]\(\/?(docs|story)\//g, "](https://lyne-elements.app.sbb.ch/?path=/$1/");
    const tableRegex = /(\|[^\n]+\|\n)(\|[^\n]+\|\n)*/g;
    const updatedContent = content.replace(tableRegex, (match) => `<sbb-table-wrapper>\n\n${match}\n\n{.sbb-table .sbb-table--striped}\n\n</sbb-table-wrapper>\n\n`);
    return appendDotToHeadings(updatedContent);
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("sortByOrder", sortByOrder);
    eleventyConfig.addFilter("sortColorsByOrder", sortColorsByOrder);
    eleventyConfig.addFilter("listCategories", listCategories);
    eleventyConfig.addFilter("include", includeByPath);
    eleventyConfig.addFilter("exclude", excludeByPath);
    eleventyConfig.addFilter("lastOfArray", (array) => array.slice(-1));
    eleventyConfig.addFilter("defaultlanguagecontent", (array, currPage) => array.filter((page) => page.url == "/de" + currPage.slice(3)));

    eleventyConfig.addFilter("readSourceFile", readSourceFile);
    eleventyConfig.addFilter("fileExists", (file) => typeof file === "string" && fs.existsSync(file));
    eleventyConfig.addFilter("removeLastPathSegment", (url) => (typeof url !== "string" ? url : url.substring(0, url.lastIndexOf("/"))));
    eleventyConfig.addFilter("capitalizeWords", (value) => (typeof value !== "string" ? "" : value.replace(/\b\w/g, (char) => char.toUpperCase())));
    // Text mit `Code` (z. B. Lyne-Beschreibungen) als HTML: maskieren, Backticks zu <code>
    eleventyConfig.addFilter("inlineCode", (text) =>
        String(text ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/`([^`]+)`/g, "<code>$1</code>")
    );
    eleventyConfig.addFilter("absolutelinks", absoluteLinks);
    eleventyConfig.addFilter("renderUsingMarkdown", (rawString) => markdownLib.render(rawString));
};
