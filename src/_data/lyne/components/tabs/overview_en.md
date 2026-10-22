## What does the component do?
Tabs organise content into separate views, of which only one is visible at a time. There are two variants:
* Tab group: switches between content within the same page without reloading the page.
* Tab nav bar: switches between different pages (routes) via links.

## When should the component be used?
* To group related content thematically and save space by showing only part of it at a time (tab group).
* To navigate between equal-ranking pages of a section (tab nav bar).

## Rules.
* Label tabs briefly and clearly. Choose a logical order.
* Avoid too many tabs. They must fit next to each other.
* A tab can show an icon and an amount.
* Use disabled tabs sparingly. They are not focusable and may be invisible to screen readers.
* Tab group: wrap the content in a semantic element (e.g. `section`, `article`).
* Tab nav bar: mark the active tab with `aria-current="page"`.
