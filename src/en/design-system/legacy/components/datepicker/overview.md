---
tags: datepicker-legacy_en
title: Overview
key: datepicker-legacy-overview_en
parent: datepicker-legacy_en
icon: overview
order: 1
permalink: false  
---

## What does the component do?
It is used for the entry of a date. {.lead}

## When should the component be used?
Whenever a date value is required from the user. {.lead}

## Rules
* Date information is always single-line. {.lead}
* The date selection always has a label. {.lead}
* Optional date entries include the text ‘(optional)’ behind the label. The text ‘(optional)’ can be abbreviated as ‘(opt.)’ in short fields. {.lead}
* A question mark in the circle can also be shown – in addition to the label – for detailed explanations. A <sbb-link variant="inline" href="/en/design-system/legacy/components/tooltip">tooltip</sbb-link> opens when this question mark is clicked on. {.lead}
* The date can be entered manually by clicking on the date field. The digit entry keypad of the system concerned appears on touch devices. {.lead}
* The point must always be entered by the user with manual entry. The element then takes over the correct formatting, i.e. entries like 1.1.18 must be accepted and put into the required format. {.lead}
* A calendar layer for the selection of the date opens when the calendar icon is clicked on. This is closed again by clicking outside of the calendar layer. {.lead}
* The system date picker is never used on touch devices. {.lead}
* Individual days or entire date ranges can be deactivated in the calendar layer. {.lead}
* The navigation arrows in the calendar layer (month/year) are only displayed if a preceding/following date can also be selected. {.lead}