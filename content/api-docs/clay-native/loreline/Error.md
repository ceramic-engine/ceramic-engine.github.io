---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Error
target: Clay (Native)
permalink: api-docs/clay-native/loreline/Error/
---

# Error

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Error.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Error</strong> (Class) → <a href="/api-docs/clay-native/loreline/LexerError/">LexerError</a>, <a href="/api-docs/clay-native/loreline/ParseError/">ParseError</a>, <a href="/api-docs/clay-native/loreline/RuntimeError/">RuntimeError</a>, <a href="/api-docs/clay-native/loreline/WrappedError/">WrappedError</a></div>

Represents an error.

## Instance Members

<div class="signature field-var has-description" id="message"><code><span class="field-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#message"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The error message describing what went wrong.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pos"><code><span class="field-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a></code><a class="header-anchor" href="#pos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The position in the source code where the error occurred.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stack"><code><span class="field-name">stack</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#stack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The call stack of this error

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts the error to a human-readable string.

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | Formatted error message with position |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new lexer error.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `message` | [String](/api-docs/clay-native/String/) | | The error message  |
| `pos` | [Position](/api-docs/clay-native/loreline/Position/) | *(optional)* | The position where the error occurred |

