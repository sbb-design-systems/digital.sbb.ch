## Regeln.
* Bei kleinen Datensätzen ist stattdessen ein [Select](/de/design-system/lyne/components/select/) zu verwenden.
* Die Liste zeigt nicht zu viele Vorschläge auf einmal (max. 10).
* Nutzende können die Vorschläge ignorieren und eigene Eingaben machen.
* Aktions-Buttons gehören zusammen mit der Option in eine Autocomplete-Row. Pro Option sind ein oder mehrere Buttons möglich, nicht alle Optionen brauchen einen.
* Die Buttons sind nicht per Tab erreichbar, sondern nur mit den Pfeiltasten (rechts/links). Auf ihre Existenz wird mit einer `aria-description` an der Option hingewiesen.
* In Optionen selbst dürfen keine anderen interaktiven Elemente wie Buttons oder Checkboxen stehen.
