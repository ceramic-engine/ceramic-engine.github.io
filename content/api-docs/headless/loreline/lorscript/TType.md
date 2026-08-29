---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: TType
target: Headless
permalink: api-docs/headless/loreline/lorscript/TType/
---

# TType

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/lorscript/Checker.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.lorscript.TType</strong> (Enum)</div>

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
TInst(c: loreline.lorscript.CClass, args: Array<Anonymous>)
```

**Parameters:**

| Name | Type |
|------|------|
| `c` | [loreline.lorscript.CClass](/api-docs/headless/loreline/lorscript/CClass/) |
| `args` | [Array](/api-docs/headless/Array/)<Anonymous> |

### TEnum

```haxe
TEnum(e: loreline.lorscript.CEnum, args: Array<Anonymous>)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [loreline.lorscript.CEnum](/api-docs/headless/loreline/lorscript/CEnum/) |
| `args` | [Array](/api-docs/headless/Array/)<Anonymous> |

### TType

```haxe
TType(t: loreline.lorscript.CTypedef, args: Array<Anonymous>)
```

**Parameters:**

| Name | Type |
|------|------|
| `t` | [loreline.lorscript.CTypedef](/api-docs/headless/loreline/lorscript/CTypedef/) |
| `args` | [Array](/api-docs/headless/Array/)<Anonymous> |

### TAbstract

```haxe
TAbstract(a: loreline.lorscript.CAbstract, args: Array<Anonymous>)
```

**Parameters:**

| Name | Type |
|------|------|
| `a` | [loreline.lorscript.CAbstract](/api-docs/headless/loreline/lorscript/CAbstract/) |
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

