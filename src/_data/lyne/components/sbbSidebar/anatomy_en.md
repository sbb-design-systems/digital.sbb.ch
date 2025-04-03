
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_sidebar',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}

<sbb-table-wrapper>

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1|Component|`sbb-sidebar-title`|Yes||
|2|Component|`sbb-sidebar-close-button`|Yes||
|3|Content||No||
|4|Property|Backdrop|Yes|Only visible in overlay mode|
|5|Component|`sbb-icon-sidebar`|Yes||
|6|Component|`sbb-icon-sidebar-button` or `sbb-icon-sidebar-link`|No||
|6a|Component|`sbb-icon-sidebar-button` or `sbb-icon-sidebar-link`|No|Hover state with tooltip|
|6b|Component|`sbb-icon-sidebar-button` or `sbb-icon-sidebar-link`|No|Current state|


{.sbb-table}

</sbb-table-wrapper>