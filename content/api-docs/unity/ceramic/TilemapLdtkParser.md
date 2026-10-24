---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: TilemapLdtkParser
target: Unity
permalink: api-docs/unity/ceramic/TilemapLdtkParser/
---

# TilemapLdtkParser

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/TilemapLdtkParser.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TilemapLdtkParser</strong> (Class)</div>

Parser that converts LDtk level data into Ceramic tilemap data structures.

This class handles:
- Parsing raw LDtk JSON data
- Converting LDtk tilesets to Ceramic tilesets with proper GID mapping
- Converting LDtk layers (Tiles, IntGrid, AutoLayer, Entities) to tilemap layers
- Loading external level data for multi-file projects
- Optimizing tile stacking for rendering performance

The parser maintains compatibility between LDtk's tile ID system and
Ceramic's global tile ID (GID) system.

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/LdtkData/">LdtkData</a>, <a href="/api-docs/unity/ceramic/Tilemap/">Tilemap</a></div>


## Static Members

<div class="signature field-method has-description has-plugin" id="refreshAutoLayerData"><div class="plugin-name">ldtk</div><code><span class="field-name">refreshAutoLayerData</span><span class="parenthesis">(</span><span class="arg-name">layerInstance</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">skipEmptyTiles</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#refreshAutoLayerData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rebuilds the `TilemapLayerData` of an auto layer after its `autoLayerTiles` or IntGrid changed
(see `LdtkRuleRunner`). Visuals displaying this data must then be marked dirty.

| Name | Type | Default |
|------|------|---------|
| `layerInstance` | [LdtkLayerInstance](/api-docs/unity/ceramic/LdtkLayerInstance/) | |
| `skipEmptyTiles` | [Bool](/api-docs/unity/Bool/) | `true` |

## Instance Members

<div class="signature field-var has-description has-plugin" id="skipEmptyTiles"><div class="plugin-name">ldtk</div><code><span class="field-name">skipEmptyTiles</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#skipEmptyTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When `true` (default), tiles whose pixels are all fully transparent are not
converted at all: they render nothing, so dropping them saves geometry and keeps
them from taking a stacking slot. Requires tileset pixels to have been read
(see `computeTilesetsPixelData()`), otherwise no tile is considered empty.
Set to `false` if a project relies on invisible tiles as data markers.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="parseLdtk"><div class="plugin-name">ldtk</div><code><span class="field-name">parseLdtk</span><span class="parenthesis">(</span><span class="arg-name">rawLdtkData</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">loadExternalLdtkLevelData</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkData/" class="type-link">LdtkData</a></code><a class="header-anchor" href="#parseLdtk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses raw LDtk JSON data into an LdtkData structure.


| Name | Type | Description |
|------|------|-------------|
| `rawLdtkData` | [String](/api-docs/unity/String/) | The raw JSON string from an LDtk project file  |
| `loadExternalLdtkLevelData` | Function | Callback to load external level files (for multi-file projects)  |

| Returns | Description |
|---------|-------------|
| [LdtkData](/api-docs/unity/ceramic/LdtkData/) | The parsed LdtkData object, or null if parsing fails |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="loadLdtkTilemaps"><div class="plugin-name">ldtk</div><code><span class="field-name">loadLdtkTilemaps</span><span class="parenthesis">(</span><span class="arg-name">ldtkData</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkData/" class="type-link">LdtkData</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">loadTexture</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">skip</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadLdtkTilemaps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads and converts all tilesets and tilemaps from LDtk data.

This method:
- Converts LDtk tilesets to Ceramic tilesets with proper GID assignment
- Loads tileset textures through the provided callback
- Creates tilemap data for all levels (if not using external levels)



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `ldtkData` | [LdtkData](/api-docs/unity/ceramic/LdtkData/) | | The parsed LDtk data  |
| `loadTexture` | Function | *(optional)* | Optional callback to load tileset textures  |
| `skip` | [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> | | Array of texture paths to skip loading |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="loadLdtkLevelTilemaps"><div class="plugin-name">ldtk</div><code><span class="field-name">loadLdtkLevelTilemaps</span><span class="parenthesis">(</span><span class="arg-name">ldtkData</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkData/" class="type-link">LdtkData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadLdtkLevelTilemaps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Builds the tilemap data of every level.

Meant to run once tileset textures are loaded and `computeTilesetsPixelData()`
has succeeded, so that tile filtering can rely on actual pixels.



| Name | Type | Description |
|------|------|-------------|
| `ldtkData` | [LdtkData](/api-docs/unity/ceramic/LdtkData/) | The parsed LDtk data |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeTilesetsPixelData"><div class="plugin-name">ldtk</div><code><span class="field-name">computeTilesetsPixelData</span><span class="parenthesis">(</span><span class="arg-name">ldtkData</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkData/" class="type-link">LdtkData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#computeTilesetsPixelData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads back each tileset texture once and records, per tile, whether it is fully
transparent or fully opaque. Results are cached on `LdtkTilesetDefinition`, which
survives level unload/reload, so this runs once per asset load.

The cache is refreshed when a tileset texture is hot reloaded, so later conversions
see the new image. Already converted levels keep their tiles until they are converted
again: unloading them here would destroy tilemap data a displayed `Tilemap` may still use.

Tilesets without a texture (skipped, or no image) are left unknown. When the backend
can't read pixels back, nothing is computed and no tile gets filtered. Otherwise a
failed read is a failed asset load.



| Name | Type | Description |
|------|------|-------------|
| `ldtkData` | [LdtkData](/api-docs/unity/ceramic/LdtkData/) | The parsed LDtk data, with tileset textures loaded  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | `false` if a texture that should be readable could not be read |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="loadLdtkLevelTilemap"><div class="plugin-name">ldtk</div><code><span class="field-name">loadLdtkLevelTilemap</span><span class="parenthesis">(</span><span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkLevel/" class="type-link">LdtkLevel</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadLdtkLevelTilemap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts an LDtk level into Ceramic tilemap data.

This method:
- Creates TilemapData with level properties
- Converts each layer instance to TilemapLayerData
- Handles different layer types (Tiles, IntGrid, AutoLayer, Entities)
- Optimizes tile stacking and alpha blending

The resulting tilemap data is stored in level.ceramicTilemap.



| Name | Type | Description |
|------|------|-------------|
| `level` | [LdtkLevel](/api-docs/unity/ceramic/LdtkLevel/) | The LDtk level to convert |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method no-description has-plugin" id="sameTileFlags"><div class="plugin-name">ldtk</div><code><span class="field-name">sameTileFlags</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sameTileFlags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [haxe.ds.Vector](/api-docs/unity/haxe/ds/Vector/)<[Bool](/api-docs/unity/Bool/)> |
| `b` | [haxe.ds.Vector](/api-docs/unity/haxe/ds/Vector/)<[Bool](/api-docs/unity/Bool/)> |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="resolveAutoSourceLayer"><div class="plugin-name">ldtk</div><code><span class="field-name">resolveAutoSourceLayer</span><span class="parenthesis">(</span><span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkLevel/" class="type-link">LdtkLevel</a><span class="operator">,</span> <span class="arg-name">layerInstance</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a></code><a class="header-anchor" href="#resolveAutoSourceLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `level` | [LdtkLevel](/api-docs/unity/ceramic/LdtkLevel/) |
| `layerInstance` | [LdtkLayerInstance](/api-docs/unity/ceramic/LdtkLayerInstance/) |

| Returns |
|---------|
| [LdtkLayerInstance](/api-docs/unity/ceramic/LdtkLayerInstance/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="fillAutoLayerData"><div class="plugin-name">ldtk</div><code><span class="field-name">fillAutoLayerData</span><span class="parenthesis">(</span><span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkLevel/" class="type-link">LdtkLevel</a><span class="operator">,</span> <span class="arg-name">layerInstance</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a><span class="operator">,</span> <span class="arg-name">tilemapLayerData</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TilemapLayerData/" class="type-link">TilemapLayerData</a><span class="operator">,</span> <span class="arg-name">skipEmptyTiles</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fillAutoLayerData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fills the tiles of an auto layer's `TilemapLayerData` from the IntGrid of its source layer
and from its current `autoLayerTiles`.

| Name | Type |
|------|------|
| `level` | [LdtkLevel](/api-docs/unity/ceramic/LdtkLevel/) |
| `layerInstance` | [LdtkLayerInstance](/api-docs/unity/ceramic/LdtkLayerInstance/) |
| `tilemapLayerData` | [TilemapLayerData](/api-docs/unity/ceramic/TilemapLayerData/) |
| `skipEmptyTiles` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="convertLdtkTiles"><div class="plugin-name">ldtk</div><code><span class="field-name">convertLdtkTiles</span><span class="parenthesis">(</span><span class="arg-name">ldtkTiles</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">tileset</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkTilesetDefinition/" class="type-link">LdtkTilesetDefinition</a><span class="operator">,</span> <span class="arg-name">cols</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">rows</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">gridSize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">tilesAlpha</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">tilesOffsetX</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">tilesOffsetY</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">skipEmptyTiles</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/TilemapTile/" class="type-link">TilemapTile</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#convertLdtkTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts LDtk tile data to Ceramic tilemap tiles.

LDtk stores tiles as flat arrays with [tileId, flipBits, x, y, srcX, srcY, alpha]
for each tile. This method converts that to Ceramic's TilemapTile format.

Special handling:
- Stacks multiple tiles at the same position
- Optimizes opaque tiles by removing hidden tiles beneath
- Preserves tile offsets and alpha values



| Name | Type | Description |
|------|------|-------------|
| `ldtkTiles` | [Array](/api-docs/unity/Array/)<[Int](/api-docs/unity/Int/)> | Raw tile data from LDtk (7 integers per tile)  |
| `tileset` | [LdtkTilesetDefinition](/api-docs/unity/ceramic/LdtkTilesetDefinition/) | The tileset definition for GID mapping  |
| `cols` | [Int](/api-docs/unity/Int/) | Number of columns in the layer  |
| `rows` | [Int](/api-docs/unity/Int/) | Number of rows in the layer  |
| `gridSize` | [Int](/api-docs/unity/Int/) | The grid cell size in pixels  |
| `tilesAlpha` | [Array](/api-docs/unity/Array/)<[Float](/api-docs/unity/Float/)> | Output array for tile alpha values  |
| `tilesOffsetX` | [Array](/api-docs/unity/Array/)<[Int](/api-docs/unity/Int/)> | Output array for tile X offsets  |
| `tilesOffsetY` | [Array](/api-docs/unity/Array/)<[Int](/api-docs/unity/Int/)> | Output array for tile Y offsets  |
| `skipEmptyTiles` | [Bool](/api-docs/unity/Bool/) |  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/unity/Array/)<[TilemapTile](/api-docs/unity/ceramic/TilemapTile/)> | Array of TilemapTile objects, or null if no tiles |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="readTilesetPixelData"><div class="plugin-name">ldtk</div><code><span class="field-name">readTilesetPixelData</span><span class="parenthesis">(</span><span class="arg-name">ldtkTileset</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkTilesetDefinition/" class="type-link">LdtkTilesetDefinition</a><span class="operator">,</span> <span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#readTilesetPixelData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads the pixels of one tileset texture and fills `emptyTiles` and
`opaqueTilesFromPixels` of its definition.



| Name | Type | Description |
|------|------|-------------|
| `ldtkTileset` | [LdtkTilesetDefinition](/api-docs/unity/ceramic/LdtkTilesetDefinition/) | The tileset definition to fill  |
| `texture` | [Texture](/api-docs/unity/ceramic/Texture/) | Its loaded texture  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | `false` if pixels could not be read |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

