
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_date_picker',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}

<sbb-table-wrapper>

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1|Component|`sbb-form-field`|No||
|1a|Standard-HTML|`input`|No||
|1b|Standard-HTML|`label`|No||
|1c|Component|`sbb-datepicker-previous-day`|Yes||
|1d|Component|`sbb-datepicker-toggle`|Yes||
|1e|Component|`sbb-datepicker-next-day`|Yes||
|2|Component|`sbb-datepicker`|No||


{.sbb-table}

</sbb-table-wrapper>
