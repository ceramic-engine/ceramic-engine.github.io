---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Null
target: Clay (Native)
permalink: api-docs/clay-native/Null/
---

# Null

<div class="type-hierarchy"><strong>Null</strong> (Abstract)</div>

`Null<T>` is a wrapper that can be used to make the basic types `Int`,
`Float` and `Bool` nullable on static targets.

If null safety is enabled, only types wrapped in `Null<T>` are nullable.

Otherwise, it has no effect on non-basic-types, but it can be useful as a way to document
that `null` is an acceptable value for a method argument, return value or variable.

<div class="see"><strong>See:</strong> https://haxe.org/manual/types-nullability.html</div>


## Type Conversions

**From:**
- `Null.T`

**To:**
- `Null.T`

## Metadata

| Name | Parameters |
|------|------------|
| `:forward` | - |

