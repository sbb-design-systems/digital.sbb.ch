{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Zustände
Die Komponente hat folgende Zustände: {.lead}
* LoggedOut
* Collapsed
* Expanded
* Hover

## Varianten

### Standard
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Usermenu_Default',
  alt: 'Darstellung eines Usermenüs',
  title: 'Usermenü'
}) }}

### Rollenauswahl
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Usermenu_Rollenauswahl',
  alt: 'Darstellung eines Usermenüs mit Rollenauswahl',
  title: 'Usermenü mit Rollenauswahl'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A8169&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/usermenu?variant=lean'
}) }}