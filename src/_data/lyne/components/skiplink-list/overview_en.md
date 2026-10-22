
## What does the component do?
The skiplink list bundles skip links. They let keyboard and screen reader users jump directly to important areas of a page. A skip link only becomes visible when it receives keyboard focus (e.g. via Tab). With several links, only the focused one is visible.

## When should the component be used?
* On every page with repeating navigation or a header area, so that users can skip it.
* To jump directly to the main content, menu or other important areas.

## Rules.
* Place the skiplink list as the first interactive element in the DOM so that it is immediately reachable via keyboard.
* Label each skip link briefly and clearly according to its target.
* Each skip link leads directly to its target area.
* An optional title is visually hidden but read by screen readers.