---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: AutoTiler
target: Unity
permalink: api-docs/unity/ceramic/AutoTiler/
---

# AutoTiler

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/AutoTiler.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <strong>ceramic.AutoTiler</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/ceramic/Component/">Component</a></div>

Component that automatically processes tilemap tiles to apply auto-tiling rules.
Auto-tiling analyzes neighboring tiles and replaces them with appropriate variants
to create seamless connections and transitions.

The AutoTiler supports multiple auto-tiling algorithms (EDGE_16, EDGE_CORNER_32,
EXPANDED_47, etc.) and can handle complex tile arrangements including:
- Edge connections (straight borders)
- Corner pieces (diagonal connections)
- Overlapping tiles for detailed transitions
- Custom tile mappings for different tileset standards

## Usage Example:
```haxe
// Define auto-tiles for grass terrain
var grassAutoTile = {
    kind: EXPANDED_47,
    gid: 10,  // Base grass tile GID
    bounds: true  // Connect with map edges
};

// Create auto-tiler
var autoTiler = new AutoTiler([grassAutoTile]);

// Add to tilemap layer
tilemapLayer.component(autoTiler);
```

The component automatically updates when the layer's tiles change,
recomputing auto-tiling for affected areas.

<div class="see"><strong>See:</strong> AutoTile For auto-tile configuration, AutoTileKind For supported algorithms, TilemapLayerData For the tilemap data structure</div>


## Static Members

<div class="signature field-var has-description has-plugin" id="edgeCorner32Map"><div class="plugin-name">tilemap</div><code><span class="field-name">edgeCorner32Map</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#edgeCorner32Map"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Static lookup table mapping 8-bit masks to tile indices for EDGE_CORNER_32 auto-tiling.
The mask encodes which edges and corners connect to matching tiles.
Built lazily on first access.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="expandedBottomCorner26Map"><div class="plugin-name">tilemap</div><code><span class="field-name">expandedBottomCorner26Map</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#expandedBottomCorner26Map"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Static lookup table for EXPANDED_BOTTOM_CORNER_26 auto-tiling.
Maps 47-tile indices to their 26-tile equivalents, removing top corners.
Built lazily on first access.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tilesetterBlob47Map"><div class="plugin-name">tilemap</div><code><span class="field-name">tilesetterBlob47Map</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tilesetterBlob47Map"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Static lookup table for TILESETTER_BLOB_47 tile positions.
Maps tile indices to X,Y offsets in the Tilesetter blob layout.
Built lazily on first access.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="edgeCorner32InvertedMap"><div class="plugin-name">tilemap</div><code><span class="field-name">edgeCorner32InvertedMap</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#edgeCorner32InvertedMap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Inverted lookup table for EDGE_CORNER_32 mapping.
Maps tile indices back to their 8-bit mask values.
Built lazily on first access.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isValidEdgeCorner32Combination"><div class="plugin-name">tilemap</div><code><span class="field-name">isValidEdgeCorner32Combination</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isValidEdgeCorner32Combination"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Validates whether a given edge/corner combination is valid for EDGE_CORNER_32 tiling.

Rules enforced:
- If all corners are present, all edges must also be present
- A corner can only exist if both adjacent edges are present
(e.g., top-left corner requires both left and top edges)

This validation ensures visually correct tile connections without
impossible configurations like floating corners.



| Name | Type | Description |
|------|------|-------------|
| `value` | [Int](/api-docs/unity/Int/) | 8-bit value encoding edges (bits 0-3) and corners (bits 4-7)  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | true if the combination is valid, false otherwise |

## Instance Members

<div class="signature field-var has-description has-plugin" id="layerData"><div class="plugin-name">tilemap</div><code><span class="field-name">layerData</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TilemapLayerData/" class="type-link">TilemapLayerData</a></code><a class="header-anchor" href="#layerData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The tilemap layer data this auto-tiler processes.
Automatically bound when added as a component to a TilemapLayerData entity.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="autoTiles"><div class="plugin-name">tilemap</div><code><span class="field-name">autoTiles</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/AutoTile/" class="type-link">AutoTile</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#autoTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read-only array of auto-tile configurations.
Each auto-tile defines a GID and algorithm for processing tiles.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="initializerName"><div class="plugin-name">tilemap</div><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">tilemap</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">autoTiles</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/AutoTile/" class="type-link">AutoTile</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">handleComputeTile</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">handleComputeTiles</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new AutoTiler with the specified auto-tile configurations.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `autoTiles` | [Array](/api-docs/unity/Array/)<[AutoTile](/api-docs/unity/ceramic/AutoTile/)> | | Array of auto-tile rules to apply  |
| `handleComputeTile` | Function | *(optional)* | Optional callback for each computed tile  |
| `handleComputeTiles` | Function | *(optional)* | Optional callback after all tiles are computed |

## Private Members

<div class="signature field-var has-description has-plugin" id="gidMap"><div class="plugin-name">tilemap</div><code><span class="field-name">gidMap</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/AutoTile/" class="type-link">AutoTile</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#gidMap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal map for fast lookup of auto-tiles by their GID.
Built during construction from the autoTiles array.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitComputeTile"><div class="plugin-name">tilemap</div><code><span class="field-name">emitComputeTile</span><span class="parenthesis">(</span><span class="arg-name">autoTiler</span><span class="operator">:</span> <a href="#" class="type-link">AutoTiler</a><span class="operator">,</span> <span class="arg-name">autoTile</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/AutoTile/" class="type-link">AutoTile</a><span class="operator">,</span> <span class="arg-name">computedTiles</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/TilemapTile/" class="type-link">TilemapTile</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitComputeTile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired when a single tile is computed during auto-tiling.
Useful for custom post-processing or debugging tile placement.



| Name | Type | Description |
|------|------|-------------|
| `autoTiler` | [AutoTiler](/api-docs/unity/ceramic/AutoTiler/) | This AutoTiler instance  |
| `autoTile` | [AutoTile](/api-docs/unity/ceramic/AutoTile/) | The auto-tile rule that was applied  |
| `computedTiles` | [Array](/api-docs/unity/Array/)<[TilemapTile](/api-docs/unity/ceramic/TilemapTile/)> | The array of computed tiles being built  |
| `index` | [Int](/api-docs/unity/Int/) | The index of the tile that was just computed |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitComputeTiles"><div class="plugin-name">tilemap</div><code><span class="field-name">emitComputeTiles</span><span class="parenthesis">(</span><span class="arg-name">autoTiler</span><span class="operator">:</span> <a href="#" class="type-link">AutoTiler</a><span class="operator">,</span> <span class="arg-name">computedTiles</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/TilemapTile/" class="type-link">TilemapTile</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitComputeTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired after all tiles have been computed but before they are
applied to the layer. Allows for final adjustments to the tile array.



| Name | Type | Description |
|------|------|-------------|
| `autoTiler` | [AutoTiler](/api-docs/unity/ceramic/AutoTiler/) | This AutoTiler instance  |
| `computedTiles` | [Array](/api-docs/unity/Array/)<[TilemapTile](/api-docs/unity/ceramic/TilemapTile/)> | The complete array of computed tiles |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bindAsComponent"><div class="plugin-name">tilemap</div><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when this auto-tiler is bound as a component to a TilemapLayerData.
Sets up event listeners and performs initial auto-tiling computation.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleTilesChange"><div class="plugin-name">tilemap</div><code><span class="field-name">handleTilesChange</span><span class="parenthesis">(</span><span class="arg-name">tiles</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/TilemapTile/" class="type-link">TilemapTile</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">prevTiles</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/TilemapTile/" class="type-link">TilemapTile</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleTilesChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles changes to the layer's tile data.
Automatically recomputes auto-tiling when tiles are modified.



| Name | Type | Description |
|------|------|-------------|
| `tiles` | [ReadOnlyArray](/api-docs/unity/ceramic/ReadOnlyArray/)<[TilemapTile](/api-docs/unity/ceramic/TilemapTile/)> | The new tile array  |
| `prevTiles` | [ReadOnlyArray](/api-docs/unity/ceramic/ReadOnlyArray/)<[TilemapTile](/api-docs/unity/ceramic/TilemapTile/)> | The previous tile array (before the change) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeAutoTiles"><div class="plugin-name">tilemap</div><code><span class="field-name">computeAutoTiles</span><span class="parenthesis">(</span><span class="arg-name">tiles</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/TilemapTile/" class="type-link">TilemapTile</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeAutoTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Core auto-tiling computation method. Analyzes each tile in the layer
and applies appropriate auto-tiling transformations based on neighboring tiles.

The algorithm:
1. Iterates through each tile position
2. Checks if the tile matches any auto-tile rule
3. Examines neighboring tiles (4 cardinal + 4 diagonal)
4. Computes edge and corner masks based on matches
5. Selects appropriate tile variant from the tileset
6. Handles overlapping tiles for detailed transitions



| Name | Type | Description |
|------|------|-------------|
| `tiles` | [ReadOnlyArray](/api-docs/unity/ceramic/ReadOnlyArray/)<[TilemapTile](/api-docs/unity/ceramic/TilemapTile/)> | The source tile array to process |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setEntity"><div class="plugin-name">tilemap</div><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [Entity](/api-docs/unity/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getEntity"><div class="plugin-name">tilemap</div><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Entity](/api-docs/unity/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

