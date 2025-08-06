---
layout: api-docs
category: api-docs
subCategory: doc
menu: Soloud
title: FilterInstance
target: Clay (Native)
permalink: api-docs/clay-native/soloud/FilterInstance/
---

# FilterInstance

<div class="view-source"><a href="https://github.com/jeremyfa/linc_soloud/blob/master/soloud/Filter.hx">View source</a></div>

<div class="type-hierarchy"><strong>soloud.FilterInstance</strong> (extern class)</div>

Base class for filter instances

## Static Members

<div class="signature field-method no-description" id="create"><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">FilterInstance</a></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [FilterInstance](/api-docs/clay-native/soloud/FilterInstance/) |

## Instance Members

<div class="signature field-var no-description" id="mNumParams"><code><span class="field-name">mNumParams</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#mNumParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="mParamChanged"><code><span class="field-name">mParamChanged</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#mParamChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="mParam"><code><span class="field-name">mParam</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#mParam"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="mParamFader"><code><span class="field-name">mParamFader</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Fader/" class="type-link">Fader</a></code><a class="header-anchor" href="#mParamFader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="initParams"><code><span class="field-name">initParams</span><span class="parenthesis">(</span><span class="arg-name">aNumParams</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int32/" class="type-link">cpp.Int32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Result/" class="type-link">Result</a></code><a class="header-anchor" href="#initParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aNumParams` | [cpp.Int32](/api-docs/clay-native/cpp/Int32/) |

| Returns |
|---------|
| [Result](/api-docs/clay-native/soloud/Result/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateParams"><code><span class="field-name">updateParams</span><span class="parenthesis">(</span><span class="arg-name">aTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aTime` | [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="filter"><code><span class="field-name">filter</span><span class="parenthesis">(</span><span class="arg-name">aBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">aSamples</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aChannels</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aSamplerate</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aBuffer` | [cpp.Pointer](/api-docs/clay-native/cpp/Pointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `aSamples` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aChannels` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aSamplerate` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTime` | [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="filterChannel"><code><span class="field-name">filterChannel</span><span class="parenthesis">(</span><span class="arg-name">aBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aSamples</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aSamplerate</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="operator">,</span> <span class="arg-name">aChannel</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aChannels</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#filterChannel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aBuffer` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aSamples` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aSamplerate` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTime` | [Time](/api-docs/clay-native/soloud/Time/) |
| `aChannel` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aChannels` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getFilterParameter"><code><span class="field-name">getFilterParameter</span><span class="parenthesis">(</span><span class="arg-name">aAttributeId</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#getFilterParameter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aAttributeId` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setFilterParameter"><code><span class="field-name">setFilterParameter</span><span class="parenthesis">(</span><span class="arg-name">aAttributeId</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFilterParameter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aAttributeId` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aValue` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fadeFilterParameter"><code><span class="field-name">fadeFilterParameter</span><span class="parenthesis">(</span><span class="arg-name">aAttributeId</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aTo</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="operator">,</span> <span class="arg-name">aStartTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fadeFilterParameter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aAttributeId` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aTo` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTime` | [Time](/api-docs/clay-native/soloud/Time/) |
| `aStartTime` | [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="oscillateFilterParameter"><code><span class="field-name">oscillateFilterParameter</span><span class="parenthesis">(</span><span class="arg-name">aAttributeId</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aFrom</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTo</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="operator">,</span> <span class="arg-name">aStartTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#oscillateFilterParameter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aAttributeId` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aFrom` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTo` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTime` | [Time](/api-docs/clay-native/soloud/Time/) |
| `aStartTime` | [Time](/api-docs/clay-native/soloud/Time/) |

