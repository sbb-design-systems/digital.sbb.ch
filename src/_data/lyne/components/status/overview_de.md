
## Was macht die Komponente?
Ein Status zeigt den aktuellen Zustand eines Objekts, Prozesses oder Systems an. Er besteht aus Icon, optionalem Titel und kurzem Text. Die Farbe richtet sich nach dem Typ: Info, Success, Warning, Error, Pending, Incomplete, Not started oder In progress.

## Wann soll die Komponente eingesetzt werden?
* Um Nutzende über den aktuellen Zustand eines Prozesses, Systems oder Objekts zu informieren.

## Regeln.
* Verwende pro Zustand in der ganzen Anwendung immer denselben Typ.
* Halte den Text kurz.
* Für Screenreader: Der Text soll nur Inline-Inhalt enthalten. Bei dynamischen Änderungen kann `role="status"` gesetzt werden.