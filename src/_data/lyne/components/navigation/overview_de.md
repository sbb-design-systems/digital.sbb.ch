
## Was macht die Komponente?
Die Navigation zeigt Navigationslinks als modales Overlay. Sie wird über ein Hamburger-Icon geöffnet. Sie kann eine zweite Ebene (Sections) enthalten.

## Wann soll die Komponente eingesetzt werden?
* Für die Hauptnavigation einer Webseite oder Applikation.
* Wenn die Navigation nicht dauerhaft sichtbar sein soll.

## Regeln.
* Das Hamburger-Icon steht im [Header](/de/design-system/lyne/components/header/) als erstes Element.
* Links sind logisch gruppiert und sinnvoll sortiert.
* Die zweite Ebene wird nur bei Bedarf eingesetzt.
* Die aktuelle Seite wird markiert und für Screenreader mit `aria-current="page"` ausgezeichnet (bei Links `accessibility-current`).
* Beim Öffnen ist die restliche Seite nicht bedienbar und scrollt nicht.
