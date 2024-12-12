
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_menu',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}

<sbb-table-wrapper>

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1|Component|`sbb-menu-button` oder `sbb-menu-link`|No||
|1a|Component|`sbb-icon`|No||
|1b|Text|Label|Yes||
|2|Component|`sbb-divider`|Yes||


{.sbb-table}

</sbb-table-wrapper>