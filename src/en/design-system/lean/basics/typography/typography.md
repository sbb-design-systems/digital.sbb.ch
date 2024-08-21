---
layout: pattern.njk
tags: 
    - lean_en
    - lean_basics_en
    - page
key: typography-lean_en
title: Typografie
parent: basics-lean_en
image: mobile/overview/typography.webp
keywords: typografie, titel, text, fliesstext
order: 50
---

## Font
The company font «SBB Web» is used as a web font and in the styles Thin, Light, Roman and Bold. «SBB Web» can be downloaded <sbb-link variant="inline" type="button" target="_blank" href="https://brand.sbb.ch/document/4/de#/markenelemente/typographie-1">here</sbb-link>. {.lead}

The use of a mono-spaced font is recommended for some applications. The font required is selected when used for the first time. The following fonts are currently available: {.lead}
* Courier
* OCR-B
* Consolas
* Roboto Mono
* DejaVu Sans Mono

## Style
The font styles defined here form the basis of web applications and their components. If others are used, a clear hierarchy must be ensured as well as sufficient contrast and appropriate line/paragraph spacing. The <sbb-link variant="inline" type="button" href="/en/foundation/colors/base-colors">SBB colors</sbb-link> apply to the font colors. {.lead}

### Heading H1
{{ imageOnGreyBackground({
  url: '/assets/images/lean/typo_h1',
  alt: 'Image of a Heading H1',
  title: 'Heading H1'
}) }}

* Before H1 (above), a <sbb-link variant="inline" type="button" href="/en/design-system/lean/basics/divider">divider</sbb-link> of variant «Big» is inserted, afterwards (below) a Divider of variant «Medium». {.lead}

###  Heading H2
{{ imageOnGreyBackground({
  url: '/assets/images/lean/typo_h2',
  alt: 'Image of a heading H2',
  title: 'Heading H2'
}) }}

* Before H2 (above), a <sbb-link variant="inline" type="button" href="/en/design-system/lean/basics/divider">divider</sbb-link> of variant «Medium» is inserted, afterwards (below) a Divider of variant «Small». {.lead}

###  Heading H3
{{ imageOnGreyBackground({
  url: '/assets/images/lean/typo_h3',
  alt: 'Image of a heading H3',
  title: 'Heading H3'
}) }}

* Before H3 (above), a <sbb-link variant="inline" type="button" href="/en/design-system/lean/basics/divider">divider</sbb-link> of variant «Small» is inserted, afterwards (below) a Divider of variant «Thin». {.lead}

###  Heading H4
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Typo_H4',
  alt: 'Image of a heading H4',
  title: 'Heading H4'
}) }}

* Before H4 (above), a <sbb-link variant="inline" type="button" href="/en/design-system/lean/basics/divider">divider</sbb-link> of variant «Small» is inserted, afterwards (below) a Divider of variant «Thin». {.lead}

###  Body (copy)
{{ imageOnGreyBackground({
  url: '/assets/images/lean/typo_copy',
  alt: 'Image of a body (copy)',
  title: 'Body (copy)'
}) }}

* Before the copy (above), a <sbb-link variant="inline" type="button" href="/en/design-system/lean/basics/divider">divider</sbb-link> of variant «Thin» is inserted, afterwards (below) a Divider of variant «Thin». {.lead}

###  Link
{{ imageOnGreyBackground({
  url: '/assets/images/lean/typo_link',
  alt: 'Image of a link',
  title: 'Link'
}) }}

* Is used as a standard link within texts. {.lead}
* Further information about links can be found at <sbb-link variant="inline" type="button" href="/en/design-system/lean/components/link">link</sbb-link>. {.lead} 


### Table header
This style has the following states: {.lead}
* Default
* Hover
* Sorted

{{ imageOnGreyBackground({
  url: '/assets/images/lean/typo_table_header',
  alt: 'Image of a table header',
  title: 'Table header'
}) }}

### Table subtitle
This style has the following states: {.lead}
* Default
* Hover
* Sorted

{{ imageOnGreyBackground({
  url: '/assets/images/lean/Typo_Table_subtitle',
  alt: 'Image of a table subtitle',
  title: 'Table subtitle'
}) }}

###  Table rowtitle
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Typo_Table_Rowtitle',
  alt: 'Image of a table rowtitle',
  title: 'Table rowtitle'
}) }}

###  Table data
{{ imageOnGreyBackground({
  url: '/assets/images/lean/typo_table_data',
  alt: 'Image of a table data',
  title: 'Table data'
}) }}

## Specification
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=173%3A138462&t=ZF5MfeXb0Gz2GkUw-1', 
  github: 'https://angular.app.sbb.ch/angular/introduction/typography?variant=lean'
}) }}