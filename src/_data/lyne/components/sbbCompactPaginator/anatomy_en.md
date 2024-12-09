
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_popover',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}

<sbb-table-wrapper>

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1|Slot|Beliebiger Inhalt erlaubt|No||
|2|Component|`sbb-secondary-button`|No||
|3|Component|`sbb-popover-trigger` oder beliebiger Inhalt|No|Wenn kein Icon oder anderer Inhalt angegeben wird, wird das Info-Icon angezeigt.|


{.sbb-table}

</sbb-table-wrapper>