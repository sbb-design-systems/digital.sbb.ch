{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Use
* The logo is used in all SBB applications. {.lead}

## Rules
* The logo appears exactly once per page and is always located in the <sbb-link variant="inline" type="button" href="/en/design-system/lean/components/header/">header</sbb-link>. {.lead}
* It is always positioned top right. {.lead}
* Variations of the logo are not permitted. {.lead}
* The logo is not linked. {.lead}

## Variants
### Default
{{ imageOnGreyBackground({
  url: '/assets/images/lean/logo_default',
  alt: 'Image of the SBB logo',
  title: 'SBB logo'
}) }}

## Specifications
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=173%3A138444&t=ZF5MfeXb0Gz2GkUw-1'
}) }}