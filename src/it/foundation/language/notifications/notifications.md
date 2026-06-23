---
layout: page.njk
tags: level3
key: notifications_it
title: Notifiche
alternativetitle: Notifiche.
parent: language_it
order: 3

availablelanguages: 
    - de
    - fr
    - en
    
---

Le notifiche comprendono brevi avvisi e feedback. Informano su stati, successi, errori o avvertimenti, ad esempio sotto forma di <sbb-link  href="/{{page.lang}}/design-system/lyne/components/notification">notifiche</sbb-link> o <sbb-link  href="/{{page.lang}}/design-system/lyne/components/dialog">dialoghi</sbb-link>.

L'obiettivo è creare chiarezza, eliminare le incertezze degli utenti e mostrare loro cosa è successo e cosa fare successivamente.

Raccomandazioni: 

* **Attira l'attenzione sulle azioni critiche.** Per azioni gravi o irreversibili, utilizza finestre di dialogo di conferma (Vuoi davvero eliminare questo elemento?).
* **Spiega cosa succede dopo.** Dopo azioni come l'invio di un modulo, chiarisci quando e tramite quale canale verrà fornito un feedback.
* **Rendi gli errori risolvibili.** I messaggi di errore devono indicare come risolvere il problema.
* **Usa la punteggiatura con criterio.** Per i messaggi di errore relativi ai campi di input, non inserire il punto finale, a meno che non si tratti di frasi complete.
* **Consenti di annullare le azioni.** Offri la possibilità di annullare modifiche critiche o contenuti eliminati, ad esempio tramite un'opzione «Annulla» nei toast.

#### Notifiche.

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/it/notification_light',
  urldark: '/assets/images/ux-writing/it/notification_dark',
  alt: 'Esempio per un errore in una notifica',
  title: 'Notification Notification'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Non hai i permessi per questa operazione.</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Grazie per la tua richiesta.
        </br> Abbiamo ricevuto il tuo messaggio e ti risponderemo entro 3 giorni lavorativi. </br>La risposta ti verrà inviata via e-mail. </div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Le modifiche non hanno potuto essere salvate. Riprova.</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Attenzione!!!</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Salvataggio riuscito, ora puoi continuare.</div>
    </div>    
</div>

<sbb-secondary-button-link href="/{{page.lang}}/design-system/lyne/components/notification/">Vai al componente</sbb-secondary-button-link>

<br>

#### Toast.

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/it/toast_light',
  urldark: '/assets/images/ux-writing/it/toast_dark',
  alt: 'Esempio per una notifica tramite Toast',
  title: 'Notification Toast'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Password modificata</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>
          <div class="dosndontstext">
          Lista eliminata.
          <sbb-link> Ripristina lista. </sbb-link>
          </div>
        </div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Conferma modifica password.</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>La modifica del nome utente è stata salvata con successo.</div>
    </div>    
</div>

<sbb-secondary-button-link href="/{{page.lang}}/design-system/lyne/components/toast/">Vai al componente</sbb-secondary-button-link>

<br>


#### Dialog.

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/it/dialog_light',
  urldark: '/assets/images/ux-writing/it/dialog_dark',
  alt: 'Esempio per una notifica in un dialogo',
  title: 'Notification Dialog'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Eliminare la voce? </br> Vuoi eliminare definitivamente questa voce? </br> Questa operazione non può essere annullata.</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Sei sicuro di voler davvero fare questo? </br> Ok e Annulla (come azioni).</div>
    </div>    
</div>

<sbb-secondary-button-link href="/{{page.lang}}/design-system/lyne/components/dialog/">Vai al componente</sbb-secondary-button-link>

<br>


#### Error (Form-Field).

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/it/time_input_light',
  urldark: '/assets/images/ux-writing/it/time_input_dark',
  alt: 'Esempio per una notifica in un modulo',
  title: 'Notification input field'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Inserire un orario valido (HH:MM)</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Inserire un formato valido</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Valore errato</div>
    </div>
</div>

<sbb-secondary-button-link href="/{{page.lang}}/design-system/lyne/components/form-field/">Vai al componente</sbb-secondary-button-link>

<br>

#### Message.

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/it/message_with_image_light',
  urldark: '/assets/images/ux-writing/it/message_with_image_dark',
  alt: 'Exemple pour une message avec une image',
  title: 'message with image'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>La pagina cercata non esiste (più) o è stata spostata.</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Accesso negato. Non hai i permessi per aprire questa pagina.
 </br> Contatta esempio@ffs.ch</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Si è verificato un errore.</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Accesso negato</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Error Code 401</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Ops! Qualcosa è andato storto.</div>
    </div>
</div>

<sbb-secondary-button-link href="/{{page.lang}}/design-system/lyne/components/message/">Vai al componente</sbb-secondary-button-link>

<br>

