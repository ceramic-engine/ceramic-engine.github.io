---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: LinearLayout
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/LinearLayout/
---

# LinearLayout

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/LinearLayout.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/Visual/">Visual</a> → <a href="/api-docs/clay-native/ceramic/Quad/">Quad</a> → <a href="/api-docs/clay-native/ceramic/Layer/">Layer</a> → <a href="/api-docs/clay-native/ceramic/View/">View</a> → <strong>ceramic.LinearLayout</strong> (Class) → <a href="/api-docs/clay-native/ceramic/ColumnLayout/">ColumnLayout</a>, <a href="/api-docs/clay-native/ceramic/RowLayout/">RowLayout</a>, <a href="/api-docs/clay-native/elements/FieldView/">elements.FieldView</a>, <a href="/api-docs/clay-native/elements/LabeledFieldGroupView/">elements.LabeledFieldGroupView</a></div>

A flexible layout container that arranges its children in a single line,
either horizontally or vertically. Supports flexible sizing, spacing,
alignment, and "fill" behavior for responsive layouts.

LinearLayout is the foundation for building structured UI layouts,
allowing children to be arranged sequentially with automatic sizing
based on content or available space.

```haxe
var layout = new LinearLayout();
layout.direction = VERTICAL;
layout.itemSpacing = 10;
layout.align = CENTER;

// Add children with different sizing
var header = new TextView();
header.viewHeight = 50; // Fixed height

var content = new View();
content.viewHeight = fill(); // Takes remaining space
content.flex = 2; // Takes 2x space compared to other FILL views

layout.add(header);
layout.add(content);
```

<div class="see"><strong>See:</strong> RowLayout A horizontal-only variant, ColumnLayout A vertical-only variant, View The base class for all UI components</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="direction"><div class="plugin-name">ui</div><code><span class="field-name">direction</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#direction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The layout direction determining how children are arranged.
- VERTICAL: Children are stacked top-to-bottom
- HORIZONTAL: Children are placed left-to-right

Changing direction automatically adjusts the alignment mode
to match the new orientation.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="itemSpacing"><div class="plugin-name">ui</div><code><span class="field-name">itemSpacing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#itemSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The spacing between child views in pixels.
Can be a percentage value relative to the parent size along
the layout axis (height for vertical, width for horizontal).

```haxe
layout.itemSpacing = 10; // 10 pixels between items
layout.itemSpacing = PERCENT(5); // 5% of parent size
```

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="align"><div class="plugin-name">ui</div><code><span class="field-name">align</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#align"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls how children are aligned along the layout axis.
- For VERTICAL layouts: TOP, CENTER, or BOTTOM
- For HORIZONTAL layouts: LEFT, CENTER, or RIGHT

The alignment determines where children are positioned when
they don't fill the entire available space.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="childrenDepth"><div class="plugin-name">ui</div><code><span class="field-name">childrenDepth</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ChildrenDepth/" class="type-link">ChildrenDepth</a></code><a class="header-anchor" href="#childrenDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls how depth values are assigned to children for render ordering.
- INCREMENT: First child gets depth 1, second gets 2, etc.
- DECREMENT: First child gets highest depth, decreasing for each
- SAME: All children get depth 1
- CUSTOM: Depth values are managed manually

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/ChildrenDepth/">ChildrenDepth</a></div>


<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeSize"><div class="plugin-name">ui</div><code><span class="field-name">computeSize</span><span class="parenthesis">(</span><span class="arg-name">parentWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">parentHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">parentLayoutMask</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ViewLayoutMask/" class="type-link">ViewLayoutMask</a><span class="operator">,</span> <span class="arg-name">persist</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the size of this layout based on its children and constraints.
Handles both fixed and flexible (FILL) sized children, respecting padding
and spacing. The computation differs based on layout direction.



| Name | Type | Description |
|------|------|-------------|
| `parentWidth` | [Float](/api-docs/clay-native/Float/) | Available width from parent  |
| `parentHeight` | [Float](/api-docs/clay-native/Float/) | Available height from parent  |
| `parentLayoutMask` | [ViewLayoutMask](/api-docs/clay-native/ceramic/ViewLayoutMask/) | Constraints from parent layout  |
| `persist` | [Bool](/api-docs/clay-native/Bool/) | Whether to save computed sizes for layout phase |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ui</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new LinearLayout instance.
By default, the layout is transparent and arranges children vertically.

## Private Members

<div class="signature field-method has-description has-plugin" id="layout"><div class="plugin-name">ui</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Positions and sizes all child views according to the layout rules.
Children are arranged sequentially along the layout axis with proper
spacing and alignment. FILL children expand to use remaining space.

The layout process:
1. Calculates space for fixed-size children
2. Distributes remaining space among FILL children based on flex values
3. Positions children with spacing and alignment
4. Applies depth sorting based on childrenDepth setting

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

