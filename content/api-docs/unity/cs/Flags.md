---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Flags
target: Unity
permalink: api-docs/unity/cs/Flags/
---

# Flags

<div class="type-hierarchy"><strong>cs.Flags</strong> (Abstract)</div>

Use this type to have access to the bitwise operators of C# enums that have a `cs.system.FlagsAttribute` attribute.

Usage example:

```haxe
import cs.system.reflection.BindingFlags;
var binding = new Flags(BindingFlags.Public) | BindingFlags.Static | BindingFlags.NonPublic;
```

## Type Conversions

**From:**
- `cs.Flags.T`

**To:**
- `cs.Flags.T`

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

