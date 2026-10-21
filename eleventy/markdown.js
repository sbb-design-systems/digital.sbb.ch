// Markdown-Bibliothek für .md-Seiten und den Filter renderUsingMarkdown
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require("markdown-it-attrs");

const markdownLib = markdownIt({ html: true, breaks: true, linkify: false })
    .use(markdownItAttrs)
    .use(markdownItAnchor)
    .disable("code");

module.exports = { markdownLib };
