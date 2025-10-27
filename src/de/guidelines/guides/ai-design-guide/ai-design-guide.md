---
layout: page.njk
tags: level3
key: ai_design_grundlagen_de
title: "AI Design: Grundlagen"
parent: guides_de
order: 20
eleventyExcludeFromCollections: false
---

Artificial Intelligence (AI) bietet die Möglichkeit, mehr Anforderungen von Nutzer:innen zu erfüllen als je zuvor. Die individuellen Bedürfnisse und Kontexte bleiben jedoch vielfältig, weshalb es bei der Gestaltung von Interaktionen mit AI keine “One‑fits‑all‑Lösung” gibt. Damit das Potenzial von AI von den Nutzer:innen voll ausgeschöpft werden kann, müssen wir die Interaktion bewusst und nutzerzentriert gestalten. Dabei gelten auch hier unsere [Gestaltungsprinzipien](/de/principles/ux-principles/overview/).
<br>

<sbb-link-list-anchor>
  <sbb-block-link href="/de/guidelines/guides/ai-design-guide/#integration-der-ai-im-system">Integration der AI im System</sbb-block-link>
  <sbb-block-link href="/de/guidelines/guides/ai-design-guide/#herausforderungen-für-nutzende">Herausforderungen für Nutzende</sbb-block-link>
  <sbb-block-link href="/de/guidelines/guides/ai-design-guide/#augmentation-vs.-automation">Augmentation vs. Automation</sbb-block-link>
  <sbb-block-link href="/de/guidelines/guides/ai-design-guide/#design-patterns">Design Patterns</sbb-block-link>
</sbb-link-list-anchor>

## Integration der AI im System
Wenn wir den Kund:innen oder Mitarbeitenden eine AI zur Verfügung stellen wollen, müssen wir uns Gedanken über die Rolle der AI im System machen. Dabei helfen folgende Dimensionen:

1. **Scope:** Wie viel des Systems wird von AI getragen? Handelt es sich um eine einzelne Komponente, einen Flow, ein Feature, eine Applikation oder eine ganze Plattform?

2. **Raum:** Wie wird die AI im Verhältnis zur Funktionalität präsentiert? Nimmt sie das Zentrum ein oder ist sie nur ein kleines UI‑Element? Ist sie sichtbar oder läuft sie im Hintergrund? Wenn sichtbar: permanent oder nur auf Anfrage?
3. **Funktionalität:** Wie interagiert die AI mit bestehenden Funktionen? Kann sie auf andere Informationen zugreifen oder ist sie funktional isoliert? Wird das Modell statisch betrieben oder kontinuierlich mit neuen Daten und Schnittstellen angepasst? 

Eine klare Planung dieser Dimensionen hilft, die User Experience für Kund:innen oder Mitarbeitende bestmöglich zu gestalten. <br>

Bei der Gestaltung sind neben den UX-Themen natürlich auch weitere Aspekte zentral, wie z.B. das Markenerlebnis und der Datenschutz und die Datensicherheit. Letztere werden durch interne Vorgaben und externe Gesetze geregelt. Zur Nutzung und Kennzeichnung des Teilbereichs Generative AI findest du zudem Vorgaben auf dem [SBB Markenportal](https://brand.sbb.ch/document/6#/digital/artificial-intelligence). 


## Herausforderungen für Nutzende
Es gibt unterschiedliche Arten von AI-Systemen (z. B. Large Language Models (LLMs), Machine Learning, Reinforcement Learning, ...). Sie eignen sich für unterschiedliche, komplexe Anwendungszwecke, wie z. B. die Musterkennung und das Generieren von Text, Bild und Sprache oder das Vorhersagen von Ereignissen. Während die AI-Systeme viele Möglichkeiten bieten, bringen sie aber auch Herausforderungen für die Nutzenden mit sich: 
* Transparenz und Erklärbarkeit: Die Funktionsweise ist für Nutzende nicht einfach nachvollziehbar und es wird deshalb gerne von einer Black Box gesprochen. Die Gestaltung der Erklärbarkeit, d.h. warum ein System welchen Vorschlag macht, ist zentral für eine erfolgreiche Nutzung.
* Probabilistische und Selbstlernende AI-Systeme:  AI-Systeme antworten basierend auf Wahrscheinlichkeiten. AI Systeme nutzen Feedback durch Nutzung, um sich selbst zu optimieren. Das führt dazu, dass sie nicht immer die gleiche Antwort geben und sich über die Zeit ändern.
* Fehler, z. B. Halluzinationen: Die Ergebnisse sind nicht immer korrekt und müssen geprüft werden. 

Zentral für uns ist also, wie wir die Interaktion zwischen Mensch und AI-System so gestalten, dass die Kund:innen oder Mitarbeitenden ihre Ziele erreichen und auch ein angemessenes Vertrauen in die Ergebnisse der AI haben.


## Augmentation vs. Automation 
AI kann gerade bei monotonen Routineaufgaben Mehrwert bringen, indem sie die Arbeit der Menschen übernimmt und autonom ausführt (Automation) und somit die Effizienz steigert. Da aber auch die AI Fehler (siehe oben) macht, ist es wichtig bei komplexen, unsicheren oder verantwortungsintensiven Kontexten die Entscheidung einem Menschen zu überlassen. In diesen Fällen kann die AI den Menschen unterstützen (Augmentation) mittels Empfehlungen und Vorschlägen. Diese sollen für den Menschen verständlich und nachvollziehbar sein und von ihm beeinflusst oder übersteuert werden können. Grundsätzlich gilt: Je höher Risiko und Unsicherheit, desto eher Augmentation; bei niedrigem Risiko und gut definierten Aufgaben eher Automation.

Tatsächlich sind viele reale Systeme Hybride: Mensch-in-the-loop (MITL) für kritische Entscheidungen, Mensch-on-the-loop (MOTL) für Überwachung, Human-in-command für strategische Kontrolle. 

In der Praxis lohnt sich häufig ein iterativer Ansatz: Mit Augmentation starten, und dann langsam, selektiv automatisieren, wenn Vertrauen und Performance stimmen.


## Design Patterns
Bei der Gestaltung von AI‑Systemen haben sich bewährte Designlösungen etabliert, die helfen, konsistente und benutzerfreundliche Anwendungen zu schaffen. Sieh dir dazu unsere [Patterns](/de/design-system/patternlibrary/overview/) an. 