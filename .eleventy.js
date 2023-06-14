const eleventySass = require("eleventy-sass");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { EleventyI18nPlugin } = require("@11ty/eleventy");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
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
        const lynedemo = `{% from "src/_includes/macros/macros.njk" import lynedemo %}`;

        let collection = collectionApi.getFilteredByGlob(["src/**/*.md", "src/**/*.njk"]);
        collection.forEach((item) => {
          item.template.frontMatter.content = `${svgImage}\n${webpImage}\n${imageWithMode}\n${imageOnGreyBackground}\n${principleImage}\n${buttonGroup}\n${specificationLinks}\n${imageSpec}\n${lynedemo}\n${item.template.frontMatter.content}`
        })
        return collection;
      });

    config.addPlugin(syntaxHighlight);
    config.addPlugin(eleventyNavigationPlugin);
    config.setLibrary('md', markdownLib)
    config.addPassthroughCopy("src/assets/images");
    config.addPassthroughCopy("src/assets/js");
    config.addPassthroughCopy("src/assets/downloads");
    config.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });
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

