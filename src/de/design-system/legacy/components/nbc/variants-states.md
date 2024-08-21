---
tags: nbc-legacy_de
title: Zustände und Varianten
key: nbc-legacy-variants-states_de
parent: nbc-legacy_de
icon: variantsstates
order: 2
permalink: false  
---

## Zustände
Der Next Best Click Container hat keine Viewport übergreifenden Zustände, da sie sich unterschiedlich verhalten. {.lead}

## Varianten

### Aktion
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/nbc_action',
  alt: 'Darstellung der Komponente Next Best Click Container zur Auslösung von Aktionen',
  title: 'Darstellung der Komponente Next Best Click Container zur Auslösung von Aktionen'
}) }}

### Kontakt
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/nbc_contact',
  alt: 'Darstellung der Komponente Next Best Click Container als Information zu den Kontaktmöglichkeiten',
  title: ''
}) }}

### Link
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/nbc_link',
  alt: 'Darstellung der Komponente Next Best Click Container als Linkliste zu anderen Themen',
  title: ''
}) }}

### Download
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/nbc_download',
  alt: 'Darstellung der Komponente Next Best Click Container mit mehreren Download Dateien',
  title: 'Darstellung der Komponente Next Best Click Container mit mehreren Download Dateien'
}) }}

### Chat
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/nbc_chat',
  alt: 'Darstellung der Komponente Next Best Click Container zum Starten des Live-Chat',
  title: 'Darstellung der Komponente Next Best Click Container zum Starten des Live-Chat'
}) }}

## Verhalten
### Desktop
* Alle Next-Best-Click Optionen sind auf Inhalts-Seiten in der Margin-Spalte (rechten Spalte) angeordnet. {.lead}
* Beim Scrollen werden alle Boxen in der rechten Spalte sticky. Die einzelnen Boxen werden sukzessive minimiert, sobald sie an den oberen Rand des Viewports (unterhalb des Sticky Headers) angelangt sind (respektive bei schon minimierten Boxen jeweils darunter). {.lead}
* Im minimierten Zustand bleiben alle Boxen jederzeit für den User zugängig/erreichbar. {.lead}
* Der User kann dann jeweils eine Box öffnen (und auch wieder schliessen). {.lead}
* Im gescrollten Zustand kann jeweils nur eine Box zugleich geöffnet sein. {.lead}
* Die NBC-Box bleibt solange sticky, bis der User am Ende der Content-Area angelangt ist. Scrollt der User weiter nach unten werden die Boxen mit dem Content nach oben weggescrolled. {.lead}
* Scrollt der User danach wieder nach oben, erscheint auch die NBC-Box wieder und bleibt wieder sticky. {.lead}

<!-- end of the list -->
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/nbc_behaviour_desktop_default',
  alt: 'Darstellung des Verhaltens eines Next Best Click Containers auf Desktop und grösseren Auflösungen',
  title: 'Darstellung des Verhaltens eines Next Best Click Containers auf Desktop und grösseren Auflösungen'
}) }}


#### Sonderfall NBC-Box innerhalb eines Accordion
* Bei der Anwendung einer NBC-Box innerhalb eines <sbb-link variant="inline" href="/{{page.lang}}/design-system/legacy/components/accordion">Accordion</sbb-link> wird diese nie minimiert. {.lead}
* Es darf nur eine NBC-Box in einem Accordion eingesetzt werden. {.lead}
* Beim Scrollen bleibt die NBC-Box sticky am oberen Rand bis zum Ende der Content-Area des Accordions, dannach wird die Box mit dem Content weitergescrollt. {.lead}

<!-- end of the list -->
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/nbc_behaviour_desktop_accordion',
  alt: 'Darstellung des Verhaltens eines Next Best Click innerhalb eines Akkordeons',
  title: 'Darstellung des Verhaltens eines Next Best Click innerhalb eines Akkordeons'
}) }}

### Tablet
* Alle Next-Best-Click Optionen sind jederzeit über das sticky Element rechts unten verfügbar. {.lead}
* Auf Klick öffnet sich ein Layer mit allen NBC-Komponenten im offenen Zustand nebeneinander (zweispaltige Darstellung). {.lead}
* Das Icon im Sticky-Element wechselt dann zum Schliessen-Button (Toggle-Button). {.lead}
* In der Tablet-Variante werden die NBC-Boxen am Ende der Content-Area redundant (offen) dargestellt. {.lead}
* Scrollt der User in den entsprechenden Bereich (und darüberhinaus) wird das Element zum Öffnen des NBC-Layers ausgeblendet. {.lead}
* Scrollt der User wieder nach oben erscheint auch das Sticky-Element wieder. {.lead}

<!-- end of the list -->
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/nbc_behaviour_tablet',
  alt: 'Darstellung des Verhaltens eines Next Best Click Containers auf Tablets',
  title: 'Darstellung des Verhaltens eines Next Best Click Containers auf Tablets'
}) }}


### Mobile
* Alle Next-Best-Click Optionen sind jederzeit über das Sticky-Element rechts unten aufrufbar. {.lead}
* Auf Klick öffnet sich ein Layer mit allen NBC-Komponenten im geschlossenen Zustand. {.lead}
* Es kann jeweils nur eine Komponente einzeln geöffnet werden. {.lead}
* Das Icon in dem Sticky Element wechselt zum Schliessen-Icon (Toggle-Button). {.lead}
* In der mobilen Variante werden die NBC-Boxen am Ende der Content-Area redundant (offen) dargestellt. {.lead}
* Scrollt der User in den entsprechenden Bereich (und darüberhinaus) wird das Element zum Öffnen des NBC-Layers ausgeblendet. {.lead}
* Scrollt der User wieder nach oben erscheint auch das Sticky-Element wieder. {.lead}

<!-- end of the list -->
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/nbc_behaviour_mobile',
  alt: 'Darstellung des Verhaltens eines Next Best Click Containers auf Mobiles',
  title: 'Darstellung des Verhaltens eines Next Best Click Containers auf Mobiles'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/BQzBsQBWB0TAIbpWMhss7P/Web-(Legacy)?node-id=201%3A133980&t=8HES1IZKZfP9aXCY-1'
}) }}