---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TouchesIterator
target: Headless
permalink: api-docs/headless/ceramic/TouchesIterator/
---

# TouchesIterator

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TouchesIterator.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TouchesIterator</strong> (Class)</div>

Iterator for the Touches collection.

TouchesIterator enables for-in loop iteration over active touch points.
It automatically skips null entries in the underlying IntMap for
efficient iteration over only valid touches.

This iterator is created automatically when using for-in loops with
a Touches collection and should not be instantiated directly.

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/Touches/">Touches</a>, <a href="/api-docs/headless/ceramic/Touch/">Touch</a></div>


## Instance Members

<div class="signature field-method has-description" id="hasNext"><code><span class="field-name">hasNext</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasNext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if there are more touches to iterate over.
Automatically skips null entries in the collection.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if there are more touches available |

<hr class="field-separator" />

<div class="signature field-method has-description" id="next"><code><span class="field-name">next</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Touch/" class="type-link">Touch</a></code><a class="header-anchor" href="#next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the next touch in the iteration.

| Returns | Description |
|---------|-------------|
| [Touch](/api-docs/headless/ceramic/Touch/) | The next Touch object |

## Private Members

<div class="signature field-var no-description" id="intMap"><code><span class="field-name">intMap</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Touch/" class="type-link">Touch</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#intMap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="i"><code><span class="field-name">i</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#i"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="len"><code><span class="field-name">len</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#len"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">intMap</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Touch/" class="type-link">Touch</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `intMap` | [IntMap](/api-docs/headless/ceramic/IntMap/)<[Touch](/api-docs/headless/ceramic/Touch/)> |

