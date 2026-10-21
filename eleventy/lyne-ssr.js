// Transforms für das Lit-SSR-Markup der Lyne-Komponenten: Zustände, die Lyne sonst erst per
// JavaScript setzt, schon im HTML vorgeben (verhindert leere Bereiche und Layout Shifts)
const parse5 = require("parse5");

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

const isHtml = (page) => (page.outputPath || "").endsWith(".html");

module.exports = function (eleventyConfig) {
    eleventyConfig.addTransform("activate-first-tab", function (content) {
        return isHtml(this.page) ? activateFirstTab(content) : content;
    });

    // Als Plugin registriert, damit der Transform nach dem Lit-SSR-Plugin läuft (Plugins werden in
    // Reihenfolge ausgeführt, direkte addTransform-Aufrufe dagegen vor den Plugin-Transforms).
    eleventyConfig.addPlugin((pluginConfig) => {
        pluginConfig.addTransform("lyne-slot-states", function (content) {
            return isHtml(this.page) ? addLyneSlotStates(content) : content;
        });
    });
};
