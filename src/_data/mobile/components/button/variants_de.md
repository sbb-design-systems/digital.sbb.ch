{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Zustände
Die Komponente hat folgende Zustände: {.lead}
*   Normal
*   Pressed
*   Disabled
*   Loading

## Varianten
### Primary
{{ imageWithMode({
  url: '/assets/images/mobile/Primary',
  alt: 'Darstellung des Primary Button',
  title: 'Primary Button'
}) }}

*   Ganze Breite des Screens oder des modalen Dialogs (abzüglich Abstand). {.lead}

### Secondary
{{ imageWithMode({
  url: '/assets/images/mobile/Secondary',
  alt: 'Darstellung des Secondary Button',
  title: 'Secondary Button'
}) }}

*   Ganze Breite des Screens oder des modalen Dialogs (abzüglich Abstand). {.lead}


### Tertiary
#### Label und Icon
{{ imageWithMode({
  url: '/assets/images/mobile/Tertiary-label-and-icon',
  alt: 'Darstellung des Tertiary Buttons mit Label und Icon',
  title: 'Tertiary Buttons mit Label und Icon'
}) }}

#### Label
{{ imageWithMode({
  url: '/assets/images/mobile/Tertiary-label',
  alt: 'Darstellung des Tertiary Buttons mit Label und Icon',
  title: 'Tertiary Buttons mit Label und Icon'
}) }}

#### Icon
{{ imageWithMode({
  url: '/assets/images/mobile/Tertiary-icon',
  alt: 'Darstellung des Tertiary Buttons mit Icon',
  title: 'Tertiary Buttons mit Icon'
}) }}

### Tertiary small
#### Label und Icon
{{ imageWithMode({
  url: '/assets/images/mobile/Tertiary-small-label-and-icon',
  alt: 'Darstellung des Tertiary Small Buttons mit Label und Icon',
  title: 'Tertiary Small Buttons mit Label und Icon'
}) }}

#### Label
{{ imageWithMode({
  url: '/assets/images/mobile/Tertiary-small-label',
  alt: 'Darstellung des Tertiary Small Buttons mit Label',
  title: 'Tertiary Small Buttons mit Label'
}) }}


#### Icon
{{ imageWithMode({
  url: '/assets/images/mobile/Tertiary-small-icon',
  alt: 'Darstellung des Tertiary Small Buttons mit Icon',
  title: 'Tertiary Small Buttons mit Icon'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ZBotr4yqcEKqqVEJTQfSUa/Design-System-Mobile?node-id=7-12&t=OQ7s4wE6eWI2fLGh-1'
}) }}