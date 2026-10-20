const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const parse5 = require("parse5");
const agentPages = require("./agent-markdown");
const litPlugin = require('@lit-labs/eleventy-plugin-lit');
const lodash = require("lodash");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require('markdown-it-attrs')
const md = new markdownIt();
const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: false
}
const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs).use(markdownItAnchor).disable('code');

// Cache-Busting: hängt einen Content-Hash an Asset-URLs an (z. B. /assets/css/styles.css?v=1a2b3c4d),
// damit nginx sie als "immutable" ausliefern kann. Gesucht wird zuerst im Build-Output
// (Sass, esbuild, cpx schreiben direkt nach dist), dann in src (Passthrough-Copy).
const assetHashCache = new Map();
function assetHash(url) {
    if (typeof url !== "string") return url;
    const relPath = url.split("?")[0].replace(/^\//, "");
    const file = [path.join("dist", relPath), path.join("src", relPath)].find((candidate) => fs.existsSync(candidate));
    if (!file) return url;

    const { mtimeMs, size } = fs.statSync(file);
    const cacheKey = `${file}:${mtimeMs}:${size}`;
    if (!assetHashCache.has(cacheKey)) {
        const hash = crypto.createHash("md5").update(fs.readFileSync(file)).digest("hex").slice(0, 8);
        assetHashCache.set(cacheKey, hash);
    }
    return `${url}?v=${assetHashCache.get(cacheKey)}`;
}

// Liest die Pixelmasse einer WebP- oder SVG-Datei, ohne zusätzliche Abhängigkeit.
function readImageSize(file) {
    if (file.endsWith(".svg")) {
        const svgTag = fs.readFileSync(file, "utf8").match(/<svg\b[^>]*>/i)?.[0] ?? "";
        const attr = (name) => svgTag.match(new RegExp(`\\s${name}="([\\d.]+)(?:px)?"`))?.[1];
        const viewBox = svgTag.match(/viewBox="[\d.-]+[\s,]+[\d.-]+[\s,]+([\d.]+)[\s,]+([\d.]+)"/);
        const width = attr("width") ?? viewBox?.[1];
        const height = attr("height") ?? viewBox?.[2];
        return width && height ? { width: Math.round(width), height: Math.round(height) } : null;
    }

    const buf = fs.readFileSync(file);
    // Einzelne .webp-Dateien sind in Wahrheit PNGs
    if (buf.toString("ascii", 1, 4) === "PNG") {
        return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
    }
    if (buf.toString("ascii", 0, 4) !== "RIFF" || buf.toString("ascii", 8, 12) !== "WEBP") return null;
    switch (buf.toString("ascii", 12, 16)) {
        case "VP8 ":
            return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
        case "VP8L":
            return {
                width: 1 + (((buf[22] & 0x3f) << 8) | buf[21]),
                height: 1 + (((buf[24] & 0x0f) << 10) | (buf[23] << 2) | ((buf[22] & 0xc0) >> 6)),
            };
        case "VP8X":
            return { width: 1 + buf.readUIntLE(24, 3), height: 1 + buf.readUIntLE(27, 3) };
        default:
            return null;
    }
}

// Liefert width/height-Attribute für ein Bild, damit der Browser den Platz vor dem Laden
// reserviert (verhindert Layout Shifts). Lyne setzt global img { aspect-ratio: var(--sbb-image-aspect-ratio) }
// und hebelt damit das Seitenverhältnis aus width/height aus – deshalb wird es zusätzlich über die
// Lyne-Variable gesetzt. "auto" lässt nach dem Laden das echte Bildverhältnis gewinnen.
// Fehlt die Datei, bleibt das Attribut leer.
const imageSizeCache = new Map();
function imageAttrs(url) {
    if (typeof url !== "string") return "";
    const file = path.join("src", url.split("?")[0].replace(/^\//, ""));
    if (!fs.existsSync(file)) return "";

    const cacheKey = `${file}:${fs.statSync(file).mtimeMs}`;
    if (!imageSizeCache.has(cacheKey)) {
        imageSizeCache.set(cacheKey, readImageSize(file));
    }
    const size = imageSizeCache.get(cacheKey);
    return size
        ? `width="${size.width}" height="${size.height}" style="--sbb-image-aspect-ratio: auto ${size.width} / ${size.height}"`
        : "";
}

// Lyne blendet nicht aktive Tabs mit display: none aus und wählt den aktiven Tab erst per JavaScript.
// Bis das Bundle geladen ist, wären alle Tab-Inhalte leer und der Footer springt danach nach unten
// (CLS). Deshalb erhält in jeder Tab-Gruppe der erste <sbb-tab> das SSR-Attribut state--active.
// Lyne übernimmt state--* beim Start als internen Zustand und entfernt das Attribut, Tab-Wechsel
// funktionieren danach wie gewohnt. (Ein active am <sbb-tab-label> bricht das Lit-SSR ab.)
function activateFirstTab(html) {
    const groupRegex = /<sbb-tab-group\b([^>]*)>/g;
    const insertAttribute = (source, from, tagRegex, attribute) => {
        tagRegex.lastIndex = from;
        const match = tagRegex.exec(source);
        if (!match || new RegExp(`\\s${attribute}(\\s|=|>)`).test(match[0])) return source;
        const insertAt = match.index + match[0].length - 1;
        return source.slice(0, insertAt) + ` ${attribute}` + source.slice(insertAt);
    };

    let result = html;
    let match;
    while ((match = groupRegex.exec(result))) {
        const initialIndex = match[1].match(/initial-selected-index="(\d+)"/)?.[1];
        if (initialIndex && initialIndex !== "0") continue;
        const from = match.index + match[0].length;
        result = insertAttribute(result, from, /<sbb-tab(?=[\s>])[^>]*>/g, "state--active");
    }
    return result;
}

// Lyne blendet Text- und Icon-Bereiche aus, solange die Zustände slotted, slotted-<name> und
// has-icon-name fehlen (z. B. Header-Buttons, Tab-Labels, Kartenlinks, Teaser-Bilder). Diese setzt
// Lyne erst per JavaScript, im SSR-Markup fehlen sie. Der Transform leitet sie wie Lyne aus dem
// Light DOM ab und setzt sie als state--*-Attribute, die Lyne beim Start übernimmt.
// Nur Elemente mit Declarative Shadow DOM (also SSR-gerendert) werden angepasst, und nur Slots,
// die im Shadow DOM tatsächlich existieren.
function addLyneSlotStates(html) {
    const insertions = [];
    const attr = (node, name) => node.attrs?.find((a) => a.name === name)?.value;
    const isTemplate = (node) => node.nodeName === "template";

    const collectSlots = (node, slots) => {
        for (const child of node.childNodes ?? []) {
            // Shadow DOM verschachtelter Komponenten gehört nicht zum Host
            if (isTemplate(child) && attr(child, "shadowrootmode")) continue;
            if (child.nodeName === "slot") slots.add(attr(child, "name") ?? "");
            collectSlots(isTemplate(child) ? child.content : child, slots);
        }
        return slots;
    };

    const visit = (node) => {
        for (const child of node.childNodes ?? []) visit(isTemplate(child) ? child.content : child);
        if (!node.nodeName?.startsWith("sbb-") || !node.sourceCodeLocation?.startTag) return;

        const shadowRoot = node.childNodes.find((child) => isTemplate(child) && attr(child, "shadowrootmode"));
        if (!shadowRoot) return;
        const slots = collectSlots(shadowRoot.content, new Set());

        const states = new Set();
        if (attr(node, "icon-name")) states.add("has-icon-name");
        for (const child of node.childNodes) {
            if (child === shadowRoot || child.nodeName === "#comment") continue;
            if (child.nodeName === "#text") {
                if (child.value.trim() && slots.has("")) states.add("slotted");
                continue;
            }
            const slotName = attr(child, "slot");
            if (slotName === undefined && slots.has("")) states.add("slotted");
            else if (slotName && slots.has(slotName)) states.add(`slotted-${slotName}`);
        }

        const existing = new Set(node.attrs.map((a) => a.name));
        const newAttrs = [...states].map((state) => `state--${state}`).filter((name) => !existing.has(name));
        if (newAttrs.length) {
            insertions.push({ offset: node.sourceCodeLocation.startTag.endOffset - 1, text: " " + newAttrs.join(" ") });
        }
    };

    visit(parse5.parse(html, { sourceCodeLocationInfo: true }));
    insertions.sort((a, b) => a.offset - b.offset);
    const parts = [];
    let position = 0;
    for (const { offset, text } of insertions) {
        parts.push(html.slice(position, offset), text);
        position = offset;
    }
    parts.push(html.slice(position));
    return parts.join("");
}

// hreflang-Verweise zwischen den Sprachversionen einer Seite. Nur eigenständige Seiten zählen:
// Platzhalter ohne Übersetzung (availablelanguages) oder mit Canonical auf /de/ (cannonical: true)
// verweisen selbst auf Deutsch und dürfen weder Quelle noch Ziel sein.
const SITE_URL = "https://digital.sbb.ch";
const LANGUAGES = ["de", "fr", "it", "en"];
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

// Markdown-Ausgabe für Agents (index.md pro Komponente, llms.txt): Quelltexte ohne Nunjucks-Makros
// und ohne Darstellungs-Markup, Bilder und Links als absolute URLs.
function agentMarkdown(source) {
    if (typeof source !== "string") return "";
    const absolute = (url) => (url.startsWith("/") ? SITE_URL + url : url);
    return source
        // Bild-Makros ({{ imageOnGreyBackground({ url: '...', alt: '...' }) }} usw.) → Markdown-Bild
        .replace(/\{\{\s*(\w+)\(\{([\s\S]*?)\}\)\s*\}\}/g, (match, macro, params) => {
            const url = params.match(/url:\s*['"]([^'"]+)['"]/)?.[1];
            const alt = params.match(/alt:\s*['"]([^'"]*)['"]/)?.[1] ?? "";
            if (!url) return "";
            const extension = macro === "svgImage" ? ".svg" : macro === "imageWithMode" ? "-light.webp" : ".webp";
            return `![${alt}](${absolute(url)}${extension})`;
        })
        .replace(/\{%[\s\S]*?%\}/g, "")
        .replace(/<\/?sbb-table-wrapper>/g, "")
        .replace(/^\{[.#][^}\n]*\}\s*$/gm, "")
        .replace(/<!--[\s\S]*?-->/g, "")
        // Relative Storybook-Links aus den Lyne-Readmes (/docs/…, /story/…)
        .replace(/\]\(\/(docs|story)\//g, "](https://lyne-elements.app.sbb.ch/?path=/$1/")
        .replace(/\]\((\/[^)\s]*)\)/g, (match, url) => `](${absolute(url)})`)
        .replace(/\n{3,}/g, "\n\n")
        .trim();
}

// Verschiebt alle Markdown-Überschriften ausserhalb von Code-Blöcken um eine Ebene nach unten
function demoteHeadings(markdown) {
    if (typeof markdown !== "string") return markdown;
    let inCodeBlock = false;
    return markdown.split("\n").map((line) => {
        if (/^\s*(```|~~~)/.test(line)) inCodeBlock = !inCodeBlock;
        return !inCodeBlock && /^#{1,5}\s/.test(line) ? "#" + line : line;
    }).join("\n");
}

// Erster Satz nach der ersten Überschrift einer Übersicht (Kurzbeschreibung für llms.txt)
function agentSummary(markdown) {
    if (typeof markdown !== "string") return "";
    const lines = markdown.split("\n").map((line) => line.trim());
    const start = lines.findIndex((line) => line.startsWith("#"));
    return lines.slice(start + 1).find((line) => line && !line.startsWith("#") && !line.startsWith("!")) ?? "";
}

// Doku-Status einer Lyne-Komponente: "complete", "in progress" oder "missing", abgeleitet aus den
// redaktionellen Dateien (Übersicht in de und en). "in progress" kann in der config
// manuell gesetzt werden (status.documentation).
// Wird auf jeder Seite für jede Komponente der Liste aufgerufen: Ergebnis pro Build puffern
const documentationStatusCache = new Map();
function lyneDocumentationStatus(key, config) {
    const cacheKey = `${key}:${JSON.stringify(config?.tabs ?? null)}:${config?.status?.documentation}:${!!config?.internal}:${config?.hasTabs}`;
    if (!documentationStatusCache.has(cacheKey)) documentationStatusCache.set(cacheKey, computeDocumentationStatus(key, config));
    return documentationStatusCache.get(cacheKey);
}

function computeDocumentationStatus(key, config) {
    if (!config) return "missing";
    // Interne Hilfselemente brauchen keine Gestaltungsrichtlinien
    if (config.internal) return "not required";
    if (config.status?.documentation === "in progress") return "in progress";
    const dir = path.join("src/_data/lyne/components", key);
    const has = (file) => fs.existsSync(path.join(dir, file));
    const required = config.hasTabs === false
        ? [["content_de.md", "content_de.njk"], ["content_en.md", "content_en.njk"]]
        // Die Anatomie-Tabellen sind entfallen: Aufbau zeigt der Elemente-Baum, Regeln stehen in der Übersicht
        : config.tabs?.hasOverview === false ? [] : [["overview_de.md"], ["overview_en.md"]];
    const present = required.filter((alternatives) => alternatives.some(has)).length;
    return present === required.length ? "complete" : present === 0 ? "missing" : "in progress";
}

// Figma-Status: nur wenn in der config ein gültiger Figma-Link hinterlegt ist ("figmaUrl")
const figmaUrl = (config) => (/^https:\/\/(www\.)?figma\.com\//.test(config?.figmaUrl ?? "") ? config.figmaUrl : null);

// Ähnliche Lyne-Komponenten (Karte im Übersichtstab, Markdown-Version): manuell gepflegt ("similar"),
// gilt automatisch in beide Richtungen. Verlinkt werden nur freigegebene Komponenten.
let relationsCache = { source: null, relations: null };
function computeLyneRelations(lyneData) {
    const configs = lyneData?.components ?? {};
    const keys = Object.keys(configs).filter((key) => configs[key]?.config?.list === "components");
    const isLinkable = (key) => keys.includes(key) && configs[key].config.released !== false;
    const list = (value) => (Array.isArray(value) ? value : []);
    const label = (key) => (configs[key]?.config?.tag ?? key).replace(/\b\w/g, (c) => c.toUpperCase());

    const relations = {};
    for (const key of keys) {
        const similar = new Set(list(configs[key].config.similar));
        for (const other of keys) if (list(configs[other].config.similar).includes(key)) similar.add(other);
        relations[key] = {
            similar: [...similar]
                .filter((target) => target !== key && isLinkable(target))
                .map((target) => ({ key: target, label: label(target) }))
                .sort((a, b) => a.label.localeCompare(b.label)),
        };
    }
    return relations;
}

function lyneRelations(key, lyneData) {
    if (relationsCache.source !== lyneData) relationsCache = { source: lyneData, relations: computeLyneRelations(lyneData) };
    return relationsCache.relations[key] ?? { similar: [] };
}

// Beziehungen für die Karte im Übersichtstab: Lyne nur "Ähnlich", andere Design Systeme aus der config
// (similar, childs, isChildOf). Einträge ohne eigene Seite erscheinen ohne Link (linked: false).
function componentRelations(key, system, systemData, lyneData) {
    if (system === "lyne") {
        const relations = lyneRelations(key, lyneData);
        const linked = (items) => items.map((item) => ({ ...item, linked: true }));
        return { similar: linked(relations.similar), contains: [], usedIn: [] };
    }
    const components = systemData?.components ?? {};
    const config = components[key]?.config ?? {};
    const items = (values) =>
        (Array.isArray(values) ? values : []).map((value) => {
            const tag = components[value]?.config?.tag;
            return { key: tag ?? value, label: (tag ?? value).replace(/\b\w/g, (c) => c.toUpperCase()), linked: !!tag };
        });
    return { similar: items(config.similar), contains: items(config.childs), usedIn: items(config.isChildOf) };
}

// Abgleich lyne-components ↔ digital.sbb.ch für den Abdeckungsbericht (/de/design-system/lyne/abdeckung/)
function lyneCoverage(lyneData) {
    const catalog = lyneData?.catalog ?? { groups: {} };
    const configs = lyneData?.components ?? {};
    const has = (key, file) => fs.existsSync(path.join("src/_data/lyne/components", key, file));
    const rows = Object.values(catalog.groups).map((group) => {
        const key = group.folder;
        const config = configs[key]?.config;
        const internal = !!config?.internal;
        const overviewRequired = !internal && config?.tabs?.hasOverview !== false;
        return {
            key,
            name: key.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
            experimental: group.experimental,
            elements: group.elements.map((e) => e.tag),
            structure: group.structure,
            structureCorrected: !!config?.partOf,
            hasPage: !!config,
            released: !!config && config.released !== false,
            internal: !!config?.internal,
            inNavigation: !!config?.showInFirstLevel,
            figmaUrl: figmaUrl(config),
            documentation: lyneDocumentationStatus(key, config),
            overview: overviewRequired ? { de: has(key, "overview_de.md"), en: has(key, "overview_en.md") } : null,
            // Vorschau im Übersichts-Tab: Markup aus playground.html
            playground: has(key, "playground.html"),
            categories: config?.categories?.length > 0,
            pageUrl: config ? `/de/design-system/lyne/components/${key}/` : null,
            storybookUrl: group.storybook?.docsUrl ?? null,
            githubUrl: group.githubUrl,
        };
    });
    const order = (row) => (!row.hasPage ? 0 : !row.released ? 1 : row.documentation !== "complete" ? 2 : 3);
    rows.sort((a, b) => order(a) - order(b) || a.key.localeCompare(b.key));
    // Manuelle Beziehungen auf unbekannte Komponenten (Tippfehler, umbenannte Komponenten)
    const relationIssues = Object.entries(configs)
        .filter(([, entry]) => entry?.config?.list === "components")
        .flatMap(([key, entry]) =>
            ["similar"].flatMap((field) =>
                (Array.isArray(entry.config[field]) ? entry.config[field] : [])
                    .filter((target) => target === key || !configs[target])
                    .map((target) => `${key}: ${field} → ${target}`)
            )
        );
    const orphans = Object.entries(configs)
        .filter(([key, entry]) => entry?.config?.list === "components" && !catalog.groups[key])
        .map(([key]) => key);
    const count = (predicate) => rows.filter(predicate).length;
    return {
        version: catalog.tag,
        rows,
        orphans,
        relationIssues,
        storybookWithoutGroup: catalog.storybookWithoutGroup ?? [],
        excluded: catalog.excluded ?? [],
        summary: {
            total: rows.length,
            experimental: count((r) => r.experimental),
            withoutPage: count((r) => !r.hasPage),
            drafts: count((r) => r.hasPage && !r.released),
            released: count((r) => r.released),
            documentationComplete: count((r) => r.released && r.documentation === "complete"),
            withoutFigma: count((r) => r.released && !r.figmaUrl && !r.internal),
            withoutPlayground: count((r) => r.released && !r.playground && !r.internal),
        },
    };
}

// Öffentlicher Komponentenindex für Agents (/lyne-components.json): nur freigegebene Komponenten
function lyneComponentIndex(lyneData) {
    const catalog = lyneData?.catalog ?? { groups: {} };
    const configs = lyneData?.components ?? {};
    const components = Object.values(catalog.groups)
        .filter((group) => configs[group.folder]?.config && configs[group.folder].config.released !== false)
        .map((group) => {
            const config = configs[group.folder].config;
            const languages = ["de", "en"].filter((lang) => config.language?.[lang]);
            const page = (lang) => `${SITE_URL}/${lang}/design-system/lyne/components/${group.folder}/`;
            return {
                name: group.folder,
                package: group.package,
                // single | composite | grouped | collection, Rollen pro Element: main, variant, part, group
                structure: group.structure,
                elements: group.elements,
                experimental: group.experimental,
                internal: !!config.internal,
                figma: figmaUrl(config),
                documentation: lyneDocumentationStatus(group.folder, config),
                context: config.status?.context ?? null,
                categories: config.categories ?? [],
                urls: {
                    page: Object.fromEntries(languages.map((lang) => [lang, page(lang)])),
                    markdown: Object.fromEntries(languages.map((lang) => [lang, `${page(lang)}index.md`])),
                    storybook: group.storybook?.docsUrl ?? null,
                    readme: group.githubUrl,
                },
            };
        });
    return JSON.stringify({ lyneVersion: catalog.version, generated: new Date().toISOString(), components }, null, 2);
}

// Kurzhinweise zum Status für llms.txt, z. B. "experimental, guidelines in progress"
function lyneStatusLabels(key, config, lyneData) {
    const labels = [];
    if (lyneData?.catalog?.groups?.[key]?.experimental) labels.push("experimental");
    if (config?.internal) labels.push("internal helper");
    const documentation = lyneDocumentationStatus(key, config);
    if (documentation !== "complete" && documentation !== "not required") labels.push(documentation === "missing" ? "no design guidelines yet" : "guidelines in progress");
    return labels.join(", ");
}

// Übersicht einer Lyne-Komponente aufteilen: "intro" bis vor die Überschrift "## Regeln." (Übersichts-Tab),
// "rules" ab dieser Überschrift (Anwendungs-Tab). Ohne Regeln-Abschnitt ist "rules" leer.
const RULES_HEADING = /^##\s+(Regeln|Rules|Règles|Regole)\b/m;
function overviewSection(markdown, part) {
    const text = String(markdown ?? "");
    const match = text.match(RULES_HEADING);
    if (!match) return part === "intro" ? text : "";
    return part === "intro" ? text.slice(0, match.index) : text.slice(match.index);
}

function readSourceFile(relativePath) {
    const file = path.join("src", relativePath);
    return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function storybookDocsUrl(storybookId, stories) {
    const entries = Object.values(Array.isArray(stories) ? stories[0] ?? {} : stories ?? {});
    const docs = entries.find((entry) => entry.type === "docs" && entry.tag === storybookId && entry.title?.startsWith("elements"));
    return docs ? `https://lyne-elements.app.sbb.ch/?path=/docs/${docs.id}` : "";
}

function sortByOrder(values) {
    let vals = [...values];     // this *seems* to prevent collection mutation...
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
}

function appendDotToHeadings(content) {
    const lines = content.split("\n");
    let inCodeBlock = false;

    return lines.map((line) => {
        if (/^\s*(```|~~~)/.test(line)) {
            inCodeBlock = !inCodeBlock;
            return line;
        }
        if (inCodeBlock) {
            return line;
        }

        return line.replace(/^(\s{0,3}#{1,6}\s+)(.+?)(\s*\{[^}]*\})?\s*$/, (match, prefix, text, attrs) => {
            // optionale schliessende Hashes ("## Titel ##") entfernen
            let title = text.replace(/\s+#+\s*$/, "").trimEnd();
            // schliessende Markdown-Zeichen ignorieren, damit "**Fertig!**" erkannt wird
            const visibleEnd = title.replace(/[*_`~]+$/, "");
            if (/[.!?]$/.test(visibleEnd)) {
                return match; // Punkt, Frage- oder Ausrufezeichen schon da
            }
            return prefix + title + "." + (attrs || "");
        });
    }).join("\n");
}

module.exports = async function(eleventyConfig) {
    const { EleventyI18nPlugin } = await import("@11ty/eleventy");
    // Eleventy v4 uses its async fork of Nunjucks. Use that same runtime here so
    // rendered macros remain marked as safe after their Promise resolves.
    const { default: nunjucks } = await import("@11ty/nunjucks");

    const macroNames = [
        "imageWithMode",
        "imageOnGreyBackground",
        "imageSpec",
        "principleImage",
        "webpImage",
        "svgImage",
        "buttonGroup",
        "specificationLinks",
        "lynePlayground",
        "lyneExamples",
        "lyneComponentLinks"
    ];

    eleventyConfig.amendLibrary("njk", (env) => {
        macroNames.forEach((macroName) => {
            const macroTemplate = `{% from "macros/macros.njk" import ${macroName} %}{{ ${macroName}(params) | safe }}`;
            env.addGlobal(macroName, (params = {}) => {
                return env
                    .renderString(macroTemplate, { params })
                    .then((renderedMacro) => new nunjucks.runtime.SafeString(renderedMacro));
            });
        });
    });

    eleventyConfig.setQuietMode(true);

    // Nur auf dem lokalen Dev-Server (eleventy --serve, npm start): ausgeblendete Komponenten
    // ("showInFirstLevel": false, Entwürfe) erscheinen trotzdem in Übersicht und Sidebar.
    // Beim Build (npm run build) bleibt es bei der Regel aus der config.
    eleventyConfig.addGlobalData("showHiddenComponents", () =>
        process.env.ELEVENTY_RUN_MODE === "serve" && process.env.BUILD_MODE !== "production");

    // Enable SSR only for production builds.
    if (process.env.BUILD_MODE === 'production') {
           
            eleventyConfig.setQuietMode(false);
            console.log(`Activated SSR plugin`);
            eleventyConfig.addPlugin(litPlugin, {
                mode: 'worker',
                componentModules: [
                    './node_modules/@sbb-esta/lyne-elements/index.js',
                    './node_modules/@sbb-esta/lyne-elements-experimental/index.js',
                ],
            });
            
        } 
    else { 
       // console.log(`SSR plugin not active`);
    }


    eleventyConfig.setLibrary('md', markdownLib)
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy("src/assets/videos");
    eleventyConfig.addPassthroughCopy("src/assets/js");
    eleventyConfig.addPassthroughCopy("src/assets/fonts");
    eleventyConfig.addPassthroughCopy("src/assets/downloads");
    eleventyConfig.addPassthroughCopy("src/assets/studies");
    eleventyConfig.addPassthroughCopy("src/assets/templates");
    eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });
    eleventyConfig.addPassthroughCopy({ 'src/googlec598c9eee38cf153.html': '/googlec598c9eee38cf153.html' });

    eleventyConfig.addPreprocessor("macro-inject", ".njk,.md", (data, content) => {
        return `{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}\n` + content;
    }); 
    eleventyConfig.addWatchTarget("src/assets/css/**/*.scss");
    eleventyConfig.addWatchTarget("dist/assets/css/**/*.css");
    
    eleventyConfig.addFilter("sortByOrder", sortByOrder);
    eleventyConfig.addFilter("assetHash", assetHash);
    eleventyConfig.addFilter("imageAttrs", imageAttrs);
    eleventyConfig.addFilter("hreflangLinks", hreflangLinks);
    eleventyConfig.addFilter("agentMarkdown", agentMarkdown);
    eleventyConfig.addFilter("readSourceFile", readSourceFile);
    eleventyConfig.addFilter("overviewSection", overviewSection);
    eleventyConfig.addFilter("demoteHeadings", demoteHeadings);
    eleventyConfig.addFilter("agentSummary", agentSummary);
    eleventyConfig.addFilter("lyneDocumentationStatus", lyneDocumentationStatus);
    eleventyConfig.addFilter("lyneRelations", lyneRelations);
    // Text mit `Code` (z. B. Lyne-Beschreibungen) als HTML: maskieren, Backticks zu <code>
    eleventyConfig.addFilter("inlineCode", (text) =>
        String(text ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/`([^`]+)`/g, "<code>$1</code>")
    );
    eleventyConfig.addFilter("componentRelations", componentRelations);
    eleventyConfig.addFilter("figmaUrl", figmaUrl);
    eleventyConfig.addFilter("fileExists", (file) => typeof file === "string" && fs.existsSync(file));
    eleventyConfig.addFilter("lyneCoverage", lyneCoverage);
    eleventyConfig.addFilter("lyneComponentIndex", lyneComponentIndex);
    eleventyConfig.addFilter("lyneStatusLabels", lyneStatusLabels);

    // Inhaltsseiten mit Markdown-Version (agent-markdown.js): eigenständig, keine Weiterleitung
    // Theme-Demoseiten (theme.njk) haben keinen Hauptinhalt und erhalten keine Markdown-Version
    const isAgentPage = (item) =>
        agentPages.isAgentPageUrl(item?.url) && !item.data?.redirect && item.data?.layout !== "theme.njk" && isSelfCanonical(item);
    eleventyConfig.addFilter("isAgentPage", (url) => agentPageUrls.has(url));
    // Einträge für einen llms.txt-Abschnitt: { url, title, description }
    eleventyConfig.addFilter("agentPagesInSection", (allPages, lang, section, lyneData) =>
        (allPages ?? [])
            .filter((item) => typeof item.url === "string" && item.url.startsWith(`/${lang}${section}`) && isAgentPage(item))
            .sort((a, b) => a.url.localeCompare(b.url))
            .map((item) => {
                const data = item.data ?? {};
                // Komponentenseiten aller Design Systeme (lyne, mobile, lean, …) und Lyne-Templates
                const system = data[data.system] ?? lyneData;
                const tag = system?.components?.[data.component]?.config?.tag ?? lyneData?.templates?.[data.template]?.config?.tag;
                const title = data.title || (tag ? tag.replace(/\b\w/g, (c) => c.toUpperCase()) : item.url);
                const description = (data.alternativetitle ?? "").replace(/ Lyne\.$/, "");
                const redundant = !description || description === title || description === `${title}.`;
                return { url: item.url, title, description: redundant ? "" : description };
            })
    );
    // Einzige Quelle für die Seiten mit Markdown-Version; versteckte Seiten
    // (eleventyExcludeFromCollections) sind in getAll() nicht enthalten
    const agentPageUrls = new Set();
    eleventyConfig.addCollection("agentPages", (collectionApi) => {
        const items = collectionApi.getAll().filter(isAgentPage);
        agentPageUrls.clear();
        items.forEach((item) => agentPageUrls.add(item.url));
        return items;
    });
    // Im Watch-Modus können sich Inhaltsdateien zwischen zwei Builds ändern
    eleventyConfig.on("eleventy.before", () => {
        documentationStatusCache.clear();
        relationsCache = { source: null, relations: null };
    });
    eleventyConfig.on("eleventy.after", ({ results, dir }) => {
        const written = agentPages.writeAgentPages((results ?? []).filter((result) => agentPageUrls.has(result.url)), dir?.output ?? "dist");
        if (written) console.log(`[agent-markdown] ${written} Markdown-Seiten geschrieben`);
    });

    eleventyConfig.addTransform("trim-text-output", function (content) {
        return /\.(md|txt)$/.test(this.page.outputPath || "") ? content.trim() + "\n" : content;
    });
    eleventyConfig.addFilter("storybookDocsUrl", storybookDocsUrl);

    eleventyConfig.addFilter("sortLyneComponentsByOrder", (obj) => {
        if (!obj || typeof obj !== "object") {
            return obj;
        }

        const entries = Object.entries(obj);
        entries.sort(([, a], [, b]) => {
            const orderA = a?.config?.order ?? Number.POSITIVE_INFINITY;
            const orderB = b?.config?.order ?? Number.POSITIVE_INFINITY;
            return orderA - orderB;
        });

        return Object.fromEntries(entries);
    });

    eleventyConfig.addFilter("sortColorsByOrder", (obj) => {
        if (!obj || typeof obj !== "object") {
            return obj;
        }

        const entries = Object.entries(obj);
        entries.sort(([, a], [, b]) => {
            const orderA = a?.order ?? Number.POSITIVE_INFINITY;
            const orderB = b?.order ?? Number.POSITIVE_INFINITY;
            return orderA - orderB;
        });

        return Object.fromEntries(entries);
    });  

    // Custom filter to capitalize each word in a string
    eleventyConfig.addFilter("capitalizeWords", function(value) {
    if (typeof value !== 'string') {
      return ''; // or handle the undefined case as needed
    }
  
    return value.replace(/\b\w/g, char => char.toUpperCase());
  });  

    eleventyConfig.addFilter("lastOfArray", function(array) {return array.slice(-1);});
    eleventyConfig.addFilter("absolutelinks", (post) => {
        if (post === undefined || post === null) {
            return post;
        }
        const source = typeof post === "string" ? post : String(post);
        const content = source.replaceAll("](/docs/", "](https://lyne-storybook.app.sbb.ch/?path=/docs/").replaceAll("](/story/", "](https://lyne-storybook.app.sbb.ch/?path=/story/");
        function wrapTablesWithSbbTableWrapper(content) {
            //const tableRegex = /((?:\|[^|\n]*\|.*\n)+)/g;
            const tableRegex = /(\|[^\n]+\|\n)(\|[^\n]+\|\n)*/g;
            return content.replace(tableRegex, (match) => `<sbb-table-wrapper>\n\n${match}\n\n{.sbb-table .sbb-table--striped}\n\n</sbb-table-wrapper>\n\n`);
        }
        const updatedContent = wrapTablesWithSbbTableWrapper(content);
        return appendDotToHeadings(updatedContent);});

    eleventyConfig.addFilter("defaultlanguagecontent", (array, currPage) => {
        currPage = currPage.slice(3);
        const pageArr = array.filter((page) => page.url == "/de"+currPage);
        return pageArr;});

    eleventyConfig.addPlugin(EleventyI18nPlugin, {defaultLanguage: "de",});

    eleventyConfig.addTransform("activate-first-tab", function (content) {
        return (this.page.outputPath || "").endsWith(".html") ? activateFirstTab(content) : content;
    });

    // Als Plugin registriert, damit der Transform nach dem Lit-SSR-Plugin läuft (Plugins werden in
    // Reihenfolge ausgeführt, direkte addTransform-Aufrufe dagegen vor den Plugin-Transforms).
    eleventyConfig.addPlugin((pluginConfig) => {
        pluginConfig.addTransform("lyne-slot-states", function (content) {
            return (this.page.outputPath || "").endsWith(".html") ? addLyneSlotStates(content) : content;
        });
    });

    eleventyConfig.addFilter("include", (arr, path, value) => {
    value = lodash.deburr(value).toLowerCase();
    return arr.filter((item) => {
        let pathValue = lodash.get(item, path);
        pathValue = lodash.deburr(pathValue).toLowerCase();
        if (pathValue.length == value.length && pathValue.includes(value) == true) {
            return true;
        } else {
            return false;
        }
        });
    });

    eleventyConfig.addFilter("exclude", (arr, path, value) => {
        value = lodash.deburr(value).toLowerCase();
        return arr.filter((item) => {
            let pathValue = lodash.get(item, path);
            pathValue = lodash.deburr(pathValue).toLowerCase();
            if (pathValue.length == value.length && pathValue.includes(value) == true) {
                return false;
            } else {
                return true;
            }
            });
        });

    eleventyConfig.addFilter("removeLastPathSegment", function(url) {
        if (typeof url !== 'string') return url;
        // Entfernt alles nach dem letzten "/"
        return url.substring(0, url.lastIndexOf('/'));
        });    

    eleventyConfig.addFilter("lyneexample", (pattern) => {
        const lyneStories = require('@sbb-esta/lyne-elements/dist/collection/storybundle');    
        const rawStories = lyneStories[pattern];
        const stories = [];
        let ignoreArgs = [];
        const defaultExport = rawStories.default;
        const defaultExportKeys = Object.keys(defaultExport);

        if (defaultExportKeys.includes('documentation')) {
            const docu = defaultExport.documentation;
            const docuKeys = Object.keys(docu);

            if (docuKeys.includes('disableArgs')) {
                ignoreArgs = docu.disableArgs;
            }
        }
        Object.keys(rawStories).forEach((key) => {
            if (key !== 'default') {
                const storyObject = {};
                const story = rawStories[key];
                const storyKeys = Object.keys(story);

                // handle documentation key
                if (storyKeys.includes('documentation')) {
                storyObject.documentation = story.documentation;
                } else {
                storyObject.documentation = {};
                }

                // handle container key
                const docuKeys = Object.keys(storyObject.documentation);

                if (docuKeys.includes('container')) {
                storyObject.documentation.container = story.documentation.container;
                } else {
                storyObject.documentation.container = {};
                }

                const unCamelCase = (string) =>
                string.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3');

                storyObject.documentation.title = unCamelCase(key);

                // adopt styles
                const containerKeys = Object.keys(storyObject.documentation.container);

                if (containerKeys.includes('styles')) {
                const rawStyles = storyObject.documentation.container.styles;
                const stylesKeys = Object.keys(rawStyles);
                let styles = '';

                stylesKeys.forEach((styleKey) => {
                    const style = rawStyles[styleKey];

                    styles += `${styleKey}: ${style};`;
                });

                storyObject.documentation.container.styles = styles;
                } else {
                    storyObject.documentation.container.styles = '';
                }

                if (story && Object.keys(story).includes('args')) {
                    storyObject.element = story.args;
                }
                stories.push(storyObject);
            }
        });
        return stories;
        }); 

    eleventyConfig.addFilter("renderUsingMarkdown", function(rawString) {
        return markdownLib.render(rawString);
      });  


      

    return {
        templateFormats: ["njk", "md"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data",
            output: "dist"
        }
    };
};
