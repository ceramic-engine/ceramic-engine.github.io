---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: MulticastDelegate
target: Unity
permalink: api-docs/unity/cs/system/MulticastDelegate/
---

# MulticastDelegate

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/Delegate/">Delegate</a> → <strong>cs.system.MulticastDelegate</strong> (extern class) → <a href="/api-docs/unity/cs/system/Array_Delegate_Swapper/">Array_Delegate_Swapper</a>, <a href="/api-docs/unity/cs/system/Console_Delegate_InternalCancelHandler/">Console_Delegate_InternalCancelHandler</a>, <a href="/api-docs/unity/cs/system/Console_WindowsConsole_Delegate_WindowsCancelHandler/">Console_WindowsConsole_Delegate_WindowsCancelHandler</a>, <a href="/api-docs/unity/cs/system/Delegate_Action_1/">Delegate_Action_1</a>, <a href="/api-docs/unity/cs/system/Delegate_AppDomainInitializer/">Delegate_AppDomainInitializer</a>, <a href="/api-docs/unity/cs/system/Delegate_AssemblyLoadEventHandler/">Delegate_AssemblyLoadEventHandler</a>, <a href="/api-docs/unity/cs/system/Delegate_AsyncCallback/">Delegate_AsyncCallback</a>, <a href="/api-docs/unity/cs/system/Delegate_Comparison_1/">Delegate_Comparison_1</a>, <a href="/api-docs/unity/cs/system/Delegate_ConsoleCancelEventHandler/">Delegate_ConsoleCancelEventHandler</a>, <a href="/api-docs/unity/cs/system/Delegate_Converter_2/">Delegate_Converter_2</a>, <a href="/api-docs/unity/cs/system/Delegate_CrossAppDomainDelegate/">Delegate_CrossAppDomainDelegate</a>, <a href="/api-docs/unity/cs/system/Delegate_EventHandler/">Delegate_EventHandler</a>, <a href="/api-docs/unity/cs/system/Delegate_Predicate_1/">Delegate_Predicate_1</a>, <a href="/api-docs/unity/cs/system/Delegate_ResolveEventHandler/">Delegate_ResolveEventHandler</a>, <a href="/api-docs/unity/cs/system/Delegate_UnhandledExceptionEventHandler/">Delegate_UnhandledExceptionEventHandler</a>, <a href="/api-docs/unity/cs/system/diagnostics/Delegate_DataReceivedEventHandler/">cs.system.diagnostics.Delegate_DataReceivedEventHandler</a>, <a href="/api-docs/unity/cs/system/diagnostics/Process_Delegate_AsyncReadHandler/">cs.system.diagnostics.Process_Delegate_AsyncReadHandler</a>, <a href="/api-docs/unity/cs/system/io/FileStream_Delegate_ReadDelegate/">cs.system.io.FileStream_Delegate_ReadDelegate</a>, <a href="/api-docs/unity/cs/system/io/FileStream_Delegate_WriteDelegate/">cs.system.io.FileStream_Delegate_WriteDelegate</a>, <a href="/api-docs/unity/cs/system/reflection/Delegate_MemberFilter/">cs.system.reflection.Delegate_MemberFilter</a>, <a href="/api-docs/unity/cs/system/reflection/Delegate_ModuleResolveEventHandler/">cs.system.reflection.Delegate_ModuleResolveEventHandler</a>, <a href="/api-docs/unity/cs/system/reflection/Delegate_TypeFilter/">cs.system.reflection.Delegate_TypeFilter</a>, <a href="/api-docs/unity/cs/system/reflection/EventInfo_Delegate_AddEventAdapter/">cs.system.reflection.EventInfo_Delegate_AddEventAdapter</a>, <a href="/api-docs/unity/cs/system/reflection/EventInfo_Delegate_AddEvent_2/">cs.system.reflection.EventInfo_Delegate_AddEvent_2</a>, <a href="/api-docs/unity/cs/system/reflection/EventInfo_Delegate_StaticAddEvent_1/">cs.system.reflection.EventInfo_Delegate_StaticAddEvent_1</a>, <a href="/api-docs/unity/cs/system/runtime/remoting/contexts/Delegate_CrossContextDelegate/">cs.system.runtime.remoting.contexts.Delegate_CrossContextDelegate</a>, <a href="/api-docs/unity/cs/system/security/accesscontrol/NativeObjectSecurity_Delegate_ExceptionFromErrorCode/">cs.system.security.accesscontrol.NativeObjectSecurity_Delegate_ExceptionFromErrorCode</a>, <a href="/api-docs/unity/cs/system/text/regularexpressions/Delegate_MatchEvaluator/">cs.system.text.regularexpressions.Delegate_MatchEvaluator</a>, <a href="/api-docs/unity/cs/system/threading/Delegate_ContextCallback/">cs.system.threading.Delegate_ContextCallback</a>, <a href="/api-docs/unity/cs/system/threading/Delegate_ParameterizedThreadStart/">cs.system.threading.Delegate_ParameterizedThreadStart</a>, <a href="/api-docs/unity/cs/system/threading/Delegate_ThreadStart/">cs.system.threading.Delegate_ThreadStart</a></div>

## Static Members

<div class="signature field-method no-description" id="op_Equality"><code><span class="field-name">op_Equality</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">MulticastDelegate</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">MulticastDelegate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_Equality"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [MulticastDelegate](/api-docs/unity/cs/system/MulticastDelegate/) |
| `d2` | [MulticastDelegate](/api-docs/unity/cs/system/MulticastDelegate/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Inequality"><code><span class="field-name">op_Inequality</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">MulticastDelegate</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">MulticastDelegate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_Inequality"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [MulticastDelegate](/api-docs/unity/cs/system/MulticastDelegate/) |
| `d2` | [MulticastDelegate](/api-docs/unity/cs/system/MulticastDelegate/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Instance Members

<div class="signature field-method no-description" id="GetObjectData"><code><span class="field-name">GetObjectData</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/serialization/SerializationInfo/" class="type-link">cs.system.runtime.serialization.SerializationInfo</a><span class="operator">,</span> <span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/serialization/StreamingContext/" class="type-link">cs.system.runtime.serialization.StreamingContext</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#GetObjectData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [cs.system.runtime.serialization.SerializationInfo](/api-docs/unity/cs/system/runtime/serialization/SerializationInfo/) |
| `context` | [cs.system.runtime.serialization.StreamingContext](/api-docs/unity/cs/system/runtime/serialization/StreamingContext/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DynamicInvokeImpl"><code><span class="field-name">DynamicInvokeImpl</span><span class="parenthesis">(</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#DynamicInvokeImpl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `args` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Dynamic](/api-docs/unity/Dynamic/)> |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetInvocationList"><code><span class="field-name">GetInvocationList</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Delegate/" class="type-link">Delegate</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetInvocationList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Delegate](/api-docs/unity/cs/system/Delegate/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="CombineImpl"><code><span class="field-name">CombineImpl</span><span class="parenthesis">(</span><span class="arg-name">follow</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Delegate/" class="type-link">Delegate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Delegate/" class="type-link">Delegate</a></code><a class="header-anchor" href="#CombineImpl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `follow` | [Delegate](/api-docs/unity/cs/system/Delegate/) |

| Returns |
|---------|
| [Delegate](/api-docs/unity/cs/system/Delegate/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveImpl"><code><span class="field-name">RemoveImpl</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Delegate/" class="type-link">Delegate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Delegate/" class="type-link">Delegate</a></code><a class="header-anchor" href="#RemoveImpl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Delegate](/api-docs/unity/cs/system/Delegate/) |

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

