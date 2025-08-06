---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: IReflect
target: Unity
permalink: api-docs/unity/cs/system/reflection/IReflect/
---

# IReflect

<div class="type-hierarchy"><strong>cs.system.reflection.IReflect</strong> (extern interface) → <a href="/api-docs/unity/cs/system/Type/">cs.system.Type</a></div>

## Instance Members

<div class="signature field-var no-description" id="UnderlyingSystemType"><code><span class="field-name">UnderlyingSystemType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#UnderlyingSystemType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetField"><code><span class="field-name">GetField</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">bindingAttr</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/FieldInfo/" class="type-link">FieldInfo</a></code><a class="header-anchor" href="#GetField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `bindingAttr` | Anonymous |

| Returns |
|---------|
| [FieldInfo](/api-docs/unity/cs/system/reflection/FieldInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetFields"><code><span class="field-name">GetFields</span><span class="parenthesis">(</span><span class="arg-name">bindingAttr</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/FieldInfo/" class="type-link">FieldInfo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bindingAttr` | Anonymous |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[FieldInfo](/api-docs/unity/cs/system/reflection/FieldInfo/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetMember"><code><span class="field-name">GetMember</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">bindingAttr</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/MemberInfo/" class="type-link">MemberInfo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetMember"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `bindingAttr` | Anonymous |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[MemberInfo](/api-docs/unity/cs/system/reflection/MemberInfo/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetMembers"><code><span class="field-name">GetMembers</span><span class="parenthesis">(</span><span class="arg-name">bindingAttr</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/MemberInfo/" class="type-link">MemberInfo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetMembers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bindingAttr` | Anonymous |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[MemberInfo](/api-docs/unity/cs/system/reflection/MemberInfo/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetMethod"><code><span class="field-name">GetMethod</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">bindingAttr</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">MethodInfo</a></code><a class="header-anchor" href="#GetMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `bindingAttr` | Anonymous |

| Returns |
|---------|
| [MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetMethods"><code><span class="field-name">GetMethods</span><span class="parenthesis">(</span><span class="arg-name">bindingAttr</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">MethodInfo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetMethods"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bindingAttr` | Anonymous |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetProperties"><code><span class="field-name">GetProperties</span><span class="parenthesis">(</span><span class="arg-name">bindingAttr</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/PropertyInfo/" class="type-link">PropertyInfo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetProperties"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bindingAttr` | Anonymous |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[PropertyInfo](/api-docs/unity/cs/system/reflection/PropertyInfo/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetProperty"><code><span class="field-name">GetProperty</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">bindingAttr</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/PropertyInfo/" class="type-link">PropertyInfo</a></code><a class="header-anchor" href="#GetProperty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `bindingAttr` | Anonymous |

| Returns |
|---------|
| [PropertyInfo](/api-docs/unity/cs/system/reflection/PropertyInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="InvokeMember"><code><span class="field-name">InvokeMember</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">invokeAttr</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">binder</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/Binder/" class="type-link">Binder</a><span class="operator">,</span> <span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">modifiers</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/ParameterModifier/" class="type-link">ParameterModifier</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">culture</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/globalization/CultureInfo/" class="type-link">cs.system.globalization.CultureInfo</a><span class="operator">,</span> <span class="arg-name">namedParameters</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#InvokeMember"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `invokeAttr` | Anonymous |
| `binder` | [Binder](/api-docs/unity/cs/system/reflection/Binder/) |
| `target` | [Dynamic](/api-docs/unity/Dynamic/) |
| `args` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Dynamic](/api-docs/unity/Dynamic/)> |
| `modifiers` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[ParameterModifier](/api-docs/unity/cs/system/reflection/ParameterModifier/)> |
| `culture` | [cs.system.globalization.CultureInfo](/api-docs/unity/cs/system/globalization/CultureInfo/) |
| `namedParameters` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[String](/api-docs/unity/String/)> |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

