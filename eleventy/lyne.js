// Lyne-Komponentenseiten: Doku- und Figma-Status, Beziehungen, Abdeckungsbericht, Aufteilung von
// Übersicht und README, Storybook-Beispiele und Sortierung
const fs = require("fs");
const path = require("path");

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
        // Die Anatomie-Tabellen sind entfallen: Aufbau zeigt der Elemente-Baum, Regeln stehen in rules_<sprache>.md
        : config.tabs?.hasOverview === false ? [] : [["overview_de.md"], ["overview_en.md"], ["rules_de.md"], ["rules_en.md"]];
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

// Hauptelemente nach der Reihenfolge aus der config ("elementOrder"); nicht genannte folgen alphabetisch
function sortElements(nodes, order) {
    if (!order?.length) return nodes;
    const rank = (n) => (order.includes(n.tag) ? order.indexOf(n.tag) : order.length);
    return nodes.slice().sort((a, b) => rank(a) - rank(b) || a.tag.localeCompare(b.tag));
}

// Lyne-README aufteilen: "usage" bis vor die automatisch erzeugte API-Dokumentation (Tab Implementation),
// "api" ab dort, ohne die Überschrift "API Documentation" (Tab API).
const README_API_MARKER = "<!-- Auto Generated Below -->";
function readmeSection(markdown, part) {
    const text = String(markdown ?? "");
    const marker = text.indexOf(README_API_MARKER);
    if (marker !== -1) {
        if (part === "usage") return text.slice(0, marker);
        return text.slice(marker + README_API_MARKER.length).replace(/^\s*#{1,6}\s*API Documentation\s*\n/i, "");
    }
    // Ohne Marker (z. B. Badge, von Hand geschriebenes README) ist die API der Abschnitt "## API" bis zur nächsten Überschrift
    const section = text.match(/^## API\b.*\n([\s\S]*?)(?=^## |(?![\s\S]))/m);
    if (!section) return part === "usage" ? text : "";
    return part === "usage" ? text.replace(section[0], "") : section[1];
}

function storybookDocsUrl(storybookId, stories) {
    const entries = Object.values(Array.isArray(stories) ? stories[0] ?? {} : stories ?? {});
    const docs = entries.find((entry) => entry.type === "docs" && entry.tag === storybookId && entry.title?.startsWith("elements"));
    return docs ? `https://lyne-elements.app.sbb.ch/?path=/docs/${docs.id}` : "";
}

function sortLyneComponentsByOrder(obj) {
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
}

// Komponenten alphabetisch nach angezeigtem Namen (config.tag), z. B. für Übersicht und Sidebar von Lyne
function sortComponentsByName(obj) {
    if (!obj || typeof obj !== "object") return obj;
    const name = (entry) => String(entry?.config?.tag ?? "");
    return Object.fromEntries(Object.entries(obj).sort(([, a], [, b]) => name(a).localeCompare(name(b), "de")));
}

// Beispiele einer Komponente aus dem Storybook-Bündel von lyne-elements
function lyneExample(pattern) {
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
}

function lyne(eleventyConfig) {
    eleventyConfig.addFilter("lyneDocumentationStatus", lyneDocumentationStatus);
    eleventyConfig.addFilter("lyneRelations", lyneRelations);
    eleventyConfig.addFilter("componentRelations", componentRelations);
    eleventyConfig.addFilter("figmaUrl", figmaUrl);
    eleventyConfig.addFilter("lyneCoverage", lyneCoverage);
    eleventyConfig.addFilter("sortElements", sortElements);
    eleventyConfig.addFilter("readmeSection", readmeSection);
    eleventyConfig.addFilter("storybookDocsUrl", storybookDocsUrl);
    eleventyConfig.addFilter("sortLyneComponentsByOrder", sortLyneComponentsByOrder);
    eleventyConfig.addFilter("sortComponentsByName", sortComponentsByName);
    eleventyConfig.addFilter("lyneexample", lyneExample);

    // Im Watch-Modus können sich Inhaltsdateien zwischen zwei Builds ändern
    eleventyConfig.on("eleventy.before", () => {
        documentationStatusCache.clear();
        relationsCache = { source: null, relations: null };
    });
}

module.exports = Object.assign(lyne, { lyneDocumentationStatus, figmaUrl });
