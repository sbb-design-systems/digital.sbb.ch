---
tags: dialog-lean_en
title: States and variants
key: dialog-lean-variants-states_en
parent: dialog-lean_en
icon: variantsstates
order: 2
permalink: false  
---

## Variants
### Simple (Warnings / Confirmations)
This variant has following states:{.lead}
* Default

<!-- end of the list -->
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Dialog_Simple',
  alt: 'Image of a dialog, simple',
  title: 'Dialog, Simple'
}) }}


### Complex (Forms)
This variant has following states:{.lead}
* Valid
* Not Valid

<!-- end of the list -->
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Dialog_Complex',
  alt: 'Image of a dialog, complex',
  title: 'Dialog, complex'
}) }}

* The complex variant is used to create or edit complex data objects if they cannot be edited directly in the content of the application.{.lead}
* If the user wants to dismiss the dialog and ...{.lead}
    * no changes have been made, the dialog closes and no discard confirmation is required.{.lead}
    * the user has made changes, the user is prompted to confirm the discard action.{.lead}

## Specifications
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A7805&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/dialog?variant=lean'
}) }}