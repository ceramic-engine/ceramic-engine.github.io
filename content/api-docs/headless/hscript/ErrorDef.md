---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hscript
title: ErrorDef
target: Headless
permalink: api-docs/headless/hscript/ErrorDef/
---

# ErrorDef

<div class="view-source"><a href="https://github.com/ceramic-engine/hscript/blob/master/hscript/Expr.hx">View source</a></div>

<div class="type-hierarchy"><strong>hscript.ErrorDef</strong> (Enum)</div>

## Constructors

### EInvalidChar

```haxe
EInvalidChar(c: Int)
```

**Parameters:**

| Name | Type |
|------|------|
| `c` | [Int](/api-docs/headless/Int/) |

### EUnexpected

```haxe
EUnexpected(s: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `s` | [String](/api-docs/headless/String/) |

### EUnterminatedString

```haxe
EUnterminatedString
```

### EUnterminatedComment

```haxe
EUnterminatedComment
```

### EInvalidPreprocessor

```haxe
EInvalidPreprocessor(msg: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `msg` | [String](/api-docs/headless/String/) |

### EUnknownVariable

```haxe
EUnknownVariable(v: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `v` | [String](/api-docs/headless/String/) |

### EInvalidIterator

```haxe
EInvalidIterator(v: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `v` | [String](/api-docs/headless/String/) |

### EInvalidOp

```haxe
EInvalidOp(op: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `op` | [String](/api-docs/headless/String/) |

### EInvalidAccess

```haxe
EInvalidAccess(f: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `f` | [String](/api-docs/headless/String/) |

### ECustom

```haxe
ECustom(msg: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `msg` | [String](/api-docs/headless/String/) |

