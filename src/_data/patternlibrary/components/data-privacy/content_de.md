{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Was macht das Pattern?
* Kommuniziert, was mit den Daten der Nutzer:innen passiert und lässt die Nutzer:innen entscheiden, ob ihre Daten verwendet werden sollen.

## Wann soll das Pattern eingesetzt werden?
* Wenn du planst, die Daten deiner Nutzer:innen zu verwenden.
* 

## Empfehlung
* Eine Entscheidung soll auch später noch geändert werden z.B. in den Einstellungen. 
* Überlege dir wo du Opt-In und wo Opt-Out als Default setzt.


## Beispiel
*   Default

### Default
{{ principleImage({
  url: '/assets/images/patternlibrary/components/data-privacy',
  alt: 'Beispiel für Datenschutz',
  title: 'Pattern data-privacy'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ASKJJ0RgQNp0TAhXBpLmXd/AI-Patterns-Documentation?node-id=2235-16718'
}) }}