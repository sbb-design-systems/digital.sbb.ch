---
layout: page.njk
tags: level3
key: notifications_de
title: Benachrichtigungen
parent: language_de
order: 3
---

Benachrichtigungen umfassen kurze Hinweise und Rückmeldungen im Interface. Sie informieren über Zustände, Erfolge, Fehler oder Warnungen, zum Beispiel in Form von Notifications oder Dialogen.

Ziel ist es, Klarheit zu schaffen, Unsicherheiten zu nehmen und den Nutzer:innen aufzuzeigen, was passiert ist und was als Nächstes zu tun ist.

### Empfehlungen: 
* **Bestätige kritische Aktionen.** Nutze Confirmation-Dialoge bei schwerwiegenden oder nicht rückgängig zu machenden Aktionen.
* **Erkläre was danach passiert.** Nach Aktionen wie dem Absenden eines Formulars klar machen, wann eine Rückmeldung erfolgt und über welchen Kanal.
* **Strukturiere klar.** Platziere die Hauptaussage im Titel, Details in den Text. Primäre Aktionen rechts, Abbrechen links platzieren.
* **Formuliere neutral.** Fokus liegt auf dem Problem, nicht auf der Person. 
* **Mach Fehler lösbar.** Fehlermeldungen sollten aufzeigen, wie das Problem behoben werden kann. 
* **Setze Punkte bewusst.** Fehlermeldungen bei Inputfeldern ohne Schlusspunkt, ausser bei vollständigen Sätzen. 
* **Ermögliche, Aktionen rückgängig zu machen.** Biete die Möglichkeit, kritische Änderungen oder gelöschte Inhalte zurückzunehmen, etwa über eine “Rückgängig”-Option in Toasts. 

#### Beispiele

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/time_input_light',
  urldark: '/assets/images/ux-writing/time_input_dark',
  alt: 'Beispiel für eine Benachrichtigung innerhalb eines Formularfeldes',
  title: 'Notification input field'
}) }}

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/notification_light',
  urldark: '/assets/images/ux-writing/notification_dark',
  alt: 'Beispiel für eine Benachrichtigung innerhalb einer Notification',
  title: 'Notification Notification'
}) }}

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/dialog_light',
  urldark: '/assets/images/ux-writing/dialog_dark',
  alt: 'Beispiel für eine Benachrichtigung innerhalb eines Dialog-Fensters',
  title: 'Notification Dialog'
}) }}

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/toast_light',
  urldark: '/assets/images/ux-writing/toast_dark',
  alt: 'Beispiel für eine Benachrichtigung mittels Toast',
  title: 'Notification Toast'
}) }}


<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Gültige Uhrzeit eingeben (HH:MM)</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Du hast keine Berechtigung diesen Vorgang auszuführen.</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Passwort geändert</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Vielen Dank für deine Anfrage. </br> Wir haben deine Nachricht erhalten und melden uns innerhalb von 3 Werktagen bei dir. </br> Die Antwort erhältst du per E-Mail.</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Eintrag löschen? </br> Möchtest du diesen EIntrag endgültig löschen? </br> Dieser Vorgang kann nicht rückgängig gemacht werden.</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Deine Änderungen konnten nicht gespeichert werden. Bitte versuche es erneut. </div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Liste gelöscht.<sbb-link>Liste wiederherstellen</sbb.link>(als Toast ohne Confirmation)</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Gültiges Format eingeben</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Falscher Wert</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Access denied</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Passwortänderungsbestätigung</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Error Code 401.</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Ups! Da ist etwas schiefgelaufen.</div>
    </div>    
</div>