---
tags: datepicker-legacy_en
title: States and variants
key: datepicker-legacy-variants-states_en
parent: datepicker-legacy_en
icon: variantsstates
order: 2
permalink: false  
---

## States
The component has the following states: {.lead}
* Default
* Focused
* Disabled
* Error

## Variants
### Default
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/datepicker_default',
  alt: 'Image of a datepicker, default',
  title: 'Datepicker, default'
}) }}

* The selected date is shown in the format, day of the week, DD.MM.YYYY (example: Fri, 04.08.2017). {.lead}
* The calendar layer opens if the calendar icon is clicked on. {.lead}
* If the focus is in the calendar layer, this can be operated as follows using the keyboard: {.lead}
    * Arrow keys: Changing the marked day. {.lead}
    * Space / Enter: Selection of the marked day. {.lead}

### With scroll function
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/datepicker_pageable',
  alt: 'Image of a datepicker, with scroll function',
  title: 'Datepicker, with scroll function'
}) }}

* The date selected is shown in the format day of the week, DD.MM.YYYY (example: Fri, 04.08.2017). {.lead}
* The navigation arrows are only displayed if a preceding/subsequent date can also be selected. {.lead}
* The calendar layer opens if the calendar icon is clicked on. {.lead}
* If the focus is in the calendar layer, this can be operated as follows using the keyboard: {.lead}
    * Arrow keys: Changing of the marked day. {.lead}
    * Space / Enter: Selection of the marked day. {.lead}

### Date range
* Two date pickers are combined to select a date range. {.lead}
* If the from date is selected via the calendar layer and the to date has not yet been defined, the calendar layer of the to field opens. If the to date has already been selected, the calendar layer does not open. {.lead}
* If the user selects a from date > to date, the to date is deleted and its calendar layer is shown. {.lead}
* If two dates are selected, the selected date range is shown in colour in the calendar. {.lead}
* The selected date is shown in the format, day of the week, DD.MM.YYYY (example: Fri, 04.08.2017). {.lead}

### Date of birth
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/datepicker_birthdate',
  alt: 'Image of a datepicker, date of birth',
  title: 'Datepicker, date of birth'
}) }}

* Das Geburtsdatum wird im Format TT.MM.JJJJ dargestellt (Beispiel 02.09.1986). {.lead}

### Calendar layer
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/datepicker_picker',
  alt: 'Image of a calendar layer',
  title: 'Calendar layer'
}) }}

The tab sequence within the calender layer is defined as follows: {.lead}
1. month back
2. month forward
3. year back
4. year forward
5. range of the individual days. If the focus is in the range of days, the arrow keys can be used to navigate left, right, up and down within the days. {.lead}

## Specification
{{ specificationLinks({
  figma: 'https://www.figma.com/file/BQzBsQBWB0TAIbpWMhss7P/Web-(Legacy)?node-id=13%3A7791&t=8HES1IZKZfP9aXCY-1',
  github: 'https://angular.app.sbb.ch/angular/components/datepicker?variant=standard'
}) }}