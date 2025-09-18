{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Verwendung
* Das Logo wird bei allen SBB-Applikationen eingesetzt. {.lead}

## Regeln
* Das Logo tritt genau einmal pro Seite auf und befindet sich immer im <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/components/header/">Header</sbb-link>. {.lead}
* Die Positionierung ist immer rechts oben. {.lead}
* Abwandlungen des Logos sind nicht erlaubt. {.lead}
* Das Logo ist nicht verlinkt. {.lead}

## Varianten
### Standard
{{ imageOnGreyBackground({
  url: '/assets/images/lean/logo_default',
  alt: 'Darstellung des SBB Logos',
  title: 'SBB Logo'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=173%3A138444&t=ZF5MfeXb0Gz2GkUw-1'
}) }}