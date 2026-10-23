// Ausgaben für AI-Agents: Markdown-Versionen der Seiten (…/index.md, über agent-markdown.js),
// llms.txt (Einstieg und pro Design System), llms-full.txt, /lyne-components.json und /icons-ui.json
const fs = require("fs");
const path = require("path");
const agentPages = require("./agent-markdown");
const { SITE_URL, readSourceFile, pageSummary, agentSummary, componentSource } = require("./shared");
const { isSelfCanonical } = require("./seo");
const { lyneDocumentationStatus, figmaUrl } = require("./lyne");

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
        // Layout-Wrapper und Kommentare nur im Fliesstext entfernen; in Code-Blöcken und Inline-Code
        // (z. B. Beispiele und «The `<sbb-table-wrapper>` is …» aus den Lyne-Readmes) bleiben sie erhalten
        .split(/(```[\s\S]*?```|`[^`\n]*`)/)
        .map((part, index) => (index % 2 ? part : part.replace(/<\/?sbb-table-wrapper>/g, "").replace(/<!--[\s\S]*?-->/g, "")))
        .join("")
        .replace(/^\{[.#][^}\n]*\}\s*$/gm, "")
        // Relative Storybook-Links aus den Lyne-Readmes (/docs/…, /story/…)
        .replace(/\]\(\/?(docs|story)\//g, "](https://lyne-elements.app.sbb.ch/?path=/$1/")
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
                    angular: group.angularUrl ? `${group.angularUrl}/overview` : null,
                    readme: group.githubUrl,
                },
            };
        });
    // resources: API (custom-elements.json), Design Tokens und Icon-Katalog für gültige Attribut- und Icon-Namen
    return JSON.stringify({ lyneVersion: catalog.version, generated: new Date().toISOString(), resources: catalog.resources ?? {}, bundle: `${SITE_URL}/lyne-components-full.md`, components }, null, 2);
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

// UI-Icons als schlanke Liste für Agents (/icons-ui.json): icon-name = Name + "-" + Grösse
function uiIconCatalog(iconData) {
    const list = (Array.isArray(iconData) ? iconData[0] : iconData) ?? [];
    const icons = list
        .filter((icon) => icon.type === "KOM")
        .map((icon) => ({ name: icon.name, sizes: icon.sizes, category: icon.category, keywords: icon.tags }))
        .sort((a, b) => a.name.localeCompare(b.name));
    // Abgeleitete Ansicht des CDN-Katalogs; das CDN ist massgebend (Lyne lädt die Icons zur Laufzeit von dort)
    return JSON.stringify({
        source: "https://icons.app.sbb.ch/icons/index.json",
        sourceVersion: (Array.isArray(iconData) ? iconData[1]?.version : null) ?? null,
        generated: new Date().toISOString(),
        authority: "Derived snapshot of the source, rebuilt daily. The source is authoritative: Lyne loads icons from it at runtime. If a name is missing here, check the source (UI icons have the tag \"ui-icons\" and one entry per size).",
        usage: "Use only these names for icon-name attributes. The value is the name plus a size, e.g. \"arrow-right-small\". Lyne components use the small size.",
        count: icons.length,
        icons,
    });
}

// Inhaltsseiten mit Markdown-Version (agent-markdown.js): eigenständig, keine Weiterleitung
// Theme-Demoseiten (theme.njk) haben keinen Hauptinhalt und erhalten keine Markdown-Version
const isAgentPage = (item) =>
    agentPages.isAgentPageUrl(item?.url) && !item.data?.redirect && item.data?.layout !== "theme.njk" && isSelfCanonical(item);

// Einträge für einen llms.txt-Abschnitt: { url, title, description }
function agentPagesInSection(allPages, lang, section, lyneData) {
    return (allPages ?? [])
        .filter((item) => typeof item.url === "string" && item.url.startsWith(`/${lang}${section}`) && isAgentPage(item))
        .sort((a, b) => a.url.localeCompare(b.url))
        .map((item) => {
            const data = item.data ?? {};
            // Komponentenseiten aller Design Systeme (lyne, mobile, lean, …) und Lyne-Templates
            const system = data[data.system] ?? lyneData;
            const tag = system?.components?.[data.component]?.config?.tag ?? lyneData?.templates?.[data.template]?.config?.tag;
            const title = data.title || (tag ? tag.replace(/\b\w/g, (c) => c.toUpperCase()) : item.url);
            const alternative = (data.alternativetitle ?? "").replace(/ Lyne\.$/, "");
            const redundant = !alternative || alternative === title || alternative === `${title}.`;
            // Fehlt eine eigene Beschreibung: Komponenten aus ihrer Übersicht, übrige Seiten aus dem ersten Absatz
            let description = redundant ? "" : alternative;
            if (!description && data.component && typeof data.system === "string") {
                description = agentSummary(componentSource(data, lang)).replace(/^[*-]\s+/, "").replace(/\{[.#][^}]*\}/g, "").trim();
            }
            if (!description && item.inputPath) description = pageSummary(readSourceFile(path.relative("src", item.inputPath)));
            return { url: item.url, title, description };
        });
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("agentMarkdown", agentMarkdown);
    eleventyConfig.addFilter("demoteHeadings", demoteHeadings);
    eleventyConfig.addFilter("agentSummary", agentSummary);
    eleventyConfig.addFilter("lyneComponentIndex", lyneComponentIndex);
    eleventyConfig.addFilter("lyneStatusLabels", lyneStatusLabels);
    eleventyConfig.addFilter("uiIconCatalog", uiIconCatalog);
    eleventyConfig.addFilter("agentPagesInSection", agentPagesInSection);

    // Einzige Quelle für die Seiten mit Markdown-Version; versteckte Seiten
    // (eleventyExcludeFromCollections) sind in getAll() nicht enthalten
    const agentPageUrls = new Set();
    eleventyConfig.addFilter("isAgentPage", (url) => agentPageUrls.has(url));
    eleventyConfig.addCollection("agentPages", (collectionApi) => {
        const items = collectionApi.getAll().filter(isAgentPage);
        agentPageUrls.clear();
        items.forEach((item) => agentPageUrls.add(item.url));
        return items;
    });

    eleventyConfig.on("eleventy.after", ({ results, dir }) => {
        // /llms-full.txt und /design-system/lyne/llms-full.txt als Alias für das Bündel aller Komponenten (Konvention von llms.txt)
        const full = path.join(dir?.output ?? "dist", "lyne-components-full.md");
        if (fs.existsSync(full)) {
            fs.copyFileSync(full, path.join(dir?.output ?? "dist", "llms-full.txt"));
            fs.mkdirSync(path.join(dir?.output ?? "dist", "design-system", "lyne"), { recursive: true });
            fs.copyFileSync(full, path.join(dir?.output ?? "dist", "design-system", "lyne", "llms-full.txt"));
        }
        const written = agentPages.writeAgentPages((results ?? []).filter((result) => agentPageUrls.has(result.url)), dir?.output ?? "dist");
        if (written) console.log(`[agent-markdown] ${written} Markdown-Seiten geschrieben`);
    });

    // Markdown- und Textdateien (llms.txt, index.md, …) ohne Leerzeilen am Anfang und Ende
    eleventyConfig.addTransform("trim-text-output", function (content) {
        return /\.(md|txt)$/.test(this.page.outputPath || "") ? content.trim() + "\n" : content;
    });
};
