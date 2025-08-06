---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: TmxObjectType
target: Clay (Web)
permalink: api-docs/clay-web/format/tmx/TmxObjectType/
---

# TmxObjectType

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Data.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.TmxObjectType</strong> (Enum)</div>

Type of the object.

## Constructors

### OTRectangle

```haxe
OTRectangle
```

Standart rectangle. Use x/y/width/height to determine it's size and position.

### OTTile

```haxe
OTTile(gid: Int)
```

**Parameters:**

| Name | Type |
|------|------|
| `gid` | [Int](/api-docs/clay-web/Int/) |

Tile-object, placed on x/y position.

### OTExternalTile

```haxe
OTExternalTile(gid: Int, tileset: format.tmx.TmxTileset)
```

**Parameters:**

| Name | Type |
|------|------|
| `gid` | [Int](/api-docs/clay-web/Int/) |
| `tileset` | [format.tmx.TmxTileset](/api-docs/clay-web/format/tmx/TmxTileset/) |

Tile-object from a template. Using template's tileset.

### OTEllipse

```haxe
OTEllipse
```

Ellipse. Fills area in x/y/w/h.

### OTPoint

```haxe
OTPoint
```

Singular point.

### OTPolygon

```haxe
OTPolygon(points: Array<format.tmx.TmxPoint>)
```

**Parameters:**

| Name | Type |
|------|------|
| `points` | [Array](/api-docs/clay-web/Array/)<[format.tmx.TmxPoint](/api-docs/clay-web/format/tmx/TmxPoint/)> |

Enclosed polygon determined by points with origin of object x/y.

### OTText

```haxe
OTText(text: format.tmx.TmxText)
```

**Parameters:**

| Name | Type |
|------|------|
| `text` | [format.tmx.TmxText](/api-docs/clay-web/format/tmx/TmxText/) |

Used to mark an object as a text object. Contains the actual text as character data.

### OTPolyline

```haxe
OTPolyline(points: Array<format.tmx.TmxPoint>)
```

**Parameters:**

| Name | Type |
|------|------|
| `points` | [Array](/api-docs/clay-web/Array/)<[format.tmx.TmxPoint](/api-docs/clay-web/format/tmx/TmxPoint/)> |

Polyline determined by points with origin of object x/y.

