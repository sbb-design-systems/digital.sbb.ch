---
layout: page.njk
tags: level3
key: ai_design_grundlagen_it
title: "IA Design : Base."
parent: guides_it
order: 20
eleventyExcludeFromCollections: false
---

L'intelligenza artificiale (IA) permette di rispondere più che mai alle esigenze delle utilizzatrici e degli utilizzatori. I bisogni e i contesti individuali rimangono tuttavia vari, motivo per cui non esiste una "soluzione universale" per progettare le interazioni con l'IA. Affinché le utilizzatrici e gli utilizzatori possano sfruttare appieno il potenziale dell'IA, dobbiamo progettare l'interazione in modo consapevole e centrato sulla persona. Anche qui si applicano i nostri [principi di design](/it/principles/ux-principles/overview).
<br>

<sbb-link-list-anchor>
  <sbb-block-link href="/it/guidelines/guides/ai-design-guide/#integrazione-dell'ia-nel-sistema">Integrazione dell'IA nel sistema</sbb-block-link>
  <sbb-block-link href="/it/guidelines/guides/ai-design-guide/#sfide-per-le-utilizzatrici-e-gli-utilizzatori">Sfide per le utilizzatrici e gli utilizzatori</sbb-block-link>
  <sbb-block-link href="/it/guidelines/guides/ai-design-guide/#aumento-vs.-automazione">Aumento vs. automazione</sbb-block-link>
  <sbb-block-link href="/it/guidelines/guides/ai-design-guide/#design-patterns">Design patterns</sbb-block-link>
</sbb-link-list-anchor>


## Integrazione dell'IA nel sistema
Se desideriamo mettere un'IA a disposizione della nostra clientela o del nostro personale, dobbiamo riflettere sul ruolo dell'IA nel sistema. Le seguenti dimensioni ci aiutano in questo:

1. **Portata:** Quale parte del sistema è supportata dall'IA? Si tratta di un componente isolato, di un flusso, di una funzionalità, di un'applicazione o di un'intera piattaforma?

2. **Spazio:** Come viene presentata l'IA rispetto alla funzionalità? Occupa il centro o è solo un piccolo elemento d'interfaccia? È visibile o funziona in background? Se visibile: permanentemente o solo su richiesta?

3. **Funzionalità:** Come interagisce l'IA con le funzioni esistenti? Può accedere ad altre informazioni o è funzionalmente isolata? Il modello viene eseguito in modo statico o viene continuamente adattato con nuovi dati e interfacce?

Una pianificazione chiara di queste dimensioni aiuta a progettare al meglio l'esperienza utente per la clientela o il personale.

Oltre all'esperienza utente, altri aspetti rivestono naturalmente grande importanza nella progettazione, come l'esperienza del marchio, la protezione e la sicurezza dei dati. Questi ultimi sono regolati da direttive interne e leggi esterne. Trovi inoltre direttive relative all'utilizzo e alla segnaletica del sottodominio dell'IA generativa sul [portale della marca FFS](https://brand.sbb.ch/document/6#/it#/digital/artificial-intelligence).


## Sfide per le utilizzatrici e gli utilizzatori
Esistono diversi tipi di sistemi di IA (ad es. Large Language Models [LLM], Machine Learning, Reinforcement Learning, ecc.). Possono essere utilizzati per scopi diversi e complessi, come il riconoscimento di modelli e la generazione di testo, immagini e linguaggi o la previsione di eventi. Se i sistemi di IA offrono molte possibilità, presentano anche numerose sfide per le utilizzatrici e gli utilizzatori:
* Trasparenza e spiegabilità: Il funzionamento non è facile da comprendere per le utilizzatrici e gli utilizzatori, motivo per cui si parla volentieri di "scatola nera". La spiegabilità, cioè il motivo per cui un sistema fa una determinata proposta, è essenziale per un utilizzo riuscito.
* Sistemi di IA probabilistici e auto-apprendenti: I sistemi di IA rispondono sulla base di probabilità. I sistemi di IA utilizzano il feedback proveniente dall'uso per ottimizzarsi. Di conseguenza, non danno sempre la stessa risposta e cambiano nel tempo.
* Errori, ad esempio le allucinazioni: I risultati non sono sempre corretti e devono essere verificati.

Ciò che è essenziale per noi è quindi sapere come progettare l'interazione tra l'essere umano e il sistema di IA in modo che i clienti o il personale raggiungano i loro obiettivi e abbiano una fiducia appropriata nei risultati dell'IA.


## Aumento vs. automazione
L'IA può apportare un valore aggiunto, in particolare per i compiti di routine monotoni, assumendo il lavoro delle persone ed eseguendolo in modo autonomo (automazione), aumentando così l'efficienza. Ma poiché anche l'IA commette errori (vedi sopra), è importante lasciare la decisione a un essere umano in contesti complessi, incerti o che richiedono una certa responsabilità. In questo caso, l'IA può supportare l'essere umano (aumento) attraverso raccomandazioni e proposte. Queste devono essere comprensibili per l'essere umano e poter essere influenzate o neutralizzate. Il principio è il seguente: più il rischio e l'incertezza sono elevati, più c'è aumento. In caso di rischio basso e compiti ben definiti, c'è maggiore automazione.

In realtà, molti sistemi sono ibridi: human-in-the-loop (HITL) per le decisioni critiche, human-on-the-loop (HOTL) per la sorveglianza, human-in-command per il controllo strategico.

In pratica, un approccio iterativo è spesso utile: iniziare con l'aumento, poi automatizzare lentamente e in modo selettivo quando la fiducia e le prestazioni sono buone.


## Design patterns
Nell'ambito della progettazione di sistemi di IA, si sono affermate soluzioni di progettazione collaudate che contribuiscono a creare applicazioni coerenti e facili da usare. Per saperne di più, consulta i nostri  [patterns](/it/design-system/patternlibrary/overview/). 