
## What does the component do?
The form field is a wrapper for form elements such as input (text, date, time), [select](/en/design-system/lyne/components/select/), textarea, [datepicker](/en/design-system/lyne/components/datepicker/) and [autocomplete](/en/design-system/lyne/components/autocomplete/). It ensures a consistent display and provides a label, error message and hint. It can contain an icon before and after the input field, and a button after it to clear the input.

## When should the component be used?
* Whenever an input, select or textarea is used.
* To ensure consistent design and alignment of form elements.

## Rules.
* Form elements are not used without a form field. If this is exceptionally necessary, the application must replicate the form field's appearance itself (for native inputs with the class `sbb-input`).
* Every field has a label.
* All fields are considered required. Optional fields are marked with "(optional)" in the label.
* Error messages appear below the field.
* The clear button only works with simple inputs, not with select.
