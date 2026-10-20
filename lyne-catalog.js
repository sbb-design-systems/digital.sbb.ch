// Lyne-Katalog: alle Komponentengruppen aus lyne-components, abgeleitet aus den installierten npm-Paketen
// (custom-elements.json) und dem Storybook-Index. Schlüssel ist der Ordnername im lyne-components-Repo,
// der 1:1 dem Storybook-Titel entspricht (z. B. "tabs" ↔ elements/Tabs ↔ src/elements/tabs/readme.md).
// Genutzt vom Eleventy-Build (src/_data/lyne/catalog.js) und vom Abgleich beim Dev-Start (lyne-sync.js).
const fs = require("fs");
const path = require("path");
const { buildStructure } = require("./lyne-structure");

const STORYBOOK_URL = "https://lyne-elements.app.sbb.ch";
// Dauerhaft abgelehnte Komponentengruppen (Ordnername → Begründung): werden nicht angelegt und nicht dokumentiert
const EXCLUDED_FILE = path.join(__dirname, "src/_data/lyne/excluded.json");
const GITHUB_REPO = "sbb-design-systems/lyne-components";
// Angular-Doku (lyne-angular): gleiche Ordnernamen, experimentelle Komponenten unter "angular-experimental"
const ANGULAR_URL = "https://lyne-angular.app.sbb.ch";

const PACKAGES = [
    { name: "lyne-elements", storybookPrefix: "elements", sourcePath: "src/elements", experimental: false },
    { name: "lyne-elements-experimental", storybookPrefix: "experimental", sourcePath: "src/elements-experimental", experimental: true },
];

const packageDir = (name) => path.join(__dirname, "node_modules", "@sbb-esta", name);
const slug = (title) => title.toLowerCase().replace(/^sbb-/, "").trim().replace(/\s+/g, "-");

function readExcluded() {
    return fs.existsSync(EXCLUDED_FILE) ? JSON.parse(fs.readFileSync(EXCLUDED_FILE, "utf8")) : {};
}

// Maschinenlesbare Quellen für Agents, passend zu den installierten Versionen (CDN jsDelivr)
function agentResources() {
    const version = (name) => JSON.parse(fs.readFileSync(path.join(packageDir(name), "package.json"), "utf8")).version;
    const cdn = (name, file) => `https://cdn.jsdelivr.net/npm/@sbb-esta/${name}@${version(name)}/${file}`;
    return {
        customElements: cdn("lyne-elements", "custom-elements.json"),
        customElementsExperimental: cdn("lyne-elements-experimental", "custom-elements.json"),
        designTokens: cdn("lyne-design-tokens", "dist/js/sbb-tokens.json"),
        designTokensCss: cdn("lyne-design-tokens", "dist/css/sbb-variables.css"),
        icons: "https://icons.app.sbb.ch/icons/index.json",
    };
}

function installedVersion() {
    return JSON.parse(fs.readFileSync(path.join(packageDir("lyne-elements"), "package.json"), "utf8")).version;
}

// Erster Satz der Komponentenbeschreibung aus custom-elements.json
const summary = (description) => (description ?? "").replace(/\s+/g, " ").trim().split(/(?<=\.)\s/)[0];

// partOf: Korrekturen der Elementrollen pro Gruppe aus den config.json, z. B. { stepper: { "sbb-step": "sbb-stepper" } }
function buildCatalog(storybookEntries = {}, partOf = {}) {
    const version = installedVersion();
    const tag = `v${version}`;
    const groups = {};
    const declarations = {};

    for (const pkg of PACKAGES) {
        const manifest = JSON.parse(fs.readFileSync(path.join(packageDir(pkg.name), "custom-elements.json"), "utf8"));
        for (const module of manifest.modules ?? []) {
            for (const declaration of (module.declarations ?? []).filter((d) => d.customElement && d.tagName)) {
                const folder = module.path.split("/")[0];
                groups[folder] ??= {
                    folder,
                    package: `@sbb-esta/${pkg.name}`,
                    experimental: pkg.experimental,
                    elements: [],
                    readmeUrl: `https://raw.githubusercontent.com/${GITHUB_REPO}/${tag}/${pkg.sourcePath}/${folder}/readme.md`,
                    githubUrl: `https://github.com/${GITHUB_REPO}/blob/${tag}/${pkg.sourcePath}/${folder}/readme.md`,
                    angularUrl: `${ANGULAR_URL}/${pkg.experimental ? "angular-experimental" : "angular"}/components/${folder}`,
                    storybook: null,
                    storybookPrefix: pkg.storybookPrefix,
                };
                groups[folder].elements.push({ tag: declaration.tagName, summary: summary(declaration.description) });
                (declarations[folder] ??= []).push(declaration);
            }
        }
    }

    // Storybook: Docs-Seite und Story-Titel pro Gruppe (Titel z. B. "elements/Radio Button Panel")
    const storybookWithoutGroup = new Set();
    for (const entry of Object.values(storybookEntries)) {
        const [prefix, ...rest] = (entry.title ?? "").split("/");
        const name = rest[rest.length - 1];
        const group = name && Object.values(groups).find((g) => g.storybookPrefix === prefix && slug(name) === g.folder);
        if (!group) {
            if (entry.type === "docs" && PACKAGES.some((p) => p.storybookPrefix === prefix)) storybookWithoutGroup.add(entry.title);
            continue;
        }
        group.storybook ??= { title: entry.title, tag: name, docsUrl: null };
        if (entry.type === "docs") group.storybook.docsUrl = `${STORYBOOK_URL}/?path=/docs/${entry.id}`;
    }

    for (const group of Object.values(groups)) {
        group.elements.sort((a, b) => a.tag.localeCompare(b.tag));
        // Rollen der Elemente (Haupt-, Variante, Bestandteil, Gruppierung) und Fall der Seite, siehe lyne-structure.js
        const summaries = Object.fromEntries(group.elements.map((e) => [e.tag, e.summary]));
        const { structure, main, roles } = buildStructure(declarations[group.folder], summaries, partOf[group.folder]);
        group.structure = structure;
        group.main = main;
        for (const element of group.elements) Object.assign(element, roles[element.tag]);
        delete group.storybookPrefix;
    }

    // Ausgeschlossene Gruppen entfernen; Einträge ohne Gegenstück in Lyne bleiben als Hinweis im Bericht sichtbar
    const excluded = Object.entries(readExcluded())
        .map(([folder, reason]) => ({ folder, reason, inLyne: !!groups[folder] }))
        .sort((a, b) => a.folder.localeCompare(b.folder));
    for (const { folder } of excluded) delete groups[folder];

    return { version, tag, storybookUrl: STORYBOOK_URL, resources: agentResources(), groups, excluded, storybookWithoutGroup: [...storybookWithoutGroup].sort() };
}

module.exports = { buildCatalog, installedVersion, STORYBOOK_URL };
