---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: MethodBase
target: Unity
permalink: api-docs/unity/cs/system/reflection/MethodBase/
---

# MethodBase

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/reflection/MemberInfo/">MemberInfo</a> → <strong>cs.system.reflection.MethodBase</strong> (extern class) → <a href="/api-docs/unity/cs/system/reflection/ConstructorInfo/">ConstructorInfo</a>, <a href="/api-docs/unity/cs/system/reflection/MethodInfo/">MethodInfo</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/runtime/interopservices/_MethodBase/">cs.system.runtime.interopservices._MethodBase</a></div>

## Static Members

<div class="signature field-method no-description" id="GetCurrentMethod"><code><span class="field-name">GetCurrentMethod</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">MethodBase</a></code><a class="header-anchor" href="#GetCurrentMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [MethodBase](/api-docs/unity/cs/system/reflection/MethodBase/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetMethodFromHandle"><code><span class="field-name">GetMethodFromHandle</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/RuntimeMethodHandle/" class="type-link">cs.system.RuntimeMethodHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">MethodBase</a></code><a class="header-anchor" href="#GetMethodFromHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [cs.system.RuntimeMethodHandle](/api-docs/unity/cs/system/RuntimeMethodHandle/) |

| Returns |
|---------|
| [MethodBase](/api-docs/unity/cs/system/reflection/MethodBase/) |

## Instance Members

<div class="signature field-var no-description" id="IsGenericMethod"><code><span class="field-name">IsGenericMethod</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsGenericMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsGenericMethodDefinition"><code><span class="field-name">IsGenericMethodDefinition</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsGenericMethodDefinition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ContainsGenericParameters"><code><span class="field-name">ContainsGenericParameters</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ContainsGenericParameters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsConstructor"><code><span class="field-name">IsConstructor</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsConstructor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsSpecialName"><code><span class="field-name">IsSpecialName</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsSpecialName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsAbstract"><code><span class="field-name">IsAbstract</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsAbstract"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsHideBySig"><code><span class="field-name">IsHideBySig</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsHideBySig"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsVirtual"><code><span class="field-name">IsVirtual</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsVirtual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsFinal"><code><span class="field-name">IsFinal</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsFinal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsStatic"><code><span class="field-name">IsStatic</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsStatic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsFamilyOrAssembly"><code><span class="field-name">IsFamilyOrAssembly</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsFamilyOrAssembly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsFamilyAndAssembly"><code><span class="field-name">IsFamilyAndAssembly</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsFamilyAndAssembly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsAssembly"><code><span class="field-name">IsAssembly</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsAssembly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsFamily"><code><span class="field-name">IsFamily</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsFamily"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsPrivate"><code><span class="field-name">IsPrivate</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsPrivate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsPublic"><code><span class="field-name">IsPublic</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsPublic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CallingConvention"><code><span class="field-name">CallingConvention</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#CallingConvention"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Attributes"><code><span class="field-name">Attributes</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#Attributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MethodHandle"><code><span class="field-name">MethodHandle</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/RuntimeMethodHandle/" class="type-link">cs.system.RuntimeMethodHandle</a></code><a class="header-anchor" href="#MethodHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetMethodImplementationFlags"><code><span class="field-name">GetMethodImplementationFlags</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#GetMethodImplementationFlags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetParameters"><code><span class="field-name">GetParameters</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/ParameterInfo/" class="type-link">ParameterInfo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetParameters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[ParameterInfo](/api-docs/unity/cs/system/reflection/ParameterInfo/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetGenericArguments"><code><span class="field-name">GetGenericArguments</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetGenericArguments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetMethodBody"><code><span class="field-name">GetMethodBody</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodBody/" class="type-link">MethodBody</a></code><a class="header-anchor" href="#GetMethodBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [MethodBody](/api-docs/unity/cs/system/reflection/MethodBody/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

