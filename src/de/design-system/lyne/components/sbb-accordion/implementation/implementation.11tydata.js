const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = {
    eleventyComputed: {
      implementation: data => {
        let url = "https://raw.githubusercontent.com/lyne-design-system/lyne-components/master/src/components/sbb-accordion/readme.md";
        return EleventyFetch(url, {
          duration: "1d",
          type: "text"
        });
      }
    }
  };