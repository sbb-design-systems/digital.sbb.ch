---
layout: page.njk
tags: level3
key: notifications_fr
title: Les notifications
alternativetitle: Les notifications.
parent: language_fr
order: 3
---

Les notifications comprennent de courtes indications et des feed-back. Elles donnent des informations sur les états, les réussites, les erreurs ou les avertissements, par exemple sous forme de <sbb-link  href="/{{page.lang}}/design-system/lyne/components/notification">notifications</sbb-link> ou de <sbb-link  href="/{{page.lang}}/design-system/lyne/components/dialog">dialogue</sbb-link>.

L’objectif est d’y voir plus clair, d’éliminer les incertitudes des utilisateurs et de leur montrer ce qui s’est passé et ce qu’il faut faire ensuite.

Recommandations: 

* **Attire l'attention sur les actions critiques.** Pour les actions graves ou irréversibles, utilise des boîtes de dialogue de confirmation (Voulez-vous vraiment supprimer ce fichier?).
* **Explique ce qui se passe ensuite.** Précise clairement, après avoir envoyé un formulaire, quand et par quel canal un feed-back a lieu.
* **Permets de corriger les erreurs.** Les messages d'erreur doivent indiquer comment résoudre le problème.
* **Utilise la ponctuation de manière consciente.** Pour les messages d'erreur relatifs aux champs de saisie, n'utilise pas de point final, sauf s'il s'agit d'une phrase complète.
* **Permets d'annuler les actions.** Offre la possibilité d'annuler les modifications critiques ou les contenus supprimés, par exemple via une option «Annuler» dans les toasts.

#### Notification.

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/fr/notification_light',
  urldark: '/assets/images/ux-writing/fr/notification_dark',
  alt: 'Exemple pour une error dans une notification',
  title: 'Notification Notification'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Tu ne disposes pas de l’autorisation requise pour cette opération.</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Merci pour ta demande. 
        </br> Nous avons bien reçu ton message et te répondrons dans les 3 jours ouvrables. </br>Tu recevras la réponse par courriel. </div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Tes modifications n’ont pas pu être enregistrées. Merci de réessayer</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Attention!!!</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Enregistrement réussi. Tu peux maintenant continuer.</div>
    </div>    
</div>

<sbb-secondary-button-link href="/{{page.lang}}/design-system/lyne/components/notification/">Au composant</sbb-secondary-button-link>

<br>

#### Toast.

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/fr/toast_light',
  urldark: '/assets/images/ux-writing/fr/toast_dark',
  alt: 'Exemple pour une notification au moyen de Toast',
  title: 'Notification Toast'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Mot de passe modifié</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>
          <div class="dosndontstext">
          Liste supprimée.
          <sbb-link> Rétablir la liste </sbb-link>
          </div>
        </div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Confirmation de modification du mot de passe</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Modification du nom d'utilisateur enregistrée avec succès.</div>
    </div>    
</div>

<sbb-secondary-button-link href="/{{page.lang}}/design-system/lyne/components/toast/">Au composant</sbb-secondary-button-link>

<br>


#### Dialog.

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/fr/dialog_light',
  urldark: '/assets/images/ux-writing/fr/dialog_dark',
  alt: 'Exemple pour une notification dans une dialogue',
  title: 'Notification Dialog'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Supprimer la saisie? </br> Souhaites-tu supprimer définitivement cette entrée?  </br> Cette opération ne peut pas être annulée.</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Es-tu sûr·e de vouloir faire cela? 
 </br> OK et Annuler (en tant qu'actions)</div>
    </div>    
</div>

<sbb-secondary-button-link href="/{{page.lang}}/design-system/lyne/components/dialog/">Au composant</sbb-secondary-button-link>

<br>


#### Error (Form-Field).

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/fr/time_input_light',
  urldark: '/assets/images/ux-writing/fr/time_input_dark',
  alt: 'Exemple pour une notification dans une formulaire',
  title: 'Notification input field'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Saisir une heure valide (HH:MM)</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Saisir un format valide</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Valeur incorrecte</div>
    </div>
</div>

<sbb-secondary-button-link href="/{{page.lang}}/design-system/lyne/components/form-field/">Au composant</sbb-secondary-button-link>

<br>

#### Message.

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/fr/message_with_image_light',
  urldark: '/assets/images/ux-writing/fr/message_with_image_dark',
  alt: 'Exemple pour une message avec une image',
  title: 'message with image'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>a page que vous recherchez n’existe pas (ou plus) ou a été déplacée.</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Accès refusé. Tu n’as pas l’autorisation d’ouvrir cette page.
 </br> Contacte-nous à l’adresse exemple@sbb.ch.</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Une erreur est survenue.</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Accès refusé</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Code d'erreur 401</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Oups! Une erreur s'est produite.</div>
    </div>
</div>

<sbb-secondary-button-link href="/{{page.lang}}/design-system/lyne/components/message/">Au composant</sbb-secondary-button-link>

<br>

