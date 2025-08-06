---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TextureTilePacker
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/TextureTilePacker/
---

# TextureTilePacker

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TextureTilePacker.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <strong>ceramic.TextureTilePacker</strong> (Class)</div>

Dynamic texture tile allocator with automatic packing and reuse capabilities.

TextureTilePacker provides a grid-based allocation system for dynamically
creating and managing texture tiles within render textures. Unlike static
texture atlases, this packer allows runtime allocation and deallocation
of texture regions, making it ideal for:
- Dynamic text rendering
- Procedural graphics generation
- Temporary visual effects
- Runtime sprite composition

Features:
- Grid-based allocation with configurable padding
- Automatic texture chaining when space runs out
- Tile reuse after deallocation
- Visual stamping into allocated tiles
- Margin support to prevent bleeding

The packer divides textures into a grid of fixed-size cells (pads) and
allocates contiguous blocks for tiles that need more space.

```haxe
// Create a packer for dynamic text
var packer = new TextureTilePacker(
    true,    // Auto-render
    2048,    // Max width
    2048,    // Max height
    64, 64,  // Pad size
    2        // Margin
);

// Allocate a tile
var tile = packer.allocTile(128, 32);

// Render content into the tile
var text = new Text();
text.content = "Dynamic Text";
packer.stamp(tile, text, () -> {
    // Use the tile
    quad.tile = tile;
});

// Release when done
packer.releaseTile(tile);
```

<div class="see"><strong>See:</strong> TextureTile The tiles allocated by this packer, RenderTexture The target texture for packing</div>


## Instance Members

<div class="signature field-var has-description" id="texture"><code><span class="field-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/RenderTexture/" class="type-link">RenderTexture</a></code><a class="header-anchor" href="#texture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The render texture containing all allocated tiles.

This texture is rendered to when stamping visuals into tiles.
Size is determined by constructor parameters and screen density.

<hr class="field-separator" />

<div class="signature field-var has-description" id="padWidth"><code><span class="field-name">padWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#padWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width of each grid cell in pixels.

Tiles smaller than this will still occupy a full cell.
Larger tiles will span multiple cells horizontally.

<hr class="field-separator" />

<div class="signature field-var has-description" id="padHeight"><code><span class="field-name">padHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#padHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height of each grid cell in pixels.

Tiles smaller than this will still occupy a full cell.
Larger tiles will span multiple cells vertically.

<hr class="field-separator" />

<div class="signature field-var has-description" id="margin"><code><span class="field-name">margin</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#margin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Margin around each tile in pixels.

Prevents texture bleeding between adjacent tiles.
Applied on all sides of allocated regions.

<hr class="field-separator" />

<div class="signature field-var has-description" id="nextPacker"><code><span class="field-name">nextPacker</span><span class="operator">:</span> <a href="#" class="type-link">TextureTilePacker</a></code><a class="header-anchor" href="#nextPacker"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Next packer in the chain for overflow handling.

When this packer runs out of space, tiles are allocated
from the next packer, creating a linked list of textures.

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="allocTile"><code><span class="field-name">allocTile</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureTile/" class="type-link">TextureTile</a></code><a class="header-anchor" href="#allocTile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allocates a new tile of the specified size.

Searches for available space in the grid that can accommodate
the requested dimensions. If the tile is larger than a single
pad, multiple adjacent pads are allocated. When no space is
available, automatically creates a chained packer.



| Name | Type | Description |
|------|------|-------------|
| `width` | [Int](/api-docs/clay-web/Int/) | Required tile width in pixels  |
| `height` | [Int](/api-docs/clay-web/Int/) | Required tile height in pixels  |

| Returns | Description |
|---------|-------------|
| [TextureTile](/api-docs/clay-web/ceramic/TextureTile/) | The allocated TextureTile, or null if dimensions exceed maximum * ```haxe // Allocate a 100x50 tile var tile = packer.allocTile(100, 50); if (tile != null) { // Tile successfully allocated myQuad.tile = tile; } ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="releaseTile"><code><span class="field-name">releaseTile</span><span class="parenthesis">(</span><span class="arg-name">tile</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureTile/" class="type-link">TextureTile</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#releaseTile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Releases a previously allocated tile for reuse.

Marks the tile's grid cells as available for future allocations.
The release is deferred by two frames to ensure any pending
rendering operations complete first.



| Name | Type | Description |
|------|------|-------------|
| `tile` | [TextureTile](/api-docs/clay-web/ceramic/TextureTile/) | The tile to release (must be from this packer)  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stamp"><code><span class="field-name">stamp</span><span class="parenthesis">(</span><span class="arg-name">tile</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureTile/" class="type-link">TextureTile</a><span class="operator">,</span> <span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stamp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Renders a visual into an allocated tile.

Stamps the visual's content into the tile's region of the render
texture. The visual is temporarily reparented and transformed to
fit within the tile bounds, including margins.



| Name | Type | Description |
|------|------|-------------|
| `tile` | [TextureTile](/api-docs/clay-web/ceramic/TextureTile/) | The target tile to render into  |
| `visual` | [Visual](/api-docs/clay-web/ceramic/Visual/) | The visual content to render  |
| `done` | Function | Callback invoked when rendering completes * ```haxe // Render text into a tile var tile = packer.allocTile(200, 50); var text = new Text(); text.content = "Hello World"; * packer.stamp(tile, text, () -> { // Text is now rendered in the tile sprite.tile = tile; }); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="managesTexture"><code><span class="field-name">managesTexture</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#managesTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a texture is managed by this packer or its chain.

Recursively searches through this packer and any chained
packers to determine if the given texture belongs to the
allocation system.



| Name | Type | Description |
|------|------|-------------|
| `texture` | [Texture](/api-docs/clay-web/ceramic/Texture/) | The texture to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if this packer chain manages the texture |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">autoRender</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">maxPixelTextureWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">maxPixelTextureHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">padWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">16</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">padHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">16</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">margin</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new texture tile packer.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `autoRender` | [Bool](/api-docs/clay-web/Bool/) | | Whether to automatically render changes to the texture  |
| `maxPixelTextureWidth` | [Int](/api-docs/clay-web/Int/) | `-1` | Maximum texture width (-1 for auto based on density)  |
| `maxPixelTextureHeight` | [Int](/api-docs/clay-web/Int/) | `-1` | Maximum texture height (-1 for auto based on density)  |
| `padWidth` | [Int](/api-docs/clay-web/Int/) | `16` | Width of each grid cell (default: 16)  |
| `padHeight` | [Int](/api-docs/clay-web/Int/) | `16` | Height of each grid cell (default: 16)  |
| `margin` | [Int](/api-docs/clay-web/Int/) | `1` | Pixel margin around tiles (default: 1) |

## Private Members

<div class="signature field-var has-description" id="areas"><code><span class="field-name">areas</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/TextureTile/" class="type-link">TextureTile</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#areas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Grid storage for allocated tiles.
Indexed as [row * numCols + col].

<hr class="field-separator" />

<div class="signature field-var has-description" id="numCols"><code><span class="field-name">numCols</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numCols"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of columns in the allocation grid.

<hr class="field-separator" />

<div class="signature field-var has-description" id="numRows"><code><span class="field-name">numRows</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numRows"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of rows in the allocation grid.

<hr class="field-separator" />

<div class="signature field-var has-description" id="maxPixelTextureWidth"><code><span class="field-name">maxPixelTextureWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxPixelTextureWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum texture width constraint in pixels.

<hr class="field-separator" />

<div class="signature field-var has-description" id="maxPixelTextureHeight"><code><span class="field-name">maxPixelTextureHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxPixelTextureHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum texture height constraint in pixels.

<hr class="field-separator" />

<div class="signature field-method no-description" id="getTileAtPosition"><code><span class="field-name">getTileAtPosition</span><span class="parenthesis">(</span><span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">row</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureTile/" class="type-link">TextureTile</a></code><a class="header-anchor" href="#getTileAtPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `col` | [Int](/api-docs/clay-web/Int/) |
| `row` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [TextureTile](/api-docs/clay-web/ceramic/TextureTile/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setTileAtPosition"><code><span class="field-name">setTileAtPosition</span><span class="parenthesis">(</span><span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">row</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">tile</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureTile/" class="type-link">TextureTile</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTileAtPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `col` | [Int](/api-docs/clay-web/Int/) |
| `row` | [Int](/api-docs/clay-web/Int/) |
| `tile` | [TextureTile](/api-docs/clay-web/ceramic/TextureTile/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

