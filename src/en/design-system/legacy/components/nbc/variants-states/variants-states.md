---
tags: nbc-legacy_en
title: States and variants
key: nbc-legacy-variants-states_en
parent: nbc-legacy_en
icon: variantsstates
order: 2
permalink: false  
---

## States
The Next Best Click container does not have any cross-viewport states as they behave differently. The individual variants also have different forms.{.lead}

## Variants
### Action
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/nbc_action',
  alt: 'Image of the Next Best Click container image to trigger actions',
  title: 'Next Best Click container image to trigger actions'
}) }}

### Contact
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/nbc_contact',
  alt: 'Image of the Next Best Click container component as information on the contact options',
  title: 'Next Best Click container component as information on the contact options'
}) }}

### Link
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/nbc_link',
  alt: 'Image of the Next Best Click container component as a link list to other topics',
  title: 'Next Best Click container component as a link list to other topics'
}) }}

### Download
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/nbc_download',
  alt: 'Image of the Next Best Click container component with several download files',
  title: 'Next Best Click container component with several download files'
}) }}

### Chat
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/nbc_chat',
  alt: 'Image of the Next Best Click container component to start the live chat',
  title: 'Next Best Click container component to start the live chat'
}) }}

## Behaviour
### Desktop (and higher resolutions)
* All Next-Best-Click options are arranged on the content pages in the margin column (right column).{.lead}
* When scrolling all boxes in the right column are sticky. The individual boxes are successively minimised as soon as they reach the upper edge of the viewport (below the sticky header) and below with already minimised boxes.{.lead}
* In the minimised status, all boxes are always accessible for the user.{.lead}
* The user can then open a box (and also close it again).{.lead}
* Only one box can be opened at the same time in the scrolled status.{.lead}
* The NBC box remains sticky until the user reaches the end of the content area. If the user continues to scroll down, the boxes with the content scroll away upwards.{.lead}
* If the user then scrolls upwards again, the NBC box also reappears and is sticky again.{.lead}

<!-- end of the list -->
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/nbc_behaviour_ensktop_default',
  alt: 'Image of the behaviour of a Next Best Click container on desktops and with higher resolutions',
  title: 'Next Best Click container on desktops and with higher resolutions'
}) }}

#### Special case: NBC box within an accordion
* A NBC box is never minimised when used within an <sbb-link variant="inline" href="/{{page.lang}}/design-system/legacy/components/accordion">Accordion</sbb-link>.
* Only one NBC box can be inserted into an accordion.
* When scrolling, the NBC box remains sticky on the top edge to the end of the content area of the accordion, after which the box continues to be scrolled with the content.

<!-- end of the list -->
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/nbc_behaviour_ensktop_accordion',
  alt: 'Image of the behaviour of a Next Best Click within an accordion',
  title: 'Next Best Click within an accordion'
}) }}

### Tablet
* All Next-Best-Click options are always available via the sticky element on the bottom right.{.lead}
* When clicked, a layer with all NBC modules alongside one another opens in the open status (two-column display){.lead}
* The icon in the sticky element then changes into the close button (toggle button).{.lead}
* In the tablet variant, the NBC boxes at the end of the content area are displayed as redundant (open).{.lead}
* If the user scrolls into the relevant area (and beyond) the element for opening the NBC layer is hidden.{.lead}
* If the user scrolls up again, the sticky element also reappears.{.lead}

<!-- end of the list -->
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/nbc_behaviour_tablet',
  alt: 'Image of the behaviour of a Next Best Click container on tablets',
  title: 'Next Best Click container on tablets'
}) }}


### Mobile
* All Next-Best-Click options are always accessible via the sticky element in the bottom right.{.lead}
* When clicked, a layer with all NBC modules opens in closed status.{.lead}
* Only one module can be opened at a time.{.lead}
* The icon in the sticky element turns into the close icon (toggle button).{.lead}
* In the mobile variant, the NBC boxes at the end of the content area are displayed as redundant (open).{.lead}
* If the user scrolls into the relevant area (and beyond) the element for opening the NBC layer is hidden.{.lead}
* If the user scrolls up again, the sticky element also reappears.{.lead}

<!-- end of the list -->
{{ imageOnGreyBackground({
  url: '/assets/images/legacy/nbc_behaviour_mobile',
  alt: 'Image of the behaviour of a Next Best Click container on mobiles',
  title: 'Next Best Click container on mobiles'
}) }}

## Specification
{{ specificationLinks({
  figma: 'https://www.figma.com/file/BQzBsQBWB0TAIbpWMhss7P/Web-(Legacy)?node-id=201%3A133980&t=8HES1IZKZfP9aXCY-1'
}) }}