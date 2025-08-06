---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: MemberInfo
target: Unity
permalink: api-docs/unity/cs/system/reflection/MemberInfo/
---

# MemberInfo

<div class="type-hierarchy"><strong>cs.system.reflection.MemberInfo</strong> (extern class) → <a href="/api-docs/unity/cs/system/Type/">cs.system.Type</a>, <a href="/api-docs/unity/cs/system/reflection/EventInfo/">EventInfo</a>, <a href="/api-docs/unity/cs/system/reflection/FieldInfo/">FieldInfo</a>, <a href="/api-docs/unity/cs/system/reflection/MethodBase/">MethodBase</a>, <a href="/api-docs/unity/cs/system/reflection/PropertyInfo/">PropertyInfo</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/reflection/ICustomAttributeProvider/">ICustomAttributeProvider</a>, <a href="/api-docs/unity/cs/system/runtime/interopservices/_MemberInfo/">cs.system.runtime.interopservices._MemberInfo</a></div>

## Instance Members

<div class="signature field-var no-description" id="MetadataToken"><code><span class="field-name">MetadataToken</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MetadataToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Module"><code><span class="field-name">Module</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/Module/" class="type-link">Module</a></code><a class="header-anchor" href="#Module"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ReflectedType"><code><span class="field-name">ReflectedType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#ReflectedType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Name"><code><span class="field-name">Name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MemberType"><code><span class="field-name">MemberType</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#MemberType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DeclaringType"><code><span class="field-name">DeclaringType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#DeclaringType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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

<div class="signature field-method no-description" id="GetCustomAttributes"><code><span class="field-name">GetCustomAttributes</span><span class="parenthesis">(</span><span class="arg-name">inherit</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetCustomAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inherit` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Dynamic](/api-docs/unity/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

