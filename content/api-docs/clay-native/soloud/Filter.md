---
layout: api-docs
category: api-docs
subCategory: doc
menu: Soloud
title: Filter
target: Clay (Native)
permalink: api-docs/clay-native/soloud/Filter/
---

# Filter

<div class="view-source"><a href="https://github.com/jeremyfa/linc_soloud/blob/master/soloud/Filter.hx">View source</a></div>

<div class="type-hierarchy"><strong>soloud.Filter</strong> (extern class)</div>

Base class for audio sources

## Static Members

<div class="signature field-method no-description" id="create"><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Filter</a></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Filter](/api-docs/clay-native/soloud/Filter/) |

## Instance Members

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="getParamCount"><code><span class="field-name">getParamCount</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getParamCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getParamName"><code><span class="field-name">getParamName</span><span class="parenthesis">(</span><span class="arg-name">aParamIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a></code><a class="header-anchor" href="#getParamName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aParamIndex` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

| Returns |
|---------|
| [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getParamType"><code><span class="field-name">getParamType</span><span class="parenthesis">(</span><span class="arg-name">aParamIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#getParamType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aParamIndex` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

| Returns |
|---------|
| [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getParamMax"><code><span class="field-name">getParamMax</span><span class="parenthesis">(</span><span class="arg-name">aParamIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#getParamMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aParamIndex` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getParamMin"><code><span class="field-name">getParamMin</span><span class="parenthesis">(</span><span class="arg-name">aParamIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#getParamMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aParamIndex` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="createInstance"><code><span class="field-name">createInstance</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/FilterInstance/" class="type-link">FilterInstance</a></code><a class="header-anchor" href="#createInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [FilterInstance](/api-docs/clay-native/soloud/FilterInstance/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:include` | "linc_soloud.h" |

