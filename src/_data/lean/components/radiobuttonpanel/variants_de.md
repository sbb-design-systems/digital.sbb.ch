{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Zustände
Die Komponente hat folgende Zustände: {.lead}
* Checked
* Unchecked
* Disabled checked
* Disabled unchecked
* Error

## Varianten
### Standard
{{ imageOnGreyBackground({
  url: '/assets/images/lean/radiobuttonpanel_default',
  alt: 'Darstellung der Komponente Radiobuttonpanel in der Variante Standard',
  title: 'Darstellung der Komponente Radiobuttonpanel in der Variante Standard'
}) }}

### Mit Infotext
{{ imageOnGreyBackground({
  url: '/assets/images/lean/radiobuttonpanel_infotext',
  alt: 'Darstellung der Komponente Radiobuttonpanel mit zusätzlichem Hinweistext',
  title: 'Darstellung der Komponente Radiobuttonpanel mit zusätzlichem Hinweistext'
}) }}

### Mit Piktogramm / Logo
{{ imageOnGreyBackground({
  url: '/assets/images/lean/radiobuttonpanel_picto',
  alt: 'Darstellung der Komponente Radiobuttonpanel mit zusätzlichem Piktogramm oder Logo',
  title: 'Darstellung der Komponente Radiobuttonpanel mit zusätzlichem Piktogramm oder Logo'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?type=design&node-id=665%3A238755&mode=design&t=n3vyXhvclFxVypWH-1',
  github: 'https://angular.app.sbb.ch/angular/components/radio-button-panel?variant=lean'
}) }}