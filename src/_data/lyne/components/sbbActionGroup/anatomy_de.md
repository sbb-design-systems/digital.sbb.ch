{%- from "src/_includes/macros/macros.njk" import imageOnGreyBackground -%}

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_action_group',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

<sbb-table-wrapper>

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Slot|Erlaubt sind alle Button- und Link-Varianten|Nein||
|2|Slot|Erlaubt sind alle Button- und Link-Varianten|Nein||
|3|Slot|Erlaubt sind alle Button- und Link-Varianten|Ja||


{.sbb-table}

</sbb-table-wrapper>

Die Action-Group besteht aus zwei oder drei Aktionselementen (Button oder Link). Die Varianten der Button oder Links sind frei wählbar.