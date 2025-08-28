
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_select',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-form-field`|Nein||
|1a|Standard-HTML|`input`|Nein||
|1b|Standard-HTML|`label`|Nein||
|1c|Komponente|`sbb-icon`|Nein|Zeigt Zustand an.|
|1d|Komponente|`sbb-icon`|Ja|Prefix|
|2|Komponente|`sbb-optgroup`|Ja||
|2a|Text|Label|Nein||
|2b|Komponente|`sbb-divider`|-|Erscheint bei einer `optgroup`|
|3|Komponente|`sbb-option`|Nein||
|3a|Text|Value|Nein||
|3b|Komponente|`sbb-icon`|Ja|Zeigt angewählte Option an.|


{.sbb-table}

</sbb-table-wrapper>