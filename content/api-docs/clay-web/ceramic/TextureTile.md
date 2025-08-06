---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TextureTile
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/TextureTile/
---

# TextureTile

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TextureTile.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TextureTile</strong> (Class) → <a href="/api-docs/clay-web/ceramic/TextureAtlasRegion/">TextureAtlasRegion</a>, <a href="/api-docs/clay-web/ceramic/_TextureTilePacker/PackedTextureTile/">ceramic._TextureTilePacker.PackedTextureTile</a></div>

Defines a rectangular sub-region within a texture for rendering.

TextureTile represents a portion of a texture that can be rendered
independently, similar to a sprite frame. It's commonly used for:
- Texture atlas regions
- Sprite sheet frames
- Tiled textures
- UI element slicing

The tile can be assigned to visual objects like Quad.tile to render
only the specified portion of the texture. Supports rotation for
optimally packed texture atlases and edge insets to prevent bleeding.

```haxe
// Create a tile from a sprite sheet
var spriteSheet = assets.texture('characters.png');
var playerTile = new TextureTile(
    spriteSheet,
    0, 0,      // Top-left corner
    32, 48,    // 32x48 sprite
    false, 0.5 // No rotation, 0.5 pixel inset
);

// Apply to a quad
var player = new Quad();
player.tile = playerTile;
player.size(32, 48);
```

<div class="see"><strong>See:</strong> Quad.tile Property that accepts TextureTile, TextureAtlasRegion Extends this class for atlas support, Texture The source texture containing the tile</div>


## Instance Members

<div class="signature field-var has-description" id="texture"><code><span class="field-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#texture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The source texture containing this tile.

References the full texture from which this tile
extracts its rectangular region. Must be a valid
loaded texture for the tile to render.

<hr class="field-separator" />

<div class="signature field-var has-description" id="frameX"><code><span class="field-name">frameX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#frameX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

X coordinate of the tile's top-left corner in the texture.

Measured in texture pixels from the texture's origin.
Combined with frameWidth defines the horizontal bounds.

<hr class="field-separator" />

<div class="signature field-var has-description" id="frameY"><code><span class="field-name">frameY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#frameY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Y coordinate of the tile's top-left corner in the texture.

Measured in texture pixels from the texture's origin.
Combined with frameHeight defines the vertical bounds.

<hr class="field-separator" />

<div class="signature field-var has-description" id="frameWidth"><code><span class="field-name">frameWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#frameWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width of the tile region in texture pixels.

Defines how many pixels wide to sample from the texture
starting at frameX. Should not exceed texture bounds.

<hr class="field-separator" />

<div class="signature field-var has-description" id="frameHeight"><code><span class="field-name">frameHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#frameHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height of the tile region in texture pixels.

Defines how many pixels tall to sample from the texture
starting at frameY. Should not exceed texture bounds.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rotateFrame"><code><span class="field-name">rotateFrame</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#rotateFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this tile is rotated 90 degrees in the texture.

Used by texture packers to fit more images by rotating them.
When true, the tile's width and height are swapped during
rendering to display correctly. Common in optimized atlases.

<hr class="field-separator" />

<div class="signature field-var has-description" id="edgeInset"><code><span class="field-name">edgeInset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#edgeInset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pixel inset applied to tile edges during rendering.

Shrinks the UV coordinates by this amount to prevent texture
bleeding between adjacent tiles in an atlas. Useful values:
- 0: No inset (default)
- 0.5: Half-pixel inset (common for atlases)
- 1.0: Full pixel inset (for problematic cases)

The inset is applied in texture space, not screen space.

<hr class="field-separator" />

<div class="signature field-method has-description" id="frame"><code><span class="field-name">frame</span><span class="parenthesis">(</span><span class="arg-name">frameX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frameY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frameWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frameHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#frame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the tile's frame coordinates.

Convenience method to update all frame properties at once.
Does not affect texture, rotation, or inset settings.



| Name | Type | Description |
|------|------|-------------|
| `frameX` | [Float](/api-docs/clay-web/Float/) | New X coordinate in texture pixels  |
| `frameY` | [Float](/api-docs/clay-web/Float/) | New Y coordinate in texture pixels  |
| `frameWidth` | [Float](/api-docs/clay-web/Float/) | New width in texture pixels  |
| `frameHeight` | [Float](/api-docs/clay-web/Float/) | New height in texture pixels |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="arg-name">frameX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frameY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frameWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frameHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">rotateFrame</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">edgeInset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new texture tile.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `texture` | [Texture](/api-docs/clay-web/ceramic/Texture/) | | Source texture containing the tile  |
| `frameX` | [Float](/api-docs/clay-web/Float/) | | X coordinate in texture pixels  |
| `frameY` | [Float](/api-docs/clay-web/Float/) | | Y coordinate in texture pixels  |
| `frameWidth` | [Float](/api-docs/clay-web/Float/) | | Width in texture pixels  |
| `frameHeight` | [Float](/api-docs/clay-web/Float/) | | Height in texture pixels  |
| `rotateFrame` | [Bool](/api-docs/clay-web/Bool/) | `false` | Whether tile is rotated 90 degrees (default: false)  |
| `edgeInset` | [Float](/api-docs/clay-web/Float/) | `0` | Pixel inset for edge bleeding prevention (default: 0) |

## Private Members

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representation of this tile.

Includes texture reference and frame coordinates for debugging.
Rotation and inset values are not included in the output.


| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | String with tile properties |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

