{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## States
The component has the following states: {.lead}
*   Checked
*   Unchecked
*   Disabled checked
*   Disabled unchecked
*   Loading

## Variants
The component has the following variants: {.lead} 
*   Radiobutton
    *   with icon / without icon
*   Radiobutton-Item
    *   listed / boxed
    *   without icon / with icon
    *   without subtext / with subtext
    *   without button / with button

### Radiobutton
#### without icon
{{ imageWithMode({
  url: '/assets/images/mobile/radiobutton-default',
  alt: 'Image of a radiobutton, without icon',
  title: 'Radiobutton, without icon'
}) }}

#### with icon
{{ imageWithMode({
  url: '/assets/images/mobile/radiobutton-icon',
  alt: 'Image of a radiobutton, with icon',
  title: 'Radiobutton, with icon'
}) }}

### Radiobutton-Item
#### List
{{ imageWithMode({
  url: '/assets/images/mobile/radiobutton-item-list',
  alt: 'Image of a radiobutton-item in a list, default',
  title: 'Radiobutton-item in a list, default'
}) }}

#### List, with icons (left and right)
{{ imageWithMode({
  url: '/assets/images/mobile/radiobutton-item-list-icon',
  alt: 'Image of a radiobutton-item in a list, with icons',
  title: 'Radiobutton-item in a list, with icons'
}) }}

#### List, with subtext
{{ imageWithMode({
  url: '/assets/images/mobile/radiobutton-item-list-subtext',
  alt: 'Image of a radiobutton-item in a list, with subtext',
  title: 'Radiobutton-item in a list, with subtext'
}) }}

#### List, with button
{{ imageWithMode({
  url: '/assets/images/mobile/radiobutton-item-list-button',
  alt: 'Image of a radiobutton-item in a list, with button',
  title: 'Radiobutton-item in a list, with button'
}) }}

#### List, loading
{{ imageWithMode({
  url: '/assets/images/mobile/radiobutton-item-list-loading',
  alt: 'Image of a radiobutton-item in a list, loading',
  title: 'Radiobutton-item in a list, loading'
}) }}

#### Boxed
{{ imageWithMode({
  url: '/assets/images/mobile/radiobutton-item-boxed',
  alt: 'Image of a radiobutton-item in a box, default',
  title: 'Radiobutton-item in a box, default'
}) }}

#### Boxed, with icons (left and right)
{{ imageWithMode({
  url: '/assets/images/mobile/radiobutton-item-boxed-icon',
  alt: 'Image of a radiobutton-item in a box, with icons',
  title: 'Radiobutton-item in a box, with icons'
}) }}

#### Boxed, with subtext
{{ imageWithMode({
  url: '/assets/images/mobile/radiobutton-item-boxed-subtext',
  alt: 'Image of a radiobutton-item in a box, with subtext',
  title: 'Radiobutton-item in a box, with subtext'
}) }}

#### Boxed, with button
{{ imageWithMode({
  url: '/assets/images/mobile/radiobutton-item-boxed-button',
  alt: 'Image of a radiobutton-item in a box, with button',
  title: 'Radiobutton-item in a box, with button'
}) }}

#### Boxed, loading
{{ imageWithMode({
  url: '/assets/images/mobile/radiobutton-item-boxed-loading',
  alt: 'Image of a radiobutton-item in a box, loading',
  title: 'Radiobutton-item in a box, loading'
}) }}

## Specification
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ZBotr4yqcEKqqVEJTQfSUa/Design-System-Mobile?node-id=124-4934&t=N7M8b5Y9aIJc4LzY-1'
}) }}