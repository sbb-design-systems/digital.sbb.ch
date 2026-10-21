// Struktur einer Lyne-Komponente: welche Rolle jedes Element (Custom-Element-Tag) auf der Seite hat.
// Abgeleitet aus custom-elements.json, korrigierbar über "partOf" in der config.json der Komponente.
//
// Rollen:
//   main     – wird direkt verwendet (sbb-dialog, sbb-secondary-button)
//   variant  – gleiches Element mit anderem Verhalten (sbb-button-link, sbb-button-static), "of" = Basis
//   part     – nur innerhalb eines anderen Elements verwenden (sbb-dialog-title), "of" = Elternelement
//   group    – optionaler Container für mehrere gleiche Elemente (sbb-tag-group), "of" = gruppiertes Element
//
// Fälle (structure):
//   single     – ein Hauptelement, ohne Bestandteile (Divider; auch Teaser mit Variante -static)
//   composite  – ein Hauptelement mit Bestandteilen (Dialog, Card)
//   grouped    – ein Hauptelement mit Gruppierung (Tag + Tag-Group)
//   collection – mehrere Hauptelemente (Button, Link, Logo)

const tagsIn = (text) => (text ?? "").match(/sbb-[a-z0-9-]+/g) ?? [];

// Formulierungen, mit denen ein Element sein Elternelement nennt
const PARENT_IN_OWN_DESCRIPTION = /(?:inside|within|in|into|combined with|used in|placed inside|slotted into|for)\s+(?:a|an|the)?\s*`?<?(sbb-[a-z0-9-]+)/gi;
// Formulierungen, mit denen ein Container seine Bestandteile nennt
const CHILDREN_IN_PARENT_DESCRIPTION = /(?:container for|parent component to|wrapping|together with)\b(.*)$/i;

const commonMixin = (declaration) =>
    (declaration.mixins ?? []).map((mixin) => mixin.name).find((name) => /CommonElementMixin$/.test(name));

function classify(declarations, partOf = {}) {
    const tags = declarations.map((d) => d.tagName);
    const has = (tag) => tags.includes(tag);
    const declarationOf = (tag) => declarations.find((d) => d.tagName === tag);
    const role = Object.fromEntries(tags.map((tag) => [tag, { role: "main", of: null }]));

    // 1. Varianten (gleiches Element, anderes Verhalten)
    const sameFamily = (a, b) => commonMixin(declarationOf(a)) === commonMixin(declarationOf(b));
    for (const tag of tags) {
        const base = tag.replace(/-(link|static|button)$/, "");
        if (base === tag) continue;
        const buttonSibling = tag.endsWith("-link") ? `${base}-button` : null;
        if (has(base) && commonMixin(declarationOf(tag)) && sameFamily(tag, base)) {
            role[tag] = { role: "variant", of: base }; // sbb-button-link -> sbb-button
        } else if (buttonSibling && has(buttonSibling) && sameFamily(tag, buttonSibling)) {
            role[tag] = { role: "variant", of: buttonSibling }; // sbb-menu-link -> sbb-menu-button
        } else if (has(base) && /-(link|static)$/.test(tag) && !commonMixin(declarationOf(base)) && !has(`${base}-button`)) {
            role[tag] = { role: "variant", of: base }; // sbb-mini-button-link -> sbb-mini-button
        }
    }
    const isVariant = (tag) => role[tag].role === "variant";

    // 2. Enthaltensein: Kind -> Elternelemente, mit Quelle der Angabe
    //    own:       das Kind nennt das Elternelement ("Combined with a `sbb-tab-group`")
    //    slot:      ein Slot des Elternelements nennt das Kind
    //    container: das Elternelement beschreibt sich als Container für das Kind
    const parents = Object.fromEntries(tags.map((tag) => [tag, new Map()]));
    const addParent = (child, parent, source) => {
        if (child === parent || !has(child) || !has(parent) || isVariant(child) || isVariant(parent)) return;
        if (!parents[child].has(parent) || source === "own") parents[child].set(parent, source);
    };
    for (const declaration of declarations) {
        const tag = declaration.tagName;
        for (const slot of declaration.slots ?? []) for (const child of tagsIn(slot.description)) addParent(child, tag, "slot");
        const description = declaration.description ?? "";
        const children = description.match(CHILDREN_IN_PARENT_DESCRIPTION);
        if (children) for (const child of tagsIn(children[1])) addParent(child, tag, "container");
        for (const match of description.matchAll(PARENT_IN_OWN_DESCRIPTION)) addParent(tag, match[1], "own");
    }
    // Varianten zählen als ihr Basiselement
    const baseOf = (tag) => (isVariant(tag) ? role[tag].of : tag);
    const childrenOf = (parent) => new Set(tags.filter((tag) => parents[tag].has(parent)).map(baseOf));

    // Gruppierung: Container für genau eine Art Element, der wie das Element heisst (sbb-tag-group)
    // oder sich als "container for one or more" beschreibt (sbb-optgroup), selbst aber nirgends hineingehört
    const ownParent = (tag) => [...parents[tag]].some(([, source]) => source === "own");
    for (const tag of tags) {
        for (const [parent] of parents[tag]) {
            const namedLikeChild = parent === `${tag}-group`;
            const describesItself = /container for one or (more|multiple)/i.test(declarationOf(parent).description ?? "");
            const onlyThisChild = childrenOf(parent).size === 1;
            if ((namedLikeChild || describesItself) && onlyThisChild && !ownParent(parent) && role[parent].role === "main") {
                role[parent] = { role: "group", of: tag };
            }
        }
    }

    // Bestandteile: eigene Angabe vor Präfix-Übereinstimmung vor sonstiger Nennung
    const edgeSource = {};
    for (const tag of tags) {
        if (role[tag].role !== "main") continue;
        const candidates = [...parents[tag]].filter(([parent]) => role[parent].role !== "group" || role[parent].of !== tag);
        if (!candidates.length) continue;
        const rank = ([parent, source]) => (source === "own" ? 0 : 2) + (tag.startsWith(`${parent}-`) ? 0 : 1);
        const [parent, source] = candidates.sort((a, b) => rank(a) - rank(b))[0];
        role[tag] = { role: "part", of: parent };
        edgeSource[tag] = source;
    }

    // Zyklen auflösen (A Teil von B, B Teil von A): die schwächere Angabe verliert
    for (const tag of tags) {
        const cycle = [];
        let current = tag;
        while (role[current]?.role === "part" && !cycle.includes(current)) {
            cycle.push(current);
            current = role[current].of;
        }
        if (current === tag && cycle.length > 1) {
            const weak = (t) => (edgeSource[t] === "own" ? 2 : 0) + (t.startsWith(`${role[t].of}-`) ? 1 : 0);
            const loser = cycle.slice().sort((a, b) => weak(a) - weak(b))[0];
            role[loser] = { role: "main", of: null };
        }
    }

    // 3. Korrekturen aus der config.json: { "sbb-step": "sbb-stepper", "sbb-option-hint": null }
    for (const [tag, parent] of Object.entries(partOf ?? {})) {
        if (!has(tag)) continue;
        role[tag] = parent && has(parent) ? { role: "part", of: parent } : { role: "main", of: null };
        // Ein als Gruppierung erkanntes Elternelement wird zum Hauptelement (sbb-train-formation)
        if (parent && role[parent]?.role === "group" && role[parent].of === tag) role[parent] = { role: "main", of: null };
    }
    return role;
}

// Baut den Baum für die Darstellung: Hauptelemente mit Varianten, Gruppierung und (rekursiv) Bestandteilen
function buildStructure(declarations, summaries, partOf) {
    const role = classify(declarations, partOf);
    const tags = declarations.map((d) => d.tagName).sort((a, b) => a.localeCompare(b));
    const byRole = (name, of) => tags.filter((tag) => role[tag].role === name && (of === undefined || role[tag].of === of));

    const node = (tag) => ({
        tag,
        summary: summaries[tag] ?? "",
        variants: byRole("variant", tag),
        groupedBy: byRole("group", tag)[0] ?? null,
        parts: byRole("part", tag).map(node),
    });

    // Bestandteile von Varianten oder Gruppen hängen am jeweiligen Basiselement
    for (const tag of tags) {
        const entry = role[tag];
        if (entry.role === "part" && ["variant", "group"].includes(role[entry.of]?.role)) role[tag] = { role: "part", of: role[entry.of].of };
    }

    const mainTags = byRole("main");
    // Hauptelement der Komponente zuerst (sbb-<ordner> bzw. Element ohne Präfix eines anderen)
    const main = mainTags.map(node);
    const countParts = (n) => n.parts.length + n.parts.reduce((sum, p) => sum + countParts(p), 0);
    let structure;
    if (main.length > 1) structure = "collection";
    else if (main.length === 1 && countParts(main[0])) structure = "composite";
    else if (main.length === 1 && main[0].groupedBy) structure = "grouped";
    else structure = "single";

    const roles = Object.fromEntries(tags.map((tag) => [tag, role[tag]]));
    return { structure, main, roles };
}

module.exports = { buildStructure, classify };
