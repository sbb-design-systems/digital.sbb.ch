---
layout: page.njk
tags: level3
key: forms_it
title: Moduli e campi di input
alternativetitle: Moduli e campi di input.
parent: language_it
order: 2

availablelanguages: 
    - de
    - fr
    - en
---

I moduli e i campi di input utilizzano etichette, suggerimenti e segnaposto per mostrare agli utenti come compilare correttamente i campi.  

Il loro obiettivo è chiarire le aspettative, evitare errori e rendere l'inserimento il più semplice e sicuro possibile.

## Etichette (Labels).

Le etichette indicano chiaramente cosa deve essere inserito. Forniscono orientamento e riducono le incertezze.

Raccomandazioni:

* **Sii chiaro.** Utilizza etichette precise che descrivano inequivocabilmente lo scopo del campo.
* **Spiega se necessario.** Se sono necessarie informazioni aggiuntive per la comprensione, posizionale in un info-popover.

Esempi:

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/fr/forms_light',
  urldark: '/assets/images/ux-writing/forms_dark',
  alt: 'Exemple pour une formulaire',
  title: 'Forms'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Via e numero civico</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Numero civico</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Numero</div>
    </div>    
</div>

## Segnaposto (Placeholder).

I segnaposto forniscono suggerimenti e aiutano durante l'inserimento.

Raccomandazioni:

* **Mostra esempi.** Utilizza i segnaposto per mostrare il formato desiderato o valori di esempio e per evitare errori di inserimento.
* **Non sono un sostituto.** I segnaposto non sostituiscono un'etichetta, servono solo come indicazione complementare.

Exemples:

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/fr/forms2_light',
  urldark: '/assets/images/ux-writing/fr/forms2_dark',
  alt: 'Beispiele für Formularfelder',
  title: 'Forms'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Inserisci un termine di ricerca</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Città, stazione, ...</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Data di nascita (GG.MM.AAAA)</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Cerca</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Cosa stai cercando?</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Numero</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>E-mail, nome, cognome, numero cliente, indirizzo, numero di telefono ...</div>
    </div>    
</div>