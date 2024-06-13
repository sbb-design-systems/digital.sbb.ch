---
tags: selection-panel-lyne_en
title: Anatomy
key: selection-panel-lyne-anatomy_en
parent: selection-panel-lyne_en
icon: specification
order: 2
permalink: false
---

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_selection_panel',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1|Component|`sbb-checkbox` oder `sbb-radiobutton`|No||
|2|Text|Subtext|Yes||
|3|Slot|Suffix|Yes||
|3a|Component|`sbb-icon`|Yes||
|3b|Text||Yes||
|4|Component|`sbb-card-badge`|Yes||
|5|Component|`sbb-divider`|–|Erscheint wenn Inhalt (6) vorhanden ist.|
|6|Slot|Beliebiger Inhalt erlaubt|Yes||