
## Was macht die Komponente?
Die Skiplink-List bündelt Skip-Links. Mit ihnen springen Tastatur- und Screenreader-Nutzende direkt zu wichtigen Bereichen einer Seite. Ein Skip-Link ist erst sichtbar, wenn er per Tastatur (z.B. Tab) fokussiert wird. Bei mehreren Links ist nur der fokussierte sichtbar.

## Wann soll die Komponente eingesetzt werden?
* Auf jeder Seite mit wiederkehrender Navigation oder Kopfbereich, damit Nutzende diese überspringen können.
* Um direkt zu Hauptinhalt, Menü oder anderen wichtigen Bereichen zu springen.

## Regeln.
* Platziere die Skiplink-List als erstes interaktives Element im DOM, damit sie sofort per Tastatur erreichbar ist.
* Beschrifte jeden Skip-Link kurz und eindeutig nach seinem Ziel.
* Jeder Skip-Link führt direkt zum Zielbereich.
* Ein optionaler Titel ist visuell versteckt, wird aber von Screenreadern vorgelesen.