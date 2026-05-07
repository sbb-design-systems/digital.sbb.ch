---
layout: page.njk
tags: level3
key: progress_indicator_en
title: Progress Indicator
parent: language_en
order: 5
---

Progress indicators show users where they are in a multi-step process. 

The goal is to guide users clearly, set expectations and make the process transparent so they can navigate it confidently.

Recommendations: 

* **Label steps as nouns.** Use nouns for step labels instead of action-oriented phrasing. Example: “Subscription” instead of “Choose subscription”.

* **Clearly mark the completion.** In the label of the action in the last step, make it clear that the process is ending.

* **Changes possible.** Indicate when inputs or settings can still be changed later.

Examples:


{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/en/stepper_light',
  urldark: '/assets/images/ux-writing/en/stepper_dark',
  alt: 'Example for a progress indicator',
  title: 'Progress Indicator'
}) }}

#### Labels:

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Location</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Image</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Choose location</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Upload images</div>
    </div>    
</div>


#### Content:

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>You can add to or change the details later.</div>
    </div>
    <!--<div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>XX</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>XX</div>
    </div>-->
</div>

