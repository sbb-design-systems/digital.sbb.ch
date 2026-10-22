
## What does the component do?
The checkbox group combines [checkboxes](/en/design-system/lyne/components/checkbox/) (also [checkbox panels](/en/design-system/lyne/components/checkbox-panel/) or [selection expansion panels](/en/design-system/lyne/components/selection-expansion-panel/)) into one group. Several entries can be selected at the same time. It defines arrangement, name and states (e.g. required, disabled) for all entries.

## When should the component be used?
* Whenever checkboxes that belong together are used.
* For a single selection, use the [radio button group](/en/design-system/lyne/components/radio-button-group/) instead.

## Rules.
* A checkbox group only combines checkboxes that belong to the same question. The group needs a clear label, also for screen readers (`aria-label`).
* For many or long options, checkboxes are arranged one below the other (`orientation="vertical"`). Side by side only for a few short options. `horizontalFrom` defines from which width they are placed side by side.
* All checkboxes in a group have the same size.
* If a selection is required and none is made, an error message is shown for the whole group.
