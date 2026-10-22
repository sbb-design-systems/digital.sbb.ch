## Was macht die Komponente?
Die Komponente schlägt den Nutzenden während der Eingabe passende Optionen vor, basierend auf vorhandenen Daten oder früheren Eingaben. Optionen können gruppiert werden und neben der Option zusätzliche Aktions-Buttons zeigen, zum Beispiel zum Bearbeiten oder Entfernen.

## Wann soll die Komponente eingesetzt werden?
* Um die Eingabe zu erleichtern und zu beschleunigen, indem mögliche Eingaben vorgeschlagen werden.
* Um die Genauigkeit und Konsistenz der eingegebenen Daten zu erhöhen.
* Wenn zu einer Option eine Aktion nötig ist, zum Beispiel einen Eintrag aus dem Verlauf zu entfernen.

## Regeln.
* Bei kleinen Datensätzen ist stattdessen ein [Select](/de/design-system/lyne/components/select/) zu verwenden.
* Die Liste zeigt nicht zu viele Vorschläge auf einmal (max. 10).
* Nutzende können die Vorschläge ignorieren und eigene Eingaben machen.
* Aktions-Buttons gehören zusammen mit der Option in eine Autocomplete-Row. Pro Option sind ein oder mehrere Buttons möglich, nicht alle Optionen brauchen einen.
* Die Buttons sind nicht per Tab erreichbar, sondern nur mit den Pfeiltasten (rechts/links). Auf ihre Existenz wird mit einer `aria-description` an der Option hingewiesen.
* In Optionen selbst dürfen keine anderen interaktiven Elemente wie Buttons oder Checkboxen stehen.
