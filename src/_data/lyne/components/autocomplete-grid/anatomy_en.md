

{{ imageOnGreyBackground({
  url: '/assets/images/lyne/anatomy/anatomy_autocomplete_grid',
  alt: 'Anatomy der Komponente',
  title: 'Anatomy der Komponente'
}) }}

<sbb-table-wrapper>

|Number|Type|Description|Optional|Info|
|------|---|------------|--------|-------|
|1|Component|`sbb-form-field`|No||
|1a|Standard-HTML|`label`|No||
|1b|Standard-HTML|`input`|No||
|1c|Component|`sbb-icon`|Yes|Prefix|
|1d|Component|`sbb-icon`|Yes|Suffix|
|2|Component|`sbb-autocomplete-grid-optgroup`|Yes||
|2a|Text|Label|No||
|2b|Component|`sbb-divider`|-|Appears with an `sbb-autocomplete-grid-optgroup`|
|3|Component|`sbb-autocomplete-grid-row`|No||
|4|Component|`sbb-autocomplete-grid-option`|No||
|4a|Text|Value|No||
|4b|Component|`sbb-icon`|Yes||
|5|Component|`sbb-autocomplete-grid-cell`|Yes||
|6|Component|`sbb-autocomplete-grid-button`|Yes||


{.sbb-table}

</sbb-table-wrapper>