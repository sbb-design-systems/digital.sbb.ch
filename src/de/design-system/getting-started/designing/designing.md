---
layout: page.njk
tags: level3
key: designing_de
title: Designing
parent: getting-started_de
order: 2
---


## Checkliste 
– <sbb-link variant="inline" type="button" href="#variant">Welche Ausprägung passt zu meinem Projekt?</sbb-link>
– <sbb-link variant="inline" type="button" href="#figma-space">Zugriff auf Figma Space der SBB</sbb-link>
– <sbb-link variant="inline" type="button" href="#install-libraries">Installieren der benötigten Libraries</sbb-link>
– <sbb-link variant="inline" type="button" href="#duplicate-template">Projekt-Template duplizieren</sbb-link>
– <sbb-link variant="inline" type="button" href="#enter-community">MS-Team Community beitreten</sbb-link>
– <sbb-link variant="inline" type="button" href="#use-components">Komponenten durchstöbern, verstehen, verwenden</sbb-link>
– <sbb-link variant="inline" type="button" href="#community-assets">Community-Assets durchstöbern</sbb-link>

<a id="variant"></a>

### Welche Ausprägung (Mobile / Lean / Web / Lyne) passt zu meinem Projekt? 

<sbb-table-wrapper>

| In meinen Projekt wird eine...                                           | Diese Ausprägung passt zu Dir        | ab ca. Herbst 2024                                                                                                                                                                               |
|--------------------------------------------------------------------------|--------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ... Web-Applikation für **unsere Mitarbeiter** erarbeitet.               | <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/overview/">Lean</sbb-link>| <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lyne/overview/">Lyne</sbb-link>|
| ... interne Mobile-App für **unsere Mitarbeiter** erarbeitet.            | <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/mobile/overview/">Mobile</sbb-link>| <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/mobile/overview/">Mobile</sbb-link> oder <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lyne/overview/">Lyne</sbb-link>|
| ... native Mobile-App für **unsere Kunden** erarbeitet.                  | <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/mobile/overview/">Mobile</sbb-link>| <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/mobile/overview/">Mobile</sbb-link>|
| ... neue Webseite/Microsite für **unsere Kunden** erarbeitet.            | <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lyne/overview/">Lyne</sbb-link> | <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lyne/overview/">Lyne</sbb-link>|
| ... bestehende Webseite/Microsite für **unsere Kunden** weiterentwickelt.| <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/legacy/overview/">Web (Legacy)</sbb-link>| <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/legacy/overview/">Web (Legacy)</sbb-link>|
| ... interne Web-Applikation sowie eine native Mobile-App entwickelt.             | <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/overview/">Lean</sbb-link> & <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/mobile/overview/">Mobile</sbb-link>| <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lyne/overview/">Lyne</sbb-link> & <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/mobile/overview/">Mobile</sbb-link>|


{.sbb-table}

</sbb-table-wrapper>

<a id="figma-space"></a>

### Zugriff auf Figma Space der SBB 
Zugriff erhalten nur interne Mitarbeiter sowie externe Mitarbeiter mit einer SBB-Mail-Adresse. 
Um Designs zu erstellen oder zu editieren benötigst du Edit-Rechte, bzw. eine Figma-Lizenz. Die Kosten für diese Lizenz trägst du, bzw. dein Projekt. Wir benötigen ein PSP-Element um dich freizuschalten. Kosten (ca. 540 Euro pro Jahr).
Bestellung per Mail an <sbb-link variant="inline" type="button" href="mailto:ux@sbb.ch">ux@sbb.ch</sbb-link>. {.lead}

<a id="install-libraries"></a>

### Installieren der benötigten Libraries 
Damit du die benötigten Libraies installieren kannst, musst du dem Team <sbb-link variant="inline" type="button" target="_blank" href="https://www.figma.com/files/937035332175966726/team/1016730059889367563">SBB Design Systeme</sbb-link> beitreten. Sofern du Lyne Komponenten benötigst, musst du dem Team <sbb-link variant="inline" type="button" target="_blank" href="https://www.figma.com/files/937035332175966726/team/877917807932767158">Lyne</sbb-link> beitreten. {.lead}

Sämtliche Libraries basieren auf folgenden Design-Token-Libraries. Es ist zwingend nötig diese zu aktivieren: {.lead}
- <sbb-link variant="inline" type="button" target="_blank" href="https://www.figma.com/file/MN4unbOECrOGJ2bKxgYZI1/SBB-Colors?t=gMc333VEVkr5hjze-1">SBB Colors</sbb-link>  
- <sbb-link variant="inline" type="button" target="_blank" href="https://www.figma.com/file/UQBd7cHKav0hr9oXYp7opJ/SBB-Icons?t=gMc333VEVkr5hjze-1">SBB Icons</sbb-link>   
- <sbb-link variant="inline" type="button" target="_blank" href="https://www.figma.com/file/el6W0pbvl6BRgaiPZ5NFqE/SBB-Pictograms?t=gMc333VEVkr5hjze-1">öV-Piktogramme</sbb-link>

Danach kanns du je nach Produkt, bzw. Zielplattform die benötigten Libraries aktivieren:

- <sbb-link variant="inline" type="button" target="_blank" href="https://www.figma.com/file/rFH1tRfynj4OtGjAqTxxC2/Web?t=gMc333VEVkr5hjze-1">Web Lean & Legacy</sbb-link>
- Lyne (<sbb-link variant="inline" type="button" target="_blank" href="https://www.figma.com/file/mWknI2rC5DJmOgRO61WKai/Lyne-Design-Tokens?t=gMc333VEVkr5hjze-1">Design Tokens</sbb-link>, <sbb-link variant="inline" type="button" target="_blank" href="https://www.figma.com/file/9r6xSfNmEfCFxl1yFYedrj/Lyne-Components?t=gMc333VEVkr5hjze-1">Components</sbb-link>, <sbb-link variant="inline" type="button" target="_blank" href="https://www.figma.com/file/NUX79tafHqkptULT7QLQ0n/Lyne-Layouts?t=gMc333VEVkr5hjze-1">Layouts</sbb-link>)
- <sbb-link variant="inline" type="button" target="_blank" href="https://www.figma.com/file/WOtLIam1xwrqcgnAITsEhV/Design-System-Mobile?t=gMc333VEVkr5hjze-1">Mobile</sbb-link>


<a id="duplicate-template"></a>

### Projekt-Template duplizieren 
tbd.

<a id="enter-community"></a>

### Microsoft Teams Community beitreten 
Du bist noch kein Figma-Hero? Tritt unserer <sbb-link variant="inline" type="button" target="_blank" href="https://teams.microsoft.com/l/channel/19%3ac23a8ec66e74476895665eaef367be78%40thread.skype/Figma%2520Selbsthilfegruppe?groupId=6dcd0a69-d490-423c-b318-ea2b5e6d3b7b&tenantId=2cda5d11-f0ac-46b3-967d-af1b2e1bd01a">Figma-Selbsthilfe Gruppe</sbb-link> bei. Wir geben uns Mühe dir rasch zu helfen. {.lead}

<a id="use-components"></a>

### Komponenten durchstöbern, verstehen, verwenden 
Danach kannst du Komponenten in Figma verwenden. Es empfiehlt sich mit der passenden Dokumentation auf dieser Seite vertraut zu machen: <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lean/overview/">Lean</sbb-link>, <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/mobile/overview/">Mobile</sbb-link>, <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/lyne/overview/">Lyne</sbb-link>, <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/legacy/overview/">Web (Legacy)</sbb-link>. {.lead}

<a id="community-assets"></a>

### Community-Assets durchstöbern 
Community-Assets bezeichnen wir als Assets/Artefakte die ihr in euren Projekten erstellt habt und evtl. in anderen Projekten verwendet werden können. Mit einer Sammlung dieser Assets können andere von deiner Arbeit profitieren. Dabei ist es egal ob bereits Code vorhanden ist oder nur ein Konzept in einem Figma-File. Nebst einer kurzen Beschreibung ist immer auch ein Kontakt angegeben, bei dem du dich für weitere Informationen melden kannst. Die Community-Assets werden von euch eingebracht und gepflegt. <sbb-link variant="inline" type="button" href="/{{page.lang}}/design-system/community-assets/catalogue/">Hier</sbb-link> erfährst du mehr. {.lead}