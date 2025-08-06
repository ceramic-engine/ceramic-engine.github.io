---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: ColumnLayout
target: Unity
permalink: api-docs/unity/ceramic/ColumnLayout/
---

# ColumnLayout

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/ColumnLayout.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">Visual</a> → <a href="/api-docs/unity/ceramic/Quad/">Quad</a> → <a href="/api-docs/unity/ceramic/Layer/">Layer</a> → <a href="/api-docs/unity/ceramic/View/">View</a> → <a href="/api-docs/unity/ceramic/LinearLayout/">LinearLayout</a> → <strong>ceramic.ColumnLayout</strong> (Class) → <a href="/api-docs/unity/elements/FormLayout/">elements.FormLayout</a>, <a href="/api-docs/unity/elements/Window/">elements.Window</a></div>

A specialized LinearLayout that arranges children vertically in a single column.

ColumnLayout is a convenience class that enforces vertical layout direction.
It provides all the features of LinearLayout but prevents direction changes,
making the layout intent clearer in code.

Features inherited from LinearLayout:
- Item spacing control
- Alignment options (horizontal and vertical)
- Padding support
- Auto-sizing based on content

```haxe
var column = new ColumnLayout();
column.itemSpacing = 10;
column.align = CENTER;
column.verticalAlign = TOP;

// Add items vertically
column.add(new TextView("Title"));
column.add(new TextView("Subtitle"));
column.add(new Button("Click Me"));
```

<div class="see"><strong>See:</strong> LinearLayout for the base implementation, RowLayout for horizontal arrangement</div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ui</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new ColumnLayout with vertical direction.
The direction is permanently set to VERTICAL and cannot be changed.

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

