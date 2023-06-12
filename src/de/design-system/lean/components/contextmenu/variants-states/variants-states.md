---
tags: contextmenu-lean_de
title: Zustände und Varianten
key: contextmenu-lean-variants-states_de
parent: contextmenu-lean_de
icon: variantsstates
order: 2
permalink: false  
---

## Zustände
Die Komponente hat folgende Zustände:{.lead}
* Default
* Hover

## Varianten

### Standard
Diese Variante hat zusätzlich folgende Zustände:{.lead}
* Expanded (optional)

{{ imageOnGreyBackground({
  url: '/assets/images/lean/contextmenu_default',
  alt: 'Darstellung des Kontextmenüs',
  title: 'Kontextmenü'
}) }}

### Icon
Diese Variante hat zusätzlich folgende Zustände:{.lead}
* Expanded Hover Underneath
* Expanded Hover Above

{{ imageOnGreyBackground({
  url: '/assets/images/lean/contextmenu_icon',
  alt: 'Darstellung des Kontextmenüs mit Icon',
  title: 'Kontextmenü mit Icon'
}) }}

* Als Icon werden standardmässig die drei Punkte verwendet.{.lead}

### Sorting
Diese Variante hat zusätzlich folgende Zustände:{.lead}
* Expanded Hover
* Expanded Active

{{ imageOnGreyBackground({
  url: '/assets/images/lean/Contextmenu_Sorting',
  alt: 'Darstellung des Kontextmenüs zur Sortierung von Inhalten',
  title: 'Kontextmenü zur Sortierung von Inhalten'
}) }}

* Zur Anzeige der Sortierung wird das Pfeil-Icon verwendet.{.lead}
* Per Default wird absteigend (ascending) sortiert.{.lead}
* Beim Hover auf aktiv sortiertes Attribut wird das Pfeil-Icon gedreht.{.lead}
* Der ganze Menueintrag (Name und Icon) ist klickbar.{.lead}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=2%3A5341&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/menu?variant=lean'
}) }}