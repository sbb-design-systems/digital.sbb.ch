## Was macht die Komponente?
Tabs gliedern Inhalte in einzelne Ansichten, von denen jeweils nur eine sichtbar ist. Es gibt zwei Varianten:
* Tab-Group: wechselt zwischen Inhalten innerhalb derselben Seite, ohne die Seite neu zu laden.
* Tab-Nav-Bar: wechselt per Link zwischen verschiedenen Seiten (Routen).

## Wann soll die Komponente eingesetzt werden?
* Um zusammengehörige Inhalte thematisch zu gruppieren und Platz zu sparen, indem nur ein Teil gleichzeitig angezeigt wird (Tab-Group).
* Um zwischen gleichrangigen Seiten eines Bereichs zu navigieren (Tab-Nav-Bar).

## Regeln.
* Beschrifte Tabs kurz und eindeutig. Wähle eine logische Reihenfolge.
* Vermeide zu viele Tabs. Sie müssen nebeneinander Platz haben.
* Ein Tab kann ein Icon und eine Anzahl (Amount) zeigen.
* Setze deaktivierte Tabs sparsam ein. Sie sind nicht fokussierbar und für Screenreader teilweise unsichtbar.
* Tab-Group: Inhalt in ein semantisches Element (z.B. `section`, `article`) einpacken.
* Tab-Nav-Bar: Der aktive Tab wird mit `aria-current="page"` markiert.
