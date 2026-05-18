---
layout: page.njk
tags: level3
key: button_and_links_en
title: Button and Link Texts
parent: language_en
order: 2
---

Button and link texts are short, action-oriented labels. 

Their goal is to guide users with as few words as possible, reduce uncertainty and facilitate decision-making.

## Buttons

Buttons are action triggers, not spaces for explanations. They let users instantly know what will happen when clicked.

Recommendations:

* **Be clear.** Use an instruction or request to act (Buy now, Continue, Send) or a clear navigational cue (e.g. “Go to settings”) so that the action is immediately understandable.

* **Use 1–4 words.** Buttons are scanned, not read. Short labels help to quickly identify actions and distinguish between multiple buttons.

* **Do not explain in the button.** If additional information is needed for understanding, place it above or below the button or in a tooltip. 

Examples:

{{ imageOnGreyBackground({
  url: 'assets/images/ux-writing/en/action_group_horizontal_light',
  urldark: 'assets/images/ux-writing/en/action_group_horizontal_dark',
  alt: 'Example for action-group',
  title: 'microcopy action-group-horizontal'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Save</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Go to annual planning</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Reinvite</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Record currency exchange</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Show message</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Synchronise</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Details</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Yes</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>annual planning</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Resend profile invitation</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Currency exchange</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Message</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Synchronisation</div>
    </div>    
</div>

## Links

Links lead to additional content or contexts. The label must give a clear indication of where the link leads to or what users can expect there.

Recommendations:

* **Descriptive links.** Use clear wording so that a link is understandable even without surrounding text.

Examples:

{{ imageOnGreyBackground({
  url: 'assets/images/ux-writing/en/link_light',
  urldark: 'assets/images/ux-writing/en/link_dark',
  alt: 'Example for a link',
  title: 'microcopy link'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>View terms and conditions</sbb-link>
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>View services and prices</sbb-link>
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>More about the services</sbb-link>
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>Further information</sbb-link>
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-tick-small"></sbb-icon>
            <sbb-link>Show more</sbb-link>
        </div>        
    </div>
    <div class="donts">
       <div class="iconandlabel">
            <sbb-icon name="circle-cross-small"></sbb-icon>
            <div>Our terms and conditions are described <sbb-link variant="inline">here</sbb-link>.</div>
        </div>
         <div class="iconandlabel">
            <sbb-icon name="circle-cross-small"></sbb-icon>
            <div class="dosndontstext">
            <sbb-link variant="inline">Click here</sbb-link> to find out more about our services and prices</div>
        </div>
        <div class="iconandlabel">
            <sbb-icon name="circle-cross-small"></sbb-icon>
            <sbb-link>More</sbb-link>
        </div>
    </div>    
</div>

</br>

<sbb-notification type="info" readonly="">
    <sbb-title level="3">Title Case vs. Sentence case</sbb-title>
    We use sentence case as studies have proven it is better in terms of readability. </br>
    The only exception to this are product names which are in uppercase, for example: Buy a Half Fare Travelcard. 
</sbb-notification>


