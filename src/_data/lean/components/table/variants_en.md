## States
The component has the following states: {.lead}
* Default
* Hover
* Active

## Variants

### Default
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Table_default',
  alt: 'Image of a table, default',
  title: 'table, default'
}) }}

### Sortable
This variant has the following states: {.lead}
* Unsorted
* Sorted

{{ imageOnGreyBackground({
  url: '/assets/images/lean/Table_Sortable',
  alt: 'Image of a table, sortable',
  title: 'table, sortable'
}) }}

### Groupable
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Table_Groupable',
  alt: 'Image of a table, groupable',
  title: 'table, groupable'
}) }}

### Selectable
This variant has the following states: {.lead}
* Unselected
* EntrySelected
* AllSelected

{{ imageOnGreyBackground({
  url: '/assets/images/lean/Table_Selectable',
  alt: 'Image of a table, selectable',
  title: 'table, selectable'
}) }}

### Filterable
This variant has the following states: {.lead}
* Unfiltered
* Filtered

{{ imageOnGreyBackground({
  url: '/assets/images/lean/Table_Filterable',
  alt: 'Image of a table, filterable',
  title: 'table, filterable'
}) }}

* The individual columns can be filtered according to content type (text, date, value, etc.) using the appropriate components (<sbb-link variant="inline" type="button" href="/en/design-system/lean/components/textfield/">Textfield</sbb-link>, <sbb-link variant="inline" type="button" href="/en/design-system/lean/components/datepicker/">Datepicker</sbb-link>, <sbb-link variant="inline" type="button" href="/en/design-system/lean/components/select/">Select</sbb-link>, etc.). {.lead}
* A separate <sbb-link variant="inline" type="button" href="/en/design-system/lean/components/filter/">Filter</sbb-link> can also be used to restrict large amounts of data. {.lead}
* It is advisable to display the number of filtered items to the users, e.g. "34 out of 3890". {.lead}

### Inline actions
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Table_Inline_Actions',
  alt: 'Image of a table, filterable',
  title: 'table, filterable'
}) }}

* When hovering over rows or focusing them using tab navigation via the keyboard, actions can be offered on the elements. {.lead}
* The actions are offered by using <sbb-link variant="inline" type="button" href="/en/design-system/lean/components/button/">icon button</sbb-link>. Depending on the use case, it is decided in which column (first or last column) they are placed. There they overlay the existing content. {.lead}
* A maximum of 3 actions should be offered. If more are needed, a <sbb-link variant="inline" type="button" href="/en/design-system/lean/components/contextmenu/">contextmenu</sbb-link> should be used. {.lead}
* Keyboard operation: if the focus is on a row in the table, it's possible to navigate to the actions using 'Tab'-key of the keyboard. {.lead}

### Batch actions
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Table_Batch_Actions',
  alt: 'Image of a table, batch actions',
  title: 'table, batch actions'
}) }}

* Batch actions can be offered on selection of (multiple) elements. {.lead}
* All versions of <sbb-link variant="inline" type="button" href="/en/design-system/lean/components/button/">buttons</sbb-link> can be used for the actions. {.lead}
* The primary action is on the left, the secondary actions are on the right. {.lead}
* A maximum of 3 actions should be offered. If more are needed, a <sbb-link variant="inline" type="button" href="/en/design-system/lean/components/contextmenu/">contextmenu</sbb-link> should be used. {.lead}
* The batch actions are placed above the table on the right. {.lead}

## Example application
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Table_Showcase',
  alt: 'Image of a example application',
  title: 'Example application'
}) }}

## Specifications
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A8043&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/table?variant=lean'
}) }}