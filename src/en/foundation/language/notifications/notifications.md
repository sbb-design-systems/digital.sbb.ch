---
layout: page.njk
tags: level3
key: notifications_en
title: Notifications
parent: language_en
order: 3
---

Notifications include short hints and feedback messages. They inform about states, successes, errors or warnings, for example in the form of <sbb-link  href="/{{page.lang}}/design-system/lyne/components/notification">notifications</sbb-link> or <sbb-link  href="/{{page.lang}}/design-system/lyne/components/dialog">dialogs</sbb-link>.

The goal is to create clarity, remove uncertainty for users and show them what has happened and what to do next.

Recommendations: 

* **Draw attention to critical actions.** For serious or irreversible actions, use confirmation dialogs (Are you sure you want to delete this?).
* **Explain what happens next.** After actions such as submitting a form, make it clear when and through which channel a response will be provided.
* **Make errors fixable.** Error messages should show how the problem can be resolved.
* **Use punctuation deliberately.** For error messages on input fields, do not use a full stop unless it is a complete sentence.
* **Allow actions to be undone.** Offer the option to undo critical changes or deleted content, for example via an “Undo” option in toasts.

#### Notification

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/en/notification_light',
  urldark: '/assets/images/ux-writing/en/notification_dark',
  alt: 'Example for a Message within a notification',
  title: 'Notification Notification'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>You do not have permission to perform this action.</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Thank you for your request.</br> We have received your message and will get back to you within 3 business days. </br>You will receive the reply by email.</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Your changes could not be saved. Please try again.</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Caution!!!</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Saved successfully. You can now continue.</div>
    </div>    
</div>

<sbb-secondary-button-link href="/{{page.lang}}/design-system/lyne/components/notification/">Go to component</sbb-secondary-button-link>

<br>

#### Toast

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/en/toast_light',
  urldark: '/assets/images/ux-writing/en/toast_dark',
  alt: 'Example for a notification within a toast',
  title: 'Notification Toast'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Password changed</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>
          <div class="dosndontstext">
          List deleted.
          <sbb-link>Undo</sbb-link>
          </div>
        </div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Password change confirmation</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Username successfully updated.</div>
    </div>    
</div>

<sbb-secondary-button-link href="/{{page.lang}}/design-system/lyne/components/toast/">Go to component</sbb-secondary-button-link>

<br>


#### Dialog

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/en/dialog_light',
  urldark: '/assets/images/ux-writing/en/dialog_dark',
  alt: 'Example for a notification within a dialog',
  title: 'Notification Dialog'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Delete entry? </br>Do you want to permanently delete this entry?</br> DThis action cannot be undone.</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Are you sure you want to do this? </br> OK and Cancel (as actions)</div>
    </div>    
</div>

<sbb-secondary-button-link href="/{{page.lang}}/design-system/lyne/components/dialog/">Go to component</sbb-secondary-button-link>

<br>


#### Error (Form-Field)

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/en/time_input_light',
  urldark: '/assets/images/ux-writing/en/time_input_dark',
  alt: 'Example for a notification within a formfield',
  title: 'Notification input field'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Enter a valid time (HH:MM)</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Enter a valid format</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Invalid value</div>
    </div>
</div>

<sbb-secondary-button-link href="/{{page.lang}}/design-system/lyne/components/form-field/">Go to component</sbb-secondary-button-link>

<br>

#### Message

{{ imageOnGreyBackground({
  url: '/assets/images/ux-writing/en/message_with_image_light',
  urldark: '/assets/images/ux-writing/en/message_with_image_dark',
  alt: 'Example for a message with image',
  title: 'message with image'
}) }}

<div class="dosndonts">
    <div class="dos">
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>The page you are looking for no longer exists or has been moved.</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Access denied. You do not have permission to view this page. </br> Contact example@sbb.ch</div>
        <div class="iconandlabel"><sbb-icon name="circle-tick-small"></sbb-icon>Unfortunately, an error has occurred.</div>
    </div>
    <div class="donts">
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Access denied</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Error Code 401</div>
        <div class="iconandlabel"><sbb-icon name="circle-cross-small"></sbb-icon>Oops! Something went wrong.</div>
    </div>
</div>

<sbb-secondary-button-link href="/{{page.lang}}/design-system/lyne/components/message/">Go to component</sbb-secondary-button-link>

<br>

