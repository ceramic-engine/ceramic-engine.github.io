---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: TmxObjectGroupDrawOrder
target: Clay (Native)
permalink: api-docs/clay-native/format/tmx/TmxObjectGroupDrawOrder/
---

# TmxObjectGroupDrawOrder

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Data.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.TmxObjectGroupDrawOrder</strong> (Enum)</div>

Whether the objects are drawn according to the order of appearance ("index") or sorted by their y-coordinate ("topdown"). Defaults to "topdown".

## Constructors

### Index

```haxe
Index
```

Objects should be drawn according to it's position in `objects` array.

### Topdown

```haxe
Topdown
```

Objects should be drawn according to their Y-coordinate. Default value.

### Unknown

```haxe
Unknown(value: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `value` | [String](/api-docs/clay-native/String/) |

Unknown draw order.

