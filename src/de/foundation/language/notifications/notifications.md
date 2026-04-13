---
layout: page.njk
tags: level3
key: notifications_de
title: Benachrichtigungen
parent: language_de
order: 3
---

Benachrichtigungen umfassen kurze Hinweise und Rückmeldungen. Sie informieren über Zustände, Erfolge, Fehler oder Warnungen, zum Beispiel in Form von <sbb-link variant="inline" href="/{{page.lang}}/design-system/lyne/components/notification">Notifikationen</sbb-link> oder <sbb-link variant="inline" href="/{{page.lang}}/design-system/lyne/components/dialog">Dialogen</sbb-link>.

Ziel ist es, Klarheit zu schaffen, den Nutzer:innen Unsicherheiten zu nehmen und ihnen aufzuzeigen, was passiert ist und was als Nächstes zu tun ist.

### Empfehlungen: 
* **Mache auf kritische Aktionen aufmerksam.** Nutze bei schwerwiegenden oder nicht rückgängig zu machenden Aktionen Bestätigungsdialoge (Möchten Sie das wirklich löschen?).
* **Erkläre was danach passiert.** Mache nach Aktionen wie dem Absenden eines Formulars klar, wann und über welchen Kanal eine Rückmeldung erfolgt.
* **Mache Fehler lösbar.** Fehlermeldungen sollten aufzeigen, wie das Problem behoben werden kann.
* **Setze Punkte bewusst.** Setze bei Fehlermeldungen zu Inputfeldern keinen Schlusspunkt, ausser bei vollständigen Sätzen.
* **Ermögliche, Aktionen rückgängig zu machen.** Biete die Möglichkeit, kritische Änderungen oder gelöschte Inhalte zurückzunehmen, etwa über eine «Rückgängig»-Option in Toasts.

#### Notification

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/notification_light',
  urldark: '/assets/images/ux-writing/notification_dark',
  alt: 'Beispiel für eine Benachrichtigung innerhalb einer Notification',
  title: 'Notification Notification'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Du hast keine Berechtigung für diesen Vorgang.</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Vielen Dank für deine Anfrage. </br> Wir haben deine Nachricht erhalten und melden uns innerhalb von 3 Werktagen bei dir.</br>Die Antwort erhältst du per E-Mail. </div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Deine Änderungen konnten nicht gespeichert werden. Bitte versuche es erneut.</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Achtung!!!</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Speichern war erfolgreich, du kannst jetzt weiter.</div>
    </div>    
</div>


#### Toasts

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/toast_light',
  urldark: '/assets/images/ux-writing/toast_dark',
  alt: 'Beispiel für eine Benachrichtigung mittels Toast',
  title: 'Notification Toast'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Passwort geändert</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>
          <div class="dosndontstext">
          Liste gelöscht.
          <sbb-link>Liste wiederherstellen</sbb-link>
          </div>
        </div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Passwortänderungsbestätigung</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Änderung des Benutzernamens wurde erfolgreich gespeichert.</div>
    </div>    
</div>


#### Dialog

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/dialog_light',
  urldark: '/assets/images/ux-writing/dialog_dark',
  alt: 'Beispiel für eine Benachrichtigung innerhalb eines Dialog-Fensters',
  title: 'Notification Dialog'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Eintrag löschen? </br> Möchtest du diesen Eintrag endgültig löschen? </br> Dieser Vorgang kann nicht rückgängig gemacht werden.</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Bist du sicher, ob du das wirklich machen willst? </br> Ok  und Abbrechen (als Aktionen)</div>
    </div>    
</div>


#### Error (Form Field)

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/time_input_light',
  urldark: '/assets/images/ux-writing/time_input_dark',
  alt: 'Beispiel für eine Benachrichtigung innerhalb eines Formularfeldes',
  title: 'Notification input field'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Gültige Uhrzeit eingeben (HH:MM)</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Gültiges Format eingeben</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Falscher Wert</div>
    </div>
</div>

### Message

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Die gesuchte Seite existiert nicht (mehr) oder wurde verschoben.</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Zugriff verweigert. Du hast keine Berechtigung diese Seite zu öffnen. </br> Melde dich bei beispiel@sbb.ch</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Access denied</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Error Code 401</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Ups! Da ist was schiefgelaufen.</div>
    </div>
</div>

