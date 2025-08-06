---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: CrossX
target: Headless
permalink: api-docs/headless/elements/CrossX/
---

# CrossX

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/CrossX.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/headless/ceramic/Visual/">ceramic.Visual</a> → <strong>elements.CrossX</strong> (Class)</div>

A visual component that renders an X-shaped cross icon.

Creates a cross (×) shape using two rotated quads positioned at 45-degree angles.
Commonly used for close buttons, delete actions, or cancel indicators in UI.

The cross automatically scales to fit within the visual's bounds while maintaining
proper proportions. Both the line thickness and overall scale can be customized.

Example usage:
```haxe
var closeButton = new CrossX();
closeButton.size(24, 24);
closeButton.color = Color.RED;
closeButton.thickness = 3;
```

<div class="see"><strong>See:</strong> elements.Window For usage in window close buttons</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="thickness"><div class="plugin-name">elements</div><code><span class="field-name">thickness</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#thickness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The thickness of the cross lines in pixels.
Default value is 2.
Marked with @content to trigger recomputation when changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="internalScale"><div class="plugin-name">elements</div><code><span class="field-name">internalScale</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#internalScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scale factor applied to the cross shape within its bounds.
Default value is 1 (no scaling).
Values < 1 make the cross smaller within its container.
Marked with @content to trigger recomputation when changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="color"><div class="plugin-name">elements</div><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color of the cross.
Applies to both diagonal lines.
Default is Color.WHITE.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeContent"><div class="plugin-name">elements</div><code><span class="field-name">computeContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the content layout of the cross.
Positions and sizes the two diagonal quads based on current dimensions,
thickness, and internal scale settings.

The quads are sized to 70% of the container width to create proper
visual balance and ensure the cross fits nicely within its bounds.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new CrossX visual component.
Initializes with a 16x16 size and white color.

## Private Members

<div class="signature field-var has-description has-plugin" id="quad0"><div class="plugin-name">elements</div><code><span class="field-name">quad0</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Quad/" class="type-link">ceramic.Quad</a></code><a class="header-anchor" href="#quad0"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

First quad component forming one diagonal line of the cross.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="quad1"><div class="plugin-name">elements</div><code><span class="field-name">quad1</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Quad/" class="type-link">ceramic.Quad</a></code><a class="header-anchor" href="#quad1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Second quad component forming the other diagonal line of the cross.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

