---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hscript
title: CType
target: Clay (Native)
permalink: api-docs/clay-native/hscript/CType/
---

# CType

<div class="view-source"><a href="https://github.com/ceramic-engine/hscript/blob/master/hscript/Expr.hx">View source</a></div>

<div class="type-hierarchy"><strong>hscript.CType</strong> (Enum)</div>

## Constructors

### CTPath

```haxe
CTPath(path: Array<String>, ?params: Array<Anonymous>)
```

**Parameters:**

| Name | Type |
|------|------|
| `path` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> |
| `?params` | [Array](/api-docs/clay-native/Array/)<Anonymous> |

### CTFun

```haxe
CTFun(args: Array<Anonymous>, ret: Anonymous)
```

**Parameters:**

| Name | Type |
|------|------|
| `args` | [Array](/api-docs/clay-native/Array/)<Anonymous> |
| `ret` | Anonymous |

### CTAnon

```haxe
CTAnon(fields: Array<AnonStruct>)
```

**Parameters:**

| Name | Type |
|------|------|
| `fields` | [Array](/api-docs/clay-native/Array/)<AnonStruct> |

### CTParent

```haxe
CTParent(t: Anonymous)
```

**Parameters:**

| Name | Type |
|------|------|
| `t` | Anonymous |

### CTOpt

```haxe
CTOpt(t: Anonymous)
```

**Parameters:**

| Name | Type |
|------|------|
| `t` | Anonymous |

### CTNamed

```haxe
CTNamed(n: String, t: Anonymous)
```

**Parameters:**

| Name | Type |
|------|------|
| `n` | [String](/api-docs/clay-native/String/) |
| `t` | Anonymous |

