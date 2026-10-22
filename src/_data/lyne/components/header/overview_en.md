
## What does the component do?
The header is the top section of a page or application. It contains the logo, actions and the main navigation. This helps users quickly find the main areas.

## When should the component be used?
* On every page of a website, to ensure consistent navigation and brand presence.
* To make the logo, main navigation, search and important links visible and easily accessible.

## Rules.
* Navigation elements are logically grouped and labelled. They always have an icon to the left of the label.
* A hamburger menu always comes first, on the left.
* For extensive content, the header includes a search function.
* The header contains only a few elements so that clarity and responsive behaviour are not impaired.
* A shadow appears below the header on scrolling. If not the page but only a content area scrolls (e.g. with a [sidebar](/en/design-system/lyne/components/sidebar/) or [icon sidebar](/en/design-system/lyne/components/icon-sidebar/)), this area must be set as `scroll-origin`.
* So that focused elements do not disappear behind the header, `scroll-padding-top` is set on the page.
