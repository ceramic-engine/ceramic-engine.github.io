---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ReadOnlyArray
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/ReadOnlyArray/
---

# ReadOnlyArray

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ReadOnlyArray.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ReadOnlyArray</strong> (Abstract)</div>

`ReadOnlyArray` is an abstract over an ordinary `Array` which only exposes
APIs that don't modify the instance, hence "read-only".

Note that this doesn't necessarily mean that the instance is *immutable*.
Other code holding a reference to the underlying `Array` can still modify it,
and the reference can be obtained with a `cast`.

## Type Conversions

**From:**
- `[Array](/api-docs/clay-web/Array/)<ceramic.ReadOnlyArray.T>`

**To:**
- `[Iterable](/api-docs/clay-web/Iterable/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:forward` | get, concat, copy, filter, indexOf, iterator, keyValueIterator, join, lastIndexOf, map, slice, contains, toString |

