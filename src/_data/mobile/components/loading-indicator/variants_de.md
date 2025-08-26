{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Varianten
*   Farbe: Default (red) / Grey / White
*   Grösse: Default / Small
   
### Default
{{ imageWithMode({
  url: '/assets/images/mobile/loading-indicator-default',
  alt: 'Darstellung des Loading Indicatiors, default',
  title: 'Loading Indicatiors, default'
}) }}

### Small
{{ imageWithMode({
  url: '/assets/images/mobile/loading-indicator-small',
  alt: 'Darstellung des Loading Indicatiors, small',
  title: 'Loading Indicatiors, small'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ZBotr4yqcEKqqVEJTQfSUa/Design-System-Mobile?node-id=33-538&t=OQ7s4wE6eWI2fLGh-1'
}) }}