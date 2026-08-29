---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: ExprDef
target: Headless
permalink: api-docs/headless/loreline/lorscript/ExprDef/
---

# ExprDef

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/lorscript/Expr.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.lorscript.ExprDef</strong> (Enum)</div>

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
EVar(n: String, ?t: Anonymous, ?e: Null<loreline.lorscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `n` | [String](/api-docs/headless/String/) |
| `?t` | Anonymous |
| `?e` | [Null](/api-docs/headless/Null/)<[loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/)> |

### EParent

```haxe
EParent(e: loreline.lorscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |

### EBlock

```haxe
EBlock(e: Array<loreline.lorscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [Array](/api-docs/headless/Array/)<[loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/)> |

### EField

```haxe
EField(e: loreline.lorscript.Expr, f: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |
| `f` | [String](/api-docs/headless/String/) |

### EBinop

```haxe
EBinop(op: String, e1: loreline.lorscript.Expr, e2: loreline.lorscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `op` | [String](/api-docs/headless/String/) |
| `e1` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |
| `e2` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |

### EUnop

```haxe
EUnop(op: String, prefix: Bool, e: loreline.lorscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `op` | [String](/api-docs/headless/String/) |
| `prefix` | [Bool](/api-docs/headless/Bool/) |
| `e` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |

### ECall

```haxe
ECall(e: loreline.lorscript.Expr, params: Array<loreline.lorscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |
| `params` | [Array](/api-docs/headless/Array/)<[loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/)> |

### EIf

```haxe
EIf(cond: loreline.lorscript.Expr, e1: loreline.lorscript.Expr, ?e2: Null<loreline.lorscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `cond` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |
| `e1` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |
| `?e2` | [Null](/api-docs/headless/Null/)<[loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/)> |

### EWhile

```haxe
EWhile(cond: loreline.lorscript.Expr, e: loreline.lorscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `cond` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |
| `e` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |

### EFor

```haxe
EFor(v: String, it: loreline.lorscript.Expr, e: loreline.lorscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `v` | [String](/api-docs/headless/String/) |
| `it` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |
| `e` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |

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
EFunction(args: Array<loreline.lorscript.Argument>, e: loreline.lorscript.Expr, ?name: String, ?ret: Anonymous)
```

**Parameters:**

| Name | Type |
|------|------|
| `args` | [Array](/api-docs/headless/Array/)<[loreline.lorscript.Argument](/api-docs/headless/loreline/lorscript/Argument/)> |
| `e` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |
| `?name` | [String](/api-docs/headless/String/) |
| `?ret` | Anonymous |

### EReturn

```haxe
EReturn(?e: Null<loreline.lorscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `?e` | [Null](/api-docs/headless/Null/)<[loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/)> |

### EArray

```haxe
EArray(e: loreline.lorscript.Expr, index: loreline.lorscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |
| `index` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |

### EArrayDecl

```haxe
EArrayDecl(e: Array<loreline.lorscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [Array](/api-docs/headless/Array/)<[loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/)> |

### ENew

```haxe
ENew(cl: String, params: Array<loreline.lorscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `cl` | [String](/api-docs/headless/String/) |
| `params` | [Array](/api-docs/headless/Array/)<[loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/)> |

### EThrow

```haxe
EThrow(e: loreline.lorscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |

### ETry

```haxe
ETry(e: loreline.lorscript.Expr, v: String, t: Null<Anonymous>, ecatch: loreline.lorscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |
| `v` | [String](/api-docs/headless/String/) |
| `t` | [Null](/api-docs/headless/Null/)<Anonymous> |
| `ecatch` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |

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
ETernary(cond: loreline.lorscript.Expr, e1: loreline.lorscript.Expr, e2: loreline.lorscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `cond` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |
| `e1` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |
| `e2` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |

### ESwitch

```haxe
ESwitch(e: loreline.lorscript.Expr, cases: Array<AnonStruct>, ?defaultExpr: Null<loreline.lorscript.Expr>)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |
| `cases` | [Array](/api-docs/headless/Array/)<AnonStruct> |
| `?defaultExpr` | [Null](/api-docs/headless/Null/)<[loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/)> |

### EDoWhile

```haxe
EDoWhile(cond: loreline.lorscript.Expr, e: loreline.lorscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `cond` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |
| `e` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |

### EMeta

```haxe
EMeta(name: String, args: Array<loreline.lorscript.Expr>, e: loreline.lorscript.Expr)
```

**Parameters:**

| Name | Type |
|------|------|
| `name` | [String](/api-docs/headless/String/) |
| `args` | [Array](/api-docs/headless/Array/)<[loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/)> |
| `e` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |

### ECheckType

```haxe
ECheckType(e: loreline.lorscript.Expr, t: Anonymous)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [loreline.lorscript.Expr](/api-docs/headless/loreline/lorscript/Expr/) |
| `t` | Anonymous |

