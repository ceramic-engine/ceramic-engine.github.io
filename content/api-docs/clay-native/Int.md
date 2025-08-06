---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Int
target: Clay (Native)
permalink: api-docs/clay-native/Int/
---

# Int

<div class="type-hierarchy"><strong>Int</strong> (Abstract)</div>

The standard `Int` type. Its precision depends on the platform.

On static targets, `null` cannot be assigned to `Int`. If this is necessary,
`Null<Int>` can be used instead.

`Std.int` converts a `Float` to an `Int`, rounded towards 0.
`Std.parseInt` converts a `String` to an `Int`.

<div class="see"><strong>See:</strong> https://haxe.org/manual/types-basic-types.html, https://haxe.org/manual/std-math-integer-math.html, https://haxe.org/manual/types-nullability.html</div>


## Type Conversions

**To:**
- `[Float](/api-docs/clay-native/Float/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:notNull` | - |

