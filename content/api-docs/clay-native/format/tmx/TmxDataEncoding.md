---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: TmxDataEncoding
target: Clay (Native)
permalink: api-docs/clay-native/format/tmx/TmxDataEncoding/
---

# TmxDataEncoding

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Data.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.TmxDataEncoding</strong> (Enum)</div>

Encoding of the data.

## Constructors

### None

```haxe
None
```

No encoding, data given in raw.

### Base64

```haxe
Base64
```

Base64-encoded data.

### CSV

```haxe
CSV
```

Comma-separated-values data. Can be applied only for tile data.

### Unknown

```haxe
Unknown(value: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `value` | [String](/api-docs/clay-native/String/) |

Unknown encoding

