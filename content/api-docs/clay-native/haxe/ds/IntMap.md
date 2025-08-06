---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: IntMap
target: Clay (Native)
permalink: api-docs/clay-native/haxe/ds/IntMap/
---

# IntMap

<div class="type-hierarchy"><strong>haxe.ds.IntMap</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/haxe/IMap/">haxe.IMap</a></div>

IntMap allows mapping of Int keys to arbitrary values.

See `Map` for documentation details.

<div class="see"><strong>See:</strong> https://haxe.org/manual/std-Map.html</div>


## Instance Members

<div class="signature field-method has-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">haxe.ds.IntMap.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.set`

| Name | Type |
|------|------|
| `key` | [Int](/api-docs/clay-native/Int/) |
| `value` | haxe.ds.IntMap.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">haxe.ds.IntMap.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.get`

| Name | Type |
|------|------|
| `key` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Null](/api-docs/clay-native/Null/)<haxe.ds.IntMap.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exists"><code><span class="field-name">exists</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.exists`

| Name | Type |
|------|------|
| `key` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.remove`

| Name | Type |
|------|------|
| `key` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.keys`

(cs, java) Implementation detail: Do not `set()` any new value while
iterating, as it may cause a resize, which will break iteration.
| Returns |
|---------|
| [Iterator](/api-docs/clay-native/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="iterator"><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.iterator`

(cs, java) Implementation detail: Do not `set()` any new value while
iterating, as it may cause a resize, which will break iteration.
| Returns |
|---------|
| [Iterator](/api-docs/clay-native/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keyValueIterator"><code><span class="field-name">keyValueIterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/KeyValueIterator/" class="type-link">KeyValueIterator</a></code><a class="header-anchor" href="#keyValueIterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.keyValueIterator`
| Returns |
|---------|
| [KeyValueIterator](/api-docs/clay-native/KeyValueIterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="copy"><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">IntMap</a><span class="operator">&lt;</span><span class="type-name">haxe.ds.IntMap.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.copy`
| Returns |
|---------|
| [IntMap](/api-docs/clay-native/haxe/ds/IntMap/)<haxe.ds.IntMap.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.clear`

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new IntMap.

## Private Members

<div class="signature field-var no-description" id="h"><code><span class="field-name">h</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#h"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:headerClassCode` | "\n  inline void set(int key, ::null value) { __int_hash_set(HX_MAP_THIS,key,value); }\n  inline void set(int key, bool value) { __int_hash_set(HX_MAP_THIS,key,value); }\n  inline void set(int key, char value) { __int_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(int key, unsigned char value) { __int_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(int key, signed char value) { __int_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(int key, short value) { __int_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(int key, unsigned short value) { __int_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(int key, int value) { __int_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(int key, unsigned int value) { __int_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(int key, float value) { __int_hash_set_float(HX_MAP_THIS,key,value); }\n  inline void set(int key, double value) { __int_hash_set_float(HX_MAP_THIS,key,value); }\n  inline void set(int key, ::String value) { __int_hash_set_string(HX_MAP_THIS,key,value); }\n  inline void set(int key, cpp::Int64 value) { __int_hash_set_int64(HX_MAP_THIS,key,value); }\n\n  template<typename V, typename H>\n  inline void set(int key, const ::cpp::Struct<V,H> &value) {__int_hash_set(HX_MAP_THIS,key,value); }\n  template<typename F>\n  inline void set(int key, const ::cpp::Function<F> &value) {__int_hash_set(HX_MAP_THIS,key,value); }\n  template<typename V>\n  inline void set(int key, const ::cpp::Pointer<V> &value) {__int_hash_set(HX_MAP_THIS,key,(Dynamic)value ); }\n\n  template<typename VALUE>\n  inline void set(Dynamic &key, const VALUE &value) { set( (int)key, value ); }\n\n  inline bool get_bool(int key) { return __int_hash_get_bool(h,key); }\n  inline int get_int(int key) { return __int_hash_get_int(h,key); }\n  inline Float get_float(int key) { return __int_hash_get_float(h,key); }\n  inline String get_string(int key) { return __int_hash_get_string(h,key); }\n  inline cpp::Int64 get_int64(int key) { return __int_hash_get_int64(h,key); }\n" |

