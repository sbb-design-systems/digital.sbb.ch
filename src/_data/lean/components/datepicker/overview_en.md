## What does the component do?
* It is used for the entry of a date. {.lead}

## When should the component be used?
* Whenever a date value is required from the user. {.lead}

## Rules    
* Date details are always single-line. {.lead}
* The date selection always has a label. {.lead}
* A question mark in the circle – in addition to the label – can be used for detailed explanations. A <sbb-link variant="inline" type="button" href="/en/design-system/lean/components/tooltip/">tooltip</sbb-link> opens when clicking on this question mark. {.lead}
* The date can be entered by hand by clicking in the date field. {.lead}
    * Manual entry allows the following entries, which are automatically formatted correctly by the component (e.g. 1 January 2020): {.lead}
        * '010120' {.lead}
        * '1.1.20' {.lead}
        * '01.01.20' {.lead}
* When the calendar icon is clicked on, a calendar layer opens to select the date. Clicking outside of the calendar layer closes it again. {.lead}
* Individual days or entire date ranges can be deactivated in the calendar layer. {.lead}
* The navigation arrows in the calendar layer (month/year) are only shown if a preceding/subsequent date can be selected. {.lead}
* If the focus is on the calendar layer, it can be operated by keyboard as follows: {.lead}
    * Arrow keys: Changing the marked day. {.lead}
    * Space key / Enter: Selection of the marked day. {.lead}
* The selected date is usually displayed in the format "Weekday, DD.MM.YYYY" (example "Fr, 04.08.2017"). The display of the weekday is optional. {.lead}