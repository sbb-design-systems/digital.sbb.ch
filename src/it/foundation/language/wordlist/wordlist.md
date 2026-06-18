---
layout: page.njk
tags: level3
key: wordlist_it
title: Glossario digitale
alternativetitle: Glossario digitale.
parent: language_it
order: 6

availablelanguages: 
    - de
    - fr
    - en
---


Molte parole sono simili o significano la stessa cosa nella vita quotidiana, ma non sempre si adattano ugualmente bene a ogni contesto. Il glossario digitale aiuta a decidere quale parola sia più adatta a seconda della situazione.

Alcuni termini suggeriscono un risultato simile, ma creano aspettative diverse, ad esempio «Eliminare» e «Disattivare». «Disattivare» implica spesso un ripristino successivo, mentre «Eliminare» è definitivo.

Altri termini sono sinonimi praticamente intercambiabili nel contenuto, ad esempio «Inviare» e «Spedire». In questi casi, indichiamo un termine consigliato per garantire coerenza tra le diverse applicazioni.

<sbb-notification readonly>
  <sbb-title level="3">Nota sull'utilizzo.</sbb-title>
    Il glossario digitale ha lo scopo di supportarti nella scelta dei termini preferiti in base al contesto. Non si tratta di regole vincolanti. A seconda del contesto, è possibile discostarsi consapevolmente dalla raccomandazione.
</sbb-notification>

</br>

<sbb-container color="milk" expanded="" class="wordlist-it">
    <sbb-title level="3">Panoramica dei termini</sbb-title>
    <div class="wordlist-search">
        <sbb-form-field style="width: 100%;">
            <sbb-icon slot="prefix" name="magnifying-glass-small"></sbb-icon>
            <input type="text" id="search" placeholder="Inserisci un termine di ricerca" autocomplete="off" />
        </sbb-form-field>
        <p class="sbb-text-s">I termini sono ordinati in ordine alfabetico.</p>
        <span id="result-count"></span>
    </div>  
    <sbb-table-wrapper class="wordlist-table">
        <table class="sbb-table">
            <thead>
                <tr>
                <th scope="col" class="" style="">Termine consigliato</th>
                <th scope="col" class="" style="">Alternativa/e / termini simili</th>
                <th scope="col" class="" style="">Nota</th>
                </tr>
            </thead>
            <tbody id="table-body">
            </tbody>
        </table>
    </sbb-table-wrapper>
</sbb-container>



<script src="../../../../assets/js/wordlist.js"></script>
<script src="../../../../assets/js/wordlist-search.js"></script>
