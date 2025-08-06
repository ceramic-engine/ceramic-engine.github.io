---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: CollectionImpl
target: Unity
permalink: api-docs/unity/ceramic/CollectionImpl/
---

# CollectionImpl

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Collection.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.CollectionImpl</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/tracker/Events/">tracker.Events</a></div>

Internal implementation of the Collection abstract.
Handles the actual storage, indexing, and management of collection entries.

## Instance Members

<div class="signature field-var has-description" id="entries"><code><span class="field-name">entries</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><span class="type-name">ceramic.CollectionImpl.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#entries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The array of entries in the collection.
Read-only access from outside the class.

<hr class="field-separator" />

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of entries in the collection.

<hr class="field-separator" />

<div class="signature field-method has-description" id="pushAll"><code><span class="field-name">pushAll</span><span class="parenthesis">(</span><span class="arg-name">entries</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">ceramic.CollectionImpl.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds multiple entries to the collection at once.


| Name | Type | Description |
|------|------|-------------|
| `entries` | [Array](/api-docs/unity/Array/)<ceramic.CollectionImpl.T> | Array of entries to add |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes all entries from the collection.

<hr class="field-separator" />

<div class="signature field-method has-description" id="push"><code><span class="field-name">push</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <span class="type-name">ceramic.CollectionImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#push"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a single entry to the collection.


| Name | Type | Description |
|------|------|-------------|
| `entry` | ceramic.CollectionImpl.T | The entry to add |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <span class="type-name">ceramic.CollectionImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes an entry from the collection.


| Name | Type | Description |
|------|------|-------------|
| `entry` | ceramic.CollectionImpl.T | The entry to remove |

<hr class="field-separator" />

<div class="signature field-method has-description" id="synchronize"><code><span class="field-name">synchronize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#synchronize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Forces immediate synchronization of the collection's internal state.
Normally done automatically when accessing entries.

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">ceramic.CollectionImpl.T</span></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets an entry by its ID.


| Name | Type | Description |
|------|------|-------------|
| `id` | [String](/api-docs/unity/String/) | The ID of the entry to retrieve  |

| Returns | Description |
|---------|-------------|
| ceramic.CollectionImpl.T | The entry with the given ID, or null if not found  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getByIndex"><code><span class="field-name">getByIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">ceramic.CollectionImpl.T</span></code><a class="header-anchor" href="#getByIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets an entry by its index in the collection.


| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/unity/Int/) | The index of the entry  |

| Returns | Description |
|---------|-------------|
| ceramic.CollectionImpl.T | The entry at the given index |

<hr class="field-separator" />

<div class="signature field-method has-description" id="indexOfId"><code><span class="field-name">indexOfId</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indexOfId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the index of an entry by its ID.


| Name | Type | Description |
|------|------|-------------|
| `id` | [String](/api-docs/unity/String/) | The ID to search for  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/unity/Int/) | The index of the entry, or -1 if not found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="indexOf"><code><span class="field-name">indexOf</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <span class="type-name">ceramic.CollectionImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indexOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the index of an entry in the collection.


| Name | Type | Description |
|------|------|-------------|
| `entry` | ceramic.CollectionImpl.T | The entry to find  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/unity/Int/) | The index of the entry, or -1 if not found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="iterator"><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an iterator for the collection.
Enables for-in loop iteration.

| Returns | Description |
|---------|-------------|
| [Iterator](/api-docs/unity/Iterator/) | An iterator over the collection entries |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="internalId"><code><span class="field-name">internalId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#internalId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="lastChange"><code><span class="field-name">lastChange</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lastChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="indexDirty"><code><span class="field-name">indexDirty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#indexDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the ID index needs to be rebuilt

<hr class="field-separator" />

<div class="signature field-var has-description" id="entriesDirty"><code><span class="field-name">entriesDirty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#entriesDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether combined entries need to be recomputed

<hr class="field-separator" />

<div class="signature field-var has-description" id="byId"><code><span class="field-name">byId</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#byId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map for fast lookup by ID

<hr class="field-separator" />

<div class="signature field-var has-description" id="combinedCollections"><code><span class="field-name">combinedCollections</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="#" class="type-link">CollectionImpl</a><span class="operator">&lt;</span><span class="type-name">ceramic.CollectionImpl.T</span><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#combinedCollections"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Collections being combined into this one

<hr class="field-separator" />

<div class="signature field-var has-description" id="combinedCollectionLastChanges"><code><span class="field-name">combinedCollectionLastChanges</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#combinedCollectionLastChanges"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Track changes in combined collections

<hr class="field-separator" />

<div class="signature field-method has-description" id="filter"><code><span class="field-name">filter</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">ceramic.CollectionImpl.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional filter function for combined collections
| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<ceramic.CollectionImpl.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="checkCombined"><code><span class="field-name">checkCombined</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#checkCombined"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="computeIndex"><code><span class="field-name">computeIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="computeEntries"><code><span class="field-name">computeEntries</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeEntries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:allow` | ceramic.Collection |
| `:allow` | ceramic.CollectionUtils |

