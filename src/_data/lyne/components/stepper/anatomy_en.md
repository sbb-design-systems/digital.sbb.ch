
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_stepper',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}

<sbb-table-wrapper>

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1a|Component|`sbb-step-label`|No|Completed step|
|1b|Component|`sbb-step-label`|No|Current step|
|1c|Component|`sbb-step-label`|No|Next step|
|2|Component|`sbb-step`|No|Displays the content of the step|


{.sbb-table}

</sbb-table-wrapper>