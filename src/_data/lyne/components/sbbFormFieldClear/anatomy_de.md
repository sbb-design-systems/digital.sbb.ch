
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_expansion_panel',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Standard-HTML|`input`|Nein||
|1b|Standard-HTML|`input`|Ja|Placeholder|
|2|Standard-HTML|`input`|Nein||
|3|Komponente|`sbb-icon`|Ja|Prefix|
|4|Komponente|`sbb-icon` oder `sbb-form-field-clear`|Ja|Suffix|
|5|Komponente|`sbb-form-error`|Nein|Datei auswählen|


{.sbb-table}

</sbb-table-wrapper>