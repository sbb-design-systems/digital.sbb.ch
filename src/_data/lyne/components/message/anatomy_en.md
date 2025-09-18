
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_message',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}

<sbb-table-wrapper>

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1|Component|`sbb-image`|Yes||
|2|Component|`sbb-title`|No||
|3|Text|Subtitle|Yes||
|4|Text|Legend|Yes||
|5|Component|`sbb-secondary-button`|Yes||


{.sbb-table}

</sbb-table-wrapper>