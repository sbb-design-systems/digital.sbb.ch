---
layout: page.njk
tags: page
key: sap_de
title: SAP
parent: guides_de
order: 6
---

Die SAP Design Guidelines sind noch im Aufbau. Derzeit besteht es aus ersten Informationen für konsistente SBB SAP Applikationen. Grundlage dafür bildet das <sbb-link variant="inline" type="button" href="https://experience.sap.com/fiori-design/">SAP Fiori Design Konzept</sbb-link>. Mehr Informationen dazu finden sich auch in der <sbb-link variant="inline" type="button" href="https://community.sap.com/topics/fiori">SAP Community</sbb-link>.{.lead}

## SBB Theme

### Einführung
Für die Erstellung von SBB SAP Anwendungen mit konsistentem Bedienerlebnis bildet das <sbb-link variant="inline" type="button" href="https://experience.sap.com/fiori-design">SAP Fiori Design Konzept</sbb-link> die Basis. Zur Einhaltung der Richtlinien der SBB Markenelemente, wurde das «SBB Theme» mit dem SAP Theme Designer definiert.{.lead}

Das SBB Theme steht mit integriertem SBB Logo und modifizierten Farbwerten für interne Anwendungen auf dem SAP Gateway und SAP Cloud Platform Service «Cloud Foundry» zur Verfügung.
Kontakt: <sbb-link variant="inline" type="button" href="mailto:slc@sbb.ch"> DSRV SAP TechOps</sbb-link>{.lead}



Für eine erweiterte Gestaltung mittels HTML und CSS für modifizierte Benutzeroberflächen oder Themes für spezifische Kunden- oder ERP-Portale, wie z.B. das «Immobilien Kunden Cockpit», kontaktieren Sie bitte die <sbb-link variant="inline" type="button" href="mailto:marke@sbb.ch">SBB Markenführung</sbb-link>.{.lead}

### Beispiele  

<sbb-button size="m" variant="secondary" class="more-details">SBB Fiori Portal</sbb-button> <sbb-button size="m" variant="secondary" class="more-details">«Auftragsabwicklung Planung und Steuerung</sbb-button>

<sbb-dialog id="dialog-1" title-back-button="false">{{ principleImage({ url: '/assets/images/sap/hr-fiori-portal', alt: 'Beispiel', title: 'Beispiel'}) }}</sbb-dialog>

<sbb-dialog id="dialog-2" title-back-button="false">{{ principleImage({ url: '/assets/images/sap/aps-durchfuehrung-pm', alt: 'Beispiel', title: 'Beispiel'}) }}</sbb-dialog>



## Logo

### Verwendung
* Das Logo wird bei allen SBB SAP-Applikationen eingesetzt und ist bereits im SBB Theme eingebettet.{.lead}

### Regeln
* Das Logo tritt genau einmal pro Seite auf und befindet sich immer im Header.{.lead}
* Die Positionierung ist immer links oben.{.lead}
* Abwandlungen des Logos sind nicht erlaubt.{.lead}
* Das Logo ist verlinkt auf die Basisseite der SAP Umgebung.{.lead}


## Icons

### Verwendung
Icons dienen zur visuellen Unterstützung von Themen und Aktionen für die Benutzer`*`innen. Für die Verwendung in SBB SAP-Anwendungen ist der SAP Icon Font einzusetzen.{.lead}

Sollte das bestehende Icon-Set von SAP nicht ausreichen, können neue Icons in SAP Style bei den UX-Expert`*`innen der Digital Solution oder beim <sbb-link variant="inline" type="button" href="https://sbb.sharepoint.com/sites/uxsbb/SitePages/SBB-Icons.aspx">DSRV UX</sbb-link>bestellt werden.{.lead}

Eine selbständige Erstellung von Icons ist erlaubt, diese müssen von der (link: mailto:marke@sbb.ch text: SBB Markenführung) oder vom (link: mailto:ux@sbb.ch text: DSRV UX) vor deren Einsatz abgenommen werden. In digitalen Produkten und Apps ist darauf zu achten, dass Icons nicht in verschiedenen Linienstärken verwendet werden.{.lead}

### Regeln
* Für die Verwendung in SBB SAP-Anwendungen ist der SAP Icon Font grundsätzlich in der Farbe <sbb-link variant="inline" type="button" href="/{{page.lang}}/foundation/colors/base-colors/">SBB Black</sbb-link> einzusetzen.{.lead}
* Die Basisvektorgrösse für SAP Icons beträgt 16px für Symbole, die in den UI-Steuerelementen verwendet werden. Andere aufgelistete Grössen von 18px bis 40px hängen von den individuellen Anforderungen der Benutzeroberfläche ab.{.lead}
* Innerhalb von Fliesstexten soll wenn immer möglich auf die Verwendung von Icons verzichtet werden.{.lead}
* Icons ohne Text müssen selbsterklärend oder schnell lernbar sein. Je mehr Icons in einer Anwendung eingesetzt werden, desto schwieriger wird es die Bedeutung deren zu merken. Die Icons ohne Text müssen mit einem Alternativtext hinterlegt werden, wobei nicht das Icon selbst, sondern seine Funktion in Textform beschrieben wird (z.B. "Menu schliessen").{.lead}
* Icons sollen anwendungsübergreifend (Digital Solution übergreifend) immer die gleiche Bedeutung haben (Konsistenz).{.lead}

### Links
<sbb-link variant="inline" type="button" href="https://experience.sap.com/fiori-design-web/icons/">SAP Icon Font Guideline</sbb-link>
<sbb-link variant="inline" type="button" href="https://sapui5.hana.ondemand.com/sdk/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">SAP Icon-Set</sbb-link>


<script>
const buttons = document.querySelectorAll(".more-details");
function buttonClicked(index) {
    const dialog = document.getElementById("dialog-"+(index + 1));
    console.log(dialog.id);
    dialog.open(event);
}
buttons.forEach((button, index) => {
  button.addEventListener("click", () => buttonClicked(index));
});
</script>