{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Zustände
Die Komponente hat folgende Zustände: {.lead}
* Default
* Hover
* Active

## Varianten

### Standard
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Menuitem_Default',
  alt: 'Darstellung eines Menuitems',
  title: 'Menuitem'
}) }}

* Das hier gewählte Icon soll dann eingesetzt werden, wenn das Menuitem den bestehenden Content ersetzt. {.lead}

### Icon
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Menuitem_Icon',
  alt: 'Darstellung des Menuitems mit Icon',
  title: 'Menuitem mit Icon'
}) }}

* Das hier gewählte Icon soll dann eingesetzt werden, wenn der Inhalt hinter dem Menuitem extern (z.B. in einem neuen Tab) geöffnet wird. {.lead}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A7903&t=ZF5MfeXb0Gz2GkUw-1'
}) }}