---
layout: page.njk
tags: level3
key: button_and_links_de
title: Button- und Linktexte
parent: language_de
order: 2
---

Button- und Linktexte sind kurze, handlungsorientierte Beschriftungen.
Ihr Ziel ist es, Nutzer:innen mit möglichst wenigen Worten zu führen, Unsicherheiten zu reduzieren und Entscheidungen zu erleichtern.{.lead}

## Buttons

Buttons sind Handlungs-Trigger, keine Erklärflächen. Sie machen auf einen Blick klar, welche Aktion beim Klick ausgeführt wird.

### Empfehlungen: 

* **Sei klar.** Verwende ein Verb oder eine eindeutige Navigationsangabe (z. B. „Zu Einstellungen“), damit die Aktion sofort verständlich ist.

* **Verwende 1–3 Wörter.** Buttons werden gescannt, nicht gelesen. Kurze Labels helfen, Aktionen schnell zu erkennen und zwischen mehreren Buttons leichter zu unterscheiden.

* **Erkläre nicht im Button.** Wenn Zusatzinformationen für das Verständnis nötig sind, platziere sie ober-/unterhalb des Buttons oder in einem Tooltip. 

#### Beispiele:

</br>

<sbb-action-group orientation="horizontal" size="s">
    <sbb-button size="s">Speichern</sbb-button>
    <sbb-secondary-button size="s">Zur Übersicht</sbb-secondary-button>
</sbb-action-group>

</br>

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Speichern</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Zur Jahresplanung</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Erneut einladen</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Geldwechsel erfassen</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Meldung anzeigen</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Synchronisieren</div>
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

### Empfehlungen

* **Sprechende Links.** Nutze klare Formulierungen, so dass ein Link auch ohne umgebenden Text verständlich ist.

#### Beispiele

<sbb-link>Dienstleistungen und Preise anzeigen</sbb-link>

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small">
            </sbb-icon>Unsere Konditionen sind beschrieben.
            <sbb-link>Konditionen lesen</sbb-link>
        </div>
        </br>
         <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>Dienstleistung und Preise anzeigen</sbb-link>
        </div>
    </div>
    <div class="donts">
       <div class="iconandlabel">
            <sbb-icon name="circle-cross-small"></sbb-icon>Unsere Konditionen sind
            <sbb-link>hier</sbb-link> beschrieben
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-cross-small"></sbb-icon>
            <sbb-link>Klicke hier</sbb-link> um mehr über unsere Dienstleistungen und Preise zu erfahren
        </div>
        <div class="iconandlabel">
            <sbb-icon name="circle-cross-small"></sbb-icon>
            <sbb-link>Mehr</sbb-link>
        </div>
    </div>    
</div>


## Weitere Empfehlungen

Für diese Elemente gibt es zusätzliche Empfehlungen:

- <sbb-link href="/{{page.lang}}/foundation/language/about">UX-Writing und Microcopy </sbb-link>
- <sbb-link href="/{{page.lang}}/foundation/language/notifications">Benachrichtigungen</sbb-link>
- <sbb-link href="/{{page.lang}}/foundation/language/forms">Formulare und Eingaben</sbb-link>
- <sbb-link href="/{{page.lang}}/foundation/language/progress-indicator">Fortschrittsanzeige</sbb-link>

### Weitere Hilfsmittel
Viele Wörter sagen das gleiche. Die Digitale Wörterliste hilft dir bei der Entscheidung, welchen Begriff du wann verwendest.

<sbb-secondary-button icon-name="clipboard-list-small" href="/{{page.lang}}/foundation/language/digital-wordlist"> Digitale Wörterliste</sbb-secondary-button>