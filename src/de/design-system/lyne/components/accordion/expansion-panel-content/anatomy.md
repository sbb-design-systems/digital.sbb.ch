---
tags: expansion-panel-content-lyne_de
order: 2
permalink: false
---

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_expansion_panel',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-extension-panel`|Nein||
|2|Komponente|`sbb-expansion-panel-header`|Nein||
|2a|Komponente|`sbb-icon`|Ja||
|2b|Text|Label|Nein||
|2c|Komponente|`sbb-icon`|Nein|Zeigt den Zustand an|
|3|Komponente|`sbb-expansion-panel-content`|Nein||
|3a|Slot|Beliebiger Inhalt erlaubt|Nein||


{.sbb-table}

</sbb-table-wrapper>