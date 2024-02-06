const EleventyFetch = require("@11ty/eleventy-fetch");

let url = "https://lyne-storybook.app.sbb.ch/index.json";

const loadjson = async function() {
  return EleventyFetch(url, {
      duration: "1s",
      type: "json"
    });
}
const storybookstories = async function() {
  const result = await loadjson();

  var stories = result.entries;

  for (const [key, value] of Object.entries(stories)) {
    //console.log(`${key}: ${value}`);

    let titlesplit = value.title.split("/");
    if (titlesplit[0]== "components") {
      value.component = true;
    } else {
      value.component = false
    }
    let lastElement = titlesplit[titlesplit.length - 1];
    value.tag = lastElement;

    if (value.type == "docs") {
      value.component = false;
    } else {
    }

  }




  return stories;

}

module.exports = async function() {
    let icons = await storybookstories();
    return [icons];
  };