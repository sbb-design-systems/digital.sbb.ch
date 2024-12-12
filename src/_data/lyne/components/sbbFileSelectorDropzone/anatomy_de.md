
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_file_selector_dropzone',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-icon`|Nein||
|2|Komponente|`sbb-title`|Nein||
|3|Area|Dropzone|Ja||
|4|Text|Subtext|Nein||
|5|Komponente|`sbb-secondary-button`|Nein|Datei auswählen|
|6|Text|Label|Nein||
|7|Komponente|`sbb-secondary-button`|Nein|Delete-Button|
|8|Text|Dateigrösse|Nein||
|9|Komponente|`sbb-form-error`|Nein||


{.sbb-table}

</sbb-table-wrapper>