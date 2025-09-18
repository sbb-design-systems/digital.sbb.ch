{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## States
The component has the following states:
* LoggedOut
* Collapsed
* Expanded
* Hover

## Variants
### Default
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Usermenu_default',
  alt: 'Image of a user menu',
  title: 'User menu'
}) }}

### Role selection
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Usermenu_Rollenauswahl',
  alt: 'Image of a user menu with role selection',
  title: 'User menu with role selection'
}) }}

## Specifications
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A8169&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/usermenu?variant=lean'
}) }}