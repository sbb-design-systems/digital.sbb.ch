---
layout: page.njk
tags: page
key: sap_it
title: SAP
parent: guides_it
order: 6
---

Le linee guida SAP sono un lavoro in corso. Al momento queste includono prime informazioni per applicazioni SAP coerenti con le FFS. Il fondamento è il <sbb-link variant="inline" type="button" href="https://experience.sap.com/fiori-design/">SAP Fiori Design Concept</sbb-link>. Ulteriori informazioni al riguardo sono disponibili nella <sbb-link variant="inline" type="button" href="https://community.sap.com/topics/fiori">SAP Community</sbb-link>.{.lead}

## Tema delle FFS

### Introduzione

La base per lo sviluppo di applicazioni SAP FFS con un'esperienza utente coerente è il <sbb-link variant="inline" type="button" href="https://experience.sap.com/fiori-design">SAP Fiori Design Concept</sbb-link>. Per rispettare le linee guida degli elementi del marchio FFS è stato definito il "Tema FFS" con il designer di temi SAP.{.lead}

Il tema FFS con logo FFS integrato e valori cromatici modificati è disponibile per le applicazioni interne sul gateway SAP e sulla piattaforma cloud SAP "Cloud Foundry".
Contatto:  <sbb-link variant="inline" type="button" href="mailto:slc@sbb.ch"> DSRV SAP TechOps</sbb-link>{.lead}

Per creare estensioni visive con HTML e CSS per interfacce utente modificate o temi per specifici portali clienti o ERP, come l'"Immobilien Kunden Cockpit" ti incoraggiamo a contattare <sbb-link variant="inline" type="button" href="mailto:marke@sbb.ch">la Direzione del Marchio FFS</sbb-link>.{.lead}


### Esempi

<sbb-button size="m" variant="secondary" class="more-details">Portale FFS Fiori</sbb-button> <sbb-button size="m" variant="secondary" class="more-details">"Auftragsabwicklung Planung und Steuerung"</sbb-button>

<sbb-dialog id="dialog-1" title-back-button="false">{{ principleImage({ url: '/assets/images/sap/hr-fiori-portal', alt: 'example', title: 'example'}) }}</sbb-dialog>

<sbb-dialog id="dialog-2" title-back-button="false">{{ principleImage({ url: '/assets/images/sap/aps-durchfuehrung-pm', alt: 'example', title: 'example'}) }}</sbb-dialog>

## Logo

### Utilizzo
* Il logo è utilizzato in tutte le applicazioni SAP delle FFS ed è incorporato nel tema FFS.{.lead}

### Regole
* Il logo appare esattamente una volta per pagina e si trova sempre nell'intestazione.{.lead}
* La posizione è sempre in alto a sinistra.{.lead}
* Non è consentito modificare il logo.{.lead}
* Il logo è collegato alla pagina base dell'ambiente SAP.{.lead}


## Icons

### Utilizzo
Le icone servono come supporto visivo per gli argomenti e le azioni per gli utenti. Per utilizzarle nelle applicazioni SAP FFS è necessario utilizzare il font di icone SAP.{.lead}

Se il set di icone SAP esistente non prevede l’icona di cui hai bisogno, hai la possibilità di richiederne altre su misura e nello stile SAP agli esperti UX delle Digital Solution o di <sbb-link variant="inline" type="button" href="https://sbb.sharepoint.com/sites/uxsbb/SitePages/SBB-Icons.aspx">DSRV UX</sbb-link>.{.lead}

La creazione autonoma di icone è consentita, ma deve essere approvata dal (link: mailto:marke@sbb.ch testo: SBB Markenführung) o dal (link: mailto:ux@sbb.ch testo: DSRV UX) prima che queste icone vengano poste in uso. Resta buona norma nei prodotti digitali e nelle applicazioni prestare attenzione a non utilizzare icone con uno spessore delle linee diverso.{.lead}

### Regole
* Per l'utilizzo delle applicazioni SAP FFS, il font delle icone SAP deve essere generalmente utilizzato nel colore <sbb-link variant="inline" type="button" href="/{{page.lang}}/foundation/colors/base-colors/">SBB Black</sbb-link>.{.lead}
* La dimensione di base dei vettori per le icone SAP è di 16px per i simboli utilizzati nei controlli dell'interfaccia utente. Le altre dimensioni elencate, da 18px a 40px, dipendono dai requisiti individuali dell'interfaccia.{.lead}
* È preferibile evitare di utilizzare le icone all'interno di un testo scorrevole.{.lead}
* Le icone senza testo devono essere autoesplicative o facili da imparare. Più icone vengono utilizzate in un'applicazione, più diventa difficile ricordarne correttamente il significato. Le icone senza testo devono essere integrate con un testo alternativo, che descriva non l'icona in sé, ma la sua azione (ad esempio, "Chiudi menu").{.lead}
* Le icone devono avere sempre lo stesso significato in tutte le applicazioni e in tutte le soluzioni digitali (per rispettarne la coerenza).{.lead}

### Collegamenti
<sbb-link variant="inline" type="button" href="https://experience.sap.com/fiori-design-web/icons/">Linee guida per i caratteri delle icone SAP</sbb-link>
<sbb-link variant="inline" type="button" href="https://sapui5.hana.ondemand.com/sdk/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Set di icone SAP</sbb-link>


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

