---
tags: table-lean_de
title: Zustände und Varianten
key: table-lean-variants-states_de
parent: table-lean_de
icon: variantsstates
order: 2
permalink: false  
---

## Zustände
Die Komponente hat folgende Zustände:{.lead}
* Default
* Hover
* Active

## Varianten

### Standard
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Table_Default',
  alt: 'Darstellung einer Tabelle',
  title: 'Tabelle'
}) }}

### Sortierbar
Diese Variante hat folgende Zustände:{.lead}
* Unsorted
* Sorted

{{ imageOnGreyBackground({
  url: '/assets/images/lean/Table_Sortable',
  alt: 'Darstellung einer Tabelle, Variante Sortierbar',
  title: 'Tabelle, Variante Sortierbar'
}) }}

### Gruppierbar
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Table_Groupable',
  alt: 'Darstellung einer Tabelle, Variante guppierbar',
  title: 'Tabelle, Variante guppierbar'
}) }}

### Selektierbar
Diese Variante hat folgende Zustände:{.lead}
* Unselected
* EntrySelected
* AllSelected 

{{ imageOnGreyBackground({
  url: '/assets/images/lean/Table_Selectable',
  alt: 'Darstellung einer Tabelle, Variante Selektierbar',
  title: 'Tabelle, Variante Selektierbar'
}) }}

### Filtrierbar
Diese Variante hat folgende Zustände:{.lead}
* Unfiltered
* Filtered

{{ imageOnGreyBackground({
  url: '/assets/images/lean/Table_Filterable',
  alt: 'Darstellung einer Tabelle, Variante Filterbar',
  title: 'Tabelle, Variante Filterbar'
}) }}

* Die einzelnen Spalten können je nach Inhaltstyp (Text, Datum, Wert etc.) mittels den passenden Komponenten (<sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/components/textfield/">Textfield</sbb-link>, <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/components/datepicker/">Datepicker</sbb-link>, <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/components/select/">Select</sbb-link> etc.) gefiltert werden.{.lead}
* Es kann auch ein übergreifender <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/components/filter/">Filter</sbb-link> zum Einschränken von grossen Datenmengen eingesetzt werden.{.lead}
* Es empfiehlt sich, die Anzahl der gefilterten Elemente den Benutzer*innen anzuzeigen, z.B. "34 von 3890"{.lead}

### Inline Aktionen
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Table_Inline_Actions',
  alt: 'Darstellung einer Tabelle, Variante mit Inline Aktionen',
  title: 'Tabelle, Variante mit Inline Aktionen'
}) }}

* Beim Hover über Zeilen bzw. Fokussierung mittels Tab-Navigation über die Tastatur können Aktionen auf den Elementen angeboten werden.{.lead}
* Die Aktionen werden mittels <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/components/button/">Icon Button</sbb-link> angeboten. Je nach Anwendungsfall wird entschieden, in welcher Spalte (erste oder letzte Spalte) sie platziert werden. Dort überlagern sie jeweils den bestehenden Content.{.lead}
* Es sollen maximal 3 Aktionen angeboten werden. Braucht es mehr, sollte ein <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/components/contextmenu/">Contextmenu</sbb-link> verwendet werden.{.lead}
* Tastaturbedienung: Bei Fokus auf einer Zeile der Tabelle kann mittels 'Tab' auf die Aktionen gesprungen werden.{.lead}

### Übergreifende Aktionen
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Table_Batch_Actions',
  alt: 'Darstellung einer Tabelle, Variante mit übergreifenden Aktionen',
  title: 'Tabelle, Variante mit übergreifenden Aktionen'
}) }}

* Bei (Mehrfach-)Selektion von Elementen können übergreifende Aktionen angeboten werden.{.lead}
* Für die Aktionen können alle Varianten von <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/components/button/">Buttons</sbb-link> verwendet werden.{.lead}
* Die primäre Aktion ist links, die sekundären Aktionen stehen rechts davon.{.lead}
* Es sollen maximal 3 Aktionen angeboten werden. Braucht es mehr, sollte ein <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/components/contextmenu/">Contextmenu</sbb-link> verwendet werden.{.lead}
* Die übergreifenden Aktionen werden rechts oberhalb der Tabelle angeordnet.{.lead}

## Beispielanwendung
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Table_Showcase',
  alt: 'Darstellung eines Beispiels einer Tabelle mit Sortierung, Selektierung, Filterung, Paging und übergeordneten Aktionen',
  title: 'Beispiel einer Tabelle mit Sortierung, Selektierung, Filterung, Paging und übergeordneten Aktionen'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A8043&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/table?variant=lean'
}) }}