---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: StringIteratorUnicode
target: Headless
permalink: api-docs/headless/haxe/iterators/StringIteratorUnicode/
---

# StringIteratorUnicode

<div class="type-hierarchy"><strong>haxe.iterators.StringIteratorUnicode</strong> (Class)</div>

This iterator can be used to iterate across strings in a cross-platform
way. It handles surrogate pairs on platforms that require it. On each
iteration, it returns the next character code.

Note that this has different semantics than a standard for-loop over the
String's length due to the fact that it deals with surrogate pairs.

## Static Members

<div class="signature field-method has-description" id="unicodeIterator"><code><span class="field-name">unicodeIterator</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">StringIteratorUnicode</a></code><a class="header-anchor" href="#unicodeIterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convenience function which can be used as a static extension.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [StringIteratorUnicode](/api-docs/headless/haxe/iterators/StringIteratorUnicode/) |

## Instance Members

<div class="signature field-method has-description" id="hasNext"><code><span class="field-name">hasNext</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasNext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Iterator.hasNext`
| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="next"><code><span class="field-name">next</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Iterator.next`
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new `StringIteratorUnicode` over String `s`.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/headless/String/) |

## Private Members

<div class="signature field-var no-description" id="offset"><code><span class="field-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="s"><code><span class="field-name">s</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#s"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

