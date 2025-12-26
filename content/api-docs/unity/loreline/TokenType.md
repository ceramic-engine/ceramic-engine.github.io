---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: TokenType
target: Unity
permalink: api-docs/unity/loreline/TokenType/
---

# TokenType

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Lexer.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.TokenType</strong> (Enum)</div>

Represents the different types of tokens that can be produced by the lexer.

## Constructors

### KwImport

```haxe
KwImport
```

Import statement keyword

### KwState

```haxe
KwState
```

State declaration keyword

### KwBeat

```haxe
KwBeat
```

Beat declaration keyword

### KwCharacter

```haxe
KwCharacter
```

Character declaration keyword

### KwChoice

```haxe
KwChoice
```

Choice block keyword

### KwIf

```haxe
KwIf
```

If statement keyword

### KwElse

```haxe
KwElse
```

Else statement keyword

### KwNew

```haxe
KwNew
```

New state keyword

### Function

```haxe
Function(name: Null<String>, args: Array<String>, code: String, external: Bool)
```

**Parameters:**

| Name | Type |
|------|------|
| `name` | [Null](/api-docs/unity/Null/)<[String](/api-docs/unity/String/)> |
| `args` | [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> |
| `code` | [String](/api-docs/unity/String/) |
| `external` | [Bool](/api-docs/unity/Bool/) |

Function code

### LString

```haxe
LString(quotes: loreline.Quotes, s: String, ?attachments: Array<Anonymous>)
```

**Parameters:**

| Name | Type |
|------|------|
| `quotes` | [loreline.Quotes](/api-docs/unity/loreline/Quotes/) |
| `s` | [String](/api-docs/unity/String/) |
| `?attachments` | [Array](/api-docs/unity/Array/)<Anonymous> |

String literal with optional attachments

### LNumber

```haxe
LNumber(n: Float)
```

**Parameters:**

| Name | Type |
|------|------|
| `n` | [Float](/api-docs/unity/Float/) |

Numeric literal

### LBoolean

```haxe
LBoolean(b: Bool)
```

**Parameters:**

| Name | Type |
|------|------|
| `b` | [Bool](/api-docs/unity/Bool/) |

Boolean literal

### LNull

```haxe
LNull
```

Null literal

### Identifier

```haxe
Identifier(name: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

Identifier token

### OpAssign

```haxe
OpAssign
```

Assignment operator (=)

### OpPlusAssign

```haxe
OpPlusAssign
```

Plus-assignment operator (+=)

### OpMinusAssign

```haxe
OpMinusAssign
```

Minus-assignment operator (-=)

### OpMultiplyAssign

```haxe
OpMultiplyAssign
```

Multiply-assignment operator (*=)

### OpDivideAssign

```haxe
OpDivideAssign
```

Divide-assignment operator (/=)

### OpPlus

```haxe
OpPlus
```

Addition operator (+)

### OpMinus

```haxe
OpMinus
```

Subtraction operator (-)

### OpMultiply

```haxe
OpMultiply
```

Multiplication operator (*)

### OpDivide

```haxe
OpDivide
```

Division operator (/)

### OpModulo

```haxe
OpModulo
```

Modulo operator (%)

### OpEquals

```haxe
OpEquals
```

Equality operator (==)

### OpNotEquals

```haxe
OpNotEquals
```

Inequality operator (!=)

### OpGreater

```haxe
OpGreater
```

Greater than operator (>)

### OpLess

```haxe
OpLess
```

Less than operator (<)

### OpGreaterEq

```haxe
OpGreaterEq
```

Greater than or equal operator (>=)

### OpLessEq

```haxe
OpLessEq
```

Less than or equal operator (<=)

### OpAnd

```haxe
OpAnd(word: Bool)
```

**Parameters:**

| Name | Type |
|------|------|
| `word` | [Bool](/api-docs/unity/Bool/) |

Logical AND operator (&& / and)

### OpOr

```haxe
OpOr(word: Bool)
```

**Parameters:**

| Name | Type |
|------|------|
| `word` | [Bool](/api-docs/unity/Bool/) |

Logical OR operator (|| / or)

### OpNot

```haxe
OpNot
```

Logical NOT operator (!)

### Arrow

```haxe
Arrow
```

Transition arrow (->)

### Colon

```haxe
Colon
```

Colon (:)

### Comma

```haxe
Comma
```

Comma (,)

### Dot

```haxe
Dot
```

Dot (.)

### LBrace

```haxe
LBrace
```

Left brace ({)

### RBrace

```haxe
RBrace
```

Right brace (})

### LParen

```haxe
LParen
```

Left parenthesis (()

### RParen

```haxe
RParen
```

Right parenthesis ())

### LBracket

```haxe
LBracket
```

Left bracket ([)

### RBracket

```haxe
RBracket
```

Right bracket (])

### CommentLine

```haxe
CommentLine(content: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `content` | [String](/api-docs/unity/String/) |

Single-line comment

### CommentMultiLine

```haxe
CommentMultiLine(content: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `content` | [String](/api-docs/unity/String/) |

Multi-line comment

### Indent

```haxe
Indent
```

Increase indentation level

### Unindent

```haxe
Unindent
```

Decrease indentation level

### LineBreak

```haxe
LineBreak
```

Line break token

### Eof

```haxe
Eof
```

End of file token

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:using` | loreline.Lexer.TokenTypeHelpers |

