
## Was macht die Komponente?
Der Loading-Indicator zeigt, dass im Hintergrund eine Aktion läuft und Nutzende warten müssen. Er ist für den Einsatz als Overlay gedacht und in Rot, Smoke und Weiss verfügbar.

## Wann soll die Komponente eingesetzt werden?
* Um zu zeigen, dass eine Aktion oder ein Prozess läuft und die Anwendung reagiert.
* Wenn ein ganzer Bereich oder die ganze Seite während des Ladens überlagert wird. Für den Einsatz im Inhalt eignet sich der [Loading-Indicator-Circle](/de/design-system/lyne/components/loading-indicator-circle/).

## Regeln.
* Verwende den Indicator nur für Aktionen ab ca. 1 Sekunde. Kürzere Prozesse wirken durch das Aufblitzen verwirrend.
* Zeige ihn in der Regel erst nach 1 Sekunde an. Ist vorab bekannt, dass es länger dauert, darf er sofort erscheinen.
* Eine Mindestanzeigedauer von ca. 500 ms kann sinnvoll sein, ist aber kein Muss.
* Biete bei langen Wartezeiten (ab ca. 10 Sekunden) eine Fortschrittsanzeige an.
* Soll der Indicator von Screenreadern angesagt werden, wird er in einem Container mit `aria-live` platziert und erhält ein `aria-label`.
