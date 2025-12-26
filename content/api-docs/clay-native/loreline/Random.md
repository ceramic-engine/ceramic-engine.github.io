---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Random
target: Clay (Native)
permalink: api-docs/clay-native/loreline/Random/
---

# Random

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Random.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Random</strong> (Class)</div>

Seeded random number generator to get reproducible sequences of values.

## Instance Members

<div class="signature field-var no-description" id="seed"><code><span class="field-name">seed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#seed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="initialSeed"><code><span class="field-name">initialSeed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#initialSeed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="next"><code><span class="field-name">next</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a float number between [0,1)
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="between"><code><span class="field-name">between</span><span class="parenthesis">(</span><span class="arg-name">min</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">max</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#between"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return an integer between [min, max).

| Name | Type |
|------|------|
| `min` | [Int](/api-docs/clay-native/Int/) |
| `max` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reset"><code><span class="field-name">reset</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">initialSeed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reset the initial value to that of the current seed.

| Name | Type | Default |
|------|------|---------|
| `initialSeed` | [Float](/api-docs/clay-native/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">seed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `seed` | [Float](/api-docs/clay-native/Float/) | `-1` |

