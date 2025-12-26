---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: TokenType
target: Clay (Native)
permalink: api-docs/clay-native/loreline/TokenType/
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
| `name` | [Null](/api-docs/clay-native/Null/)<[String](/api-docs/clay-native/String/)> |
| `args` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> |
| `code` | [String](/api-docs/clay-native/String/) |
| `external` | [Bool](/api-docs/clay-native/Bool/) |

Function code

### LString

```haxe
LString(quotes: loreline.Quotes, s: String, ?attachments: Array<Anonymous>)
```

**Parameters:**

| Name | Type |
|------|------|
| `quotes` | [loreline.Quotes](/api-docs/clay-native/loreline/Quotes/) |
| `s` | [String](/api-docs/clay-native/String/) |
| `?attachments` | [Array](/api-docs/clay-native/Array/)<Anonymous> |

String literal with optional attachments

### LNumber

```haxe
LNumber(n: Float)
```

**Parameters:**

| Name | Type |
|------|------|
| `n` | [Float](/api-docs/clay-native/Float/) |

Numeric literal

### LBoolean

```haxe
LBoolean(b: Bool)
```

**Parameters:**

| Name | Type |
|------|------|
| `b` | [Bool](/api-docs/clay-native/Bool/) |

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
| `name` | [String](/api-docs/clay-native/String/) |

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
| `word` | [Bool](/api-docs/clay-native/Bool/) |

Logical AND operator (&& / and)

### OpOr

```haxe
OpOr(word: Bool)
```

**Parameters:**

| Name | Type |
|------|------|
| `word` | [Bool](/api-docs/clay-native/Bool/) |

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
| `content` | [String](/api-docs/clay-native/String/) |

Single-line comment

### CommentMultiLine

```haxe
CommentMultiLine(content: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `content` | [String](/api-docs/clay-native/String/) |

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
| `:using` | loreline.Lexer.TokenTypeHelpers |

