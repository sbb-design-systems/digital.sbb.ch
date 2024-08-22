---
layout: pattern.njk
tags: 
    - legacy_components_de
key: typography-legacy_de
title: Typografie
parent: basics-legacy_de
image: legacy/overview/typography.webp
keywords: 
order: 60
---

## Schrift
Als Schriftart wird die Hausschrift «SBB Web» als Web-Font verwendet und in den Schnitten Thin, Light, Roman und Bold eingesetzt. {.lead}

## Stile
Die hier definierten Schriftstile bilden die Basis von Webseiten und deren Komponenten. Werden andere eingesetzt ist auf eine klare Hierarchie zu achten ebenso wie auf ausreichenden Kontrast und entsprechenden Zeilen- / Absatzabstand. Für die Schriftfarben gelten die <sbb-link variant="inline" href="/{{page.lang}}/foundation/colors/base-colors/">SBB-Farben</sbb-link>. {.lead}

### Überschrift H1
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_h1',
  alt: 'Darstellung des Schriftstils Überschrift H1',
  title: 'H1'
}) }}

* Pro Seite nur einmal. {.lead}
* Beinhaltet nie einen Link. {.lead}
* Text der Überschrift soll dem Titel in der Navigation entsprechen. {.lead}

### Überschrift H2
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_h2',
  alt: 'Darstellung des Schriftstils Überschrift H2',
  title: 'H2'
}) }}

* Ausrichtung ist grundsätzlich linksbündig. {.lead}
* Wird der H2-Titel für zusätzliche Informationen direkt unter einem H1-Titel verwendet, darf dieser auch zentriert ausgerichtet werden. {.lead}
* Darf nicht ohne vorangehenden H1-Titel eingesetzt werden. {.lead}

### Überschrift H3
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_h3',
  alt: 'Darstellung des Schriftstils Überschrift H3',
  title: 'H3'
}) }}

* Ausrichtung ist linksbündig. {.lead}
* Darf nicht ohne vorangehenden H2-Titel eingesetzt werden. {.lead}

### Überschrift H4
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_h4',
  alt: 'Darstellung des Schriftstils Überschrift H4',
  title: 'H4'
}) }}

* Ausrichtung ist linksbündig. {.lead}
* Darf nicht ohne vorangehenden H3-Titel eingesetzt werden. {.lead}

### Lead
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_lead',
  alt: 'Darstellung des Schriftstils Lead-Text',
  title: 'Lead'
}) }}

### Fliesstext (Copy)
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_copy',
  alt: 'Darstellung des Schriftstils Fliesstext',
  title: 'Fliesstext'
}) }}

### Link
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_link',
  alt: 'Darstellung des Schriftstils Link',
  title: 'Link'
}) }}

* Gilt als Standardlink innerhalb von Texten. {.lead}
* Zusätzliche Ausführungen von Links sind unter <sbb-link variant="inline" href="/{{page.lang}}/design-system/legacy/components/link">Link</sbb-link> zu finden. {.lead}

### Subtext
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_subtext',
  alt: 'Darstellung des Schriftstils Subtext',
  title: 'Subtext'
}) }}

### Tabellenheader
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_table_header',
  alt: 'Darstellung des Schriftstils Tabellenheader',
  title: 'Tabellenheader'
}) }}

* Definition der Tabelle als Komponente ist unter <sbb-link variant="inline" href="/{{page.lang}}/design-system/legacy/components/table">Table</sbb-link> zu finden. {.lead}

### Tabellendaten
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_table_data',
  alt: 'Darstellung des Schriftstils Tabellendaten',
  title: 'Tabellendaten'
}) }}

* Definition der Tabelle als Komponente ist unter <sbb-link variant="inline" href="/{{page.lang}}/design-system/legacy/components/table">Table</sbb-link> zu finden. {.lead}

### Liste geordnet
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_list_ordered',
  alt: 'Darstellung des Schriftstils Liste geordnet',
  title: 'Liste geordnet'
}) }}

* Liste hat maximal drei Hierarchie-Stufen. {.lead}
* Einfache Links sind erlaubt. {.lead}
* Auszeichnungen (Bold), hoch- und tiefgestellte Zahlen sind zugelassen. {.lead}
* Wenn immer möglich, sollten kurze Beschreibungen für einen Listeneintrag (keine vielzeiligen Texte) definiert werden. {.lead}

### Liste ungeordnet
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_list_unordered',
  alt: 'Darstellung des Schriftstils Liste ungeordnet',
  title: 'Liste ungeordnet'
}) }}

* Liste hat maximal drei Hierarchie-Stufen. {.lead}
* Einfache Links sind erlaubt. {.lead}
* Auszeichnungen (Bold), hoch- und tiefgestellte Zahlen sind zugelassen. {.lead}
* Wenn immer möglich, sollten kurze Beschreibungen für einen Listeneintrag (keine vielzeiligen Texte) definiert werden. {.lead}

### Fieldset einfach
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_fieldset_default',
  alt: 'Darstellung des Schriftstils Fieldset einfach',
  title: 'Fieldset einfach'
}) }}

### Fieldset verschachtelt
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_fieldset_nested',
  alt: 'Darstellung des Schriftstils Fieldset verschachtelt',
  title: 'Fieldset verschachtelt'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/BQzBsQBWB0TAIbpWMhss7P/Web-(Legacy)?node-id=173%3A138462&t=8HES1IZKZfP9aXCY-1',
  github: 'https://angular.app.sbb.ch/angular/introduction/typography?variant=standard'
}) }}