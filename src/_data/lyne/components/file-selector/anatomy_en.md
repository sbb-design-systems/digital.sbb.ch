
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_file_selector',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}

<sbb-table-wrapper>

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1|Component|`sbb-secondary-button`|No|Choose file|
|2|Text|Label|No||
|3|Component|`sbb-secondary-button`|No|Delete button|
|4|Text|Dateigrösse|No||
|5|Component|`sbb-form-error`|No||


{.sbb-table}

</sbb-table-wrapper>