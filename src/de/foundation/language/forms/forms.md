---
layout: page.njk
tags: level3
key: forms_de
title: Formulare und Eingaben
parent: language_de
order: 4
---

Formulare und Eingaben nutzen Labels, Hinweise und Platzhalter, um Nutzer:innen zu zeigen, wie Felder korrekt ausgefüllt werden. 

Ihr Ziel ist es, Erwartungen klarzumachen, Fehler zu vermeiden und die Eingabe so einfach und sicher wie möglich zu gestalten.

## Labels

Labels benennen klar, was eingegeben werden soll. Sie schaffen Orientierung und reduzieren Unsicherheit.

Empfehlungen: 

* **Sei klar.** Verwende präzise Labels, die den Zweck des Feldes eindeutig beschreiben.
* **Erkläre bei Bedarf.** Wenn zusätzliche Informationen für das Verständnis nötig sind, platziere diese in einem Info-Popover. 

Beispiele:

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/forms_light',
  urldark: '/assets/images/ux-writing/forms_dark',
  alt: 'Beispiel für Formularfelder',
  title: 'Forms'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Strasse und Nummer</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Hausnummer</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Nummer</div>
    </div>    
</div>

## Platzhalter

Placeholders geben Hinweise und helfen bei der Eingabe.

Empfehlungen:

* **Zeig Beispiele.** Nutze Platzhalter, um das gewünschte Format oder Beispielwerte zu zeigen und Eingabefehler zu vermeiden.
* **Kein Ersatz.** Platzhalter ersetzen kein Label, sie dienen nur als ergänzender Hinweis.

Beispiele:

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/forms2_light',
  urldark: '/assets/images/ux-writing/forms2_dark',
  alt: 'Beispiele für Formularfelder',
  title: 'Forms'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Suchbegriff eingeben</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Stadt, Bahnhof, ...</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Geburtsdatum (TT.MM.JJJJ)</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Suche</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Was suchst du?</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Nummer</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>gar kein Placeholder</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>zu viele Begriffe, so dass es auch wieder nicht hilft</div>
    </div>    
</div>