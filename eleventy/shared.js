// Gemeinsame Hilfsfunktionen für die Eleventy-Module (SEO, Agents, Lyne)
const fs = require("fs");
const path = require("path");

const SITE_URL = "https://digital.sbb.ch";
const LANGUAGES = ["de", "fr", "it", "en"];

function readSourceFile(relativePath) {
    const file = path.join("src", relativePath);
    return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

// Kurzbeschreibung einer Inhaltsseite für llms.txt: erster Absatz mit Fliesstext, ohne Front Matter,
// Überschriften, Template-Code, HTML, Listen und Tabellen; höchstens rund 240 Zeichen.
function pageSummary(source) {
    if (typeof source !== "string") return "";
    const body = source.replace(/^---\n[\s\S]*?\n---\n/, "");
    // HTML-Tags entfernen (Text in Links bleibt), Zeilen mit Template-Code auslassen
    const text = body
        .split("\n")
        .filter((line) => !/^\s*([#{<!|>*\-]|\d+\.|```)/.test(line) && !/\{\{|\{%/.test(line))
        .map((line) => line.replace(/<[^>]+>/g, "").replace(/\{[.#][^}]*\}/g, "").replace(/\s+/g, " ").trim())
        .find((line) => line.length > 40);
    if (!text) return "";
    // Ganzer Absatz, bei Bedarf an einer Wortgrenze gekürzt (Satzgrenzen sind wegen Adressen wie sbb.ch unzuverlässig)
    return text.length <= 240 ? text : `${text.slice(0, 240).replace(/\s+\S*$/, "")} …`;
}

// Erster Satz nach der ersten Überschrift einer Übersicht (Kurzbeschreibung für llms.txt)
function agentSummary(markdown) {
    if (typeof markdown !== "string") return "";
    const lines = markdown.split("\n").map((line) => line.trim());
    const start = lines.findIndex((line) => line.startsWith("#"));
    return lines.slice(start + 1).find((line) => line && !line.startsWith("#") && !line.startsWith("!")) ?? "";
}

// Übersicht oder Inhalt einer Komponentenseite (Komponenten mit bzw. ohne Tabs)
function componentSource(data, lang) {
    const dataPath = `_data/${data.system}/components/${data.component}/`;
    return readSourceFile(`${dataPath}overview_${lang}.md`) || readSourceFile(`${dataPath}content_${lang}.md`);
}

module.exports = { SITE_URL, LANGUAGES, readSourceFile, pageSummary, agentSummary, componentSource };
