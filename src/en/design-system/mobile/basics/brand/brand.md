---
layout: pattern.njk
tags: 
    - mobile_en
    - mobile_basics_en
    - page
key: brand-mobile_en
title: Brand
parent: basics-mobile_en
image: mobile/overview/brand.webp
keywords: logo, brand, signet, pleitegeier
order: 10
---

## What does the component do?
*   It identifies the sender of a page. {.lead}

## When should the component be used?
*   For all SBB apps. {.lead}

## Rules
*   The signet appears exactly once per page and is always located in the header. {.lead}
*   It is always positioned top-right. {.lead}
*   Variations of the signet are not permitted. {.lead}
*   The signet is always linked to the app homepage. {.lead}

## Variants and States
*   Default / Fallback

### Default
{{ imageWithMode({
  url: '/assets/images/mobile/brand-logo-default',
  alt: 'Image of the standard signet',
  title: 'Standard signet'
}) }}

### Fallback
{{ imageWithMode({
  url: '/assets/images/mobile/brand-logo-fallback',
  alt: 'Darstellung des Signets, Fallback',
  title: 'Signet, Fallback'
}) }}

## Accessibility
* The signet must be entered with an alternative text (e.g. ‘Back to homepage’). {.lead}

## Specification
{{ specificationLinks({
  figma: 'https://www.figma.com/file/WOtLIam1xwrqcgnAITsEhV/Design-System-Mobile?node-id=11%3A3793'
}) }}