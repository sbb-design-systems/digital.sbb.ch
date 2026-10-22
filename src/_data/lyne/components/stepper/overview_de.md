
## Was macht die Komponente?
Der Stepper führt Nutzende durch einen mehrstufigen Prozess. Der aktuelle Schritt ist hervorgehoben, eine Linie verbindet die Schritte und zeigt den Fortschritt. Optional können Nutzende zwischen den Schritten navigieren.

## Wann soll die Komponente eingesetzt werden?
* Wenn ein Prozess aus mehreren logischen Schritten besteht, z.B. ein Formular oder ein Buchungsablauf.
* Wenn die Schritte in einer festgelegten Reihenfolge durchlaufen werden müssen.

## Regeln.
* Die Labels der Schritte sollen so kurz und aussagekräftig wie möglich sein.
* Bei vielen Schritten oder wenig Platz wird die vertikale Darstellung verwendet.
* Müssen Schritte nacheinander abgeschlossen werden, wird der lineare Modus verwendet.
* Beschreibe den Zweck des Steppers mit einem `aria-label`.