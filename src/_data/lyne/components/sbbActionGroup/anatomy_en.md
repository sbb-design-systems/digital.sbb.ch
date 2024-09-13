{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_action_group',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}

<sbb-table-wrapper>

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1|Slot|Erlaubt sind alle Button- und Link-Varianten|No||
|2|Slot|Erlaubt sind alle Button- und Link-Varianten|No||
|3|Slot|Erlaubt sind alle Button- und Link-Varianten|Yes||


{.sbb-table}

</sbb-table-wrapper>

Die Action-Group besteht aus zwei oder drei Aktionselementen (Button oder Link). Die Varianten der Button oder Links sind frei wählbar.