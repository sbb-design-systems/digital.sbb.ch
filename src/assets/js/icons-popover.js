// Ein einziges Popover für alle Icons: Inhalt und Trigger werden erst beim
// Hover/Fokus einer Kachel gesetzt, statt pro Icon ein Popover zu rendern.
(function () {
  const popover = document.getElementById("icon-popover");
  const toast = document.getElementById("icon-toast");
  const list = document.querySelector("#icons .list");
  if (!popover || !list) return;

  const title = popover.querySelector(".icon-content-title");
  const meta = popover.querySelector(".icon-content-meta");
  const items = popover.querySelector(".icon-items");
  const sizePx = { "extra-small": 16, "small": 24, "medium": 36, "large": 48 };

  function fill(tile) {
    title.textContent = tile.dataset.name;

    meta.replaceChildren(popover.dataset.labelCategory + ": " + tile.dataset.category);
    if (tile.dataset.tags) {
      meta.append(document.createElement("br"), popover.dataset.labelTags + ": " + tile.dataset.tags);
    }

    items.replaceChildren();
    if (tile.dataset.group) {
      tile.dataset.size.split(" ").forEach(function (size) {
        const name = tile.dataset.group + "-" + size;
        items.append(createItem(name, "https://icons.app.sbb.ch/icons/" + name + ".svg", size));
      });
    } else {
      // Icons ohne Grössenvarianten (Piktogramme, FPL): eine Kachel mit dem Icon selbst,
      // damit der Name auch hier im Popover kopiert werden kann.
      const src = tile.querySelector("img").src;
      items.append(createItem(src.split("/").pop().replace(/\.svg$/, ""), src, tile.dataset.size));
    }
  }

  function createItem(name, src, size) {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "icon-item";
    item.dataset.copy = name;
    item.setAttribute("aria-label", name);
    const preview = document.createElement("span");
    preview.className = "icon-preview";
    const img = document.createElement("img");
    img.className = size ? "icon-png size-" + size : "icon-png";
    img.src = src;
    img.alt = name;
    if (sizePx[size]) img.width = img.height = sizePx[size];
    preview.append(img);
    item.append(preview);
    if (size) {
      const label = document.createElement("span");
      label.className = "sbb-text-xxs";
      label.textContent = size;
      item.append(label);
    }
    return item;
  }

  function attach(tile) {
    if (!tile || popover.trigger === tile) return;
    popover.close();
    fill(tile);
    popover.trigger = tile;
  }

  // pointerover feuert vor mouseenter, damit registriert das Popover seine
  // Hover-Listener auf der neuen Kachel rechtzeitig.
  list.addEventListener("pointerover", function (e) {
    attach(e.target.closest(".icon"));
  });
  list.addEventListener("focusin", function (e) {
    attach(e.target.closest(".icon"));
  });

  function copy(name) {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(name).then(function () {
      if (!toast) return;
      toast.textContent = toast.dataset.labelCopied.replace("{name}", name);
      toast.open();
    }).catch(function () {
      // Zwischenablage nicht verfügbar (z. B. fehlende Berechtigung): Popover bleibt die Info-Quelle
    });
  }

  // Kopiert wird nur im Popover: Ein Klick auf die Kachel öffnet auf Mobile das Popover.
  // Die Vorschaubilder im Popover kopieren den Namen ihrer Variante.
  items.addEventListener("click", function (e) {
    const item = e.target.closest(".icon-item");
    if (item) copy(item.dataset.copy);
  });
})();
