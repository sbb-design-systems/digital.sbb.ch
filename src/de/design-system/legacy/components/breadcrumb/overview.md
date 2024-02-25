---
tags: breadcrumb-legacy_de
title: Übersicht
key: breadcrumb-legacy-overview_de
parent: breadcrumb-legacy_de
icon: overview
order: 1
permalink: false  
---

## Was macht die Komponente?
Dient zur Anzeige der Navigationshierarchie der aktuellen Seite.{.lead}

## Wann soll die Komponente eingesetzt werden? 
Auf jeder Seite, bei denen der Benutzer schnell auf eine Schwester-oder Eltern-Seite navigieren können soll.{.lead}

## Regeln
* Der Breadcrumb ist immer direkt unter dem Header zu positionieren. Ausnahme wenn eine <sbb-link variant="inline" href="/{{page.lang}}/design-system/legacy/components/ghettobox">Ghettobox</sbb-link> angezeigt wird, dann folgt der Breadcrumb unmittelbar nach der letzten Ghettobox.{.lead}
* Der Breadcrumb kann bei langen Einträgen mehrzeilig werden.{.lead}
* Bei Desktop und Tablet werden immer alle Ebenen angezeigt.{.lead}
* Auf Mobile wird lediglich die letzte Ebenen ausgeschrieben. Vorangehende Ebenen werden durch eine einzige mit «...» dargestellt. Bei Klick auf «...» werden alle Zwischenebenen eingeblendet.{.lead}
* Falls die horizontale Breite des Viewports auf Mobile nicht ausreicht um alle Ebenen anzuzeigen, wird der Breadcrumb-Content scollbar.{.lead}