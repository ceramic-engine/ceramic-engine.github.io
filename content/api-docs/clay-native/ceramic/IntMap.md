---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: IntMap
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/IntMap/
---

# IntMap

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/IntMap.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.IntMap</strong> (Class)</div>

An object map that uses integers as key.

IntMap provides efficient storage and retrieval of values indexed by integers.
It's optimized for performance with support for null values and optional iteration.

Features:
- O(1) average case get/set operations
- Support for null values with proper handling
- Optional iteration support with iterableKeys
- Automatic resizing of internal storage
- Memory-efficient storage using vectors

The implementation uses IntIntMap internally to map keys to value indices,
with special handling for null values to distinguish between "no value" and
"null value" cases.

Example usage:
```haxe
var map = new IntMap<String>();
map.set(42, "hello");
map.set(10, null); // Null values are supported
trace(map.get(42)); // "hello"
trace(map.exists(10)); // true (even though value is null)
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/IntIntMap/">IntIntMap</a>, <a href="/api-docs/clay-native/ceramic/IntFloatMap/">IntFloatMap</a>, <a href="/api-docs/clay-native/ceramic/IntBoolMap/">IntBoolMap</a></div>


## Instance Members

<div class="signature field-var has-description" id="iterableKeys"><code><span class="field-name">iterableKeys</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#iterableKeys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When this map is marked as iterable, this array will contain every key.

<hr class="field-separator" />

<div class="signature field-var has-description" id="values"><code><span class="field-name">values</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><span class="type-name">ceramic.IntMap.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#values"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Values as they are stored.
Can be used to iterate on values directly,
but can contain null values.

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">ceramic.IntMap.V</span></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the value associated with the given key.


| Name | Type | Description |
|------|------|-------------|
| `key` | [Int](/api-docs/clay-native/Int/) | The integer key  |

| Returns | Description |
|---------|-------------|
| ceramic.IntMap.V | The value, or null if key doesn't exist |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getInline"><code><span class="field-name">getInline</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">ceramic.IntMap.V</span></code><a class="header-anchor" href="#getInline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| ceramic.IntMap.V |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exists"><code><span class="field-name">exists</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a key exists in the map.


| Name | Type | Description |
|------|------|-------------|
| `key` | [Int](/api-docs/clay-native/Int/) | The integer key to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if the key exists (even if value is null) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="existsInline"><code><span class="field-name">existsInline</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#existsInline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">ceramic.IntMap.V</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a value for the given key.


| Name | Type | Description |
|------|------|-------------|
| `key` | [Int](/api-docs/clay-native/Int/) | The integer key  |
| `value` | ceramic.IntMap.V | The value to set (can be null) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a key-value pair from the map.


| Name | Type | Description |
|------|------|-------------|
| `key` | [Int](/api-docs/clay-native/Int/) | The integer key to remove |

<hr class="field-separator" />

<div class="signature field-method has-description" id="copy"><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">IntMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.IntMap.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a shallow copy of this map.

| Returns | Description |
|---------|-------------|
| [IntMap](/api-docs/clay-native/ceramic/IntMap/)<ceramic.IntMap.V> | A new IntMap with the same key-value pairs |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clears all key-value pairs from the map.

<hr class="field-separator" />

<div class="signature field-method has-description" id="iterator"><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntMapIterator/" class="type-link">IntMapIterator</a><span class="operator">&lt;</span><span class="type-name">ceramic.IntMap.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an iterator over the values in this map.
Note: Map must be created with iterable=true
| Returns |
|---------|
| [IntMapIterator](/api-docs/clay-native/ceramic/IntMapIterator/)<ceramic.IntMap.V> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntMapKeyIterator/" class="type-link">IntMapKeyIterator</a><span class="operator">&lt;</span><span class="type-name">ceramic.IntMap.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an iterator over the keys in this map.
Note: Map must be created with iterable=true
| Returns |
|---------|
| [IntMapKeyIterator](/api-docs/clay-native/ceramic/IntMapKeyIterator/)<ceramic.IntMap.V> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keyValueIterator"><code><span class="field-name">keyValueIterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntMapKeyValueIterator/" class="type-link">IntMapKeyValueIterator</a><span class="operator">&lt;</span><span class="type-name">ceramic.IntMap.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#keyValueIterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an iterator over key-value pairs in this map.
Note: Map must be created with iterable=true
| Returns |
|---------|
| [IntMapKeyValueIterator](/api-docs/clay-native/ceramic/IntMapKeyValueIterator/)<ceramic.IntMap.V> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">16</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fillFactor</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.5</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">iterable</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new IntMap.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `size` | [Int](/api-docs/clay-native/Int/) | `16` | Initial capacity (default: 16)  |
| `fillFactor` | [Float](/api-docs/clay-native/Float/) | `0.5` | Fill factor for internal map (default: 0.5)  |
| `iterable` | [Bool](/api-docs/clay-native/Bool/) | `false` | Enable iteration support (default: false) |

## Private Members

<div class="signature field-var no-description" id="NO_VALUE"><code><span class="field-name">NO_VALUE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NO_VALUE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NULL_VALUE"><code><span class="field-name">NULL_VALUE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NULL_VALUE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RESERVED_GAP"><code><span class="field-name">RESERVED_GAP</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RESERVED_GAP"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RET_NULL"><code><span class="field-name">RET_NULL</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#RET_NULL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="nextFreeIndex"><code><span class="field-name">nextFreeIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextFreeIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="initialSize"><code><span class="field-name">initialSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#initialSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="initialFillFactor"><code><span class="field-name">initialFillFactor</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#initialFillFactor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="resizeValues"><code><span class="field-name">resizeValues</span><span class="parenthesis">(</span><span class="arg-name">targetSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resizeValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `targetSize` | [Int](/api-docs/clay-native/Int/) |

