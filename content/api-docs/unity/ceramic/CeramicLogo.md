---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: CeramicLogo
target: Unity
permalink: api-docs/unity/ceramic/CeramicLogo/
---

# CeramicLogo

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/CeramicLogo.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">Visual</a> → <a href="/api-docs/unity/ceramic/Mesh/">Mesh</a> → <strong>ceramic.CeramicLogo</strong> (Class)</div>

A visual component that renders the Ceramic engine logo as a mesh.

The logo consists of:
- An elliptical top section representing a ceramic disc
- A curved bottom section with shadow and highlight layers

The logo is procedurally generated and can be customized with:
- Resolution: Controls the smoothness of curves
- Tilt: Adjusts the perspective of the ellipse
- Shadow size: Controls the shadow layer thickness

```haxe
var logo = new CeramicLogo();
logo.size(224, 324); // Double the default size
logo.resolution = 2; // Higher quality curves
logo.tilt = 0.8; // Less tilted perspective
logo.shadowSize = 0.15; // Larger shadow
logo.pos(screen.width * 0.5, screen.height * 0.5);
logo.anchor(0.5, 0.5);
```

## Instance Members

<div class="signature field-var has-description" id="resolution"><code><span class="field-name">resolution</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#resolution"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls the quality/smoothness of the logo curves.
Higher values create more vertices for smoother curves.

Common values:
- 0.5: Low quality (faster rendering)
- 1.0: Normal quality (default)
- 2.0: High quality (smoother curves)

<hr class="field-separator" />

<div class="signature field-var has-description" id="tilt"><code><span class="field-name">tilt</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#tilt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls the perspective tilt of the top ellipse.
Lower values make the ellipse appear more flat/viewed from above.

Common values:
- 0.5: Very flat perspective
- 1.0: Normal perspective (default)
- 1.5: More tilted perspective

<hr class="field-separator" />

<div class="signature field-var has-description" id="shadowSize"><code><span class="field-name">shadowSize</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#shadowSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The size of the shadow layer as a fraction of the logo width.
Controls how thick the gray shadow section appears.

Common values:
- 0.05: Thin shadow
- 0.1075: Normal shadow (default)
- 0.15: Thick shadow

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeContent"><code><span class="field-name">computeContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates the logo mesh geometry.
Called automatically when content is marked dirty (size, resolution, tilt, or shadowSize changes).
Builds the logo in three layers:
1. Top ellipse (gray)
2. Bottom section with shadow (lighter gray)
3. Bottom section highlight (white)

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Ceramic logo mesh.
The logo is initialized with default size of 112x162 pixels.
Color mapping is set to INDICES for per-triangle coloring.

## Private Members

<div class="signature field-var has-description" id="numEllipseVertices"><code><span class="field-name">numEllipseVertices</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numEllipseVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of vertices used for the ellipse section.
Used internally to track where the ellipse ends and bottom sections begin.

<hr class="field-separator" />

<div class="signature field-var has-description" id="numEllipseIndices"><code><span class="field-name">numEllipseIndices</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numEllipseIndices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of indices used for the ellipse section.
Used internally to track the ellipse mesh data.

<hr class="field-separator" />

<div class="signature field-var has-description" id="filledBottom"><code><span class="field-name">filledBottom</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#filledBottom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tracks how much of the bottom section has been filled.
Used internally when building the shadow and highlight layers.

<hr class="field-separator" />

<div class="signature field-var has-description" id="curveEasing"><code><span class="field-name">curveEasing</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/BezierEasing/" class="type-link">BezierEasing</a></code><a class="header-anchor" href="#curveEasing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bezier easing curve used for the bottom section curvature.
Creates the distinctive curved shape of the logo's bottom.

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeEllipse"><code><span class="field-name">computeEllipse</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeEllipse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates the elliptical top section of the logo.
Creates a filled ellipse using triangle fan technique.



| Name | Type | Description |
|------|------|-------------|
| `color` | [Color](/api-docs/unity/ceramic/Color/) | The color to apply to the ellipse triangles |

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeBottomSection"><code><span class="field-name">computeBottomSection</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="operator">,</span> <span class="arg-name">cut</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeBottomSection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates a layer of the bottom section of the logo.
Creates a curved shape that connects to the ellipse and curves down to a point.
Called twice: once for the shadow layer and once for the highlight layer.



| Name | Type | Description |
|------|------|-------------|
| `color` | [Color](/api-docs/unity/ceramic/Color/) | The color to apply to this section  |
| `cut` | [Float](/api-docs/unity/Float/) | The horizontal cutoff point as a fraction of width (0-1). Used to create the layered shadow/highlight effect. |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

