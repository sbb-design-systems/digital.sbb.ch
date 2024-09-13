
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_container',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Slot|Beliebiger Inhalt erlaubt|Nein||
|2|Komponente|`sbb-sticky-bar`|Ja||
|2a|Slot|z.B. für Action-Group|Nein||


{.sbb-table}

</sbb-table-wrapper>