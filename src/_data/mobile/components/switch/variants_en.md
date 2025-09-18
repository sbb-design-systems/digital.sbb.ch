{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## States
The component has the following states: {.lead}
*   Selected
*   Unselected
*   Disabled selected
*   Disabled unselected
*   Loading
*   Error (default / retry / reloading / button)

## Variants
The component has the following variants: {.lead}
*   Switch
    *   Selected / unselected
*   Switch-Item
    *   without icon / with icon
    *   listed / boxed
    *   without subtext / with subtext
    *   without link / with link
    
### Switch
{{ imageWithMode({
  url: '/assets/images/mobile/switch-default',
  alt: 'Image of the switch, default',
  title: ''
}) }}

### Switch-Item
#### Liste
{{ imageWithMode({
  url: '/assets/images/mobile/switch-item-list',
  alt: 'Image of the switch-item in a list',
  title: ''
}) }}

#### Liste, mit Icon
{{ imageWithMode({
  url: '/assets/images/mobile/switch-item-list-icon',
  alt: 'Image of the switch-item in a list with icon',
  title: 'switch-item in a list with icon'
}) }}

#### Liste, mit Subtext
{{ imageWithMode({
  url: '/assets/images/mobile/switch-item-list-subtext',
  alt: 'Image of the switch-item in a list with subtext',
  title: 'switch-item in a list with subtext'
}) }}

#### Liste, mit Link
{{ imageWithMode({
  url: '/assets/images/mobile/switch-item-list-link',
  alt: 'Image of the switch-item in a list with link',
  title: 'switch-item in a list with link'
}) }}

#### Boxed
{{ imageWithMode({
  url: '/assets/images/mobile/switch-item-boxed',
  alt: 'Image of the switch-item in a box',
  title: 'switch-item in a box'
}) }}

#### Boxed, mit Icon
{{ imageWithMode({
  url: '/assets/images/mobile/switch-item-boxed-icon',
  alt: 'Image of the switch-item in a box with icon',
  title: 'switch-item in a box with icon'
}) }}

#### Boxed, mit Subtext
{{ imageWithMode({
  url: '/assets/images/mobile/switch-item-boxed-subtext',
  alt: 'Image of the switch-item in a box with subtext',
  title: 'switch-item in a box with subtext'
}) }}

#### Boxed, mit Link
{{ imageWithMode({
  url: '/assets/images/mobile/switch-item-boxed-link',
  alt: 'Image of the switch-item in a box with link',
  title: 'switch-item in a box with link'
}) }}

## Specification
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ZBotr4yqcEKqqVEJTQfSUa/Design-System-Mobile?node-id=316-3932&t=N7M8b5Y9aIJc4LzY-1'
}) }}