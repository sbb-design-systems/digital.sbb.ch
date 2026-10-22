## Was macht die Komponente?
Eine Notification informiert Nutzende im Inhalt über den Status einer Aktion oder über andere wichtige Hinweise, ohne ihre Aufgabe zu unterbrechen. Es gibt die Typen Info, Note, Success, Warn und Error.

## Wann soll die Komponente eingesetzt werden?
* Um Nutzende im Ablauf über den Status von Aktionen zu informieren, z.B. Erfolg oder Fehler.
* Um auf erforderliche Handlungen oder Änderungen hinzuweisen.
* Für systemweite, sehr wichtige Meldungen ist stattdessen die Alert-Komponente zu verwenden.

## Regeln.
* Die Notification steht oben im Hauptinhalt oder nahe beim betroffenen Element. Die Positionierung ist in der ganzen Applikation einheitlich.
* Der Text ist kurz und klar. Ein Titel ist optional.
* Die Notification verschwindet nicht automatisch. Sie bleibt, bis Nutzende sie schliessen oder das Problem gelöst ist.
* Der Schliessen-Button ist optional. Muss die Meldung unbedingt gelesen werden, wird er weggelassen (`readonly`).
* Neu erscheinende Notifications müssen Screenreadern angekündigt werden (`aria-live="polite"` am Container).
