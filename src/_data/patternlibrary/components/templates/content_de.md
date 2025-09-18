{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Was macht das Pattern?
* Hilft bei der Eingabe, wenn das Schreiben eines Promptes zu komplex würde. 

## Wann soll das Pattern eingesetzt werden?
* Um komplizierte Prompts in der Eingabe zu vereinfachen. 
* Vom System vordefiniert, wenn die Haupt Use-Cases klar sind.
* Wenn Nutzer:innen selber Templates anlegen wollen.

## Empfehlung
*  Qualität über Quantität: Lieber weniger Parameter, dafür sind diese optimiert. 
*  Kommuniziere klar, was das Template macht, in dem du z.B. den generierten Prompt zeigst. So können Nutzer:innen 
diesen auch noch anpassen.  

## Beispiel
*   Default
*   Default ausgefüllt
*   Default mit Formular

### Default
{{ principleImage({
  url: '/assets/images/patternlibrary/components/templates1',
  alt: 'Beispiel für Template',
  title: 'Pattern Template'
}) }}

### Default ausgefüllt
{{ principleImage({
  url: '/assets/images/patternlibrary/components/templates1-filled',
  alt: 'Beispiel für Template ausgefüllt',
  title: 'Pattern Template ausgefüllt'
}) }}

### Default mit Formular
{{ principleImage({
  url: '/assets/images/patternlibrary/components/templates2',
  alt: 'Beispiel für Template mit Formular',
  title: 'Pattern Template Formular'
}) }}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/design/ASKJJ0RgQNp0TAhXBpLmXd/AI-Patterns-Documentation?node-id=2210-10276'
}) }}