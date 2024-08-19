---
layout: page.njk
tags: level3
key: sap_fr
title: SAP
parent: guides_fr
order: 6
---

Les directives de conception SAP sont encore en cours d'élaboration. Actuellement il s'agit des premières informations pour une expérience cohérente pour l'ensemble des applications CFF SAP. Le <sbb-link variant="inline" type="button" target="_blank" href="https://experience.sap.com/fiori-design/">concept SAP Fiori Design</sbb-link> en constitue la base. Vous trouverez plus d'informations à ce sujet dans la <sbb-link variant="inline" type="button" target="_blank" href="https://community.sap.com/topics/fiori">communauté SAP</sbb-link>.{.lead}


## Thème CFF

### Introduction
Pour réaliser des applications SAP CFF avec une expérience utilisateur cohérente, les <sbb-link variant="inline" type="button" target="_blank" href="https://experience.sap.com/fiori-design">directives de conception SAP Fiori</sbb-link> constituent la base. Afin de respecter les directives relatives aux éléments de la marque CFF, un "thème CFF" a été défini à l'aide du concepteur de thèmes SAP.{.lead}

Le thème CFF est disponible avec le logo CFF intégré et des valeurs de couleur modifiées pour les applications internes sur SAP Fiori Launchpad et SAP Business Technology Platform (BTP).
Contact: <sbb-link variant="inline" type="button" href="mailto:slc@sbb.ch"> DSRV SAP TechOps</sbb-link>{.lead}

Pour une conception étendue utilisant HTML et CSS pour des interfaces utilisateur modifiées ou des thèmes pour des portails clients ou ERP spécifiques, tels que le "Real Estate Customer Cockpit", veuillez contacter la <sbb-link variant="inline" type="button" href="mailto:marke@sbb.ch">gestion de la marque CFF</sbb-link>.{.lead}

### Exemples

<sbb-secondary-button-link size="m" class="more-details">Portail Fiori CFF</sbb-secondary-button-link> <sbb-secondary-button-link size="m" class="more-details">«Auftragsabwicklung Planung und Steuerung"</sbb-secondary-button-link>

<sbb-overlay id="overlay-1">{{ principleImage({ url: '/assets/images/sap/hr-fiori-portal', alt: 'Exemple', title: 'Exemple'}) }}</sbb-overlay>

<sbb-overlay id="overlay-2">{{ principleImage({ url: '/assets/images/sap/aps-durchfuehrung-pm', alt: 'Exemple', title: 'Exemple'}) }}</sbb-overlay>



## Logo

### Utilisation
- Le logo est utilisé dans toutes les applications web SAP des CFF et est déjà intégré dans le thème des CFF.{.lead}

### Règles
- Le logo apparaît exactement une fois par page et se trouve toujours dans l'en-tête.{.lead}
- Le positionnement est toujours en haut à gauche.{.lead}
- Les variations du logo ne sont pas autorisées.{.lead}
- Le logo est lié à la page de base de l'environnement SAP.{.lead}

## Icônes

### Utilisation
Les icônes sont utilisées pour soutenir visuellement les sujets et les actions des utilisateurs. Pour les applications SAP des CFF, la police d'icônes SAP doit être utilisée.{.lead}

Si le jeu d'icônes existant de SAP n'est pas suffisant, de nouvelles icônes dans le style SAP peuvent être commandées auprès des experts UX de votre solution digitale ou du <sbb-link variant="inline" type="button" target="_blank" href="https://sbb.sharepoint.com/sites/uxsbb/SitePages/SBB-Icons.aspx">Service UX</sbb-link>.{.lead}

L'auto-compilation d'icônes est autorisée, mais celle-ci doit être approuvée par la direction de la marque CFF ou par DSRV UX avant d'être utilisée. Dans les produits numériques et les applications, il faut veiller à ce que les icônes ne soient pas utilisées dans des épaisseurs de ligne différentes.{.lead}

### Règles
- Pour les applications SAP CFF, la police d'icônes SAP doit être utilisée.
- La taille vectorielle de base des icônes SAP est de 16px pour les icônes utilisées dans les contrôles de l'interface utilisateur. Les autres tailles répertoriées, de 18 à 40 px, dépendent des besoins de l'interface utilisateur.{.lead}
- L'utilisation d'icônes dans un texte doit être évitée autant que possible.{.lead}
- Les icônes sans texte doivent être explicites ou faciles à apprendre. Plus il y a d'icônes dans une application, plus il est difficile de comprendre leur signification. Les icônes sans texte doivent inclure un texte alternatif décrivant la fonction de l’icône (par ex. "Fermer le menu").{.lead}
- Les icônes doivent toujours avoir la même signification (cohérence) dans toutes les applications (dans les solutions numériques).{.lead}

### Liens
<sbb-link variant="inline" type="button" target="_blank" href="https://experience.sap.com/fiori-design-web/icons/">SAP Icon Font Guideline</sbb-link>
<sbb-link variant="inline" type="button" target="_blank" href="https://sapui5.hana.ondemand.com/sdk/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">SAP Icon-Set</sbb-link>
<sbb-link variant="inline" type="button" target="_blank" href="https://confluence.sbb.ch/pages/viewpage.action?spaceKey=DSRVUX&title=SAP+Fiori">SAP Fiori approche UX (en allemand, accessible avec le login CFF)</sbb-link>

<script>
const buttons = document.querySelectorAll(".more-details");
function buttonClicked(index) {
    const overlay = document.getElementById("overlay-"+(index + 1));
    overlay.open(event);
}
buttons.forEach((button, index) => {
  button.addEventListener("click", () => buttonClicked(index));
});
</script>