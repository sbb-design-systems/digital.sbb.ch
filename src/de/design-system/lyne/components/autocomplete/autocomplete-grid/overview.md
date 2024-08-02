---
tags: autocomplete-grid-lyne_de
title: Info
key: autocomplete-grid-lyne-overview_de
parent: autocomplete-grid-lyne_de
icon: overview
order: 1
permalink: false
---

## Was macht die Komponente?
Die Komponente bietet die gleichen Funktionalitäten wie die Autocomplete-Komponente, bietet aber zusätzlich die Möglichkeit Buttons neben den Optionen darzustellen. 

## Wann soll die Komponente eingesetzt werden?
* Nur wenn zu den abgebildeteten Optionen in der Autocomplete-Liste auch noch Button nötig sind.

## Regeln
* Die Komponente soll nicht bei kleinen Datensätzen (z.b. nur 10 Einträge/Optionen) verwendet werden.
* Die Autocomplete-Liste soll nicht zu viele Vorschläge auf einmal anzeigen, um die Übersichtlichkeit zu bewahren (max. 10 Vorschläge).
* Die Nutzenden sollen die Möglichkeit haben, die Autocomplete-Funktion zu ignorieren und eigene Eingaben zu machen.

{{ lyneComponentLinks({
  translations: translations["de"].lyne,
  mode: "child",
  collection: collections.lyne_components_autocomplete_grid_children_de
}) }}