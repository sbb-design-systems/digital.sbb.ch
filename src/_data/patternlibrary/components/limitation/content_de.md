{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Was macht das Pattern?
* Kommuniziert, wenn die AI keine Antwort geben kann.  

## Wann soll das Pattern eingesetzt werden?
* Wenn keine passenden Daten vorhanden sind, sodass es keinen Output gibt


## Empfehlung
* Kommuniziere für jeden Fall passend z.B. “Wir haben keine entsprechenden Daten ...” oder “Es scheint als ...”
* Biete einen Weg an, um wieder auf den rechten Pfad zu kommen “... Versuche es mit einer anderen Fragestellung”.

## Beispiel
*   Default

### Default
{{ principleImage({
  url: '/assets/images/patternlibrary/components/limitation',
  alt: 'Beispiel für die Limitierung',
  title: 'Pattern Limitierung'
}) }}



## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ASKJJ0RgQNp0TAhXBpLmXd/AI-Patterns-Documentation?node-id=2202-21263'
}) }}