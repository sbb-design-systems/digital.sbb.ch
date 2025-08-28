
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_header',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-header-button` oder `sbb-header-link`|Nein||
|1a|Komponente|`sbb-icon`|Nein||
|1b|Text|Label|Ja||
|1c|Komponente|`sbb-menu`|Ja||
|2|Komponente|`sbb-logo`|Ja||


{.sbb-table}

</sbb-table-wrapper>