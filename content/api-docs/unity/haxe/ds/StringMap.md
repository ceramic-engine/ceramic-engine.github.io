---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: StringMap
target: Unity
permalink: api-docs/unity/haxe/ds/StringMap/
---

# StringMap

<div class="type-hierarchy"><strong>haxe.ds.StringMap</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/haxe/IMap/">haxe.IMap</a></div>

StringMap allows mapping of String keys to arbitrary values.

See `Map` for documentation details.

<div class="see"><strong>See:</strong> https://haxe.org/manual/std-Map.html</div>


## Instance Members

<div class="signature field-method has-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">haxe.ds.StringMap.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.set`

| Name | Type |
|------|------|
| `key` | [String](/api-docs/unity/String/) |
| `value` | haxe.ds.StringMap.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">haxe.ds.StringMap.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.get`

| Name | Type |
|------|------|
| `key` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<haxe.ds.StringMap.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exists"><code><span class="field-name">exists</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.exists`

| Name | Type |
|------|------|
| `key` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.remove`

| Name | Type |
|------|------|
| `key` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.keys`

(cs, java) Implementation detail: Do not `set()` any new value while
iterating, as it may cause a resize, which will break iteration.
| Returns |
|---------|
| [Iterator](/api-docs/unity/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="iterator"><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.iterator`

(cs, java) Implementation detail: Do not `set()` any new value while
iterating, as it may cause a resize, which will break iteration.
| Returns |
|---------|
| [Iterator](/api-docs/unity/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keyValueIterator"><code><span class="field-name">keyValueIterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/KeyValueIterator/" class="type-link">KeyValueIterator</a></code><a class="header-anchor" href="#keyValueIterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.keyValueIterator`
| Returns |
|---------|
| [KeyValueIterator](/api-docs/unity/KeyValueIterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.clear`

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new StringMap.

## Private Members

<div class="signature field-var no-description" id="HASH_UPPER"><code><span class="field-name">HASH_UPPER</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#HASH_UPPER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FLAG_EMPTY"><code><span class="field-name">FLAG_EMPTY</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FLAG_EMPTY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FLAG_DEL"><code><span class="field-name">FLAG_DEL</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FLAG_DEL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="hashes"><code><span class="field-name">hashes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/haxe/ds/_StringMap/HashType/" class="type-link">haxe.ds._StringMap.HashType</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#hashes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This is the most important structure here and the reason why it's so fast.
It's an array of all the hashes contained in the table. These hashes cannot be 0 nor 1,
which stand for "empty" and "deleted" states.

The lookup algorithm will keep looking until a 0 or the key wanted is found;
The insertion algorithm will do the same but will also break when FLAG_DEL is found;

<hr class="field-separator" />

<div class="signature field-var no-description" id="vals"><code><span class="field-name">vals</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><span class="type-name">haxe.ds.StringMap.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#vals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="nBuckets"><code><span class="field-name">nBuckets</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nBuckets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="nOccupied"><code><span class="field-name">nOccupied</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nOccupied"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="upperBound"><code><span class="field-name">upperBound</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#upperBound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="cachedKey"><code><span class="field-name">cachedKey</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#cachedKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="cachedIndex"><code><span class="field-name">cachedIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cachedIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="roundUp"><code><span class="field-name">roundUp</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#roundUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isEither"><code><span class="field-name">isEither</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/_StringMap/HashType/" class="type-link">haxe.ds._StringMap.HashType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isEither"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [haxe.ds._StringMap.HashType](/api-docs/unity/haxe/ds/_StringMap/HashType/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isEmpty"><code><span class="field-name">isEmpty</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/_StringMap/HashType/" class="type-link">haxe.ds._StringMap.HashType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isEmpty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [haxe.ds._StringMap.HashType](/api-docs/unity/haxe/ds/_StringMap/HashType/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isDel"><code><span class="field-name">isDel</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/_StringMap/HashType/" class="type-link">haxe.ds._StringMap.HashType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isDel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [haxe.ds._StringMap.HashType](/api-docs/unity/haxe/ds/_StringMap/HashType/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="hash"><code><span class="field-name">hash</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/_StringMap/HashType/" class="type-link">haxe.ds._StringMap.HashType</a></code><a class="header-anchor" href="#hash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [haxe.ds._StringMap.HashType](/api-docs/unity/haxe/ds/_StringMap/HashType/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="arrayCopy"><code><span class="field-name">arrayCopy</span><span class="parenthesis">(</span><span class="arg-name">sourceArray</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Array/" class="type-link">cs.system.Array</a><span class="operator">,</span> <span class="arg-name">sourceIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">destinationArray</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Array/" class="type-link">cs.system.Array</a><span class="operator">,</span> <span class="arg-name">destinationIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#arrayCopy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sourceArray` | [cs.system.Array](/api-docs/unity/cs/system/Array/) |
| `sourceIndex` | [Int](/api-docs/unity/Int/) |
| `destinationArray` | [cs.system.Array](/api-docs/unity/cs/system/Array/) |
| `destinationIndex` | [Int](/api-docs/unity/Int/) |
| `length` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="assert"><code><span class="field-name">assert</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="lookup"><code><span class="field-name">lookup</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lookup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resize"><code><span class="field-name">resize</span><span class="parenthesis">(</span><span class="arg-name">newNBuckets</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `newNBuckets` | [Int](/api-docs/unity/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

