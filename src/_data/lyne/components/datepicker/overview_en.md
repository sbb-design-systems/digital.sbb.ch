## What does the component do?
The datepicker adds a calendar view to a [date input](/en/design-system/lyne/components/date-input/). Users select a date in it instead of typing it.

## When should the component be used?
* When users select a date in a calendar, for example a travel date close to today.
* When the weekday or an overview of the month helps with the selection.
* For plain text entry without a calendar, use the date input.

## Rules.
* The datepicker is always used together with a date input in a [form field](/en/design-system/lyne/components/form-field/). A toggle opens the calendar.
* For quick browsing, buttons for the previous and next day can be added. They are disabled automatically at the earliest and latest date.
* Where useful, a default value is set, e.g. today's date.
* If only a certain period is permitted, the earliest and latest date are defined on the date input. The calendar adopts them.
* The two-month view suits longer periods, for example journeys across a month change.
