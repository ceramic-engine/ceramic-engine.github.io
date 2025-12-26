---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Parser
target: Headless
permalink: api-docs/headless/loreline/Parser/
---

# Parser

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Parser.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Parser</strong> (Class)</div>

Parser for the Loreline scripting language.
Converts a stream of tokens into an Abstract Syntax Tree (AST).

## Instance Members

<div class="signature field-method has-description" id="parse"><code><span class="field-name">parse</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Script/" class="type-link">Script</a></code><a class="header-anchor" href="#parse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Main parsing entry point. Parses the entire script into an AST.

| Returns | Description |
|---------|-------------|
| [Script](/api-docs/headless/loreline/Script/) | Root node of the AST |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getErrors"><code><span class="field-name">getErrors</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/ParseError/" class="type-link">ParseError</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getErrors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the array of parsing errors encountered.

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/headless/Array/)<[ParseError](/api-docs/headless/loreline/ParseError/)> | Array of ParseError objects |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">tokens</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Tokens/" class="type-link">Tokens</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/ParserContext/" class="type-link">ParserContext</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Parser instance.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tokens` | [Tokens](/api-docs/headless/loreline/Tokens/) | | Array of tokens to parse |
| `context` | [ParserContext](/api-docs/headless/loreline/ParserContext/) | *(optional)* |  |

## Private Members

<div class="signature field-var has-description" id="tokens"><code><span class="field-name">tokens</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Tokens/" class="type-link">Tokens</a></code><a class="header-anchor" href="#tokens"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of tokens to parse

<hr class="field-separator" />

<div class="signature field-var has-description" id="current"><code><span class="field-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#current"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current position in the token stream

<hr class="field-separator" />

<div class="signature field-var has-description" id="errors"><code><span class="field-name">errors</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/ParseError/" class="type-link">ParseError</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#errors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Collection of parsing errors encountered

<hr class="field-separator" />

<div class="signature field-var has-description" id="pendingComments"><code><span class="field-name">pendingComments</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pendingComments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Comments waiting to be attached to nodes

<hr class="field-separator" />

<div class="signature field-var has-description" id="lastTokenEnd"><code><span class="field-name">lastTokenEnd</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Position/" class="type-link">Position</a></code><a class="header-anchor" href="#lastTokenEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Position of the last processed token

<hr class="field-separator" />

<div class="signature field-var has-description" id="lastLineBreak"><code><span class="field-name">lastLineBreak</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Position/" class="type-link">Position</a></code><a class="header-anchor" href="#lastLineBreak"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Position of the last encountered line break

<hr class="field-separator" />

<div class="signature field-var has-description" id="lineBreakAfterToken"><code><span class="field-name">lineBreakAfterToken</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#lineBreakAfterToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if a line break follows the current token

<hr class="field-separator" />

<div class="signature field-var has-description" id="currentNodeId"><code><span class="field-name">currentNodeId</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NodeId/" class="type-link">NodeId</a></code><a class="header-anchor" href="#currentNodeId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Node id counter, to ensure each parsed node has a unique id

<hr class="field-separator" />

<div class="signature field-var has-description" id="rootBeat"><code><span class="field-name">rootBeat</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NBeatDecl/" class="type-link">NBeatDecl</a></code><a class="header-anchor" href="#rootBeat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Root beat, when adding narrative flow directly at the script root

<hr class="field-separator" />

<div class="signature field-var has-description" id="context"><code><span class="field-name">context</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/ParserContext/" class="type-link">ParserContext</a></code><a class="header-anchor" href="#context"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Context of this parser that contains info like what is the path of the tokens being parsed, as well as a repository of tokens matching file paths that could be imported.

<hr class="field-separator" />

<div class="signature field-method no-description" id="nextNodeId"><code><span class="field-name">nextNodeId</span><span class="parenthesis">(</span><span class="arg-name">step</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NodeIdStep/" class="type-link">NodeIdStep</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NodeId/" class="type-link">NodeId</a></code><a class="header-anchor" href="#nextNodeId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `step` | [NodeIdStep](/api-docs/headless/loreline/NodeIdStep/) |

| Returns |
|---------|
| [NodeId](/api-docs/headless/loreline/NodeId/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="peek"><code><span class="field-name">peek</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#peek"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Looks ahead at the next token without consuming it.

| Returns | Description |
|---------|-------------|
| [Token](/api-docs/headless/loreline/Token/) | The next token in the stream |

<hr class="field-separator" />

<div class="signature field-method has-description" id="advance"><code><span class="field-name">advance</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">advanceLineBreaks</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#advance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Advances to the next token, handling comments and line breaks.


| Name | Type | Default |
|------|------|---------|
| `advanceLineBreaks` | [Bool](/api-docs/headless/Bool/) | `true` |

| Returns | Description |
|---------|-------------|
| [Token](/api-docs/headless/loreline/Token/) | The previous token |

<hr class="field-separator" />

<div class="signature field-method has-description" id="previous"><code><span class="field-name">previous</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#previous"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the previously consumed token.

| Returns | Description |
|---------|-------------|
| [Token](/api-docs/headless/loreline/Token/) | The previous token |

<hr class="field-separator" />

<div class="signature field-method has-description" id="prevWithType"><code><span class="field-name">prevWithType</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#prevWithType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the previously consumed token.


| Name | Type |
|------|------|
| `type` | Anonymous |

| Returns | Description |
|---------|-------------|
| [Token](/api-docs/headless/loreline/Token/) | The previous token |

<hr class="field-separator" />

<div class="signature field-method has-description" id="prevIdentifier"><code><span class="field-name">prevIdentifier</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#prevIdentifier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the previously consumed token that was an identifier.

| Returns | Description |
|---------|-------------|
| [Token](/api-docs/headless/loreline/Token/) | The previous token that was an identifier |

<hr class="field-separator" />

<div class="signature field-method has-description" id="prevNonWhitespaceOrComment"><code><span class="field-name">prevNonWhitespaceOrComment</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#prevNonWhitespaceOrComment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the previously consumed token that was not a white space or comment.

| Returns | Description |
|---------|-------------|
| [Token](/api-docs/headless/loreline/Token/) | The previous token that is not a white space or comment |

<hr class="field-separator" />

<div class="signature field-method has-description" id="nextNonWhitespaceOrComment"><code><span class="field-name">nextNonWhitespaceOrComment</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#nextNonWhitespaceOrComment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the next token that is not a white space or comment.

| Returns | Description |
|---------|-------------|
| [Token](/api-docs/headless/loreline/Token/) | The next token that is not a white space or comment |

<hr class="field-separator" />

<div class="signature field-method has-description" id="nextNonLineBreakOrComment"><code><span class="field-name">nextNonLineBreakOrComment</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#nextNonLineBreakOrComment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the next token that is not a line break or comment.

| Returns | Description |
|---------|-------------|
| [Token](/api-docs/headless/loreline/Token/) | The next token that is not a line break or comment |

<hr class="field-separator" />

<div class="signature field-method no-description" id="currentPos"><code><span class="field-name">currentPos</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Position/" class="type-link">Position</a></code><a class="header-anchor" href="#currentPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Position](/api-docs/headless/loreline/Position/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="currentTokenTypeToString"><code><span class="field-name">currentTokenTypeToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#currentTokenTypeToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="check"><code><span class="field-name">check</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#check"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the current token matches the expected type.


| Name | Type | Description |
|------|------|-------------|
| `type` | Anonymous | TokenType to check against  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the current token matches |

<hr class="field-separator" />

<div class="signature field-method has-description" id="checkString"><code><span class="field-name">checkString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the current token is a string literal.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if current token is a string |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isAtEnd"><code><span class="field-name">isAtEnd</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isAtEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if we've reached the end of the token stream.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if at end of input |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isComment"><code><span class="field-name">isComment</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isComment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines if a token type represents a comment.


| Name | Type | Description |
|------|------|-------------|
| `type` | Anonymous | TokenType to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if token is a comment |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseNode"><code><span class="field-name">parseNode</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">topLevel</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/AstNode/" class="type-link">AstNode</a></code><a class="header-anchor" href="#parseNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses a single node based on the current token.


| Name | Type | Default |
|------|------|---------|
| `topLevel` | [Bool](/api-docs/headless/Bool/) | `false` |

| Returns | Description |
|---------|-------------|
| [AstNode](/api-docs/headless/loreline/AstNode/) | Parsed node |

<hr class="field-separator" />

<div class="signature field-method no-description" id="wrapInRootBeat"><code><span class="field-name">wrapInRootBeat</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/AstNode/" class="type-link">AstNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#wrapInRootBeat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `node` | [AstNode](/api-docs/headless/loreline/AstNode/) |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[NBeatDecl](/api-docs/headless/loreline/NBeatDecl/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseImport"><code><span class="field-name">parseImport</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NImportStatement/" class="type-link">NImportStatement</a></code><a class="header-anchor" href="#parseImport"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses an import statement (import "file.lor")

| Returns | Description |
|---------|-------------|
| [NImportStatement](/api-docs/headless/loreline/NImportStatement/) | Import statement node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseDialogueStatement"><code><span class="field-name">parseDialogueStatement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NDialogueStatement/" class="type-link">NDialogueStatement</a></code><a class="header-anchor" href="#parseDialogueStatement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses a dialogue statement (character: "text")

| Returns | Description |
|---------|-------------|
| [NDialogueStatement](/api-docs/headless/loreline/NDialogueStatement/) | Dialogue statement node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseStatementBlock"><code><span class="field-name">parseStatementBlock</span><span class="parenthesis">(</span><span class="arg-name">statements</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/BlockStyle/" class="type-link">BlockStyle</a></code><a class="header-anchor" href="#parseStatementBlock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses a block of statements enclosed in braces.


| Name | Type |
|------|------|
| `statements` | [Array](/api-docs/headless/Array/)<[AstNode](/api-docs/headless/loreline/AstNode/)> |

| Returns | Description |
|---------|-------------|
| [BlockStyle](/api-docs/headless/loreline/BlockStyle/) | Array of parsed statement nodes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseStateDecl"><code><span class="field-name">parseStateDecl</span><span class="parenthesis">(</span><span class="arg-name">temporary</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NStateDecl/" class="type-link">NStateDecl</a></code><a class="header-anchor" href="#parseStateDecl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses a state declaration, which can be temporary or permanent.


| Name | Type | Description |
|------|------|-------------|
| `temporary` | [Bool](/api-docs/headless/Bool/) | Whether this is a temporary state (new state)  |

| Returns | Description |
|---------|-------------|
| [NStateDecl](/api-docs/headless/loreline/NStateDecl/) | State declaration node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseObjectField"><code><span class="field-name">parseObjectField</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NObjectField/" class="type-link">NObjectField</a></code><a class="header-anchor" href="#parseObjectField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses a single field in an object literal.

| Returns | Description |
|---------|-------------|
| [NObjectField](/api-docs/headless/loreline/NObjectField/) | Object field node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseBeatDecl"><code><span class="field-name">parseBeatDecl</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NBeatDecl/" class="type-link">NBeatDecl</a></code><a class="header-anchor" href="#parseBeatDecl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses a beat declaration, which represents a story segment.

| Returns | Description |
|---------|-------------|
| [NBeatDecl](/api-docs/headless/loreline/NBeatDecl/) | Beat declaration node |

<hr class="field-separator" />

<div class="signature field-method no-description" id="checkBlockStart"><code><span class="field-name">checkBlockStart</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkBlockStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseBlockStart"><code><span class="field-name">parseBlockStart</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#parseBlockStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Token](/api-docs/headless/loreline/Token/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseCharacterDecl"><code><span class="field-name">parseCharacterDecl</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NCharacterDecl/" class="type-link">NCharacterDecl</a></code><a class="header-anchor" href="#parseCharacterDecl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses a character declaration with its fields.

| Returns | Description |
|---------|-------------|
| [NCharacterDecl](/api-docs/headless/loreline/NCharacterDecl/) | Character declaration node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseTextStatement"><code><span class="field-name">parseTextStatement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NTextStatement/" class="type-link">NTextStatement</a></code><a class="header-anchor" href="#parseTextStatement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses a text statement (direct string literal).

| Returns | Description |
|---------|-------------|
| [NTextStatement](/api-docs/headless/loreline/NTextStatement/) | Text statement node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseChoiceStatement"><code><span class="field-name">parseChoiceStatement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NChoiceStatement/" class="type-link">NChoiceStatement</a></code><a class="header-anchor" href="#parseChoiceStatement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses a choice statement with its options.

| Returns | Description |
|---------|-------------|
| [NChoiceStatement](/api-docs/headless/loreline/NChoiceStatement/) | Choice statement node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseChoiceOption"><code><span class="field-name">parseChoiceOption</span><span class="parenthesis">(</span><span class="arg-name">blockEnd</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NChoiceOption/" class="type-link">NChoiceOption</a></code><a class="header-anchor" href="#parseChoiceOption"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses a single choice option with its condition and consequences.


| Name | Type |
|------|------|
| `blockEnd` | Anonymous |

| Returns | Description |
|---------|-------------|
| [NChoiceOption](/api-docs/headless/loreline/NChoiceOption/) | Choice option node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isExpressionStart"><code><span class="field-name">isExpressionStart</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isExpressionStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the current token can start an expression.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if current token can begin an expression |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseExpressionStatement"><code><span class="field-name">parseExpressionStatement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/AstNode/" class="type-link">AstNode</a></code><a class="header-anchor" href="#parseExpressionStatement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses an expression statement (expression followed by optional assignment).

| Returns | Description |
|---------|-------------|
| [AstNode](/api-docs/headless/loreline/AstNode/) | Node representing the expression statement |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isKnownNodeStart"><code><span class="field-name">isKnownNodeStart</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isKnownNodeStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the current token starts a known node type.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if current token begins a known node construct |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseIfStatement"><code><span class="field-name">parseIfStatement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NIfStatement/" class="type-link">NIfStatement</a></code><a class="header-anchor" href="#parseIfStatement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses an if statement with optional else branch.

| Returns | Description |
|---------|-------------|
| [NIfStatement](/api-docs/headless/loreline/NIfStatement/) | If statement node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseTransition"><code><span class="field-name">parseTransition</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NTransition/" class="type-link">NTransition</a></code><a class="header-anchor" href="#parseTransition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses a transition statement (-> target).

| Returns | Description |
|---------|-------------|
| [NTransition](/api-docs/headless/loreline/NTransition/) | Transition node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseInsertion"><code><span class="field-name">parseInsertion</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NInsertion/" class="type-link">NInsertion</a></code><a class="header-anchor" href="#parseInsertion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses an insertion statement (+ target).

| Returns | Description |
|---------|-------------|
| [NInsertion](/api-docs/headless/loreline/NInsertion/) | Insertion node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseFunction"><code><span class="field-name">parseFunction</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NFunctionDecl/" class="type-link">NFunctionDecl</a></code><a class="header-anchor" href="#parseFunction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses a function definition.

| Returns | Description |
|---------|-------------|
| [NFunctionDecl](/api-docs/headless/loreline/NFunctionDecl/) | Function node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseExpression"><code><span class="field-name">parseExpression</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#parseExpression"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses an expression, including assignments.

| Returns | Description |
|---------|-------------|
| [NExpr](/api-docs/headless/loreline/NExpr/) | Expression node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseLogicalOr"><code><span class="field-name">parseLogicalOr</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#parseLogicalOr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses logical OR expressions (expr || expr).

| Returns | Description |
|---------|-------------|
| [NExpr](/api-docs/headless/loreline/NExpr/) | Expression node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseLogicalAnd"><code><span class="field-name">parseLogicalAnd</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#parseLogicalAnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses logical AND expressions (expr && expr).

| Returns | Description |
|---------|-------------|
| [NExpr](/api-docs/headless/loreline/NExpr/) | Expression node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseEquality"><code><span class="field-name">parseEquality</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#parseEquality"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses equality expressions (expr == expr, expr != expr).

| Returns | Description |
|---------|-------------|
| [NExpr](/api-docs/headless/loreline/NExpr/) | Expression node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseComparison"><code><span class="field-name">parseComparison</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#parseComparison"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses comparison expressions (>, >=, <, <=).

| Returns | Description |
|---------|-------------|
| [NExpr](/api-docs/headless/loreline/NExpr/) | Expression node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseAdditive"><code><span class="field-name">parseAdditive</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#parseAdditive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses additive expressions (+ and -).

| Returns | Description |
|---------|-------------|
| [NExpr](/api-docs/headless/loreline/NExpr/) | Expression node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseMultiplicative"><code><span class="field-name">parseMultiplicative</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#parseMultiplicative"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses multiplicative expressions (* and /).

| Returns | Description |
|---------|-------------|
| [NExpr](/api-docs/headless/loreline/NExpr/) | Expression node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseUnary"><code><span class="field-name">parseUnary</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#parseUnary"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses unary expressions (!expr, -expr).

| Returns | Description |
|---------|-------------|
| [NExpr](/api-docs/headless/loreline/NExpr/) | Expression node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parsePrimary"><code><span class="field-name">parsePrimary</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#parsePrimary"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses primary expressions (literals, identifiers, parenthesized expressions).

| Returns | Description |
|---------|-------------|
| [NExpr](/api-docs/headless/loreline/NExpr/) | Expression node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseStringLiteral"><code><span class="field-name">parseStringLiteral</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NStringLiteral/" class="type-link">NStringLiteral</a></code><a class="header-anchor" href="#parseStringLiteral"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses string literals, handling interpolation and tags.

| Returns | Description |
|---------|-------------|
| [NStringLiteral](/api-docs/headless/loreline/NStringLiteral/) | String literal node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="makeStringPartPosition"><code><span class="field-name">makeStringPartPosition</span><span class="parenthesis">(</span><span class="arg-name">stringStart</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Position/" class="type-link">Position</a><span class="operator">,</span> <span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Position/" class="type-link">Position</a></code><a class="header-anchor" href="#makeStringPartPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a Position object for a part of a string literal.


| Name | Type | Description |
|------|------|-------------|
| `stringStart` | [Position](/api-docs/headless/loreline/Position/) | Starting position of the entire string content  |
| `content` | [String](/api-docs/headless/String/) | String content  |
| `offset` | [Int](/api-docs/headless/Int/) | Offset within the string  |

| Returns | Description |
|---------|-------------|
| [Position](/api-docs/headless/loreline/Position/) | Position object for the string part |

<hr class="field-separator" />

<div class="signature field-method has-description" id="makeAccess"><code><span class="field-name">makeAccess</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Position/" class="type-link">Position</a><span class="operator">,</span> <span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">namePos</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NAccess/" class="type-link">NAccess</a></code><a class="header-anchor" href="#makeAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an access expression node.


| Name | Type | Description |
|------|------|-------------|
| `pos` | [Position](/api-docs/headless/loreline/Position/) | Position in source  |
| `target` | [Null](/api-docs/headless/Null/)<[NExpr](/api-docs/headless/loreline/NExpr/)> | Target expression (null for simple identifiers)  |
| `name` | [String](/api-docs/headless/String/) | Identifier name  |
| `namePos` | [Position](/api-docs/headless/loreline/Position/) |  |

| Returns | Description |
|---------|-------------|
| [NAccess](/api-docs/headless/loreline/NAccess/) | Access expression node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseStringInterpolation"><code><span class="field-name">parseStringInterpolation</span><span class="parenthesis">(</span><span class="arg-name">braces</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">inTag</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">tokens</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Tokens/" class="type-link">Tokens</a><span class="operator">,</span> <span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NStringPart/" class="type-link">NStringPart</a></code><a class="header-anchor" href="#parseStringInterpolation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses string interpolation expressions (both simple and complex).


| Name | Type | Description |
|------|------|-------------|
| `braces` | [Bool](/api-docs/headless/Bool/) | Whether the interpolation uses braces  |
| `inTag` | [Bool](/api-docs/headless/Bool/) | Whether the interpolation is inside a tag  |
| `tokens` | [Tokens](/api-docs/headless/loreline/Tokens/) | Tokens within the interpolation  |
| `start` | [Int](/api-docs/headless/Int/) | Start position in source  |
| `length` | [Int](/api-docs/headless/Int/) | Length of interpolation  |
| `content` | [String](/api-docs/headless/String/) | Original string content  |

| Returns | Description |
|---------|-------------|
| [NStringPart](/api-docs/headless/loreline/NStringPart/) | string part representing the interpolation |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseStringTag"><code><span class="field-name">parseStringTag</span><span class="parenthesis">(</span><span class="arg-name">closing</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">quotes</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Quotes/" class="type-link">Quotes</a><span class="operator">,</span> <span class="arg-name">attachments</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NStringPart/" class="type-link">NStringPart</a></code><a class="header-anchor" href="#parseStringTag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses string tags (<tag> or </tag>).


| Name | Type | Description |
|------|------|-------------|
| `closing` | [Bool](/api-docs/headless/Bool/) | Whether this is a closing tag  |
| `start` | [Int](/api-docs/headless/Int/) | Start position in source  |
| `length` | [Int](/api-docs/headless/Int/) | Tag length  |
| `content` | [String](/api-docs/headless/String/) | Original string content  |
| `quotes` | [Quotes](/api-docs/headless/loreline/Quotes/) |  |
| `attachments` | [Array](/api-docs/headless/Array/)<Anonymous> | Array of string attachments  |

| Returns | Description |
|---------|-------------|
| [NStringPart](/api-docs/headless/loreline/NStringPart/) | StringPart representing the tag |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseIdentifierExpression"><code><span class="field-name">parseIdentifierExpression</span><span class="parenthesis">(</span><span class="arg-name">startPos</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Position/" class="type-link">Position</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#parseIdentifierExpression"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses identifier-based expressions (field access, array access, function calls).


| Name | Type | Description |
|------|------|-------------|
| `startPos` | [Position](/api-docs/headless/loreline/Position/) | Starting position  |
| `name` | [String](/api-docs/headless/String/) | Initial identifier name  |

| Returns | Description |
|---------|-------------|
| [NExpr](/api-docs/headless/loreline/NExpr/) | Expression node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseArrayLiteral"><code><span class="field-name">parseArrayLiteral</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#parseArrayLiteral"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses array literals ([expr, expr, ...]).

| Returns | Description |
|---------|-------------|
| [NExpr](/api-docs/headless/loreline/NExpr/) | Expression node for array literal |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseObjectLiteral"><code><span class="field-name">parseObjectLiteral</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#parseObjectLiteral"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses object literals ({key: value, ...}).

| Returns | Description |
|---------|-------------|
| [NExpr](/api-docs/headless/loreline/NExpr/) | Expression node for object literal |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseCallArguments"><code><span class="field-name">parseCallArguments</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#parseCallArguments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses function call arguments.

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/headless/Array/)<[NExpr](/api-docs/headless/loreline/NExpr/)> | Array of argument expression nodes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseConditionExpression"><code><span class="field-name">parseConditionExpression</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#parseConditionExpression"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses a condition expression.

| Returns | Description |
|---------|-------------|
| [NExpr](/api-docs/headless/loreline/NExpr/) | Expression node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="match"><code><span class="field-name">match</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">advanceLineBreaks</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#match"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Attempts to match and consume a token of the given type.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `type` | Anonymous | | TokenType to match  |
| `advanceLineBreaks` | [Bool](/api-docs/headless/Bool/) | `true` |  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if token was matched and consumed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isAtLineBreak"><code><span class="field-name">isAtLineBreak</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isAtLineBreak"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if we're at a line break in the source.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if at a line break |

<hr class="field-separator" />

<div class="signature field-method has-description" id="expect"><code><span class="field-name">expect</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Token/" class="type-link">Token</a></code><a class="header-anchor" href="#expect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Expects a token of the given type, throws error if not found.


| Name | Type | Description |
|------|------|-------------|
| `type` | Anonymous | Expected TokenType  |

| Returns | Description |
|---------|-------------|
| [Token](/api-docs/headless/loreline/Token/) | The consumed token  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="checkIdentifier"><code><span class="field-name">checkIdentifier</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkIdentifier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if next token is an identifier token.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | `true` if the next token is an identifier |

<hr class="field-separator" />

<div class="signature field-method has-description" id="expectIdentifier"><code><span class="field-name">expectIdentifier</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#expectIdentifier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Expects and consumes an identifier token.

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | The identifier name  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="attachComments"><code><span class="field-name">attachComments</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <span class="type-name">attachComments.T</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">attachComments.T</span></code><a class="header-anchor" href="#attachComments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Attaches pending comments to a node.


| Name | Type | Description |
|------|------|-------------|
| `node` | attachComments.T | Node to attach comments to  |

| Returns | Description |
|---------|-------------|
| attachComments.T | The node with attached comments |

<hr class="field-separator" />

<div class="signature field-method has-description" id="attachElseComments"><code><span class="field-name">attachElseComments</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <span class="type-name">attachElseComments.T</span><span class="operator">,</span> <span class="arg-name">elseToken</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Token/" class="type-link">Token</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">attachElseComments.T</span></code><a class="header-anchor" href="#attachElseComments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Attaches pending comments to an else clause of an if statement.


| Name | Type | Description |
|------|------|-------------|
| `node` | attachElseComments.T | If statement node  |
| `elseToken` | [Token](/api-docs/headless/loreline/Token/) | The else token  |

| Returns | Description |
|---------|-------------|
| attachElseComments.T | The node with attached else comments |

<hr class="field-separator" />

<div class="signature field-method has-description" id="synchronize"><code><span class="field-name">synchronize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#synchronize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronizes the parser state after an error.
Advances until a safe point is found to continue parsing.

<hr class="field-separator" />

<div class="signature field-method has-description" id="requiresNewLine"><code><span class="field-name">requiresNewLine</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#requiresNewLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the current construct requires a new line.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if new line is required |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addError"><code><span class="field-name">addError</span><span class="parenthesis">(</span><span class="arg-name">error</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/ParseError/" class="type-link">ParseError</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/ParseError/" class="type-link">ParseError</a></code><a class="header-anchor" href="#addError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `error` | [ParseError](/api-docs/headless/loreline/ParseError/) |

| Returns |
|---------|
| [ParseError](/api-docs/headless/loreline/ParseError/) |

