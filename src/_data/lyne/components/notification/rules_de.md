## Regeln.
* Die Notification steht oben im Hauptinhalt oder nahe beim betroffenen Element. Die Positionierung ist in der ganzen Applikation einheitlich.
* Der Text ist kurz und klar. Ein Titel ist optional.
* Die Notification verschwindet nicht automatisch. Sie bleibt, bis Nutzende sie schliessen oder das Problem gelöst ist.
* Der Schliessen-Button ist optional. Muss die Meldung unbedingt gelesen werden, wird er weggelassen (`readonly`).
* Neu erscheinende Notifications müssen Screenreadern angekündigt werden (`aria-live="polite"` am Container).
