
## What does the component do?
The loading indicator shows that an action is running in the background and users have to wait. It is intended for use as an overlay and is available in red, smoke and white.

## When should the component be used?
* To show that an action or process is running and the application is responding.
* When an entire area or the whole page is overlaid while loading. For use within content, the [loading indicator circle](/en/design-system/lyne/components/loading-indicator-circle/) is suitable.

## Rules.
* Use the indicator only for actions lasting about 1 second or more. Shorter processes are confusing because of the flashing.
* As a rule, show it only after 1 second. If it is known in advance that it will take longer, it may appear immediately.
* A minimum display duration of about 500 ms can make sense, but is not mandatory.
* For long waiting times (from about 10 seconds), offer a progress indicator.
* If the indicator should be announced by screen readers, place it in a container with `aria-live` and give it an `aria-label`.
