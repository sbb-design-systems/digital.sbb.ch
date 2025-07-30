const EleventyFetch = require("@11ty/eleventy-fetch");

const removeTags = (tags, removeList) => {
  removeList.forEach(tag => {
    const idx = tags.indexOf(tag);
    if (idx >= 0) tags.splice(idx, 1);
  });
};

module.exports = async () => {
  const result = await EleventyFetch(
    "https://icons.app.sbb.ch/icons/index.json",
    { duration: "1s", type: "json" }
  );

  const icons = result.icons;

  icons.forEach(icon => {
    icon.url = `https://icons.app.sbb.ch/icons/${icon.name}.svg`;

    if (icon.tags.includes("ui-icons")) {
      icon.type = "KOM";
      icon.category = icon.tags.at(-3);
      icon.group = icon.tags.at(-2);
      icon.size = icon.tags.at(-1).split("=").pop();
      icon.sizes = [];
      removeTags(icon.tags, [
        "ui-icons", "-", "Size=small", "Size=medium", "Size=large", "Size=extra-small"
      ]);
    }

    if (icon.tags.includes("timetable-icons")) {
      icon.type = "FPL";
      icon.size = "default";
      icon.group = "none";
      if (icon.tags.includes("Attributes")) icon.category = "Attributes";
      if (icon.tags.includes("HIM-CUS")) icon.category = "HIM-CUS";
      if (icon.tags.includes("Product-Brands")) icon.category = "Product-Brands";
      removeTags(icon.tags, [
        "timetable-icons", "-", "Attributes", "HIM-CUS", "Product-Brands"
      ]);
      ["dark", "light", "high-contrast"].forEach(mode => {
        const idx = icon.tags.indexOf(mode);
        if (idx >= 0) {
          icon.mode = mode;
          icon.tags.splice(idx, 1);
        }
      });
    }
  });

  // Gruppiere KOM-Icons nach group und sammle die sizes
  const groupMap = {};
  icons.forEach(icon => {
    if (icon.type === "KOM") {
      if (!groupMap[icon.group]) groupMap[icon.group] = [];
      groupMap[icon.group].push(icon.size);
    }
  });
  icons.forEach(icon => {
    if (icon.type === "KOM") {
      icon.sizes = groupMap[icon.group] || [];
    }
  });

  return [icons];
};