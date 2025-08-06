---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: BorderPosition
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/BorderPosition/
---

# BorderPosition

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/BorderPosition.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.BorderPosition</strong> (Enum)</div>

Defines where a border is positioned relative to a shape's edge.

Used by various shape classes to control how borders/strokes are drawn
in relation to the defined dimensions.

<div class="see"><strong>See:</strong> Arc.borderPosition, Border.borderPosition</div>


## Constructors

### INSIDE

```haxe
INSIDE
```

Border is drawn inside the shape's boundaries.

The border width is subtracted from the shape's area,
keeping the outer dimensions unchanged. Useful when you
need the shape to fit exactly within specified bounds.

For Arc: Creates filled shapes when thickness equals radius.

### OUTSIDE

```haxe
OUTSIDE
```

Border is drawn outside the shape's boundaries.

The border width extends beyond the shape's defined size,
increasing the total visual area. The shape's content area
remains at the specified dimensions.

### MIDDLE

```haxe
MIDDLE
```

Border is centered on the shape's edge.

Half the border width extends inside, half outside.
This is often the most visually balanced option and
is the default for most shapes.

## Metadata

| Name | Parameters |
|------|------------|
| `:flatEnum` | - |

