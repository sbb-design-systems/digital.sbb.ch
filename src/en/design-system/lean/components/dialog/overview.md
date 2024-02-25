---
tags: dialog-lean_en
title: Overview
key: dialog-lean-overview_en
parent: dialog-lean_en
icon: overview
order: 1
permalink: false  
---

## What does the component do?
* Causes an action by the user for specific decisions.{.lead}

## When should the component be used?
* When an action has to be confirmed by the user.{.lead}
* To display critical information that has to be confirmed by the user.{.lead}
* To request actions that has to be confirmed by the user.{.lead}
* To select decision options by the user.{.lead}

## Rules
### Behaviour
* Dialogs are displayed as modal windows in front of the application.{.lead}
* Dialogs disable all application functions and remain displayed until they have been confirmed, cancelled or a necessary action has been performed.{.lead}
* Dialogs are purposefully interruptive, so they should be used sparingly.{.lead}
* The dialog can be closed and thus the action cancelled in several ways:{.lead}
    * via the 'X' on the right in the header of the dialog.{.lead}
    * via a click on the 'glass' in the background{.lead}
    * via a 'Cancel'-button (if available){.lead}
    * 'ESC' key on the keyboard{.lead}

### Layout
* The dialog has its own header, content area and button bar.{.lead}
* It should be prevented from scrolling. If it cannot be prevented, the header and button bar are sticky.{.lead}
* The primary action is placed to the left of the secondary action.{.lead}
* A 'glass' is displayed behind the dialog, thus blocking editing outside the dialog.{.lead}

### Content
* The header may contain context-describing information (e.g. the train number).{.lead}
* The content of the dialog can be used completely flexibly, e.g.{.lead}
    * a detailed description of the situation and a clear question to be answered by the user.{.lead}
    * a form to create or edit a complex data object.{.lead}

### Actions
* Confirmation actions are disabled until a selection is made or the form is valid (all mandatory fields filled and no incorrect entries).{.lead}
* Cancel actions are never disabled.{.lead}