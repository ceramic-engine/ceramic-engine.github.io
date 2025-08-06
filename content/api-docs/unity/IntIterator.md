---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: IntIterator
target: Unity
permalink: api-docs/unity/IntIterator/
---

# IntIterator

<div class="type-hierarchy"><strong>IntIterator</strong> (Class)</div>

IntIterator is used for implementing interval iterations.

It is usually not used explicitly, but through its special syntax:
`min...max`

While it is possible to assign an instance of IntIterator to a variable or
field, it is worth noting that IntIterator does not reset after being used
in a for-loop. Subsequent uses of the same instance will then have no
effect.

<div class="see"><strong>See:</strong> https://haxe.org/manual/lf-iterators.html</div>


## Instance Members

<div class="signature field-method has-description" id="hasNext"><code><span class="field-name">hasNext</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasNext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the iterator has other items, false otherwise.
| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="next"><code><span class="field-name">next</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Moves to the next item of the iterator.

If this is called while hasNext() is false, the result is unspecified.
| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">min</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">max</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Iterates from `min` (inclusive) to `max` (exclusive).

If `max <= min`, the iterator will not act as a countdown.

| Name | Type |
|------|------|
| `min` | [Int](/api-docs/unity/Int/) |
| `max` | [Int](/api-docs/unity/Int/) |

## Private Members

<div class="signature field-var no-description" id="min"><code><span class="field-name">min</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#min"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="max"><code><span class="field-name">max</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#max"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

