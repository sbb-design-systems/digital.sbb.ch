
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_select',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}

<sbb-table-wrapper>

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1|Component|`sbb-form-field`|No||
|1a|Standard-HTML|`input`|No||
|1b|Standard-HTML|`label`|No||
|1c|Component|`sbb-icon`|No|Zeigt Zustand an.|
|1d|Component|`sbb-icon`|Yes|Prefix|
|2|Component|`sbb-optgroup`|Yes||
|2a|Text|Label|No||
|2b|Component|`sbb-divider`|-|Erscheint bei einer `optgroup`|
|3|Component|`sbb-option`|No||
|3a|Text|Value|No||
|3b|Component|`sbb-icon`|Yes|Zeigt angewählte Option an.|


{.sbb-table}

</sbb-table-wrapper>