
## What does the component do?
A date input is an input field in which users type a date directly. The date is displayed with an abbreviated weekday (e.g. "Th, 12.12.2024") and checked for validity.

Unlike the [datepicker](/en/design-system/lyne/components/datepicker/), the date input does not offer a calendar view. A datepicker can be attached to it to add one.

## When should the component be used?
* When users know the date and can type it faster than finding it in a calendar, e.g. a date of birth.
* When the date lies far in the past or future.
* When space is limited.

## Rules.
* The date input is always placed in a [form field](/en/design-system/lyne/components/form-field/) with a clear label.
* Where useful, a default value is set, e.g. today's date.
* If only a certain period is permitted, an earliest and a latest date are defined.
* Invalid entries show a clear error message.
