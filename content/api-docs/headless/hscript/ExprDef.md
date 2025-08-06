---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hscript
title: ExprDef
target: Headless
permalink: api-docs/headless/hscript/ExprDef/
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
| `v` | [String](/api-docs/headless/String/) |

### EVar

```haxe
EVar(n: String, ?t: Anonymous, ?e: Null<hscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `n` | [String](/api-docs/headless/String/) |
| `?t` | Anonymous |
| `?e` | [Null](/api-docs/headless/Null/)<[hscript.Expr](/api-docs/headless/hscript/Expr/)> |

### EParent

```haxe
EParent(e: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |

### EBlock

```haxe
EBlock(e: Array<hscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [Array](/api-docs/headless/Array/)<[hscript.Expr](/api-docs/headless/hscript/Expr/)> |

### EField

```haxe
EField(e: hscript.Expr, f: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |
| `f` | [String](/api-docs/headless/String/) |

### EBinop

```haxe
EBinop(op: String, e1: hscript.Expr, e2: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `op` | [String](/api-docs/headless/String/) |
| `e1` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |
| `e2` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |

### EUnop

```haxe
EUnop(op: String, prefix: Bool, e: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `op` | [String](/api-docs/headless/String/) |
| `prefix` | [Bool](/api-docs/headless/Bool/) |
| `e` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |

### ECall

```haxe
ECall(e: hscript.Expr, params: Array<hscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |
| `params` | [Array](/api-docs/headless/Array/)<[hscript.Expr](/api-docs/headless/hscript/Expr/)> |

### EIf

```haxe
EIf(cond: hscript.Expr, e1: hscript.Expr, ?e2: Null<hscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `cond` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |
| `e1` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |
| `?e2` | [Null](/api-docs/headless/Null/)<[hscript.Expr](/api-docs/headless/hscript/Expr/)> |

### EWhile

```haxe
EWhile(cond: hscript.Expr, e: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `cond` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |
| `e` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |

### EFor

```haxe
EFor(v: String, it: hscript.Expr, e: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `v` | [String](/api-docs/headless/String/) |
| `it` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |
| `e` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |

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
| `args` | [Array](/api-docs/headless/Array/)<[hscript.Argument](/api-docs/headless/hscript/Argument/)> |
| `e` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |
| `?name` | [String](/api-docs/headless/String/) |
| `?ret` | Anonymous |

### EReturn

```haxe
EReturn(?e: Null<hscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `?e` | [Null](/api-docs/headless/Null/)<[hscript.Expr](/api-docs/headless/hscript/Expr/)> |

### EArray

```haxe
EArray(e: hscript.Expr, index: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |
| `index` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |

### EArrayDecl

```haxe
EArrayDecl(e: Array<hscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [Array](/api-docs/headless/Array/)<[hscript.Expr](/api-docs/headless/hscript/Expr/)> |

### ENew

```haxe
ENew(cl: String, params: Array<hscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `cl` | [String](/api-docs/headless/String/) |
| `params` | [Array](/api-docs/headless/Array/)<[hscript.Expr](/api-docs/headless/hscript/Expr/)> |

### EThrow

```haxe
EThrow(e: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |

### ETry

```haxe
ETry(e: hscript.Expr, v: String, t: Null<Anonymous>, ecatch: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |
| `v` | [String](/api-docs/headless/String/) |
| `t` | [Null](/api-docs/headless/Null/)<Anonymous> |
| `ecatch` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |

### EObject

```haxe
EObject(fl: Array<AnonStruct>)
```

**Parameters:**

| Name | Type |
|------|------|
| `fl` | [Array](/api-docs/headless/Array/)<AnonStruct> |

### ETernary

```haxe
ETernary(cond: hscript.Expr, e1: hscript.Expr, e2: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `cond` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |
| `e1` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |
| `e2` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |

### ESwitch

```haxe
ESwitch(e: hscript.Expr, cases: Array<AnonStruct>, ?defaultExpr: Null<hscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |
| `cases` | [Array](/api-docs/headless/Array/)<AnonStruct> |
| `?defaultExpr` | [Null](/api-docs/headless/Null/)<[hscript.Expr](/api-docs/headless/hscript/Expr/)> |

### EDoWhile

```haxe
EDoWhile(cond: hscript.Expr, e: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `cond` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |
| `e` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |

### EMeta

```haxe
EMeta(name: String, args: Array<hscript.Expr>, e: hscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `name` | [String](/api-docs/headless/String/) |
| `args` | [Array](/api-docs/headless/Array/)<[hscript.Expr](/api-docs/headless/hscript/Expr/)> |
| `e` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |

### ECheckType

```haxe
ECheckType(e: hscript.Expr, t: Anonymous)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [hscript.Expr](/api-docs/headless/hscript/Expr/) |
| `t` | Anonymous |

