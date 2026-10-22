
## Was macht die Komponente?
Die Checkbox-Group fasst [Checkboxen](/de/design-system/lyne/components/checkbox/) (auch [Checkbox-Panels](/de/design-system/lyne/components/checkbox-panel/) oder [Selection-Expansion-Panels](/de/design-system/lyne/components/selection-expansion-panel/)) zu einer Gruppe zusammen. Es können mehrere Einträge gleichzeitig ausgewählt sein. Sie legt Anordnung, Name und Zustände (z.B. Pflichtfeld, deaktiviert) für alle Einträge fest.

## Wann soll die Komponente eingesetzt werden?
* Immer, wenn Checkboxen verwendet werden, die zusammengehören.
* Für eine Einzelauswahl ist stattdessen die [Radio-Button-Group](/de/design-system/lyne/components/radio-button-group/) zu verwenden.

## Regeln.
* Eine Checkbox-Group fasst nur Checkboxen zusammen, die zur selben Frage gehören. Die Gruppe braucht eine verständliche Beschriftung, auch für Screenreader (`aria-label`).
* Die Checkboxen stehen bei vielen oder langen Optionen untereinander (`orientation="vertical"`). Nebeneinander nur bei wenigen, kurzen Optionen. Mit `horizontalFrom` lässt sich festlegen, ab welcher Breite sie nebeneinander stehen.
* Alle Checkboxen einer Gruppe haben dieselbe Grösse.
* Ist eine Auswahl erforderlich, wird bei fehlender Auswahl eine Fehlermeldung zur ganzen Gruppe angezeigt.
