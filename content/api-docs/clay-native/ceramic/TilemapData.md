---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: TilemapData
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/TilemapData/
---

# TilemapData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/TilemapData.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/tracker/Model/">tracker.Model</a> → <strong>ceramic.TilemapData</strong> (Class)</div>

Unified tilemap data structure that represents a tile-based map.
This format is inspired by the Tiled TMX format but provides a
format-agnostic representation that can be populated from various sources.

Key features:
- Multi-layer support with different tile sizes per layer
- Multiple tilesets with automatic GID resolution
- Support for various map orientations (orthogonal, isometric, etc.)
- Observable properties for reactive updates
- Serializable for save/load functionality

Ceramic's built-in tilemap visual only supports orthogonal maps,
but this data model supports:
- Orthogonal maps (standard grid-based)
- Isometric maps (diamond-shaped tiles)
- Hexagonal maps (honeycomb pattern)
- Staggered maps (offset rows/columns)

This is a `Model` class from the Tracker framework, providing:
- Automatic serialization support
- Observable properties with @observe
- Computed properties with @compute
- Change notifications

Reference: https://doc.mapeditor.org/en/stable/reference/tmx-map-format/

<div class="see"><strong>See:</strong> Tilemap Visual component for rendering this data, TilemapLayerData Individual layer data, Tileset Tileset definitions</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="ldtkLevel"><div class="plugin-name">ldtk</div><code><span class="field-name">ldtkLevel</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLevel/" class="type-link">LdtkLevel</a></code><a class="header-anchor" href="#ldtkLevel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the LDtk level this tilemap data was generated from.
Only set when the tilemap originates from an LDtk file.
Provides access to the original LDtk-specific data.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="name"><div class="plugin-name">tilemap</div><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional name identifier for this tilemap.
Useful for debugging and when managing multiple tilemaps.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="orientation"><div class="plugin-name">tilemap</div><code><span class="field-name">orientation</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#orientation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map orientation type that determines how tiles are arranged and rendered.

- ORTHOGONAL: Standard grid layout (most common)
- ISOMETRIC: Diamond-shaped tiles for 2.5D appearance
- STAGGERED: Offset rows or columns
- HEXAGONAL: Hexagon-shaped tiles

Note: Currently only ORTHOGONAL is fully supported by the renderer.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="width"><div class="plugin-name">tilemap</div><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Total width of the map in pixels.
This is typically calculated as: columns × tileWidth

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="height"><div class="plugin-name">tilemap</div><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Total height of the map in pixels.
This is typically calculated as: rows × tileHeight

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="renderOrder"><div class="plugin-name">tilemap</div><code><span class="field-name">renderOrder</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#renderOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines the order in which tiles are rendered within each layer.
Affects which tiles appear on top when they overlap.

- RIGHT_DOWN: Left to right, top to bottom (default)
- RIGHT_UP: Left to right, bottom to top
- LEFT_DOWN: Right to left, top to bottom
- LEFT_UP: Right to left, bottom to top

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hexSideLength"><div class="plugin-name">tilemap</div><code><span class="field-name">hexSideLength</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#hexSideLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For hexagonal maps only: The length of the hex tile edge in pixels.
This determines the size of the hexagon sides.
Set to -1 for non-hexagonal maps.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="staggerAxis"><div class="plugin-name">tilemap</div><code><span class="field-name">staggerAxis</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#staggerAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For staggered and hexagonal maps: Which axis has alternating offsets.
- AXIS_X: Alternating columns are offset (vertical hex)
- AXIS_Y: Alternating rows are offset (horizontal hex)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="staggerIndex"><div class="plugin-name">tilemap</div><code><span class="field-name">staggerIndex</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#staggerIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For staggered and hexagonal maps: Which indices are shifted.
- ODD: Odd rows/columns are offset (1, 3, 5...)
- EVEN: Even rows/columns are offset (0, 2, 4...)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="backgroundColor"><div class="plugin-name">tilemap</div><code><span class="field-name">backgroundColor</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#backgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Background color displayed behind all map layers.
Includes alpha channel for transparency.
Default is fully transparent (alpha = 0).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxTileWidth"><div class="plugin-name">tilemap</div><code><span class="field-name">maxTileWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxTileWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the maximum tile width across all layers.
Useful for allocating buffers or determining map bounds.

Some maps may have layers with different tile sizes
(e.g., detail layers with smaller tiles).


<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxTileHeight"><div class="plugin-name">tilemap</div><code><span class="field-name">maxTileHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxTileHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the maximum tile height across all layers.
Useful for allocating buffers or determining map bounds.

Some maps may have layers with different tile sizes
(e.g., detail layers with smaller tiles).


<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tilesets"><div class="plugin-name">tilemap</div><code><span class="field-name">tilesets</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Tileset/" class="type-link">Tileset</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tilesets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of tilesets used by this map.
Tilesets define the graphics and properties for tiles.

Ordered by firstGid (ascending) for efficient GID lookups.
Each tileset handles a range of global tile IDs (GIDs).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="layers"><div class="plugin-name">tilemap</div><code><span class="field-name">layers</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/TilemapLayerData/" class="type-link">TilemapLayerData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#layers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of layers that make up the map.
Layers are rendered in array order (first = bottom).

Each layer can be:
- Tile layer: Grid of tile GIDs
- Object layer: Positioned objects (future)
- Image layer: Single background image (future)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="asset"><div class="plugin-name">tilemap</div><code><span class="field-name">asset</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TilemapAsset/" class="type-link">TilemapAsset</a></code><a class="header-anchor" href="#asset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the TilemapAsset that loaded this data.
When the asset is destroyed, this data is also destroyed.
Set automatically by TilemapAsset during loading.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateLdtkLevel"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateLdtkLevel</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateLdtkLevel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateName"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateName</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateOrientation"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateOrientation</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateOrientation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateWidth"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateHeight"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateRenderOrder"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateRenderOrder</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateRenderOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateHexSideLength"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateHexSideLength</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateHexSideLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateStaggerAxis"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateStaggerAxis</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateStaggerAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateStaggerIndex"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateStaggerIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateStaggerIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateBackgroundColor"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateBackgroundColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateMaxTileWidth"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateMaxTileWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateMaxTileWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateMaxTileHeight"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateMaxTileHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateMaxTileHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTilesets"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateTilesets</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTilesets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateLayers"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateLayers</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateLayers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">tilemap</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tilesetForGid"><div class="plugin-name">tilemap</div><code><span class="field-name">tilesetForGid</span><span class="parenthesis">(</span><span class="arg-name">gid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Tileset/" class="type-link">Tileset</a></code><a class="header-anchor" href="#tilesetForGid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds the tileset that contains the given global tile ID (GID).
GIDs are globally unique across all tilesets in the map.



| Name | Type | Description |
|------|------|-------------|
| `gid` | [Int](/api-docs/clay-native/Int/) | The global tile ID to look up  |

| Returns | Description |
|---------|-------------|
| [Tileset](/api-docs/clay-native/ceramic/Tileset/) | The tileset containing this GID, or null if not found |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layer"><div class="plugin-name">tilemap</div><code><span class="field-name">layer</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TilemapLayerData/" class="type-link">TilemapLayerData</a></code><a class="header-anchor" href="#layer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves a layer by its name.
Layer names should be unique within a tilemap.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | The layer name to search for  |

| Returns | Description |
|---------|-------------|
| [TilemapLayerData](/api-docs/clay-native/ceramic/TilemapLayerData/) | The matching layer data, or null if not found |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setTexturesFilter"><div class="plugin-name">tilemap</div><code><span class="field-name">setTexturesFilter</span><span class="parenthesis">(</span><span class="arg-name">filter</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTexturesFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the texture filtering mode for all tileset textures.

Common values:
- NEAREST: Pixel-perfect rendering (recommended for pixel art)
- LINEAR: Smooth/blurred rendering



| Name | Type | Description |
|------|------|-------------|
| `filter` | Anonymous | The texture filter to apply to all tilesets |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="size"><div class="plugin-name">tilemap</div><code><span class="field-name">size</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convenience method to set both width and height at once.



| Name | Type | Description |
|------|------|-------------|
| `width` | [Int](/api-docs/clay-native/Int/) | The map width in pixels  |
| `height` | [Int](/api-docs/clay-native/Int/) | The map height in pixels |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tileset"><div class="plugin-name">tilemap</div><code><span class="field-name">tileset</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Tileset/" class="type-link">Tileset</a></code><a class="header-anchor" href="#tileset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves a tileset by its name.
Tileset names should be unique within a tilemap.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | The tileset name to search for  |

| Returns | Description |
|---------|-------------|
| [Tileset](/api-docs/clay-native/ceramic/Tileset/) | The matching tileset, or null if not found |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">tilemap</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedLdtkLevel"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedLdtkLevel</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLevel/" class="type-link">LdtkLevel</a></code><a class="header-anchor" href="#unobservedLdtkLevel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedName"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedOrientation"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedOrientation</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedOrientation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedWidth"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedHeight"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedRenderOrder"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedRenderOrder</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedRenderOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedHexSideLength"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedHexSideLength</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedHexSideLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedStaggerAxis"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedStaggerAxis</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedStaggerAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedStaggerIndex"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedStaggerIndex</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedStaggerIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedBackgroundColor"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#unobservedBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedMaxTileWidth"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedMaxTileWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedMaxTileWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedMaxTileHeight"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedMaxTileHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedMaxTileHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTilesets"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedTilesets</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Tileset/" class="type-link">Tileset</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedTilesets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedLayers"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedLayers</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/TilemapLayerData/" class="type-link">TilemapLayerData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedLayers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitLdtkLevelChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitLdtkLevelChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLevel/" class="type-link">LdtkLevel</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLevel/" class="type-link">LdtkLevel</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLdtkLevelChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when ldtkLevel field changes.

| Name | Type |
|------|------|
| `current` | [LdtkLevel](/api-docs/clay-native/ceramic/LdtkLevel/) |
| `previous` | [LdtkLevel](/api-docs/clay-native/ceramic/LdtkLevel/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitNameChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitNameChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitNameChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when name field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/clay-native/String/) |
| `previous` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitOrientationChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitOrientationChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitOrientationChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when orientation field changes.

| Name | Type |
|------|------|
| `current` | Anonymous |
| `previous` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitWidthChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitWidthChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitWidthChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when width field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitHeightChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitHeightChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHeightChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when height field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitRenderOrderChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitRenderOrderChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitRenderOrderChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when renderOrder field changes.

| Name | Type |
|------|------|
| `current` | Anonymous |
| `previous` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitHexSideLengthChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitHexSideLengthChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHexSideLengthChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when hexSideLength field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitStaggerAxisChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitStaggerAxisChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitStaggerAxisChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when staggerAxis field changes.

| Name | Type |
|------|------|
| `current` | Anonymous |
| `previous` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitStaggerIndexChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitStaggerIndexChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitStaggerIndexChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when staggerIndex field changes.

| Name | Type |
|------|------|
| `current` | Anonymous |
| `previous` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitBackgroundColorChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitBackgroundColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBackgroundColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when backgroundColor field changes.

| Name | Type |
|------|------|
| `current` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `previous` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMaxTileWidthChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitMaxTileWidthChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMaxTileWidthChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when maxTileWidth field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMaxTileHeightChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitMaxTileHeightChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMaxTileHeightChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when maxTileHeight field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTilesetsChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitTilesetsChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Tileset/" class="type-link">Tileset</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Tileset/" class="type-link">Tileset</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTilesetsChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tilesets field changes.

| Name | Type |
|------|------|
| `current` | [Array](/api-docs/clay-native/Array/)<[Tileset](/api-docs/clay-native/ceramic/Tileset/)> |
| `previous` | [Array](/api-docs/clay-native/Array/)<[Tileset](/api-docs/clay-native/ceramic/Tileset/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitLayersChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitLayersChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/TilemapLayerData/" class="type-link">TilemapLayerData</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/TilemapLayerData/" class="type-link">TilemapLayerData</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLayersChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when layers field changes.

| Name | Type |
|------|------|
| `current` | [Array](/api-docs/clay-native/Array/)<[TilemapLayerData](/api-docs/clay-native/ceramic/TilemapLayerData/)> |
| `previous` | [Array](/api-docs/clay-native/Array/)<[TilemapLayerData](/api-docs/clay-native/ceramic/TilemapLayerData/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">tilemap</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representation of the tilemap data for debugging.
Includes all major properties but excludes detailed tile data.


| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | Debug string showing map properties |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.SerializableMacro.build() |
| `:autoBuild` | tracker.macros.SerializableMacro.build() |

