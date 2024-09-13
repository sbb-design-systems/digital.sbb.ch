
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_navigation',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-navigation-marker`|Nein||
|1a|Komponente|`sbb-navigation-link` oder `sbb-navigation-button`|Nein||
|2|Komponente|`sbb-navigation-section`|Nein||
|3|Text|Label|Nein||
|4|Komponente|`sbb-navigation-list`|Nein||
|4a|Text|Label|Nein||
|4b|Komponente|`sbb-navigation-link` oder `sbb-navigation-button`|Nein||
|5|Komponente|`sbb-transparent-button`|Nein||


{.sbb-table}

</sbb-table-wrapper>