---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: TilemapOrientation
target: Unity
permalink: api-docs/unity/ceramic/TilemapOrientation/
---

# TilemapOrientation

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/TilemapOrientation.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TilemapOrientation</strong> (Enum)</div>

Defines the projection orientation of a tilemap.

Different orientations affect how tiles are positioned and rendered in 2D space,
enabling various visual styles and gameplay perspectives. The orientation determines
the mathematical relationship between tile indices and their screen positions.

## Orientation Types

- **ORTHOGONAL**: Standard grid layout where tiles are rectangular and aligned in rows/columns
- **ISOMETRIC**: Diamond-shaped tiles creating a 2.5D perspective effect
- **STAGGERED**: Offset grid where every other row/column is shifted (used for hex maps)
- **HEXAGONAL**: True hexagonal tiles with six sides

## Usage Example

```haxe
var tilemapData = new TilemapData();
tilemapData.orientation = ISOMETRIC; // Creates isometric perspective

// Different orientations require different tile positioning logic
switch (tilemapData.orientation) {
    case ORTHOGONAL:
        // Simple grid: x = column * tileWidth, y = row * tileHeight
    case ISOMETRIC:
        // Diamond layout with offset positioning
    case STAGGERED:
        // Every other row/column is offset
    case HEXAGONAL:
        // Six-sided tiles with special positioning
}
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/TilemapData/">TilemapData</a>, <a href="/api-docs/unity/ceramic/TilemapStaggerAxis/">TilemapStaggerAxis</a>, <a href="/api-docs/unity/ceramic/TilemapStaggerIndex/">TilemapStaggerIndex</a></div>


## Constructors

### ORTHOGONAL

```haxe
ORTHOGONAL
```

Standard rectangular grid layout.
Tiles are positioned in simple rows and columns with no offset.
This is the most common orientation for platformers and top-down games.

### ISOMETRIC

```haxe
ISOMETRIC
```

Isometric (diamond-shaped) tile layout.
Creates a 2.5D perspective effect commonly used in strategy and simulation games.
Tiles are rotated 45 degrees and positioned to create depth illusion.

### STAGGERED

```haxe
STAGGERED
```

Staggered grid layout with offset rows or columns.
Every other row or column is shifted by half a tile width/height.
Often used as a simpler alternative to true hexagonal grids.

### HEXAGONAL

```haxe
HEXAGONAL
```

True hexagonal tile layout with six-sided tiles.
Provides more natural movement in six directions.
Common in strategy games and board game adaptations.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:flatEnum` | - |

