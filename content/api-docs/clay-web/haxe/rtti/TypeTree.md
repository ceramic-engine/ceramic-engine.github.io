---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: TypeTree
target: Clay (Web)
permalink: api-docs/clay-web/haxe/rtti/TypeTree/
---

# TypeTree

<div class="type-hierarchy"><strong>haxe.rtti.TypeTree</strong> (Enum)</div>

The tree types of the runtime type.

## Constructors

### TPackage

```haxe
TPackage(name: String, full: String, subs: Array<Anonymous>)
```

**Parameters:**

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |
| `full` | [String](/api-docs/clay-web/String/) |
| `subs` | [Array](/api-docs/clay-web/Array/)<Anonymous> |

### TClassdecl

```haxe
TClassdecl(c: haxe.rtti.Classdef)
```

**Parameters:**

| Name | Type |
|------|------|
| `c` | [haxe.rtti.Classdef](/api-docs/clay-web/haxe/rtti/Classdef/) |

### TEnumdecl

```haxe
TEnumdecl(e: haxe.rtti.Enumdef)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [haxe.rtti.Enumdef](/api-docs/clay-web/haxe/rtti/Enumdef/) |

### TTypedecl

```haxe
TTypedecl(t: haxe.rtti.Typedef)
```

**Parameters:**

| Name | Type |
|------|------|
| `t` | [haxe.rtti.Typedef](/api-docs/clay-web/haxe/rtti/Typedef/) |

### TAbstractdecl

```haxe
TAbstractdecl(a: haxe.rtti.Abstractdef)
```

**Parameters:**

| Name | Type |
|------|------|
| `a` | [haxe.rtti.Abstractdef](/api-docs/clay-web/haxe/rtti/Abstractdef/) |

