// Abgleich mit lyne-components beim Start des Dev-Servers (npm start → prestart):
// Für jede Lyne-Komponentengruppe ohne Ordner in src/_data/lyne/components wird eine minimale
// config.json angelegt – nicht freigegeben ("released": false) und nicht in der Navigation
// ("showInFirstLevel": false). Bestehende Dateien werden nie verändert.
// Gruppen in src/_data/lyne/excluded.json werden übersprungen (dauerhaft abgelehnt).
// Redaktionelle Inhalte (Übersicht mit Regeln, Vorschau in playground.html) entstehen weiterhin von Hand;
// der Stand ist im Abdeckungsbericht sichtbar (/de/design-system/lyne/abdeckung/).
const fs = require("fs");
const path = require("path");
const { buildCatalog, STORYBOOK_URL } = require("./lyne-catalog");

const COMPONENTS_DIR = path.join(__dirname, "../src/_data/lyne/components");

async function loadStorybookEntries() {
    try {
        const response = await fetch(`${STORYBOOK_URL}/index.json`, { signal: AbortSignal.timeout(10000) });
        return (await response.json()).entries ?? {};
    } catch (error) {
        console.warn(`[lyne-sync] Storybook-Index nicht erreichbar (${error.message}), Demo-Tab wird angenommen.`);
        return null;
    }
}

function newConfig(group, hasStorybook) {
    return {
        tag: group.folder,
        system: "lyne",
        list: "components",
        figmaUrl: "",
        released: false,
        language: { de: true, fr: false, it: false, en: true },
        order: 9000,
        categories: [],
        keywords: [],
        hasTabs: true,
        tabs: {
            // Absicht: die Übersicht soll entstehen; der Tab erscheint erst, wenn die Datei existiert
            hasOverview: true,
            hasStorybook,
            hasImplementation: true,
        },
        showInFirstLevel: false,
        similar: false,
    };
}

async function main() {
    const entries = await loadStorybookEntries();
    const catalog = buildCatalog(entries ?? {});
    const created = [];

    for (const group of Object.values(catalog.groups)) {
        const dir = path.join(COMPONENTS_DIR, group.folder);
        const file = path.join(dir, "config.json");
        if (fs.existsSync(file)) continue;
        fs.mkdirSync(dir, { recursive: true });
        const hasStorybook = entries === null ? true : !!group.storybook;
        fs.writeFileSync(file, JSON.stringify(newConfig(group, hasStorybook), null, 4) + "\n");
        created.push(`${group.folder}${group.experimental ? " (experimental)" : ""}`);
    }

    // Seiten auf digital.sbb.ch, deren Lyne-Gruppe es nicht (mehr) gibt
    const orphans = fs.readdirSync(COMPONENTS_DIR).filter((key) => {
        const file = path.join(COMPONENTS_DIR, key, "config.json");
        if (!fs.existsSync(file) || catalog.groups[key]) return false;
        return JSON.parse(fs.readFileSync(file, "utf8")).list === "components";
    });

    console.log(`[lyne-sync] Lyne ${catalog.tag}: ${Object.keys(catalog.groups).length} Komponentengruppen`);
    if (created.length) console.log(`[lyne-sync] Neu angelegt (nicht freigegeben): ${created.join(", ")}`);
    if (orphans.length) console.warn(`[lyne-sync] Ohne Lyne-Gegenstück oder ausgeschlossen: ${orphans.join(", ")}`);
    const staleExclusions = catalog.excluded.filter((entry) => !entry.inLyne).map((entry) => entry.folder);
    if (staleExclusions.length) console.warn(`[lyne-sync] Ausgeschlossen, aber nicht mehr in Lyne (excluded.json bereinigen): ${staleExclusions.join(", ")}`);
}

main().catch((error) => {
    // Der Dev-Server soll auch starten, wenn der Abgleich fehlschlägt
    console.warn(`[lyne-sync] Abgleich fehlgeschlagen: ${error.message}`);
});
