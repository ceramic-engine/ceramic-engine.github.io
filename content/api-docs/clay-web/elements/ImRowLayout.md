---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: ImRowLayout
target: Clay (Web)
permalink: api-docs/clay-web/elements/ImRowLayout/
---

# ImRowLayout

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/ImRowLayout.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/clay-web/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/clay-web/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/clay-web/ceramic/View/">ceramic.View</a> → <a href="/api-docs/clay-web/ceramic/LinearLayout/">ceramic.LinearLayout</a> → <a href="/api-docs/clay-web/ceramic/RowLayout/">ceramic.RowLayout</a> → <strong>elements.ImRowLayout</strong> (Class)</div>

A specialized row layout for the immediate mode UI system.

ImRowLayout extends the standard RowLayout with pre-configured
settings optimized for immediate mode UI rendering. It provides
consistent spacing between UI elements when they are arranged
horizontally in a row.

This layout is automatically created and managed by the Im system
when using row-based layouts through Im.beginRow() and Im.endRow().

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/elements/Im/">Im</a>, RowLayout</div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new ImRowLayout instance.

Initializes the layout with:
- 6 pixels of spacing between items (optimized for UI elements)

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

