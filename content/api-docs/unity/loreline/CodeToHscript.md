---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: CodeToHscript
target: Unity
permalink: api-docs/unity/loreline/CodeToHscript/
---

# CodeToHscript

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/CodeToHscript.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.CodeToHscript</strong> (Class)</div>

Preprocesses Loreline script code to make it compatible with HScript.
This class converts Loreline syntax into valid HScript syntax by:
- Converting 'and' and 'or' operators to '&&' and '||'
- Adding parentheses around control structure conditions
- Adding semicolons and braces where needed
- Processing string literals and comments

## Instance Members

<div class="signature field-var has-description" id="input"><code><span class="field-name">input</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#input"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The input Loreline script code

<hr class="field-separator" />

<div class="signature field-var has-description" id="output"><code><span class="field-name">output</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Utf8Buf/" class="type-link">Utf8Buf</a></code><a class="header-anchor" href="#output"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Buffer for the processed output

<hr class="field-separator" />

<div class="signature field-method has-description" id="process"><code><span class="field-name">process</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#process"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Processes a Loreline script code string and converts it to HScript compatible code.



| Name | Type | Description |
|------|------|-------------|
| `input` | [String](/api-docs/unity/String/) | The Loreline script code to process  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | The processed HScript compatible code |

<hr class="field-separator" />

<div class="signature field-method no-description" id="toLorelinePos"><code><span class="field-name">toLorelinePos</span><span class="parenthesis">(</span><span class="arg-name">funcPos</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Position/" class="type-link">Position</a><span class="operator">,</span> <span class="arg-name">pmin</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pmax</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Position/" class="type-link">Position</a></code><a class="header-anchor" href="#toLorelinePos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `funcPos` | [Position](/api-docs/unity/loreline/Position/) |
| `pmin` | [Int](/api-docs/unity/Int/) |
| `pmax` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Position](/api-docs/unity/loreline/Position/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputPosFromProcessedPos"><code><span class="field-name">inputPosFromProcessedPos</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#inputPosFromProcessedPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pos` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="processedPosFromInputPos"><code><span class="field-name">processedPosFromInputPos</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#processedPosFromInputPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pos` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new CodeToHscript instance.

## Private Members

<div class="signature field-var has-description" id="CONTROL_KEYWORDS"><code><span class="field-name">CONTROL_KEYWORDS</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#CONTROL_KEYWORDS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of control flow keywords that may need special handling

<hr class="field-separator" />

<div class="signature field-var has-description" id="index"><code><span class="field-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current position in the input string

<hr class="field-separator" />

<div class="signature field-var has-description" id="lineOutput"><code><span class="field-name">lineOutput</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Utf8Buf/" class="type-link">Utf8Buf</a></code><a class="header-anchor" href="#lineOutput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Buffer for tracking the current line

<hr class="field-separator" />

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Length of the input string

<hr class="field-separator" />

<div class="signature field-var has-description" id="indent"><code><span class="field-name">indent</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current indentation level

<hr class="field-separator" />

<div class="signature field-var has-description" id="inComment"><code><span class="field-name">inComment</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inComment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether currently processing a comment

<hr class="field-separator" />

<div class="signature field-var has-description" id="inString"><code><span class="field-name">inString</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether currently processing a string literal

<hr class="field-separator" />

<div class="signature field-var has-description" id="posOffsets"><code><span class="field-name">posOffsets</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#posOffsets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tracks position offsets for error reporting

<hr class="field-separator" />

<div class="signature field-var has-description" id="currentPosOffset"><code><span class="field-name">currentPosOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#currentPosOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current position offset

<hr class="field-separator" />

<div class="signature field-var has-description" id="inControl"><code><span class="field-name">inControl</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inControl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether currently processing a control structure

<hr class="field-separator" />

<div class="signature field-var has-description" id="inControlWithoutParens"><code><span class="field-name">inControlWithoutParens</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inControlWithoutParens"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether currently processing a control structure without explicit parentheses

<hr class="field-separator" />

<div class="signature field-var has-description" id="indentLevel"><code><span class="field-name">indentLevel</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indentLevel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current indentation level

<hr class="field-separator" />

<div class="signature field-var has-description" id="indentStack"><code><span class="field-name">indentStack</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#indentStack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stack of indentation levels

<hr class="field-separator" />

<div class="signature field-var has-description" id="stack"><code><span class="field-name">stack</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/CodeToHscriptStackType/" class="type-link">CodeToHscriptStackType</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#stack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A stack to keep track of whether we are inside an object or array literal or not

<hr class="field-separator" />

<div class="signature field-method has-description" id="processInput"><code><span class="field-name">processInput</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">until</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#processInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Main input processing loop that handles each character in the input.

| Name | Type | Default |
|------|------|---------|
| `until` | [Int](/api-docs/unity/Int/) | `-1` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="processString"><code><span class="field-name">processString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#processString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Processes a string literal, preserving its content and escape sequences.

<hr class="field-separator" />

<div class="signature field-method no-description" id="processComplexInterpolation"><code><span class="field-name">processComplexInterpolation</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#processComplexInterpolation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="processFieldAccessInterpolation"><code><span class="field-name">processFieldAccessInterpolation</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#processFieldAccessInterpolation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="processIdentifier"><code><span class="field-name">processIdentifier</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#processIdentifier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="isDigit"><code><span class="field-name">isDigit</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isDigit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a character is a digit (0-9).
@*

| Name | Type | Description |
|------|------|-------------|
| `c` | [Int](/api-docs/unity/Int/) | Character code to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | Whether the character is a digit |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isIdentifierStart"><code><span class="field-name">isIdentifierStart</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isIdentifierStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a character is valid as the start of an identifier.
Valid identifier starts are letters and underscore.


| Name | Type | Description |
|------|------|-------------|
| `c` | [Int](/api-docs/unity/Int/) | Character code to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | Whether the character can start an identifier |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isIdentifierPart"><code><span class="field-name">isIdentifierPart</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isIdentifierPart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a character is valid as part of an identifier.
Valid identifier parts are letters, numbers, and underscore.


| Name | Type | Description |
|------|------|-------------|
| `c` | [Int](/api-docs/unity/Int/) | Character code to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | Whether the character can be part of an identifier |

<hr class="field-separator" />

<div class="signature field-method has-description" id="processComment"><code><span class="field-name">processComment</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#processComment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Processes comments, preserving their layout while replacing content with spaces
to maintain character positions for error reporting.

<hr class="field-separator" />

<div class="signature field-method has-description" id="endsWithChar"><code><span class="field-name">endsWithChar</span><span class="parenthesis">(</span><span class="arg-name">line</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#endsWithChar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a line ends with a specific character.



| Name | Type | Description |
|------|------|-------------|
| `line` | [String](/api-docs/unity/String/) | The line to check  |
| `c` | [Int](/api-docs/unity/Int/) | The character code to look for  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if the line ends with the character, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="followsWithChar"><code><span class="field-name">followsWithChar</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#followsWithChar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the next non-whitespace, non-comment character in the input is a specific character.



| Name | Type | Description |
|------|------|-------------|
| `c` | [Int](/api-docs/unity/Int/) | The character code to look for  |
| `pos` | [Int](/api-docs/unity/Int/) | The position to start looking from  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if the next meaningful character is the one we're looking for, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="endsOrFollowsWithChar"><code><span class="field-name">endsOrFollowsWithChar</span><span class="parenthesis">(</span><span class="arg-name">line</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">hxpos</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/haxe/PosInfos/" class="type-link">haxe.PosInfos</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#endsOrFollowsWithChar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a line ends with a specific character or if the character follows in the input.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `line` | [String](/api-docs/unity/String/) | | The line to check  |
| `c` | [Int](/api-docs/unity/Int/) | | The character code to look for  |
| `pos` | [Int](/api-docs/unity/Int/) | | The position to start looking from if the character is not at the end of the line  |
| `hxpos` | [Null](/api-docs/unity/Null/)<[haxe.PosInfos](/api-docs/unity/haxe/PosInfos/)> | *(optional)* |  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if the character is found at the end of the line or as the next meaningful character |

<hr class="field-separator" />

<div class="signature field-method has-description" id="nextLineIndentOffset"><code><span class="field-name">nextLineIndentOffset</span><span class="parenthesis">(</span><span class="arg-name">line</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextLineIndentOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the indentation change between the current line and the next non-empty line.



| Name | Type | Description |
|------|------|-------------|
| `line` | [String](/api-docs/unity/String/) | The current line  |
| `pos` | [Int](/api-docs/unity/Int/) | The position to start looking from for the next line  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/unity/Int/) | A positive number for indent, negative for dedent, or zero for no change |

<hr class="field-separator" />

<div class="signature field-method has-description" id="followsWithIf"><code><span class="field-name">followsWithIf</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#followsWithIf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the next non-whitespace, non-comment token is the "if" keyword.
Used to detect "else if" constructs that shouldn't add braces between else and if.



| Name | Type | Description |
|------|------|-------------|
| `pos` | [Int](/api-docs/unity/Int/) | The position to start looking from  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if the next token is "if", false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="endsWithControlKeyword"><code><span class="field-name">endsWithControlKeyword</span><span class="parenthesis">(</span><span class="arg-name">line</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#endsWithControlKeyword"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a line ends with a control flow keyword (if, for, while, etc.).



| Name | Type | Description |
|------|------|-------------|
| `line` | [String](/api-docs/unity/String/) | The line to check  |
| `pos` | [Int](/api-docs/unity/Int/) | The position to use for validating what follows the potential keyword  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if the line ends with a control keyword, false otherwise |

<hr class="field-separator" />

<div class="signature field-method no-description" id="endsWithArrayIndexable"><code><span class="field-name">endsWithArrayIndexable</span><span class="parenthesis">(</span><span class="arg-name">line</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#endsWithArrayIndexable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `line` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isWhitespace"><code><span class="field-name">isWhitespace</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isWhitespace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a character is a whitespace character.



| Name | Type | Description |
|------|------|-------------|
| `c` | [Int](/api-docs/unity/Int/) | The character code to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if the character is whitespace, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isAlphaNumeric"><code><span class="field-name">isAlphaNumeric</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isAlphaNumeric"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a character is alphanumeric or underscore.



| Name | Type | Description |
|------|------|-------------|
| `c` | [Int](/api-docs/unity/Int/) | The character code to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if the character is alphanumeric or underscore, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addExtra"><code><span class="field-name">addExtra</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addExtra"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a character to the output, and increment index

| Name | Type |
|------|------|
| `c` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a character to the output without incrementing index

| Name | Type |
|------|------|
| `c` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inStatementsBlock"><code><span class="field-name">inStatementsBlock</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inStatementsBlock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inObjectBlock"><code><span class="field-name">inObjectBlock</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inObjectBlock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inArrayBlock"><code><span class="field-name">inArrayBlock</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inArrayBlock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isLabelStart"><code><span class="field-name">isLabelStart</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isLabelStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns whether the input at the given position begins with a label pattern (identifier:).


| Name | Type | Description |
|------|------|-------------|
| `pos` | [Int](/api-docs/unity/Int/) | Position to check from  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if a label starts at the position, false otherwise |

<hr class="field-separator" />

<div class="signature field-method no-description" id="skipWhitespaceAndComments"><code><span class="field-name">skipWhitespaceAndComments</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#skipWhitespaceAndComments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pos` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="stackPush"><code><span class="field-name">stackPush</span><span class="parenthesis">(</span><span class="arg-name">item</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/CodeToHscriptStackType/" class="type-link">CodeToHscriptStackType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stackPush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `item` | [CodeToHscriptStackType](/api-docs/unity/loreline/CodeToHscriptStackType/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="stackPop"><code><span class="field-name">stackPop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/CodeToHscriptStackType/" class="type-link">CodeToHscriptStackType</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#stackPop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<[CodeToHscriptStackType](/api-docs/unity/loreline/CodeToHscriptStackType/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="error"><code><span class="field-name">error</span><span class="parenthesis">(</span><span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#error"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `message` | [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

