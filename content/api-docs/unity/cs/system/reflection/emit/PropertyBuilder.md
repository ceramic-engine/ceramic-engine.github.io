---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: PropertyBuilder
target: Unity
permalink: api-docs/unity/cs/system/reflection/emit/PropertyBuilder/
---

# PropertyBuilder

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/reflection/MemberInfo/">cs.system.reflection.MemberInfo</a> → <a href="/api-docs/unity/cs/system/reflection/PropertyInfo/">cs.system.reflection.PropertyInfo</a> → <strong>cs.system.reflection.emit.PropertyBuilder</strong> (extern final class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/runtime/interopservices/_PropertyBuilder/">cs.system.runtime.interopservices._PropertyBuilder</a></div>

## Instance Members

<div class="signature field-var no-description" id="Module"><code><span class="field-name">Module</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/Module/" class="type-link">cs.system.reflection.Module</a></code><a class="header-anchor" href="#Module"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ReflectedType"><code><span class="field-name">ReflectedType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#ReflectedType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PropertyType"><code><span class="field-name">PropertyType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#PropertyType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PropertyToken"><code><span class="field-name">PropertyToken</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/PropertyToken/" class="type-link">PropertyToken</a></code><a class="header-anchor" href="#PropertyToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Name"><code><span class="field-name">Name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DeclaringType"><code><span class="field-name">DeclaringType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#DeclaringType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CanWrite"><code><span class="field-name">CanWrite</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#CanWrite"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CanRead"><code><span class="field-name">CanRead</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#CanRead"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Attributes"><code><span class="field-name">Attributes</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#Attributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddOtherMethod"><code><span class="field-name">AddOtherMethod</span><span class="parenthesis">(</span><span class="arg-name">mdBuilder</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/MethodBuilder/" class="type-link">MethodBuilder</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AddOtherMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mdBuilder` | [MethodBuilder](/api-docs/unity/cs/system/reflection/emit/MethodBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetAccessors"><code><span class="field-name">GetAccessors</span><span class="parenthesis">(</span><span class="arg-name">nonPublic</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">cs.system.reflection.MethodInfo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetAccessors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `nonPublic` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.reflection.MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetCustomAttributes"><code><span class="field-name">GetCustomAttributes</span><span class="parenthesis">(</span><span class="arg-name">inherit</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetCustomAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inherit` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Dynamic](/api-docs/unity/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetGetMethod"><code><span class="field-name">GetGetMethod</span><span class="parenthesis">(</span><span class="arg-name">nonPublic</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">cs.system.reflection.MethodInfo</a></code><a class="header-anchor" href="#GetGetMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `nonPublic` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [cs.system.reflection.MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetIndexParameters"><code><span class="field-name">GetIndexParameters</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/ParameterInfo/" class="type-link">cs.system.reflection.ParameterInfo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetIndexParameters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.reflection.ParameterInfo](/api-docs/unity/cs/system/reflection/ParameterInfo/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetSetMethod"><code><span class="field-name">GetSetMethod</span><span class="parenthesis">(</span><span class="arg-name">nonPublic</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">cs.system.reflection.MethodInfo</a></code><a class="header-anchor" href="#GetSetMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `nonPublic` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [cs.system.reflection.MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetValue"><code><span class="field-name">GetValue</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#GetValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `obj` | [Dynamic](/api-docs/unity/Dynamic/) |
| `index` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Dynamic](/api-docs/unity/Dynamic/)> |

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

<div class="signature field-method no-description" id="SetGetMethod"><code><span class="field-name">SetGetMethod</span><span class="parenthesis">(</span><span class="arg-name">mdBuilder</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/MethodBuilder/" class="type-link">MethodBuilder</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetGetMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mdBuilder` | [MethodBuilder](/api-docs/unity/cs/system/reflection/emit/MethodBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetSetMethod"><code><span class="field-name">SetSetMethod</span><span class="parenthesis">(</span><span class="arg-name">mdBuilder</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/MethodBuilder/" class="type-link">MethodBuilder</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetSetMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mdBuilder` | [MethodBuilder](/api-docs/unity/cs/system/reflection/emit/MethodBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetValue"><code><span class="field-name">SetValue</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `obj` | [Dynamic](/api-docs/unity/Dynamic/) |
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |
| `index` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Dynamic](/api-docs/unity/Dynamic/)> |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

