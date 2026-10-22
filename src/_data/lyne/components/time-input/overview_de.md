
## Was macht die Komponente?
Ein Time-Input ist ein Eingabefeld für eine Uhrzeit. Die Eingabe wird automatisch als HH:mm formatiert.

## Wann soll die Komponente eingesetzt werden?
* Wenn Nutzende eine genaue Uhrzeit eingeben sollen, z.B. für Abfahrtszeiten oder Termine.

## Regeln.
* Der Time-Input wird im [Form-Field](/de/design-system/lyne/components/form-field/) verwendet.
* Eingaben wie `1`, `123` oder `12.30` werden automatisch zu `01:00`, `01:23` bzw. `12:30` formatiert. Zulässige Trennzeichen sind `.`, `:`, `,` und `-`.
* Ungültige Zeiten (z.B. 25:30) werden nicht formatiert. Die Anwendung prüft und meldet solche Eingaben.