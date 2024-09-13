
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_teaser_hero',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-image`|Nein||
|2|Komponente|`sbb-chip`|Ja||
|3|Text||Nein||
|4|Text|Link-Text|Nein||


{.sbb-table}

</sbb-table-wrapper>