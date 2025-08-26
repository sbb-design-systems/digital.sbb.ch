{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## States 
The component has the following states: {.lead}
* Default
* Disabled

## Variants
### Default
{{ imageOnGreyBackground({
  url: '/assets/images/lean/fileselector_default',
  alt: 'Image of the file selector',
  title: 'file selector'
}) }}

## Specifications
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A7833&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/file-selector?variant=lean'
}) }}