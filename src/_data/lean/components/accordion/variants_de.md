{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Zustände
Die Komponente hat die folgende Zustände: {.lead}
* Collapsed
* Expanded

## Varianten
### Standard
{{ imageOnGreyBackground({
  url: '/assets/images/lean/accordion_default',
  alt: 'Darstellung des Accordions',
  title: 'Accordion'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=2%3A2&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/accordion?variant=lean'
}) }}