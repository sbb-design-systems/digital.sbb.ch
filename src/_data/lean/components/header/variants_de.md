{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Varianten

### Standard
Diese Variante hat folgende Zustände: {.lead}
* Default

{{ imageOnGreyBackground({
  url: '/assets/images/lean/Header_Default',
  alt: 'Darstellung des Headers',
  title: 'Header'
}) }}

### Submenu
Diese Variante hat folgende Zustände: {.lead}
* Collapsed
* Expanded
* Hover

{{ imageOnGreyBackground({
  url: '/assets/images/lean/Header_Submenu',
  alt: 'Darstellung des Headers mit Unternavigation',
  title: 'Header mit Unternavigation'
}) }}

### Suite
Diese Variante hat folgende Zustände: {.lead}
* Collapsed
* Expanded

{{ imageOnGreyBackground({
  url: '/assets/images/lean/Header_Suite',
  alt: 'Darstellung des Headers mit der Navigation einer Suite zum Wechsel zwischen Anwendungen',
  title: 'Header mit der Navigation einer Suite zum Wechsel zwischen Anwendungen'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A7861&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/header-lean?variant=lean'
}) }}