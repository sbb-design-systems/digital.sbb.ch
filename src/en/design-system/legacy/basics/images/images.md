---
layout: page.njk
key: images-legacy_en
title: Images
parent: basics-legacy_en
image: legacy/overview/image.webp
keywords: 
order: 40
---

## What does the element do?
Images support the understanding of texts and loosen up text-heavy pages. {.lead}

## When should the element be used?
* Images can be used to support textual communication (with visual communication). {.lead}
* Large (content-wide) images should be used sparingly. {.lead}

## Rules 
* The preparation of pictures and illustrations is regulated by the specifications of KOM (see links). {.lead}
* Use illustrations and infographics as SVG, ensure high enough resolution for all screen sizes for photographs. {.lead}
* Apart from the red SBB panel, pictures may not contain any overlays. {.lead}
* Only context-relevant images may be used (the image must match the content). {.lead}
* Combining different styles can positively influence the UX (photography for realities, illustrations for concepts) {.lead}
* Different image sizes can help to emphasize (prioritize) the importance of images. {.lead}
* Optionally, images can have a description text (caption). {.lead}

## Variants and states
The following styles are distinguished for images: {.lead}
* Photography {.lead}
* Illustration {.lead}
* Infographics {.lead}

### Key Visual
* Use only photographs (not illustrations). {.lead}
* Key visuals do not contain information. {.lead}
* Key visuals can be static images or videos. Animated GIFs are not possible. {.lead}
    * Pictures and videos are always treated equally. {.lead}
* Key visuals never have captions or copyright information. {.lead}
* Key visuals have a fixed format for each end device, the image section adapts to the viewport. {.lead}
* Key visuals can be implemented as <sbb-link variant="inline" href="/en/design-system/legacy/components/mediaslider/">mediaslider</sbb-link>. {.lead}
* No description text is allowed. {.lead}

### Formats
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


## Info picture 
* Infopictures can be static images, animated GIFs or videos. {.lead}
    * Static images, animated GIFs and videos are always treated equally. {.lead}
* Infopictures can optionally have a caption and copyright information below the picture. {.lead}
    * Recommended text length of the caption including copyright info should be 2 lines on desktop at max. {.lead}
* Infopictures must not use a panel. {.lead}
* Infopictures are never linked. {.lead}
* Infopictures always have the format 16:9. {.lead}
* Infopictures do not have a fullscreen view. {.lead}

## Lazyload
* If there are many images on a page, then images are lazyloaded outside the viewport. {.lead}

## Inside of a teaser
* Pictures are slightly zoomed on hover. {.lead}

## As background (e.g. map)
* Scrolling down zooms in, scrolling up zooms out. {.lead}
* The image should cover the entire viewport of the content area. {.lead}
* Text and interaction elements (buttons) above the image are allowed. {.lead}
* Important: always comply with minimal contrasts → Images should contain dark colors so that text in white can be used as overlay. {.lead}
