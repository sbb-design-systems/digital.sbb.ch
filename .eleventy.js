// Eleventy-Konfiguration: Grundeinstellungen und Reihenfolge der Plugins. Filter, Transforms und
// Hilfsfunktionen liegen thematisch gegliedert in eleventy/.
const litPlugin = require('@lit-labs/eleventy-plugin-lit');
const { markdownLib } = require("./eleventy/markdown");
const assets = require("./eleventy/assets");
const filters = require("./eleventy/filters");
const seo = require("./eleventy/seo");
const lyne = require("./eleventy/lyne");
const agents = require("./eleventy/agents");
const lyneSsr = require("./eleventy/lyne-ssr");

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

    // Build-Zeitpunkt für llms.txt: Agents erkennen daran, ob ihr Abruf aus einem veralteten Cache stammt
    eleventyConfig.addGlobalData("buildTime", () => new Date().toISOString());
    // Nur auf dem lokalen Dev-Server (eleventy --serve, npm start): ausgeblendete Komponenten
    // ("showInFirstLevel": false, Entwürfe) erscheinen trotzdem in Übersicht und Sidebar.
    // Beim Build (npm run build) bleibt es bei der Regel aus der config.
    eleventyConfig.addGlobalData("showHiddenComponents", () =>
        process.env.ELEVENTY_RUN_MODE === "serve" && process.env.BUILD_MODE !== "production");
    // Der Lyne-Abdeckungsbericht ist ein lokales Werkzeug und wird nur auf dem Dev-Server erzeugt
    if (process.env.ELEVENTY_RUN_MODE !== "serve" || process.env.BUILD_MODE === "production") {
        eleventyConfig.ignores.add("src/de/design-system/lyne/abdeckung.njk");
    }

    // SSR nur für Produktions-Builds
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

    eleventyConfig.setLibrary('md', markdownLib);
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

    // Die Module werden direkt aufgerufen (nicht über addPlugin), damit ihre Transforms wie bisher
    // vor den Plugin-Transforms laufen. Nur lyne-slot-states registriert sich selbst als Plugin,
    // damit es nach dem Lit-SSR-Plugin läuft (siehe eleventy/lyne-ssr.js).
    filters(eleventyConfig);
    assets(eleventyConfig);
    seo(eleventyConfig);
    lyne(eleventyConfig);
    agents(eleventyConfig);

    eleventyConfig.addPlugin(EleventyI18nPlugin, { defaultLanguage: "de" });

    lyneSsr(eleventyConfig);

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
