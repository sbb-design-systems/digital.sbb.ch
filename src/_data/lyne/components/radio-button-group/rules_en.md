## Rules.
* A radio button group only combines radio buttons that belong to the same question. The group needs a clear label, also for screen readers (`aria-label`).
* For many or long options, radio buttons are arranged one below the other (`orientation="vertical"`). Side by side only for a few short options. `horizontalFrom` defines from which width they are placed side by side.
* All radio buttons in a group have the same size.
* If a selection is required and none is made, an error message is shown for the whole group.
