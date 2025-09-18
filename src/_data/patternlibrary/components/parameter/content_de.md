{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Was macht das Pattern?
* Lässt die Nutzer:innen die Gewichtung von verschiedenen Elementen bestimmen.

## Wann soll das Pattern eingesetzt werden?
* Wenn ein Element wie z.B. Tone, Token, Style, Referenz definiert werden will. 
* Wenn ein Bild-Ratio oder Bildgrösse definiert werden soll.

## Empfehlung
* * Nahe verwandt mit Filter. Prüfen, welches sinnvoller ist.


## Beispiel
{{ principleImage({
  url: '/assets/images/patternlibrary/components/parameter',
  alt: 'Beispiel für Paramter',
  title: 'Pattern parameter'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ASKJJ0RgQNp0TAhXBpLmXd/AI-Patterns-Documentation?node-id=2235-16706'
}) }}