---
tags: dialog-lyne_en
title: Anatomy
key: dialog-lyne-anatomy_en
parent: dialog-lyne_en
icon: specification
order: 2
permalink: false
---

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_dialog',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}

<sbb-table-wrapper>

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1|Component|`sbb-dialog-title`|No||
|1a|Component|`sbb-secondary-button`|Yes|Back-Button|
|1b|Component|`sbb-secondary-button`|No||
|1c|Component|`sbb-secondary-button`|Yes|Close-Action|
|2|Component|`sbb-title`|No||
|2a|Slot|Beliebiger Inhalt erlaubt|No||
|3|Component|`sbb-dialog-actions`|Yes||
|3a|Component|`sbb-secondary-button`|Yes|Auch Block-Links sind erlaubt|
|3b|Component|`sbb-button`|Yes|Auch Block-Links sind erlaubt|


{.sbb-table}

</sbb-table-wrapper>

