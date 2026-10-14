// Template-Browser: setzt die gewählte Breite als data-viewport auf die Bühne (Breiten im CSS,
// nur ab Breakpoint ultra wirksam) und zeigt die effektive Breite des iFrames an.
(() => {
  const group = document.getElementById("template-viewport");
  const stage = document.querySelector(".template-browser-stage");
  const iframe = stage && stage.querySelector("iframe");
  const sizeLabel = document.querySelector(".template-browser-size");

  if (!group || !stage || !iframe) {
    return;
  }

  let currentValue = stage.dataset.viewport;

  group.addEventListener("change", () => {
    const value = Array.isArray(group.value) ? group.value[0] : group.value;
    if (value) {
      currentValue = value;
      stage.dataset.viewport = value;
    } else {
      // Abwählen des aktiven Tags verhindern: es ist immer eine Breite gewählt.
      group.value = currentValue;
    }
  });

  new ResizeObserver(() => {
    sizeLabel.textContent = `${Math.round(iframe.getBoundingClientRect().width)} px`;
  }).observe(iframe);
})();
