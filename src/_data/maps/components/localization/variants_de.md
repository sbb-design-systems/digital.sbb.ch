{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Zustände
Die Komponente hat folgende Zustände:
- Default
- Hover
- Pressed

## Varianten
Die Komponente hat folgende Varianten:
- Mode: Light/Dark
- Size: Default/Small

### Default
{{ imageWithMode({
  url: '/assets/images/maps/maps-localisation-default',
  alt: 'Darstellung des Primary Button',
  title: 'Darstellung des Primary Button'
}) }}

### Small
{{ imageWithMode({
  url: '/assets/images/maps/maps-localisation-small',
  alt: 'Darstellung des Primary Button',
  title: 'Darstellung des Primary Button'
}) }}