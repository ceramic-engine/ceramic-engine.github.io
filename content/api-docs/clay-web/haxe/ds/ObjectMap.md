---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ObjectMap
target: Clay (Web)
permalink: api-docs/clay-web/haxe/ds/ObjectMap/
---

# ObjectMap

<div class="type-hierarchy"><strong>haxe.ds.ObjectMap</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/haxe/IMap/">haxe.IMap</a></div>

ObjectMap allows mapping of object keys to arbitrary values.

On static targets, the keys are considered to be strong references. Refer
to `haxe.ds.WeakMap` for a weak reference version.

See `Map` for documentation details.

<div class="see"><strong>See:</strong> https://haxe.org/manual/std-Map.html</div>


## Instance Members

<div class="signature field-method has-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">haxe.ds.ObjectMap.K</span><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">haxe.ds.ObjectMap.V</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.set`

| Name | Type |
|------|------|
| `key` | haxe.ds.ObjectMap.K |
| `value` | haxe.ds.ObjectMap.V |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">haxe.ds.ObjectMap.K</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">haxe.ds.ObjectMap.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.get`

| Name | Type |
|------|------|
| `key` | haxe.ds.ObjectMap.K |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<haxe.ds.ObjectMap.V> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">haxe.ds.ObjectMap.K</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.remove`

| Name | Type |
|------|------|
| `key` | haxe.ds.ObjectMap.K |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.keys`

(cs, java) Implementation detail: Do not `set()` any new value while
iterating, as it may cause a resize, which will break iteration.
| Returns |
|---------|
| [Iterator](/api-docs/clay-web/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="iterator"><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.iterator`

(cs, java) Implementation detail: Do not `set()` any new value while
iterating, as it may cause a resize, which will break iteration.
| Returns |
|---------|
| [Iterator](/api-docs/clay-web/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keyValueIterator"><code><span class="field-name">keyValueIterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/KeyValueIterator/" class="type-link">KeyValueIterator</a></code><a class="header-anchor" href="#keyValueIterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.keyValueIterator`
| Returns |
|---------|
| [KeyValueIterator](/api-docs/clay-web/KeyValueIterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new ObjectMap.

## Private Members

<div class="signature field-method no-description" id="assignId"><code><span class="field-name">assignId</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#assignId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `obj` | AnonStruct |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getId"><code><span class="field-name">getId</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `obj` | AnonStruct |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

