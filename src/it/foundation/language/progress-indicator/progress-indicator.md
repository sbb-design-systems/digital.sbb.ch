---
layout: page.njk
tags: level3
key: progress_indicator_it
title: Indicatore di avanzamento
alternativetitle: Indicatore di avanzamento.
parent: language_it
order: 5

availablelanguages: 
    - de
    - fr
    - en
---

Gli indicatori di avanzamento mostrano agli utenti in quale fase di un processo a più livelli si trovano. 

L'obiettivo è guidare chiaramente gli utenti, definire le aspettative e rendere il flusso trasparente, in modo che possano navigare nel processo con sicurezza.

Raccomandazioni:

* **Denominare i passaggi con sostantivi.** Utilizza sostantivi per le denominazioni dei passaggi invece di formulazioni orientate all'azione. Esempio: «Abbonamento» invece di «Scegli abbonamento».

* **Contrassegnare chiaramente la conclusione.** Nell'etichetta dell'azione nell'ultimo passaggio, indica chiaramente che il processo viene concluso.

* **Modifiche possibili.** Segnala quando le informazioni inserite o le impostazioni possono essere modificate in un secondo momento.

Esempi:


{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/fr/stepper_light',
  urldark: '/assets/images/ux-writing/fr/stepper_dark',
  alt: 'Exemple pour indicateur de progression',
  title: 'Progress Indicator'
}) }}

#### Labels:

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Località</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Immagine</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Scegli località</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Carica immagini</div>
    </div>    
</div>


#### Contenuto:

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Puoi aggiungere o modificare i dati in un secondo momento.</div>
    </div>
    <!--<div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>XX</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>XX</div>
    </div>-->
</div>

