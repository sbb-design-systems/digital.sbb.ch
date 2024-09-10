
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_file_selector',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}

<sbb-table-wrapper>

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1|Component|`sbb-icon`|No||
|2|Component|`sbb-title`|No||
|3|Area|Dropzone|Yes|Der File-Selector kann auf ein Button (5) reduziert werden.|
|4|Text|Subtext|No||
|5|Component|`sbb-secondary-button`|No|Datei auswählen|
|6|Text|Label|No||
|7|Component|`sbb-secondary-button`|No|Delete-Button|
|8|Text|Dateigrösse|No||
|9|Component|`sbb-form-error`|No||


{.sbb-table}

</sbb-table-wrapper>