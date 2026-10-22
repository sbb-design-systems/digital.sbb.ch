
## What does the component do?
A time input is an input field for a time. The entry is automatically formatted as HH:mm.

## When should the component be used?
* When users need to enter an exact time, e.g. for departure times or appointments.

## Rules.
* The time input is used within the [form field](/en/design-system/lyne/components/form-field/).
* Entries such as `1`, `123` or `12.30` are automatically formatted to `01:00`, `01:23` and `12:30` respectively. Permitted separators are `.`, `:`, `,` and `-`.
* Invalid times (e.g. 25:30) are not formatted. The application validates and reports such entries.