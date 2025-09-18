{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Zustände
Die Komponente hat folgende Zustände: {.lead}
* Default
* Hover
* Active

## Varianten

### Standard
{{ imageOnGreyBackground({
  url: '/assets/images/lean/autocompletion_default',
  alt: 'Darstellung des Autocompletes',
  title: 'Autocomplete'
}) }}

### Mit Trefferanzeige
Optional zur Standard-Variante kann diese Variante eingesetzt werden, wenn eine Autocompletion-Liste immer mehr als die maximal angezeigten 10 Treffer beinhaltet. {.lead}
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Autocompletion_Overflow',
  alt: 'Darstellung des Autocompletes mit Trefferanzeige',
  title: 'Autocomplete mit Trefferanzeige'
}) }}

### Mit statischen Einträgen
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Autocompletion_Static',
  alt: 'Darstellung des Autocompletes mit mit statischen Einträgen',
  title: 'Autocompletes mit mit statischen Einträgen'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=2%3A28352&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/autocomplete?variant=lean'
}) }}