{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## States
The component has the following states: {.lead}
* Default
* Hover
* Pressed
* Focused
* Disabled

## Variants

### Continuous
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Slider_Continuous_Horizontal',
  alt: 'Image of a slider, continuous, horizontal',
  title: 'Slider, continuous, horizontal'
}) }}

{{ imageOnGreyBackground({
  url: '/assets/images/lean/Slider_Continuous_Vertical',
  alt: 'Image of a slider, continuous, vertical',
  title: 'Slider, continuous, horizontal'
}) }}

* This variant should not be used for very large or very small value ranges, but above all for imprecise value ranges (e.g. "quiet" - "loud", "little" - "much"). {.lead}

### Discrete
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Slider_Discrete_Horizontal',
  alt: 'Image of a slider, discrete, horizontal',
  title: 'Slider, discrete, horizontal'
}) }}

{{ imageOnGreyBackground({
  url: '/assets/images/lean/Slider_Discrete_Vertical',
  alt: 'Image of a slider, discrete, vertical',
  title: 'Slider, discrete, horizontal'
}) }}

### Value range
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Slider_Range',
  alt: 'Image of a slider, value range',
  title: 'Slider, value range'
}) }}

### Single value
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Slider_Single',
  alt: 'Image of a slider, single value',
  title: 'Slider, value range'
}) }}

## Specifications
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A8001&t=ZF5MfeXb0Gz2GkUw-1'
}) }}