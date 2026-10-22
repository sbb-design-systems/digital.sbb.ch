
## What does the component do?
The loading indicator circle shows that an action is running in the background and users have to wait. It is intended for use within content, for example in a [button](/en/design-system/lyne/components/button/) or next to a text. It is available in red, smoke and white.

## When should the component be used?
* To show that an action or process is running and the application is responding.
* When loading is displayed at a specific place within the content. For overlays, the [loading indicator](/en/design-system/lyne/components/loading-indicator/) is suitable.

## Rules.
* Use the indicator only for actions lasting about 1 second or more. Shorter processes are confusing because of the flashing.
* As a rule, show it only after 1 second. If it is known in advance that it will take longer, it may appear immediately.
* A minimum display duration of about 500 ms can make sense, but is not mandatory.
* It does not change the layout. Reserve the space for it.
* For long waiting times (from about 10 seconds), offer a progress indicator.
* If the indicator should be announced by screen readers, place it in a container with `aria-live` and give it an `aria-label`.
