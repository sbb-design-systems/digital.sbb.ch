
## Was macht die Komponente?
Der Paginator unterteilt grosse Inhaltsmengen, z.B. Tabellen oder Listen, in Seiten. Er zeigt die aktuelle Seite an und bietet Steuerelemente zum Wechseln. Optional können Nutzende die Anzahl Einträge pro Seite ändern. Eine kompakte Variante (Compact-Paginator) zeigt nur die aktuelle Seite und die Gesamtzahl.

## Wann soll die Komponente eingesetzt werden?
* Wenn viele Einträge in Seiten aufgeteilt werden sollen.
* Wenn eine Alternative zu unendlichem Scrollen benötigt wird.

## Regeln.
* Bei wenigen Seiten ist «Mehr laden» meist die bessere Lösung.
* Bei wenig Platz, z.B. auf kleinen Bildschirmen, wird der Compact-Paginator verwendet.
* Der Paginator braucht eine Beschriftung für Screenreader (`aria-label`), die beschreibt, was er steuert.