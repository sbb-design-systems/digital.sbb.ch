{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Zustände 
Die Komponente hat folgende Zustände: {.lead}
* Default
* Disabled

## Varianten

### Standard
{{ imageOnGreyBackground({
  url: '/assets/images/lean/fileselector_default',
  alt: 'Darstellung des Fileselectors',
  title: 'Fileselector'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A7833&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/file-selector?variant=lean'
}) }}