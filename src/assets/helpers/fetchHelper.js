// fetchHelper.js
const EleventyFetch = require("@11ty/eleventy-fetch");
const version = require('../../_data/lyne/version');

// Generiere die URL basierend auf den Version-Parametern und einem spezifischen Teil (z.B. "accordion")
const generateUrl = (specificPath) => {
  return `${version.url}${version.branch}${version.path}${specificPath}${version.dok}`;
};

// Fetch-Daten von der generierten URL
const fetchData = async (specificPath) => {
  const url = generateUrl(specificPath);
  return EleventyFetch(url, {
    duration: "1h",
    type: "text"
  });
};

module.exports = fetchData;