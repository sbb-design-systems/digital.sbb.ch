// Lyne-Katalog (lyne.catalog): alle Komponentengruppen aus lyne-components, siehe /eleventy/lyne-catalog.js
const fs = require("fs");
const path = require("path");
const EleventyFetch = require("@11ty/eleventy-fetch");
const { buildCatalog, STORYBOOK_URL } = require("../../../eleventy/lyne-catalog");

// Korrekturen der Elementrollen: "partOf" in src/_data/lyne/components/<name>/config.json
function readPartOf() {
  const dir = path.join(__dirname, "components");
  const result = {};
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name, "config.json");
    if (!fs.existsSync(file)) continue;
    const { partOf } = JSON.parse(fs.readFileSync(file, "utf8"));
    if (partOf) result[name] = partOf;
  }
  return result;
}

module.exports = async () => {
  let entries = {};
  try {
    entries = (await EleventyFetch(`${STORYBOOK_URL}/index.json`, { duration: "1h", type: "json" })).entries;
  } catch (error) {
    console.warn(`[lyne] Storybook-Index nicht erreichbar, Katalog ohne Storybook-Daten: ${error.message}`);
  }
  return buildCatalog(entries, readPartOf());
};
