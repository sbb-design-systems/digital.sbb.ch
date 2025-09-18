{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## States
The component has the following states: {.lead}

* Alert
* Warning
* Success
* Information

## Variants
The component has the following variants: {.lead}

* Title: Optional
* Close-Button: Optional
* Detail-Link: Optional
* Interaction: Optional

### Notification-Box with Titel
{{ imageWithMode({
  url: '/assets/images/mobile/notification-default-with-title',
  alt: 'Notificaton-Box, with Titel',
  title: 'Notificaton-Box, with Titel'
}) }}

### Notification-Box without Titel
{{ imageWithMode({
  url: '/assets/images/mobile/notification-default-without-title',
  alt: 'Notificaton-Box without Titel',
  title: 'Notificaton-Box without Titel'
}) }}

### Notification-Box with Interaction and Title
{{ imageWithMode({
  url: '/assets/images/mobile/notification-interaction-with-title',
  alt: 'Notification-Box, mit Titel',
  title: 'Notification-Box, mit Titel'
}) }}

### Notification-Box with Interaction without Title
{{ imageWithMode({
  url: '/assets/images/mobile/notification-interaction-without-title',
  alt: 'Notification-Box, ohne Titel',
  title: 'Notification-Box, ohne Titel'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ZBotr4yqcEKqqVEJTQfSUa/Design-System-Mobile?node-id=290-4135&t=N7M8b5Y9aIJc4LzY-1'
}) }}