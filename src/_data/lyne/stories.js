const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async () => {
  const result = await EleventyFetch(
    "https://lyne-storybook.app.sbb.ch/index.json",
    { duration: "1s", type: "json" }
  );

  const stories = result.entries;

  Object.values(stories).forEach((value) => {
    const titlesplit = value.title.split("/");
    value.component = titlesplit[0] === "elements" && value.type !== "docs";
    value.tag = titlesplit[titlesplit.length - 1];
  });

  return [stories];
};