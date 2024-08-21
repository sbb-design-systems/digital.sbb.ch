---
tags: tag-legacy_de
title: Zustände und Varianten
key: tag-legacy-variants-states_de
parent: tag-legacy_de
icon: variantsstates
order: 2
permalink: false  
---

## Zustände
Die Komponente hat folgende Zustände: {.lead}
* Active (Default)
* Inactive
* Hover active
* Hover inactive

## Varianten
### Filtertag
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/tag_filtertag',
  alt: 'Darstellung der Komponente Tag zur Verwendung als Filter',
  title: 'Darstellung der Komponente Tag zur Verwendung als Filter'
}) }}

* Im Filter sind die Tags im aktiven und inaktiven Zustand vorhanden. {.lead}
* Mit Klick auf ein Tag toggelt der jeweilige Zustand in den anderen und beeinflusst so das Filterergebnis. {.lead}
* Innerhalb des Filter wird immer zusätzlich ein Tag «Alle» eingefügt. Wird dieses Filtertag angeklickt, wechselt es in den Zustand aktiv und alle anderen Tags im Filter werden in den Zustand inaktiv gesetzt. {.lead}

Beispiel:
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/tag_filtertag_example',
  alt: 'Beispiel',
  title: 'Beispiel'
}) }}

### Linktag
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/tag_linktag',
  alt: 'Darstellung der Komponente Tag zur Verwendung als Link',
  title: 'Darstellung der Komponente Tag zur Verwendung als Link'
}) }}

* Linktags sind nur im aktiven Zustand vorhanden. {.lead}
* Mit einem Klick auf das Tag gelangt der Benutzer auf die entsprechende Kategorienseite. {.lead}

Beispiel:
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/tag_linktag_example',
  alt: 'Beispiel',
  title: 'Beispiel'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/BQzBsQBWB0TAIbpWMhss7P/Web-(Legacy)?node-id=13%3A8057&t=8HES1IZKZfP9aXCY-1',
  github: 'https://angular.app.sbb.ch/angular/components/tag?variant=standard'
}) }}
