
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_teaser_product',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-image`|Nein||
|2|Slot|Für textuellen Inhalt.|Nein||
|3|Komponente|`sbb-button`|Nein||
|4|Slot|Footnote|Ja||


{.sbb-table}

</sbb-table-wrapper>