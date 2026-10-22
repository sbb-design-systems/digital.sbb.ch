
## What does the component do?
A menu shows context-dependent actions or links for a specific element. It is opened by another element, e.g. a [button](/en/design-system/lyne/components/button/). On small screens it appears as a sheet, on large screens as a floating menu.

## When should the component be used?
* To offer actions or links that belong to a specific element or content.
* To save space for actions that are needed less often.
* As a simple selection, e.g. for the language.

## Rules.
* Menu items have short labels, are logically grouped and sensibly ordered.
* A menu contains only a few items.
* Actions are buttons, references are links.
* Submenus are possible but should be used sparingly.
* If the menu is used as a selection, the active item must also be recognisable for screen readers (`aria-pressed`).
* A [badge](/en/design-system/lyne/components/badge/) on an item needs a text alternative for screen readers.