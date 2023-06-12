---
tags: notification-lean_de
title: Zustände und Varianten
key: notification-lean-variants-states_de
parent: notification-lean_de
icon: variantsstates
order: 2
permalink: false  
---

## Zustände
Die Komponente hat folgende Zustände:{.lead}
* Default

## Varianten

### Bestätigung
{{ imageOnGreyBackground({
  url: '/assets/images/lean/notification_confirmation',
  alt: 'Darstellung einer Benachrichtigung in der Variante Bestätigung',
  title: 'Benachrichtigung in der Variante Bestätigung'
}) }}

### Hinweis
{{ imageOnGreyBackground({
  url: '/assets/images/lean/notification_information',
  alt: 'Darstellung einer Benachrichtigung in der Variante Hinweis',
  title: 'Benachrichtigung in der Variante Hinweis'
}) }}

### Warnung 
{{ imageOnGreyBackground({
  url: '/assets/images/lean/notification_warning',
  alt: 'Darstellung einer Benachrichtigung in der Variante Warnung',
  title: 'Benachrichtigung in der Variante Warnung'
}) }}

### Fehler 
{{ imageOnGreyBackground({
  url: '/assets/images/lean/notification_error',
  alt: 'Darstellung einer Benachrichtigung in der Variante Fehler',
  title: 'Benachrichtigung in der Variante Fehler'
}) }}

### Fehler mit Sprungmarke 
{{ imageOnGreyBackground({
  url: '/assets/images/lean/',
  alt: 'Darstellung einer Benachrichtigung in der Variante Fehler mit Sprungmarke',
  title: 'Benachrichtigung in der Variante Fehler mit Sprungmarke'
}) }}

* Kann ein Fehler nicht einem einzelnen Element zugewiesen werden, dann wird die Fehlermeldung mit Sprungmarken eingesetzt.{.lead}
* Die einzelnen Sprungmarken werden durch ein «/» getrennt.{.lead}
* Beim Klick auf eine Sprungmarke wird direkt zum Ursprung des entsprechenden Fehlers gescrollt.{.lead}
* Das Sprungmarkenziel ist immer auf derselben Seite wie die Notification (kein Absprung auf andere Seiten).{.lead}

### Notification Toast
* Benachrichtigungen können einerseits direkt innerhalb des Contentbereichs angezeigt werden (z.B. aufgrund einer Form-Validierung). Für Benachrichtigungen können aber auch "einfliegende" Toasts verwendet werden.{.lead}
* Die Anzeigedauer bis zum automatischen Verschwinden kann jetzt nach Anwendungsfall definiert werden. Dahingehend können Toasts auch konfiguriert werden, dass sie nicht automatisch verschwinden.{.lead}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A7917&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/notification?variant=lean'
}) }}