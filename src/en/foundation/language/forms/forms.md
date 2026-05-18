---
layout: page.njk
tags: level3
key: forms_en
title: Forms and Inputs
parent: language_en
order: 2
---

Forms and inputs use labels, hints and placeholders to show users how to fill in fields correctly. 

Their goal is to clarify expectations, prevent errors and make data entry as simple and reliable as possible.

## Labels

Labels clearly name what should be entered. They provide orientation and reduce uncertainty.

Recommendations:

* **Be clear.** Use precise labels that clearly describe the purpose of the field.
* **Explain when needed.** If additional information is required for understanding, place it in an info popover.

Examples:

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/en/forms_light',
  urldark: '/assets/images/ux-writing/en/forms_dark',
  alt: 'Example for form fields',
  title: 'Forms'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Street and number</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>House number</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Number</div>
    </div>    
</div>

## Placeholders

Placeholders provide hints and assist with data entry.

Recommendations:

* **Show examples.** Use placeholders to show the required format or example values and prevent input errors.
* **Not a replacement.** Placeholders do not replace a label - they serve only as a supplementary hint.

Examples:

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/en/forms2_light',
  urldark: '/assets/images/ux-writing/en/forms2_dark',
  alt: 'Example for form fields',
  title: 'Forms'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Enter search term</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>City, station, ...</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Date of birth (DD.MM.YYYY)</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Search</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>What are you looking for?</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Number</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>E-Mail, Last Name, First Name, Customer Number, Address, Phone Number ...</div>
    </div>    
</div>