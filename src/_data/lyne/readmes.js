// Readme jeder Lyne-Komponentengruppe aus lyne-components (lyne.readmes[ordner]), passend zur installierten Version.
// Ersetzt die früheren implementation.js-Dateien pro Komponente.
const EleventyFetch = require("@11ty/eleventy-fetch");
const { buildCatalog, STORYBOOK_URL } = require("../../../eleventy/lyne-catalog");

module.exports = async () => {
  // Mit Storybook-Index, damit auch Gruppen ohne Custom Element (z. B. Badge) ihr Readme erhalten
  let entries = {};
  try {
    entries = (await EleventyFetch(`${STORYBOOK_URL}/index.json`, { duration: "1h", type: "json" })).entries;
  } catch (error) {
    console.warn(`[lyne] Storybook-Index nicht erreichbar: ${error.message}`);
  }
  const groups = Object.values(buildCatalog(entries).groups);
  const readmes = await Promise.all(
    groups.map(async (group) => {
      try {
        return [group.folder, await EleventyFetch(group.readmeUrl, { duration: "1h", type: "text" })];
      } catch (error) {
        console.warn(`[lyne] Readme für ${group.folder} nicht geladen: ${error.message}`);
        return [group.folder, null];
      }
    })
  );
  return Object.fromEntries(readmes);
};
