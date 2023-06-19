---
layout: page.njk
tags: page
key: development_en
title: Development
parent: roles_en
order: 5
---

You implement the product.{.lead}

## <sbb-icon name="circle-tick-medium"></sbb-icon> Use semantically correct elements{.with-icon}
Always use semantically correct elements to support assisting technologies as much as possible. Distinguish all types of headlines, lists, tables etc. with the appropriate elements and set the correct language for your document.{.lead}

Help for correct semantics: <sbb-link variant="inline" type="button" target="_blank" href="https://www.accessibility-developer-guide.com/examples ">https://www.accessibility-developer-guide.com/examples</sbb-link>

Reference 1: <sbb-link variant="inline" type="button" target="_blank" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">https://www.w3.org/TR/WCAG21/#info-and-relationships</sbb-link>
Reference 2: <sbb-link variant="inline" type="button" target="_blank" href="https://www.w3.org/TR/WCAG21/#language-of-page">https://www.w3.org/TR/WCAG21/#language-of-page</sbb-link>

## <sbb-icon name="circle-tick-medium"></sbb-icon> Use standard elements{.with-icon}
Both in HTML and in mobile apps, native elements save you a great deal of hassle. The elements are already optimised in terms of accessibility; otherwise their entire behaviour must be recreated. Tell this to your designer too if they are insisting on something.{.lead}

Help for typical non-native elements: <sbb-link variant="inline" type="button" target="_blank" href="https://inclusive-components.design">https://inclusive-components.design</sbb-link>

Reference: <sbb-link variant="inline" type="button" target="_blank" href="https://www.w3.org/TR/WCAG21/#name-role-value">https://www.w3.org/TR/WCAG21/#name-role-value</sbb-link>

## <sbb-icon name="circle-tick-medium"></sbb-icon> Ensure correct linearization{.with-icon}
Make sure that content is not only sensibly arranged visually, but also in the code. Try to make everything understandable if someone navigates from top to bottom through the document without CSS styling.{.lead}

Testing: Switch off the CSS in the browser or use the screen reader on the phone.{.lead}

Reference: <sbb-link variant="inline" type="button" target="_blank" href="https://www.w3.org/TR/WCAG21/#meaningful-sequence">https://www.w3.org/TR/WCAG21/#meaningful-sequence</sbb-link>

## <sbb-icon name="circle-tick-medium"></sbb-icon> Support orientation{.with-icon}
At the start of a page, build in skip links and use different landmark elements. These two tools help users, particularly those with screen readers, to jump directly to the different parts of the content.{.lead}

Help on skip links: <sbb-link variant="inline" type="button" target="_blank" href="https://webaim.org/techniques/skipnav">https://webaim.org/techniques/skipnav</sbb-link>
Overview of landmark elements: <sbb-link variant="inline" type="button" target="_blank" href="https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/">https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/</sbb-link>

Reference: <sbb-link variant="inline" type="button" target="_blank" href="https://www.w3.org/TR/WCAG21/#bypass-blocks">https://www.w3.org/TR/WCAG21/#bypass-blocks</sbb-link>