
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_header',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}

<sbb-table-wrapper>

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1|Component|`sbb-header-button` oder `sbb-header-link`|No||
|1a|Component|`sbb-icon`|No||
|1b|Text|Label|Yes||
|1c|Component|`sbb-menu`|Yes||
|2|Component|`sbb-logo`|Yes||


{.sbb-table}

</sbb-table-wrapper>