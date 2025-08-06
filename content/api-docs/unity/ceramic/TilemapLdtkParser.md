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


## Instance Members

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

<div class="signature field-method has-description has-plugin" id="convertLdtkTiles"><div class="plugin-name">ldtk</div><code><span class="field-name">convertLdtkTiles</span><span class="parenthesis">(</span><span class="arg-name">ldtkTiles</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">tileset</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkTilesetDefinition/" class="type-link">LdtkTilesetDefinition</a><span class="operator">,</span> <span class="arg-name">cols</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">rows</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">gridSize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">tilesAlpha</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">tilesOffsetX</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">tilesOffsetY</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/TilemapTile/" class="type-link">TilemapTile</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#convertLdtkTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/unity/Array/)<[TilemapTile](/api-docs/unity/ceramic/TilemapTile/)> | Array of TilemapTile objects, or null if no tiles |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

