---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: ModuleHandle
target: Unity
permalink: api-docs/unity/cs/system/ModuleHandle/
---

# ModuleHandle

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/ValueType/">ValueType</a> → <strong>cs.system.ModuleHandle</strong> (extern final class)</div>

## Static Members

<div class="signature field-var no-description" id="EmptyHandle"><code><span class="field-name">EmptyHandle</span><span class="operator">:</span> <a href="#" class="type-link">ModuleHandle</a></code><a class="header-anchor" href="#EmptyHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Equality"><code><span class="field-name">op_Equality</span><span class="parenthesis">(</span><span class="arg-name">left</span><span class="operator">:</span> <a href="#" class="type-link">ModuleHandle</a><span class="operator">,</span> <span class="arg-name">right</span><span class="operator">:</span> <a href="#" class="type-link">ModuleHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_Equality"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `left` | [ModuleHandle](/api-docs/unity/cs/system/ModuleHandle/) |
| `right` | [ModuleHandle](/api-docs/unity/cs/system/ModuleHandle/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Inequality"><code><span class="field-name">op_Inequality</span><span class="parenthesis">(</span><span class="arg-name">left</span><span class="operator">:</span> <a href="#" class="type-link">ModuleHandle</a><span class="operator">,</span> <span class="arg-name">right</span><span class="operator">:</span> <a href="#" class="type-link">ModuleHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_Inequality"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `left` | [ModuleHandle](/api-docs/unity/cs/system/ModuleHandle/) |
| `right` | [ModuleHandle](/api-docs/unity/cs/system/ModuleHandle/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Instance Members

<div class="signature field-var no-description" id="MDStreamVersion"><code><span class="field-name">MDStreamVersion</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MDStreamVersion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="ResolveFieldHandle"><code><span class="field-name">ResolveFieldHandle</span><span class="parenthesis">(</span><span class="arg-name">fieldToken</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/RuntimeFieldHandle/" class="type-link">RuntimeFieldHandle</a></code><a class="header-anchor" href="#ResolveFieldHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `fieldToken` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [RuntimeFieldHandle](/api-docs/unity/cs/system/RuntimeFieldHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ResolveMethodHandle"><code><span class="field-name">ResolveMethodHandle</span><span class="parenthesis">(</span><span class="arg-name">methodToken</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/RuntimeMethodHandle/" class="type-link">RuntimeMethodHandle</a></code><a class="header-anchor" href="#ResolveMethodHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `methodToken` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [RuntimeMethodHandle](/api-docs/unity/cs/system/RuntimeMethodHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ResolveTypeHandle"><code><span class="field-name">ResolveTypeHandle</span><span class="parenthesis">(</span><span class="arg-name">typeToken</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/RuntimeTypeHandle/" class="type-link">RuntimeTypeHandle</a></code><a class="header-anchor" href="#ResolveTypeHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `typeToken` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [RuntimeTypeHandle](/api-docs/unity/cs/system/RuntimeTypeHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetRuntimeFieldHandleFromMetadataToken"><code><span class="field-name">GetRuntimeFieldHandleFromMetadataToken</span><span class="parenthesis">(</span><span class="arg-name">fieldToken</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/RuntimeFieldHandle/" class="type-link">RuntimeFieldHandle</a></code><a class="header-anchor" href="#GetRuntimeFieldHandleFromMetadataToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `fieldToken` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [RuntimeFieldHandle](/api-docs/unity/cs/system/RuntimeFieldHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetRuntimeMethodHandleFromMetadataToken"><code><span class="field-name">GetRuntimeMethodHandleFromMetadataToken</span><span class="parenthesis">(</span><span class="arg-name">methodToken</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/RuntimeMethodHandle/" class="type-link">RuntimeMethodHandle</a></code><a class="header-anchor" href="#GetRuntimeMethodHandleFromMetadataToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `methodToken` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [RuntimeMethodHandle](/api-docs/unity/cs/system/RuntimeMethodHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetRuntimeTypeHandleFromMetadataToken"><code><span class="field-name">GetRuntimeTypeHandleFromMetadataToken</span><span class="parenthesis">(</span><span class="arg-name">typeToken</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/RuntimeTypeHandle/" class="type-link">RuntimeTypeHandle</a></code><a class="header-anchor" href="#GetRuntimeTypeHandleFromMetadataToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `typeToken` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [RuntimeTypeHandle](/api-docs/unity/cs/system/RuntimeTypeHandle/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:struct` | - |
| `:libType` | - |
| `:csNative` | - |

