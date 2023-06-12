---
tags: datepicker-legacy_de
title: Zustände und Varianten
key: datepicker-legacy-variants-states_de
parent: datepicker-legacy_de
icon: variantsstates
order: 2
permalink: false  
---

## Zustände
Die Komponente hat folgende Zustände:{.lead}
* Default
* Focused
* Disabled
* Error

## Varianten

### Standard
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/datepicker_default',
  alt: 'Darstellung der Komponente Datumswahl in der Variante Standard',
  title: 'Darstellung der Komponente Datumswahl in der Variante Standard'
}) }}

* Das gewählte Datum wird im Format Wochentag, TT.MM.JJJJ dargestellt (Beispiel Fr, 04.08.2017).{.lead}
* Ein Klick auf das Kalender-Icon öffnet den Kalender-Layer.{.lead}
* Wenn der Fokus im Kalender-Layer liegt, kann dieser wie folgt mittels Tastatur bedient  werden:{.lead}
  * Pfeiltasten: Wechseln des markierten Tages.{.lead}
  * Leertaste / Enter: Auswahl des markierten Tages.{.lead}

### Mit Blätterfunktion
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/datepicker_pageable',
  alt: 'Darstellung der Komponente Datumswahl mit Blätterfunktion',
  title: 'Darstellung der Komponente Datumswahl mit Blätterfunktion'
}) }}

* Das gewählte Datum wird im Format Wochentag, TT.MM.JJJJ dargestellt (Beispiel Fr, 04.08.2017).{.lead}
* Die Navigationspfeile werden nur dargestellt, wenn auch ein vorangehendes/nachfolgende Datum gewählt werden kann.{.lead}
* Ein Klick auf das Kalender-Icon öffnet den Kalender-Layer.{.lead}
* Wenn der Fokus im Kalender-Layer liegt, kann dieser wie folgt mittels Tastatur bedient  werden:{.lead}
  * Pfeiltasten: Wechseln des markierten Tages.{.lead}
  * Leertaste / Enter: Auswahl des markierten Tages.{.lead}
* In dieser Variante ist immer ein gültige Datum vorausgewählt.{.lead}

### Datumsbereich
* Um einen Datumsbereich zu wählen, werden zwei Datepicker kombiniert.{.lead}
* Wird das Von-Datum mittels Kalender-Layer gewählt und das Bis-Datum ist noch nicht definiert, öffnet sich der Kalender-Layer des Bis-Feldes. Wurde bereits ein Bis-Datum gewählt, öffnet sich der Kalender-Layer nicht.{.lead}
* Wählt der Benutzer ein Von-Datum > Bis-Datum, wird das Bis-Datum gelöscht und dessen Kalender-Layer eingeblendet.{.lead}
* Sind beide Daten gewählt, wird im Kalender der gewählte Bereich farblich hinterlegt.{.lead}
* Die gewählten Daten wird im Format Wochentag, TT.MM.JJJJ dargestellt (Beispiel Fr, 04.08.2017).{.lead}

### Geburtsdatum
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/datepicker_birthdate',
  alt: 'Darstellung der Komponente Datumswahl zur Eingabe eines Geburtstages',
  title: 'Darstellung der Komponente Datumswahl zur Eingabe eines Geburtstages'
}) }}

* Das Geburtsdatum wird im Format TT.MM.JJJJ dargestellt (Beispiel 02.09.1986).{.lead}

### Kalender-Layer
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/datepicker_picker',
  alt: 'Darstellung der Komponente Datumswahl mit geöffnetem Datepicker',
  title: 'Darstellung der Komponente Datumswahl mit geöffnetem Datepicker'
}) }}

Die Tab-Reihenfolge innerhalb des Kalender-Layers ist wie folgt defniert:{.lead}
1.  Monat zurück{.lead}
2.  Monat vor{.lead}
3.  Jahr zurück{.lead}
4.  Jahr vor{.lead}
5.  Bereich der einzelnen Tage. Wenn der Fokus im Bereich der Tageliegt, kann mittels Pfeiltasten links, rechts, auf und ab innerhalb der Tage navigiert werden.{.lead}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/BQzBsQBWB0TAIbpWMhss7P/Web-(Legacy)?node-id=13%3A7791&t=8HES1IZKZfP9aXCY-1',
  github: 'https://angular.app.sbb.ch/angular/components/datepicker?variant=standard'
}) }}