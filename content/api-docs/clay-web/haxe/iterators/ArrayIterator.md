---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ArrayIterator
target: Clay (Web)
permalink: api-docs/clay-web/haxe/iterators/ArrayIterator/
---

# ArrayIterator

<div class="type-hierarchy"><strong>haxe.iterators.ArrayIterator</strong> (Class)</div>

This iterator is used only when `Array<T>` is passed to `Iterable<T>`

## Instance Members

<div class="signature field-method has-description" id="hasNext"><code><span class="field-name">hasNext</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasNext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Iterator.hasNext`
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="next"><code><span class="field-name">next</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">haxe.iterators.ArrayIterator.T</span></code><a class="header-anchor" href="#next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Iterator.next`
| Returns |
|---------|
| haxe.iterators.ArrayIterator.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">haxe.iterators.ArrayIterator.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new `ArrayIterator`.

| Name | Type |
|------|------|
| `array` | [Array](/api-docs/clay-web/Array/)<haxe.iterators.ArrayIterator.T> |

## Private Members

<div class="signature field-var no-description" id="array"><code><span class="field-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">haxe.iterators.ArrayIterator.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#array"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="current"><code><span class="field-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#current"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

