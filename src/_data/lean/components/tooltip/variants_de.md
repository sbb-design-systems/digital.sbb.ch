{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Zustände
Die Komponente hat folgende Zustände: {.lead}
* Hidden
* Hover
* Visible Above
* Visible Underneath
* Visible Left
* Visible Right

## Varianten
### Standard
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Tooltip_Default',
  alt: 'Darstellung des Tooltips',
  title: 'Tooltip'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?type=design&node-id=13%3A8141&mode=design&t=WFRiwpqlU8uiqPiI-1',
  github: 'https://angular.app.sbb.ch/angular/components/tooltip?variant=lean'
}) }}