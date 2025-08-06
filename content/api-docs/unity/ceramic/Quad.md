---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Quad
target: Unity
permalink: api-docs/unity/ceramic/Quad/
---

# Quad

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Quad.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">Visual</a> → <strong>ceramic.Quad</strong> (Class) → <a href="/api-docs/unity/ceramic/GlyphQuad/">GlyphQuad</a>, <a href="/api-docs/unity/ceramic/Layer/">Layer</a>, <a href="/api-docs/unity/ceramic/LdtkVisual/">LdtkVisual</a>, <a href="/api-docs/unity/ceramic/Tilemap/">Tilemap</a>, <a href="/api-docs/unity/ceramic/TilemapQuad/">TilemapQuad</a></div>

The most basic and commonly used visual for displaying rectangles and images.

Quad is a specialized Visual that renders a rectangular shape which can be:
- A solid colored rectangle
- A textured rectangle (displaying an image)
- A portion of a texture (using frame coordinates)

Features:
- Color tinting
- Texture/image display
- Frame-based texture regions (for sprite sheets)
- Transparency control
- Texture tile support
- Automatic size from texture

Quads are the building blocks for most 2D visuals in Ceramic.
They're optimized for performance and batched together when possible.

```haxe
// Create a colored rectangle
var rect = new Quad();
rect.size(100, 50);
rect.color = Color.RED;
rect.pos(10, 10);

// Create a textured quad
var image = new Quad();
image.texture = assets.texture('hero');
image.anchor(0.5, 0.5);
image.pos(screen.width * 0.5, screen.height * 0.5);

// Use a portion of a texture
var sprite = new Quad();
sprite.texture = assets.texture('spritesheet');
sprite.frame(32, 64, 16, 16); // x, y, width, height
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/Visual/">Visual</a>, <a href="/api-docs/unity/ceramic/Mesh/">Mesh</a>, <a href="/api-docs/unity/ceramic/Texture/">Texture</a></div>


## Instance Members

<div class="signature field-var has-description" id="color"><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color to tint this quad.
Default is WHITE (no tinting).
The color is multiplied with the texture colors if a texture is set.
Use this to tint images or create colored rectangles.

<hr class="field-separator" />

<div class="signature field-var has-description" id="transparent"><code><span class="field-name">transparent</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#transparent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If set to `true`, this quad will be considered
transparent and won't be drawn on screen.
This only affects this quad's rendering - children
are still drawn normally (transparency is not inherited).
Useful for invisible containers or temporarily hiding quads.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tile"><code><span class="field-name">tile</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TextureTile/" class="type-link">TextureTile</a></code><a class="header-anchor" href="#tile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A texture tile defining a region of a texture to display.
When set, automatically configures the texture and frame properties.
Useful for working with texture atlases and sprite sheets.
Setting this to null clears the texture.

<hr class="field-separator" />

<div class="signature field-var has-description" id="texture"><code><span class="field-name">texture</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#texture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The texture (image) to display on this quad.
When set, the quad's size is automatically updated to match the texture size
unless a tile or frame is specified.
Setting to null makes the quad display as a solid color.
The texture's asset reference count is automatically managed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="frameX"><code><span class="field-name">frameX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#frameX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The X coordinate of the texture region to display.
Used with frameWidth/frameHeight to display a portion of the texture.
-1 means no frame is set (display entire texture).

<hr class="field-separator" />

<div class="signature field-var has-description" id="frameY"><code><span class="field-name">frameY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#frameY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Y coordinate of the texture region to display.
Used with frameWidth/frameHeight to display a portion of the texture.
-1 means no frame is set (display entire texture).

<hr class="field-separator" />

<div class="signature field-var has-description" id="frameWidth"><code><span class="field-name">frameWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#frameWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the texture region to display.
When set, also updates the quad's display width.
-1 means no frame is set (use full texture width).

<hr class="field-separator" />

<div class="signature field-var has-description" id="frameHeight"><code><span class="field-name">frameHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#frameHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the texture region to display.
When set, also updates the quad's display height.
-1 means no frame is set (use full texture height).

<hr class="field-separator" />

<div class="signature field-var has-description" id="rotateFrame"><code><span class="field-name">rotateFrame</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#rotateFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the texture frame should be rotated 90 degrees.
Used internally by texture packing systems to optimize atlas space.
Most users won't need to set this directly.

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="frame"><code><span class="field-name">frame</span><span class="parenthesis">(</span><span class="arg-name">frameX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frameY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frameWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frameHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#frame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the texture frame coordinates and size in one call.
Useful for displaying a specific region of a texture (sprite sheets).


| Name | Type | Description |
|------|------|-------------|
| `frameX` | [Float](/api-docs/unity/Float/) | X coordinate in the texture  |
| `frameY` | [Float](/api-docs/unity/Float/) | Y coordinate in the texture  |
| `frameWidth` | [Float](/api-docs/unity/Float/) | Width of the region to display  |
| `frameHeight` | [Float](/api-docs/unity/Float/) | Height of the region to display |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isRegular"><code><span class="field-name">isRegular</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isRegular"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if this quad is a regular rectangle.
A quad is regular if it has no rotation or skew transformations.
Regular quads can be rendered more efficiently in some cases.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if the quad is axis-aligned without skew |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new Quad.
The quad starts with no texture (solid color) and must be
sized and positioned after creation.

## Private Members

<div class="signature field-var no-description" id="FLAG_TRANSPARENT"><code><span class="field-name">FLAG_TRANSPARENT</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FLAG_TRANSPARENT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FLAG_ROTATE_FRAME"><code><span class="field-name">FLAG_ROTATE_FRAME</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FLAG_ROTATE_FRAME"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="computeMatrix"><code><span class="field-name">computeMatrix</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="textureDestroyed"><code><span class="field-name">textureDestroyed</span><span class="parenthesis">(</span><span class="arg-name">_</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#textureDestroyed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `_` | [Entity](/api-docs/unity/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

