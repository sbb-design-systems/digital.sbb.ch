---
tags: dialog-title-lyne_de
order: 2
permalink: false
---

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_dialog',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-dialog-title`|Nein||
|1a|Komponente|`sbb-secondary-button`|Ja|Back-Button|
|1b|Komponente|`sbb-secondary-button`|Nein||
|1c|Komponente|`sbb-secondary-button`|Ja|Close-Action|
|2|Komponente|`sbb-title`|Nein||
|2a|Slot|Beliebiger Inhalt erlaubt|Nein||
|3|Komponente|`sbb-dialog-actions`|Ja||
|3a|Komponente|`sbb-secondary-button`|Ja|Auch Block-Links sind erlaubt|
|3b|Komponente|`sbb-button`|Ja|Auch Block-Links sind erlaubt|


{.sbb-table}

</sbb-table-wrapper>