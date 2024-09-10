
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_flip_card',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-flip-card-summary`|Nein||
|1a|Komponente|`sbb-title`|Nein||
|1b|Komponente|`sbb-image`|Nein||
|1c|Komponente|`sbb-secondary-button`|Nein|Open-Action|
|2|Komponente|`sbb-flip-card-details`|Nein||
|2a|Text|Slot|Nein||
|2b|Komponente|`sbb-link`|Ja||
|2c|Komponente|`sbb-secondary-button`|Nein|Close-Action|


{.sbb-table}

</sbb-table-wrapper>