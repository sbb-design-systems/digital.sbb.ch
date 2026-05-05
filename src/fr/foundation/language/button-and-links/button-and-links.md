---
layout: page.njk
tags: level3
key: button_and_links_fr
title: Les textes de boutons et de liens
parent: language_fr
order: 2
---


Les textes de boutons et de liens sont des libellés courts et pratiques. 

Leur objectif est de guider les utilisatrices et utilisateurs avec le moins de mots possible, de réduire les incertitudes et de faciliter la prise de décision.

## Les boutons

Les boutons sont des déclencheurs d’actions et ne sont pas des surfaces explicatives. Ils permettent de visualiser en un coup d’œil l’action qui sera effectuée au clic.

Recommandations: 

* **Sois clair·e.** Utilise une instruction ou une invitation à l'action (Acheter maintenant, continuer, envoyer) ou une aide à l'orientation claire (p. ex. «Accéder aux paramètres») pour que l'action soit immédiatement compréhensible.

* **Utilise 1 à 3 mots.** Les boutons sont scannés, pas lus. Les libellés courts aident à reconnaître rapidement les actions et de différencier plus facilement.

* **N'explique pas dans le bouton.** Si des informations supplémentaires sont nécessaires à la compréhension, place-les au-dessus ou en dessous du bouton ou dans une infobulle.

Exemples:

{{ imageOnGreyBackground({
  url: 'assets/images/ux-writing/fr/action_group_horizontal_light',
  urldark: 'assets/images/ux-writing/fr/action_group_horizontal_dark',
  alt: 'Exemple pour action-group',
  title: 'microcopy action-group-horizontal'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Enregistrer</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Vers la planification annuelle</div>
        <!--<div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Erneut einladen</div>-->
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Saisir le change</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Afficher le message</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Synchroniser</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Détails</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Oui</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Planification annuelle</div>
        <!--<div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Profil-Einladung erneut versenden</div>-->
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Change</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Message</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Synchronisation</div>
    </div>    
</div>

## Les liens

Les liens mènent à d'autres contenus ou contextes. Leur libellé doit indiquer clairement où mène le lien ou ce que les utilisateurs peuvent y trouver.

Recommandations:

* **Liens parlants.** Utilise des formulations claires pour qu’un lien puisse être compris même sans texte environnant.

Exemples:

{{ imageOnGreyBackground({
  url: 'assets/images/ux-writing/fr/link_light',
  urldark: 'assets/images/ux-writing/fr/link_dark',
  alt: 'Beispiel für einen Link',
  title: 'microcopy link'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>Voir les conditions</sbb-link>
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>Afficher les services et les prix</sbb-link>
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>En savoir plus sur les prestations</sbb-link>
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>Plus d’informations</sbb-link>
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>Afficher plus</sbb-link>
        </div>        
    </div>
    <div class="donts">
       <div class="iconandlabel">
            <sbb-icon name="circle-cross-small"></sbb-icon>
            <div>Nos conditions sont décrites <sbb-link variant="inline">ici</sbb-link></div>.
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-cross-small"></sbb-icon>
            <div class="dosndontstext">
            <sbb-link variant="inline">Cliquez ici</sbb-link> pour en savoir plus sur nos services et nos prix.
            </div>
        </div>
        <div class="iconandlabel">
            <sbb-icon name="circle-cross-small"></sbb-icon>
            <sbb-link>Plus</sbb-link>
        </div>
    </div>    
</div>


