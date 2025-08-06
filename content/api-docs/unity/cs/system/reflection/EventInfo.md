---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: EventInfo
target: Unity
permalink: api-docs/unity/cs/system/reflection/EventInfo/
---

# EventInfo

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/reflection/MemberInfo/">MemberInfo</a> → <strong>cs.system.reflection.EventInfo</strong> (extern class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/runtime/interopservices/_EventInfo/">cs.system.runtime.interopservices._EventInfo</a></div>

## Instance Members

<div class="signature field-var no-description" id="MemberType"><code><span class="field-name">MemberType</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#MemberType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsSpecialName"><code><span class="field-name">IsSpecialName</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsSpecialName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsMulticast"><code><span class="field-name">IsMulticast</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsMulticast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="EventHandlerType"><code><span class="field-name">EventHandlerType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#EventHandlerType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Attributes"><code><span class="field-name">Attributes</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#Attributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddEventHandler"><code><span class="field-name">AddEventHandler</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">handler</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Delegate/" class="type-link">cs.system.Delegate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AddEventHandler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `target` | [Dynamic](/api-docs/unity/Dynamic/) |
| `handler` | [cs.system.Delegate](/api-docs/unity/cs/system/Delegate/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetAddMethod"><code><span class="field-name">GetAddMethod</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">MethodInfo</a></code><a class="header-anchor" href="#GetAddMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetRaiseMethod"><code><span class="field-name">GetRaiseMethod</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">MethodInfo</a></code><a class="header-anchor" href="#GetRaiseMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetRemoveMethod"><code><span class="field-name">GetRemoveMethod</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">MethodInfo</a></code><a class="header-anchor" href="#GetRemoveMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetOtherMethods"><code><span class="field-name">GetOtherMethods</span><span class="parenthesis">(</span><span class="arg-name">nonPublic</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">MethodInfo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetOtherMethods"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `nonPublic` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveEventHandler"><code><span class="field-name">RemoveEventHandler</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">handler</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Delegate/" class="type-link">cs.system.Delegate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#RemoveEventHandler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `target` | [Dynamic](/api-docs/unity/Dynamic/) |
| `handler` | [cs.system.Delegate](/api-docs/unity/cs/system/Delegate/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

