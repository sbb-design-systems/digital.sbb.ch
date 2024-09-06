const EleventyFetch = require("@11ty/eleventy-fetch");

var version = require('../../version');

let url = version.url+version.branch+"/src/elements-experimental/"+"pearl-chain"+version.dok;

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
