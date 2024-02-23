const EleventyFetch = require("@11ty/eleventy-fetch");

let url = "https://raw.githubusercontent.com/lyne-design-system/lyne-components/master/src/components/header/header/readme.md";

const md = async function() {
  return EleventyFetch(url, {
      duration: "1s",
      type: "text"
    });
}

module.exports = async function() {
    let result = await md();
    return result;
  };
