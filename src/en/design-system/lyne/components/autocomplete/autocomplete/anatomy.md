---
tags: autocomplete-lyne_en
title: Anatomy
key: autocomplete-lyne-anatomy_en
parent: autocomplete-lyne_en
icon: specification
order: 2
permalink: false
---

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_autocomplete',
  alt: 'Anatomy of the component',
  title: 'Anatomy of the component'
}) }}

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1|Component|`sbb-form-field`|No||
|1a|Standard-HTML|`label`|No||
|1b|Standard-HTML|`input`|No||
|1c|Component|`sbb-icon`|Yes|Prefix|
|1d|Component|`sbb-icon`|Yes|Suffix|
|2|Component|`sbb-optgroup`|Yes||
|2a|Text|Label|No||
|2b|Component|`sbb-divider`|-|Erscheint bei einer `optgroup`|
|3|Component|`sbb-option`|No||
|3a|Text|Value|No||
|3b|Component|`sbb-icon`|Yes||