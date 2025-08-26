{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Zustände
Die Komponente hat folgende Zustände: {.lead}

* Default 
* Error
* Loading

## Varianten
Die Komponente hat folgende Varianten: {.lead}

* Illustration: Optional
* Fehlercode: Optional
* Retry-Button: Optional

### Message mit Illustration
{{ imageWithMode({
  url: '/assets/images/mobile/message-with-illustration',
  alt: 'Message, mit Illustration',
  title: 'Message, mit Illustration'
}) }}

### Message ohne Illustration
{{ imageWithMode({
  url: '/assets/images/mobile/message-without-illustration',
  alt: 'Message, mit Illustration',
  title: 'Message, mit Illustration'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ZBotr4yqcEKqqVEJTQfSUa/Design-System-Mobile?node-id=284-3296&t=OQ7s4wE6eWI2fLGh-1'
}) }}