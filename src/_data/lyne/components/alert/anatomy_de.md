{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_alert',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-icon`|Nein||
|2|Komponente|`sbb-title`|Nein||
|3|Text||Nein||
|4|Komponente|`sbb-link`|Ja||
|5|Komponente|`sbb-divider`|-|Erscheint bei `readonly="false"`|
|6|Komponente|`sbb-transparent-button`|-|Erscheint bei `readonly="false"`|


{.sbb-table}

</sbb-table-wrapper>