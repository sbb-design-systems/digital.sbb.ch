---
tags: 
    - dialog-lyne_en
title: Info
parent: dialog-lyne_en
order: 1
permalink: false
---

## What does the component do?
A dialogue is an overlay that overlays the main content of the page and presents a focused interaction or important information until users have completed the action or closed the dialogue.

## When should the component be used?
* To convey important information or confirmations to users.
* To prompt users to take an action before continuing with the main content of the page.
* To display complex forms or content that should not be integrated into the main page.

## Rules
* A dialogue should be reduced as much as possible and focus on a single task/information or a single form.
* The dialogue should be easy to close, either by a close button or by clicking outside the dialogue.
* If no actions are defined in the dialogue footer, users must always be able to close the dialogue.
* Dialogues can also always be closed with the ESC key.

{{ lyneComponentLinks({
  translations: translations["en"].lyne,
  mode: "child",
  collection: collections.lyne_components_dialog_children_en
}) }}