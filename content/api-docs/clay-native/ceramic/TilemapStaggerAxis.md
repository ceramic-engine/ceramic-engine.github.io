---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: TilemapStaggerAxis
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/TilemapStaggerAxis/
---

# TilemapStaggerAxis

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/TilemapStaggerAxis.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TilemapStaggerAxis</strong> (Enum)</div>

Defines the stagger axis for hexagonal and staggered tilemaps.

The stagger axis determines which direction (horizontal or vertical) the
alternating rows or columns are offset in staggered and hexagonal tile layouts.
This setting only applies when the tilemap orientation is STAGGERED or HEXAGONAL.

## Stagger Axis Options

- **AXIS_X**: Stagger along the X axis (alternating columns are offset)
- **AXIS_Y**: Stagger along the Y axis (alternating rows are offset)

## Visual Examples

AXIS_Y (rows offset):
```
[1] [2] [3]
  [4] [5] [6]
[7] [8] [9]
```

AXIS_X (columns offset):
```
[1]   [3]   [5]
  [2]   [4]   [6]
```

## Usage Example

```haxe
var tilemapData = new TilemapData();
tilemapData.orientation = HEXAGONAL;
tilemapData.staggerAxis = AXIS_Y; // Offset every other row
tilemapData.staggerIndex = ODD; // Offset odd rows
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/TilemapData/">TilemapData</a>, <a href="/api-docs/clay-native/ceramic/TilemapOrientation/">TilemapOrientation</a>, <a href="/api-docs/clay-native/ceramic/TilemapStaggerIndex/">TilemapStaggerIndex</a></div>


## Constructors

### AXIS_X

```haxe
AXIS_X
```

Stagger along the X axis.
Alternating columns are offset vertically.
Commonly used for vertically oriented hexagonal tiles.

### AXIS_Y

```haxe
AXIS_Y
```

Stagger along the Y axis.
Alternating rows are offset horizontally.
The most common choice for hexagonal tiles with points up/down.

## Metadata

| Name | Parameters |
|------|------------|
| `:flatEnum` | - |

