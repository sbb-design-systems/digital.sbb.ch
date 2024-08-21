---
tags: lightbox-legacy_en
title: States and variants
key: lightbox-legacy-variants-states_en
parent: lightbox-legacy_en
icon: variantsstates
order: 2
permalink: false  
---

## Variants

### Default
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/lightbox_default',
  alt: 'Image of a lightbox, default',
  title: 'Lightbox, default'
}) }}

### With form components
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/lightbox_form',
  alt: 'Image of a lightbox with form components',
  title: 'Lightbox with form components'
}) }}

* A lightbox with form elements contains at least a ‘cancel’ and an ‘apply’ button. {.lead}
* The ‘cancel’ button closes the lightbox again. {.lead}
* If the lightbox is closed (‘cancel’ or X-button) when existing entries in the form have been changed, a warning message appears indicating that the form contains unsaved data. {.lead}
* The buttons of a form (‘cancel’, ‘apply’, other functions) may be inserted in the footer. 
* The footer is always sticky and is displayed across the entire width of the lightbox (the same as the header). {.lead}

## Specification
{{ specificationLinks({
  figma: 'https://www.figma.com/file/BQzBsQBWB0TAIbpWMhss7P/Web-(Legacy)?node-id=13%3A7805&t=8HES1IZKZfP9aXCY-1',
  github: 'https://angular.app.sbb.ch/angular/components/lightbox?variant=standard'
}) }}