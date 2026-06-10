---
layout: page.njk
tags: level3
key: wordlist_fr
title: Liste de mots numériques
alternativetitle: Liste de mots numériques.
parent: language_fr
order: 6
---

De nombreux mots se ressemblent ou signifient la même chose au quotidien, mais ils ne conviennent pas toujours de la même manière dans tous les contextes. La liste de mots numériques aide à décider quel mot convient le mieux à quel moment.

Certains termes suggèrent un résultat similaire mais génèrent une attente différente, par exemple «Supprimer» et «Désactiver». «Désactiver» implique souvent une restauration ultérieure, tandis que «Supprimer» est définitif.

D'autres termes sont des synonymes interchangeables, par exemple «Soumettre» et «Envoyer». Dans ces cas, nous définissons un terme recommandé afin d'assurer la cohérence entre les différentes applications.

<sbb-notification readonly>
  <sbb-title level="3">Remarque sur l'utilisation.</sbb-title>
  La liste de mots numérique est destinée à t'aider à choisir les termes à privilégier selon le contexte. Ce ne sont pas des règles contraignantes. En fonction du contexte, il est possible de déroger délibérément aux recommandations.
</sbb-notification>

</br>

<sbb-container color="milk" expanded="" class="wordlist-fr">
    <sbb-title level="3">Liste des termes.</sbb-title>
    <div class="wordlist-search">
        <sbb-form-field style="width: 100%;">
            <sbb-icon slot="prefix" name="magnifying-glass-small"></sbb-icon>
            <input type="text" id="search" placeholder="Saisir le terme recherché" autocomplete="off" />
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
