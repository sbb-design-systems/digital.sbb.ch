---
tags: form-error-lyne_de
title: Anatomie
key: form-error-lyne-anatomy_de
parent: form-error-lyne_de
icon: specification
order: 2
permalink: false
---

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_expansion_panel',
  alt: 'Anatomie der Komponente',
  title: 'Anatomie der Komponente'
}) }}

|Nummer|Typ|Beschreibung|Optional|Hinweis|
|------|---|------------|--------|-------|
|1|Standard-HTML|`input`|Nein||
|1b|Standard-HTML|`input`|Ja|Placeholder|
|2|Standard-HTML|`input`|Nein||
|3|Komponente|`sbb-icon`|Ja|Prefix|
|4|Komponente|`sbb-icon` oder `sbb-form-field-clear`|Ja|Suffix|
|5|Komponente|`sbb-form-error`|Nein|Datei auswählen|