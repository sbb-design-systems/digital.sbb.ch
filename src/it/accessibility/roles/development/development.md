---
layout: page.njk
tags: page
key: development_it
title: Development
parent: roles_it
order: 5
---

Du sviluppi il prodotto.

## <sbb-icon name="circle-tick-medium"></sbb-icon> Utilizza elementi corretti dal punto di vista semantico{.with-icon}
Utilizza sempre elementi semanticamente corretti per supportare al meglio le tecnologie assistive. Contrassegna quindi i titoli in tutti i livelli, elenchi, tabelle ecc. con gli elementi pertinenti e utilizza il linguaggio corretto per il tuo documento.

Aiuto per la semantica corretta: <sbb-link variant="inline" type="button" target="_blank" href="https://www.accessibility-developer-guide.com/examples ">https://www.accessibility-developer-guide.com/examples</sbb-link>

Riferimento 1: <sbb-link variant="inline" type="button" target="_blank" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">https://www.w3.org/TR/WCAG21/#info-and-relationships</sbb-link>
Riferimento 2: <sbb-link variant="inline" type="button" target="_blank" href="https://www.w3.org/TR/WCAG21/#language-of-page">https://www.w3.org/TR/WCAG21/#language-of-page</sbb-link>

## <sbb-icon name="circle-tick-medium"></sbb-icon> Utilizza elementi standard{.with-icon}
Gli elementi nativi consentono di evitare problemi sia in HTML, sia nelle app per cellulari. Gli elementi sono già ottimizzati in termini di accessibilità senza barriere, altrimenti il loro comportamento completo deve essere configurato a posteriori. Segnalalo anche al tuo designer se insiste su un punto specifico.  

Guida per gli elementi non nativi tipici: <sbb-link variant="inline" type="button" target="_blank" href="https://inclusive-components.design">https://inclusive-components.design</sbb-link>

Riferimento: <sbb-link variant="inline" type="button" target="_blank" href="https://www.w3.org/TR/WCAG21/#name-role-value">https://www.w3.org/TR/WCAG21/#name-role-value</sbb-link>

## <sbb-icon name="circle-tick-medium"></sbb-icon> Cura sempre la linearizzazione corretta{.with-icon}
Verifica non solo che tutti i contenuti siano ordinati in maniera funzionale da un punto di vista visivo ma che anche il codice tenga conto di questo aspetto. Cerca di rendere tutto comprensibile per qualcuno che navighi nel documento dall’alto verso il basso senza styling.  

In fase di test: disattiva il CSS nel browser o utilizza il lettore di schermo sul dispositivo mobile.  

Riferimento: <sbb-link variant="inline" type="button" target="_blank" href="https://www.w3.org/TR/WCAG21/#meaningful-sequence">https://www.w3.org/TR/WCAG21/#meaningful-sequence</sbb-link>

## <sbb-icon name="circle-tick-medium"></sbb-icon> Facilita l’orientamento{.with-icon}
Integra skip link all’inizio di una pagina e utilizza diversi elementi landmark. Questi due strumenti consentono soprattutto alle utenti e agli utenti con schermo di saltare comodamente e direttamente alle diverse sezioni dei contenuti.  

Guida sugli skip link: <sbb-link variant="inline" type="button" target="_blank" href="https://webaim.org/techniques/skipnav">https://webaim.org/techniques/skipnav</sbb-link>
Panoramica degli elementi landmark: <sbb-link variant="inline" type="button" target="_blank" href="https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/">https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/</sbb-link>

Riferimento: <sbb-link variant="inline" type="button" target="_blank" href="https://www.w3.org/TR/WCAG21/#bypass-blocks">https://www.w3.org/TR/WCAG21/#bypass-blocks</sbb-link>