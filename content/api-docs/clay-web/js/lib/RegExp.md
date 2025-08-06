---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: RegExp
target: Clay (Web)
permalink: api-docs/clay-web/js/lib/RegExp/
---

# RegExp

<div class="type-hierarchy"><strong>js.lib.RegExp</strong> (extern class) → <a href="/api-docs/clay-web/_EReg/HaxeRegExp/">_EReg.HaxeRegExp</a></div>

Native JavaScript regular expressions.

For cross-platform regular expressions, use Haxe `EReg` class or
[regexp literals](https://haxe.org/manual/std-regex.html).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp></div>


## Instance Members

<div class="signature field-var has-description" id="global"><code><span class="field-name">global</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#global"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates whether or not the "g" flag is used with the regular expression.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ignoreCase"><code><span class="field-name">ignoreCase</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ignoreCase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates whether or not the "i" flag is used with the regular expression.

<hr class="field-separator" />

<div class="signature field-var has-description" id="multiline"><code><span class="field-name">multiline</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#multiline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates whether or not the "m" flag is used with the regular expression.

<hr class="field-separator" />

<div class="signature field-var has-description" id="source"><code><span class="field-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#source"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The source text of the regexp object, it doesn't contain the two forward slashes on both sides and any flags.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lastIndex"><code><span class="field-name">lastIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lastIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The index at which to start the next match.

<hr class="field-separator" />

<div class="signature field-method has-description" id="exec"><code><span class="field-name">exec</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/RegExpMatch/" class="type-link">RegExpMatch</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#exec"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Execute a search for a match in a specified string.
Returns a result array, or null.

| Name | Type |
|------|------|
| `str` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[RegExpMatch](/api-docs/clay-web/js/lib/RegExpMatch/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="test"><code><span class="field-name">test</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#test"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Execute a search for a match between a regular expression and a specified string.
Returns true or false.

| Name | Type |
|------|------|
| `str` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return a string representing the regular expression.
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">pattern</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a regular expression object for matching text with a pattern.

| Name | Type | Default |
|------|------|---------|
| `pattern` | [String](/api-docs/clay-web/String/) | |
| `flags` | [String](/api-docs/clay-web/String/) | *(optional)* |

