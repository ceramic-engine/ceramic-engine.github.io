---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Delegate
target: Unity
permalink: api-docs/unity/cs/system/Delegate/
---

# Delegate

<div class="type-hierarchy"><strong>cs.system.Delegate</strong> (extern class) → <a href="/api-docs/unity/cs/system/MulticastDelegate/">MulticastDelegate</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/ICloneable/">ICloneable</a>, <a href="/api-docs/unity/cs/system/runtime/serialization/ISerializable/">cs.system.runtime.serialization.ISerializable</a></div>

## Static Members

<div class="signature field-method no-description" id="CreateDelegate"><code><span class="field-name">CreateDelegate</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">Type</a><span class="operator">,</span> <span class="arg-name">firstArgument</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">method</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">cs.system.reflection.MethodInfo</a><span class="operator">,</span> <span class="arg-name">throwOnBindFailure</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Delegate</a></code><a class="header-anchor" href="#CreateDelegate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `type` | [Type](/api-docs/unity/cs/system/Type/) |
| `firstArgument` | [Dynamic](/api-docs/unity/Dynamic/) |
| `method` | [cs.system.reflection.MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |
| `throwOnBindFailure` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [Delegate](/api-docs/unity/cs/system/Delegate/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Combine"><code><span class="field-name">Combine</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="#" class="type-link">Delegate</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="#" class="type-link">Delegate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Delegate</a></code><a class="header-anchor" href="#Combine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Delegate](/api-docs/unity/cs/system/Delegate/) |
| `b` | [Delegate](/api-docs/unity/cs/system/Delegate/) |

| Returns |
|---------|
| [Delegate](/api-docs/unity/cs/system/Delegate/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Remove"><code><span class="field-name">Remove</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="#" class="type-link">Delegate</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="#" class="type-link">Delegate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Delegate</a></code><a class="header-anchor" href="#Remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `source` | [Delegate](/api-docs/unity/cs/system/Delegate/) |
| `value` | [Delegate](/api-docs/unity/cs/system/Delegate/) |

| Returns |
|---------|
| [Delegate](/api-docs/unity/cs/system/Delegate/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveAll"><code><span class="field-name">RemoveAll</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="#" class="type-link">Delegate</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="#" class="type-link">Delegate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Delegate</a></code><a class="header-anchor" href="#RemoveAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `source` | [Delegate](/api-docs/unity/cs/system/Delegate/) |
| `value` | [Delegate](/api-docs/unity/cs/system/Delegate/) |

| Returns |
|---------|
| [Delegate](/api-docs/unity/cs/system/Delegate/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Equality"><code><span class="field-name">op_Equality</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">Delegate</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">Delegate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_Equality"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [Delegate](/api-docs/unity/cs/system/Delegate/) |
| `d2` | [Delegate](/api-docs/unity/cs/system/Delegate/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Inequality"><code><span class="field-name">op_Inequality</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">Delegate</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">Delegate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_Inequality"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [Delegate](/api-docs/unity/cs/system/Delegate/) |
| `d2` | [Delegate](/api-docs/unity/cs/system/Delegate/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Instance Members

<div class="signature field-var no-description" id="Target"><code><span class="field-name">Target</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#Target"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Method"><code><span class="field-name">Method</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">cs.system.reflection.MethodInfo</a></code><a class="header-anchor" href="#Method"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="DynamicInvoke"><code><span class="field-name">DynamicInvoke</span><span class="parenthesis">(</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#DynamicInvoke"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `args` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Dynamic](/api-docs/unity/Dynamic/)> |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DynamicInvokeImpl"><code><span class="field-name">DynamicInvokeImpl</span><span class="parenthesis">(</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#DynamicInvokeImpl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `args` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Dynamic](/api-docs/unity/Dynamic/)> |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Clone"><code><span class="field-name">Clone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#Clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetMethodImpl"><code><span class="field-name">GetMethodImpl</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">cs.system.reflection.MethodInfo</a></code><a class="header-anchor" href="#GetMethodImpl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.reflection.MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetObjectData"><code><span class="field-name">GetObjectData</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/serialization/SerializationInfo/" class="type-link">cs.system.runtime.serialization.SerializationInfo</a><span class="operator">,</span> <span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/serialization/StreamingContext/" class="type-link">cs.system.runtime.serialization.StreamingContext</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#GetObjectData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [cs.system.runtime.serialization.SerializationInfo](/api-docs/unity/cs/system/runtime/serialization/SerializationInfo/) |
| `context` | [cs.system.runtime.serialization.StreamingContext](/api-docs/unity/cs/system/runtime/serialization/StreamingContext/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetInvocationList"><code><span class="field-name">GetInvocationList</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="#" class="type-link">Delegate</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetInvocationList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Delegate](/api-docs/unity/cs/system/Delegate/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="CombineImpl"><code><span class="field-name">CombineImpl</span><span class="parenthesis">(</span><span class="arg-name">d</span><span class="operator">:</span> <a href="#" class="type-link">Delegate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Delegate</a></code><a class="header-anchor" href="#CombineImpl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d` | [Delegate](/api-docs/unity/cs/system/Delegate/) |

| Returns |
|---------|
| [Delegate](/api-docs/unity/cs/system/Delegate/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveImpl"><code><span class="field-name">RemoveImpl</span><span class="parenthesis">(</span><span class="arg-name">d</span><span class="operator">:</span> <a href="#" class="type-link">Delegate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Delegate</a></code><a class="header-anchor" href="#RemoveImpl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d` | [Delegate](/api-docs/unity/cs/system/Delegate/) |

| Returns |
|---------|
| [Delegate](/api-docs/unity/cs/system/Delegate/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">method</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `target` | [Dynamic](/api-docs/unity/Dynamic/) |
| `method` | [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

