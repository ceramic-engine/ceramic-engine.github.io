---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Map
target: Clay (Native)
permalink: api-docs/clay-native/haxe/ds/Map/
---

# Map

<div class="type-hierarchy"><strong>haxe.ds.Map</strong> (Abstract)</div>

Map allows key to value mapping for arbitrary value types, and many key
types.

This is a multi-type abstract, it is instantiated as one of its
specialization types depending on its type parameters.

A Map can be instantiated without explicit type parameters. Type inference
will then determine the type parameters from the usage.

Maps can also be created with `[key1 => value1, key2 => value2]` syntax.

Map is an abstract type, it is not available at runtime.

<div class="see"><strong>See:</strong> https://haxe.org/manual/std-Map.html</div>


## Type Conversions

**From:**
- `[haxe.ds.StringMap](/api-docs/clay-native/haxe/ds/StringMap/)<fromStringMap.V>`

**To:**
- `[haxe.ds.StringMap](/api-docs/clay-native/haxe/ds/StringMap/)<toStringMap.V>`

## Metadata

| Name | Parameters |
|------|------------|
| `:transitive` | - |
| `:multiType` | @:followWithAbstracts K |

