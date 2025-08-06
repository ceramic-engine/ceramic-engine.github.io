---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: BiBorderedTriangle
target: Unity
permalink: api-docs/unity/elements/BiBorderedTriangle/
---

# BiBorderedTriangle

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/BiBorderedTriangle.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/unity/ceramic/Mesh/">ceramic.Mesh</a> → <strong>elements.BiBorderedTriangle</strong> (Class)</div>

A triangular shape with customizable border rendering.

This specialized mesh creates an upward-pointing triangle with a border that can have
different colors and alpha values than the inner triangle. The triangle is rendered
as a composite of two triangles - an inner filled triangle and an outer border triangle.

The vertex layout creates a larger outer triangle for the border and a smaller inner
triangle for the fill, allowing for independent color control of each region.

Example usage:
```haxe
var triangle = new BiBorderedTriangle();
triangle.size(100, 100);
triangle.innerColor = Color.BLUE;
triangle.borderColor = Color.WHITE;
triangle.borderSize = 2;
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="innerColor"><div class="plugin-name">elements</div><code><span class="field-name">innerColor</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#innerColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color of the inner triangle fill.
Defaults to Color.WHITE.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="innerAlpha"><div class="plugin-name">elements</div><code><span class="field-name">innerAlpha</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#innerAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The alpha transparency of the inner triangle fill.
Values range from 0.0 (fully transparent) to 1.0 (fully opaque).
Defaults to 1.0.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="borderSize"><div class="plugin-name">elements</div><code><span class="field-name">borderSize</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#borderSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the border in pixels.
The border extends outward from the triangle edges.
Defaults to 1.0.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="borderColor"><div class="plugin-name">elements</div><code><span class="field-name">borderColor</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#borderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color of the triangle border.
Defaults to Color.BLACK.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="borderAlpha"><div class="plugin-name">elements</div><code><span class="field-name">borderAlpha</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#borderAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The alpha transparency of the triangle border.
Values range from 0.0 (fully transparent) to 1.0 (fully opaque).
Defaults to 1.0.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeContent"><div class="plugin-name">elements</div><code><span class="field-name">computeContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recomputes the triangle mesh when properties change.
Called automatically when width, height, or borderSize are modified.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new BiBorderedTriangle instance.

The triangle is initialized with:
- 6 vertices (3 for inner triangle, 3 for outer border triangle)
- 5 triangle indices to form the border and fill regions
- White inner color and gray border color
- Color mapping set to INDICES for per-triangle coloring

## Private Members

<div class="signature field-method has-description has-plugin" id="updateVertices"><div class="plugin-name">elements</div><code><span class="field-name">updateVertices</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the vertex positions based on the current width, height, and borderSize.

The vertex layout is:
- Vertices 0-2: Inner triangle (bottom-left, top-center, bottom-right)
- Vertices 3-5: Outer border triangle (extended by borderSize)

The triangle points upward with its apex at the top center.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

