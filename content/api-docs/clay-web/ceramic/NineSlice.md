---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: NineSlice
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/NineSlice/
---

# NineSlice

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/NineSlice.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">Visual</a> → <strong>ceramic.NineSlice</strong> (Class)</div>

A visual divided into 9 areas to create "nine-slice" textured scalable objects.

NineSlice is a technique used to create scalable UI elements and graphics
while preserving their visual integrity. The texture is divided into 9 sections:
- 4 corners (remain at original size)
- 4 edges (scale in one direction only)
- 1 center (scales in both directions)

This allows creating buttons, panels, and frames that can scale to any size
while keeping corners crisp and edges properly stretched or tiled.

Key features:
- Configurable slice distances from each edge
- Support for stretching, repeating, or mirroring the edges and center
- Automatic handling of texture frames and rotation
- Efficient rendering using only necessary quads

Common uses:
- UI panels and windows
- Scalable buttons
- Dialog boxes and tooltips
- Decorative frames
- Progress bars

```haxe
// Create a scalable button
var button = new NineSlice();
button.texture = assets.texture('button');
button.slice(16); // 16 pixels from each edge
button.size(200, 60); // Scale to any size

// Different slicing for each edge
var panel = new NineSlice();
panel.texture = assets.texture('panel');
panel.slice(20, 30, 40, 30); // top, right, bottom, left

// Tiled edges instead of stretched
var frame = new NineSlice();
frame.texture = assets.texture('ornate-frame');
frame.slice(32);
frame.edgeRendering = REPEAT;
frame.innerRendering = NONE; // Transparent center
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/NineSliceRendering/">NineSliceRendering</a>, <a href="/api-docs/clay-web/ceramic/Visual/">Visual</a></div>


## Instance Members

<div class="signature field-var has-description" id="sliceTop"><code><span class="field-name">sliceTop</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sliceTop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Distance from top border to cut slices at the top

<hr class="field-separator" />

<div class="signature field-var has-description" id="sliceRight"><code><span class="field-name">sliceRight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sliceRight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Distance from right border to cut slices on the right

<hr class="field-separator" />

<div class="signature field-var has-description" id="sliceBottom"><code><span class="field-name">sliceBottom</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sliceBottom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Distance from bottom border to cut slices at the bottom

<hr class="field-separator" />

<div class="signature field-var has-description" id="sliceLeft"><code><span class="field-name">sliceLeft</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sliceLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Distance from left border to cut slices on the left

<hr class="field-separator" />

<div class="signature field-var has-description" id="innerRendering"><code><span class="field-name">innerRendering</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/NineSliceRendering/" class="type-link">NineSliceRendering</a></code><a class="header-anchor" href="#innerRendering"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

How to render the center section.
- STRETCH: Scales the center to fill the area (default)
- REPEAT: Tiles the center texture
- MIRROR: Tiles with mirroring for seamless patterns
- NONE: No center rendering (transparent middle)

<hr class="field-separator" />

<div class="signature field-var has-description" id="edgeRendering"><code><span class="field-name">edgeRendering</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/NineSliceRendering/" class="type-link">NineSliceRendering</a></code><a class="header-anchor" href="#edgeRendering"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

How to render the edge sections (top, right, bottom, left).
- STRETCH: Scales edges to fill the area (default)
- REPEAT: Tiles the edge textures
- MIRROR: Tiles with mirroring for seamless patterns
- NONE: No edge rendering

<hr class="field-separator" />

<div class="signature field-var has-description" id="texture"><code><span class="field-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#texture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The texture to use for this NineSlice object

<hr class="field-separator" />

<div class="signature field-var has-description" id="rotateFrame"><code><span class="field-name">rotateFrame</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#rotateFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the texture frame is rotated 90 degrees.
Used internally when working with texture atlases that pack
rotated frames for optimal space usage.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tile"><code><span class="field-name">tile</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureTile/" class="type-link">TextureTile</a></code><a class="header-anchor" href="#tile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional texture tile to use instead of a full texture.
Useful when working with texture atlases where the nine-slice
image is packed with other graphics.

<hr class="field-separator" />

<div class="signature field-var has-description" id="color"><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The tint color applied to all sections of the nine-slice.
Use Color.WHITE for no tinting.

<hr class="field-separator" />

<div class="signature field-method has-description" id="slice"><code><span class="field-name">slice</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#slice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set distance from borders to cut slices.
This is equivalent to `slice(value, value, value, value)`


| Name | Type | Description |
|------|------|-------------|
| `value` | [Float](/api-docs/clay-web/Float/) | Distance in pixels from all edges |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rendering"><code><span class="field-name">rendering</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/NineSliceRendering/" class="type-link">NineSliceRendering</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rendering"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set rendering mode for both inner and edge sections.


| Name | Type | Description |
|------|------|-------------|
| `value` | [NineSliceRendering](/api-docs/clay-web/ceramic/NineSliceRendering/) | Rendering mode to apply to all sections |

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeContent"><code><span class="field-name">computeContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the nine-slice geometry based on current size and slice settings.
Called automatically when size, slices, or rendering modes change.

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="renderingDirty"><code><span class="field-name">renderingDirty</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#renderingDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="quadTop"><code><span class="field-name">quadTop</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#quadTop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="quadRight"><code><span class="field-name">quadRight</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#quadRight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="quadBottom"><code><span class="field-name">quadBottom</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#quadBottom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="quadLeft"><code><span class="field-name">quadLeft</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#quadLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="quadCenter"><code><span class="field-name">quadCenter</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#quadCenter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="repeatTop"><code><span class="field-name">repeatTop</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Repeat/" class="type-link">Repeat</a></code><a class="header-anchor" href="#repeatTop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="repeatRight"><code><span class="field-name">repeatRight</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Repeat/" class="type-link">Repeat</a></code><a class="header-anchor" href="#repeatRight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="repeatBottom"><code><span class="field-name">repeatBottom</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Repeat/" class="type-link">Repeat</a></code><a class="header-anchor" href="#repeatBottom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="repeatLeft"><code><span class="field-name">repeatLeft</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Repeat/" class="type-link">Repeat</a></code><a class="header-anchor" href="#repeatLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="repeatCenter"><code><span class="field-name">repeatCenter</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Repeat/" class="type-link">Repeat</a></code><a class="header-anchor" href="#repeatCenter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="quadTopRight"><code><span class="field-name">quadTopRight</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#quadTopRight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="quadBottomRight"><code><span class="field-name">quadBottomRight</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#quadBottomRight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="quadBottomLeft"><code><span class="field-name">quadBottomLeft</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#quadBottomLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="quadTopLeft"><code><span class="field-name">quadTopLeft</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#quadTopLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="createCornerQuads"><code><span class="field-name">createCornerQuads</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createCornerQuads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="createCenterQuad"><code><span class="field-name">createCenterQuad</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createCenterQuad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroyCenterQuad"><code><span class="field-name">destroyCenterQuad</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroyCenterQuad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="createEdgeQuads"><code><span class="field-name">createEdgeQuads</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createEdgeQuads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroyEdgeQuads"><code><span class="field-name">destroyEdgeQuads</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroyEdgeQuads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="createCenterRepeat"><code><span class="field-name">createCenterRepeat</span><span class="parenthesis">(</span><span class="arg-name">rendering</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/NineSliceRendering/" class="type-link">NineSliceRendering</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createCenterRepeat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rendering` | [NineSliceRendering](/api-docs/clay-web/ceramic/NineSliceRendering/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroyCenterRepeat"><code><span class="field-name">destroyCenterRepeat</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroyCenterRepeat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="createEdgeRepeats"><code><span class="field-name">createEdgeRepeats</span><span class="parenthesis">(</span><span class="arg-name">rendering</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/NineSliceRendering/" class="type-link">NineSliceRendering</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createEdgeRepeats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rendering` | [NineSliceRendering](/api-docs/clay-web/ceramic/NineSliceRendering/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroyEdgeRepeats"><code><span class="field-name">destroyEdgeRepeats</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroyEdgeRepeats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="syncQuadsAndRepeats"><code><span class="field-name">syncQuadsAndRepeats</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#syncQuadsAndRepeats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateRepeatTile"><code><span class="field-name">updateRepeatTile</span><span class="parenthesis">(</span><span class="arg-name">repeat</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Repeat/" class="type-link">Repeat</a><span class="operator">,</span> <span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="arg-name">rotateFrame</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">texX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">texY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">texWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">texHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frameX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frameY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frameWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frameHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureTile/" class="type-link">TextureTile</a></code><a class="header-anchor" href="#updateRepeatTile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `repeat` | [Repeat](/api-docs/clay-web/ceramic/Repeat/) |
| `texture` | [Texture](/api-docs/clay-web/ceramic/Texture/) |
| `rotateFrame` | [Bool](/api-docs/clay-web/Bool/) |
| `texX` | [Float](/api-docs/clay-web/Float/) |
| `texY` | [Float](/api-docs/clay-web/Float/) |
| `texWidth` | [Float](/api-docs/clay-web/Float/) |
| `texHeight` | [Float](/api-docs/clay-web/Float/) |
| `frameX` | [Float](/api-docs/clay-web/Float/) |
| `frameY` | [Float](/api-docs/clay-web/Float/) |
| `frameWidth` | [Float](/api-docs/clay-web/Float/) |
| `frameHeight` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [TextureTile](/api-docs/clay-web/ceramic/TextureTile/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

