---
layout: pattern.njk
tags: 
    - mobile_components_de
key: brand-mobile_de
title: Brand
parent: basics-mobile_de
image: mobile/overview/brand.webp
keywords: logo, brand, signet, pleitegeier
order: 10
---

## Was macht die Komponente?
*   Kennzeichnet den Absender einer Seite. {.lead}

## Wann soll die Komponente eingesetzt werden?
*   Bei allen SBB-Apps. {.lead}

## Regeln
*   Das Signet tritt genau einmal pro Seite auf und befindet sich immer im Header. {.lead}
*   Die Positionierung ist immer rechts oben. {.lead}
*   Abwandlungen des Signets sind nicht erlaubt. {.lead}
*   Das Signet ist immer verlinkt mit der Startseite der App. {.lead}

## Varianten und Zustände
*   Default / Fallback

### Default
{{ imageWithMode({
  url: '/assets/images/mobile/brand-logo-default',
  alt: 'Darstellung des Standard Signets',
  title: 'Standard Signet'
}) }}

### Fallback
{{ imageWithMode({
  url: '/assets/images/mobile/brand-logo-fallback',
  alt: 'Darstellung des Signets, Fallback',
  title: 'Signet, Fallback'
}) }}

## Barrierefreiheit
* Das Signet muss mit einem Alternativtext hinterlegt werden (z.B. "Zurück zu Startseite"). {.lead}

## Spezifikationen
{{ specificationLinks({
  figma: 'https://www.figma.com/file/WOtLIam1xwrqcgnAITsEhV/Design-System-Mobile?node-id=11%3A3793'
}) }}