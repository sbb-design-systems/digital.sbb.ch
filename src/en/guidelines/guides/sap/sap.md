---
layout: page.njk
tags: page
key: sap_en
title: SAP Design Guidelines
parent: guides_en
order: 6
---

The SAP guidelines are a work in progress. At the moment it consists of first informations for consistent SBB SAP applications. The foundation for this is the <sbb-link variant="inline" type="button" target="_blank" href="https://experience.sap.com/fiori-design/">SAP Fiori Design Concept</sbb-link>. Further information about this can also be found in the <sbb-link variant="inline" type="button" target="_blank" href="https://community.sap.com/topics/fiori">SAP Community</sbb-link>.{.lead}

## SBB Theme

### Introduction
The basis to developing SBB SAP applications with consistent user experience forms the  <sbb-link variant="inline" type="button" target="_blank" href="https://experience.sap.com/fiori-design">SAP Fiori Design Concept</sbb-link>. To comply with the guidelines of the SBB brand elements the "SBB Theme" has been defined with the SAP theme designer.{.lead}

The SBB Theme with integrated SBB logo and modified colour values is available for internal applications on the SAP Fiori Launchpad and SAP Business Technology Platform (BTP).
Contact: <sbb-link variant="inline" type="button" href="mailto:slc@sbb.ch"> DSRV SAP TechOps</sbb-link>{.lead}



To build visual extensions with HTML and CSS for modified user interfaces or themes for specific customer or ERP portals, like the "Immobilien Kunden Cockpit" please contact the <sbb-link variant="inline" type="button" href="mailto:marke@sbb.ch">SBB Markenführung</sbb-link>.{.lead}

### Examples 

<sbb-secondary-button-link size="m" class="more-details">SBB Fiori Portal</sbb-secondary-button-link> <sbb-secondary-button-link size="m" class="more-details">«Auftragsabwicklung Planung und Steuerung</sbb-secondary-button-link>

<sbb-overlay id="overlay-1">{{ principleImage({ url: '/assets/images/sap/hr-fiori-portal', alt: 'example', title: 'example'}) }}</sbb-overlay>

<sbb-overlay id="overlay-2">{{ principleImage({ url: '/assets/images/sap/aps-durchfuehrung-pm', alt: 'example', title: 'example'}) }}</sbb-overlay>



## Logo

### Usage
* The logo is used in all SBB SAP web applications and is embedded in the SBB Theme.{.lead}

### Rules
* The logo appears exactly once per page and is always in the header.{.lead}
* The position is always top left.{.lead}
* Modifications of the logo are not allowed.{.lead}
* The logo is linked to the basic page of the SAP environment.{.lead}


## Icons

### Usage
Icons serve as visual support for topics and actions for the users. To use them in SBB SAP applications the SAP icon font is to be utilised.{.lead}

Should the existing SAP icon set not suffice, you can ask the UX experts of the Digital Solution or the  <sbb-link variant="inline" type="button" target="_blank" href="https://sbb.sharepoint.com/sites/uxsbb/SitePages/SBB-Icons.aspx">DSRV UX</sbb-link> for new icons in the SAP style.{.lead}

Independent creation of icons is allowed, but needs to be approved by the <sbb-link variant="inline" type="button" href="mailto:marke@sbb.ch"> SBB Markenführung</sbb-link> or the <sbb-link variant="inline" type="button" href="mailto:ux@sbb.ch"> DSRV UX</sbb-link>  before the icons go in use. As for digital products and apps pay attention that you don't use icons in different line width.{.lead}

### Rules
* For the usage of SBB SAP applications the SAP icon font is generally to be used.{.lead}
* The base vectors size for SAP icons is 16px for symbols that are used in the UI controls. Other listed sizes from 18px to 40px depend on individual requirements of the interface.{.lead}
* One should abstain from using icons within a flowing text whenever possible.{.lead}
* Icons without text need to be self-explanatory or easy to learn. The more icons are used in an application the harder it gets to correctly remember their meaning. The icons without text need to be supplemented with an alternative text, whereby not the icon itself but its action must be described (e.g. "Close Menu").{.lead}
* Icons should always have the same meaning across applications and across Digital Solutions (consistency).{.lead}

### Links
<sbb-link variant="inline" type="button" target="_blank" href="https://experience.sap.com/fiori-design-web/icons/">SAP Icon Font Guideline</sbb-link>
<sbb-link variant="inline" type="button" target="_blank" href="https://sapui5.hana.ondemand.com/sdk/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">SAP Icon-Set</sbb-link>
<sbb-link variant="inline" type="button" target="_blank" href="https://confluence.sbb.ch/pages/viewpage.action?spaceKey=DSRVUX&title=SAP+Fiori">SAP Fiori UX approach (accessible with SBB Login)</sbb-link>

<script>
const buttons = document.querySelectorAll(".more-details");
function buttonClicked(index) {
    const overlay = document.getElementById("overlay-"+(index + 1));
    overlay.open(event);
}
buttons.forEach((button, index) => {
  button.addEventListener("click", () => buttonClicked(index));
});
</script>