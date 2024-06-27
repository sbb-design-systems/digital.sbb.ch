---
tags: footer-lyne_en
title: Anatomy
key: footer-lyne-anatomy_en
parent: footer-lyne_en
icon: specification
order: 2
permalink: false
---

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_footer',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}


<sbb-table-wrapper>

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1|Slot|Die Inhalte werden Block für Block dargestellt (per css-grid)|Yes|Nur bei Variante `variant='clock-columns'`|
|2|Component|`sbb-divider`|Yes||
|3|Slot|Beliebiger Inhalt|Yes|Üblicherweise wird eine `sbb-link-list` verwendet.|


{.sbb-table}

</sbb-table-wrapper>

