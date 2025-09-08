{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Was macht das Pattern?
* Lässt das Anhängen von bestimmten Dateien oder Links zu, um sich darauf zu beziehen.

## Wann soll das Pattern eingesetzt werden?
* Wenn die Nutzer:innen sich auf spezifische Dateien oder Seiten beziehen wollen. 


## Empfehlung
* Prüfe in deinem Fall, wie viele Datein, deren Grösse und Dateiformate erlaubt sein sollen.


## Beispiel
{{ principleImage({
  url: '/assets/images/patternlibrary/components/primary-reference',
  alt: 'Beispiel für die primäre Referenz',
  title: 'Pattern primary-reference'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ASKJJ0RgQNp0TAhXBpLmXd/AI-Patterns-Documentation?node-id=2235-16712'
}) }}