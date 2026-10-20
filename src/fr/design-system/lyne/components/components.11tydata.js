// Lyne-Komponenten mit "released": false (automatisch angelegt, noch nicht freigegeben):
// noindex, nicht in Sitemap, hreflang, Markdown-Ausgabe und llms.txt; Entwurfs-Hinweis auf der Seite.
// (Bewusst nicht über hideInSitemap: das markiert Weiterleitungsseiten für redirects.txt.)
const isDraft = (data) =>
  data.system === "lyne" && !!data.component && data.lyne?.components?.[data.component]?.config?.released === false;

module.exports = {
  eleventyComputed: {
    lyneDraft: (data) => isDraft(data),
  },
};
