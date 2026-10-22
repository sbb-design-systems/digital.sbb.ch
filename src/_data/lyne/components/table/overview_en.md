## What does the component do?
The table displays tabular data. The native HTML table elements are styled with the CSS class `sbb-table`. The table wrapper encloses the table and adds functions such as scrolling and sticky headers or columns.

## When should the component be used?
* When data should be displayed in rows and columns.
* Whenever a native HTML table is used, so that it is styled consistently.

## Rules.
* Use the native table elements (`table`, `th`, `td`, `caption`) to preserve semantics.
* Use the table wrapper if the table should scroll or if headers or columns should be fixed.
* Choose the variant as needed: size (xs, s, m), striped rows, hover, selected row, negative.
