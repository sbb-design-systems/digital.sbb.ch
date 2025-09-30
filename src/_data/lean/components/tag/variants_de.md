## Zustände 
Die Komponente hat folgende Zustände: {.lead}
* Active
* Inactive

## Varianten

### Filtertag
{{ imageOnGreyBackground({
  url: '/assets/images/lean/Tag_Filter',
  alt: 'Darstellung eines Tags zur Verwendung als Filter',
  title: 'Tag zur Verwendung als Filter'
}) }}

* Im Filter sind die Tags im aktiven und inaktiven Zustand vorhanden. {.lead}
* Mit Klick auf ein Tag toggelt der jeweilige Zustand in den anderen und beeinflusst so das Filterergebnis. {.lead}
* Innerhalb des Filter wird immer zusätzlich ein Tag «Alle» eingefügt. Wird dieses Filtertag angeklickt, wechselt es in den Zustand aktiv und alle anderen Tags im Filter werden in den Zustand inaktiv gesetzt. {.lead}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A8057&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/tag?variant=lean'
}) }}