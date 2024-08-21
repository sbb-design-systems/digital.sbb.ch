---
tags: pagination-legacy_en
title: States and variants
key: pagination-legacy-variants-states_en
parent: pagination-legacy_en
icon: variantsstates
order: 2
permalink: false  
---

## Variants
### Numbers
The component has the following states: {.lead}
* First
* Middle
* Last
* Hover

<!-- end of the list -->
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/pagination_numbers',
  alt: 'Image of a pagination with numbers',
  title: 'Pagination with numbers'
}) }}

* A maximum of five page numbers are shown. {.lead}
* Keyboard operation: {.lead}
    * The active page cannot be jumped to. {.lead}
    * Tab sequence: Arrow back, first page that can be jumped to, next page that can be jumped to etc., arrow forward. {.lead}
    * The abbreviated form ‘…’ for hidden pages cannot be jumped to. {.lead}

### Page names
This variant has the following states: {.lead}
* Default
* Hover

<!-- end of the list -->
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/pagination_pages',
  alt: 'Image of a pagination with page names',
  title: 'Pagination with page names'
}) }}

* Can contain ‘forward’ and ‘back’ link, or optionally just ‘forward’ or ‘back’ (when the first or last page is active). {.lead}
* The pagination links with the title of the page to be jumped to are labelled. {.lead}
* The link text has a maximum width in line with the layout. Longer texts are cut using ‘…’. {.lead}

## Specification
{{ specificationLinks({
  figma: 'https://www.figma.com/file/BQzBsQBWB0TAIbpWMhss7P/Web-(Legacy)?node-id=13%3A7931&t=8HES1IZKZfP9aXCY-1',
  github: 'https://angular.app.sbb.ch/angular/components/pagination?variant=standard'
}) }}