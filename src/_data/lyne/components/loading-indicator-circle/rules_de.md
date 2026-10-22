## Regeln.
* Verwende den Indicator nur für Aktionen ab ca. 1 Sekunde. Kürzere Prozesse wirken durch das Aufblitzen verwirrend.
* Zeige ihn in der Regel erst nach 1 Sekunde an. Ist vorab bekannt, dass es länger dauert, darf er sofort erscheinen.
* Eine Mindestanzeigedauer von ca. 500 ms kann sinnvoll sein, ist aber kein Muss.
* Er verändert das Layout nicht. Reserviere den Platz dafür.
* Biete bei langen Wartezeiten (ab ca. 10 Sekunden) eine Fortschrittsanzeige an.
* Soll der Indicator von Screenreadern angesagt werden, wird er in einem Container mit `aria-live` platziert und erhält ein `aria-label`.
