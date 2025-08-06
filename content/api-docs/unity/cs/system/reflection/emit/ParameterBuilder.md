---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: ParameterBuilder
target: Unity
permalink: api-docs/unity/cs/system/reflection/emit/ParameterBuilder/
---

# ParameterBuilder

<div class="type-hierarchy"><strong>cs.system.reflection.emit.ParameterBuilder</strong> (extern class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/runtime/interopservices/_ParameterBuilder/">cs.system.runtime.interopservices._ParameterBuilder</a></div>

## Instance Members

<div class="signature field-var no-description" id="Position"><code><span class="field-name">Position</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Name"><code><span class="field-name">Name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsOptional"><code><span class="field-name">IsOptional</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsOptional"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsOut"><code><span class="field-name">IsOut</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsOut"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsIn"><code><span class="field-name">IsIn</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsIn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Attributes"><code><span class="field-name">Attributes</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Attributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetToken"><code><span class="field-name">GetToken</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/ParameterToken/" class="type-link">ParameterToken</a></code><a class="header-anchor" href="#GetToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ParameterToken](/api-docs/unity/cs/system/reflection/emit/ParameterToken/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetConstant"><code><span class="field-name">SetConstant</span><span class="parenthesis">(</span><span class="arg-name">defaultValue</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetConstant"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `defaultValue` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetCustomAttribute"><code><span class="field-name">SetCustomAttribute</span><span class="parenthesis">(</span><span class="arg-name">customBuilder</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/CustomAttributeBuilder/" class="type-link">CustomAttributeBuilder</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetCustomAttribute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `customBuilder` | [CustomAttributeBuilder](/api-docs/unity/cs/system/reflection/emit/CustomAttributeBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetMarshal"><code><span class="field-name">SetMarshal</span><span class="parenthesis">(</span><span class="arg-name">unmanagedMarshal</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/UnmanagedMarshal/" class="type-link">UnmanagedMarshal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetMarshal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `unmanagedMarshal` | [UnmanagedMarshal](/api-docs/unity/cs/system/reflection/emit/UnmanagedMarshal/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

