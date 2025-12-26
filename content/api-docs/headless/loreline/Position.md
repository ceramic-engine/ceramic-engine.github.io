---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Position
target: Headless
permalink: api-docs/headless/loreline/Position/
---

# Position

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Position.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Position</strong> (Class)</div>

Represents a position within source code, tracking line number, column, and offset information.
Used throughout the compiler to pinpoint locations of tokens, nodes, and error messages.

## Static Members

<div class="signature field-method has-description" id="fromContentAndIndex"><code><span class="field-name">fromContentAndIndex</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Position</a></code><a class="header-anchor" href="#fromContentAndIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a Position object by analyzing a string content up to the specified offset.
Calculates the correct line and column numbers based on line breaks in the content.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `content` | [String](/api-docs/headless/String/) | | The string content to analyze  |
| `offset` | [Int](/api-docs/headless/Int/) | | The character offset from the start of the content  |
| `length` | [Int](/api-docs/headless/Int/) | `0` | The length of the position (or 0 if not provided)  |

| Returns | Description |
|---------|-------------|
| [Position](/api-docs/headless/loreline/Position/) | A new Position object with proper line and column information |

## Instance Members

<div class="signature field-var has-description" id="line"><code><span class="field-name">line</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#line"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The line number in the source code, starting from 1.

<hr class="field-separator" />

<div class="signature field-var has-description" id="column"><code><span class="field-name">column</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#column"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The column number in the source code, starting from 1.
Represents the character position within the current line.

<hr class="field-separator" />

<div class="signature field-var has-description" id="offset"><code><span class="field-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The absolute character offset from the start of the source code.
Used for precise positioning and span calculations.

<hr class="field-separator" />

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The length of the source text span this position represents.
A value of 0 indicates a point position rather than a span.

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts the position to a human-readable string representation.
Useful for error messages and debugging.

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | String in format "(line X col Y)" |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJson"><code><span class="field-name">toJson</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts the position to a JSON-compatible object structure.
Only includes the length field if it's non-zero.

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/headless/Dynamic/) | Dynamic object containing position data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="withOffset"><code><span class="field-name">withOffset</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">additionalOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">newLength</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">contentStart</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Position</a></code><a class="header-anchor" href="#withOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new position that is offset from this position.
This maintains the same line/column tracking but with an adjusted offset.
Supports both positive and negative offsets.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `content` | [String](/api-docs/headless/String/) | | String content to analyze for line/column tracking  |
| `additionalOffset` | [Int](/api-docs/headless/Int/) | | Number of characters to offset from current position (can be negative)  |
| `newLength` | [Int](/api-docs/headless/Int/) | `0` | Optional new length for the offset position (default: 0)  |
| `contentStart` | [Int](/api-docs/headless/Int/) | `0` |  |

| Returns | Description |
|---------|-------------|
| [Position](/api-docs/headless/loreline/Position/) | New Position object at the offset location |

<hr class="field-separator" />

<div class="signature field-method has-description" id="extendedTo"><code><span class="field-name">extendedTo</span><span class="parenthesis">(</span><span class="arg-name">endPos</span><span class="operator">:</span> <a href="#" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Position</a></code><a class="header-anchor" href="#extendedTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new position that extends from this position's start to another position's end.
Useful for creating spans that encompass multiple tokens or nodes.


| Name | Type | Description |
|------|------|-------------|
| `endPos` | [Position](/api-docs/headless/loreline/Position/) | Position marking the end of the span  |

| Returns | Description |
|---------|-------------|
| [Position](/api-docs/headless/loreline/Position/) | New Position object representing the extended span |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">line</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">column</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new position instance with the specified coordinates.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `line` | [Int](/api-docs/headless/Int/) | | Line number in the source (1-based)  |
| `column` | [Int](/api-docs/headless/Int/) | | Column number in the source (1-based)  |
| `offset` | [Int](/api-docs/headless/Int/) | | Character offset from start of source  |
| `length` | [Int](/api-docs/headless/Int/) | `0` | Optional length of the source span (default: 0) |

