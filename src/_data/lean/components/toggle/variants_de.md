{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Zustände
Die Komponente hat folgende Zustände: {.lead}
* Active
* Inactive

Es kann nur eine Option gewählt werden (active). Die restlichen Optionen sind inaktiv. {.lead}

## Varianten

### Double 
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Toggle_Double',
  alt: 'Darstellung des Toggle-Buttons mit zwei Auswahloptionen',
  title: 'Toggle-Button mit zwei Auswahloptionen'
}) }}

### Triple
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Toggle_Triple',
  alt: 'Darstellung des Toggle-Buttons mit drei Auswahloptionen',
  title: 'Toggle-Button mit drei Auswahloptionen'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A8127&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/toggle?variant=lean'
}) }}