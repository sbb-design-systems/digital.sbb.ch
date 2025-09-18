{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Zustände
Die Komponente hat folgende Zustände: {.lead}
* Default
* Focused
* Disabled
* Error
* Mandatory
* Readonly

## Varianten

### Standard
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Textarea_Default',
  alt: 'Darstellung eines Textareas',
  title: 'Textarea'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A8071&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/textarea?variant=lean'
}) }}