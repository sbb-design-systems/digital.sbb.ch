## Was macht die Komponente?
Eine Breadcrumb-Group ist eine Navigationshilfe. Sie zeigt den Nutzenden, wo sie sich in der Hierarchie einer Website befinden, und ermöglicht den Sprung zu übergeordneten Seiten.

## Wann soll die Komponente eingesetzt werden?
* Um den aktuellen Standort innerhalb der Website-Struktur zu verdeutlichen.
* Um die Navigation auf Seiten mit tiefen Hierarchien zu erleichtern.

## Regeln.
* Die Breadcrumb-Group beginnt immer bei der Startseite und zeigt den vollständigen Pfad bis zur aktuellen Seite.
* Die Ebenen sind klar und verständlich beschriftet.
* Sie zeigt nicht mehr als 5–7 Ebenen. Bei zu wenig Platz werden nur die erste und die letzte Ebene angezeigt, dazwischen steht «…». Ein Klick darauf zeigt wieder alle Ebenen.
* Die erste Ebene (Startseite) wird nur mit einem Icon dargestellt.
* Die Breadcrumb-Group braucht ein `aria-label`, das ihren Kontext beschreibt. Die aktuelle Seite wird automatisch für Screenreader markiert.
