
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_dialog',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Komponente|`sbb-dialog-title`|Nein||
|2|Komponente|`sbb-dialog-close-button`|Ja|Close-Action|
|2|Slot|Beliebiger Inhalt erlaubt|Nein||
|4|Komponente|`sbb-dialog-actions`|Ja||
|4a|Komponente|`sbb-secondary-button`|Ja|Auch Block-Links sind erlaubt|
|4b|Komponente|`sbb-button`|Ja|Auch Block-Links sind erlaubt|


{.sbb-table}

</sbb-table-wrapper>