
## What does the component do?
The navigation displays navigation links as a modal overlay. It is opened via a hamburger icon. It can contain a second level (sections).

## When should the component be used?
* For the main navigation of a website or application.
* When the navigation should not be permanently visible.

## Rules.
* The hamburger icon is the first element in the [header](/en/design-system/lyne/components/header/).
* Links are logically grouped and sensibly ordered.
* Use the second level only when needed.
* The current page is marked and, for screen readers, set with `aria-current="page"` (`accessibility-current` for links).
* While open, the rest of the page cannot be operated and does not scroll.