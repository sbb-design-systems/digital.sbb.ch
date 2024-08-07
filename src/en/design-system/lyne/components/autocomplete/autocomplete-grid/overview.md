---
tags: autocomplete-grid-lyne_en
title: Info
key: autocomplete-grid-lyne-overview_en
parent: autocomplete-grid-lyne_en
icon: overview
order: 1
permalink: false
---

## What does the component do?
The component offers the same functionalities as the Autocomplete component, but also offers the option of displaying buttons next to the options. 

## When should the component be used?
* Only if buttons are required in addition to the options shown in the autocomplete list.

## Rules
* The component should not be used for small data sets (e.g. only 10 entries/options).
* The autocomplete list should not display too many suggestions at once in order to maintain clarity (max. 10 suggestions).
* Users should be able to ignore the autocomplete function and make their own entries.

{{ lyneComponentLinks({
  translations: translations["en"].lyne,
  mode: "child",
  collection: collections.lyne_components_autocomplete_grid_children_en
}) }}