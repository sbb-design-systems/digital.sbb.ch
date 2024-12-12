
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_file_selector',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-secondary-button`|Nein|Datei auswählen|
|2|Text|Label|Nein||
|3|Komponente|`sbb-secondary-button`|Nein|Delete-Button|
|4|Text|Dateigrösse|Nein||
|5|Komponente|`sbb-form-error`|Nein||


{.sbb-table}

</sbb-table-wrapper>