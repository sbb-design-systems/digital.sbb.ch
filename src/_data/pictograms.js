const EleventyFetch = require("@11ty/eleventy-fetch");

let url = "https://d1s1onrtynjaa8.cloudfront.net/pictograms/index.json";

const loadjson = async function() {
  return EleventyFetch(url, {
      duration: "1s",
      type: "json"
    });
}
const computedpictograms = async function() {
  const result = await loadjson();
  
  //const pictograms = response.data.pictograms;
  var computepictograms = result.pictograms;
  computepictograms.forEach((pictogram, index) => {
        pictogram.url = "https://d1s1onrtynjaa8.cloudfront.net/pictograms/" + pictogram.name + ".svg";
        pictogram.type = "Pictograms";
        pictogram.category = pictogram.tags.slice(3)[0];
        pictogram.subcategory = pictogram.tags.slice(7)[0];

        
        var withframes = pictogram.tags.indexOf("With-frames");
        if (withframes >= 0) {
            computepictograms.splice(index, 1);
        }
        /*
        var indexmedium = pictogram.tags.indexOf("Size=medium");
        if (indexmedium >= 0) {
            pictogram.tags.splice(indexmedium, 1);
        }
        var indexlarge = pictogram.tags.indexOf("Size=large");
        if (indexlarge >= 0) {
            pictogram.tags.splice(indexlarge, 1);
        }
      */

  });
  
  
  return computepictograms;
  //return result;
}

module.exports = async function() {
    let pictograms = await computedpictograms();
    return [pictograms];
  };