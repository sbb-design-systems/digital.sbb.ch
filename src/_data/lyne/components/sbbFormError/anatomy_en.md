
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_expansion_panel',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}

<sbb-table-wrapper>

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1|Standard-HTML|`input`|No||
|1b|Standard-HTML|`input`|Yes|Placeholder|
|2|Standard-HTML|`input`|No||
|3|Component|`sbb-icon`|Yes|Prefix|
|4|Component|`sbb-icon` oder `sbb-form-field-clear`|Yes|Suffix|
|5|Component|`sbb-form-error`|No|Datei auswählen|


{.sbb-table}

</sbb-table-wrapper>