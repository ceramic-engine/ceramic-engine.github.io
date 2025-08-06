---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: _EventInfo
target: Unity
permalink: api-docs/unity/cs/system/runtime/interopservices/_EventInfo/
---

# _EventInfo

<div class="type-hierarchy"><strong>cs.system.runtime.interopservices._EventInfo</strong> (extern interface) → <a href="/api-docs/unity/cs/system/reflection/EventInfo/">cs.system.reflection.EventInfo</a></div>

## Instance Members

<div class="signature field-var no-description" id="ReflectedType"><code><span class="field-name">ReflectedType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#ReflectedType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Name"><code><span class="field-name">Name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MemberType"><code><span class="field-name">MemberType</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#MemberType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsSpecialName"><code><span class="field-name">IsSpecialName</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsSpecialName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsMulticast"><code><span class="field-name">IsMulticast</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsMulticast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="EventHandlerType"><code><span class="field-name">EventHandlerType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#EventHandlerType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DeclaringType"><code><span class="field-name">DeclaringType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#DeclaringType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Attributes"><code><span class="field-name">Attributes</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#Attributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddEventHandler"><code><span class="field-name">AddEventHandler</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">handler</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Delegate/" class="type-link">cs.system.Delegate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AddEventHandler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `target` | [Dynamic](/api-docs/unity/Dynamic/) |
| `handler` | [cs.system.Delegate](/api-docs/unity/cs/system/Delegate/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetAddMethod"><code><span class="field-name">GetAddMethod</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">cs.system.reflection.MethodInfo</a></code><a class="header-anchor" href="#GetAddMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.reflection.MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetCustomAttributes"><code><span class="field-name">GetCustomAttributes</span><span class="parenthesis">(</span><span class="arg-name">inherit</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetCustomAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inherit` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Dynamic](/api-docs/unity/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetIDsOfNames"><code><span class="field-name">GetIDsOfNames</span><span class="parenthesis">(</span><span class="arg-name">riid</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Ref/" class="type-link">cs.Ref</a><span class="operator">,</span> <span class="arg-name">rgszNames</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a><span class="operator">,</span> <span class="arg-name">cNames</span><span class="operator">:</span> <a href="/api-docs/unity/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">lcid</span><span class="operator">:</span> <a href="/api-docs/unity/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">rgDispId</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#GetIDsOfNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `riid` | [cs.Ref](/api-docs/unity/cs/Ref/) |
| `rgszNames` | [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |
| `cNames` | [UInt](/api-docs/unity/UInt/) |
| `lcid` | [UInt](/api-docs/unity/UInt/) |
| `rgDispId` | [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetTypeInfo"><code><span class="field-name">GetTypeInfo</span><span class="parenthesis">(</span><span class="arg-name">iTInfo</span><span class="operator">:</span> <a href="/api-docs/unity/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">lcid</span><span class="operator">:</span> <a href="/api-docs/unity/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">ppTInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#GetTypeInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `iTInfo` | [UInt](/api-docs/unity/UInt/) |
| `lcid` | [UInt](/api-docs/unity/UInt/) |
| `ppTInfo` | [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetTypeInfoCount"><code><span class="field-name">GetTypeInfoCount</span><span class="parenthesis">(</span><span class="arg-name">pcTInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Out/" class="type-link">cs.Out</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#GetTypeInfoCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pcTInfo` | [cs.Out](/api-docs/unity/cs/Out/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Invoke"><code><span class="field-name">Invoke</span><span class="parenthesis">(</span><span class="arg-name">dispIdMember</span><span class="operator">:</span> <a href="/api-docs/unity/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">riid</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Ref/" class="type-link">cs.Ref</a><span class="operator">,</span> <span class="arg-name">lcid</span><span class="operator">:</span> <a href="/api-docs/unity/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">wFlags</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/Int16/" class="type-link">cs.types.Int16</a><span class="operator">,</span> <span class="arg-name">pDispParams</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a><span class="operator">,</span> <span class="arg-name">pVarResult</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a><span class="operator">,</span> <span class="arg-name">pExcepInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a><span class="operator">,</span> <span class="arg-name">puArgErr</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Invoke"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dispIdMember` | [UInt](/api-docs/unity/UInt/) |
| `riid` | [cs.Ref](/api-docs/unity/cs/Ref/) |
| `lcid` | [UInt](/api-docs/unity/UInt/) |
| `wFlags` | [cs.types.Int16](/api-docs/unity/cs/types/Int16/) |
| `pDispParams` | [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |
| `pVarResult` | [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |
| `pExcepInfo` | [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |
| `puArgErr` | [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetRaiseMethod"><code><span class="field-name">GetRaiseMethod</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">cs.system.reflection.MethodInfo</a></code><a class="header-anchor" href="#GetRaiseMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.reflection.MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetRemoveMethod"><code><span class="field-name">GetRemoveMethod</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">cs.system.reflection.MethodInfo</a></code><a class="header-anchor" href="#GetRemoveMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.reflection.MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetType"><code><span class="field-name">GetType</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#GetType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.Type](/api-docs/unity/cs/system/Type/) |

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

<div class="signature field-method no-description" id="RemoveEventHandler"><code><span class="field-name">RemoveEventHandler</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">handler</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Delegate/" class="type-link">cs.system.Delegate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#RemoveEventHandler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `target` | [Dynamic](/api-docs/unity/Dynamic/) |
| `handler` | [cs.system.Delegate](/api-docs/unity/cs/system/Delegate/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

