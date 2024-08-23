---
tags: datepicker-legacy_de
title: Übersicht
key: datepicker-legacy-overview_de
parent: datepicker-legacy_de
icon: overview
order: 1
permalink: false  
---

## Was macht die Komponente?
Dient zur Eingabe eines Datums. {.lead}

## Wann soll die Komponente eingesetzt werden? 
Immer wenn vom Benutzer ein Datumswert verlangt wird. {.lead}

## Regeln
* Datumsangaben sind immer einzeilig. {.lead}
* Die Datumswahl hat immer ein Label. {.lead}
* Optionale Datumseingaben werden mit dem Text «(optional)» hinter dem Label versehen. Bei kurzen Feldern kann der Text «(optional)» mit «(opt.)» abgekürzt werden. {.lead}
* Für detaillierte Erklärungen kann neben dem Label ein Fragezeichen im Kreis dargestellt werden. Beim Klick auf dieses Fragezeichen öffnet sich ein <sbb-link variant="inline" href="/{{page.lang}}/design-system/legacy/components/tooltip/">Tooltip</sbb-link>. {.lead}
* Mit Klick ins Datumsfeld kann das Datum von Hand eingetragen werden. Bei Touch-Geräten erscheint die Zahlen-Eingabetastatur des entsprechenden Systems. {.lead}
* Bei der manuellen Eingabe muss der Punkt immer vom Benutzer eingegeben werden. Danach übernimmt die Komponente die korrekte Formatierung, d.h. es müssen Eingaben wie 1.1.18 akzeptiert und ins gewünschte Format umgesetzt werden. {.lead}
* Bei Klick auf das Kalender-Icon öffnet sich ein Kalender-Layer zur Auswahl des Datums. Mittels Klick ausserhalb des Kalender-Layers wird dieser wieder geschlossen. {.lead}
* Auf Touch-Geräten wird nie der System-Datepicker verwendet. {.lead}
* Im Kalender-Layer können einzelne Tage oder ganze Datumsbereiche deaktiviert werden. {.lead}
* Die Navigationspfeile im Kalender-Layer (Monat / Jahr) werden nur dargestellt, wenn auch ein vorangehendes/nachfolgende Datum gewählt werden kann. {.lead}