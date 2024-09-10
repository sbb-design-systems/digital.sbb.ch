
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_tag_group',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1a|Komponente|`sbb-tag`|Nein|Aktiver Zustand|
|1b|Komponente|`sbb-tag`|Nein|Default Zustand|


{.sbb-table}

</sbb-table-wrapper>
