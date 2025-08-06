---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Any
target: Headless
permalink: api-docs/headless/Any/
---

# Any

<div class="type-hierarchy"><strong>Any</strong> (Abstract)</div>

`Any` is a type that is compatible with any other in both ways.

This means that a value of any type can be assigned to `Any`, and
vice-versa, a value of `Any` type can be assigned to any other type.

It's a more type-safe alternative to `Dynamic`, because it doesn't
support field access or operators and it's bound to monomorphs. So,
to work with the actual value, it needs to be explicitly promoted
to another type.

## Type Conversions

**From:**
- `[Dynamic](/api-docs/headless/Dynamic/)`

**To:**
- `__promote.T`

## Metadata

| Name | Parameters |
|------|------------|
| `:forward.variance` | - |

