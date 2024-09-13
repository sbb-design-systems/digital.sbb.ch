
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_teaser_product_static',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}

<sbb-table-wrapper>

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1|Component|`sbb-image`|No||
|2|Slot|Für textuellen Inhalt.|No||
|3|Component|`sbb-action-group`|No|Contains multpile buttons or links|
|4|Slot|Footnote|Yes||


{.sbb-table}

</sbb-table-wrapper>