{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}


## Varianten

### Plain
Diese Variante hat folgende Zustände: {.lead}
* Default

{{ imageOnGreyBackground({
  url: '/assets/images/lean/Sidebar_Plain',
  alt: 'Darstellung der Sidebar, Plain Variante',
  title: 'Sidebar, Plain Variante'
}) }}

* Die Menüeinträge können in Kategorien / Bereiche gegliedert werden. {.lead}
* Bei den Kategorien kann beim Einsatz der Sidebar zwischen <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/components/accordion/">Accordion</sbb-link> und <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/components/fieldset/">Fieldset</sbb-link> gewählt werden. {.lead}

### Iconleiste
Diese Variante hat folgende Zustände: {.lead}
* Collapsed
* Collapsed Hover
* Expanded
* Expanded Hover

{{ imageOnGreyBackground({
  url: '/assets/images/lean/Sidebar_Icon',
  alt: 'Darstellung der Sidebar, Icon Variante',
  title: 'Sidebar, Icon Variante'
}) }}

* Der Defaultzustand (collapsed, expanded) kann pro Anwendung festgelegt werden. {.lead}
* Bei Bedarf können die Navigationspunkte mittels Trennlinien visuell gruppiert werden. {.lead}
* Per Default soll der erste (der oberste) Navigationspunkt aktiv sein. {.lead}

### Submenu
Diese Variante hat folgende Zustände: {.lead}
* Collapsed
* Expanded

{{ imageOnGreyBackground({
  url: '/assets/images/lean/Sidebar_Submenu',
  alt: 'Darstellung der Sidebar, Submenu Variante',
  title: 'Sidebar, Submenu Variante'
}) }}

* Der Defaultzustand (collapsed, expanded) kann pro Anwendung festgelegt werden. {.lead}
* Die Menüeinträge können in Kategorien / Bereiche gegliedert werden. {.lead}
* Bei den Kategorien kann beim Einsatz der Sidebar zwischen <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/components/accordion/">Accordion</sbb-link> und <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/components/fieldset/">Fieldset</sbb-link> gewählt werden. {.lead}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/nAx0LVMACEr9tefiZRQkxv/Lean?node-id=13%3A7987&t=ZF5MfeXb0Gz2GkUw-1',
  github: 'https://angular.app.sbb.ch/angular/components/sidebar?variant=lean'
}) }}