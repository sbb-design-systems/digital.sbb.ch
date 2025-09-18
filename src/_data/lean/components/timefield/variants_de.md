{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Zustände 
Die Komponente hat folgende Zustände: {.lead}
* Default
* Placeholder
* Focused
* Disabled
* Mandatory
* Readonly

## Varianten

### Standard
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Timefield_Default',
  alt: 'Darstellung Zeiteingabe',
  title: 'Zeiteingabe'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A8113&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/time-input?variant=lean'
}) }}