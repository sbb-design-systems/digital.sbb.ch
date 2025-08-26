{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Zustände
Die Komponente hat folgende Zustände: {.lead}
* Default

## Varianten

### Icon
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Status_Icon',
  alt: 'Darstellung eines Status mit Icon',
  title: 'Status mit Icon'
}) }}

* Diese Variante dient als platzsparende Variante, welche z.B. in einer Tabelle eingesetzt werden kann. {.lead}

### Text 
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Status_Text',
  alt: 'Darstellung eines Status mit Text',
  title: 'Status mit Text'
}) }}

* Diese Variante dient als platzsparende Variante, welche z.B. in einer Tabelle eingesetzt werden kann, wenn Icons nicht selbsterklärend sind. {.lead}

### Extended 
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Status_Extended',
  alt: 'Darstellung eines Status mit Icon und Text',
  title: 'Status mit Icon und Text'
}) }}

* Diese Variante soll vor allem in der Detailansicht eines Objekts eingesetzt werden. {.lead}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A8015&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/status?variant=lean'
}) }}