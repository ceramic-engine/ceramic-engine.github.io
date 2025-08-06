---
layout: api-docs
category: api-docs
subCategory: doc
menu: Soloud
title: AlignedFloatBuffer
target: Clay (Native)
permalink: api-docs/clay-native/soloud/AlignedFloatBuffer/
---

# AlignedFloatBuffer

<div class="view-source"><a href="https://github.com/jeremyfa/linc_soloud/blob/master/soloud/Soloud.hx">View source</a></div>

<div class="type-hierarchy"><strong>soloud.AlignedFloatBuffer</strong> (extern class)</div>

Class that handles aligned allocations to support vectorized operations

## Static Members

<div class="signature field-method no-description" id="create"><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">AlignedFloatBuffer</a></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [AlignedFloatBuffer](/api-docs/clay-native/soloud/AlignedFloatBuffer/) |

## Instance Members

<div class="signature field-var has-description" id="mData"><code><span class="field-name">mData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#mData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

aligned pointer

<hr class="field-separator" />

<div class="signature field-var has-description" id="mBasePtr"><code><span class="field-name">mBasePtr</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/UInt8/" class="type-link">cpp.UInt8</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#mBasePtr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

raw allocated pointer (for delete)

<hr class="field-separator" />

<div class="signature field-var has-description" id="mFloats"><code><span class="field-name">mFloats</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int32/" class="type-link">cpp.Int32</a></code><a class="header-anchor" href="#mFloats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

size of buffer (w/out padding)

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="arg-name">aFloats</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Result/" class="type-link">Result</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allocate and align buffer

| Name | Type |
|------|------|
| `aFloats` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

| Returns |
|---------|
| [Result](/api-docs/clay-native/soloud/Result/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clear data to zero.

