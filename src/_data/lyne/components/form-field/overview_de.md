
## Was macht die Komponente?
Das Form-Field ist ein Wrapper für Formularelemente wie Input (Text, Date, Time), [Select](/de/design-system/lyne/components/select/), Textarea, [Datepicker](/de/design-system/lyne/components/datepicker/) und [Autocomplete](/de/design-system/lyne/components/autocomplete/). Es sorgt für eine einheitliche Darstellung und stellt Label, Fehlermeldung und Hinweis bereit. Vor und nach dem Eingabefeld kann es ein Icon enthalten, danach einen Button zum Leeren der Eingabe.

## Wann soll die Komponente eingesetzt werden?
* Bei jeder Verwendung eines Inputs, Selects oder einer Textarea.
* Um eine konsistente Gestaltung und Ausrichtung von Formularelementen zu gewährleisten.

## Regeln.
* Formularelemente werden nicht ohne Form-Field eingesetzt. Ist es ausnahmsweise nötig, muss die Anwendung die Darstellung des Form-Fields selbst einhalten (bei nativen Inputs mit der Klasse `sbb-input`).
* Jedes Feld hat ein Label.
* Alle Felder gelten als Pflichtfelder. Optionale Felder werden im Label mit «(optional)» markiert.
* Fehlermeldungen erscheinen unter dem Feld.
* Der Button zum Leeren funktioniert nur bei einfachen Inputs, nicht bei Select.
