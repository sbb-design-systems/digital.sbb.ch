## States 
The component has the following states: {.lead}
* Default
* Placeholder
* Focused
* Disabled
* Error
* Mandatory
* Readonly

## Variants

### Default
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Dateinput_default',
  alt: 'Image of a date picker',
  title: 'Date picker'
}) }}

### With scroll function
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Dateinput_Pageable',
  alt: 'Image of a date picker with scroll function',
  title: 'Date picker with scroll function'
}) }}

* The navigation arrows are only shown if a preceding/subsequent date can be selected. {.lead}

### Date range
* Two date pickers are combined to select a date range. {.lead}
* If the from date is selected via the calendar layer and the to date has not yet been defined, the calendar layer of the to field opens. If a to date has already been selected, the calendar layer does not open. {.lead}
* If the user selects a from date > to date, the to date is deleted and its calendar layer is shown. {.lead}
* If both dates are shown, the selected range is entered in the calendar in colour. {.lead}

### Date of birth
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Dateinput_Birthdate',
  alt: 'Image of a date picker, date of birth',
  title: 'Date picker, date of birth'
}) }}

### Calender Layer (date picker)
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Dateinput_Picker',
  alt: 'Image of a date picker, calender layer',
  title: 'Date picker, calender layer'
}) }}

The tab sequence within the calender layer is defined as follows: {.lead}
1. Previous month
2. Next month
3. Previous year
4. Next year
5. range of the individual days. If the focus is on the range of days, it is possible to navigate left, right, up and down within the days using the arrow keys. {.lead}

## Specifications
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A7791&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/datepicker?variant=lean'
}) }}