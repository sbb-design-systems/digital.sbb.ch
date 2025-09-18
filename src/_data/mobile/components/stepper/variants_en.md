{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## States
The component has the following states: {.lead}

* Numeric
* Icon
* Default: Use in content
* Red: Use in the header

## Variants
The component has the following variants: {.lead}

* Resizing: Fixed or Full Width
* Type: Numeric or with icons
* Number of steps: 2 to 6

### Default
{{ imageWithMode({
  url: '/assets/images/mobile/stepper-default',
  alt: 'Visual design of a default Stepper',
  title: 'Visual design of a default Stepper'
}) }}

### Red
{{ imageWithMode({
  url: '/assets/images/mobile/stepper-red',
  alt: 'Visual design of a Stepper on red backgrounds',
  title: 'Visual design of a Stepper on red backgrounds'
}) }}

## Specification
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ZBotr4yqcEKqqVEJTQfSUa/Design-System-Mobile?m=auto&node-id=330-13155&t=rQTLXnChqHrpKLB4-1'
}) }}
