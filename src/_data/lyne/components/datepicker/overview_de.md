## Was macht die Komponente?
Der Datepicker ergänzt ein [Date-Input](/de/design-system/lyne/components/date-input/) um eine Kalender-Ansicht. Nutzende wählen darin ein Datum aus, statt es einzutippen.

## Wann soll die Komponente eingesetzt werden?
* Wenn Nutzende ein Datum im Kalender auswählen, zum Beispiel ein Reisedatum nahe am heutigen Tag.
* Wenn der Wochentag oder der Überblick über den Monat bei der Auswahl hilft.
* Für eine reine Texteingabe ohne Kalender dient der Date-Input.

## Regeln.
* Der Datepicker steht immer zusammen mit einem Date-Input in einem [Form-Field](/de/design-system/lyne/components/form-field/). Ein Toggle öffnet den Kalender.
* Für schnelles Blättern können Buttons für den vorherigen und nächsten Tag ergänzt werden. Sie sind am frühesten und spätesten Datum automatisch deaktiviert.
* Wo sinnvoll, ist ein Standardwert gesetzt, z.B. das heutige Datum.
* Ist nur ein bestimmter Zeitraum zulässig, werden im Date-Input frühestes und spätestes Datum festgelegt. Der Kalender übernimmt sie.
* Die Zwei-Monats-Ansicht eignet sich für grössere Zeiträume, zum Beispiel bei Reisen über den Monatswechsel.
