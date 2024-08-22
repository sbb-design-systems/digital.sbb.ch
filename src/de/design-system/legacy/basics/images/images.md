---
layout: page.njk
key: images-legacy_de
title: Images
parent: basics-legacy_de
image: legacy/overview/image.webp
keywords: 
order: 40
---

## Was macht diese Komponente?
* Bilder unterstützen das Verständnis von Texten und lockern textlastige Seiten auf. {.lead}

## Wann soll diese Komponente eingesetzt werden?
* Zur Unterstützung der textuellen Kommunikation können Bilder eingesetzt werden (visuelle Kommunikation). {.lead}
* Grosse (content-wide) Bilder sollen sparsam eingesetzt werden. {.lead}

## Regeln 
* Die Aufbereitung von Bildern und Illustrationen ist durch die Vorgaben von KOM geregelt (siehe Links). {.lead}
* Illustrationen und Infografiken als SVG einsetzen, bei Fotografien auf genügend grosse Auflösung für alle Screengrössen achten. {.lead}
* Ausser dem roten SBB Panel dürfen Bilder keine Overlays enthalten. {.lead}
* Es dürfen nur kontextrelevante Bilder verwendet werden (das Bild muss zum Inhalt passen). {.lead}
* Kombinieren verschiedener Stile kann die UX positiv beeinflussen (Fotografie für Gegebenheiten, Illustrationen für Konzepte) {.lead}
* Um die Wichtigkeit von Bildern zu unterstreichen (zu priorisieren), können verschiedene Bildgrössen helfen. {.lead}
* Bilder haben optional einen Beschreibungstext (Caption). {.lead}

## Varianten und Zustände 
Bei Bildern werden folgende Stile unterschieden: {.lead}
* Fotografie
* Illustration
* Infografik

### Key Visual 
* Nur Fotografien (keine Illustrationen) verwenden. {.lead}
* Keyvisuals haben keinen eigenen Informationsgehalt. {.lead}
* Keyvisuals können statische Bilder oder Videos sein. Animated GIFs sind nicht möglich. {.lead}
    * Bilder und Videos werden grundsätzlich gleich behandelt. {.lead}
* Keyvisuals haben nie Bildunterschriften oder Copyright-Infos. {.lead}
* Keyvisuals haben je Endgerät ein festes Format, der Bildausschnitt passt sich dem Viewport an. {.lead}
* Keyvisuals können als <sbb-link variant="inline" href="/{{page.lang}}/design-system/legacy/components/mediaslider">Mediaslider</sbb-link> umgesetzt werden. {.lead}
* Kein Beschreibungstext erlaubt. {.lead}

### Formate
<table>
   <colgroup>
      <col>
      <col>
      <col>
      <col>
      <col>
   </colgroup>
   <thead>
      <tr role="row">
         <th colspan="1" scope="col">
         </th>
        <th colspan="1" scope="col">
               <p>Aspect Ratio</p>
         </th>
         <th colspan="1" scope="col">
               <p>Non-Retina</p>
         </th>
         <th colspan="1" scope="col">
               <p>Retina</p>
         </th>
         <th colspan="1" scope="col">
					 <p>Retina-HD (iPhone 7)</p>
         </th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th>Tablet</th>
         <td>48:25</td>
         <td>768x400</td>
         <td>1536x800</td>
         <td colspan="1"><br></td>
      </tr>
      <tr role="row">
         <th colspan="1"><strong>Desktop</strong></th>
         <td colspan="1">
            <p>83:30</p>
         </td>
         <td>
            <p>1328x480</p>
         </td>
         <td>
            <p>2656x960</p>
         </td>
         <td colspan="1" c><br></td>
      </tr>
      <tr role="row">
         <th colspan="1">4K</th>
         <td colspan="1">83:30</td>
         <td colspan="1">2656x960</td>
         <td colspan="1">2656x960</td>
         <td colspan="1"><br></td>
      </tr>
      <tr role="row">
         <th colspan="1">Mobile</th>
         <td colspan="1">166:133</td>
         <td colspan="1">320x266</td>
         <td colspan="1">640x532</td>
         <td colspan="1">960x798</td>
      </tr>
      <tr role="row">
         <th colspan="1">5K</th>
         <td colspan="1"><br></td>
         <td colspan="1"><br></td>
         <td colspan="1"><br></td>
         <td colspan="1"><br></td>
      </tr>
   </tbody>
</table>


## Infobild 
* Infobilder können statische Bilder, animated GIFs oder Videos sein. {.lead}
    * Statische Bilder, animated GIFs und Videos werden grundsätzlich gleich behandelt. {.lead}
* Infobilder können optional eine Bildunterschrift und eine Copyright-Info unter dem Bild stehen haben. {.lead}
    * Empfohlene Textlänge der Bildunterschrift inkl. Copyright-Info: sollte auf Desktop max. 2 Zeilen umfassen. {.lead}
* Infobilder dürfen kein Panel verwenden. {.lead}
* Infobilder sind nie verlinkt. {.lead}
* Infobilder haben immer das Format 16:9. {.lead}
* Infobilder haben keine Grossansicht. {.lead}

## Lazyload 
* Wenn viele Bilder auf einer Seite vorhanden sind, dann werden Bilder ausserhalb des Viewports lazyloaded. {.lead}

## Innerhalb eines Teasers
* Bild muss bei Mouseover leicht reingezoomt werden. {.lead}

## Als Hintergrund (z.B. Karte)
* Beim Scrollen nach unten, wird das Bild eingezoomt, beim Scrollen nach oben wird es ausgezoomt. {.lead}
* Bild soll den ganzen Viewport des Contentbereichs bedecken. {.lead}
* Text und Interaktionselemente (Buttons) über dem Bild sind erlaubt. {.lead}
* Wichtig: Kontraste einhalten → Bilder sollten dunkle Farben beinhalten, sodass Text in weiss darüber geht. {.lead}