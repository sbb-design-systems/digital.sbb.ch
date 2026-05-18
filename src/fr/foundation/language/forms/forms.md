---
layout: page.njk
tags: level3
key: forms_fr
title: Les formulaires et champs de saisie
parent: language_fr
order: 4
---

Les formulaires et les champs de saisie utilisent des libellés, des indications et des espaces réservés pour montrer aux utilisateurs comment remplir correctement les champs.  

Leur objectif est de clarifier les attentes, d'éviter les erreurs et de rendre la saisie aussi simple et sûre que possible.

## Les libellés

Les libellés (labels) indiquent clairement ce qui doit être saisi. Elles donnent une orientation et réduisent les doutes.

Recommandations:

* **Sois clair·e.** Utilise des libellés précis qui décrivent clairement le but du champ.
* **Explique si nécessaire.** Fournis des explications en cas de besoin. Si tu as besoin d’informations complémentaires pour la compréhension, place-les dans une infobulle (popover).

Exemples:

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/fr/forms_light',
  urldark: '/assets/images/ux-writing/forms_dark',
  alt: 'Exemple pour une formulaire',
  title: 'Forms'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Rue et numéro</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Numéro de maison</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Numéro</div>
    </div>    
</div>

## Espaces réservés

Les espaces réservés (placeholders) donnent des indications et aident à la saisie.

Recommandations:

* **Montre des exemples.** Utilise des espaces réservés pour afficher le format souhaité ou des exemples de valeurs et éviter les erreurs de saisie.
* **Aucun remplacement.** Les espaces réservés ne remplacent pas le libellé, ils servent uniquement d'indication complémentaire.

Exemples:

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/fr/forms2_light',
  urldark: '/assets/images/ux-writing/fr/forms2_dark',
  alt: 'Beispiele für Formularfelder',
  title: 'Forms'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Saisir le terme recherché</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Ville, gare, ...</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Date de naissance (JJ.MM.AAAA)</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Recherche</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Que cherches-tu?</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Numéro</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>E-mail, nom, prénom, numéro de client, adresse, numéro de téléphone…</div>
    </div>    
</div>