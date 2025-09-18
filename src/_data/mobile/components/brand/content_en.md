<<<<<<< HEAD:src/en/design-system/mobile/basics/brand/brand.md
---
layout: component.njk
tags: 
    - mobile_components_en
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
  figma: 'https://www.figma.com/design/ZBotr4yqcEKqqVEJTQfSUa/Design-System-Mobile?m=auto&node-id=33-771&t=rQTLXnChqHrpKLB4-1'
=======
{% from "src/_includes/macros/macros.njk" import imageWithMode, imageOnGreyBackground, principleImage, svgImage, webpImage, buttonGroup, specificationLinks, imageSpec, lynePlayground, lyneExamples, lyneComponentLinks %}

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
  figma: 'https://www.figma.com/design/ZBotr4yqcEKqqVEJTQfSUa/Design-System-Mobile?m=auto&node-id=33-771&t=rQTLXnChqHrpKLB4-1'
>>>>>>> patterns:src/_data/mobile/components/brand/content_en.md
}) }}