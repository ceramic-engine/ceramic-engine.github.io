---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Token
target: Clay (Native)
permalink: api-docs/clay-native/loreline/Token/
---

# Token

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Lexer.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Token</strong> (Class)</div>

Represents a token in the source code.

## Instance Members

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The type of this token.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pos"><code><span class="field-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a></code><a class="header-anchor" href="#pos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The position of this token in the source code.

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts the token to a human-readable string.

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | Formatted token information with position |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new token.


| Name | Type | Description |
|------|------|-------------|
| `type` | Anonymous | The token type  |
| `pos` | [Position](/api-docs/clay-native/loreline/Position/) | The token's position |

