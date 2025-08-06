---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: AutoTile
target: Unity
permalink: api-docs/unity/ceramic/AutoTile/
---

# AutoTile

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/AutoTile.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AutoTile</strong> (Class)</div>

Configuration for an auto-tiling tile that automatically adjusts its appearance
based on neighboring tiles. Auto-tiles adapt their visual representation to create
seamless connections with adjacent tiles of the same type.

Auto-tiling is commonly used for:
- Terrain (grass, dirt, water)
- Walls and platforms
- Pipes and roads
- Any tileable surface that needs edge transitions

<div class="see"><strong>See:</strong> AutoTileKind For different auto-tiling algorithms, AutoTiler For the auto-tiling processor, Tileset For tileset management</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="kind"><div class="plugin-name">tilemap</div><code><span class="field-name">kind</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/AutoTileKind/" class="type-link">AutoTileKind</a></code><a class="header-anchor" href="#kind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The kind of autotile algorithm to use. Different algorithms require
different tile arrangements in the source tileset and produce different
visual results.

Common kinds include:
- BLOB_47: 47-tile blob pattern for organic shapes
- TILESETTER_BLOB_47: Tilesetter-specific 47-tile variant
- Custom patterns for specific use cases

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gid"><div class="plugin-name">tilemap</div><code><span class="field-name">gid</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The main global tile ID (GID) of this autotile. This is typically the
"standalone" or "center" tile that appears when no auto-tiling
transformation is needed (i.e., when surrounded by tiles of the same type).

The GID corresponds to a specific tile in the tileset and serves as the
base reference for finding related auto-tile variations.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bounds"><div class="plugin-name">tilemap</div><code><span class="field-name">bounds</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls whether tilemap boundaries affect auto-tiling calculations.

When `true` (default):
- Tiles at the edge of the tilemap connect with the boundary
- Creates a "filled" appearance at map edges
- Useful for solid terrain that extends beyond the visible area

When `false`:
- Tiles at the edge don't connect with boundaries
- Creates an "island" appearance
- Useful for floating platforms or isolated structures

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileset"><div class="plugin-name">tilemap</div><code><span class="field-name">tileset</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tileset/" class="type-link">Tileset</a></code><a class="header-anchor" href="#tileset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The tileset containing this autotile's graphics. Required when using
certain auto-tile kinds like `TILESETTER_BLOB_47` that need tileset
information to locate tile variations.

The tileset defines the tile dimensions and layout necessary for
computing row/column positions from GIDs.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="column"><div class="plugin-name">tilemap</div><code><span class="field-name">column</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#column"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The column position in the tileset grid for the main GID tile.
Automatically computed when `computeValues()` is called.

This value is -1 if no tileset is assigned or values haven't been computed.
Column indices start at 0 for the leftmost column.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="row"><div class="plugin-name">tilemap</div><code><span class="field-name">row</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#row"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The row position in the tileset grid for the main GID tile.
Automatically computed when `computeValues()` is called.

This value is -1 if no tileset is assigned or values haven't been computed.
Row indices start at 0 for the topmost row.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeValues"><div class="plugin-name">tilemap</div><code><span class="field-name">computeValues</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes derived values like `row` and `column` from the current
configuration. This method is automatically called by `AutoTiler`
during processing.

The computation requires a valid `tileset` to be assigned. If no
tileset is available, row and column remain at their default -1 values.

This method should be called whenever the `gid` or `tileset` changes
to keep the computed values in sync.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">tilemap</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">kind</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/AutoTileKind/" class="type-link">AutoTileKind</a><span class="operator">,</span> <span class="arg-name">gid</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bounds</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">tileset</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Tileset/" class="type-link">Tileset</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">column</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">row</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `kind` | [AutoTileKind](/api-docs/unity/ceramic/AutoTileKind/) | * The kind of autotile algorithm to use. Different algorithms require different tile arrangements in the source tileset and produce different visual results. * Common kinds include: - BLOB_47: 47-tile blob pattern for organic shapes - TILESETTER_BLOB_47: Tilesetter-specific 47-tile variant - Custom patterns for specific use cases |
| `gid` | [Int](/api-docs/unity/Int/) | * The main global tile ID (GID) of this autotile. This is typically the "standalone" or "center" tile that appears when no auto-tiling transformation is needed (i.e., when surrounded by tiles of the same type). * The GID corresponds to a specific tile in the tileset and serves as the base reference for finding related auto-tile variations. |
| `bounds` | [Null](/api-docs/unity/Null/)<[Bool](/api-docs/unity/Bool/)> | * Controls whether tilemap boundaries affect auto-tiling calculations. * When `true` (default): - Tiles at the edge of the tilemap connect with the boundary - Creates a "filled" appearance at map edges - Useful for solid terrain that extends beyond the visible area * When `false`: - Tiles at the edge don't connect with boundaries - Creates an "island" appearance - Useful for floating platforms or isolated structures |
| `tileset` | [Null](/api-docs/unity/Null/)<[Tileset](/api-docs/unity/ceramic/Tileset/)> | * The tileset containing this autotile's graphics. Required when using certain auto-tile kinds like `TILESETTER_BLOB_47` that need tileset information to locate tile variations. * The tileset defines the tile dimensions and layout necessary for computing row/column positions from GIDs. |
| `column` | [Null](/api-docs/unity/Null/)<[Int](/api-docs/unity/Int/)> | * The column position in the tileset grid for the main GID tile. Automatically computed when `computeValues()` is called. * This value is -1 if no tileset is assigned or values haven't been computed. Column indices start at 0 for the leftmost column. |
| `row` | [Null](/api-docs/unity/Null/)<[Int](/api-docs/unity/Int/)> | * The row position in the tileset grid for the main GID tile. Automatically computed when `computeValues()` is called. * This value is -1 if no tileset is assigned or values haven't been computed. Row indices start at 0 for the topmost row. |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:structInit` | - |

