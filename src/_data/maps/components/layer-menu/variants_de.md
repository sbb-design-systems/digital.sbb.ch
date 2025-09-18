{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Zustände
Die Komponente hat folgende Zustände:
- Default
- Hover
- Pressed
- Expanded (nur bei Variante "List")

## Varianten
Die Komponente hat folgende Varianten:
- Mode: Light/Dark
- Size: Default/Small
- Type: Toggle/List

### Toggle
Werden in einer Anwendung nur zwei Layer angeboten, wechselt der Layer durch Klick auf den Button.

#### Default
{{ imageWithMode({
  url: '/assets/images/maps/maps-layer-menu-toggle-default',
  alt: 'Darstellung des Primary Button',
  title: 'Darstellung des Primary Button'
}) }}

#### Small
{{ imageWithMode({
  url: '/assets/images/maps/maps-layer-menu-toggle-default',
  alt: 'Darstellung des Primary Button',
  title: 'Darstellung des Primary Button'
}) }}


### List 
Durch Klick auf den Button öffnet sich die Auswahl der Layer, durch einen weiteren Klick oder Navigation mittels Tabulator oder Pfeiltaste kann die Wahl getroffen werden. Wird auf einen Layer geklickt, schliesst sich die Auswahl und der Layer wird angepasst.

#### Default
{{ imageWithMode({
  url: '/assets/images/maps/maps-layer-menu-list-default',
  alt: 'Darstellung des Primary Button',
  title: 'Darstellung des Primary Button'
}) }}

#### Small
{{ imageWithMode({
  url: '/assets/images/maps/maps-layer-menu-list-small',
  alt: 'Darstellung des Primary Button',
  title: 'Darstellung des Primary Button'
}) }}