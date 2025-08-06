---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: LayoutHorizontalAlign
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/LayoutHorizontalAlign/
---

# LayoutHorizontalAlign

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/LayoutHorizontalAlign.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LayoutHorizontalAlign</strong> (Enum)</div>

Horizontal alignment options for UI elements within their containers.
Controls how elements are positioned along the X-axis when they have
extra horizontal space available.

```haxe
var view = new View();
view.layoutHorizontalAlign = CENTER; // Center child horizontally
view.layoutHorizontalAlign = LEFT;   // Align child to left edge
view.layoutHorizontalAlign = RIGHT;  // Align child to right edge
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/View/">View</a>, <a href="/api-docs/clay-native/ceramic/LinearLayout/">LinearLayout</a>, <a href="/api-docs/clay-native/ceramic/LayersLayout/">LayersLayout</a>, <a href="/api-docs/clay-native/ceramic/LayoutVerticalAlign/">LayoutVerticalAlign</a></div>


## Constructors

### LEFT

```haxe
LEFT
```

Align element to the left edge of its container.
The element's left edge will be positioned at the container's left edge
(plus any padding/margin).

### RIGHT

```haxe
RIGHT
```

Align element to the right edge of its container.
The element's right edge will be positioned at the container's right edge
(minus any padding/margin).

### CENTER

```haxe
CENTER
```

Center element horizontally within its container.
The element will have equal space on both left and right sides,
appearing centered along the X-axis.

## Metadata

| Name | Parameters |
|------|------------|
| `:flatEnum` | - |

