
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_date_picker',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-form-field`|Nein||
|1a|Standard-HTML|`input`|Nein||
|1b|Standard-HTML|`label`|Nein||
|1c|Komponente|`sbb-datepicker-previous-day`|Ja||
|1d|Komponente|`sbb-datepicker-toggle`|Ja||
|1e|Komponente|`sbb-datepicker-next-day`|Ja||
|2|Komponente|`sbb-datepicker`|Nein||


{.sbb-table}

</sbb-table-wrapper>