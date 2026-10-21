// Asset-Filter: Cache-Busting für CSS/JS und Bildmasse gegen Layout Shifts
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

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

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("assetHash", assetHash);
    eleventyConfig.addFilter("imageAttrs", imageAttrs);
};
