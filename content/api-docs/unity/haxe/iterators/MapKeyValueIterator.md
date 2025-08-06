---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MapKeyValueIterator
target: Unity
permalink: api-docs/unity/haxe/iterators/MapKeyValueIterator/
---

# MapKeyValueIterator

<div class="type-hierarchy"><strong>haxe.iterators.MapKeyValueIterator</strong> (Class)</div>

This Key/Value iterator can be used to iterate across maps.

## Instance Members

<div class="signature field-method has-description" id="hasNext"><code><span class="field-name">hasNext</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasNext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Iterator.hasNext`
| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="next"><code><span class="field-name">next</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Iterator.next`
| Returns |
|---------|
| AnonStruct |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/IMap/" class="type-link">haxe.IMap</a><span class="operator">&lt;</span><span class="type-name">haxe.iterators.MapKeyValueIterator.K</span><span class="operator">,</span> <span class="type-name">haxe.iterators.MapKeyValueIterator.V</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `map` | [haxe.IMap](/api-docs/unity/haxe/IMap/)<haxe.iterators.MapKeyValueIterator.K, haxe.iterators.MapKeyValueIterator.V> |

## Private Members

<div class="signature field-var no-description" id="map"><code><span class="field-name">map</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/IMap/" class="type-link">haxe.IMap</a><span class="operator">&lt;</span><span class="type-name">haxe.iterators.MapKeyValueIterator.K</span><span class="operator">,</span> <span class="type-name">haxe.iterators.MapKeyValueIterator.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#map"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="keys"><code><span class="field-name">keys</span><span class="operator">:</span> <a href="/api-docs/unity/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:ifFeature` | "anon_read.keyValueIterator", "dynamic_read.keyValueIterator" |

