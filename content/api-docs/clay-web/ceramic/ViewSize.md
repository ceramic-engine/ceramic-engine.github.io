---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: ViewSize
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/ViewSize/
---

# ViewSize

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/ViewSize.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ViewSize</strong> (Abstract)</div>

Type-safe representation of view sizing modes.

ViewSize uses encoded float values to represent different sizing modes:
- Fixed sizes: Regular positive float values (e.g., 100.0 = 100 pixels)
- Percentage: Encoded values between -60000 and -40000
- Fill: Special value around -60002
- Auto: Special value around -60001

This encoding allows ViewSize to be used directly as a Float while
maintaining type safety and avoiding object allocations.

```haxe
// Fixed size
view.viewWidth = 200; // 200 pixels

// Percentage
view.viewWidth = ViewSize.percent(50); // 50% of parent

// Fill available space
view.viewWidth = ViewSize.fill();

// Size based on content
view.viewHeight = ViewSize.auto();
```

<div class="see"><strong>See:</strong> View For usage in the layout system</div>


## Type Conversions

**From:**
- `[Float](/api-docs/clay-web/Float/)`

**To:**
- `[Float](/api-docs/clay-web/Float/)`

