const eleventySass = require("eleventy-sass");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { EleventyI18nPlugin } = require("@11ty/eleventy");
//const litPlugin = require('@lit-labs/eleventy-plugin-lit');

const markdownIt = require('markdown-it')
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

module.exports = function (config) {

    config.addFilter("renderUsingMarkdown", function(rawMarkup) {
        return markdownLib.render(rawMarkup);
    });

    config.setQuietMode(true);

    config.addCollection('everything', (collectionApi) => {
        const imageWithMode = `{% from "src/_includes/macros/macros.njk" import imageWithMode %}`;
        const imageOnGreyBackground = `{% from "src/_includes/macros/macros.njk" import imageOnGreyBackground %}`;
        const principleImage = `{% from "src/_includes/macros/macros.njk" import principleImage %}`;
        const svgImage = `{% from "src/_includes/macros/macros.njk" import svgImage %}`;
        const webpImage = `{% from "src/_includes/macros/macros.njk" import webpImage %}`;
        const buttonGroup = `{% from "src/_includes/macros/macros.njk" import buttonGroup %}`;
        const specificationLinks = `{% from "src/_includes/macros/macros.njk" import specificationLinks %}`;
        const imageSpec = `{% from "src/_includes/macros/macros.njk" import imageSpec %}`;
        const lynePlayground = `{% from "src/_includes/macros/macros.njk" import lynePlayground %}`;
        const lyneExamples = `{% from "src/_includes/macros/macros.njk" import lyneExamples %}`;


        let collection = collectionApi.getFilteredByGlob(["src/**/*.md", "src/**/*.njk"]);
        collection.forEach((item) => {
          item.template.frontMatter.content = `${svgImage}\n${webpImage}\n${imageWithMode}\n${imageOnGreyBackground}\n${principleImage}\n${buttonGroup}\n${specificationLinks}\n${imageSpec}\n${lynePlayground}\n${lyneExamples}\n${item.template.frontMatter.content}`
        })
        return collection;
      });
    //config.addPlugin(syntaxHighlight);
    config.addPlugin(eleventyNavigationPlugin);
    config.setLibrary('md', markdownLib)
    config.addPassthroughCopy("src/assets/images");
    config.addPassthroughCopy("src/assets/js");
    config.addPassthroughCopy("src/assets/fonts");
    config.addPassthroughCopy("src/assets/downloads");
    config.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });
    config.addPassthroughCopy({ 'src/googlec598c9eee38cf153.html': '/googlec598c9eee38cf153.html' });

    require("esbuild").buildSync({
        entryPoints:[".lyne-bundle.js"],
        bundle:true,
        minify:true,
        outfile:"dist/assets/js/lyne-bundle.js"
    })  
    /*
    config.addPlugin(litPlugin, {
        mode: 'worker',
        componentModules: [
           "node_modules/@sbb-esta/lyne-components/accordion/index.js",
           "node_modules/@sbb-esta/lyne-components/action-group/index.js",
           "node_modules/@sbb-esta/lyne-components/alert/index.js",
           "node_modules/@sbb-esta/lyne-components/autocomplete/index.js",
           "node_modules/@sbb-esta/lyne-components/breadcrumb/index.js",
           "node_modules/@sbb-esta/lyne-components/button/index.js",
           "node_modules/@sbb-esta/lyne-components/calendar/index.js",
           "node_modules/@sbb-esta/lyne-components/card/index.js",
           "node_modules/@sbb-esta/lyne-components/checkbox/index.js",
           "node_modules/@sbb-esta/lyne-components/chip/index.js",
           "node_modules/@sbb-esta/lyne-components/clock/index.js",
           "node_modules/@sbb-esta/lyne-components/container/index.js",
           "node_modules/@sbb-esta/lyne-components/datepicker/index.js",
           "node_modules/@sbb-esta/lyne-components/dialog/index.js",
           "node_modules/@sbb-esta/lyne-components/divider/index.js",
           "node_modules/@sbb-esta/lyne-components/expansion-panel/index.js",
           "node_modules/@sbb-esta/lyne-components/file-selector/index.js",
           "node_modules/@sbb-esta/lyne-components/footer/index.js",
           "node_modules/@sbb-esta/lyne-components/form-error/index.js",
           "node_modules/@sbb-esta/lyne-components/form-field/index.js",
           "node_modules/@sbb-esta/lyne-components/header/index.js",
           "node_modules/@sbb-esta/lyne-components/icon/index.js",
           "node_modules/@sbb-esta/lyne-components/image/index.js",
           "node_modules/@sbb-esta/lyne-components/journey-header/index.js",
           "node_modules/@sbb-esta/lyne-components/journey-summary/index.js",
           "node_modules/@sbb-esta/lyne-components/link/index.js",
           "node_modules/@sbb-esta/lyne-components/link-list/index.js",
           "node_modules/@sbb-esta/lyne-components/loading-indicator/index.js",
           "node_modules/@sbb-esta/lyne-components/logo/index.js",
           "node_modules/@sbb-esta/lyne-components/menu/index.js",
           "node_modules/@sbb-esta/lyne-components/message/index.js",
           "node_modules/@sbb-esta/lyne-components/navigation/index.js",
           "node_modules/@sbb-esta/lyne-components/notification/index.js",
           "node_modules/@sbb-esta/lyne-components/option/index.js",
           "node_modules/@sbb-esta/lyne-components/radio-button/index.js",
           "node_modules/@sbb-esta/lyne-components/select/index.js",
           "node_modules/@sbb-esta/lyne-components/selection-panel/index.js",
           "node_modules/@sbb-esta/lyne-components/signet/index.js",
           "node_modules/@sbb-esta/lyne-components/skiplink-list/index.js",
           "node_modules/@sbb-esta/lyne-components/slider/index.js",
           "node_modules/@sbb-esta/lyne-components/status/index.js",
           "node_modules/@sbb-esta/lyne-components/tabs/index.js",
           "node_modules/@sbb-esta/lyne-components/tag/index.js",
           "node_modules/@sbb-esta/lyne-components/teaser/index.js",
           "node_modules/@sbb-esta/lyne-components/teaser-hero/index.js",
           "node_modules/@sbb-esta/lyne-components/time-input/index.js",
           "node_modules/@sbb-esta/lyne-components/title/index.js",
           "node_modules/@sbb-esta/lyne-components/toast/index.js",
           "node_modules/@sbb-esta/lyne-components/toggle/index.js",
           "node_modules/@sbb-esta/lyne-components/toggle-check/index.js",
           "node_modules/@sbb-esta/lyne-components/popover/index.js",
           "node_modules/@sbb-esta/lyne-components/visual-checkbox/index.js"
        ],
      });
    */
    config.addPlugin(eleventySass, [
        {
            compileOptions: {
                cache: true
            },
            sass: {
                loadPaths: ["node_modules/", "./"],
                sourceMap: false
            },
            dir: {
                input: "src",
                output: "dist/assets/css"
            }
        }]);

    config.addFilter("sortByOrder", sortByOrder);
    config.addFilter("lastOfArray", function(array) {
        return array.slice(-1);}
    );

    config.addFilter("defaultlanguagecontent", (array, currPage) => {
      currPage = currPage.slice(3);
      const pageArr = array.filter((page) => page.url == "/de"+currPage);
      return pageArr;
    });

    config.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: "de",
      });

     config.addFilter("lyneexample", (pattern) => {
        const lyneStories = require('@sbb-esta/lyne-components/dist/collection/storybundle');    
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




            // const rawElement = story.args;
            /*
                if (ignoreArgs.length > 0) {
                    ignoreArgs.forEach((arg) => {
                    rawElement.removeAttribute(arg);
                    });
                }
            */
                //storyObject.elementRaw = rawElement;
                }
                stories.push(storyObject);
            }
        });
        return stories;
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

