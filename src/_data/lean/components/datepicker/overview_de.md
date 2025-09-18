## Was macht die Komponente?
* Dient zur Eingabe eines Datums. {.lead}


## Wann soll die Komponente eingesetzt werden?
* Immer wenn von den Benutzer*innen ein Datumswert verlangt wird. {.lead}


## Regeln
* Datumsangaben sind immer einzeilig. {.lead}
* Die Datumswahl hat immer ein Label. {.lead}
* Für detaillierte Erklärungen kann neben dem Label ein Fragezeichen im Kreis dargestellt werden. Beim Klick auf dieses Fragezeichen öffnet sich ein <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/components/tooltip/">Tooltip</sbb-link>. {.lead}
* Mit Klick ins Datumsfeld kann das Datum von Hand eingetragen werden. {.lead}
    * Bei der manuellen Eingabe werden folgende Eingaben ermöglicht, welche von der Komponente automatisch korrekt formatiert werden (Bsp. 1. Januar 2020): {.lead}
        * '010120' {.lead}
        * '1.1.20' {.lead}
        * '01.01.20' {.lead}
* Bei Klick auf das Kalender-Icon öffnet sich ein Kalender-Layer zur Auswahl des Datums. Mittels Klick ausserhalb des Kalender-Layers wird dieser wieder geschlossen. {.lead}
* Im Kalender-Layer können einzelne Tage oder ganze Datumsbereiche deaktiviert werden. {.lead}
* Die Navigationspfeile im Kalender-Layer (Monat / Jahr) werden nur dargestellt, wenn auch ein vorangehendes/nachfolgende Datum gewählt werden kann. {.lead}
* Wenn der Fokus im Kalender-Layer liegt, kann dieser wie folgt mittels Tastatur bedient werden: {.lead}
    * Pfeiltasten: Wechseln des markierten Tages. {.lead}
    * Leertaste / Enter: Auswahl des markierten Tages. {.lead}
* Das gewählte Datum wird in der Regel im Format "Wochentag, TT.MM.JJJJ" dargestellt (Beispiel "Fr, 04.08.2017"). Die Anzeige des Wochentags ist dabei optional. {.lead}


