## What does the component do?
A notification informs users within the content about the status of an action or other important notices, without interrupting their task. The types are info, note, success, warn and error.

## When should the component be used?
* To inform users in a flow about the status of actions, e.g. success or error.
* To point out required actions or changes.
* For system-wide, very important messages, use the alert component instead.

## Rules.
* The notification is placed at the top of the main content or close to the affected element. Positioning is consistent throughout the application.
* The text is short and clear. A title is optional.
* The notification does not disappear automatically. It stays until users close it or the problem is resolved.
* The close button is optional. If the message must be read, omit it (`readonly`).
* Newly appearing notifications must be announced to screen readers (`aria-live="polite"` on the container).
