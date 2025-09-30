## States
The component has the following states: {.lead}
* Default

## Variants

### Confirmation
{{ imageOnGreyBackground({
  url: '/assets/images/lean/notification_confirmation',
  alt: 'Image of notification message, confirmation',
  title: 'Notification message, confirmation'
}) }}

### Notification
{{ imageOnGreyBackground({
  url: '/assets/images/lean/notification_information',
  alt: 'Image of notification message, notfication',
  title: 'Notification message, notfication'
}) }}

### Warning 
{{ imageOnGreyBackground({
  url: '/assets/images/lean/notification_warning',
  alt: 'Image of notification message, warning',
  title: 'Notification message, warning'
}) }}

### Error 
{{ imageOnGreyBackground({
  url: '/assets/images/lean/notification_error',
  alt: 'Image of notification message, error',
  title: 'Notification message, error'
}) }}

### Error with jump marker 
{{ imageOnGreyBackground({
  url: '/assets/images/lean/notification_link',
  alt: 'Image of notification message, jump marker',
  title: 'Notification message, jump marker'
}) }}

* If an error cannot be assigned to an individual element, then the error message with jump marker is used. {.lead}
* The individual jump markers are separated with a '/'. {.lead}
* The cause of the error is scrolled to if a jump marker is clicked on. {.lead}
* The jump marker target is always on the same page as the notification (no jumping to other pages). {.lead}

### Notification Toast
* Notifications can be displayed directly within the content area (e.g. due to form validation). However, "flying in" toasts can also be used for notifications. {.lead}
* The display duration until automatic disappearance can now be defined according to the use case. To this end, toasts can also be configured not to disappear automatically. {.lead}

## Specifications
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A7917&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/notification?variant=lean'
}) }}