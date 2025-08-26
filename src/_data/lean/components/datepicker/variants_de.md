{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

## Zustände 
Die Komponente hat folgende Zustände: {.lead}
* Default
* Placeholder
* Focused
* Disabled
* Error
* Mandatory
* Readonly

## Varianten

### Standard
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Dateinput_Default',
  alt: 'Darstellung des Date Pickers',
  title: 'Date Picker'
}) }}

### Mit Blätterfunktion
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Dateinput_Pageable',
  alt: 'Darstellung des Date Pickers mit Blätterfunktion',
  title: 'Date Picker mit Blätterfunktion'
}) }}

* Die Navigationspfeile werden nur dargestellt, wenn auch ein vorangehendes/nachfolgende Datum gewählt werden kann. {.lead}

### Datumsbereich
* Um einen Datumsbereich zu wählen, werden zwei Datepicker kombiniert. {.lead}
* Wird das Von-Datum mittels Kalender-Layer gewählt und das Bis-Datum ist noch nicht definiert, öffnet sich der Kalender-Layer des Bis-Feldes. Wurde bereits ein Bis-Datum gewählt, öffnet sich der Kalender-Layer nicht. {.lead}
* Wählen die Benutzer*innen ein Von-Datum > Bis-Datum, wird das Bis-Datum gelöscht und dessen Kalender-Layer eingeblendet. {.lead}
* Sind beide Daten gewählt, wird im Kalender der gewählte Bereich farblich hinterlegt. {.lead}

### Geburtsdatum
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Dateinput_Birthdate',
  alt: 'Darstellung des Date Pickers, Datum',
  title: 'Date Picker, Datum'
}) }}

### Kalender-Layer (Datepicker)
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Dateinput_Picker',
  alt: 'Darstellung des Date Pickers, mit Kalenderdarstellung',
  title: 'Date Picker, mit Kalenderdarstellung'
}) }}

Die Tab-Reihenfolge innerhalb des Kalender-Layers ist wie folgt defniert: {.lead}
1. Monat zurück
2. Monat vor
3. Jahr zurück
4. Jahr vor
5. Bereich der einzelnen Tage. Wenn der Fokus im Bereich der Tage liegt, kann mittels Pfeiltasten links, rechts, auf und ab innerhalb der Tage navigiert werden. {.lead}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A7791&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/datepicker?variant=lean'
}) }}