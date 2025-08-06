---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: TmxDataCompression
target: Unity
permalink: api-docs/unity/format/tmx/TmxDataCompression/
---

# TmxDataCompression

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Data.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.TmxDataCompression</strong> (Enum)</div>

Compression type for data.

## Constructors

### None

```haxe
None
```

No compression.

### GZip

```haxe
GZip
```

GZip compression. Currently not supported.

### ZLib

```haxe
ZLib
```

ZLib compression.

### Unknown

```haxe
Unknown(value: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `value` | [String](/api-docs/unity/String/) |

Unknown compression

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

