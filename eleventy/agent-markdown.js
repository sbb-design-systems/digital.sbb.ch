// Markdown-Versionen für Agents (…/index.md) der Inhaltsseiten. Umgewandelt wird das fertig gerenderte
// HTML (Bereich mit role="main"), damit auch Inhalte aus Datenschleifen (z. B. Design Tokens) enthalten sind.
// Die Lyne-Komponentenseiten haben eine eigene Vorlage (component-agent.njk) mit Readme und API.
const fs = require("fs");
const path = require("path");
const parse5 = require("parse5");
const TurndownService = require("turndown");
const { gfm } = require("turndown-plugin-gfm");

const SITE_URL = "https://digital.sbb.ch";
const AGENT_LANGUAGES = ["de", "en"];
const AGENT_SECTIONS = [
    "/principles/",
    "/foundation/",
    "/accessibility/",
    "/design-system/getting-started/",
    "/design-system/lyne/overview/",
    "/design-system/lyne/what-is-lyne/",
    "/design-system/lyne/design-tokens/",
    "/design-system/lyne/templates/",
    "/design-system/lyne/themes/",
    "/design-system/lyne/releases/",
    "/design-system/mobile/",
    "/design-system/maps/",
    "/design-system/patternlibrary/",
    "/design-system/organisation/",
    "/guidelines/",
];

// Elemente ohne Inhalt für Agents: Shadow DOM, Styles, Icons und reine Bedienelemente
const REMOVED_TAGS = new Set([
    "style", "script", "noscript", "svg", "sbb-icon", "button", "sbb-toast", "sbb-popover",
    "sbb-tag-group", "sbb-toggle", "sbb-toggle-check", "sbb-secondary-button", "sbb-mini-button",
    "sbb-form-field", "sbb-select", "sbb-radio-button-group", "sbb-autocomplete", "input", "select", "textarea",
]);

// Icon-Kacheln der Icon-Übersichten (<button class="icon" data-name=…>) bleiben erhalten und
// werden als Namensliste ausgegeben
const isIconTile = (node) => node.nodeName === "button" && (attr(node, "class") ?? "").split(/\s+/).includes("icon") && attr(node, "data-name");

function isAgentPageUrl(url) {
    const match = typeof url === "string" && url.match(/^\/([a-z]{2})(\/.*)$/);
    return !!match && AGENT_LANGUAGES.includes(match[1]) && AGENT_SECTIONS.some((section) => match[2].startsWith(section));
}

const attr = (node, name) => node.attrs?.find((a) => a.name === name)?.value;
const setAttr = (node, name, value) => {
    const existing = node.attrs.find((a) => a.name === name);
    if (existing) existing.value = value;
    else node.attrs.push({ name, value });
};
// Relative Pfade beziehen sich auf <base href="https://digital.sbb.ch/">
const absolute = (url) => {
    if (!url || /^([a-z][a-z0-9+.-]*:|#|\/\/)/i.test(url)) return url;
    return SITE_URL + (url.startsWith("/") ? url : "/" + url);
};

function findNode(node, predicate) {
    if (predicate(node)) return node;
    for (const child of node.childNodes ?? []) {
        const found = findNode(child, predicate);
        if (found) return found;
    }
    return null;
}

function cleanTree(node) {
    node.childNodes = (node.childNodes ?? []).filter((child) => {
        if (child.nodeName === "#comment") return false;
        if (REMOVED_TAGS.has(child.nodeName) && !isIconTile(child)) return false;
        if (child.nodeName === "template" && attr(child, "shadowrootmode")) return false;
        return true;
    });
    for (const child of node.childNodes) {
        if (!child.attrs) continue;
        for (const name of ["href", "src"]) {
            if (attr(child, name)) setAttr(child, name, absolute(attr(child, name)));
        }
        cleanTree(child.nodeName === "template" ? child.content : child);
    }
}

function createTurndown() {
    const turndown = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced", bulletListMarker: "-" });
    turndown.use(gfm);

    turndown.addRule("sbb-title", {
        filter: (node) => node.nodeName === "SBB-TITLE",
        replacement: (content, node) => {
            const level = Math.min(Number(node.getAttribute("level")) || 2, 6);
            return `\n\n${"#".repeat(level)} ${content.trim()}\n\n`;
        },
    });

    // Karten der Komponenten-Übersichten (sbb-card mit sbb-card-link «More Info»):
    // «[Titel](Link): Kategorien» statt Linktext «More Info» und loser Karteninhalt
    const tagDescendants = (node) => [...(node.childNodes ?? [])].flatMap((child) => [child, ...tagDescendants(child)]);
    turndown.addRule("sbb-card", {
        // Nur Karten mit genau einem Kartenlink (nicht die umschliessende Übersichtskarte)
        filter: (node) => node.nodeName === "SBB-CARD" && tagDescendants(node).filter((n) => n.nodeName === "SBB-CARD-LINK" && n.getAttribute("href")).length === 1,
        replacement: (content, node) => {
            const all = tagDescendants(node);
            const href = all.find((n) => n.nodeName === "SBB-CARD-LINK").getAttribute("href");
            const title = (all.find((n) => n.nodeName === "SBB-TITLE")?.textContent ?? "").replace(/\s+/g, " ").trim().replace(/\.$/, "");
            const chips = all.filter((n) => n.nodeName === "SBB-CHIP-LABEL").map((n) => n.textContent.trim()).filter(Boolean);
            if (!title) return content;
            const entry = `[${title}](${href})${chips.length ? `: ${chips.join(", ")}` : ""}`;
            // Steht die Karte bereits in einem <li>, setzt turndown den Listenpunkt selbst
            return node.parentNode?.nodeName === "LI" ? entry : `\n- ${entry}\n`;
        },
    });

    // Tabs: Beschriftung als Abschnittsüberschrift, Inhalt folgt im zugehörigen sbb-tab
    turndown.addRule("sbb-tab-label", {
        filter: (node) => node.nodeName === "SBB-TAB-LABEL",
        replacement: (content) => `\n\n## ${content.replace(/\s+/g, " ").trim()}\n\n`,
    });

    // Lyne-Links (sbb-link, sbb-block-link, sbb-teaser, sbb-card-link, …-button-link) mit href
    turndown.addRule("sbb-link", {
        filter: (node) => node.nodeName.startsWith("SBB-") && node.hasAttribute("href"),
        replacement: (content, node) => {
            const href = node.getAttribute("href");
            // Teaser und Karten mit Bild/Überschrift als Listeneintrag «[Titel](Link): Beschreibung»
            if (/\n|!\[|^#/.test(content.trim())) {
                const lines = content.split("\n").map((line) => line.trim()).filter((line) => line && !line.startsWith("!["));
                const heading = lines.find((line) => /^#{1,6}\s/.test(line));
                const title = (heading ?? lines[0] ?? node.getAttribute("accessibility-label") ?? href).replace(/^#{1,6}\s*/, "");
                const description = lines.filter((line) => line !== heading && line !== title).join(" ");
                return `\n- [${title}](${href})${description ? `: ${description}` : ""}\n`;
            }
            const text = content.replace(/\s+/g, " ").trim() || node.getAttribute("accessibility-label") || href;
            return `[${text}](${href})`;
        },
    });

    // KOM-Icons: Gruppe + Grössen ergeben den Namen für icon-name (z. B. aerosol-can-small)
    turndown.addRule("icon-tile", {
        filter: (node) => node.nodeName === "BUTTON" && node.getAttribute("data-name"),
        replacement: (content, node) => {
            const group = node.getAttribute("data-group");
            const sizes = (node.getAttribute("data-size") ?? "").split(/\s+/).filter(Boolean);
            const names = group && sizes.length ? sizes.map((size) => `\`${group}-${size}\``).join(", ") : `\`${node.getAttribute("data-name")}\``;
            const tags = node.getAttribute("data-tags");
            return `\n- ${names}${tags ? ` (${tags})` : ""}\n`;
        },
    });

    turndown.addRule("iframe", {
        filter: "iframe",
        replacement: (content, node) => `\n\n[${node.getAttribute("title") || "Vorschau / Preview"}](${node.getAttribute("src")})\n\n`,
    });

    // Design-Token-Tabellen: <div class="token-table"> mit Zeilen aus .token-name und .token-value
    const hasClass = (node, name) => (node.getAttribute?.("class") ?? "").split(/\s+/).includes(name);
    const descendants = (node) => [...(node.childNodes ?? [])].flatMap((child) => [child, ...descendants(child)]);
    const cellText = (cell) => (cell?.textContent ?? "").replace(/\s+/g, " ").trim().replace(/\|/g, "\\|");
    // Responsive Token (Spacing, Size): Kopfzeile mit Breakpoints, dann je Token ein <p> mit dem Namen und eine Zeile mit den Werten
    const isResponsiveTable = (node) => node.nodeName === "DIV" && hasClass(node, "token-table") && descendants(node).some((n) => hasClass(n, "breakpoint"));
    turndown.addRule("token-table-responsive", {
        filter: isResponsiveTable,
        replacement: (content, node) => {
            const children = [...node.childNodes].filter((child) => child.nodeType === 1);
            const breakpoints = (row) => descendants(row).filter((n) => hasClass(n, "breakpoint"));
            const header = children.find((child) => hasClass(child, "row"));
            const names = breakpoints(header).map((cell) => cellText(cell));
            const rows = [];
            children.forEach((child, index) => {
                if (child.nodeName !== "P" || !hasClass(children[index + 1], "row")) return;
                const values = breakpoints(children[index + 1]).map((cell) => cellText(descendants(cell).find((n) => n.nodeName === "P")).replace(/^[a-z]+:\s*/i, ""));
                rows.push(`| \`--${cellText(child)}\` | ${values.join(" | ")} |`);
            });
            if (!rows.length || !names.length) return content;
            return `\n\n| CSS custom property | ${names.join(" | ")} |\n| --- | ${names.map(() => "---").join(" | ")} |\n${rows.join("\n")}\n\n`;
        },
    });
    turndown.addRule("token-table", {
        filter: (node) => node.nodeName === "DIV" && hasClass(node, "token-table") && !isResponsiveTable(node),
        replacement: (content, node) => {
            const rows = descendants(node)
                .filter((row) => hasClass(row, "row"))
                .map((row) => {
                    const cells = descendants(row);
                    return [cells.find((c) => hasClass(c, "token-name")), cells.find((c) => hasClass(c, "token-value"))].map(cellText);
                })
                .filter(([name]) => name);
            if (!rows.length) return content;
            return `\n\n| CSS custom property | Wert / Value |\n| --- | --- |\n${rows.map(([name, value]) => `| \`${name.startsWith("sbb-") ? "--" : ""}${name}\` | ${value} |`).join("\n")}\n\n`;
        },
    });

    return turndown;
}

let turndownInstance;

function htmlToAgentMarkdown(html, url) {
    const document = parse5.parse(html);
    const pageUrl = SITE_URL + url;

    // Platzhalter ohne Übersetzung verweisen per Canonical auf eine andere Seite
    const canonical = findNode(document, (n) => n.nodeName === "link" && attr(n, "rel") === "canonical");
    if (canonical && attr(canonical, "href") !== pageUrl) return null;

    const main = findNode(document, (n) => attr(n, "role") === "main");
    if (!main) return null;
    cleanTree(main);

    turndownInstance ??= createTurndown();
    const body = turndownInstance
        .turndown(parse5.serialize(main))
        .replace(/^[ \t]+$/gm, "")
        .replace(/^(\s*)-   /gm, "$1- ")
        .replace(/\n{3,}/g, "\n\n")
        .replace(/^(- [^\n]+)\n\n(?=- )/gm, "$1\n")
        .trim();
    if (!body) return null;

    const titleNode = findNode(document, (n) => n.nodeName === "title");
    const title = titleNode?.childNodes?.[0]?.value?.replace(/\s+–\s+digital\.sbb\.ch$/, "").trim();
    const header = body.startsWith("# ") ? "" : `# ${title}\n\n`;
    // Farbseiten verweisen auf die Lyne Design Tokens (CSS-Variablen; Token-Seiten nur de/en)
    const tokens = (name) => `${SITE_URL}/${url.startsWith("/de/") ? "de" : "en"}/design-system/lyne/design-tokens/${name}/index.md`;
    const tokenNote = /^\/..\/foundation\/colors\//.test(url)
        ? `In code, use the semantic CSS variables of Lyne (e.g. \`--sbb-background-color-1\`, \`--sbb-color-1\`, \`--sbb-color-primary\`); they adapt to light/dark mode and to the off-brand and safety themes. Base colors are available as \`--sbb-color-*\` (additional and off-brand colors also as \`-light\` / \`-dark\` values for light and dark mode). Mapping and examples: ${tokens("color")}` : "";
    const note = tokenNote ? `\n\n## Design tokens\n\n${tokenNote}` : "";
    return `${header}${body}${note}\n\n---\n\nSource: ${pageUrl}\n`;
}

// Nach dem Build: index.md neben jede passende index.html schreiben (Weiterleitungen ausgenommen)
function writeAgentPages(results, outputDir) {
    const redirectsFile = path.join(outputDir, "redirects.txt");
    const redirects = new Set(
        fs.existsSync(redirectsFile) ? fs.readFileSync(redirectsFile, "utf8").split("\n").map((line) => line.trim().split(/\s+/)[0]).filter(Boolean) : []
    );
    let written = 0;
    for (const result of results) {
        if (!result.outputPath?.endsWith("index.html") || !isAgentPageUrl(result.url) || redirects.has(result.url)) continue;
        const markdown = htmlToAgentMarkdown(result.content, result.url);
        if (!markdown) continue;
        fs.writeFileSync(path.join(path.dirname(result.outputPath), "index.md"), markdown);
        written++;
    }
    return written;
}

module.exports = { isAgentPageUrl, htmlToAgentMarkdown, writeAgentPages };
