
## What does the component do?
A status shows the current state of an object, process or system. It consists of an icon, an optional title and a short text. The colour depends on the type: info, success, warning, error, pending, incomplete, not started or in progress.

## When should the component be used?
* To inform users about the current state of a process, system or object.

## Rules.
* Always use the same type for the same state, throughout the application.
* Keep the text short.
* For screen readers: the text should only contain inline content. For dynamic changes, `role="status"` can be set.