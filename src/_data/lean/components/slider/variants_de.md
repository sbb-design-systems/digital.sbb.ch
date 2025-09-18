{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Zustände
Die Komponente hat folgende Zustände: {.lead}
* Default
* Hover
* Pressed
* Focused
* Disabled

## Varianten

### Kontinuierlich
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Slider_Continuous_Horizontal',
  alt: 'Darstellung eines Sliders, Variante kontinuierlich in horizontaler Ausrichtung',
  title: 'Slider, Variante kontinuierlich in horizontaler Ausrichtung'
}) }}

{{ imageOnGreyBackground({
  url: '/assets/images/lean/Slider_Continuous_Vertical',
  alt: 'Darstellung eines Sliders, Variante kontinuierlich in vertikaler Ausrichtung',
  title: 'Slider, Variante kontinuierlich in vertikaler Ausrichtung'
}) }}

* Diese Variante sollte nicht bei ganz grossen oder sehr kleinen Wertebereichen sondern v.a. bei unpräzisen Wertebereichen verwendet werden (z.B. "leise" - "laut", "wenig" - "viel") {.lead}

### Diskret
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Slider_Discrete_Horizontal',
  alt: 'Darstellung eines Sliders, Variante diskret in horizontaler Ausrichtung',
  title: 'Slider, Variante diskret in horizontaler Ausrichtung'
}) }}

{{ imageOnGreyBackground({
  url: '/assets/images/lean/Slider_Discrete_Vertical',
  alt: 'Darstellung eines Sliders, Variante diskret in vertikaler Ausrichtung',
  title: 'Slider, Variante diskret in vertikaler Ausrichtung'
}) }}

### Wertebereich
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Slider_Range',
  alt: 'Darstellung eines Sliders, Variante Wertebereich',
  title: 'Slider, Variante Wertebereich'
}) }}

### Einzelner Wert
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Slider_Single',
  alt: 'Darstellung eines Sliders, bei dem ein einzelner Wert in einem Wertespektrum gesetzt wird',
  title: 'Slider bei dem ein einzelner Wert in einem Wertespektrum gesetzt wird'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A8001&t=ZF5MfeXb0Gz2GkUw-1'
}) }}