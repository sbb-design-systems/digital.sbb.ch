{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Was macht das Pattern?
* Unterstützt die Nutzer:innen bei der Eingrenzung. 

## Wann soll das Pattern eingesetzt werden?
* Wenn die Nutzenden ihren Input (z.B. zu primären Quellen) oder Output (z.B. Format) einschränken wollen. 

## Empfehlung
* Nahe verwandt mit Parameter. Prüfen, welches sinnvoller ist.
* Verwende Filter, die relevant sind. 
* Überlege, welche Reihenfolge sinnvoll ist, z.B. was am häufigsten gefiltert wird, soll an erster Stelle stehen. 


## Beispiel
{{ principleImage({
  url: '/assets/images/patternlibrary/components/filter',
  alt: 'Beispiel für Filter',
  title: 'Pattern filter'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ASKJJ0RgQNp0TAhXBpLmXd/AI-Patterns-Documentation?node-id=2235-16712'
}) }}