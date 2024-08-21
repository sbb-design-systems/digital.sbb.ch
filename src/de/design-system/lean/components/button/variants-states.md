---
tags: button-lean_de
title: Zustände und Varianten
key: button-lean-variants-states_de
parent: button-lean_de
icon: variantsstates
order: 2
permalink: false  
---

## Zustände
Die Komponente hat folgende Zustände: {.lead}
* Default
* Hover
* On-click
* Disabled  

## Varianten

### Primary Button
{{ imageOnGreyBackground({
  url: '/assets/images/lean/button_primary',
  alt: 'Darstellung des Primary Buttons',
  title: 'Primary Button'
}) }}

### Alternative Primary Button
{{ imageOnGreyBackground({
  url: '/assets/images/lean/button_primary_alternative',
  alt: 'Darstellung des alternativen Primary Buttons',
  title: 'Alternativer Primary Button'
}) }}

### Secondary Button
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Button_Secondary',
  alt: 'Darstellung des Secondary Buttons',
  title: 'Secondary Button'
}) }}

### Ghost Button
{{ imageOnGreyBackground({
  url: '/assets/images/lean/button_ghost',
  alt: 'Darstellung des Ghost Buttons',
  title: 'Ghost Button'
}) }}

### Icon Button
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Button_Icon',
  alt: 'Darstellung des Icon Buttons',
  title: 'Icon Button'
}) }}

Beim Hover über einen Icon Button sollte ein <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/components/tooltip/">Tooltip</sbb-link> verwendet werden, um die dahinterliegende Aktion klarer zu machen. {.lead}

### Mehrere Aktionen
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Button_More_Actions',
  alt: 'Darstellung des Buttons mit mehreren Aktionen',
  title: 'Button mit mehreren Aktionen'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=2%3A5273&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/button?variant=lean'
}) }}