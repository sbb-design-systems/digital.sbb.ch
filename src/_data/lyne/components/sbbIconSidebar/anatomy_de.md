
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_icon_sidebar',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-icon-sidebar`|Nein||
|2|Komponente|`sbb-icon-sidebar-button` oder `sbb-icon-sidebar-link`|Nein||
|2a|Komponente|`sbb-icon-sidebar-button` oder `sbb-icon-sidebar-link`|Nein|Hover State mit Tooltip|
|2b|Komponente|`sbb-icon-sidebar-button` oder `sbb-icon-sidebar-link`|Nein|Current State|
|3|Komponente|`sbb-sidebar-title`|Ja||
|4|Komponente|`sbb-sidebar-close-button`|Ja||
|5|Inhalt||Nein||
|6|Eigenschaft|Backdrop|Ja|Nur im Overlay-Mode sichtbar|

{.sbb-table}

</sbb-table-wrapper>