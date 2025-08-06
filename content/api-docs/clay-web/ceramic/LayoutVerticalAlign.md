---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: LayoutVerticalAlign
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/LayoutVerticalAlign/
---

# LayoutVerticalAlign

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/LayoutVerticalAlign.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LayoutVerticalAlign</strong> (Enum)</div>

Vertical alignment options for UI elements within their containers.
Controls how elements are positioned along the Y-axis when they have
extra vertical space available.

```haxe
var view = new View();
view.layoutVerticalAlign = CENTER; // Center child vertically
view.layoutVerticalAlign = TOP;    // Align child to top edge
view.layoutVerticalAlign = BOTTOM; // Align child to bottom edge
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/View/">View</a>, <a href="/api-docs/clay-web/ceramic/LinearLayout/">LinearLayout</a>, <a href="/api-docs/clay-web/ceramic/LayersLayout/">LayersLayout</a>, <a href="/api-docs/clay-web/ceramic/LayoutHorizontalAlign/">LayoutHorizontalAlign</a></div>


## Constructors

### TOP

```haxe
TOP
```

Align element to the top edge of its container.
The element's top edge will be positioned at the container's top edge
(plus any padding/margin).

### BOTTOM

```haxe
BOTTOM
```

Align element to the bottom edge of its container.
The element's bottom edge will be positioned at the container's bottom edge
(minus any padding/margin).

### CENTER

```haxe
CENTER
```

Center element vertically within its container.
The element will have equal space on both top and bottom sides,
appearing centered along the Y-axis.

## Metadata

| Name | Parameters |
|------|------------|
| `:flatEnum` | - |

