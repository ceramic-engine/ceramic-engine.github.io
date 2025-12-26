---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: StringPartType
target: Unity
permalink: api-docs/unity/loreline/StringPartType/
---

# StringPartType

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Node.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.StringPartType</strong> (Enum)</div>

Represents the different types of string parts that can appear in string literals.

## Constructors

### Raw

```haxe
Raw(text: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `text` | [String](/api-docs/unity/String/) |

Raw text content.

### Expr

```haxe
Expr(expr: loreline.NExpr)
```

**Parameters:**

| Name | Type |
|------|------|
| `expr` | [loreline.NExpr](/api-docs/unity/loreline/NExpr/) |

Interpolated expression (${...} or $identifier).

### Tag

```haxe
Tag(closing: Bool, expr: loreline.NStringLiteral)
```

**Parameters:**

| Name | Type |
|------|------|
| `closing` | [Bool](/api-docs/unity/Bool/) |
| `expr` | [loreline.NStringLiteral](/api-docs/unity/loreline/NStringLiteral/) |

Text formatting tag (<tag> or </tag>).

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

