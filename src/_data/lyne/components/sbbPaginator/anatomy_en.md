
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_pagination',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}

<sbb-table-wrapper>

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1|Component|Previous and next buttons|No||
|2a|Component|Page, active|No||
|2b|Component|Page|No||
|3|Label||Yes||
|4|Component|`sbb-select`|Yes||


{.sbb-table}

</sbb-table-wrapper>