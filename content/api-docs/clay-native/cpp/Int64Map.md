---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Int64Map
target: Clay (Native)
permalink: api-docs/clay-native/cpp/Int64Map/
---

# Int64Map

<div class="type-hierarchy"><strong>cpp.Int64Map</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/haxe/IMap/">haxe.IMap</a></div>

## Instance Members

<div class="signature field-method no-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/Int64/" class="type-link">haxe.Int64</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">cpp.Int64Map.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [haxe.Int64](/api-docs/clay-native/haxe/Int64/) |
| `value` | cpp.Int64Map.T |

<hr class="field-separator" />

<div class="signature field-method no-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/Int64/" class="type-link">haxe.Int64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">cpp.Int64Map.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [haxe.Int64](/api-docs/clay-native/haxe/Int64/) |

| Returns |
|---------|
| [Null](/api-docs/clay-native/Null/)<cpp.Int64Map.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="exists"><code><span class="field-name">exists</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/Int64/" class="type-link">haxe.Int64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [haxe.Int64](/api-docs/clay-native/haxe/Int64/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/Int64/" class="type-link">haxe.Int64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [haxe.Int64](/api-docs/clay-native/haxe/Int64/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Iterator](/api-docs/clay-native/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="iterator"><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Iterator](/api-docs/clay-native/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="keyValueIterator"><code><span class="field-name">keyValueIterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/KeyValueIterator/" class="type-link">KeyValueIterator</a></code><a class="header-anchor" href="#keyValueIterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [KeyValueIterator](/api-docs/clay-native/KeyValueIterator/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="h"><code><span class="field-name">h</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#h"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:headerClassCode` | "\n  inline void set(cpp::Int64 key, ::null value) { __int64_hash_set(HX_MAP_THIS,key,value); }\n  inline void set(cpp::Int64 key, bool value) { __int64_hash_set(HX_MAP_THIS,key,value); }\n  inline void set(cpp::Int64 key, char value) { __int64_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(cpp::Int64 key, unsigned char value) { __int64_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(cpp::Int64 key, signed char value) { __int64_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(cpp::Int64 key, short value) { __int64_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(cpp::Int64 key, unsigned short value) { __int64_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(cpp::Int64 key, int value) { __int64_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(cpp::Int64 key, unsigned int value) { __int64_hash_set_int(HX_MAP_THIS,key,value); }\n  inline void set(cpp::Int64 key, float value) { __int64_hash_set_float(HX_MAP_THIS,key,value); }\n  inline void set(cpp::Int64 key, double value) { __int64_hash_set_float(HX_MAP_THIS,key,value); }\n  inline void set(cpp::Int64 key, ::String value) { __int64_hash_set_string(HX_MAP_THIS,key,value); }\n  inline void set(cpp::Int64 key, cpp::Int64 value) { __int64_hash_set_int64(HX_MAP_THIS,key,value); }\n\n  template<typename V, typename H>\n  inline void set(cpp::Int64 key, const ::cpp::Struct<V,H> &value) {__int64_hash_set(HX_MAP_THIS,key,value); }\n  template<typename F>\n  inline void set(cpp::Int64 key, const ::cpp::Function<F> &value) {__int64_hash_set(HX_MAP_THIS,key,value); }\n  template<typename V>\n  inline void set(cpp::Int64 key, const ::cpp::Pointer<V> &value) {__int64_hash_set(HX_MAP_THIS,key,(Dynamic)value ); }\n\n  template<typename VALUE>\n  inline void set(Dynamic &key, const VALUE &value) { set( (cpp::Int64)key, value ); }\n\n  inline bool get_bool(cpp::Int64 key) { return __int64_hash_get_bool(h,key); }\n  inline int get_int(cpp::Int64 key) { return __int64_hash_get_int(h,key); }\n  inline Float get_float(cpp::Int64 key) { return __int64_hash_get_float(h,key); }\n  inline String get_string(cpp::Int64 key) { return __int64_hash_get_string(h,key); }\n  inline cpp::Int64 get_int64(cpp::Int64 key) { return __int64_hash_get_int64(h,key); }\n" |

