---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ReadOnlyArray
target: Headless
permalink: api-docs/headless/haxe/ds/ReadOnlyArray/
---

# ReadOnlyArray

<div class="type-hierarchy"><strong>haxe.ds.ReadOnlyArray</strong> (Abstract)</div>

`ReadOnlyArray` is an abstract over an ordinary `Array` which only exposes
APIs that don't modify the instance, hence "read-only".

Note that this doesn't necessarily mean that the instance is *immutable*.
Other code holding a reference to the underlying `Array` can still modify it,
and the reference can be obtained with a `cast`.

## Type Conversions

**From:**
- `[Array](/api-docs/headless/Array/)<haxe.ds.ReadOnlyArray.T>`

**To:**
- `[Iterable](/api-docs/headless/Iterable/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:forward` | copy, filter, indexOf, iterator, keyValueIterator, join, lastIndexOf, map, slice, contains, toString |

