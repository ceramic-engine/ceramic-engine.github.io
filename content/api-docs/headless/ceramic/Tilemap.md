---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: Tilemap
target: Headless
permalink: api-docs/headless/ceramic/Tilemap/
---

# Tilemap

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/Tilemap.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <a href="/api-docs/headless/ceramic/Visual/">Visual</a> → <a href="/api-docs/headless/ceramic/Quad/">Quad</a> → <strong>ceramic.Tilemap</strong> (Class)</div>

A visual component that renders tilemap data composed of multiple layers.
Tilemaps are grid-based maps commonly used in 2D games for rendering
backgrounds, levels, and collision data.

Features:
- Multi-layer rendering with depth control
- Tile clipping for culling optimization
- Collision detection support (with arcade plugin)
- Automatic layer management from TilemapData
- Per-layer and per-tilemap scaling

Currently only supports ORTHOGONAL tile orientation. Other orientations
like isometric or hexagonal are not implemented.

## Usage Example:
```haxe
var tilemap = new Tilemap();
tilemap.tilemapData = assets.tilemap("level1").tilemapData;
tilemap.pos(0, 0);
scene.add(tilemap);

// Access specific layer
var collisionLayer = tilemap.layer("collision");

// Enable collision detection (arcade plugin)
tilemap.collidableLayers = ["collision", "walls"];
```

<div class="see"><strong>See:</strong> TilemapData The data structure containing tilemap information, TilemapLayer Individual layer rendering component, TilemapAsset Asset type for loading tilemap files</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="collidableLayers"><div class="plugin-name">arcade</div><code><span class="field-name">collidableLayers</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#collidableLayers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of layer names that should be used for collision detection.
Only layers whose names are in this array will participate in
physics collisions when using the arcade physics plugin.

Example: `["collision", "walls", "platforms"]`

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="computedCollidableLayers"><div class="plugin-name">arcade</div><code><span class="field-name">computedCollidableLayers</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/TilemapLayer/" class="type-link">TilemapLayer</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#computedCollidableLayers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computed array of TilemapLayer instances that are marked as collidable.
Automatically updated when collidableLayers changes.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="collidableLayersDirty"><div class="plugin-name">arcade</div><code><span class="field-name">collidableLayersDirty</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collidableLayersDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal flag indicating collidable layers need recomputation.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="destroyUnusedBodies"><div class="plugin-name">arcade</div><code><span class="field-name">destroyUnusedBodies</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#destroyUnusedBodies"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true, physics bodies are destroyed for tiles that are no longer
in collidable layers. This frees memory but has a performance cost.

When false, physics bodies are kept even when layers become non-collidable,
trading memory for performance.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="hasTileAtPosition"><div class="plugin-name">arcade</div><code><span class="field-name">hasTileAtPosition</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">layerName</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">checkWithComputedTiles</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasTileAtPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if there is a tile at the given world position.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/headless/Float/) | | World X coordinate to check  |
| `y` | [Float](/api-docs/headless/Float/) | | World Y coordinate to check  |
| `layerName` | [String](/api-docs/headless/String/) | *(optional)* | Optional layer name to check (checks all layers if null)  |
| `checkWithComputedTiles` | [Bool](/api-docs/headless/Bool/) | `false` | If true, checks computed tiles (after auto-tiling) instead of raw tile data  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | true if at least one non-empty tile exists at the position |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="shouldCollideAtPosition"><div class="plugin-name">arcade</div><code><span class="field-name">shouldCollideAtPosition</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">direction</span><span class="operator">:</span> <a href="/api-docs/headless/arcade/Direction/" class="type-link">arcade.Direction</a> <span class="operator">=</span> <span class="default-value">NONE</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">layerName</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#shouldCollideAtPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if collision should occur at the given world position.
Only checks layers marked as collidable.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/headless/Float/) | | World X coordinate to check  |
| `y` | [Float](/api-docs/headless/Float/) | | World Y coordinate to check  |
| `direction` | [arcade.Direction](/api-docs/headless/arcade/Direction/) | `NONE` | Direction of movement to check collision for. Used to determine which collision edges to check.  |
| `layerName` | [String](/api-docs/headless/String/) | *(optional)* | Optional specific layer to check (checks all collidable layers if null)  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | true if collision should occur at this position |

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="roundTilesTranslation"><div class="plugin-name">tilemap</div><code><span class="field-name">roundTilesTranslation</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#roundTilesTranslation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls pixel rounding for tile positioning.

Values:
- 0: No rounding (tiles can be positioned at sub-pixel positions)
- 1: Round to nearest pixel (default, prevents tile seams)
- 2+: Round to nearest multiple of this value

Pixel rounding helps prevent visual artifacts like gaps between tiles
when rendering at non-integer positions or scales.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tilemapData"><div class="plugin-name">tilemap</div><code><span class="field-name">tilemapData</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TilemapData/" class="type-link">TilemapData</a></code><a class="header-anchor" href="#tilemapData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The tilemap data to render. Contains layer information, tilesets,
and tile placement data. Setting this property triggers a complete
rebuild of the tilemap's visual layers.

When null, the tilemap renders nothing and has zero size.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileScale"><div class="plugin-name">tilemap</div><code><span class="field-name">tileScale</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#tileScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Global scale factor applied to all tiles in the tilemap.
This scales the visual size of tiles without affecting the
logical grid dimensions.

Special values:
- 1.0: Normal size (default)
- -1: Disables scale propagation to layers

This is useful for implementing zoom or creating tilemaps
with different visual scales while maintaining the same data.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="clipTilesX"><div class="plugin-name">tilemap</div><code><span class="field-name">clipTilesX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#clipTilesX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

X coordinate (in tiles) where tile clipping begins.
Tiles outside the clipping rectangle are not rendered.

Set to -1 to disable clipping on this axis (default).
Used for culling optimization in large tilemaps.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="clipTilesY"><div class="plugin-name">tilemap</div><code><span class="field-name">clipTilesY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#clipTilesY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Y coordinate (in tiles) where tile clipping begins.
Tiles outside the clipping rectangle are not rendered.

Set to -1 to disable clipping on this axis (default).
Used for culling optimization in large tilemaps.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="clipTilesWidth"><div class="plugin-name">tilemap</div><code><span class="field-name">clipTilesWidth</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#clipTilesWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width (in tiles) of the clipping rectangle.
Only tiles within this width from clipTilesX are rendered.

Set to -1 to disable width clipping (default).
Used for culling optimization in large tilemaps.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="clipTilesHeight"><div class="plugin-name">tilemap</div><code><span class="field-name">clipTilesHeight</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#clipTilesHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height (in tiles) of the clipping rectangle.
Only tiles within this height from clipTilesY are rendered.

Set to -1 to disable height clipping (default).
Used for culling optimization in large tilemaps.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="layers"><div class="plugin-name">tilemap</div><code><span class="field-name">layers</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/TilemapLayer/" class="type-link">TilemapLayer</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#layers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of TilemapLayer visuals managed by this tilemap.
Layers are automatically created, updated, and destroyed
based on the tilemapData. Direct manipulation is not recommended.

Use the `layer(name)` method to access specific layers by name.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">tilemap</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeContent"><div class="plugin-name">tilemap</div><code><span class="field-name">computeContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the tilemap's visual content based on its data.
This method:
- Sets the tilemap size from data dimensions
- Applies background color if specified
- Creates or updates layer visuals
- Removes unused layers

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clipTiles"><div class="plugin-name">tilemap</div><code><span class="field-name">clipTiles</span><span class="parenthesis">(</span><span class="arg-name">clipTilesX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">clipTilesY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">clipTilesWidth</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">clipTilesHeight</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clipTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the tile clipping rectangle in a single call.
Tiles outside this rectangle are not rendered, improving
performance for large tilemaps where only a portion is visible.



| Name | Type | Description |
|------|------|-------------|
| `clipTilesX` | [Float](/api-docs/headless/Float/) | Starting X position in tiles (-1 to disable)  |
| `clipTilesY` | [Float](/api-docs/headless/Float/) | Starting Y position in tiles (-1 to disable)  |
| `clipTilesWidth` | [Float](/api-docs/headless/Float/) | Width in tiles (-1 to disable)  |
| `clipTilesHeight` | [Float](/api-docs/headless/Float/) | Height in tiles (-1 to disable) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layer"><div class="plugin-name">tilemap</div><code><span class="field-name">layer</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TilemapLayer/" class="type-link">TilemapLayer</a></code><a class="header-anchor" href="#layer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves a layer by its name as defined in the tilemap data.
Returns null if no layer with the given name exists.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/headless/String/) | The layer name to search for  |

| Returns | Description |
|---------|-------------|
| [TilemapLayer](/api-docs/headless/ceramic/TilemapLayer/) | The TilemapLayer visual, or null if not found |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">tilemap</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method has-description has-plugin" id="emitCreateLayer"><div class="plugin-name">tilemap</div><code><span class="field-name">emitCreateLayer</span><span class="parenthesis">(</span><span class="arg-name">tilemap</span><span class="operator">:</span> <a href="#" class="type-link">Tilemap</a><span class="operator">,</span> <span class="arg-name">layer</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TilemapLayer/" class="type-link">TilemapLayer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitCreateLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired when a layer visual is created for this tilemap.
Useful for customizing layer properties immediately after creation.



| Name | Type | Description |
|------|------|-------------|
| `tilemap` | [Tilemap](/api-docs/headless/ceramic/Tilemap/) | The tilemap creating the layer  |
| `layer` | [TilemapLayer](/api-docs/headless/ceramic/TilemapLayer/) | The newly created layer visual |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeLayers"><div class="plugin-name">tilemap</div><code><span class="field-name">computeLayers</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeLayers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates, updates, or removes layer visuals to match the tilemap data.
Ensures each data layer has a corresponding visual layer and removes
any visual layers that no longer have data.

Fires the `createLayer` event for newly created layers.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeCollidableLayers"><div class="plugin-name">tilemap</div><code><span class="field-name">computeCollidableLayers</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeCollidableLayers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes which layers should be used for collision detection.
Called internally by the arcade physics system when needed.

Matches layer names in collidableLayers array with actual layers
and marks them as collidable. Optionally cleans up physics bodies
on layers that are no longer collidable.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

