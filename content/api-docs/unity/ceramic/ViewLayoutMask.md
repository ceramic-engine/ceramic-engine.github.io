---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: ViewLayoutMask
target: Unity
permalink: api-docs/unity/ceramic/ViewLayoutMask/
---

# ViewLayoutMask

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/ViewLayoutMask.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ViewLayoutMask</strong> (Abstract)</div>

Bit mask that defines layout constraints for views.

Controls how views can resize during layout computation:
- Whether width/height can increase or decrease
- Flexibility in one or both dimensions
- Fixed size constraints

Layout masks are used by parent containers to communicate
sizing constraints to their children during layout passes.

```haxe
// Allow view to grow but not shrink
var mask = ViewLayoutMask.INCREASE;

// Allow flexible width only
var mask = ViewLayoutMask.FLEXIBLE_WIDTH;

// Check constraints
if (mask.canIncreaseWidth()) {
    // Width can grow
}
```

## Type Conversions

**From:**
- `[Int](/api-docs/unity/Int/)`

**To:**
- `[Int](/api-docs/unity/Int/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

