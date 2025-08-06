---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: TileSlope
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/TileSlope/
---

# TileSlope

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/TileSlope.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TileSlope</strong> (Class)</div>

Defines slope collision data for a tile in a tileset.

**Warning: This is just a draft, don't use it!**

TileSlope represents a sloped collision surface within a tile, useful for creating
smooth ramps, hills, and angled surfaces in platformers and other games with physics.
The slope is defined by two height values at the left and right edges of the tile.

## Slope Definition

The slope is defined in normalized coordinates where:
- 0.0 = bottom of the tile
- 1.0 = top of the tile
- y0 = height at the left edge
- y1 = height at the right edge

## Usage Example

```haxe
// Create a 45-degree upward slope
var slope:TileSlope = {
    index: 5,      // Tile index in tileset
    y0: 0.0,       // Left edge at bottom
    y1: 1.0,       // Right edge at top
    rotation: 0    // No rotation
};

// Create a downward slope
var downSlope:TileSlope = {
    index: 6,
    y0: 1.0,       // Left edge at top
    y1: 0.0,       // Right edge at bottom
    rotation: 0
};

// Add to tileset
tileset.slope(slope);
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/Tileset/">Tileset</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="index"><div class="plugin-name">tilemap</div><code><span class="field-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The tile index within the tileset that this slope applies to.
This should match the tile's position in the tileset grid (0-based).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="rotation"><div class="plugin-name">tilemap</div><code><span class="field-name">rotation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#rotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rotation angle in degrees (0, 90, 180, or 270).
Allows reusing the same slope definition for different orientations.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="y0"><div class="plugin-name">tilemap</div><code><span class="field-name">y0</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y0"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The normalized height (0.0 to 1.0) at the left edge of the tile.
0.0 represents the bottom of the tile, 1.0 represents the top.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="y1"><div class="plugin-name">tilemap</div><code><span class="field-name">y1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The normalized height (0.0 to 1.0) at the right edge of the tile.
0.0 represents the bottom of the tile, 1.0 represents the top.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">tilemap</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">rotation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y0</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-native/Int/) | * The tile index within the tileset that this slope applies to. This should match the tile's position in the tileset grid (0-based). |
| `rotation` | [Int](/api-docs/clay-native/Int/) | * Rotation angle in degrees (0, 90, 180, or 270). Allows reusing the same slope definition for different orientations. |
| `y0` | [Float](/api-docs/clay-native/Float/) | * The normalized height (0.0 to 1.0) at the left edge of the tile. 0.0 represents the bottom of the tile, 1.0 represents the top. |
| `y1` | [Float](/api-docs/clay-native/Float/) | * The normalized height (0.0 to 1.0) at the right edge of the tile. 0.0 represents the bottom of the tile, 1.0 represents the top. |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

