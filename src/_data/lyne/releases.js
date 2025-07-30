const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async () => {
  return EleventyFetch(
    "https://api.github.com/repos/sbb-design-systems/lyne-components/releases",
    {
      duration: "1s",
      type: "json"
    }
  );
};