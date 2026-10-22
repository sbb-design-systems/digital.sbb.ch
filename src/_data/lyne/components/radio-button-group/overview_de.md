
## Was macht die Komponente?
Die Radio-Button-Group fasst [Radiobuttons](/de/design-system/lyne/components/radio-button/) (auch [Radio-Button-Panels](/de/design-system/lyne/components/radio-button-panel/) oder [Selection-Expansion-Panels](/de/design-system/lyne/components/selection-expansion-panel/)) zu einer Gruppe zusammen. Es kann nur ein Eintrag gleichzeitig ausgewählt sein. Sie legt Anordnung, Name und Zustände (z.B. Pflichtfeld, deaktiviert) für alle Einträge fest.

## Wann soll die Komponente eingesetzt werden?
* Immer, wenn Radiobuttons verwendet werden.
* Für mehrere Auswahlen gleichzeitig ist stattdessen die [Checkbox-Group](/de/design-system/lyne/components/checkbox-group/) zu verwenden.

## Regeln.
* Eine Radio-Button-Group fasst nur Radiobuttons zusammen, die zur selben Frage gehören. Die Gruppe braucht eine verständliche Beschriftung, auch für Screenreader (`aria-label`).
* Die Radiobuttons stehen bei vielen oder langen Optionen untereinander (`orientation="vertical"`). Nebeneinander nur bei wenigen, kurzen Optionen. Mit `horizontalFrom` lässt sich festlegen, ab welcher Breite sie nebeneinander stehen.
* Alle Radiobuttons einer Gruppe haben dieselbe Grösse.
* Ist eine Auswahl erforderlich, wird bei fehlender Auswahl eine Fehlermeldung zur ganzen Gruppe angezeigt.
