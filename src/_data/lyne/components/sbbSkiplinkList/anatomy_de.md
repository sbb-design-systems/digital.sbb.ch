
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_skiplinks',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-block-link`|Nein|Es sind mehrere Links in der Liste erlaubt. </br>Nur der jeweils fokussierte Link wird dargestellt.|


{.sbb-table}

</sbb-table-wrapper>