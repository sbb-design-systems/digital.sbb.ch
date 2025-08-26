{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Zustände
Die Komponente hat folgende Zustände: {.lead}
* Active
* Disabled
* Hover
* Focused

## Varianten

### Input
{{ imageOnGreyBackground({
  url: '/assets/images/lean/chip_input',
  alt: 'Darstellung des Chip',
  title: 'Chip'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=2%3A5321&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/chips?variant=lean'
}) }}