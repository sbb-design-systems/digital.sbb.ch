{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

### Was macht das Pattern?
* Gibt die Möglichkeit, dass Nutzer:innen explizites Feedback zu einem Output geben.

## Wann soll das Pattern eingesetzt werden?
* Bei GenAI Outputs.
* Wenn man das Feedback in das Model der AI zurück einfliessen lassen will. 


## Empfehlung
*  Ein gängiges Pattern ist Daumen hoch/runter.
*  Kommuniziere (z.B. nachdem Feedback gegeben wurde) was mit dem Feedback gemacht wird. 


## Beispiel
*   Default

### Default
{{ principleImage({
  url: '/assets/images/patternlibrary/components/user-feedback',
  alt: 'Beispiel für User-Feedback',
  title: 'Pattern User-Feedback'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ASKJJ0RgQNp0TAhXBpLmXd/AI-Patterns-Documentation?node-id=2207-614'
}) }}