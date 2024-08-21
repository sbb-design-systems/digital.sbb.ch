---
tags: select-legacy_de
title: Übersicht
key: select-legacy-overview_de
parent: select-legacy_de
icon: overview
order: 1
permalink: false  
---

## Was macht die Komponente?
Dient zur Auswahl einer oder mehrerer Optionen aus einer vorgegebenen Liste. {.lead}

## Wann soll die Komponente eingesetzt werden? 
* Bei einer Auswahl aus mehreren Optionen (Einfach- oder Mehrfachauswahl) einer Liste. {.lead}
* Wenn eine Auswahl getroffen werden muss, bei der sich die Einträge gegenseitig ausschliessen und kein Defaultwert gesetzt werden soll (anders als beim Element <sbb-link variant="inline" href="/{{page.lang}}/design-system/legacy/components/radiobutton">Radiobutton</sbb-link>). {.lead}
* Wenn Auswahloptionen gruppiert werden sollen. {.lead}

## Regeln
* Es müssen mindestens zwei Optionen zur Auswahl stehen. {.lead}
* Die Komponente hat immer ein Label. {.lead}
* Optionale Auswahlen werden mit dem Text «(optional)» hinter dem Label versehen. Bei kurzen Feldern kann der Text «(optional)» mit «(opt.)» abgekürzt werden. {.lead}
* Für detaillierte Erklärungen kann neben dem Label ein Fragezeichen im Kreis dargestellt werden. Beim Klick auf dieses Fragezeichen öffnet sich ein <sbb-link variant="inline" href="/{{page.lang}}/design-system/legacy/components/tooltip">Tooltip</sbb-link>. {.lead}
* Der Text des Labels ist immer einzeilig. {.lead}
* Ist ein Eintrag länger als die verfügbare Breite der Komponente, wird der Text des Eintrages mit «...» abgekürzt. {.lead}
* Bei einem Pflichtfeld ist eine Vorauswahl nicht erlaubt. {.lead}
* Wenn noch keine Auswahl getroffen wurde, lautet der Text des Labels «Bitte wählen...». {.lead}