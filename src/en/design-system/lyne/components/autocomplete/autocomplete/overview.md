---
tags: 
    - autocomplete-lyne_en
title: Info
key: autocomplete-lyne-overview_en
parent: autocomplete-lyne_en
icon: overview
order: 1
permalink: false
---

## What does the component do?
The component offers suggestions to the user during input, based on existing data or previous input, to make input easier and faster.

## When should the component be used?
* To improve the data input experience by suggesting possible/allowed inputs.
* To increase the accuracy and consistency of the data input.
* To reduce the time users need to fill in forms.

## Rules
* The component should not be used for small data sets (e.g. only 10 entries/options).
* The autocomplete list should not display too many suggestions at once in order to maintain clarity (max. 10 suggestions).
* Users should be able to ignore the autocomplete function and make their own entries.

{{ lyneComponentLinks({
  translations: translations["en"].lyne,
  mode: "child",
  collection: collections.lyne_components_autocomplete_children_en
}) }}