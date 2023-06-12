---
tags: tooltip-legacy_de
title: Übersicht
key: tooltip-legacy-overview_de
parent: tooltip-legacy_de
icon: overview
order: 1
permalink: false  
---

## Was macht die Komponente?
Erlaubt dem Benutzer bei Bedarf Erklärungen einzublenden.{.lead}

## Wann soll die Komponente eingesetzt werden? 
Bei kontextspezifischen Erklärungen zu Interaktionselementen oder Text.{.lead}

## Regeln
* Der Tooltip besteht aus dem Icon und dem Overlay. → In Ausnahmefällen darf auch ein anderes Icon für den Tooltip verwendet werden (z.B. ein Info-Icon).{.lead}
* Das Overlay öffnet sich bei Klick auf das ???{.lead}
* Im Overlay dürfen nur Freitext und <sbb-link variant="inline" href="/{{page.lang}}/design-system/legacy/components/link">Links</sbb-link> eingesetzt werden. Der Text darf auch als Liste dargestellt werden.{.lead}
* Der Tooltip-Text darf maximal 300 Zeichen umfassen.{.lead}
* Ein Link darf Inhalt in einer <sbb-link variant="inline" href="/{{page.lang}}/design-system/legacy/components/lightbox">Lightbox</sbb-link> oder auf einer neuen Seite (neuer Tab) öffnen; es darf nicht im aktuellen Browserfenster geladen werden.{.lead}
* Das Overlay enthält ein ??? zum schliessen des Overlays.{.lead}
* Das Overlay kann auch wieder ausgeblendet werden, indem irgendwo neben das Overlay geklickt wird.{.lead}
* Der Spickel des Overlays, der zum Icon zeigt, kann horizontal irgendwo platziert werden (kommt auf die Position des Tooltips auf der Seite an).{.lead}