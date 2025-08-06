---
layout: api-docs
category: api-docs
subCategory: doc
menu: Soloud
title: TinyAlignedFloatBuffer
target: Clay (Native)
permalink: api-docs/clay-native/soloud/TinyAlignedFloatBuffer/
---

# TinyAlignedFloatBuffer

<div class="view-source"><a href="https://github.com/jeremyfa/linc_soloud/blob/master/soloud/Soloud.hx">View source</a></div>

<div class="type-hierarchy"><strong>soloud.TinyAlignedFloatBuffer</strong> (extern class)</div>

Lightweight class that handles small aligned buffer to support vectorized operations

## Static Members

<div class="signature field-method no-description" id="create"><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TinyAlignedFloatBuffer</a></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [TinyAlignedFloatBuffer](/api-docs/clay-native/soloud/TinyAlignedFloatBuffer/) |

## Instance Members

<div class="signature field-var has-description" id="mData"><code><span class="field-name">mData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#mData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

aligned pointer

<hr class="field-separator" />

<div class="signature field-var no-description" id="mActualData"><code><span class="field-name">mActualData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/UInt8/" class="type-link">cpp.UInt8</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#mActualData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

