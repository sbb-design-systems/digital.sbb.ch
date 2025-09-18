{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}


## Zustände
DIe Komponente hat folgende Zustände: {.lead}
*   Selected
*   Unselected
*   Indeterminate
*   Disabled Selected
*   Disabled Unselected
*   Disabled Indeterminate
*   Loading

## Varianten
Die Komponente hat folgende Varianten: {.lead}
*   Checkbox
    *   ohne Icon / mit Icon
*   Checkbox-Item
    *   listed / boxed
    *   ohne Icon / mit Icon
    *   ohne Subtext / mit Subtext
    *   ohne Button / mit Button


### Checkbox
#### ohne Icon
{{ imageWithMode({
  url: '/assets/images/mobile/checkbox-default',
  alt: 'Darstellung der Checkbox ohne Icon',
  title: 'Checkbox ohne Icon'
}) }}

#### mit Icon
{{ imageWithMode({
  url: '/assets/images/mobile/checkbox-icon',
  alt: 'Darstellung der Checkbox mit Icon',
  title: 'Checkbox mit Icon'
}) }}

### Checkbox-Item
#### Liste
{{ imageWithMode({
  url: '/assets/images/mobile/checkbox-item-list',
  alt: 'Darstellung des Checkbox-Items in einer Liste ',
  title: 'Checkbox-Items in einer Liste'
}) }}

#### Liste, mit Icons (links und rechts)
{{ imageWithMode({
  url: '/assets/images/mobile/checkbox-item-list-icon',
  alt: 'Darstellung Checkbox-Items in einer Liste mit Icon',
  title: 'Checkbox-Items in einer Liste mit Icon'
}) }}

#### Liste, mit Subtext
{{ imageWithMode({
  url: '/assets/images/mobile/checkbox-item-list-subtext',
  alt: 'Darstellung des Checkbox-Items in einer Liste mit Subtext',
  title: 'Checkbox-Items in einer Liste mit Subtext'
}) }}

#### Liste, mit Button
{{ imageWithMode({
  url: '/assets/images/mobile/checkbox-item-list-button',
  alt: 'Darstellung des Checkbox-Items in einer Liste mit Button',
  title: 'Checkbox-Items in einer Liste mit Button'
}) }}

#### Liste, ladend
{{ imageWithMode({
  url: '/assets/images/mobile/checkbox-item-list-loading',
  alt: 'Darstellung des Checkbox-Items in einer Liste ladend',
  title: 'Checkbox-Items in einer Liste ladend'
}) }}

#### Boxed
{{ imageWithMode({
  url: '/assets/images/mobile/checkbox-item-boxed',
  alt: 'Darstellung des Checkbox-Items in einer Box',
  title: 'Checkbox-Items in einer Box'
}) }}

#### Boxed, mit Icons (links und rechts)
{{ imageWithMode({
  url: '/assets/images/mobile/checkbox-item-boxed-icon',
  alt: 'Darstellung des Checkbox-Items in einer Box mit Icon',
  title: 'Checkbox-Items in einer Box mit Icon'
}) }}

#### Boxed, mit Subtext
{{ imageWithMode({
  url: '/assets/images/mobile/checkbox-item-boxed-subtext',
  alt: 'Darstellung des Checkbox-Items in einer Box mit Subtext',
  title: 'Checkbox-Items in einer Box mit Subtext'
}) }}

#### Boxed, mit Button
{{ imageWithMode({
  url: '/assets/images/mobile/checkbox-item-boxed-button',
  alt: 'Darstellung des Checkbox-Items in einer Box mit Button',
  title: 'Checkbox-Items in einer Box mit Button'
}) }}

#### Boxed, ladend
{{ imageWithMode({
  url: '/assets/images/mobile/checkbox-item-boxed-loading',
  alt: 'Darstellung des Checkbox-Items in einer Box ladend',
  title: 'Checkbox-Items in einer Box ladend'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ZBotr4yqcEKqqVEJTQfSUa/Design-System-Mobile?node-id=123-234&t=OQ7s4wE6eWI2fLGh-1'
}) }}
