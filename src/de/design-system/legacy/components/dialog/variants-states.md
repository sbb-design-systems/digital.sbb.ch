---
tags: lightbox-legacy_de
title: Zustände und Varianten
key: lightbox-legacy-variants-states_de
parent: lightbox-legacy_de
icon: variantsstates
order: 2
permalink: false  
---

## Varianten

## Varianten und Zustände
### Standard
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/lightbox_default',
  alt: 'Darstellung der Komponente Lightbox in der Variante Standard',
  title: 'Darstellung der Komponente Lightbox in der Variante Standard'
}) }}

### Mit Formularkomponenten
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/lightbox_form',
  alt: 'Darstellung der Komponente Lightbox mit Formular als Inhalt',
  title: 'Darstellung der Komponente Lightbox mit Formular als Inhalt'
}) }}

* Eine Lightbox mit Formularelementen erhält mindestens einen «Abbrechen» und einen «Übernehmen» Button. {.lead}
* Der «Abbrechen» Button schliesst die Lightbox wieder. {.lead}
* Wird die Lightbox geschlossen («Abbrechen» oder X-Button) während bereits Eingaben im Formular geändert wurden, erscheint ein Warnhinweis das ungesicherte Daten im Formular sind. {.lead}
* Die Buttons eines Formulars («Abbrechen», «Übernehmen», andere Funktionen) dürfen im Footer eingesetzt werden. {.lead}
* Der Footer ist immer sticky und wird über die ganze Breite der Lightbox dargestellt (gleich wie Header). {.lead}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/BQzBsQBWB0TAIbpWMhss7P/Web-(Legacy)?node-id=13%3A7805&t=8HES1IZKZfP9aXCY-1',
  github: 'https://angular.app.sbb.ch/angular/components/lightbox?variant=standard'
}) }}