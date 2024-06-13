---
tags: footer-lyne_de
title: Anatomie
key: footer-lyne-anatomy_de
parent: footer-lyne_de
icon: specification
order: 2
permalink: false
---

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_footer',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}


|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Slot|Die Inhalte werden Block für Block dargestellt (per css-grid)|Ja|Nur bei Variante `variant='clock-columns'`|
|2|Komponente|`sbb-divider`|Ja||
|3|Slot|Beliebiger Inhalt|Ja|Üblicherweise wird eine `sbb-link-list` verwendet.|

