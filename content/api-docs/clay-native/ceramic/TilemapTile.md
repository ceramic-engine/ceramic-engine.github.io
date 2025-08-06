---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: TilemapTile
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/TilemapTile/
---

# TilemapTile

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/TilemapTile.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TilemapTile</strong> (Abstract)</div>

Represents a single tile in a tilemap, storing both the tile ID and transformation flags.

TilemapTile is an abstract type over Int that encodes multiple pieces of information:
- The global tile ID (GID) referencing a tile in a tileset
- Horizontal flip flag
- Vertical flip flag
- Diagonal flip flag (for 90° rotations)

This encoding follows the Tiled Map Editor (TMX) format specification, where the
upper 3 bits store transformation flags and the lower 29 bits store the GID.

## Bit Layout

```
Bit 31: Horizontal flip
Bit 30: Vertical flip
Bit 29: Diagonal flip (swap X/Y axis)
Bits 0-28: Global tile ID (GID)
```

## Usage Example

```haxe
// Create a tile with GID 42
var tile:TilemapTile = 42;

// Apply transformations
tile.horizontalFlip = true;
tile.verticalFlip = true;

// Rotate the tile
tile.rotateRight(); // 90° clockwise

// Get the actual tile ID
var gid = tile.gid; // Gets ID without flags
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/TilemapLayerData/">TilemapLayerData</a>, <a href="/api-docs/clay-native/ceramic/TilemapQuad/">TilemapQuad</a></div>


## Type Conversions

**From:**
- `[Int](/api-docs/clay-native/Int/)`

**To:**
- `[Int](/api-docs/clay-native/Int/)`

