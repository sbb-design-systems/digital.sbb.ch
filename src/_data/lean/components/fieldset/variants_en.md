{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## States
The component has the following states: {.lead}
* Default

## Variants

### Default
{{ imageOnGreyBackground({
  url: '/assets/images/lean/fieldset_default',
  alt: 'Image of the fieldset component',
  title: 'Fieldset'
}) }}

### Complex fieldset
{{ imageOnGreyBackground({
  url: '/assets/images/lean/fieldset_nested',
  alt: 'Image of the fieldset component with complex content',
  title: 'Fieldset with complex content'
}) }}

## Specifications
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A7819&t=ZF5MfeXb0Gz2GkUw-1'
}) }}