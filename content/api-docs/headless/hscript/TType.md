---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hscript
title: TType
target: Headless
permalink: api-docs/headless/hscript/TType/
---

# TType

<div class="view-source"><a href="https://github.com/ceramic-engine/hscript/blob/master/hscript/Checker.hx">View source</a></div>

<div class="type-hierarchy"><strong>hscript.TType</strong> (Enum)</div>

## Constructors

### TMono

```haxe
TMono(r: AnonStruct)
```

**Parameters:**

| Name | Type |
|------|------|
| `r` | AnonStruct |

### TVoid

```haxe
TVoid
```

### TInt

```haxe
TInt
```

### TFloat

```haxe
TFloat
```

### TBool

```haxe
TBool
```

### TDynamic

```haxe
TDynamic
```

### TParam

```haxe
TParam(name: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `name` | [String](/api-docs/headless/String/) |

### TUnresolved

```haxe
TUnresolved(name: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `name` | [String](/api-docs/headless/String/) |

### TNull

```haxe
TNull(t: Anonymous)
```

**Parameters:**

| Name | Type |
|------|------|
| `t` | Anonymous |

### TInst

```haxe
TInst(c: hscript.CClass, args: Array<Anonymous>)
```

**Parameters:**

| Name | Type |
|------|------|
| `c` | [hscript.CClass](/api-docs/headless/hscript/CClass/) |
| `args` | [Array](/api-docs/headless/Array/)<Anonymous> |

### TEnum

```haxe
TEnum(e: hscript.CEnum, args: Array<Anonymous>)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [hscript.CEnum](/api-docs/headless/hscript/CEnum/) |
| `args` | [Array](/api-docs/headless/Array/)<Anonymous> |

### TType

```haxe
TType(t: hscript.CTypedef, args: Array<Anonymous>)
```

**Parameters:**

| Name | Type |
|------|------|
| `t` | [hscript.CTypedef](/api-docs/headless/hscript/CTypedef/) |
| `args` | [Array](/api-docs/headless/Array/)<Anonymous> |

### TAbstract

```haxe
TAbstract(a: hscript.CAbstract, args: Array<Anonymous>)
```

**Parameters:**

| Name | Type |
|------|------|
| `a` | [hscript.CAbstract](/api-docs/headless/hscript/CAbstract/) |
| `args` | [Array](/api-docs/headless/Array/)<Anonymous> |

### TFun

```haxe
TFun(args: Array<AnonStruct>, ret: Anonymous)
```

**Parameters:**

| Name | Type |
|------|------|
| `args` | [Array](/api-docs/headless/Array/)<AnonStruct> |
| `ret` | Anonymous |

### TAnon

```haxe
TAnon(fields: Array<AnonStruct>)
```

**Parameters:**

| Name | Type |
|------|------|
| `fields` | [Array](/api-docs/headless/Array/)<AnonStruct> |

### TLazy

```haxe
TLazy(f: Function)
```

**Parameters:**

| Name | Type |
|------|------|
| `f` | Function |

