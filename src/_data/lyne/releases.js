/*

const lyneComponentsVersion = require('@sbb-esta/lyne-components/package.json').version;
const lyneDesignTokensVersion = require('@sbb-esta/lyne-design-tokens/package.json').version;
//const sbbIconsVersion = require('@sbb-esta/icons/package.json').version;
//const sbbPictogramsVersion = require('@sbb-esta/pictograms/package.json').version;


module.exports = function() {
    return {
        lyneComponentsVersion: lyneComponentsVersion,
        lyneDesignTokensVersion: lyneDesignTokensVersion,
        //sbbIconsVersion: sbbIconsVersion,
        //sbbPictogramsVersion: sbbPictogramsVersion,
    };
  };

  */


const EleventyFetch = require("@11ty/eleventy-fetch");

let url = "https://api.github.com/repos/lyne-design-system/lyne-components/releases";

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