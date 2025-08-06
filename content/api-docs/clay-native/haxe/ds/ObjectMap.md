---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ObjectMap
target: Clay (Native)
permalink: api-docs/clay-native/haxe/ds/ObjectMap/
---

# ObjectMap

<div class="type-hierarchy"><strong>haxe.ds.ObjectMap</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/haxe/IMap/">haxe.IMap</a></div>

ObjectMap allows mapping of object keys to arbitrary values.

On static targets, the keys are considered to be strong references. Refer
to `haxe.ds.WeakMap` for a weak reference version.

See `Map` for documentation details.

<div class="see"><strong>See:</strong> https://haxe.org/manual/std-Map.html</div>


## Instance Members

<div class="signature field-method has-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">haxe.ds.ObjectMap.K</span><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">haxe.ds.ObjectMap.V</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.set`

| Name | Type |
|------|------|
| `key` | haxe.ds.ObjectMap.K |
| `value` | haxe.ds.ObjectMap.V |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">haxe.ds.ObjectMap.K</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">haxe.ds.ObjectMap.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.get`

| Name | Type |
|------|------|
| `key` | haxe.ds.ObjectMap.K |

| Returns |
|---------|
| [Null](/api-docs/clay-native/Null/)<haxe.ds.ObjectMap.V> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">haxe.ds.ObjectMap.K</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.remove`

| Name | Type |
|------|------|
| `key` | haxe.ds.ObjectMap.K |

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

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new ObjectMap.

## Private Members

<div class="signature field-var no-description" id="h"><code><span class="field-name">h</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#h"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:headerClassCode` | "\n  inline void set(Dynamic key, ::null value) { __object_hash_set(HX_MAP_THIS,key,value); }\n  inline void set(Dynamic key, bool value) { __object_hash_set(HX_MAP_THIS,key,value); }\n  inline void set(Dynamic key, char value) { __object_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(Dynamic key, unsigned char value) { __object_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(Dynamic key, signed char value) { __object_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(Dynamic key, short value) { __object_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(Dynamic key, unsigned short value) { __object_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(Dynamic key, int value) { __object_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(Dynamic key, unsigned int value) { __object_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(Dynamic key, float value) { __object_hash_set_float(HX_MAP_THIS,key,value); }\n  inline void set(Dynamic key, double value) { __object_hash_set_float(HX_MAP_THIS,key,value); }\n  inline void set(Dynamic key, ::String value) { __object_hash_set_string(HX_MAP_THIS,key,value); }\n  inline void set(Dynamic key, cpp::Int64 value) { __object_hash_set_int64(HX_MAP_THIS,key,value); }\n\n\n  template<typename V, typename H>\n  inline void set(Dynamic key, const ::cpp::Struct<V,H> &value) {__object_hash_set(HX_MAP_THIS,key,value); }\n  template<typename V>\n  inline void set(Dynamic key, const ::cpp::Function<V> &value) {__object_hash_set(HX_MAP_THIS,key,(Dynamic)value ); }\n  template<typename V>\n  inline void set(Dynamic key, const ::cpp::Pointer<V> &value) {__object_hash_set(HX_MAP_THIS,key,(Dynamic)value ); }\n\n  inline bool get_bool(Dynamic key) { return __object_hash_get_bool(h,key); }\n  inline int get_int(Dynamic key) { return __object_hash_get_int(h,key); }\n  inline Float get_float(Dynamic key) { return __object_hash_get_float(h,key); }\n  inline String get_string(Dynamic key) { return __object_hash_get_string(h,key); }\n  inline cpp::Int64 get_int64(Dynamic key) { return __object_hash_get_int64(h,key); }\n" |

