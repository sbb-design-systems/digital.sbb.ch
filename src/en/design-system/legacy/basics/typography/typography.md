---
layout: pattern.njk
tags: 
    - legacy_en
    - legacy_basics_en
    - page
key: typography-legacy_en
title: Typografie
parent: basics-legacy_en
image: legacy/overview/typography.webp
keywords: 
order: 60
---

## Font
The company font ‘SBB Web’ is used as a web font and in the styles Thin, Light, Roman and Bold. {.lead}

## Style
The font styles defined here form the base of web applications and their components. If others are used, a clear hierarchy must be ensured as well as sufficient contrast and appropriate line/paragraph spacing. The <sbb-link variant="inline" href="/en/foundation/colors/base-colors/">SBB colors</sbb-link> apply to font colors. {.lead}

### Heading H1
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_h1',
  alt: 'Image of the H1 style',
  title: 'H1'
}) }}

* Only once per page. {.lead}
* Never contains a link. {.lead}
* The text of the heading should be the same as the title in the navigation. {.lead}

### Heading H2
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_h2',
  alt: 'Image of the H2 style',
  title: 'H2'
}) }}

* It is generally left-justified. {.lead}
* If the H2 title is used for additional information directly beneath a H1 title, this may also be centred. {.lead}
* Cannot be used without a preceding H1 title. {.lead}

### Heading H3
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_h3',
  alt: 'Image of the H3 style',
  title: 'H3'
}) }}

* Alignment is left-justified. {.lead}
* It cannot be used without a preceding H2 title. {.lead}

### Heading H4
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_h4',
  alt: 'Image of the H4 style',
  title: 'H4'
}) }}

* Alignment is left-justified.
* It cannot be used without a preceding H3 title. {.lead}

### Lead
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_lead',
  alt: 'Image of the lead style',
  title: 'Lead'
}) }}

### Body copy
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_copy',
  alt: 'Image of the body copy style',
  title: 'Fliesstext'
}) }}

### Link
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_link',
  alt: 'Image of the link style',
  title: 'Link'
}) }}

* Is used as a standard link within texts. {.lead}
* Further information about links can be found at <sbb-link variant="inline" href="/en/design-system/legacy/components/link">link</sbb-link>. {.lead}

### Subtext
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_subtext',
  alt: 'Image of the subtext style',
  title: 'Subtext'
}) }}

### Table header
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_table_header',
  alt: 'Image of the table header style',
  title: 'Table header'
}) }}

* The definition of the table as a component can be found under <sbb-link variant="inline" href="/en/design-system/legacy/components/table">table</sbb-link>. {.lead}


### Table data
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_table_data',
  alt: 'Image of the table data style',
  title: 'Table data'
}) }}

* The definition of the table as a component can be found under <sbb-link variant="inline" href="/en/design-system/legacy/components/table">table</sbb-link>. {.lead}

### Structured list
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_list_ordered',
  alt: 'Image of the structured list style',
  title: 'Structured list'
}) }}

* The list has a maximum of three hierarchy levels. {.lead}
* Simple links are permitted. {.lead}
* Bold, superscript and subscript numbers are permitted. {.lead}
* Short descriptions should be defined for a list entry (no four-line texts) whenever possible. {.lead}

### Unstructured list
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_list_unordered',
  alt: 'Image of the unstructured list style',
  title: 'Unstructured list'
}) }}

* The list has a maximum of three hierarchy levels. {.lead}
* Simple links are permitted. {.lead}
* Bold, superscript and subscript numbers are permitted. {.lead}
* Short descriptions should be defined for a list entry (no four-line texts) whenever possible. {.lead}

### Fieldset simple
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_fieldset_default',
  alt: 'Image of the fieldset style, simple',
  title: 'Fieldset simple'
}) }}

### Fieldset complex
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/typo_fieldset_nested',
  alt: 'Image of the fieldset style, complex',
  title: 'Fieldset complex'
}) }}

## Specification
{{ specificationLinks({
  figma: 'https://www.figma.com/file/BQzBsQBWB0TAIbpWMhss7P/Web-(Legacy)?node-id=173%3A138462&t=8HES1IZKZfP9aXCY-1',
  github: 'https://angular.app.sbb.ch/angular/introduction/typography?variant=standard'
}) }}