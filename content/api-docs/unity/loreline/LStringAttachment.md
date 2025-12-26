---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: LStringAttachment
target: Unity
permalink: api-docs/unity/loreline/LStringAttachment/
---

# LStringAttachment

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Lexer.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.LStringAttachment</strong> (Enum)</div>

Represents additional information attached to a string token, such as interpolations or tags.

## Constructors

### Interpolation

```haxe
Interpolation(braces: Bool, inTag: Bool, expr: loreline.Tokens, start: Int, length: Int)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `braces` | [Bool](/api-docs/unity/Bool/) | Whether the interpolation uses braces  |
| `inTag` | [Bool](/api-docs/unity/Bool/) | Whether the interpolation is inside a tag  |
| `expr` | [loreline.Tokens](/api-docs/unity/loreline/Tokens/) | The tokens making up the interpolation expression  |
| `start` | [Int](/api-docs/unity/Int/) | Starting position in the string  |
| `length` | [Int](/api-docs/unity/Int/) | Length of the interpolation |

String interpolation expression.

### Tag

```haxe
Tag(closing: Bool, start: Int, length: Int)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `closing` | [Bool](/api-docs/unity/Bool/) | Whether this is a closing tag  |
| `start` | [Int](/api-docs/unity/Int/) | Starting position in the string  |
| `length` | [Int](/api-docs/unity/Int/) | Length of the tag |

String formatting tag.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

