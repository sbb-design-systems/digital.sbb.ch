---
tags: dialog-lean_de
title: Übersicht
key: dialog-lean-overview_de
parent: dialog-lean_de
icon: overview
order: 1
permalink: false  
---

## Was macht die Komponente?
* Erwirkt für spezifische Entscheidungen eine Handlung der Benutzer*innen. {.lead}


## Wann soll die Komponente eingesetzt werden? 
* Zur Anzeige von kritischen Informationen, welche die Benutzer*innen bestätigen müssen. {.lead}
* Zur Nachfrage von Aktionen, welche die Benutzer*innen bestätigen müssen. {.lead}
* Zur Auswahl von Entscheidoptionen durch die Benutzer*innen. {.lead}


## Regeln
### Verhalten
* Dialoge werden als Modal-Fenster vor die Anwendung angezeigt. {.lead}
* Dialoge deaktivieren alle Anwendungsfunktionen und bleiben solange eingeblendet bis sie bestätigt wurden, abgebrochen wird oder eine notwendige Handlung ausgeführt wurde. {.lead}
* Dialoge sind absichtlich unterbrechend, daher sollten sie sparsam eingesetzt werden. {.lead}
* Der Dialog kann über verschiedene Wege geschlossen und damit die Aktion abgebrochen werden: {.lead}
    * über das 'X' rechts im Header des Dialogs {.lead}
    * über einen Klick auf das «Glass» im Hintergrund {.lead}
    * über einen "Abbrechen"-Button (falls vorhanden) {.lead}
    * 'ESC'-Taste der Tastatur {.lead}

### Layout
* Der Dialog hat einen eigenen Header, einen Inhaltsbereich und eine Buttonleiste. {.lead}
* Es sollte verhindert werden, dass gescrollt werden muss. Lässt es sich nicht verhindern, so sind Header und Buttonleiste sticky. {.lead}
* Die primäre Aktion wird links von der sekundären Aktion platziert. {.lead}
* Hinter dem Dialog wird ein «Glass» eingeblendet und damit das Editieren ausserhalb des Dialogs blockiert. {.lead}

### Inhalt
* Im Header dürfen kontextbeschreibende Informationen stehen (beispielsweise die Zugnummer). {.lead}
* Der Inhalt des Dialogs ist komplett flexibel nutzbar, z.B. {.lead}
    * eine detaillierte Beschreibung der Situation und die klare Frage, welche die Benutzer*innen beantworten müssen. {.lead}
    * ein Formular, um ein komplexes Datenobjekt zu erstellen oder zu bearbeiten. {.lead}

### Aktionen
* Bestätigungsaktionen sind so lange disabled bis eine Auswahl getroffen wurde, oder das Formular valid ist (alle Pflichtfelder ausgefüllt und keine falschen Eingaben). {.lead}
* Abbruch-Aktionen werden nie disabled. {.lead}


