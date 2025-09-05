{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Was macht das Pattern?
* Gibt an, wie sicher sich das System bei seiner Antwort ist.  

## Wann soll das Pattern eingesetzt werden?
* In “risikoreicheren” Kontexten, wenn es z.B. um Gesetze, Tarife, Finanzen geht.
* Wenn basierend auf dem Output eine Entscheidung getroffen werden soll. 

## Empfehlung
* Verwende eine Form, die gut verstanden wird: Dies kann mittels Prozentzahl, einer Progressbar oder verbal (“Wahrscheinlich”, “ungewiss”) sein.

## Beispiel
*   Default
*   Default mit Sicherheitsanzeige

### Default
{{ principleImage({
  url: '/assets/images/patternlibrary/components/reliability',
  alt: 'Beispiel für die Abbildung von Zuverlässigkeit',
  title: 'Pattern Zuverlässigkeit'
}) }}

### Default mit Sicherheitsanzeige
{{ principleImage({
  url: '/assets/images/patternlibrary/components/reliability2',
  alt: 'Beispiel für die Abbildung von Zuverlässigkeit mit Sicherheitsanzeige',
  title: 'Pattern Zuverlässigkeit Sicherheitsanzeige'
}) }}


## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ASKJJ0RgQNp0TAhXBpLmXd/AI-Patterns-Documentation?node-id=2202-21255'
}) }}