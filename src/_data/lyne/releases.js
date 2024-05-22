const EleventyFetch = require("@11ty/eleventy-fetch");

let url = "https://api.github.com/repos/sbb-design-systems/lyne-components/releases";

const json = async function() {
  return EleventyFetch(url, {
      duration: "1s",
      type: "json"
    });
}

module.exports = async function() {
    let releases = await json();
    return releases;
  };