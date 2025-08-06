---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ScrollDirection
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/ScrollDirection/
---

# ScrollDirection

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ScrollDirection.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ScrollDirection</strong> (Enum)</div>

Defines the direction of scrolling for scrollable components.

Used by various UI components to specify whether scrolling should
occur horizontally (left/right) or vertically (up/down). This enum
helps configure scroll behavior in components like Scroller, ScrollView,
and other scrollable containers.

Example usage:
```haxe
// Create a vertical scroller
var scroller = new Scroller();
scroller.direction = VERTICAL;

// Check scroll direction
if (scrollView.direction == HORIZONTAL) {
    // Handle horizontal scrolling
}
```

<div class="see"><strong>See:</strong> ceramic.Scroller For touch-based scrolling, ceramic.ScrollView For scrollable view containers</div>


## Constructors

### HORIZONTAL

```haxe
HORIZONTAL
```

Horizontal scrolling direction (left/right).
Content moves along the X-axis.

### VERTICAL

```haxe
VERTICAL
```

Vertical scrolling direction (up/down).
Content moves along the Y-axis.

## Metadata

| Name | Parameters |
|------|------------|
| `:flatEnum` | - |

