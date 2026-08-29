---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: ErrorDef
target: Clay (Native)
permalink: api-docs/clay-native/loreline/lorscript/ErrorDef/
---

# ErrorDef

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/lorscript/Expr.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.lorscript.ErrorDef</strong> (Enum)</div>

## Constructors

### EInvalidChar

```haxe
EInvalidChar(c: Int)
```

**Parameters:**

| Name | Type |
|------|------|
| `c` | [Int](/api-docs/clay-native/Int/) |

### EUnexpected

```haxe
EUnexpected(s: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-native/String/) |

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
| `msg` | [String](/api-docs/clay-native/String/) |

### EUnknownVariable

```haxe
EUnknownVariable(v: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `v` | [String](/api-docs/clay-native/String/) |

### EInvalidIterator

```haxe
EInvalidIterator(v: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `v` | [String](/api-docs/clay-native/String/) |

### EInvalidOp

```haxe
EInvalidOp(op: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `op` | [String](/api-docs/clay-native/String/) |

### EInvalidAccess

```haxe
EInvalidAccess(f: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `f` | [String](/api-docs/clay-native/String/) |

### ECustom

```haxe
ECustom(msg: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `msg` | [String](/api-docs/clay-native/String/) |

