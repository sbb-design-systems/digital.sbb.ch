---
layout: page.njk
tags: level3
key: wordlist_de
title: Digitale Wörterliste
parent: language_de
order: 6
---

Viele Wörter sind ähnlich oder bedeuten im Alltag dasselbe, passen aber nicht immer in jedem Kontext gleich gut. Die Digitale Wörterliste hilft dabei, zu entscheiden, welches Wort wann am besten passt.

Manche Begriffe sind kontextabhängige Synonyme die ähnlich verwendet werden aber andere Erwartungen erzeugen. Zum Beispiel «Löschen» und «Deaktivieren». «Deaktivieren» impliziert oft eine spätere Wiederherstellung, während «Löschen» endgültig ist.

Andere Begriffe sind Synonyme, die inhaltlich praktisch austauschbar sind – z. B. «Absenden» und «Senden». In diesen Fällen geben wir einen empfohlenen Begriff vor, um über verschiedene Applikationen hinweg Konsistenz zu erreichen.

<br>

<sbb-notification readonly>
  <sbb-title level="3">Hinweis zur Verwendung</sbb-title>
  Die Digitale Wörterliste soll dich unterstützten, welche Begriffe in welchem Kontext bevorzugt verwendet werden können. Es sind keine verbindlichen Regeln. Je nach Kontext kann bewusst von der Empfehlung abgewichen werden.
</sbb-notification>

## Begriffsübersicht

<sbb-container class="--sbb-page-spacing-padding" color="milk" corner-radius="16px;">
    <sbb-form-field style="width: 100%;">
        <sbb-icon slot="prefix" name="magnifying-glass-small"></sbb-icon>
        <input type="text" id="search" placeholder="Suchbegriff eingeben" autocomplete="off" />
    </sbb-form-field>
    </br>
    Die Begriffe sind alphabetisch sortiert.
    <!--<span id="result-count"></span>-->    
    <sbb-table-wrapper style="height: 75vh">
        <table class="sbb-table">
            <thead>
                <tr>
                <th scope="col" class="" style="">Begriff</th>
                <th scope="col" class="" style="">Alternative</th>
                <th scope="col" class="" style="">Hinweis</th>
                </tr>
            </thead>
            <tbody id="table-body">
            </tbody>
        </table>
    </sbb-table-wrapper>
</sbb-container>



<script src="../../../../assets/js/wordlist.js"></script>
<script src="../../../../assets/js/wordlist-search.js"></script>
