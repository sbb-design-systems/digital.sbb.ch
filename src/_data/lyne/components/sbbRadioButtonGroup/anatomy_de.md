
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_radio_button_group',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1a|Komponente|`sbb-radiobutton`|Nein|checked|
|1b|Komponente|`sbb-radiobutton`|Nein|unchecked|
|2|Error|`sbb-form-error`|–||


{.sbb-table}

</sbb-table-wrapper>