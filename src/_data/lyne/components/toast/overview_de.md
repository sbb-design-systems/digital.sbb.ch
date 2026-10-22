## Was macht die Komponente?
Ein Toast ist eine kurze Benachrichtigung am Bildschirmrand. Er informiert über Ereignisse oder das Ergebnis einer Aktion, ohne den Ablauf zu unterbrechen.

## Wann soll die Komponente eingesetzt werden?
* Um den erfolgreichen Abschluss einer Aktion zu bestätigen.
* Für temporäre Hinweise, die keine zwingende Interaktion erfordern.

## Regeln.
* Der Text ist kurz und prägnant.
* Es kann nur ein Toast gleichzeitig angezeigt werden. Ein neuer Toast ersetzt den vorherigen.
* Wichtige Informationen, z.B. Fehler, gehören nicht nur in einen Toast, da dieser verschwinden kann und für Screenreader-Nutzende belastend ist.
* Aktionen im Toast sind schwer erreichbar. Biete die Aktion zusätzlich an anderer Stelle an.
* Bei Toasts mit Aktion keinen Timeout setzen. Sonst Timeout sinnvoll wählen oder manuelles Schliessen erlauben.
* Toasts erscheinen innerhalb einer Applikation immer an derselben Position.
