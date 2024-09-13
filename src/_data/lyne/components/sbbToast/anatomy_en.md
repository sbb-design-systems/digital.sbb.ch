
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_toast',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}

<sbb-table-wrapper>

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1|Text||No||
|2|Component|`sbb-icon`|Yes||
|3a|Component|`sbb-transparent-button`|Yes||
|3b|Component|`sbb-link-button`|Yes||


{.sbb-table}

</sbb-table-wrapper>