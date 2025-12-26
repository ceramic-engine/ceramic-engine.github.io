---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: StringPartType
target: Headless
permalink: api-docs/headless/loreline/StringPartType/
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
| `text` | [String](/api-docs/headless/String/) |

Raw text content.

### Expr

```haxe
Expr(expr: loreline.NExpr)
```

**Parameters:**

| Name | Type |
|------|------|
| `expr` | [loreline.NExpr](/api-docs/headless/loreline/NExpr/) |

Interpolated expression (${...} or $identifier).

### Tag

```haxe
Tag(closing: Bool, expr: loreline.NStringLiteral)
```

**Parameters:**

| Name | Type |
|------|------|
| `closing` | [Bool](/api-docs/headless/Bool/) |
| `expr` | [loreline.NStringLiteral](/api-docs/headless/loreline/NStringLiteral/) |

Text formatting tag (<tag> or </tag>).

