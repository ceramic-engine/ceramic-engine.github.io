---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Stdlib
target: Clay (Native)
permalink: api-docs/clay-native/cpp/Stdlib/
---

# Stdlib

<div class="type-hierarchy"><strong>cpp.Stdlib</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="nativeMalloc"><code><span class="field-name">nativeMalloc</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#nativeMalloc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bytes` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Void](/api-docs/clay-native/cpp/Void/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="nativeCalloc"><code><span class="field-name">nativeCalloc</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#nativeCalloc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bytes` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Void](/api-docs/clay-native/cpp/Void/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="nativeRealloc"><code><span class="field-name">nativeRealloc</span><span class="parenthesis">(</span><span class="arg-name">inPtr</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">Void</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#nativeRealloc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inPtr` | [RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Void](/api-docs/clay-native/cpp/Void/)> |
| `bytes` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Void](/api-docs/clay-native/cpp/Void/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="nativeFree"><code><span class="field-name">nativeFree</span><span class="parenthesis">(</span><span class="arg-name">ptr</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">Void</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#nativeFree"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ptr` | [RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Void](/api-docs/clay-native/cpp/Void/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="nativeMemcpy"><code><span class="field-name">nativeMemcpy</span><span class="parenthesis">(</span><span class="arg-name">dest</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">Void</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawConstPointer/" class="type-link">RawConstPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">Void</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#nativeMemcpy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dest` | [RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Void](/api-docs/clay-native/cpp/Void/)> |
| `src` | [RawConstPointer](/api-docs/clay-native/cpp/RawConstPointer/)<[Void](/api-docs/clay-native/cpp/Void/)> |
| `bytes` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sizeof"><code><span class="field-name">sizeof</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <span class="type-name">sizeof.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#sizeof"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t` | sizeof.T |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="memcpy"><code><span class="field-name">memcpy</span><span class="parenthesis">(</span><span class="arg-name">dest</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/memcpy/DEST/" class="type-link">memcpy.DEST</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstPointer/" class="type-link">ConstPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/memcpy/SRC/" class="type-link">memcpy.SRC</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#memcpy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dest` | [Pointer](/api-docs/clay-native/cpp/Pointer/)<[memcpy.DEST](/api-docs/clay-native/memcpy/DEST/)> |
| `src` | [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/)<[memcpy.SRC](/api-docs/clay-native/memcpy/SRC/)> |
| `bytes` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="malloc"><code><span class="field-name">malloc</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">Pointer</a><span class="operator">&lt;</span><span class="type-name">malloc.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#malloc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bytes` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Pointer](/api-docs/clay-native/cpp/Pointer/)<malloc.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="calloc"><code><span class="field-name">calloc</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">Pointer</a><span class="operator">&lt;</span><span class="type-name">calloc.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#calloc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bytes` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Pointer](/api-docs/clay-native/cpp/Pointer/)<calloc.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="realloc"><code><span class="field-name">realloc</span><span class="parenthesis">(</span><span class="arg-name">ioPtr</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">Pointer</a><span class="operator">&lt;</span><span class="type-name">realloc.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#realloc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ioPtr` | [Pointer](/api-docs/clay-native/cpp/Pointer/)<realloc.T> |
| `bytes` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="free"><code><span class="field-name">free</span><span class="parenthesis">(</span><span class="arg-name">ptr</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">Pointer</a><span class="operator">&lt;</span><span class="type-name">free.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#free"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ptr` | [Pointer](/api-docs/clay-native/cpp/Pointer/)<free.T> |

## Metadata

| Name | Parameters |
|------|------------|
| `:include` | "stdlib.h" |

