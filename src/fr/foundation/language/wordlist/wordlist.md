---
layout: page.njk
tags: level3
key: wordlist_fr
title: Liste de mots numérique
parent: language_fr
order: 6
---

De nombreux mots sont similaires ou signifient la même chose dans la vie quotidienne, mais ne conviennent pas toujours aussi bien dans chaque contexte. La liste de mots numérique aide à décider quel mot convient le mieux dans quel contexte.

Certains termes suggèrent un résultat similaire mais créent une attente différente, par exemple «Supprimer» et «Désactiver». «Désactiver» implique souvent une restauration ultérieure, tandis que «Supprimer» est définitif.

D'autres termes sont des synonymes pratiquement interchangeables sur le fond, par exemple «Soumettre» et «Envoyer». Dans ces cas, nous définissons un terme recommandé afin d'assurer la cohérence entre les différentes applications.

<sbb-notification readonly>
  <sbb-title level="3">Remarque sur l'utilisation</sbb-title>
  La liste de mots numérique est destinée à t'aider à déterminer quels termes sont préférés dans quel contexte. Ce ne sont pas des règles contraignantes. Selon le contexte, il est possible de s'écarter délibérément de la recommandation.
</sbb-notification>

</br>

<sbb-container color="milk" expanded="" class="wordlist-fr">
    <sbb-title level="3">Aperçu des termes</sbb-title>
    <div class="wordlist-search">
        <sbb-form-field style="width: 100%;">
            <sbb-icon slot="prefix" name="magnifying-glass-small"></sbb-icon>
            <input type="text" id="search" placeholder="Saisir un terme de recherche" autocomplete="off" />
        </sbb-form-field>
        <p class="sbb-text-s">Les termes sont classés par ordre alphabétique.</p>
        <span id="result-count"></span>
    </div>  
    <sbb-table-wrapper class="wordlist-table">
        <table class="sbb-table">
            <thead>
                <tr>
                <th scope="col" class="" style="">Terme recommandé</th>
                <th scope="col" class="" style="">Alternative(s) / termes similaires</th>
                <th scope="col" class="" style="">Remarque</th>
                </tr>
            </thead>
            <tbody id="table-body">
            </tbody>
        </table>
    </sbb-table-wrapper>
</sbb-container>



<script src="../../../../assets/js/wordlist.js"></script>
<script src="../../../../assets/js/wordlist-search.js"></script>
