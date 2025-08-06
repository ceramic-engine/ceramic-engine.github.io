---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TextureAtlasRegion
target: Unity
permalink: api-docs/unity/ceramic/TextureAtlasRegion/
---

# TextureAtlasRegion

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TextureAtlasRegion.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/TextureTile/">TextureTile</a> → <strong>ceramic.TextureAtlasRegion</strong> (Class)</div>

Represents a single image region within a texture atlas.

TextureAtlasRegion defines a rectangular area within a texture atlas page
that contains a specific image. It extends TextureTile, allowing it to be
directly assigned to visual objects like Quad.tile for rendering.

Key features:
- Supports trimmed sprites with offset data
- Handles rotated regions for optimal packing
- Automatic UV coordinate calculation
- Direct integration with the rendering system

The region stores both the packed dimensions (actual space used in atlas)
and original dimensions (including trimmed transparent areas), enabling
proper sprite alignment and collision detection.

```haxe
// Get a region from atlas
var region = atlas.region("player_idle");

// Apply to a quad (basic support)
var quad = new Quad();
quad.tile = region;

// Position accounting for trim offset
quad.pos(100 + region.offsetX, 200 + region.offsetY);

// Apply to a sprite (extended support of trimmed regions with offsets, needs sprite plugin)
var sprite = new Sprite();
sprite.region = region;
```

<div class="see"><strong>See:</strong> TextureAtlas The container for regions, TextureTile Base class for texture sub-regions, Quad.tile Property that accepts TextureAtlasRegion</div>


## Instance Members

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique identifier for this region within the atlas.

Used to retrieve specific images from the atlas.
Often matches the original image filename without extension.

<hr class="field-separator" />

<div class="signature field-var has-description" id="atlas"><code><span class="field-name">atlas</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a></code><a class="header-anchor" href="#atlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the containing texture atlas.

Provides access to the atlas pages and other regions.
Set automatically during region creation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="page"><code><span class="field-name">page</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#page"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Index of the texture page containing this region.

Large atlases may span multiple texture pages.
Used to retrieve the correct texture for rendering.

<hr class="field-separator" />

<div class="signature field-var has-description" id="packedWidth"><code><span class="field-name">packedWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#packedWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Actual width of packed pixels in the atlas.

This is the width after any rotation applied during packing.
May be different from display width if the region was rotated.
Used for texture coordinate calculations.

<hr class="field-separator" />

<div class="signature field-var has-description" id="packedHeight"><code><span class="field-name">packedHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#packedHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Actual height of packed pixels in the atlas.

This is the height after any rotation applied during packing.
May be different from display height if the region was rotated.
Used for texture coordinate calculations.

<hr class="field-separator" />

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

X position of the region within its texture page.

Pixel coordinate from the left edge of the texture.
Used to calculate texture coordinates for rendering.

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Y position of the region within its texture page.

Pixel coordinate from the top edge of the texture.
Used to calculate texture coordinates for rendering.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Display width of the region (before any rotation).

This is the width of the visible pixels, excluding
any transparent areas that were trimmed during packing.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Display height of the region (before any rotation).

This is the height of the visible pixels, excluding
any transparent areas that were trimmed during packing.

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetX"><code><span class="field-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal offset from original sprite origin.

When sprites are trimmed, this offset maintains proper
alignment. Positive values shift the sprite right.
Add to sprite X position for correct placement.

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetY"><code><span class="field-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical offset from original sprite origin.

When sprites are trimmed, this offset maintains proper
alignment. Positive values shift the sprite down.
Add to sprite Y position for correct placement.

<hr class="field-separator" />

<div class="signature field-var has-description" id="originalWidth"><code><span class="field-name">originalWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#originalWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Original sprite width before trimming.

Includes any transparent margins that were removed during
atlas packing. Use this for maintaining consistent sprite
sizes and proper collision bounds.

<hr class="field-separator" />

<div class="signature field-var has-description" id="originalHeight"><code><span class="field-name">originalHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#originalHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Original sprite height before trimming.

Includes any transparent margins that were removed during
atlas packing. Use this for maintaining consistent sprite
sizes and proper collision bounds.

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeFrame"><code><span class="field-name">computeFrame</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates texture coordinates from pixel positions.

Converts the pixel-based region coordinates (x, y, width, height)
into normalized UV coordinates for GPU rendering. This method must
be called after the atlas page textures are loaded to ensure proper
coordinate calculation.

The method handles:
- Texture density scaling
- Coordinate normalization (0-1 range)
- Frame property updates for rendering

Typically called automatically by TextureAtlas.computeFrames()
after all pages are loaded.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">atlas</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a><span class="operator">,</span> <span class="arg-name">page</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new texture atlas region.

Typically called internally by atlas parsers and packers.
Automatically registers this region with the atlas.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/unity/String/) | Unique identifier for this region  |
| `atlas` | [TextureAtlas](/api-docs/unity/ceramic/TextureAtlas/) | The containing texture atlas  |
| `page` | [Int](/api-docs/unity/Int/) | Index of the texture page containing this region |

## Private Members

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a detailed string representation of this region.

Includes all region properties for debugging purposes:
name, page index, dimensions, offsets, and texture coordinates.


| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | String representation with all region data |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

