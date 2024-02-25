---
tags: dialog-lean_de
title: Zustände und Varianten
key: dialog-lean-variants-states_de
parent: dialog-lean_de
icon: variantsstates
order: 2
permalink: false  
---

## Zustände
* Default

## Varianten

### Simple (Warnungen / Bestätigungen)
Diese Ausprägung hat folgende Zustände:{.lead}
* Default

<!-- end of the list -->
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Dialog_Simple',
  alt: 'Darstellung des Dialogs, Simple',
  title: 'Dialog, Simple'
}) }}

### Complex (Formulare)
Diese Variante hat folgende Zustände:{.lead}
* Valid
* Not Valid

<!-- end of the list -->
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Dialog_Complex',
  alt: 'Darstellung des Dialogs, Complex',
  title: 'Dialog, Complex'
}) }}

* Diese Variante dient zur Erstellung oder Bearbeitung von komplexen Datenobjekten, wenn diese nicht direkt im Content der Applikation bearbeitet werden können.{.lead}
* Wenn die Benutzer*innen den Dialog verwerfen möchten und ...{.lead}
    * keine Änderungen vorgenommen wurden, wird das Dialogfeld geschlossen und es ist keine Bestätigung erforderlich.{.lead}
    * die Benutzer*innen Änderungen vorgenommen haben, werden die Benutzer*innen aufgefordert, die Verwerfungsaktion zu bestätigen.{.lead}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A7805&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/dialog?variant=lean'
}) }}