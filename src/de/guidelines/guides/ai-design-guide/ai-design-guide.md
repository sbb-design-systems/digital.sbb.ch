---
layout: page.njk
tags: level3
key: ai_design_grundlagen_de
title: AI Design Guide
parent: guides_de
order: 20
eleventyExcludeFromCollections: false
---

Artificial Intelligence (AI) bietet die Möglichkeit, mehr Ansprüche von Nutzer:innen zu erfüllen als je zuvor. Die individuellen Bedürfnisse und Kontexte bleiben jedoch vielfältig, weshalb es bei der Gestaltung von Interaktionen mit AI keine One‑Fits‑All‑Lösung gibt. Damit das Potenzial von AI von den Nutzer:innen voll ausgeschöpft werden kann, müssen wir die Interaktion bewusst und nutzerzentriert gestalten.
<br>

<sbb-link-list-anchor>
  <sbb-block-link href="/de/guidelines/guides/ai-design-guide/#nutzerzentrierter-ansatz">Nutzerzentrierter Ansatz</sbb-block-link>
  <sbb-block-link href="/de/guidelines/guides/ai-design-guide/#arten-von-ai-und-deren-einsatz">Arten von AI und deren Einsatz</sbb-block-link>
  <sbb-block-link href="/de/guidelines/guides/ai-design-guide/#integration-der-ai-im-system">Integration der AI im System</sbb-block-link>
  <sbb-block-link href="/de/guidelines/guides/ai-design-guide/#automatisierungsgrad">Automatisierungsgrad</sbb-block-link>
  <sbb-block-link href="/de/guidelines/guides/ai-design-guide/#design-patterns">Design Patterns</sbb-block-link>
</sbb-link-list-anchor>

## Nutzerzentrierter Ansatz
Ein nutzerzentrierter Ansatz stellt die Bedürfnisse und Erwartungen der Nutzer:innen in den Mittelpunkt des Designprozesses. Starte mit Nutzerforschung, um zu klären, welche Probleme deine Zielgruppe hat und wie AI diese lösen kann. Erstelle Prototypen, um Interaktionsabläufe sichtbar zu machen, und teste die Designs regelmässig, damit sie den Anforderungen der Nutzer:innen entsprechen.

## Arten von AI und deren Einsatz
Nicht jede AI‑Variante eignet sich für jede Anwendung. Wichtig ist zu verstehen, wann welcher Ansatz sinnvoll ist. Gängige Kategorien sind unter anderem:

*  Regelbasierte Systeme: Geeignet für einfache, wiederkehrende Aufgaben, die durch klare Regeln abgedeckt werden.
*  Klassisches Machine Learning: Machine‑Learning‑Modelle eignen sich für Aufgaben wie E‑Mail‑Klassifikation oder Prognosen. 
*  Deep Learning: Teilbereich des Machine Learning mit neuronalen Netzwerken zur Erkennung von Mustern in grossen Datenmengen. Deep‑Learning‑Modelle eignen sich für komplexere Aufgaben wie Bild‑ und Sprachverarbeitung, Mustererkennung und Generierung von Text oder Bildern. 

Komplexe Modelle (z. B. Deep Learning) erreichen oft höhere Genauigkeit und verarbeiten unstrukturierte Daten automatisiert. Sie benötigen dafür aber viele Daten, hohe Rechenressourcen und sind schwieriger erklärbar und wartbar. Einfachere Algorithmen sind leichter verständlich, schneller und robuster bei kleinen Datenmengen und geringer Rechenleistung, erreichen bei komplexen Aufgaben aber schneller ihre Grenzen. Entscheidend ist ein guter Match zwischen Nutzerbedürfnis und Modell.

## Integration der AI im System
1. **Scope:** Wie viel des Systems wird von AI getragen? Handelt es sich um eine einzelne Komponente, einen Flow, ein Feature, eine Applikation oder eine ganze Plattform?
2. **Raum:** Wie wird die AI im Verhältnis zur Funktionalität präsentiert? Nimmt sie das Zentrum ein oder ist sie nur ein kleines UI‑Element? Ist sie sichtbar oder läuft sie im Hintergrund? Wenn sichtbar: permanent oder nur auf Anfrage? 
3. **Funktionalität:** Wie interagiert die AI mit bestehenden Features? Kann sie auf andere Informationen zugreifen oder ist sie funktional isoliert? Wird das Modell statisch betrieben oder kontinuierlich mit neuen Daten und Schnittstellen angepasst? 

Eine klare Planung dieser Dimensionen hilft, die Rolle der AI im Gesamtsystem zu definieren und zu optimieren. Ergänzend sind Datensicherheit und die entstehenden Kosten (z. B. Lizenz‑ oder Infrastrukturkosten) zu berücksichtigen. Zur Nutzung und Kennzeichnung vom Teilbereich Generative AI findest du zudem Vorgaben auf dem [SBB Markenportal](https://brand.sbb.ch/document/6#/digital/artificial-intelligence). 

## Automatisierungsgrad
Der angemessene Automatisierungsgrad hängt von den Nutzerbedürfnissen und dem Kontext ab. Zu hohe Automatisierung kann dazu führen, dass Fehler unentdeckt bleiben; zu geringe Automation verringert die Effizienz. Wähle den Grad so, dass Nutzen, Risiko und Vertrauen in einem ausgewogenen Verhältnis stehen.

<sbb-table-wrapper>

| Risiko         | Kontrolle hoch | Kontrolle mässig | Kontrolle tief |
|----------------|------------------|----------------|----------------|
| hoch           | **Manuelle Entscheidungsfindung** <br> z.B. AI-gestützte Diagnosesysteme, die von Ärzt:innen überwacht werden müssen| **Teilautomatisierung mit menschlicher Aufsicht**<br>z. B. Betrugserkennung in Finanzprozessen mit manueller Prüfung | **Automatisierte Warnsysteme**<br>z.B. Alarmanlagen, die automatisierte Warnungen senden |
| mässig         | **Teilautomatisierung mit Kontrolle** <br>z. B. Kundenservice‑Chatbots mit Übergabemöglichkeit an menschliche Agent:innen | **Automatisierte Prozesse mit sporadischer Überprüfung** <br> z. B. Marketing‑Kampagnen mit regelmässiger Erfolgskontrolle | **Hohe Automatisierung** <br> z.B. Empfehlungsalgorithmen |  
| tief           | **Manuelle Routineaufgaben** <br> z. B. einfache Formular‑Eingaben oder -Prüfungen | **Teilautomatisierung** <br> z.B. wöchentliche Verkaufsberichte, die automatisch generiert werden | **Vollautomatisierte Systeme** <br> z.B. automatisierte Beiträge auf Social-Media-Plattformen |                                              


{.sbb-table}

</sbb-table-wrapper>


## Design Patterns
Bei der Gestaltung von AI‑Systemen haben sich bewährte Designlösungen etabliert, die helfen, konsistente und benutzerfreundliche Anwendungen zu schaffen. Sieh dir dazu unsere [Patterns](/de/design-system/patternlibrary/overview/) an. 