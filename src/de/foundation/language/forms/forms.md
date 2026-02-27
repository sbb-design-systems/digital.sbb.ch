---
layout: page.njk
tags: level3
key: forms_de
title: Formulare und Eingaben
parent: language_de
order: 4
---

Formulare und Eingaben nutzen Labels, Hinweise und Platzhalter, um Nutzer:innen zu zeigen, wie Felder korrekt ausgefüllt werden. 
Ihr Ziel ist es, Erwartungen klar zu machen, Fehler zu vermeiden und die Eingabe so einfach und sicher wie möglich zu gestalten.

## Input Labels

Input Labels benennen klar, was eingegeben werden soll. Sie schaffen Orientierung und reduzieren Unsicherheit.

### Empfehlungen: 
* **Sei klar.** Verwende präzise Labels, die den Zweck des Feldes eindeutig beschreiben.
* **Erkläre bei Bedarf.** Wenn zusätzliche Informationen für das Verständnis nötig sind, platziere diese in einem Info-Popover. 

#### Beispiele

<sbb-form-field error-space="none" size="m" width="default">
    <label>Ort</label>
    <input class="" placeholder="Stadt, Bahnhof, ..." value="">

</sbb-form-field>

<sbb-form-field error-space="none" size="m" width="default">
    <label>Kundennummer</label>
    <input class="" placeholder="123-456-789-1" value="">
    <sbb-icon slot="suffix" name="circle-information-small"></sbb-icon>
</sbb-form-field>

</br>

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Strasse und Nummer</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Hausnummer</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Nummer</div>
    </div>    
</div>

## Placeholder

Placeholders geben Hinweise zur Eingabe und helfen, Erwartungen zu setzen.

### Empfehlungen:

* **Zeig Beispiele.** Nutze Placeholder, um das gewünschte Format oder Beispielwerte zu zeigen und Eingabefehler zu vermeiden.
* **Kein Ersatz.** Placeholders ersetzen kein Label, sie dienen nur als ergänzender Hinweis.

#### Beispiele

<sbb-form-field error-space="none" size="m" width="default">
    <sbb-icon slot="prefix" name="magnifying-glass-small"></sbb-icon>
    <input class="" placeholder="Suchbegriff eingeben" value="">
    
</sbb-form-field>

<sbb-form-field error-space="none" size="m" width="default">
    <label>System</label>
    <select class="" placeholder="Bitte wählen">
        <option value="0"></option>
    </select>
</sbb-form-field>

</br>

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