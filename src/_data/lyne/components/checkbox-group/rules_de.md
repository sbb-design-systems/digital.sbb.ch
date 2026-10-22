## Regeln.
* Eine Checkbox-Group fasst nur Checkboxen zusammen, die zur selben Frage gehören. Die Gruppe braucht eine verständliche Beschriftung, auch für Screenreader (`aria-label`).
* Die Checkboxen stehen bei vielen oder langen Optionen untereinander (`orientation="vertical"`). Nebeneinander nur bei wenigen, kurzen Optionen. Mit `horizontalFrom` lässt sich festlegen, ab welcher Breite sie nebeneinander stehen.
* Alle Checkboxen einer Gruppe haben dieselbe Grösse.
* Ist eine Auswahl erforderlich, wird bei fehlender Auswahl eine Fehlermeldung zur ganzen Gruppe angezeigt.
