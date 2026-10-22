## Rules.
* The time input is used within the [form field](/en/design-system/lyne/components/form-field/).
* Entries such as `1`, `123` or `12.30` are automatically formatted to `01:00`, `01:23` and `12:30` respectively. Permitted separators are `.`, `:`, `,` and `-`.
* Invalid times (e.g. 25:30) are not formatted. The application validates and reports such entries.