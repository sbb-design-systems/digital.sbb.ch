const EleventyFetch = require("@11ty/eleventy-fetch");

let url = "https://d1s1onrtynjaa8.cloudfront.net/icons/index.json";

const loadjson = async function() {
  return EleventyFetch(url, {
      duration: "1s",
      type: "json"
    });
}
const computedicons = async function() {
  const result = await loadjson();
  
  //const icons = response.data.icons;
  var computeicons = result.icons;
  computeicons.forEach((icon, index) => {
      icon.url = "https://d1s1onrtynjaa8.cloudfront.net/icons/" + icon.name + ".svg";
      //icon.type = "KOM";
      //console.log(icon);

      //console.log(icon.tags.indexOf("ui-icons"));
      
      if (icon.tags.includes("ui-icons")) {
          icon.type = "KOM";
          icon.category = icon.tags.slice(-3)[0];
          icon.group = icon.tags.slice(-2)[0];
          icon.size = icon.tags.slice(-1)[0].split("=").pop();
          icon.sizes = [];

          var indexui = icon.tags.indexOf("ui-icons");
          if (indexui >= 0) {
              icon.tags.splice(indexui, 1);
          }
          var indexdash = icon.tags.indexOf("-");
          if (indexdash >= 0) {
              icon.tags.splice(indexdash, 1);
          }
          var indexsmall = icon.tags.indexOf("Size=small");
          if (indexsmall >= 0) {
              icon.tags.splice(indexsmall, 1);
          }
          var indexmedium = icon.tags.indexOf("Size=medium");
          if (indexmedium >= 0) {
              icon.tags.splice(indexmedium, 1);
          }
          var indexlarge = icon.tags.indexOf("Size=large");
          if (indexlarge >= 0) {
              icon.tags.splice(indexlarge, 1);
          }
      }
      if (icon.tags.includes("timetable-icons")) {
          icon.type = "FPL";
          icon.size = "default"
          icon.group = "none"
          if (icon.tags.includes("Attributes")) {
              icon.category = "Attributes";
          }
          if (icon.tags.includes("HIM-CUS")) {
              icon.category = "HIM-CUS";
          }
          if (icon.tags.includes("Product-Brands")) {
              icon.category = "Product-Brands";
          }
          var indexui = icon.tags.indexOf("timetable-icons");
          if (indexui >= 0) {
              icon.tags.splice(indexui, 1);
          }
          var indexdash = icon.tags.indexOf("-");
          if (indexdash >= 0) {
              icon.tags.splice(indexdash, 1);
          }
          var indexattributes = icon.tags.indexOf("Attributes");
          if (indexattributes >= 0) {
              icon.tags.splice(indexattributes, 1);
          }
          var indexhimcus = icon.tags.indexOf("HIM-CUS");
          if (indexhimcus >= 0) {
              icon.tags.splice(indexhimcus, 1);
          }
          var indexbrands = icon.tags.indexOf("Product-Brands");
          if (indexbrands >= 0) {
              icon.tags.splice(indexbrands, 1);
          }
          var indexmodedark = icon.tags.indexOf("dark");
          if (indexmodedark >= 0) {
              icon.mode = "dark";
              icon.tags.splice(indexmodedark, 1);
          }
          var indexmodelight = icon.tags.indexOf("light");
          if (indexmodelight >= 0) {
              icon.mode = "light";
              icon.tags.splice(indexmodelight, 1);
          }
      }
      
  });
  
  computeicons.forEach((icon) => {
      if (icon.type == "KOM") {
      findgroup = undefined;
      findgroup = computeicons.filter(item => item.group == icon.group);
      var templist = undefined;
      var templist = []
      findgroup.forEach((findgroupresult) => {
          templist.push(findgroupresult.size);
      })
      icon.sizes = templist;
      }
  });
  
  return computeicons;
  //return result;
}

module.exports = async function() {
    let icons = await computedicons();
    return [icons];
  };