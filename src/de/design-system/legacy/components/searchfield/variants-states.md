---
tags: searchfield-legacy_de
title: Zustände und Varianten
key: searchfield-legacy-variants-states_de
parent: searchfield-legacy_de
icon: variantsstates
order: 2
permalink: false  
---

## Zustände
Die Komponente hat folgende Zustände:{.lead}
* Default
* No Result
* Suggested

## Varianten

### Standard
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/searchfield_default',
  alt: 'Darstellung der Komponente Suchfeld in der Variante Standard',
  title: 'Darstellung der Komponente Suchfeld in der Variante Standard'
}) }}
* Die Anzahl der angezeigten Auto-Suggest Begriffe ist für jeden Anwendungsfall zu definieren.{.lead}
* Empfehlung maximal 10 Einträge.{.lead}

### Im Header
Diese Variante hat folgende Zustände:{.lead}
* Default
* Hover
* Focused
* No Result
* Suggested

<!-- end of the list -->
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/searchfield_header',
  alt: 'Darstellung der Komponente Suchfeld integriert im Header',
  title: 'Darstellung der Komponente Suchfeld integriert im Header'
}) }}
* Durch Klick auf «Suchen» öffnet sich die Eingabemaske.{.lead}
* Nach dem Auslösen der Suche, wird die Eingabemaske wieder ausgeblendet und nur der Link «Suchen» angezeigt.{.lead}
* Diese Komponente darf nur im Header eingesetzt werden.{.lead}
* Beim Auslösen der Suche werden die Resultate auf einer eigenen Seite dargestellt.{.lead}
* Während des Tippens werden maximal 4 Auto-Suggest Vorschläge angezeigt.{.lead}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/BQzBsQBWB0TAIbpWMhss7P/Web-(Legacy)?node-id=201%3A134088&t=8HES1IZKZfP9aXCY-1',
  github: 'https://angular.app.sbb.ch/angular/components/search?variant=standard'
}) }}
