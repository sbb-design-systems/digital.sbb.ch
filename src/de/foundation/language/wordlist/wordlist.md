---
layout: page.njk
tags: level3
key: wordlist_de
title: Digitale Wörterliste
parent: language_de
order: 6
---

Viele Wörter sind ähnlich oder bedeuten im Alltag dasselbe, passen aber nicht immer in jedem Kontext gleich gut. Die digitale Wörterliste hilft dabei, zu entscheiden, welches Wort wann am besten passt.

Manche Begriffe suggerieren ein ähnliches Ergebnis, erzeugen aber eine andere Erwartung, zum Beispiel «Löschen» und «Deaktivieren». «Deaktivieren» impliziert oft eine spätere Wiederherstellung, während «Löschen» endgültig ist.

Andere Begriffe sind Synonyme, die inhaltlich praktisch austauschbar sind, zum Beispiel «Absenden» und «Senden». In diesen Fällen geben wir einen empfohlenen Begriff vor, um über verschiedene Applikationen hinweg Konsistenz zu erreichen.

<sbb-notification readonly>
  <sbb-title level="3">Hinweis zur Verwendung</sbb-title>
  Die digitale Wörterliste soll dich unterstützen, welche Begriffe in welchem Kontext bevorzugt werden. Es sind keine verbindlichen Regeln. Je nach Kontext kann bewusst von der Empfehlung abgewichen werden.
</sbb-notification>

</br>

<sbb-container color="milk" expanded="" class="wordlist">
    <sbb-title level="3">Begriffsübersicht</sbb-title>
    <div class="wordlist-search">
        <sbb-form-field style="width: 100%;">
            <sbb-icon slot="prefix" name="magnifying-glass-small"></sbb-icon>
            <input type="text" id="search" placeholder="Suchbegriff eingeben" autocomplete="off" />
        </sbb-form-field>
        <p class="sbb-text-s">Die Begriffe sind alphabetisch sortiert.</p>
        <span id="result-count"></span>
    </div>  
    <sbb-table-wrapper class="wordlist-table">
        <table class="sbb-table">
            <thead>
                <tr>
                <th scope="col" class="" style="">Empfohlener Begriff</th>
                <th scope="col" class="" style="">Alternative(n) / ähnliche Begriffe</th>
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
