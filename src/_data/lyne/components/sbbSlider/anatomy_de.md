
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_slider',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-icon`|Ja|Prefix|
|2|Komponente|Slider|Nein||
|1|Komponente|`sbb-icon`|Ja|Suffix|


{.sbb-table}

</sbb-table-wrapper>