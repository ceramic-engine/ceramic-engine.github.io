---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: RowLayout
target: Unity
permalink: api-docs/unity/ceramic/RowLayout/
---

# RowLayout

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/RowLayout.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">Visual</a> → <a href="/api-docs/unity/ceramic/Quad/">Quad</a> → <a href="/api-docs/unity/ceramic/Layer/">Layer</a> → <a href="/api-docs/unity/ceramic/View/">View</a> → <a href="/api-docs/unity/ceramic/LinearLayout/">LinearLayout</a> → <strong>ceramic.RowLayout</strong> (Class) → <a href="/api-docs/unity/elements/ImRowLayout/">elements.ImRowLayout</a>, <a href="/api-docs/unity/elements/LabeledFieldView/">elements.LabeledFieldView</a>, <a href="/api-docs/unity/elements/LabeledView/">elements.LabeledView</a>, <a href="/api-docs/unity/elements/TabsLayout/">elements.TabsLayout</a></div>

A layout that arranges its children horizontally in a single row.
This class is a `LinearLayout` subclass, restricted to its horizontal direction.

RowLayout provides a convenient way to create horizontal layouts without
the risk of accidentally changing the direction at runtime. It inherits
all the alignment, spacing, and distribution features of LinearLayout.

```haxe
var row = new RowLayout();
row.itemSpacing = 10;
row.align = CENTER;
row.add(button1);
row.add(button2);
row.add(button3);
```

<div class="see"><strong>See:</strong> ColumnLayout For vertical arrangement, LinearLayout For layouts that can change direction</div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ui</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new RowLayout.
The direction is automatically set to HORIZONTAL and cannot be changed.

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

