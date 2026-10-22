## Was macht die Komponente?
Die Tabelle stellt tabellarische Daten dar. Dafür werden die nativen HTML-Tabellen-Elemente mit der CSS-Klasse `sbb-table` gestylt. Der Table-Wrapper umschliesst die Tabelle und ergänzt Funktionen wie Scrollen und Sticky-Header bzw. -Spalten.

## Wann soll die Komponente eingesetzt werden?
* Wenn Daten in Zeilen und Spalten dargestellt werden sollen.
* Immer wenn eine native HTML-Tabelle verwendet wird, damit sie einheitlich gestylt ist.

## Regeln.
* Verwende die nativen Tabellen-Elemente (`table`, `th`, `td`, `caption`), um die Semantik zu erhalten.
* Verwende den Table-Wrapper, wenn die Tabelle scrollen soll oder Header bzw. Spalten fixiert werden.
* Wähle die Variante nach Bedarf: Grösse (xs, s, m), gestreifte Zeilen, Hover, ausgewählte Zeile, negativ.
