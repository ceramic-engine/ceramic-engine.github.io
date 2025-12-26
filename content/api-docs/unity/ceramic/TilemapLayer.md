---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: TilemapLayer
target: Unity
permalink: api-docs/unity/ceramic/TilemapLayer/
---

# TilemapLayer

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/TilemapLayer.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">Visual</a> → <strong>ceramic.TilemapLayer</strong> (Class)</div>

Visual representation of a single layer within a tilemap.

A TilemapLayer renders tiles from a TilemapLayerData structure, handling tile placement,
clipping, rendering order, and optional collision detection. Each layer consists of a grid
of TilemapQuad instances that display individual tiles from the tilemap's tilesets.

## Features

- **Tile Rendering**: Automatically creates and manages TilemapQuad instances for visible tiles
- **Clipping Support**: Can render only a subset of tiles based on clip bounds
- **Render Order**: Respects the tilemap's render order (RIGHT_DOWN, LEFT_UP, etc.)
- **Tile Filtering**: Supports applying visual filters to all tiles in the layer
- **Collision Detection**: When using the arcade physics plugin, supports tile-based collisions
- **Tile Transformations**: Handles horizontal/vertical/diagonal flipping of tiles

## Usage Example

```haxe
// Layers are typically created automatically by Tilemap
var tilemap = new Tilemap();
tilemap.tilemapData = myTilemapData;

// Access a specific layer
var layer = tilemap.layer('collision');

// Apply a filter to all tiles in the layer
var blur = new Filter();
blur.shader = assets.shader('blur');
layer.tilesFilter = blur;

// Configure collision (requires arcade plugin)
layer.checkCollision(true, true); // Enable up/down and left/right collisions
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/Tilemap/">Tilemap</a>, <a href="/api-docs/unity/ceramic/TilemapLayerData/">TilemapLayerData</a>, <a href="/api-docs/unity/ceramic/TilemapQuad/">TilemapQuad</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="checkCollisionUp"><div class="plugin-name">arcade</div><code><span class="field-name">checkCollisionUp</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkCollisionUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this layer is collidable, this determines if it will collide `up`.
(when a body is going `downward` torward the tile)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="checkCollisionDown"><div class="plugin-name">arcade</div><code><span class="field-name">checkCollisionDown</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkCollisionDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this layer is collidable, this determines if it will collide `down`.
(when a body is going `upward` toward a tile)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="checkCollisionLeft"><div class="plugin-name">arcade</div><code><span class="field-name">checkCollisionLeft</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkCollisionLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this layer is collidable, this determines if it will collide `left`.
(when a body is going `rightward` toward the tile)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="checkCollisionRight"><div class="plugin-name">arcade</div><code><span class="field-name">checkCollisionRight</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkCollisionRight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this layer is collidable, this determines if it will collide `right`.
(when a body is going `leftward` toward the tile)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="checkCollisionWithComputedTiles"><div class="plugin-name">arcade</div><code><span class="field-name">checkCollisionWithComputedTiles</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkCollisionWithComputedTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this layer is collidable, this determines if it will collide
using `tiles` or `computedTiles`

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="checkCollisionValues"><div class="plugin-name">arcade</div><code><span class="field-name">checkCollisionValues</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#checkCollisionValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this layer is collidable, it collides with any tiles
that have a value != 0, unless `checkCollisionValues` is provided.
In that case, it will collide when matching any value of the array.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="collidable"><div class="plugin-name">arcade</div><code><span class="field-name">collidable</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collidable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal flag used when walking through layers

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="checkCollision"><div class="plugin-name">arcade</div><code><span class="field-name">checkCollision</span><span class="parenthesis">(</span><span class="arg-name">upDown</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">rightLeft</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#checkCollision"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand to set `checkCollisionUp`, `checkCollisionRight`, `checkCollisionDown`, `checkCollisionLeft`

| Name | Type |
|------|------|
| `upDown` | [Bool](/api-docs/unity/Bool/) |
| `rightLeft` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tilemap"><div class="plugin-name">tilemap</div><code><span class="field-name">tilemap</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tilemap/" class="type-link">Tilemap</a></code><a class="header-anchor" href="#tilemap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The parent tilemap that owns this layer.
Set automatically when the layer is created by a Tilemap.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="layerData"><div class="plugin-name">tilemap</div><code><span class="field-name">layerData</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TilemapLayerData/" class="type-link">TilemapLayerData</a></code><a class="header-anchor" href="#layerData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The layer data that defines the tiles and properties for this layer.
Changing this will trigger a complete re-render of the layer.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileScale"><div class="plugin-name">tilemap</div><code><span class="field-name">tileScale</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#tileScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scale factor applied to all tiles in this layer.
Default is 1.0 (no scaling). Useful for creating zoom effects or different tile sizes.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileQuads"><div class="plugin-name">tilemap</div><code><span class="field-name">tileQuads</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/TilemapQuad/" class="type-link">TilemapQuad</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tileQuads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of TilemapQuad instances representing visible tiles in this layer.
This array is automatically managed and updated when the layer re-renders.
Use `tileQuadByIndex()` or `tileQuadByColumnAndRow()` to access specific tiles.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tilesColor"><div class="plugin-name">tilemap</div><code><span class="field-name">tilesColor</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#tilesColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Color tint applied to all tiles in this layer.
This is multiplied with the layer's base color from layerData.
Default is WHITE (no tint).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="destroyTilesFilterOnRemove"><div class="plugin-name">tilemap</div><code><span class="field-name">destroyTilesFilterOnRemove</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#destroyTilesFilterOnRemove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If `true`, removing (assign null) or replacing a tilesFilter will destroy it.
Note that a tilesFilter will be destroyed if assigned when
(parent) layer is destroyed, regardless of this setting.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="autoSizeTilesFilter"><div class="plugin-name">tilemap</div><code><span class="field-name">autoSizeTilesFilter</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoSizeTilesFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set to `false` if you need to assign a tiles filter but want to keep control
on how it is layouted (size, position...)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tilesFilter"><div class="plugin-name">tilemap</div><code><span class="field-name">tilesFilter</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Filter/" class="type-link">Filter</a></code><a class="header-anchor" href="#tilesFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A filter that will be applied to every tile of this layer.
If `autoSizeTilesFilter` is `true` (default), filter size will be set to layer content size.
Existing filter is automatically destroyed if `tilesFilter` is set to `null` or the layer destroyed,
unless you set `destroyTilesFilterOnRemove` to `false`.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="renderType"><div class="plugin-name">tilemap</div><code><span class="field-name">renderType</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TilemapRenderType/" class="type-link">TilemapRenderType</a></code><a class="header-anchor" href="#renderType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set this tilemap's render type (`QUAD` (default), `MESH` or `NONE`)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileMeshes"><div class="plugin-name">tilemap</div><code><span class="field-name">tileMeshes</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/TilemapMesh/" class="type-link">TilemapMesh</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tileMeshes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of Mesh instances (one per texture) used to render tiles when renderType is MESH.
These are reused across re-renders to avoid allocation overhead.
Read-only access from outside the class.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeContent"><div class="plugin-name">tilemap</div><code><span class="field-name">computeContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the visual content of this layer based on the current layer data.
This method is called automatically when contentDirty is true.
It calculates layer dimensions and generates/updates all tile quads.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tileQuadByColumnAndRow"><div class="plugin-name">tilemap</div><code><span class="field-name">tileQuadByColumnAndRow</span><span class="parenthesis">(</span><span class="arg-name">column</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">row</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TilemapQuad/" class="type-link">TilemapQuad</a></code><a class="header-anchor" href="#tileQuadByColumnAndRow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves the TilemapQuad at the specified column and row position.


| Name | Type | Description |
|------|------|-------------|
| `column` | [Int](/api-docs/unity/Int/) | The column index (0-based)  |
| `row` | [Int](/api-docs/unity/Int/) | The row index (0-based)  |

| Returns | Description |
|---------|-------------|
| [TilemapQuad](/api-docs/unity/ceramic/TilemapQuad/) | The TilemapQuad at the position, or null if no tile exists there |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tileQuadByIndex"><div class="plugin-name">tilemap</div><code><span class="field-name">tileQuadByIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TilemapQuad/" class="type-link">TilemapQuad</a></code><a class="header-anchor" href="#tileQuadByIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves the TilemapQuad at the specified tile index.


| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/unity/Int/) | The tile index in the layer's tile array  |

| Returns | Description |
|---------|-------------|
| [TilemapQuad](/api-docs/unity/ceramic/TilemapQuad/) | The TilemapQuad at the index, or null if no tile exists there |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="surroundingTileQuads"><div class="plugin-name">tilemap</div><code><span class="field-name">surroundingTileQuads</span><span class="parenthesis">(</span><span class="arg-name">left</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">top</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">right</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">bottom</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/TilemapQuad/" class="type-link">TilemapQuad</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/TilemapQuad/" class="type-link">TilemapQuad</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#surroundingTileQuads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieve surrounding tile quads (that could collide within the given area).
The area is relative to this layer and does not take into account any offset or layer position.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `left` | [Float](/api-docs/unity/Float/) | | * |
| `top` | [Float](/api-docs/unity/Float/) | | * |
| `right` | [Float](/api-docs/unity/Float/) | | * |
| `bottom` | [Float](/api-docs/unity/Float/) | | * |
| `result` | [Array](/api-docs/unity/Array/)<[TilemapQuad](/api-docs/unity/ceramic/TilemapQuad/)> | *(optional)* | * |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/unity/Array/)<[TilemapQuad](/api-docs/unity/ceramic/TilemapQuad/)> | Array<TilemapQuad> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">tilemap</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description has-plugin" id="tileQuadMapping"><div class="plugin-name">tilemap</div><code><span class="field-name">tileQuadMapping</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/IntIntMap/" class="type-link">IntIntMap</a></code><a class="header-anchor" href="#tileQuadMapping"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal mapping to retrieve an existing tileQuad from its tile index.
Maps from tile index to array position in tileQuads (1-based).

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTileQuadsChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitTileQuadsChange</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTileQuadsChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event emitted when the tile quads array changes.
This happens when tiles are added, removed, or when the layer is re-rendered.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTileMeshesChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitTileMeshesChange</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTileMeshesChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event emitted when the tile meshes change.
This happens when tiles are rendered using meshes instead of quads.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clearArcadeTiles"><div class="plugin-name">tilemap</div><code><span class="field-name">clearArcadeTiles</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearArcadeTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clearQuads"><div class="plugin-name">tilemap</div><code><span class="field-name">clearQuads</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearQuads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clearMeshes"><div class="plugin-name">tilemap</div><code><span class="field-name">clearMeshes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearMeshes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computePosAndSize"><div class="plugin-name">tilemap</div><code><span class="field-name">computePosAndSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computePosAndSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes and sets the position and size of this layer based on layer data.
Takes into account tile dimensions and layer offsets.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeTileQuads"><div class="plugin-name">tilemap</div><code><span class="field-name">computeTileQuads</span><span class="parenthesis">(</span><span class="arg-name">tilemap</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tilemap/" class="type-link">Tilemap</a><span class="operator">,</span> <span class="arg-name">tilemapData</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TilemapData/" class="type-link">TilemapData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeTileQuads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates and updates TilemapQuad instances for all visible tiles in this layer.
Handles tile clipping, render order, transformations, and pooling of quad instances.


| Name | Type | Description |
|------|------|-------------|
| `tilemap` | [Tilemap](/api-docs/unity/ceramic/Tilemap/) | The parent tilemap  |
| `tilemapData` | [TilemapData](/api-docs/unity/ceramic/TilemapData/) | The tilemap data containing tileset information |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeTileMeshes"><div class="plugin-name">tilemap</div><code><span class="field-name">computeTileMeshes</span><span class="parenthesis">(</span><span class="arg-name">tilemap</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tilemap/" class="type-link">Tilemap</a><span class="operator">,</span> <span class="arg-name">tilemapData</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TilemapData/" class="type-link">TilemapData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeTileMeshes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates and updates Mesh instances (one per texture) for all visible tiles in this layer.
This is more memory-efficient than using individual quads for large tilemaps.


| Name | Type | Description |
|------|------|-------------|
| `tilemap` | [Tilemap](/api-docs/unity/ceramic/Tilemap/) | The parent tilemap  |
| `tilemapData` | [TilemapData](/api-docs/unity/ceramic/TilemapData/) | The tilemap data containing tileset information |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

