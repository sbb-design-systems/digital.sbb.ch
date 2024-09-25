---
layout: page.njk
tags: level3
key: watch_fr
title: Horloge numérique
parent: brand_fr
order: 3
---

L’horloge numérique des CFF est utilisée dans des applications web ou sur les canaux dynamiques d’information à la clientèle dans le train ou en gare. Elle imite le mouvement et reproduit le design de l’horloge physique des CFF. L’horloge de gare des CFF est protégée par le droit des marques et le droit d’auteur. {.lead}
 
## Utilisation
Elle peut être utilisée exclusivement par les gestionnaires d’infrastructure suisses (GI) et les entreprises de transport concessionnaires (ETC). Il doit être utilisé tel qu'il est spécifié.
L’horloge doit être placée sur un fond monochrome. Il n’est pas autorisé de l’intégrer dans des images ou des graphiques. Sur les fonds clairs, un cadre gris permet une séparation visuelle du cadran. Sur les fonds sombres, la version sans cadre sera préférée. {.lead}

## Que fait le composant?
L’horloge CFF donne l’heure système du dispositif de sortie sous forme analogique. Il faut veiller à ce que l’heure système soit transmise par un serveur d’horloge fiable, dans la mesure où il est possible d’agir sur cet élément. {.lead}

## Quand faut-il utiliser le composant?
- Le composant est utilisé partout où l’heure précise doit être communiquée. Dans la plupart des cas, il s’agit d’appareils fournissant des informations en temps réel sur les transports publics. {.lead}
- L’horloge peut également être utilisée comme élément de style, l’utilité pour la clientèle devant néanmoins être systématiquement garantie. {.lead}

## Règles
- La taille minimale de l’horloge ne peut pas être inférieure à 75 px x 75 px. {.lead}
- Selon le lieu d’utilisation, il faudra adapter la taille minimale (distance d’observation). La règle d’or est la suivante: distance d’observation / 60 = taille de l’horloge (p. ex. 3000 mm / 60 = taille de 50 mm). {.lead}
- Une seule horloge par page/vue doit être utilisée. {.lead}
- La distance de l’horloge par rapport aux éléments les plus proches (marge) doit correspondre au moins à 20% du diamètre de l’horloge. {.lead}

## Caractéristiques et états
Le composant présente les caractéristiques ci-après. 
- Horloge sur fond clair {.lead}
- Horloge sur fond sombre {.lead}

<br>
{{ webpImage({
    url: '/assets/images/brand/sbb-uhr',
    alt: 'SBB Uhr',
    title: 'SBB Uhr'
}) }}

## Contact
<sbb-link variant="inline" type="button" target="_blank" href="mailto:marke@sbb.ch">marke@sbb.ch</sbb-link>

## Télécharger
Les spécifications de l'horloge numérique sont disponibles sur GitHub.

<sbb-secondary-button-link target="_blank" href="https://github.com/sbb-design-systems/brand-elements/tree/main/digital-clock">
<sbb-icon slot="icon" name="github-small"></sbb-icon>
Vers le repository Github
</sbb-secondary-button-link>
