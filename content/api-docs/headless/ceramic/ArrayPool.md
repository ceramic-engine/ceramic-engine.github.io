---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ArrayPool
target: Headless
permalink: api-docs/headless/ceramic/ArrayPool/
---

# ArrayPool

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ArrayPool.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ArrayPool</strong> (Class)</div>

A pool system for efficiently reusing arrays of fixed sizes.

ArrayPool reduces garbage collection pressure by reusing arrays instead of
creating new ones. It maintains pools of arrays organized by size ranges,
automatically returning arrays to the pool when they're no longer needed.

The pool uses predefined size buckets (10, 100, 1000, 10000, 100000) and
automatically selects the appropriate pool based on the requested size.

Example usage:
```haxe
// Get an array from the pool
var pool = ArrayPool.pool(50);
var array = pool.get();

// Use the array
for (i in 0...50) {
    array[i] = i * 2;
}

// Return to pool when done
pool.release(array);
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/ReusableArray/">ReusableArray</a></div>


## Static Members

<div class="signature field-method has-description" id="pool"><code><span class="field-name">pool</span><span class="parenthesis">(</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ArrayPool</a></code><a class="header-anchor" href="#pool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets an appropriate array pool for the requested size.
Automatically selects from predefined pools based on size ranges.
For sizes over 100,000, creates a temporary pool (not recommended).



| Name | Type | Description |
|------|------|-------------|
| `size` | [Int](/api-docs/headless/Int/) | The maximum size of arrays needed  |

| Returns | Description |
|---------|-------------|
| [ArrayPool](/api-docs/headless/ceramic/ArrayPool/) | An ArrayPool instance suitable for the requested size |

## Instance Members

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ReusableArray/" class="type-link">ReusableArray</a><span class="operator">&lt;</span><a href="/api-docs/headless/Any/" class="type-link">Any</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a reusable array from the pool.
The array may contain old data and should be cleared if needed.

| Returns | Description |
|---------|-------------|
| [ReusableArray](/api-docs/headless/ceramic/ReusableArray/)<[Any](/api-docs/headless/Any/)> | A ReusableArray instance of the pool's configured size |

<hr class="field-separator" />

<div class="signature field-method has-description" id="release"><code><span class="field-name">release</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ReusableArray/" class="type-link">ReusableArray</a><span class="operator">&lt;</span><a href="/api-docs/headless/Any/" class="type-link">Any</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#release"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array to the pool for reuse.
The array is automatically cleared (all elements set to null).


| Name | Type | Description |
|------|------|-------------|
| `array` | [ReusableArray](/api-docs/headless/ceramic/ReusableArray/)<[Any](/api-docs/headless/Any/)> | The array to return to the pool |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">arrayLengths</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new ArrayPool for arrays of the specified size.


| Name | Type | Description |
|------|------|-------------|
| `arrayLengths` | [Int](/api-docs/headless/Int/) | The size of arrays this pool will manage |

## Private Members

<div class="signature field-var no-description" id="ALLOC_STEP"><code><span class="field-name">ALLOC_STEP</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ALLOC_STEP"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="dynPool10"><code><span class="field-name">dynPool10</span><span class="operator">:</span> <a href="#" class="type-link">ArrayPool</a></code><a class="header-anchor" href="#dynPool10"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pool for arrays up to 10 elements

<hr class="field-separator" />

<div class="signature field-var has-description" id="dynPool100"><code><span class="field-name">dynPool100</span><span class="operator">:</span> <a href="#" class="type-link">ArrayPool</a></code><a class="header-anchor" href="#dynPool100"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pool for arrays up to 100 elements

<hr class="field-separator" />

<div class="signature field-var has-description" id="dynPool1000"><code><span class="field-name">dynPool1000</span><span class="operator">:</span> <a href="#" class="type-link">ArrayPool</a></code><a class="header-anchor" href="#dynPool1000"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pool for arrays up to 1,000 elements

<hr class="field-separator" />

<div class="signature field-var has-description" id="dynPool10000"><code><span class="field-name">dynPool10000</span><span class="operator">:</span> <a href="#" class="type-link">ArrayPool</a></code><a class="header-anchor" href="#dynPool10000"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pool for arrays up to 10,000 elements

<hr class="field-separator" />

<div class="signature field-var has-description" id="dynPool100000"><code><span class="field-name">dynPool100000</span><span class="operator">:</span> <a href="#" class="type-link">ArrayPool</a></code><a class="header-anchor" href="#dynPool100000"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pool for arrays up to 100,000 elements

<hr class="field-separator" />

<div class="signature field-var has-description" id="didNotifyLargePool"><code><span class="field-name">didNotifyLargePool</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#didNotifyLargePool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag to prevent spamming warnings about large pools

<hr class="field-separator" />

<div class="signature field-var has-description" id="arrays"><code><span class="field-name">arrays</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ReusableArray/" class="type-link">ReusableArray</a><span class="operator">&lt;</span><a href="/api-docs/headless/Any/" class="type-link">Any</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#arrays"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Storage for pooled arrays

<hr class="field-separator" />

<div class="signature field-var has-description" id="nextFree"><code><span class="field-name">nextFree</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextFree"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Index of the next available slot in the pool

<hr class="field-separator" />

<div class="signature field-var has-description" id="arrayLengths"><code><span class="field-name">arrayLengths</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#arrayLengths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The size of arrays managed by this pool

