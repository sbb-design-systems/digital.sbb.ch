---
tags: tag-legacy_en
title: States and variants
key: tag-legacy-variants-states_en
parent: tag-legacy_en
icon: variantsstates
order: 2
permalink: false  
---

## States
The component has the following states:{.lead}
* Active (Default)
* Inactive
* Hover active
* Hover inactive

## Variants
### Filter tag
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/tag_filtertag',
  alt: 'Image of the filter tag used as filter',
  title: 'filter tag used as filter'
}) }}
* The status of the tags in the filter is active or inactive.{.lead}
* When a tag is clicked, the status concerned toggles to the other status and influences the filter result.{.lead}
* A tag ‘all’ is always inserted within the filter. If this filter tag is clicked, it changes to the active status and all other tags in the filter are set to the inactive status.{.lead}

Example:
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/tag_filtertag_example',
  alt: 'Image of an example for filter tag',
  title: 'Example for filter tag'
}) }}

### Link tag
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/tag_linktag',
  alt: 'Image of the filter tag used as link',
  title: 'Filter tag used as link'
}) }}
* Link tags only have the active status.{.lead}
* Clicking on the tag takes the user to the relevant category page.{.lead}

Beispiel:
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/tag_linktag_example',
  alt: 'Image of an example for link tag',
  title: 'Example for link tag'
}) }}

## Specification
{{ specificationLinks({
  figma: 'https://www.figma.com/file/BQzBsQBWB0TAIbpWMhss7P/Web-(Legacy)?node-id=13%3A8057&t=8HES1IZKZfP9aXCY-1',
  github: 'https://angular.app.sbb.ch/angular/components/tag?variant=standard'
}) }}
