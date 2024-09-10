
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_checkbox_panel',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Text|Label|Nein||
|2|Text|Subtext|Ja||
|3|Slot|Suffix|Ja||
|3a|Komponente|`sbb-icon`|Ja||
|3b|Text||Ja||
|4|Komponente|`sbb-card-badge`|Ja||


{.sbb-table}

</sbb-table-wrapper>