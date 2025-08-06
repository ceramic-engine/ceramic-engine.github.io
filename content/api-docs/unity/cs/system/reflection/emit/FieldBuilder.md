---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: FieldBuilder
target: Unity
permalink: api-docs/unity/cs/system/reflection/emit/FieldBuilder/
---

# FieldBuilder

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/reflection/MemberInfo/">cs.system.reflection.MemberInfo</a> → <a href="/api-docs/unity/cs/system/reflection/FieldInfo/">cs.system.reflection.FieldInfo</a> → <strong>cs.system.reflection.emit.FieldBuilder</strong> (extern final class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/runtime/interopservices/_FieldBuilder/">cs.system.runtime.interopservices._FieldBuilder</a></div>

## Instance Members

<div class="signature field-var no-description" id="Module"><code><span class="field-name">Module</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/Module/" class="type-link">cs.system.reflection.Module</a></code><a class="header-anchor" href="#Module"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ReflectedType"><code><span class="field-name">ReflectedType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#ReflectedType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Name"><code><span class="field-name">Name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FieldType"><code><span class="field-name">FieldType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#FieldType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FieldHandle"><code><span class="field-name">FieldHandle</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/RuntimeFieldHandle/" class="type-link">cs.system.RuntimeFieldHandle</a></code><a class="header-anchor" href="#FieldHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DeclaringType"><code><span class="field-name">DeclaringType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#DeclaringType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Attributes"><code><span class="field-name">Attributes</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#Attributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetCustomAttributes"><code><span class="field-name">GetCustomAttributes</span><span class="parenthesis">(</span><span class="arg-name">inherit</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetCustomAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inherit` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Dynamic](/api-docs/unity/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetToken"><code><span class="field-name">GetToken</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/FieldToken/" class="type-link">FieldToken</a></code><a class="header-anchor" href="#GetToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [FieldToken](/api-docs/unity/cs/system/reflection/emit/FieldToken/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetValue"><code><span class="field-name">GetValue</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#GetValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `obj` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsDefined"><code><span class="field-name">IsDefined</span><span class="parenthesis">(</span><span class="arg-name">attributeType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">,</span> <span class="arg-name">inherit</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsDefined"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `attributeType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |
| `inherit` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

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

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetOffset"><code><span class="field-name">SetOffset</span><span class="parenthesis">(</span><span class="arg-name">iOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `iOffset` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetValue"><code><span class="field-name">SetValue</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">val</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">invokeAttr</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">binder</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/Binder/" class="type-link">cs.system.reflection.Binder</a><span class="operator">,</span> <span class="arg-name">culture</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/globalization/CultureInfo/" class="type-link">cs.system.globalization.CultureInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `obj` | [Dynamic](/api-docs/unity/Dynamic/) |
| `val` | [Dynamic](/api-docs/unity/Dynamic/) |
| `invokeAttr` | Anonymous |
| `binder` | [cs.system.reflection.Binder](/api-docs/unity/cs/system/reflection/Binder/) |
| `culture` | [cs.system.globalization.CultureInfo](/api-docs/unity/cs/system/globalization/CultureInfo/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

