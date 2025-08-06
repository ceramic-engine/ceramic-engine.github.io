---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: LayoutDirection
target: Unity
permalink: api-docs/unity/ceramic/LayoutDirection/
---

# LayoutDirection

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/LayoutDirection.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LayoutDirection</strong> (Enum)</div>

Defines the primary axis direction for layout arrangements.
Used by various layout components to determine how child elements
should be arranged relative to each other.

```haxe
var layout = new LinearLayout();
layout.direction = HORIZONTAL; // Children arranged left-to-right
layout.direction = VERTICAL;   // Children arranged top-to-bottom
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/LinearLayout/">LinearLayout</a>, <a href="/api-docs/unity/ceramic/RowLayout/">RowLayout</a>, <a href="/api-docs/unity/ceramic/ColumnLayout/">ColumnLayout</a></div>


## Constructors

### HORIZONTAL

```haxe
HORIZONTAL
```

Horizontal layout direction (left-to-right).
Child elements are arranged along the X-axis, typically from left to right.
Used for row-based layouts where elements are placed side by side.

### VERTICAL

```haxe
VERTICAL
```

Vertical layout direction (top-to-bottom).
Child elements are arranged along the Y-axis, typically from top to bottom.
Used for column-based layouts where elements are stacked vertically.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:flatEnum` | - |

