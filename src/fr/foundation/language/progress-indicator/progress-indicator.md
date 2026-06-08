---
layout: page.njk
tags: level3
key: progress_indicator_fr
title: Indicateur de progression
alternativetitle: Indicateur de progression.
parent: language_fr
order: 5
---

Les indicateurs de progression montrent aux utilisateurs où ils se trouvent dans un processus en plusieurs étapes.

L'objectif est de guider clairement les utilisateurs, de définir des attentes et de rendre le processus transparent afin qu'ils puissent le parcourir en toute confiance.

Recommandations:

* **Nommer les étapes par des noms.** Nommer les étapes. Utilise des noms pour désigner les étapes plutôt que des formulations axées sur l’action. Exemple: «abonnement» au lieu de «sélectionner un abonnement».

* **Signaler clairement la clôture.** Lors de la dernière étape, indiquer clairement dans le libellé de l’action que le processus est terminé.

* **Modifications possibles.** Indique quand les saisies ou les paramètres peuvent encore être modifiés ultérieurement.

Exemples:


{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/fr/stepper_light',
  urldark: '/assets/images/ux-writing/fr/stepper_dark',
  alt: 'Exemple pour indicateur de progression',
  title: 'Progress Indicator'
}) }}

#### Labels:

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Lieu</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Image</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Choisir un lieu</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Télécharger des images</div>
    </div>    
</div>


#### Contenu:

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Tu peux compléter ou modifier les informations ultérieurement.</div>
    </div>
    <!--<div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>XX</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>XX</div>
    </div>-->
</div>

