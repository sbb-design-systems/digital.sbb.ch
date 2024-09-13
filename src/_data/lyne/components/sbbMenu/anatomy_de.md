
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_menu',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-menu-button` oder `sbb-menu-link`|Nein||
|1a|Komponente|`sbb-icon`|Nein||
|1b|Text|Label|Ja||
|2|Komponente|`sbb-divider`|Ja||


{.sbb-table}

</sbb-table-wrapper>