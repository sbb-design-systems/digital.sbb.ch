{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Variants
The component has the following variants 
* with title / without title
* listed / boxed

### Listed, with title
{{ imageWithMode({
  url: '/assets/images/mobile/list-view-with-title',
  alt: 'Image of a list with title',
  title: 'List with title'
}) }}

### Listed, without title
{{ imageWithMode({
  url: '/assets/images/mobile/list-view-without-title',
  alt: 'Image of a list without title',
  title: 'List without title'
}) }}

### Boxed, with title
{{ imageWithMode({
  url: '/assets/images/mobile/list-view-with-title-boxed',
  alt: 'Image of a boxed list with title',
  title: 'Boxed list with title'
}) }}

### Boxed, without title
{{ imageWithMode({
  url: '/assets/images/mobile/list-view-without-title-boxed',
  alt: 'Image of a boxed list without title',
  title: 'Boxed list without title'
}) }}

## Specification
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ZBotr4yqcEKqqVEJTQfSUa/Design-System-Mobile?node-id=282-933&t=OQ7s4wE6eWI2fLGh-1'
}) }}