---
layout: page.njk
tags: page
key: development_fr
title: Development
parent: roles_fr
order: 5
---

Tu programmes le produit.

## <sbb-icon name="circle-tick-medium"></sbb-icon> Utilise des éléments sémantiquement corrects{.with-icon}
Utilise toujours des éléments sémantiquement corrects afin d’assurer une prise en charge optimale par les technologies d’assistance. Pour ce faire, définis les différents niveaux de titre, les listes, les tableaux, etc. à l’aide des éléments correspondants et spécifie la langue du document.

Aide pour une sémantique correcte: <sbb-link variant="inline" type="button" target="_blank" href="https://www.accessibility-developer-guide.com/examples ">https://www.accessibility-developer-guide.com/examples</sbb-link>

Référence 1: <sbb-link variant="inline" type="button" target="_blank" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">https://www.w3.org/TR/WCAG21/#info-and-relationships</sbb-link>
Référence 2: <sbb-link variant="inline" type="button" target="_blank" href="https://www.w3.org/TR/WCAG21/#language-of-page">https://www.w3.org/TR/WCAG21/#language-of-page</sbb-link>

## <sbb-icon name="circle-tick-medium"></sbb-icon> Utilise des éléments standard{.with-icon}
L’usage d’éléments natifs t’épargnera de nombreux désagréments aussi bien dans les documents HTML que dans les applications mobiles. Ces éléments sont déjà optimisés pour l’accessibilité. Si tu utilises d’autres éléments, ces derniers devront reproduire point par point le comportement natif. Préviens ton développeur s’il envisage d’en conserver certains.  

Aide pour les éléments non natifs types: <sbb-link variant="inline" type="button" target="_blank" href="https://inclusive-components.design">https://inclusive-components.design</sbb-link>

Référence: <sbb-link variant="inline" type="button" target="_blank" href="https://www.w3.org/TR/WCAG21/#name-role-value">https://www.w3.org/TR/WCAG21/#name-role-value</sbb-link>

## <sbb-icon name="circle-tick-medium"></sbb-icon> Linéarise correctement les contenus{.with-icon}
Veille à ce que tous les contenus d’une page suivent un ordre logique, aussi bien visuellement qu’au niveau du code. Fais en sorte que tout reste compréhensible y compris lorsque l’utilisateur parcourt le document de haut en bas sans activer le CSS.   

Comment tester: désactive le CSS dans ton navigateur ou utilise le lecteur d’écran de ton téléphone mobile.  

Référence: <sbb-link variant="inline" type="button" target="_blank" href="https://www.w3.org/TR/WCAG21/#meaningful-sequence">https://www.w3.org/TR/WCAG21/#meaningful-sequence</sbb-link>

## <sbb-icon name="circle-tick-medium"></sbb-icon> Facilite la navigation{.with-icon}
Ajoute des liens d’évitement (skiplinks) en début de page et utilise différentes balises (landmark). Ces deux techniques permettent notamment aux utilisateurs de lecteur d’écran d’atteindre facilement les différentes sections du contenu.  

Aide pour les liens d’évitement (skiplinks): <sbb-link variant="inline" type="button" target="_blank" href="https://webaim.org/techniques/skipnav">https://webaim.org/techniques/skipnav</sbb-link>
Aperçu des balises (landmark): <sbb-link variant="inline" type="button" target="_blank" href="https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/">https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/</sbb-link>

Référence: <sbb-link variant="inline" type="button" target="_blank" href="https://www.w3.org/TR/WCAG21/#bypass-blocks">https://www.w3.org/TR/WCAG21/#bypass-blocks</sbb-link>