---
tags: journey-header-lyne_de
title: Anatomie
key: journey-header-lyne-anatomy_de
parent: journey-header-lyne_de
icon: specification
order: 2
permalink: false
---

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_journey_header',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Text|Start|Nein|Kann via Property gesetzt werden: `origin="Station"`|
|2|Komponente|`sbb-icon`|Nein|Kann via Property gesteuert werden: `round-trip`|
|1|Text|Ziel|Nein|Kann via Property gesetzt werden: `destination="Station"`|


{.sbb-table}

</sbb-table-wrapper>