---
tags: pagination-legacy_de
title: Zustände und Varianten
key: pagination-legacy-variants-states_de
parent: pagination-legacy_de
icon: variantsstates
order: 2
permalink: false  
---

## Varianten

### Nummern
Die Komponente hat folgende Zustände:{.lead}
* First
* Middle
* Last
* Hover

<!-- end of the list -->
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/pagination_numbers',
  alt: 'Darstellung der Komponente zur Paginierung mittels Seitenzahlen',
  title: 'Darstellung der Komponente zur Paginierung mittels Seitenzahlen'
}) }}
* Maximal 5 Seitenzahlen werden angezeigt.{.lead}
* Tastaturbedienung:{.lead}
    * Die aktive Seite kann nicht angesprungen werden.{.lead}
    * Tab-Reihenfolge: Pfeil zurück, erste anspringbare Seite, nächste anspringbare Seite usw., Pfeil vorwärts.{.lead}
	* Die Kurzform «...» für versteckte Seiten kann nicht angesprungen werden.{.lead}

### Seitennamen
Diese Variante hat folgende Zustände:{.lead}
* Default
* Hover

<!-- end of the list -->
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/pagination_pages',
  alt: 'Darstellung der Komponente zur Paginierung mittels Seitennamen',
  title: 'Darstellung der Komponente zur Paginierung mittels Seitennamen'
}) }}
* Kann «vor» und «zurück» Link enthalten, oder optional nur «vor» oder «zurück» (wenn die erste oder letzte Seite aktiv ist).{.lead}
* Beschriftet sind die Pagination-Links mit dem Titel der anzuspringenden Seite.{.lead}
* Der Link-Text hat eine Maximalbreite entsprechend dem Layout. Längere Texte werden mittels «...» abgeschnitten.{.lead}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/BQzBsQBWB0TAIbpWMhss7P/Web-(Legacy)?node-id=13%3A7931&t=8HES1IZKZfP9aXCY-1',
  github: 'https://angular.app.sbb.ch/angular/components/pagination?variant=standard'
}) }}