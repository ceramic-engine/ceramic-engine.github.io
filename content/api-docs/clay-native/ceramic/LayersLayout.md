---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: LayersLayout
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/LayersLayout/
---

# LayersLayout

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/LayersLayout.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/Visual/">Visual</a> → <a href="/api-docs/clay-native/ceramic/Quad/">Quad</a> → <a href="/api-docs/clay-native/ceramic/Layer/">Layer</a> → <a href="/api-docs/clay-native/ceramic/View/">View</a> → <strong>ceramic.LayersLayout</strong> (Class) → <a href="/api-docs/clay-native/elements/CellView/">elements.CellView</a>, <a href="/api-docs/clay-native/elements/ColorPickerView/">elements.ColorPickerView</a></div>

A layout container that stacks children on top of each other like layers.

LayersLayout positions all children at the same location (with offsets applied),
creating a stack where each child view overlaps the previous ones. The layout
automatically adjusts its size to fit the largest child.

Key features:
- Children are stacked with increasing depth values
- Container size adapts to the largest child
- Each child can have independent positioning via offsets
- Supports padding that affects all children

Common use cases:
- Card stacks or overlapping UI elements
- Background/foreground layering
- Overlay containers
- Z-ordered visual effects

```haxe
var layers = new LayersLayout();
layers.padding(20);

// Add background layer
var bg = new View();
bg.viewSize(ViewSize.fill(), ViewSize.fill());
bg.transparent = false;
bg.color = Color.GRAY;
layers.add(bg);

// Add content layer on top
var content = new TextView();
content.text = "Layered Content";
content.offsetX = 10; // Offset from padding
content.offsetY = 10;
layers.add(content);
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/View/">View</a>, LinearLayout for sequential layouts</div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="computeSize"><div class="plugin-name">ui</div><code><span class="field-name">computeSize</span><span class="parenthesis">(</span><span class="arg-name">parentWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">parentHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">parentLayoutMask</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ViewLayoutMask/" class="type-link">ViewLayoutMask</a><span class="operator">,</span> <span class="arg-name">persist</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the layout size based on the largest child dimensions.
The final size is the maximum width and height among all active children,
plus any padding.

| Name | Type |
|------|------|
| `parentWidth` | [Float](/api-docs/clay-native/Float/) |
| `parentHeight` | [Float](/api-docs/clay-native/Float/) |
| `parentLayoutMask` | [ViewLayoutMask](/api-docs/clay-native/ceramic/ViewLayoutMask/) |
| `persist` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ui</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new LayersLayout.
The layout is transparent by default to show layered content.

## Private Members

<div class="signature field-method has-description has-plugin" id="layout"><div class="plugin-name">ui</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Positions all child views within the padded area.
Each child is placed at the same base position (accounting for anchors),
with individual offsets applied. Depth values increase for each child
to maintain proper layering order.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

