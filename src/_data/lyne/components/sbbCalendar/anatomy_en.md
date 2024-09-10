
{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_calendar',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}

<sbb-table-wrapper>

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1a|–|Tag, Monat, Jahr, gewählt|No||
|1b|–|Tag, Monat, Jahr, default|No||
|1b|–|Tag, Monat, Jahr, disabled|Yes||
|2|–|Wochentage|No||
|3|–|Monat/Jahr/Jahre (inkl. Switcher)|No||
|4|–|Vorheriger Monat|Yes||
|5|–|Nächster Monat|Yes||


{.sbb-table}

</sbb-table-wrapper>
