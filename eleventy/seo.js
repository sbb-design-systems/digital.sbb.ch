// SEO: hreflang-Verweise und Seitenbeschreibung (<meta name="description">, JSON-LD)
const path = require("path");
const { SITE_URL, LANGUAGES, readSourceFile, pageSummary, agentSummary, componentSource } = require("./shared");

// hreflang-Verweise zwischen den Sprachversionen einer Seite. Nur eigenständige Seiten zählen:
// Platzhalter ohne Übersetzung (availablelanguages) oder mit Canonical auf /de/ (cannonical: true)
// verweisen selbst auf Deutsch und dürfen weder Quelle noch Ziel sein.
let hreflangIndex = { source: null, pages: null };

function isSelfCanonical(item) {
    // Nicht freigegebene Lyne-Komponenten (noindex) sind weder Quelle noch Ziel
    if (item.data?.lyneDraft) return false;
    if (item.url.startsWith("/de/")) return true;
    return !item.data.availablelanguages?.length && item.data.cannonical !== true;
}

function hreflangLinks(url, allPages) {
    const lang = typeof url === "string" ? url.split("/")[1] : null;
    if (!LANGUAGES.includes(lang) || !Array.isArray(allPages)) return "";

    if (hreflangIndex.source !== allPages) {
        hreflangIndex = { source: allPages, pages: new Map(allPages.filter((item) => item.url).map((item) => [item.url, item])) };
    }
    const current = hreflangIndex.pages.get(url);
    if (!current || !isSelfCanonical(current)) return "";

    const rest = url.slice(lang.length + 1);
    const alternates = LANGUAGES.filter((l) => {
        const item = hreflangIndex.pages.get(`/${l}${rest}`);
        return item && isSelfCanonical(item);
    });
    if (alternates.length < 2) return "";

    const links = alternates.map((l) => `<link rel="alternate" hreflang="${l}" href="${SITE_URL}/${l}${rest}">`);
    // Startseite: x-default ist die Root, die per Spracherkennung weiterleitet; sonst Deutsch.
    const xDefault = rest === "/" ? `${SITE_URL}/` : alternates.includes("de") ? `${SITE_URL}/de${rest}` : null;
    if (xDefault) links.push(`<link rel="alternate" hreflang="x-default" href="${xDefault}">`);
    return links.join("\n");
}

// Beschreibung für <meta name="description"> und JSON-LD: Komponenten aus der Übersicht, übrige Seiten aus
// alternativetitle bzw. erstem Absatz; leer, wenn nichts Sinnvolles vorhanden ist (dann gilt der Standardtext)
function pageDescription(data, lang, inputPath) {
    const own = String(data.description ?? "").trim();
    if (own) return own;
    if (data.component && typeof data.system === "string") {
        const summary = agentSummary(componentSource(data, lang)).replace(/^[*-]\s+/, "").replace(/\{[.#][^}]*\}/g, "").replace(/[*_`]/g, "").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").trim();
        if (summary) return summary;
    }
    const alternative = String(data.alternativetitle ?? "").trim();
    if (alternative && alternative !== data.title && alternative !== `${data.title}.`) return alternative;
    return inputPath ? pageSummary(readSourceFile(path.relative("src", inputPath))) : "";
}

function seo(eleventyConfig) {
    eleventyConfig.addFilter("hreflangLinks", hreflangLinks);
    eleventyConfig.addFilter("pageDescription", pageDescription);
}

module.exports = Object.assign(seo, { isSelfCanonical });
