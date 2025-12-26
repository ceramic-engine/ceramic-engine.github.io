---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Int64Map
target: Unity
permalink: api-docs/unity/loreline/Int64Map/
---

# Int64Map

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Int64Map.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Int64Map</strong> (Class)</div>

## Instance Members

<div class="signature field-method no-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="copy"><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Int64Map</a><span class="operator">&lt;</span><span class="type-name">loreline.Int64Map.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int64Map](/api-docs/unity/loreline/Int64Map/)<loreline.Int64Map.V> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">loreline.Int64Map.V</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [haxe.Int64](/api-docs/unity/haxe/Int64/) |
| `value` | loreline.Int64Map.V |

<hr class="field-separator" />

<div class="signature field-method no-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">loreline.Int64Map.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [haxe.Int64](/api-docs/unity/haxe/Int64/) |

| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<loreline.Int64Map.V> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="exists"><code><span class="field-name">exists</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [haxe.Int64](/api-docs/unity/haxe/Int64/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [haxe.Int64](/api-docs/unity/haxe/Int64/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="iterator"><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/_Int64Map/Int64MapIterator/" class="type-link">loreline._Int64Map.Int64MapIterator</a><span class="operator">&lt;</span><span class="type-name">loreline.Int64Map.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [loreline._Int64Map.Int64MapIterator](/api-docs/unity/loreline/_Int64Map/Int64MapIterator/)<loreline.Int64Map.V> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="keyIterator"><code><span class="field-name">keyIterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/_Int64Map/Int64MapKeyIterator/" class="type-link">loreline._Int64Map.Int64MapKeyIterator</a><span class="operator">&lt;</span><span class="type-name">loreline.Int64Map.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#keyIterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [loreline._Int64Map.Int64MapKeyIterator](/api-docs/unity/loreline/_Int64Map/Int64MapKeyIterator/)<loreline.Int64Map.V> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="keyValueIterator"><code><span class="field-name">keyValueIterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/_Int64Map/Int64MapKeyValueIterator/" class="type-link">loreline._Int64Map.Int64MapKeyValueIterator</a><span class="operator">&lt;</span><span class="type-name">loreline.Int64Map.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#keyValueIterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [loreline._Int64Map.Int64MapKeyValueIterator](/api-docs/unity/loreline/_Int64Map/Int64MapKeyValueIterator/)<loreline.Int64Map.V> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="length"><code><span class="field-name">length</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="INITIAL_SIZE"><code><span class="field-name">INITIAL_SIZE</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#INITIAL_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LOAD_FACTOR"><code><span class="field-name">LOAD_FACTOR</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#LOAD_FACTOR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="mask"><code><span class="field-name">mask</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#mask"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="resize"><code><span class="field-name">resize</span><span class="parenthesis">(</span><span class="arg-name">newCapacity</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `newCapacity` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="hashCoords"><code><span class="field-name">hashCoords</span><span class="parenthesis">(</span><span class="arg-name">high</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">low</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#hashCoords"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `high` | [Int](/api-docs/unity/Int/) |
| `low` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:allow` | loreline.Int64MapIterator |
| `:allow` | loreline.Int64MapKeyIterator |
| `:allow` | loreline.Int64MapKeyValueIterator |

