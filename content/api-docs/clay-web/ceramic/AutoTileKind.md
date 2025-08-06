---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: AutoTileKind
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/AutoTileKind/
---

# AutoTileKind

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/AutoTileKind.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AutoTileKind</strong> (Abstract)</div>

Defines the type of auto-tiling algorithm used by the `AutoTiler` component.
Each algorithm requires a specific arrangement of tiles in the source tileset
and produces different visual results for tile connections.

Auto-tiling algorithms analyze neighboring tiles to automatically select the
appropriate tile variant that creates seamless connections. The choice of
algorithm depends on:
- The visual style desired (sharp corners vs rounded)
- The number of tile variants available
- Whether overlapping tiles are supported
- The tileset layout standard being followed

## Common Use Cases:
- EDGE_16: Simple platforms without corner variations
- EDGE_CORNER_32: Detailed terrain with separate corner overlays
- EXPANDED_47: Complete terrain with all edge/corner combinations
- TILESETTER_BLOB_47: When using Tilesetter-generated tilesets

<div class="see"><strong>See:</strong> AutoTiler The component that processes auto-tiling, AutoTile Configuration for individual auto-tiles</div>


## Type Conversions

**From:**
- `[Int](/api-docs/clay-web/Int/)`

**To:**
- `[Int](/api-docs/clay-web/Int/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:enum` | - |

