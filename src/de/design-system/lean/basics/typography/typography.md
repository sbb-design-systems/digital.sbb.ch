---
layout: pattern.njk
tags: 
    - lean_de
    - lean_basics_de
    - page
key: typography-lean_de
title: Typografie
parent: basics-lean_de
image: mobile/overview/typography.webp
keywords: typografie, titel, text, fliesstext
order: 50
---

## Schrift
Als Schriftart wird die Hausschrift «SBB Web» als Web-Font verwendet und in den Schnitten Thin, Light, Roman und Bold eingesetzt. «SBB Web» kann <sbb-link variant="inline" type="button" href="https://company.sbb.ch/de/ueber-die-sbb/profil/sbb-markenportal/basis/schrift.html">hier</sbb-link> heruntergeladen werden.{.lead}

Für gewisse Anwendungsbereiche ist der Einsatz einer Monospaced Schrift sinnvoll. Bei erstem Bedarf wird die entsprechende Schrift ausgewählt. Aktuell stehen folgende zur Auswahl:{.lead}
* Courier
* OCR-B
* Consolas
* Roboto Mono
* DejaVu Sans Mono

## Stile
Die hier definierten Schriftstile bilden die Basis von Webapplikationen und deren Komponenten. Werden andere eingesetzt ist auf eine klare Hierarchie zu achten ebenso wie auf ausreichenden Kontrast und entsprechenden Zeilen- / Absatzabstand. Für die Schriftfarben gelten die <sbb-link variant="inline" type="button" href="/{{page.lang}}/foundation/colors/base-colors">SBB-Farben</sbb-link>.{.lead}

### Überschrift H1
{{ imageOnGreyBackground({
  url: '/assets/images/lean/typo_h1',
  alt: 'Darstellung des H1-Stils',
  title: 'H1'
}) }}

* Vor dem H1 (oberhalb) wird ein <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/basics/divider">Divider</sbb-link> der Variante «Big» eingesetzt, danach (unterhalb) ein Divider der Variante «Medium».{.lead}

###  Überschrift H2
{{ imageOnGreyBackground({
  url: '/assets/images/lean/typo_h2',
  alt: 'Darstellung des H2-Stils',
  title: 'H2'
}) }}
* Vor dem H2 (oberhalb) wird ein <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/basics/divider">Divider</sbb-link> der Variante «Medium» eingesetzt, danach (unterhalb) ein Divider der Variante «Small».{.lead}

###  Überschrift H3
{{ imageOnGreyBackground({
  url: '/assets/images/lean/typo_h3',
  alt: 'Darstellung des H3-Stils',
  title: 'H3'
}) }}
* Vor dem H3 (oberhalb) wird ein <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/basics/divider">Divider</sbb-link> der Variante «Small» eingesetzt, danach (unterhalb) ein Divider der Variante «Thin».{.lead}

###  Überschrift H4
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Typo_H4',
  alt: 'Darstellung des H4-Stils',
  title: 'H4'
}) }}
* Vor dem H4 (oberhalb) wird ein <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/basics/divider">Divider</sbb-link> der Variante «Small» eingesetzt, danach (unterhalb) ein Divider der Variante «Thin».{.lead}

###  Fliesstext (Copy)
{{ imageOnGreyBackground({
  url: '/assets/images/lean/typo_copy',
  alt: 'Darstellung des Fliesstext-Stils',
  title: 'Fliesstext'
}) }}
* Vor dem Fliesstext (oberhalb) wird ein <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/basics/divider">Divider</sbb-link> der Variante «Thin» eingesetzt, danach (unterhalb) ein Divider der Variante «Thin».{.lead}

###  Link
{{ imageOnGreyBackground({
  url: '/assets/images/lean/typo_link',
  alt: 'Darstellung des Link-Stils',
  title: 'Link'
}) }}
* Gilt als Standardlink innerhalb von texten.{.lead}
* Zusätzliche Ausführungen von Links sind unter <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/components/link">Link</sbb-link> zu finden.{.lead}


###  Tabellenheader
Dieser Stil hat die folgende Zustände:{.lead}
* Default
* Hover
* Sorted

{{ imageOnGreyBackground({
  url: '/assets/images/lean/typo_table_header',
  alt: 'Darstellung des Stils einer Tabellenüberschrift',
  title: 'Tabellenüberschrift'
}) }}

###  Tabellenheader Untertitel
Dieser Stil hat die folgende Zustände:{.lead}
* Default
* Hover
* Sorted

{{ imageOnGreyBackground({
  url: '/assets/images/lean/Typo_Table_subtitle',
  alt: 'Darstellung des Stils eines Tabellenuntertitels',
  title: 'Tabellenuntertitel'
}) }}

###  Tabellenzeilentitel
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Typo_Table_Rowtitle',
  alt: 'Darstellung des Stils eines Tabellenzeilentitels',
  title: 'Tabellenzeilentitel'
}) }}

###  Tabellendaten
{{ imageOnGreyBackground({
  url: '/assets/images/lean/typo_table_data',
  alt: 'Darstellung des Stils von Tabellendaten',
  title: 'Tabellendaten'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=173%3A138462&t=ZF5MfeXb0Gz2GkUw-1', 
  github: 'https://angular.app.sbb.ch/angular/introduction/typography?variant=lean'
}) }}