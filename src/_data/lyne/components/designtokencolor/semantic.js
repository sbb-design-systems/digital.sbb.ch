const fs = require('fs');
const path = require('path');

// Semantische Farbvariablen von Lyne (--sbb-color-primary, --sbb-background-color-1 usw.).
// Die Zuordnung zu den Grundfarben (hell / dunkel) wird direkt aus den Theme-Dateien von lyne-elements gelesen,
// damit die Seite bei einem Lyne-Update automatisch stimmt.
const lyneDir = path.dirname(require.resolve('@sbb-esta/lyne-elements/package.json'));
const readTheme = (name) => fs.readFileSync(path.join(lyneDir, `${name}-theme.css`), 'utf8');

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const colorName = (value) => (value.match(/var\(--sbb-color-([a-z0-9-]+)\)/) || [])[1];

// Liefert { light, dark } als Grundfarbnamen (z. B. "white" / "midnight") oder null
const resolve = (css, variable) => {
    const lightDark = css.match(new RegExp(`--${escape(variable)}:\\s*light-dark\\(\\s*var\\(--sbb-color-([a-z0-9-]+)\\)\\s*,\\s*var\\(--sbb-color-([a-z0-9-]+)\\)\\s*\\)`));
    if (lightDark) {
        return { light: lightDark[1], dark: lightDark[2] };
    }
    const single = css.match(new RegExp(`--${escape(variable)}:\\s*([^;]+);`));
    const name = single && colorName(single[1]);
    return name ? { light: name, dark: name } : null;
};

const standard = readTheme('standard');
const themes = { standard, offbrand: readTheme('off-brand'), safety: readTheme('safety') };

const entry = (variable) => ({ variable, ...resolve(standard, variable) });
const levels = (prefix, from, to) => Array.from({ length: to - from + 1 }, (_, i) => entry(`${prefix}${from + i}`));

const context = ['primary', 'primary85', 'primary125', 'primary150', 'error', 'warning', 'success', 'brand'].map((key) => {
    const variable = `sbb-color-${key}`;
    return {
        key,
        variable,
        ...resolve(standard, variable),
        // Grundfarbe je Theme-Variante (nur hell, für die Übersicht)
        themes: Object.fromEntries(Object.entries(themes).map(([theme, css]) => [theme, (resolve(css, variable) || {}).light])),
    };
});

module.exports = async function () {
    return {
        context,
        background: levels('sbb-background-color-', 1, 4),
        text: levels('sbb-color-', 1, 6),
        border: levels('sbb-border-color-', 1, 6),
        shadow: ['soft-1', 'soft-2', 'hard-1', 'hard-2'].map((key) => ({ key, variable: `sbb-shadow-color-${key}` })),
    };
};
