{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Was macht das Pattern?
* Hilft den Nutzer:innen zu starten, indem man zeigt, was die AI kann.

## Wann soll das Pattern eingesetzt werden?
* Bei der Startmaske
* Auch als Folgefrage möglich 



## Empfehlung
*  Beispiele dem Kontext anpassen. 
*  Wenn Daten der Nutzer:innen verwenden werden dürfen: Diese nutzen um personalisierte Vorschläge zu machen. 

## Beispiel
*   Default
*   Personalisierte Vorschläge

### Default
{{ principleImage({
  url: '/assets/images/patternlibrary/components/suggestions-default',
  alt: 'Beispiel für Quellen',
  title: 'Pattern Quellen'
}) }}

### Personalisierte Vorschläge
{{ principleImage({
  url: '/assets/images/patternlibrary/components/suggestions-personalisiert',
  alt: 'Beispiel für Quellen',
  title: 'Pattern Quellen'
}) }}


## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ASKJJ0RgQNp0TAhXBpLmXd/AI-Patterns-Documentation?node-id=2207-6'
}) }}