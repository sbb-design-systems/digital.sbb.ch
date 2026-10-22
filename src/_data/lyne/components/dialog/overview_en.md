
## What does the component do?
A dialog is an [overlay](/en/design-system/lyne/components/overlay/) that sits on top of the main content of the page and blocks it. It shows important information or a focused interaction until users complete the action or close the dialog.

## When should the component be used?
* To convey important information or confirmations.
* To prompt users to take an action before they continue on the page.
* To display complex forms or content that do not fit into the main page.

## Rules.
* A dialog always has a title and content. It is reduced as much as possible and focuses on a single task, a piece of information or a form.
* The footer contains at most two actions, [buttons](/en/design-system/lyne/components/button/) or block links.
* A dialog can always be closed: with the ESC key, with an action or by clicking the backdrop. Clicking the backdrop can be disabled.
* For complex content, add a close button. It is a second exit and provides the initial focus.
* Focus starts inside the dialog and returns to the triggering element on close.
