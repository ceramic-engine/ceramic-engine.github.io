---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: CollectionUtils
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/CollectionUtils/
---

# CollectionUtils

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/CollectionUtils.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.CollectionUtils</strong> (Class)</div>

Utility functions for working with Collections.

CollectionUtils provides methods for:
- Converting arrays to collections
- Creating filtered views of collections
- Combining multiple collections into one

Combined and filtered collections are cached for performance,
automatically updating when source collections change.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/Collection/">Collection</a>, <a href="/api-docs/clay-web/ceramic/CollectionEntry/">CollectionEntry</a></div>


## Static Members

<div class="signature field-method has-description" id="toCollection"><code><span class="field-name">toCollection</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">toCollection.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Collection/" class="type-link">Collection</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/ValueEntry/" class="type-link">ValueEntry</a><span class="operator">&lt;</span><span class="type-name">toCollection.T</span><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#toCollection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts an array to a Collection.
Each array element is wrapped in a ValueEntry.



| Name | Type | Description |
|------|------|-------------|
| `array` | [Array](/api-docs/clay-web/Array/)<toCollection.T> | The array to convert  |

| Returns | Description |
|---------|-------------|
| [Collection](/api-docs/clay-web/ceramic/Collection/)<[ValueEntry](/api-docs/clay-web/ceramic/ValueEntry/)<toCollection.T>> | A new Collection containing the array elements |

<hr class="field-separator" />

<div class="signature field-method has-description" id="filtered"><code><span class="field-name">filtered</span><span class="parenthesis">(</span><span class="arg-name">collection</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Collection/" class="type-link">Collection</a><span class="operator">&lt;</span><span class="type-name">filtered.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cacheKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Collection/" class="type-link">Collection</a><span class="operator">&lt;</span><span class="type-name">filtered.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#filtered"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a filtered view of a collection.

The filtered collection automatically updates when the source changes.
Use cacheKey to reuse the same filtered collection across calls.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `collection` | [Collection](/api-docs/clay-web/ceramic/Collection/)<filtered.T> | | The source collection to filter  |
| `filter` | Function | | Function that filters the entries array  |
| `cacheKey` | [String](/api-docs/clay-web/String/) | *(optional)* | Optional key to cache and reuse the filtered collection  |

| Returns | Description |
|---------|-------------|
| [Collection](/api-docs/clay-web/ceramic/Collection/)<filtered.T> | A filtered collection that updates with the source |

<hr class="field-separator" />

<div class="signature field-method has-description" id="combined"><code><span class="field-name">combined</span><span class="parenthesis">(</span><span class="arg-name">collections</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/Collection/" class="type-link">Collection</a><span class="operator">&lt;</span><span class="type-name">combined.T</span><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cache</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Collection/" class="type-link">Collection</a><span class="operator">&lt;</span><span class="type-name">combined.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#combined"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Combines multiple collections into a single collection.

The combined collection automatically updates when any source changes.
Entries from all collections are merged in order.

Example:
```haxe
var allEnemies = CollectionUtils.combined([
    groundEnemies,
    flyingEnemies,
    bossEnemies
]);
```



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `collections` | [Array](/api-docs/clay-web/Array/)<[Collection](/api-docs/clay-web/ceramic/Collection/)<combined.T>> | | Array of collections to combine  |
| `cache` | [Bool](/api-docs/clay-web/Bool/) | `true` | Whether to cache the combined collection (default: true)  |

| Returns | Description |
|---------|-------------|
| [Collection](/api-docs/clay-web/ceramic/Collection/)<combined.T> | A collection containing all entries from all source collections |

## Instance Members

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description" id="combinedCollections"><code><span class="field-name">combinedCollections</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#combinedCollections"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cache for combined collections to avoid recreating them

<hr class="field-separator" />

<div class="signature field-var has-description" id="filteredCollections"><code><span class="field-name">filteredCollections</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#filteredCollections"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cache for filtered collections with specific cache keys

## Metadata

| Name | Parameters |
|------|------------|
| `:keepSub` | - |

