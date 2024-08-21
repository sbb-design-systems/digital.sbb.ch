---
tags: textfield-legacy_en
title: Overview
key: textfield-legacy-overview_en
parent: textfield-legacy_en
icon: overview
order: 1
permalink: false  
---

## What does the component do?
It is used for the entry of text and numbers. {.lead}

## When should the component be used?
When an entry is required from the user. {.lead}

## Rules
* An entry field always has a label. {.lead}
* Optional entries include the text ‘(optional)’ behind the label text. The text ‘(optional)’ can be shortened to ‘(opt.)’ for short fields. {.lead}
* A question mark in the circle – in addition to the label – can be used for detailed explanations. A <sbb-link variant="inline" href="/en/design-system/legacy/components/tooltip">tooltip</sbb-link> opens when this question mark is clicked on. {.lead}
* The entry text is always single-line. {.lead}
* If the text becomes longer than the width of the entry field during the entry, the text entered is pushed to the left so that what is currently being written can always be seen. {.lead}
* After leaving the entry field with a long text, this is cut off at the end and designated with “…”. {.lead}
* An entry field may contain a placeholder which is displayed directly in the entry field provided no value has been entered by the user. {.lead}
* An entry field can have three different widths: {.lead}
    * Short → 1/6 of the available width of the container/parent element (1/4 with tablet portrait, 1/3 with mobile portrait). {.lead}
    * Medium → 1/2 of the available width of the container/parent element (full width with mobile portrait). {.lead}
    * Long → full available width of the container/parent element. {.lead}
* If the user can never edit a form field, no entry field can be used (display as text). {.lead}