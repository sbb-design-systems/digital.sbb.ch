## Rules.
* For small data sets, use a [select](/en/design-system/lyne/components/select/) instead.
* The list does not show too many suggestions at once (max. 10).
* Users can ignore the suggestions and enter their own input.
* Action buttons belong together with their option in an autocomplete row. One or more buttons per option are possible, and not every option needs one.
* The buttons cannot be reached with the Tab key, only with the arrow keys (right/left). Their existence is announced with an `aria-description` on the option.
* Options themselves must not contain other interactive elements such as buttons or checkboxes.
