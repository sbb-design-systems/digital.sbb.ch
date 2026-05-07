---
layout: page.njk
tags: level3
key: wordlist_en
title: Digital Wordlist
parent: language_en
order: 6
---

Many words are similar or mean the same thing in everyday usage, but do not always fit equally well in every context. The digital word list helps to decide which word best fits a given context.

Some terms suggest a similar outcome but create different expectations — for example “Delete” and “Deactivate”. “Deactivate” often implies a future restoration, while “Delete” is permanent.

Other terms are synonyms that are practically interchangeable in meaning — for example “Submit” and “Send”. In these cases, we specify a recommended term in order to achieve consistency across different applications.

<sbb-notification readonly>
  <sbb-title level="3">Note on Usage</sbb-title>
  The digital word list is intended to help you decide which terms are preferred in which context. These are not binding rules. Depending on the context, you may deliberately deviate from the recommendation.
</sbb-notification>

</br>

<sbb-container color="milk" expanded="" class="wordlist-en">
    <sbb-title level="3">Glossary</sbb-title>
    <div class="wordlist-search">
        <sbb-form-field style="width: 100%;">
            <sbb-icon slot="prefix" name="magnifying-glass-small"></sbb-icon>
            <input type="text" id="search" placeholder="Enter search term" autocomplete="off" />
        </sbb-form-field>
        <p class="sbb-text-s">The terms are sorted alphabetically.</p>
        <span id="result-count"></span>
    </div>  
    <sbb-table-wrapper class="wordlist-table">
        <table class="sbb-table">
            <thead>
                <tr>
                <th scope="col" class="" style="">Recommended term</th>
                <th scope="col" class="" style="">Alternative(s) / similar terms</th>
                <th scope="col" class="" style="">Note</th>
                </tr>
            </thead>
            <tbody id="table-body">
            </tbody>
        </table>
    </sbb-table-wrapper>
</sbb-container>



<script src="../../../../assets/js/wordlist.js"></script>
<script src="../../../../assets/js/wordlist-search.js"></script>
