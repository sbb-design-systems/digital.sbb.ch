---
tags: select-legacy_en
title: Overview
key: select-legacy-overview_en
parent: select-legacy_en
icon: overview
order: 1
permalink: false  
---

## What does the component do?
It is used for the selection of one or more options from a pre-defined list.{.lead}

## When should the component be used?
* When selecting from several options (single or multiple choice) in a list.{.lead}
* If a selection must be made where the entries mutually exclude one another and no default value is to be set (in contrast to the <sbb-link variant="inline" href="/{{page.lang}}/design-system/legacy/components/radiobutton">radio button</sbb-link> element).{.lead}
* When selection options are to be grouped.{.lead}

## Rules
* There must be at least two options available.{.lead}
* The element always has a label.{.lead}
* Optional selections include the text ‘(optional)’ behind the label. The text ‘(optional)’ can be abbreviated to ‘(opt.)’ in short fields.{.lead}
* A question mark in the circle – in addition to the label – can be used for detailed explanations. A <sbb-link variant="inline" href="/{{page.lang}}/design-system/legacy/components/tooltip">tooltip</sbb-link> opens when this question mark is clicked on.{.lead}
* The text in the select element is always single-line.{.lead}
* If an entry is longer than the available width of the element, the entry’s text is abbreviated with ‘…’.{.lead}
* A pre-selection is not permitted with a mandatory field.{.lead}
* If no selection has been made yet, the element text says “please select …”.{.lead}