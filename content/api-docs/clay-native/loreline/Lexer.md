---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Lexer
target: Clay (Native)
permalink: api-docs/clay-native/loreline/Lexer/
---

# Lexer

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Lexer.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Lexer</strong> (Class)</div>

The lexical analyzer for the Loreline language.
Converts source code text into a sequence of tokens.

## Static Members

<div class="signature field-var no-description" id="hasNonSpecialChar_specialChars"><code><span class="field-name">hasNonSpecialChar_specialChars</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#hasNonSpecialChar_specialChars"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-method has-description" id="reset"><code><span class="field-name">reset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets the lexer to the beginning of the input.

<hr class="field-separator" />

<div class="signature field-method has-description" id="tokenize"><code><span class="field-name">tokenize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Tokens/" class="type-link">Tokens</a></code><a class="header-anchor" href="#tokenize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts the entire input into an array of tokens.

| Returns | Description |
|---------|-------------|
| [Tokens](/api-docs/clay-native/loreline/Tokens/) | Array of tokens |

<hr class="field-separator" />

<div class="signature field-method has-description" id="nextToken"><code><span class="field-name">nextToken</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#nextToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads and returns the next token from the input.

| Returns | Description |
|---------|-------------|
| [Token](/api-docs/clay-native/loreline/Token/) | The next token  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getErrors"><code><span class="field-name">getErrors</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/LexerError/" class="type-link">LexerError</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getErrors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the array of lexing errors encountered.

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-native/Array/)<[LexerError](/api-docs/clay-native/loreline/LexerError/)> | Array of LexerError objects |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new lexer for the given input.


| Name | Type | Description |
|------|------|-------------|
| `input` | [String](/api-docs/clay-native/String/) | The source code to lex |

## Private Members

<div class="signature field-var has-description" id="KEYWORDS"><code><span class="field-name">KEYWORDS</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/ds/Map/" class="type-link">haxe.ds.Map</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="type-name">Anonymous</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#KEYWORDS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mapping of keywords to their corresponding token types.

<hr class="field-separator" />

<div class="signature field-var has-description" id="input"><code><span class="field-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#input"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The input source code being lexed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pos"><code><span class="field-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current position in the input.

<hr class="field-separator" />

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Length of the input string.

<hr class="field-separator" />

<div class="signature field-var has-description" id="line"><code><span class="field-name">line</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#line"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current line number.

<hr class="field-separator" />

<div class="signature field-var has-description" id="column"><code><span class="field-name">column</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#column"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current column number.

<hr class="field-separator" />

<div class="signature field-var has-description" id="startLine"><code><span class="field-name">startLine</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#startLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starting line of the current token.

<hr class="field-separator" />

<div class="signature field-var has-description" id="startColumn"><code><span class="field-name">startColumn</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#startColumn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starting column of the current token.

<hr class="field-separator" />

<div class="signature field-var has-description" id="previous"><code><span class="field-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#previous"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Previous token that was read.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tokenized"><code><span class="field-name">tokenized</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Tokens/" class="type-link">Tokens</a></code><a class="header-anchor" href="#tokenized"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current token lists during tokenization

<hr class="field-separator" />

<div class="signature field-var has-description" id="stack"><code><span class="field-name">stack</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/TokenStackType/" class="type-link">TokenStackType</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#stack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A stack to keep track of whether we are inside a `beat` or a `state`/`character` block.
Depending on that, the rules for reading unquoted string tokens are different.

<hr class="field-separator" />

<div class="signature field-var has-description" id="nextBlock"><code><span class="field-name">nextBlock</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/TokenStackType/" class="type-link">TokenStackType</a></code><a class="header-anchor" href="#nextBlock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The token type that will be added to the `stack`
next time we find a `LBrace` token

<hr class="field-separator" />

<div class="signature field-var has-description" id="strictExprs"><code><span class="field-name">strictExprs</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/StrictExprType/" class="type-link">StrictExprType</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#strictExprs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When last value is true, that means only strictly
correct expressions are accepted, thus
unquoted strings will be disabled. Mostly
used to handle interpolated values in strings
or object/array literals in strict expressions that loosen the rules

<hr class="field-separator" />

<div class="signature field-var has-description" id="indentLevel"><code><span class="field-name">indentLevel</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indentLevel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current indentation level (number of spaces/tabs)

<hr class="field-separator" />

<div class="signature field-var has-description" id="indentStack"><code><span class="field-name">indentStack</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#indentStack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stack of indentation levels

<hr class="field-separator" />

<div class="signature field-var has-description" id="indentTokens"><code><span class="field-name">indentTokens</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Tokens/" class="type-link">Tokens</a></code><a class="header-anchor" href="#indentTokens"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Queue of generated indentation tokens

<hr class="field-separator" />

<div class="signature field-var has-description" id="indentSize"><code><span class="field-name">indentSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indentSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The indentation size (e.g., 4 spaces or 1 tab)

<hr class="field-separator" />

<div class="signature field-var has-description" id="allowTabs"><code><span class="field-name">allowTabs</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allowTabs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether tabs are allowed for indentation

<hr class="field-separator" />

<div class="signature field-var has-description" id="errors"><code><span class="field-name">errors</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/LexerError/" class="type-link">LexerError</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#errors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Errors collected during lexing, if any

<hr class="field-separator" />

<div class="signature field-method has-description" id="compareAttachments"><code><span class="field-name">compareAttachments</span><span class="parenthesis">(</span><span class="arg-name">l</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">r</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compareAttachments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compares two string attachments by their starting position.


| Name | Type | Description |
|------|------|-------------|
| `l` | Anonymous | First attachment  |
| `r` | Anonymous | Second attachment  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Negative if l comes before r, positive if r comes before l, 0 if equal |

<hr class="field-separator" />

<div class="signature field-method no-description" id="countIndentation"><code><span class="field-name">countIndentation</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#countIndentation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parentBlockType"><code><span class="field-name">parentBlockType</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#parentBlockType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the token type of the parent block.

| Returns | Description |
|---------|-------------|
| Anonymous | The token type of the parent block or KwBeat if at top level |

<hr class="field-separator" />

<div class="signature field-method has-description" id="inBeat"><code><span class="field-name">inBeat</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inBeat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if currently in a beat block.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if inside a beat block, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="inStateOrCharacter"><code><span class="field-name">inStateOrCharacter</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inStateOrCharacter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if currently in a state or character block.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if inside a state or character block, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readLineBreak"><code><span class="field-name">readLineBreak</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#readLineBreak"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a line break token (newline or carriage return + newline).

| Returns | Description |
|---------|-------------|
| [Token](/api-docs/clay-native/loreline/Token/) | Line break token |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isWhitespace"><code><span class="field-name">isWhitespace</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isWhitespace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Helper function to check if a character is whitespace.


| Name | Type | Description |
|------|------|-------------|
| `c` | [Int](/api-docs/clay-native/Int/) | The character code to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if the character is whitespace, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="matchIdentifier"><code><span class="field-name">matchIdentifier</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#matchIdentifier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Helper function to match an identifier at the given position.


| Name | Type | Description |
|------|------|-------------|
| `pos` | [Int](/api-docs/clay-native/Int/) | The position to start matching from  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-native/Null/)<[String](/api-docs/clay-native/String/)> | The matched identifier, or `null` if not matching |

<hr class="field-separator" />

<div class="signature field-method has-description" id="skipWhitespaceAndComments"><code><span class="field-name">skipWhitespaceAndComments</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">stopNextLine</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#skipWhitespaceAndComments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Helper function to skip whitespace and comments

| Name | Type | Default |
|------|------|---------|
| `pos` | [Int](/api-docs/clay-native/Int/) | |
| `stopNextLine` | [Bool](/api-docs/clay-native/Bool/) | `false` |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isIfStart"><code><span class="field-name">isIfStart</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isIfStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns whether the input at the given position is the start of an if condition.


| Name | Type | Description |
|------|------|-------------|
| `pos` | [Int](/api-docs/clay-native/Int/) | Position to check from  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if an if condition starts at the position, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isIdentifierExpressionStart"><code><span class="field-name">isIdentifierExpressionStart</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">lowercaseIdentOnly</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isIdentifierExpressionStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns whether the input at the given position is the start of an identifier expression.


| Name | Type | Description |
|------|------|-------------|
| `pos` | [Int](/api-docs/clay-native/Int/) | Position to check from  |
| `lowercaseIdentOnly` | [Bool](/api-docs/clay-native/Bool/) |  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if an identifier expression starts at the position, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isTransitionStart"><code><span class="field-name">isTransitionStart</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isTransitionStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns whether the input at the given position is a valid transition start.
A valid transition consists of "->" followed by an identifier, with optional
whitespace and comments in between. Nothing but whitespace and comments can
follow the identifier.


| Name | Type | Description |
|------|------|-------------|
| `pos` | [Int](/api-docs/clay-native/Int/) | Position to check from  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if a valid transition starts at the position, false otherwise |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isInsertionStart"><code><span class="field-name">isInsertionStart</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isInsertionStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pos` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isLabelStart"><code><span class="field-name">isLabelStart</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isLabelStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns whether the input at the given position begins with a label pattern (identifier:).


| Name | Type | Description |
|------|------|-------------|
| `pos` | [Int](/api-docs/clay-native/Int/) | Position to check from  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if a label starts at the position, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isCallStart"><code><span class="field-name">isCallStart</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isCallStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns whether the input at the given position is the start of a function or method call.


| Name | Type | Description |
|------|------|-------------|
| `pos` | [Int](/api-docs/clay-native/Int/) | Position to check from  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if a function call starts at the position, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isAssignStart"><code><span class="field-name">isAssignStart</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">strict</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isAssignStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns whether the input at the given position is the start of an assignment.


| Name | Type | Description |
|------|------|-------------|
| `pos` | [Int](/api-docs/clay-native/Int/) | Position to check from  |
| `strict` | [Bool](/api-docs/clay-native/Bool/) |  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if an assignment starts at the position, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isColon"><code><span class="field-name">isColon</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">skipWhitespaces</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isColon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns whether the next token is a colon.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `pos` | [Int](/api-docs/clay-native/Int/) | | Position to check from  |
| `skipWhitespaces` | [Bool](/api-docs/clay-native/Bool/) | `true` | Whether to skip whitespace before checking  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if next token is a colon, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="afterLabelIdentifierToken"><code><span class="field-name">afterLabelIdentifierToken</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">inSameLine</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#afterLabelIdentifierToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If we are currently right after a label, return the related identifier token index (before colon),
or -1 if not after a label.

| Name | Type | Default |
|------|------|---------|
| `inSameLine` | [Bool](/api-docs/clay-native/Bool/) | `true` |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isStartingMultilineDialogue"><code><span class="field-name">isStartingMultilineDialogue</span><span class="parenthesis">(</span><span class="arg-name">labelIdentifierTokenIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#isStartingMultilineDialogue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a dialogue statement continues over multiple lines.



| Name | Type |
|------|------|
| `labelIdentifierTokenIndex` | [Int](/api-docs/clay-native/Int/) |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | The indentation of the multiline dialogue or -1 |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isContinuingMultilineText"><code><span class="field-name">isContinuingMultilineText</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">indent</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isContinuingMultilineText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pos` | [Int](/api-docs/clay-native/Int/) |
| `indent` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isAfterComma"><code><span class="field-name">isAfterComma</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isAfterComma"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isAfterLBracket"><code><span class="field-name">isAfterLBracket</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isAfterLBracket"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isInsideBrackets"><code><span class="field-name">isInsideBrackets</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isInsideBrackets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns whether we are currently inside brackets [ ].

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if inside brackets, false otherwise |

<hr class="field-separator" />

<div class="signature field-method no-description" id="followsAssignStart"><code><span class="field-name">followsAssignStart</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#followsAssignStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="followsOnlyLabelOrCommentsInLine"><code><span class="field-name">followsOnlyLabelOrCommentsInLine</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#followsOnlyLabelOrCommentsInLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns whether the resolved tokens in the current line are only white spaces,
a single label `someLabel:`, or comments.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if line only contains label or comments, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="followsOnlyWhitespacesOrCommentsInLine"><code><span class="field-name">followsOnlyWhitespacesOrCommentsInLine</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#followsOnlyWhitespacesOrCommentsInLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns whether the resolved tokens in the current line are only white spaces or comments.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if line only contains whitespace or comments, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hasNonSpecialChar"><code><span class="field-name">hasNonSpecialChar</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasNonSpecialChar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns whether the given string has a non special character that could be
considered as actual text.


| Name | Type | Description |
|------|------|-------------|
| `str` | [String](/api-docs/clay-native/String/) | String to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if string contains non-special characters, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isNumber"><code><span class="field-name">isNumber</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isNumber"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns whether the given input is a valid number.


| Name | Type | Description |
|------|------|-------------|
| `value` | [String](/api-docs/clay-native/String/) | String to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if string represents a valid number, false otherwise |

<hr class="field-separator" />

<div class="signature field-method no-description" id="makeLooseOrStrictAfterBracket"><code><span class="field-name">makeLooseOrStrictAfterBracket</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#makeLooseOrStrictAfterBracket"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="makeStrictIfFollowingCallable"><code><span class="field-name">makeStrictIfFollowingCallable</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#makeStrictIfFollowingCallable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="followsCallableOrIndexable"><code><span class="field-name">followsCallableOrIndexable</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#followsCallableOrIndexable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isStrict"><code><span class="field-name">isStrict</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isStrict"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="readImportValue"><code><span class="field-name">readImportValue</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">startPos</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#readImportValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | [Int](/api-docs/clay-native/Int/) |
| `startPos` | [Position](/api-docs/clay-native/loreline/Position/) |

| Returns |
|---------|
| [Token](/api-docs/clay-native/loreline/Token/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="tryReadUnquotedString"><code><span class="field-name">tryReadUnquotedString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/Token/" class="type-link">Token</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tryReadUnquotedString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tries to read an unquoted string literal from the current position.
Returns null if the current position cannot start an unquoted string.

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-native/Null/)<[Token](/api-docs/clay-native/loreline/Token/)> | Token if an unquoted string was read, null otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readString"><code><span class="field-name">readString</span><span class="parenthesis">(</span><span class="arg-name">stringStart</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#readString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a string literal, handling escape sequences, interpolation, and tags.


| Name | Type | Description |
|------|------|-------------|
| `stringStart` | [Position](/api-docs/clay-native/loreline/Position/) | Starting position of the string  |

| Returns | Description |
|---------|-------------|
| [Token](/api-docs/clay-native/loreline/Token/) | String literal token  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readComplexInterpolation"><code><span class="field-name">readComplexInterpolation</span><span class="parenthesis">(</span><span class="arg-name">interpStart</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Tokens/" class="type-link">Tokens</a></code><a class="header-anchor" href="#readComplexInterpolation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a complex interpolation expression inside ${...}.


| Name | Type | Description |
|------|------|-------------|
| `interpStart` | [Position](/api-docs/clay-native/loreline/Position/) | Starting position of the interpolation  |

| Returns | Description |
|---------|-------------|
| [Tokens](/api-docs/clay-native/loreline/Tokens/) | Array of tokens making up the interpolation expression  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="nextTokenWithPosition"><code><span class="field-name">nextTokenWithPosition</span><span class="parenthesis">(</span><span class="arg-name">startPos</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#nextTokenWithPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a token with proper position tracking in a nested context.


| Name | Type | Description |
|------|------|-------------|
| `startPos` | [Position](/api-docs/clay-native/loreline/Position/) | Starting position for position calculation  |

| Returns | Description |
|---------|-------------|
| [Token](/api-docs/clay-native/loreline/Token/) | Token with adjusted position |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readFieldAccessInterpolation"><code><span class="field-name">readFieldAccessInterpolation</span><span class="parenthesis">(</span><span class="arg-name">interpStart</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Tokens/" class="type-link">Tokens</a></code><a class="header-anchor" href="#readFieldAccessInterpolation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a simple field access interpolation (e.g. $foo.bar[baz].qux).


| Name | Type | Description |
|------|------|-------------|
| `interpStart` | [Position](/api-docs/clay-native/loreline/Position/) | Starting position of the interpolation  |

| Returns | Description |
|---------|-------------|
| [Tokens](/api-docs/clay-native/loreline/Tokens/) | Array of tokens making up the field access  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readIdentifierTokenInInterpolation"><code><span class="field-name">readIdentifierTokenInInterpolation</span><span class="parenthesis">(</span><span class="arg-name">stringStart</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#readIdentifierTokenInInterpolation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads an identifier token in a string interpolation context.


| Name | Type | Description |
|------|------|-------------|
| `stringStart` | [Position](/api-docs/clay-native/loreline/Position/) | Starting position for position calculation  |

| Returns | Description |
|---------|-------------|
| [Token](/api-docs/clay-native/loreline/Token/) | Identifier token |

<hr class="field-separator" />

<div class="signature field-method has-description" id="makePositionRelativeTo"><code><span class="field-name">makePositionRelativeTo</span><span class="parenthesis">(</span><span class="arg-name">stringStart</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a></code><a class="header-anchor" href="#makePositionRelativeTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Makes position relative to the given string start position.


| Name | Type | Description |
|------|------|-------------|
| `stringStart` | [Position](/api-docs/clay-native/loreline/Position/) | Starting position for calculation  |

| Returns | Description |
|---------|-------------|
| [Position](/api-docs/clay-native/loreline/Position/) | Position object relative to string start |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readLineComment"><code><span class="field-name">readLineComment</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#readLineComment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a single-line comment.

| Returns | Description |
|---------|-------------|
| [Token](/api-docs/clay-native/loreline/Token/) | Comment token |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readMultiLineComment"><code><span class="field-name">readMultiLineComment</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#readMultiLineComment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a multi-line comment, handling nested comments.

| Returns | Description |
|---------|-------------|
| [Token](/api-docs/clay-native/loreline/Token/) | Comment token  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readNumber"><code><span class="field-name">readNumber</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#readNumber"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a numeric literal.

| Returns | Description |
|---------|-------------|
| [Token](/api-docs/clay-native/loreline/Token/) | Number token |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readIdentifier"><code><span class="field-name">readIdentifier</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#readIdentifier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads an identifier or keyword.

| Returns | Description |
|---------|-------------|
| [Token](/api-docs/clay-native/loreline/Token/) | Identifier or keyword token |

<hr class="field-separator" />

<div class="signature field-method no-description" id="readFunction"><code><span class="field-name">readFunction</span><span class="parenthesis">(</span><span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#readFunction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `start` | [Position](/api-docs/clay-native/loreline/Position/) |

| Returns |
|---------|
| [Token](/api-docs/clay-native/loreline/Token/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="skipQuotedString"><code><span class="field-name">skipQuotedString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#skipQuotedString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="makePosition"><code><span class="field-name">makePosition</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a></code><a class="header-anchor" href="#makePosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new position at the current location.

| Returns | Description |
|---------|-------------|
| [Position](/api-docs/clay-native/loreline/Position/) | Position object |

<hr class="field-separator" />

<div class="signature field-method has-description" id="makeToken"><code><span class="field-name">makeToken</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#makeToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new token with the given type and optional position.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `type` | Anonymous | | Token type  |
| `position` | [Position](/api-docs/clay-native/loreline/Position/) | *(optional)* | Optional position (defaults to current position)  |

| Returns | Description |
|---------|-------------|
| [Token](/api-docs/clay-native/loreline/Token/) | Created token |

<hr class="field-separator" />

<div class="signature field-method has-description" id="advance"><code><span class="field-name">advance</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#advance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Advances the lexer position by the given number of characters.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `count` | [Int](/api-docs/clay-native/Int/) | `1` | Number of characters to advance (default 1) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="peek"><code><span class="field-name">peek</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#peek"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Looks ahead in the input without advancing the position.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `offset` | [Int](/api-docs/clay-native/Int/) | `1` | Number of characters to look ahead (default 1)  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Character code at the offset position, or 0 if beyond input length |

<hr class="field-separator" />

<div class="signature field-method has-description" id="error"><code><span class="field-name">error</span><span class="parenthesis">(</span><span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">fatal</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/LexerError/" class="type-link">LexerError</a></code><a class="header-anchor" href="#error"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates and throws a lexer error.


| Name | Type | Description |
|------|------|-------------|
| `message` | [String](/api-docs/clay-native/String/) | Error message  |
| `fatal` | [Bool](/api-docs/clay-native/Bool/) |  |

| Returns |
|---------|
| [LexerError](/api-docs/clay-native/loreline/LexerError/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="skipWhitespace"><code><span class="field-name">skipWhitespace</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#skipWhitespace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Skips whitespace characters (space and tab).

<hr class="field-separator" />

<div class="signature field-method has-description" id="isDigit"><code><span class="field-name">isDigit</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isDigit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a character is a digit (0-9).
@*

| Name | Type | Description |
|------|------|-------------|
| `c` | [Int](/api-docs/clay-native/Int/) | Character code to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | Whether the character is a digit |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isIdentifierStart"><code><span class="field-name">isIdentifierStart</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isIdentifierStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a character is valid as the start of an identifier.
Valid identifier starts are letters and underscore.


| Name | Type | Description |
|------|------|-------------|
| `c` | [Int](/api-docs/clay-native/Int/) | Character code to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | Whether the character can start an identifier |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isLowerCase"><code><span class="field-name">isLowerCase</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isLowerCase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isIdentifierPart"><code><span class="field-name">isIdentifierPart</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isIdentifierPart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a character is valid as part of an identifier.
Valid identifier parts are letters, numbers, and underscore.


| Name | Type | Description |
|------|------|-------------|
| `c` | [Int](/api-docs/clay-native/Int/) | Character code to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | Whether the character can be part of an identifier |

