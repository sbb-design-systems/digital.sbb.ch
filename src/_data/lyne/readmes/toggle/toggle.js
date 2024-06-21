const EleventyFetch = require("@11ty/eleventy-fetch");

var lyneversion = require('../../lyneversion');

let url = lyneversion.url+lyneversion.branch+lyneversion.path+"toggle/toggle"+lyneversion.dok;

const md = async function() {
  return EleventyFetch(url, {
      duration: "1s",
      type: "text"
    });
}

module.exports = async function() {
    let result = await md();
    //result.replace("](/docs/", "](https://lyne-storybook.app.sbb.ch/?path=/docs/");
    return result;
  };
