---
tags: searchfield-legacy_en
title: States and variants
key: searchfield-legacy-variants-states_en
parent: searchfield-legacy_en
icon: variantsstates
order: 2
permalink: false  
---

## States
The component has the following states: {.lead}
* Default
* No Result
* Suggested

## Variants
### Default
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/searchfield_default',
  alt: '',
  title: ''
}) }}

* The number of the auto-suggest terms displayed has to be defined for each case. {.lead}
* A maximum of ten entries is recommended. {.lead}

### In the header
The component has the following states: {.lead}
* Default
* Hover
* Focused
* No Result
* Suggested

<!-- end of the list -->
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/searchfield_header',
  alt: 'Darstellung der Komponente Suchfeld integriert im Header',
  title: 'Darstellung der Komponente Suchfeld integriert im Header'
}) }}

* The entry mask opens when ‘search’ is clicked on. {.lead}
* After the search has been started, the entry mask is hidden again and only the ‘search’ link is displayed. {.lead}
* This module can only be inserted in the header. {.lead}
* When the search is triggered, the results are displayed on a separate page. {.lead}
* When typing a maximum of four auto-suggest proposals are shown. {.lead}

## Specification
{{ specificationLinks({
  figma: 'https://www.figma.com/file/BQzBsQBWB0TAIbpWMhss7P/Web-(Legacy)?node-id=201%3A134088&t=8HES1IZKZfP9aXCY-1',
  github: 'https://angular.app.sbb.ch/angular/components/search?variant=standard'
}) }}
