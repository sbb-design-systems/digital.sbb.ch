---
layout: pattern-lyne2.njk
pagination:
  data: lyne.components
  size: 1
  alias: component
permalink: "/de/design-system/lyne/components2/{{lyne.components[component].config.tag.slice(3) | slugify}}/"
---

{#{ lyne.components[component] | dump | safe }#}