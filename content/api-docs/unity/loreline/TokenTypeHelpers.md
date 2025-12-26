---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: TokenTypeHelpers
target: Unity
permalink: api-docs/unity/loreline/TokenTypeHelpers/
---

# TokenTypeHelpers

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Lexer.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.TokenTypeHelpers</strong> (Class)</div>

Helper functions for TokenType enum.

## Static Members

<div class="signature field-method has-description" id="equals"><code><span class="field-name">equals</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#equals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compares two token types for equality.


| Name | Type | Description |
|------|------|-------------|
| `a` | Anonymous | First token type  |
| `b` | Anonymous | Second token type  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | Whether the token types are equal |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isComment"><code><span class="field-name">isComment</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isComment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a token type is a comment.


| Name | Type | Description |
|------|------|-------------|
| `a` | Anonymous | Token type to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | Whether the token type is a comment |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isAssignOp"><code><span class="field-name">isAssignOp</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isAssignOp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | Anonymous |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isIdentifier"><code><span class="field-name">isIdentifier</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isIdentifier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a token type is an identifier.


| Name | Type | Description |
|------|------|-------------|
| `a` | Anonymous | Token type to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | Whether the token type is an identifier |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isBlockStart"><code><span class="field-name">isBlockStart</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isBlockStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a token is a block start


| Name | Type | Description |
|------|------|-------------|
| `a` | Anonymous | Token type to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | Whether the token type is a block start |

<hr class="field-separator" />

<div class="signature field-method no-description" id="toCodeString"><code><span class="field-name">toCodeString</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toCodeString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | Anonymous |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

