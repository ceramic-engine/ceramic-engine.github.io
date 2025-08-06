---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: TilesetGridOrientation
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/TilesetGridOrientation/
---

# TilesetGridOrientation

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/TilesetGridOrientation.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TilesetGridOrientation</strong> (Enum)</div>

Defines the grid orientation for tiles within a tileset.

The grid orientation affects how tile overlays for terrain and collision information
are rendered in tilemap editors. This is primarily used when working with isometric
tilesets to ensure proper alignment of editor overlays with the tile graphics.

## Grid Types

- **ORTHOGONAL**: Standard rectangular grid (default)
- **ISOMETRIC**: Diamond-shaped grid for isometric tiles

## Usage Example

```haxe
var tileset = new Tileset();
tileset.gridOrientation = ISOMETRIC;
tileset.gridCellWidth = 64;  // Width of isometric grid cell
tileset.gridCellHeight = 32; // Height of isometric grid cell
```

## Note

This setting only affects how tiles are displayed in editors and does not
change the actual rendering of tiles in the game. The tilemap's orientation
(TilemapOrientation) determines the actual tile layout.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/Tileset/">Tileset</a>, <a href="/api-docs/clay-web/ceramic/TilemapOrientation/">TilemapOrientation</a></div>


## Constructors

### ORTHOGONAL

```haxe
ORTHOGONAL
```

Standard rectangular grid orientation.
Tiles are aligned in a regular grid pattern with no offset.
This is the default and most common orientation.

### ISOMETRIC

```haxe
ISOMETRIC
```

Isometric (diamond-shaped) grid orientation.
Used for tilesets containing isometric tiles where the grid
cells are rotated 45 degrees to form diamonds.

## Metadata

| Name | Parameters |
|------|------------|
| `:flatEnum` | - |

