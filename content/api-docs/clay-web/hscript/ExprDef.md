---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hscript
title: ExprDef
target: Clay (Web)
permalink: api-docs/clay-web/hscript/ExprDef/
---

# ExprDef

<div class="view-source"><a href="https://github.com/ceramic-engine/hscript/blob/master/hscript/Expr.hx">View source</a></div>

<div class="type-hierarchy"><strong>hscript.ExprDef</strong> (Enum)</div>

## Constructors

### EConst

```haxe
EConst(c: Anonymous)
```

**Parameters:**

| Name | Type |
|------|------|
| `c` | Anonymous |

### EIdent

```haxe
EIdent(v: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `v` | [String](/api-docs/clay-web/String/) |

### EVar

```haxe
EVar(n: String, ?t: Anonymous, ?e: Null<hscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `n` | [String](/api-docs/clay-web/String/) |
| `?t` | Anonymous |
| `?e` | [Null](/api-docs/clay-web/Null/)<[hscript.Expr](/api-docs/clay-web/hscript/Expr/)> |

### EParent

```haxe
EParent(e: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |

### EBlock

```haxe
EBlock(e: Array<hscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [Array](/api-docs/clay-web/Array/)<[hscript.Expr](/api-docs/clay-web/hscript/Expr/)> |

### EField

```haxe
EField(e: hscript.Expr, f: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |
| `f` | [String](/api-docs/clay-web/String/) |

### EBinop

```haxe
EBinop(op: String, e1: hscript.Expr, e2: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `op` | [String](/api-docs/clay-web/String/) |
| `e1` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |
| `e2` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |

### EUnop

```haxe
EUnop(op: String, prefix: Bool, e: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `op` | [String](/api-docs/clay-web/String/) |
| `prefix` | [Bool](/api-docs/clay-web/Bool/) |
| `e` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |

### ECall

```haxe
ECall(e: hscript.Expr, params: Array<hscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |
| `params` | [Array](/api-docs/clay-web/Array/)<[hscript.Expr](/api-docs/clay-web/hscript/Expr/)> |

### EIf

```haxe
EIf(cond: hscript.Expr, e1: hscript.Expr, ?e2: Null<hscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `cond` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |
| `e1` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |
| `?e2` | [Null](/api-docs/clay-web/Null/)<[hscript.Expr](/api-docs/clay-web/hscript/Expr/)> |

### EWhile

```haxe
EWhile(cond: hscript.Expr, e: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `cond` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |
| `e` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |

### EFor

```haxe
EFor(v: String, it: hscript.Expr, e: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `v` | [String](/api-docs/clay-web/String/) |
| `it` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |
| `e` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |

### EBreak

```haxe
EBreak
```

### EContinue

```haxe
EContinue
```

### EFunction

```haxe
EFunction(args: Array<hscript.Argument>, e: hscript.Expr, ?name: String, ?ret: Anonymous)
```

**Parameters:**

| Name | Type |
|------|------|
| `args` | [Array](/api-docs/clay-web/Array/)<[hscript.Argument](/api-docs/clay-web/hscript/Argument/)> |
| `e` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |
| `?name` | [String](/api-docs/clay-web/String/) |
| `?ret` | Anonymous |

### EReturn

```haxe
EReturn(?e: Null<hscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `?e` | [Null](/api-docs/clay-web/Null/)<[hscript.Expr](/api-docs/clay-web/hscript/Expr/)> |

### EArray

```haxe
EArray(e: hscript.Expr, index: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |
| `index` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |

### EArrayDecl

```haxe
EArrayDecl(e: Array<hscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [Array](/api-docs/clay-web/Array/)<[hscript.Expr](/api-docs/clay-web/hscript/Expr/)> |

### ENew

```haxe
ENew(cl: String, params: Array<hscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `cl` | [String](/api-docs/clay-web/String/) |
| `params` | [Array](/api-docs/clay-web/Array/)<[hscript.Expr](/api-docs/clay-web/hscript/Expr/)> |

### EThrow

```haxe
EThrow(e: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |

### ETry

```haxe
ETry(e: hscript.Expr, v: String, t: Null<Anonymous>, ecatch: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |
| `v` | [String](/api-docs/clay-web/String/) |
| `t` | [Null](/api-docs/clay-web/Null/)<Anonymous> |
| `ecatch` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |

### EObject

```haxe
EObject(fl: Array<AnonStruct>)
```

**Parameters:**

| Name | Type |
|------|------|
| `fl` | [Array](/api-docs/clay-web/Array/)<AnonStruct> |

### ETernary

```haxe
ETernary(cond: hscript.Expr, e1: hscript.Expr, e2: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `cond` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |
| `e1` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |
| `e2` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |

### ESwitch

```haxe
ESwitch(e: hscript.Expr, cases: Array<AnonStruct>, ?defaultExpr: Null<hscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |
| `cases` | [Array](/api-docs/clay-web/Array/)<AnonStruct> |
| `?defaultExpr` | [Null](/api-docs/clay-web/Null/)<[hscript.Expr](/api-docs/clay-web/hscript/Expr/)> |

### EDoWhile

```haxe
EDoWhile(cond: hscript.Expr, e: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `cond` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |
| `e` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |

### EMeta

```haxe
EMeta(name: String, args: Array<hscript.Expr>, e: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |
| `args` | [Array](/api-docs/clay-web/Array/)<[hscript.Expr](/api-docs/clay-web/hscript/Expr/)> |
| `e` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |

### ECheckType

```haxe
ECheckType(e: hscript.Expr, t: Anonymous)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [hscript.Expr](/api-docs/clay-web/hscript/Expr/) |
| `t` | Anonymous |

