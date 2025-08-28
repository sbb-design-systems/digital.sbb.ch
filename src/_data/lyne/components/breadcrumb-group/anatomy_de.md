
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_breadcrumb',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}


<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1a|Komponente|`sbb-breadcrumb`|Nein|Nur Icon|
|1b|Komponente|`sbb-breadcrumb`|Nein|Nur Label|
|2|Komponente|`sbb-icon`|-|Dient zur Trennung zweier Breadcrumbs|


{.sbb-table}

</sbb-table-wrapper>
