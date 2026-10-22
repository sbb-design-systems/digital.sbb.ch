
## What does the component do?
The radio button group combines [radio buttons](/en/design-system/lyne/components/radio-button/) (also [radio button panels](/en/design-system/lyne/components/radio-button-panel/) or [selection expansion panels](/en/design-system/lyne/components/selection-expansion-panel/)) into one group. Only one entry can be selected at a time. It defines arrangement, name and states (e.g. required, disabled) for all entries.

## When should the component be used?
* Whenever radio buttons are used.
* For selecting several options at once, use the [checkbox group](/en/design-system/lyne/components/checkbox-group/) instead.

## Rules.
* A radio button group only combines radio buttons that belong to the same question. The group needs a clear label, also for screen readers (`aria-label`).
* For many or long options, radio buttons are arranged one below the other (`orientation="vertical"`). Side by side only for a few short options. `horizontalFrom` defines from which width they are placed side by side.
* All radio buttons in a group have the same size.
* If a selection is required and none is made, an error message is shown for the whole group.
