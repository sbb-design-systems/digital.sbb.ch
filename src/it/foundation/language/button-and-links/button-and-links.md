---
layout: page.njk
tags: level3
key: button_and_links_it
title: Testi per pulsanti e link
alternativetitle: Testi per pulsanti e link.
parent: language_it
order: 2

availablelanguages: 
    - de
    - fr
    - en
---

I testi per pulsanti e link sono etichette brevi e orientate all'azione.

Il loro obiettivo è guidare gli utenti con il minor numero di parole possibile, ridurre le incertezze e facilitare le decisioni.

## Pulsanti.

I pulsanti sono trigger di azione, non spazi esplicativi. Rendono immediatamente chiaro quale azione viene eseguita al clic.

Raccomandazioni: 

* **Sii chiaro.** Utilizza un'istruzione o un invito all'azione (Acquista ora, avanti, invia) oppure un'indicazione orientativa inequivocabile (ad es. «Vai alle impostazioni»), in modo che l'azione sia immediatamente comprensibile.

* **Usa da 1 a 3 parole.** I pulsanti vengono scorsi, non letti. Le etichette brevi aiutano a riconoscere rapidamente le azioni e a distinguere più facilmente tra più pulsanti.

* **Non spiegare nel pulsante.** Se sono necessarie informazioni aggiuntive per la comprensione, posizionale sopra/sotto il pulsante o in un tooltip.

Esempi:

{{ imageOnGreyBackground({
  url: 'assets/images/ux-writing/it/action_group_horizontal_light',
  urldark: 'assets/images/ux-writing/it/action_group_horizontal_dark',
  alt: 'Esempio per pulsanti',
  title: 'microcopy action-group-horizontal'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Salva</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Vai alla pianificazione annuale</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Invita di nuovo</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Registra cambio valuta</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Mostra notifica</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Sincronizza</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Dettagli</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Sì</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Pianificazione annuale</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Reinvia invito al profilo</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Cambio valuta</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Notifica</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Sincronizzazione</div>
    </div>    
</div>

## Link.

I link conducono a ulteriori contenuti o contesti. La loro etichetta deve chiarire dove porta il link o cosa gli utenti possono aspettarsi di trovarvi.

Raccomandazioni:

* **Link descrittivi.** Utilizza formulazioni chiare, in modo che un link sia comprensibile anche senza il testo circostante.

Esempi:

{{ imageOnGreyBackground({
  url: 'assets/images/ux-writing/it/link_light',
  urldark: 'assets/images/ux-writing/it/link_dark',
  alt: 'Esempio per link',
  title: 'microcopy link'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>Vai alle condizioni</sbb-link>
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>Visualizza servizi e prezzi</sbb-link>
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>Ulteriori informazioni sui servizi</sbb-link>
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>Ulteriori informazioni</sbb-link>
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>Mostra altro</sbb-link>
        </div>        
    </div>
    <div class="donts">
       <div class="iconandlabel">
            <sbb-icon name="circle-cross-small"></sbb-icon>
            <div>Le nostre condizioni sono descritte <sbb-link variant="inline">qui</sbb-link></div>.
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-cross-small"></sbb-icon>
            <div class="dosndontstext">
            <sbb-link variant="inline">Clicca qui,</sbb-link> per saperne di più sui nostri servizi e prezzi.
            </div>
        </div>
        <div class="iconandlabel">
            <sbb-icon name="circle-cross-small"></sbb-icon>
            <sbb-link>Altro</sbb-link>
        </div>
    </div>    
</div>


