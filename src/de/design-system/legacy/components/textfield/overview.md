---
tags: textfield-legacy_de
title: Übersicht
key: textfield-legacy-overview_de
parent: textfield-legacy_de
icon: overview
order: 1
permalink: false  
---

## Was macht die Komponente?
Dient zur Eingabe von Texten und Zahlen. {.lead}

## Wann soll die Komponente eingesetzt werden? 
Wenn vom Benutzer eine Eingabe benötigt. wird. {.lead}

## Regeln 
* Ein Eingabefeld hat immer ein Label. {.lead}
* Optionale Eingaben werden mit dem Text «(optional)» hinter dem Label-Text versehen. Bei kurzen Feldern darf der Text «(optional)» mit «(opt.)» abgekürzt werden. {.lead}
* Für detaillierte Erklärungen kann neben dem Label ein Fragezeichen im Kreis dargestellt werden. Beim Klick auf dieses Fragezeichen öffnet sich ein <sbb-link variant="inline" href="/{{page.lang}}/design-system/legacy/components/tooltip/">Tooltip</sbb-link>. {.lead}
* Der Eingabetext ist immer einzeilig. {.lead}
* Wird der Text während der Eingabe länger als die Breite des Eingabefeldes wird der geschriebene Text nach links verdrängt, damit das aktuell Geschriebene immer gesehen wird. {.lead}
* Nach dem Verlassen des Eingabefeldes mit einem langen Text wird dieser am Ende abgeschnitten und mit «\...» gekennzeichnet. {.lead}
* Ein Eingabefeld kann einen Hinweistext (Placeholder) enthalten, welcher direkt im Eingabefeld angezeigt wird, solange vom Benutzer kein Wert eingetragen wurde. {.lead}
* Ein Eingabefeld kann drei unterschiedliche Breiten haben: {.lead}
    * Kurz → 1/6 der verfügbaren Breite des Containers/Parent-Elements (1/4 bei Tablet Portrait, 1/3 bei Mobile Portrait). {.lead}
    * Mittel → 1/2 der verfügbaren Breite des Containers/Parent-Elements (ganze Breite bei Mobile Portrait). {.lead}
    * Lang → ganze verfügbare Breite des Containers/Parent-Elements. {.lead}
* Kann der Benutzer ein Formularfeld nie bearbeiten, so darf kein Eingabefeld verwendet werden (Darstellung als Text). {.lead}