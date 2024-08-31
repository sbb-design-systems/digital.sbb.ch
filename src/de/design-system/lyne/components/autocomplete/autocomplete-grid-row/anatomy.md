---
tags: autocomplete-grid-row-lyne_de
title: Anatomy
parent: autocomplete-grid-row-lyne_de
order: 2
permalink: false
---

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_autocomplete_grid',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-form-field`|Nein||
|1a|Standard-HTML|`label`|Nein||
|1b|Standard-HTML|`input`|Nein||
|1c|Komponente|`sbb-icon`|Ja|Prefix|
|1d|Komponente|`sbb-icon`|Ja|Suffix|
|2|Komponente|`sbb-autocomplete-grid-optgroup`|Ja||
|2a|Text|Label|Nein||
|2b|Komponente|`sbb-divider`|-|Erscheint bei einer `sbb-autocomplete-grid-optgroup`|
|3|Komponente|`sbb-autocomplete-grid-row`|Nein||
|4|Komponente|`sbb-autocomplete-grid-option`|Nein||
|4a|Text|Value|Nein||
|4b|Komponente|`sbb-icon`|Ja||
|5|Komponente|`sbb-autocomplete-grid-cell`|Ja||
|6|Komponente|`sbb-autocomplete-grid-button`|Ja||


{.sbb-table}

</sbb-table-wrapper>
