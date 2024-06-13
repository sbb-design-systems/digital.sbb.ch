---
tags: selection-panel-lyne_de
title: Anatomie
key: selection-panel-lyne-anatomy_de
parent: selection-panel-lyne_de
icon: specification
order: 2
permalink: false
---

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_selection_panel',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-checkbox` oder `sbb-radiobutton`|Nein||
|2|Text|Subtext|Ja||
|3|Slot|Suffix|Ja||
|3a|Komponente|`sbb-icon`|Ja||
|3b|Text||Ja||
|4|Komponente|`sbb-card-badge`|Ja||
|5|Komponente|`sbb-divider`|–|Erscheint wenn Inhalt (6) vorhanden ist.|
|6|Slot|Beliebiger Inhalt erlaubt|Ja||