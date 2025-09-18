{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## States
The component has the following states: {.lead}

* Default
* Error
* Loading

## Variants
The component has the following variants: {.lead}

* Illustration: Optional
* Error Code: Optional
* Retry-Button: Optional

### Message with illustration
{{ imageWithMode({
  url: '/assets/images/mobile/message-with-illustration',
  alt: 'Message, with illustration',
  title: 'Message, with illustration'
}) }}

### Message without illustration
{{ imageWithMode({
  url: '/assets/images/mobile/message-without-illustration',
  alt: 'Message, without illustration',
  title: 'Message, without illustration'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ZBotr4yqcEKqqVEJTQfSUa/Design-System-Mobile?node-id=284-3296&t=OQ7s4wE6eWI2fLGh-1'
}) }}