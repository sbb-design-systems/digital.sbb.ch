
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_notification',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-title`|Ja||
|2|Text|Beschreibung|Nein||
|3|Komponente|`sbb-link`|Ja||
|4|Komponente|`sbb-icon`|Nein|Zeigt den entsprechenden Status an.|
|5|Komponente|`sbb-secondary-button`|Ja||


{.sbb-table}

</sbb-table-wrapper>