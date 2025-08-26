{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Zustände 
Die Komponente hat folgende Zustände: {.lead}
* Active
* Inactive
* Hover
* Disabled

## Varianten

### Standard
{{ imageOnGreyBackground({
  url: '/assets/images/lean/tab_default',
  alt: 'Darstellung eines Tabs',
  title: 'Tab'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A8029&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/tabs?variant=lean'
}) }}