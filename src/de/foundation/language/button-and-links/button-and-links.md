---
layout: page.njk
tags: level3
key: button_and_links_de
title: Button- und Linktexte
alternativetitle: Button- und Linktexte.
parent: language_de
order: 2
---

Button- und Linktexte sind kurze, handlungsorientierte Beschriftungen.

Ihr Ziel ist es, Nutzer:innen mit möglichst wenigen Wörtern zu führen, Unsicherheiten zu reduzieren und Entscheidungen zu erleichtern.

## Buttons

Buttons sind Handlungs-Trigger, keine Erklärungsflächen. Sie machen auf einen Blick klar, welche Aktion beim Klick ausgeführt wird.

Empfehlungen: 

* **Sei klar.** Verwende eine Handlungsanweisung oder -aufforderung (Jetzt kaufen, weiter, senden) oder eine eindeutige Orientierungshilfe (z.B. «Zu Einstellungen») damit die Aktion sofort verständlich ist. 

* **Verwende 1–3 Wörter.** Buttons werden gescannt, nicht gelesen. Kurze Labels helfen, Aktionen schnell zu erkennen und leichter zwischen mehreren Buttons zu unterscheiden.

* **Erkläre nicht im Button.** Wenn Zusatzinformationen für das Verständnis nötig sind, platziere sie ober-/unterhalb des Buttons oder in einem Tooltipp.

Beispiele:

{{ imageOnGreyBackground({
  url: 'assets/images/ux-writing/action_group_horizontal_light',
  urldark: 'assets/images/ux-writing/action_group_horizontal_dark',
  alt: 'Beispiel für action-group',
  title: 'microcopy action-group-horizontal'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Speichern</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Zur Jahresplanung</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Erneut einladen</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Geldwechsel erfassen</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Meldung anzeigen</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Synchronisieren</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Details</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Ja</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Jahresplanung</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Profil-Einladung erneut versenden</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Geldwechsel</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Meldung</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Synchronisation</div>
    </div>    
</div>

## Links

Links führen zu weiteren Inhalten oder Kontexten. Ihre Beschriftung muss klar machen, wohin der Link führt oder was Nutzer:innen dort erwarten können.

Empfehlungen:

* **Sprechende Links.** Nutze klare Formulierungen, sodass ein Link auch ohne umgebenden Text verständlich ist.

Beispiele:

{{ imageOnGreyBackground({
  url: 'assets/images/ux-writing/link_light',
  urldark: 'assets/images/ux-writing/link_dark',
  alt: 'Beispiel für einen Link',
  title: 'microcopy link'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>Zu den Konditionen</sbb-link>
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>Dienstleistung und Preise anzeigen</sbb-link>
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>Mehr zu den Leistungen</sbb-link>
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>Weitere Informationen</sbb-link>
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>Mehr anzeigen</sbb-link>
        </div>        
    </div>
    <div class="donts">
       <div class="iconandlabel">
            <sbb-icon name="circle-cross-small"></sbb-icon>
            <div>Unsere Konditionen sind <sbb-link variant="inline">hier</sbb-link> beschrieben</div>
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-cross-small"></sbb-icon>
            <div class="dosndontstext">
            <sbb-link variant="inline">Klicke hier</sbb-link> um mehr über unsere Dienstleistungen und Preise zu erfahren
            </div>
        </div>
        <div class="iconandlabel">
            <sbb-icon name="circle-cross-small"></sbb-icon>
            <sbb-link>Mehr</sbb-link>
        </div>
    </div>    
</div>


