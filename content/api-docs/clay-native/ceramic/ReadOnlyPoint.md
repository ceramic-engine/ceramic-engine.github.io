---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ReadOnlyPoint
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/ReadOnlyPoint/
---

# ReadOnlyPoint

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ReadOnlyPoint.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ReadOnlyPoint</strong> (Abstract)</div>

A read-only view of a Point that prevents modification.

ReadOnlyPoint provides access to x, y, and z coordinates without
allowing changes. This is useful for exposing point data that
should not be modified by consumers.

Example usage:
```haxe
var position = new Point(100, 200);
var readOnly:ReadOnlyPoint = position;

trace(readOnly.x); // 100 - OK
// readOnly.x = 150; // Compile error!
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/Point/">Point</a></div>


## Type Conversions

**From:**
- `[ceramic.Point](/api-docs/clay-native/ceramic/Point/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |
| `:allow` | ceramic.Screen |

