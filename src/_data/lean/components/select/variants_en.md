{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Ausprägungen und Zustände
The component has the following states: {.lead}
* Default
* Placeholder
* Focused
* Disabled
* Error
* Mandatory
* Readonly
* Expanded

## Variants

### Default
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Select_default',
  alt: 'Image of a select',
  title: 'Select'
}) }}

### Multiple choice 
{{ imageOnGreyBackground({
  url: '/assets/images/lean/select_multi',
  alt: 'Image of a select, multiple choice',
  title: 'Select, multiple choice'
}) }}

### Grouped single choice
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Select_Grouped_Single',
  alt: 'Image of a select, grouped single choice',
  title: 'Select, grouped single choice'
}) }}

### Grouped multiple choice
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Select_Grouped_Multi',
  alt: 'Image of a select, grouped multiple choice',
  title: 'Select, grouped multiple choice'
}) }}

## Specifications
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A7973&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/select?variant=lean'
}) }}