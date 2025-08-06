---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: _EventBuilder
target: Unity
permalink: api-docs/unity/cs/system/runtime/interopservices/_EventBuilder/
---

# _EventBuilder

<div class="type-hierarchy"><strong>cs.system.runtime.interopservices._EventBuilder</strong> (extern interface) → <a href="/api-docs/unity/cs/system/reflection/emit/EventBuilder/">cs.system.reflection.emit.EventBuilder</a></div>

## Instance Members

<div class="signature field-method no-description" id="GetIDsOfNames"><code><span class="field-name">GetIDsOfNames</span><span class="parenthesis">(</span><span class="arg-name">riid</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Ref/" class="type-link">cs.Ref</a><span class="operator">,</span> <span class="arg-name">rgszNames</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a><span class="operator">,</span> <span class="arg-name">cNames</span><span class="operator">:</span> <a href="/api-docs/unity/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">lcid</span><span class="operator">:</span> <a href="/api-docs/unity/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">rgDispId</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#GetIDsOfNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `riid` | [cs.Ref](/api-docs/unity/cs/Ref/) |
| `rgszNames` | [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |
| `cNames` | [UInt](/api-docs/unity/UInt/) |
| `lcid` | [UInt](/api-docs/unity/UInt/) |
| `rgDispId` | [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetTypeInfo"><code><span class="field-name">GetTypeInfo</span><span class="parenthesis">(</span><span class="arg-name">iTInfo</span><span class="operator">:</span> <a href="/api-docs/unity/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">lcid</span><span class="operator">:</span> <a href="/api-docs/unity/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">ppTInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#GetTypeInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `iTInfo` | [UInt](/api-docs/unity/UInt/) |
| `lcid` | [UInt](/api-docs/unity/UInt/) |
| `ppTInfo` | [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetTypeInfoCount"><code><span class="field-name">GetTypeInfoCount</span><span class="parenthesis">(</span><span class="arg-name">pcTInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Out/" class="type-link">cs.Out</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#GetTypeInfoCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pcTInfo` | [cs.Out](/api-docs/unity/cs/Out/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Invoke"><code><span class="field-name">Invoke</span><span class="parenthesis">(</span><span class="arg-name">dispIdMember</span><span class="operator">:</span> <a href="/api-docs/unity/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">riid</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Ref/" class="type-link">cs.Ref</a><span class="operator">,</span> <span class="arg-name">lcid</span><span class="operator">:</span> <a href="/api-docs/unity/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">wFlags</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/Int16/" class="type-link">cs.types.Int16</a><span class="operator">,</span> <span class="arg-name">pDispParams</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a><span class="operator">,</span> <span class="arg-name">pVarResult</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a><span class="operator">,</span> <span class="arg-name">pExcepInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a><span class="operator">,</span> <span class="arg-name">puArgErr</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Invoke"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dispIdMember` | [UInt](/api-docs/unity/UInt/) |
| `riid` | [cs.Ref](/api-docs/unity/cs/Ref/) |
| `lcid` | [UInt](/api-docs/unity/UInt/) |
| `wFlags` | [cs.types.Int16](/api-docs/unity/cs/types/Int16/) |
| `pDispParams` | [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |
| `pVarResult` | [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |
| `pExcepInfo` | [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |
| `puArgErr` | [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

