---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: MethodInfo
target: Unity
permalink: api-docs/unity/cs/system/reflection/MethodInfo/
---

# MethodInfo

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/reflection/MemberInfo/">MemberInfo</a> → <a href="/api-docs/unity/cs/system/reflection/MethodBase/">MethodBase</a> → <strong>cs.system.reflection.MethodInfo</strong> (extern class) → <a href="/api-docs/unity/cs/system/reflection/emit/MethodBuilder/">cs.system.reflection.emit.MethodBuilder</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/runtime/interopservices/_MethodInfo/">cs.system.runtime.interopservices._MethodInfo</a></div>

## Instance Members

<div class="signature field-var no-description" id="ReturnParameter"><code><span class="field-name">ReturnParameter</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/ParameterInfo/" class="type-link">ParameterInfo</a></code><a class="header-anchor" href="#ReturnParameter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ContainsGenericParameters"><code><span class="field-name">ContainsGenericParameters</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ContainsGenericParameters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsGenericMethodDefinition"><code><span class="field-name">IsGenericMethodDefinition</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsGenericMethodDefinition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsGenericMethod"><code><span class="field-name">IsGenericMethod</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsGenericMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ReturnTypeCustomAttributes"><code><span class="field-name">ReturnTypeCustomAttributes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/ICustomAttributeProvider/" class="type-link">ICustomAttributeProvider</a></code><a class="header-anchor" href="#ReturnTypeCustomAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ReturnType"><code><span class="field-name">ReturnType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#ReturnType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MemberType"><code><span class="field-name">MemberType</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#MemberType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetBaseDefinition"><code><span class="field-name">GetBaseDefinition</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">MethodInfo</a></code><a class="header-anchor" href="#GetBaseDefinition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetGenericMethodDefinition"><code><span class="field-name">GetGenericMethodDefinition</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">MethodInfo</a></code><a class="header-anchor" href="#GetGenericMethodDefinition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="MakeGenericMethod"><code><span class="field-name">MakeGenericMethod</span><span class="parenthesis">(</span><span class="arg-name">typeArguments</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">MethodInfo</a></code><a class="header-anchor" href="#MakeGenericMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `typeArguments` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |

| Returns |
|---------|
| [MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetGenericArguments"><code><span class="field-name">GetGenericArguments</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetGenericArguments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

