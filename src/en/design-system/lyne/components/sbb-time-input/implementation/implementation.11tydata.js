const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = {
    eleventyComputed: {
      implementation: data => {
        let url = "https://raw.githubusercontent.com/lyne-design-system/lyne-components/master/src/components/time-input/readme.md";
        return EleventyFetch(url, {
          duration: "1d",
          type: "text"
        });
      }
    }
  };