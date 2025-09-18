{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Varianten
*   Mit und ohne Close-Button
*   Mit und ohne Back-Button

### Mit Close Button ohne Back Button
{{ imageWithMode({
  url: '/assets/images/mobile/modal-default',
  alt: 'Darstellung eines modalen Dialogs mit Close Button, ohne Back Button',
  title: 'Modaler Dialog mit Close Button, ohne Back Button'
}) }}

### Mit Close und Back Button
{{ imageWithMode({
  url: '/assets/images/mobile/modal-back',
  alt: 'Darstellung eines modalen Dialogs mit Close Button und Back Button',
  title: 'Modaler Dialog mit Close Button und Back Button'
}) }}

### Ohne Close und Back Button
{{ imageWithMode({
  url: '/assets/images/mobile/modal-without-close-button',
  alt: 'Darstellung eines modalen Dialogs ohne Close Button und Back Button',
  title: 'Modaler Dialog ohne Close Button und Back Button'
}) }}

### Ohne Close Button und mit Back Button
{{ imageWithMode({
  url: '/assets/images/mobile/modal-without-close-button-back',
  alt: 'Darstellung eines modalen Dialogs ohne Close Button, mit Back Button',
  title: 'Modaler Dialog ohne Close Button, mit Back Button'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ZBotr4yqcEKqqVEJTQfSUa/Design-System-Mobile?node-id=339-8447&t=N7M8b5Y9aIJc4LzY-1'
}) }}