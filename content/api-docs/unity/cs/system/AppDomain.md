---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: AppDomain
target: Unity
permalink: api-docs/unity/cs/system/AppDomain/
---

# AppDomain

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/MarshalByRefObject/">MarshalByRefObject</a> → <strong>cs.system.AppDomain</strong> (extern final class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/_AppDomain/">_AppDomain</a>, <a href="/api-docs/unity/cs/system/security/IEvidenceFactory/">cs.system.security.IEvidenceFactory</a></div>

## Static Members

<div class="signature field-var no-description" id="CurrentDomain"><code><span class="field-name">CurrentDomain</span><span class="operator">:</span> <a href="#" class="type-link">AppDomain</a></code><a class="header-anchor" href="#CurrentDomain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="CreateDomain"><code><span class="field-name">CreateDomain</span><span class="parenthesis">(</span><span class="arg-name">friendlyName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">AppDomain</a></code><a class="header-anchor" href="#CreateDomain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `friendlyName` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [AppDomain](/api-docs/unity/cs/system/AppDomain/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Unload"><code><span class="field-name">Unload</span><span class="parenthesis">(</span><span class="arg-name">domain</span><span class="operator">:</span> <a href="#" class="type-link">AppDomain</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Unload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `domain` | [AppDomain](/api-docs/unity/cs/system/AppDomain/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetCurrentThreadId"><code><span class="field-name">GetCurrentThreadId</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetCurrentThreadId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

## Instance Members

<div class="signature field-var no-description" id="ReflectionOnlyAssemblyResolve"><code><span class="field-name">ReflectionOnlyAssemblyResolve</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/ResolveEventHandler/" class="type-link">ResolveEventHandler</a></code><a class="header-anchor" href="#ReflectionOnlyAssemblyResolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="UnhandledException"><code><span class="field-name">UnhandledException</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/UnhandledExceptionEventHandler/" class="type-link">UnhandledExceptionEventHandler</a></code><a class="header-anchor" href="#UnhandledException"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TypeResolve"><code><span class="field-name">TypeResolve</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/ResolveEventHandler/" class="type-link">ResolveEventHandler</a></code><a class="header-anchor" href="#TypeResolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ResourceResolve"><code><span class="field-name">ResourceResolve</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/ResolveEventHandler/" class="type-link">ResolveEventHandler</a></code><a class="header-anchor" href="#ResourceResolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ProcessExit"><code><span class="field-name">ProcessExit</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventHandler/" class="type-link">EventHandler</a></code><a class="header-anchor" href="#ProcessExit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DomainUnload"><code><span class="field-name">DomainUnload</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventHandler/" class="type-link">EventHandler</a></code><a class="header-anchor" href="#DomainUnload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="AssemblyResolve"><code><span class="field-name">AssemblyResolve</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/ResolveEventHandler/" class="type-link">ResolveEventHandler</a></code><a class="header-anchor" href="#AssemblyResolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="AssemblyLoad"><code><span class="field-name">AssemblyLoad</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/AssemblyLoadEventHandler/" class="type-link">AssemblyLoadEventHandler</a></code><a class="header-anchor" href="#AssemblyLoad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Id"><code><span class="field-name">Id</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ApplicationIdentity"><code><span class="field-name">ApplicationIdentity</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/ApplicationIdentity/" class="type-link">ApplicationIdentity</a></code><a class="header-anchor" href="#ApplicationIdentity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ActivationContext"><code><span class="field-name">ActivationContext</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/ActivationContext/" class="type-link">ActivationContext</a></code><a class="header-anchor" href="#ActivationContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DomainManager"><code><span class="field-name">DomainManager</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/AppDomainManager/" class="type-link">AppDomainManager</a></code><a class="header-anchor" href="#DomainManager"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Evidence"><code><span class="field-name">Evidence</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/Evidence/" class="type-link">cs.system.security.policy.Evidence</a></code><a class="header-anchor" href="#Evidence"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FriendlyName"><code><span class="field-name">FriendlyName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#FriendlyName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ShadowCopyFiles"><code><span class="field-name">ShadowCopyFiles</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ShadowCopyFiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DynamicDirectory"><code><span class="field-name">DynamicDirectory</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#DynamicDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RelativeSearchPath"><code><span class="field-name">RelativeSearchPath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#RelativeSearchPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BaseDirectory"><code><span class="field-name">BaseDirectory</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#BaseDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ApplicationTrust"><code><span class="field-name">ApplicationTrust</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/ApplicationTrust/" class="type-link">cs.system.security.policy.ApplicationTrust</a></code><a class="header-anchor" href="#ApplicationTrust"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SetupInformation"><code><span class="field-name">SetupInformation</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/AppDomainSetup/" class="type-link">AppDomainSetup</a></code><a class="header-anchor" href="#SetupInformation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="add_AssemblyLoad"><code><span class="field-name">add_AssemblyLoad</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/AssemblyLoadEventHandler/" class="type-link">AssemblyLoadEventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add_AssemblyLoad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [AssemblyLoadEventHandler](/api-docs/unity/cs/system/AssemblyLoadEventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove_AssemblyLoad"><code><span class="field-name">remove_AssemblyLoad</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/AssemblyLoadEventHandler/" class="type-link">AssemblyLoadEventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove_AssemblyLoad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [AssemblyLoadEventHandler](/api-docs/unity/cs/system/AssemblyLoadEventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="add_AssemblyResolve"><code><span class="field-name">add_AssemblyResolve</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/ResolveEventHandler/" class="type-link">ResolveEventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add_AssemblyResolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [ResolveEventHandler](/api-docs/unity/cs/system/ResolveEventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove_AssemblyResolve"><code><span class="field-name">remove_AssemblyResolve</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/ResolveEventHandler/" class="type-link">ResolveEventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove_AssemblyResolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [ResolveEventHandler](/api-docs/unity/cs/system/ResolveEventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="add_DomainUnload"><code><span class="field-name">add_DomainUnload</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventHandler/" class="type-link">EventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add_DomainUnload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [EventHandler](/api-docs/unity/cs/system/EventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove_DomainUnload"><code><span class="field-name">remove_DomainUnload</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventHandler/" class="type-link">EventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove_DomainUnload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [EventHandler](/api-docs/unity/cs/system/EventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="add_ProcessExit"><code><span class="field-name">add_ProcessExit</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventHandler/" class="type-link">EventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add_ProcessExit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [EventHandler](/api-docs/unity/cs/system/EventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove_ProcessExit"><code><span class="field-name">remove_ProcessExit</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventHandler/" class="type-link">EventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove_ProcessExit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [EventHandler](/api-docs/unity/cs/system/EventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="add_ResourceResolve"><code><span class="field-name">add_ResourceResolve</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/ResolveEventHandler/" class="type-link">ResolveEventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add_ResourceResolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [ResolveEventHandler](/api-docs/unity/cs/system/ResolveEventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove_ResourceResolve"><code><span class="field-name">remove_ResourceResolve</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/ResolveEventHandler/" class="type-link">ResolveEventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove_ResourceResolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [ResolveEventHandler](/api-docs/unity/cs/system/ResolveEventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="add_TypeResolve"><code><span class="field-name">add_TypeResolve</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/ResolveEventHandler/" class="type-link">ResolveEventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add_TypeResolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [ResolveEventHandler](/api-docs/unity/cs/system/ResolveEventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove_TypeResolve"><code><span class="field-name">remove_TypeResolve</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/ResolveEventHandler/" class="type-link">ResolveEventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove_TypeResolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [ResolveEventHandler](/api-docs/unity/cs/system/ResolveEventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="add_UnhandledException"><code><span class="field-name">add_UnhandledException</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/UnhandledExceptionEventHandler/" class="type-link">UnhandledExceptionEventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add_UnhandledException"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [UnhandledExceptionEventHandler](/api-docs/unity/cs/system/UnhandledExceptionEventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove_UnhandledException"><code><span class="field-name">remove_UnhandledException</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/UnhandledExceptionEventHandler/" class="type-link">UnhandledExceptionEventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove_UnhandledException"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [UnhandledExceptionEventHandler](/api-docs/unity/cs/system/UnhandledExceptionEventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="add_ReflectionOnlyAssemblyResolve"><code><span class="field-name">add_ReflectionOnlyAssemblyResolve</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/ResolveEventHandler/" class="type-link">ResolveEventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add_ReflectionOnlyAssemblyResolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [ResolveEventHandler](/api-docs/unity/cs/system/ResolveEventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove_ReflectionOnlyAssemblyResolve"><code><span class="field-name">remove_ReflectionOnlyAssemblyResolve</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/ResolveEventHandler/" class="type-link">ResolveEventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove_ReflectionOnlyAssemblyResolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [ResolveEventHandler](/api-docs/unity/cs/system/ResolveEventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AppendPrivatePath"><code><span class="field-name">AppendPrivatePath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AppendPrivatePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ClearPrivatePath"><code><span class="field-name">ClearPrivatePath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ClearPrivatePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="ClearShadowCopyPath"><code><span class="field-name">ClearShadowCopyPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ClearShadowCopyPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="CreateComInstanceFrom"><code><span class="field-name">CreateComInstanceFrom</span><span class="parenthesis">(</span><span class="arg-name">assemblyName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">typeName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/remoting/ObjectHandle/" class="type-link">cs.system.runtime.remoting.ObjectHandle</a></code><a class="header-anchor" href="#CreateComInstanceFrom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `assemblyName` | [String](/api-docs/unity/String/) |
| `typeName` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.runtime.remoting.ObjectHandle](/api-docs/unity/cs/system/runtime/remoting/ObjectHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="CreateInstance"><code><span class="field-name">CreateInstance</span><span class="parenthesis">(</span><span class="arg-name">assemblyName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">typeName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/remoting/ObjectHandle/" class="type-link">cs.system.runtime.remoting.ObjectHandle</a></code><a class="header-anchor" href="#CreateInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `assemblyName` | [String](/api-docs/unity/String/) |
| `typeName` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.runtime.remoting.ObjectHandle](/api-docs/unity/cs/system/runtime/remoting/ObjectHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="CreateInstanceAndUnwrap"><code><span class="field-name">CreateInstanceAndUnwrap</span><span class="parenthesis">(</span><span class="arg-name">assemblyName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">typeName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#CreateInstanceAndUnwrap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `assemblyName` | [String](/api-docs/unity/String/) |
| `typeName` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="CreateInstanceFrom"><code><span class="field-name">CreateInstanceFrom</span><span class="parenthesis">(</span><span class="arg-name">assemblyFile</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">typeName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/remoting/ObjectHandle/" class="type-link">cs.system.runtime.remoting.ObjectHandle</a></code><a class="header-anchor" href="#CreateInstanceFrom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `assemblyFile` | [String](/api-docs/unity/String/) |
| `typeName` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.runtime.remoting.ObjectHandle](/api-docs/unity/cs/system/runtime/remoting/ObjectHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="CreateInstanceFromAndUnwrap"><code><span class="field-name">CreateInstanceFromAndUnwrap</span><span class="parenthesis">(</span><span class="arg-name">assemblyName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">typeName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#CreateInstanceFromAndUnwrap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `assemblyName` | [String](/api-docs/unity/String/) |
| `typeName` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineDynamicAssembly"><code><span class="field-name">DefineDynamicAssembly</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/AssemblyName/" class="type-link">cs.system.reflection.AssemblyName</a><span class="operator">,</span> <span class="arg-name">access</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/AssemblyBuilder/" class="type-link">cs.system.reflection.emit.AssemblyBuilder</a></code><a class="header-anchor" href="#DefineDynamicAssembly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [cs.system.reflection.AssemblyName](/api-docs/unity/cs/system/reflection/AssemblyName/) |
| `access` | Anonymous |

| Returns |
|---------|
| [cs.system.reflection.emit.AssemblyBuilder](/api-docs/unity/cs/system/reflection/emit/AssemblyBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DoCallBack"><code><span class="field-name">DoCallBack</span><span class="parenthesis">(</span><span class="arg-name">callBackDelegate</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/CrossAppDomainDelegate/" class="type-link">CrossAppDomainDelegate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#DoCallBack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `callBackDelegate` | [CrossAppDomainDelegate](/api-docs/unity/cs/system/CrossAppDomainDelegate/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ExecuteAssembly"><code><span class="field-name">ExecuteAssembly</span><span class="parenthesis">(</span><span class="arg-name">assemblyFile</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ExecuteAssembly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `assemblyFile` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetAssemblies"><code><span class="field-name">GetAssemblies</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/Assembly/" class="type-link">cs.system.reflection.Assembly</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetAssemblies"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.reflection.Assembly](/api-docs/unity/cs/system/reflection/Assembly/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetData"><code><span class="field-name">GetData</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#GetData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetType"><code><span class="field-name">GetType</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">Type</a></code><a class="header-anchor" href="#GetType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Type](/api-docs/unity/cs/system/Type/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="InitializeLifetimeService"><code><span class="field-name">InitializeLifetimeService</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#InitializeLifetimeService"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Load"><code><span class="field-name">Load</span><span class="parenthesis">(</span><span class="arg-name">assemblyRef</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/AssemblyName/" class="type-link">cs.system.reflection.AssemblyName</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/Assembly/" class="type-link">cs.system.reflection.Assembly</a></code><a class="header-anchor" href="#Load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `assemblyRef` | [cs.system.reflection.AssemblyName](/api-docs/unity/cs/system/reflection/AssemblyName/) |

| Returns |
|---------|
| [cs.system.reflection.Assembly](/api-docs/unity/cs/system/reflection/Assembly/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetAppDomainPolicy"><code><span class="field-name">SetAppDomainPolicy</span><span class="parenthesis">(</span><span class="arg-name">domainPolicy</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/PolicyLevel/" class="type-link">cs.system.security.policy.PolicyLevel</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetAppDomainPolicy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `domainPolicy` | [cs.system.security.policy.PolicyLevel](/api-docs/unity/cs/system/security/policy/PolicyLevel/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetCachePath"><code><span class="field-name">SetCachePath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetCachePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetPrincipalPolicy"><code><span class="field-name">SetPrincipalPolicy</span><span class="parenthesis">(</span><span class="arg-name">policy</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetPrincipalPolicy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `policy` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetShadowCopyFiles"><code><span class="field-name">SetShadowCopyFiles</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetShadowCopyFiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetShadowCopyPath"><code><span class="field-name">SetShadowCopyPath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetShadowCopyPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetThreadPrincipal"><code><span class="field-name">SetThreadPrincipal</span><span class="parenthesis">(</span><span class="arg-name">principal</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/principal/IPrincipal/" class="type-link">cs.system.security.principal.IPrincipal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetThreadPrincipal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `principal` | [cs.system.security.principal.IPrincipal](/api-docs/unity/cs/system/security/principal/IPrincipal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsFinalizingForUnload"><code><span class="field-name">IsFinalizingForUnload</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsFinalizingForUnload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetData"><code><span class="field-name">SetData</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `data` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetDynamicBase"><code><span class="field-name">SetDynamicBase</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetDynamicBase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ApplyPolicy"><code><span class="field-name">ApplyPolicy</span><span class="parenthesis">(</span><span class="arg-name">assemblyName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ApplyPolicy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `assemblyName` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ExecuteAssemblyByName"><code><span class="field-name">ExecuteAssemblyByName</span><span class="parenthesis">(</span><span class="arg-name">assemblyName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ExecuteAssemblyByName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `assemblyName` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsDefaultAppDomain"><code><span class="field-name">IsDefaultAppDomain</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsDefaultAppDomain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ReflectionOnlyGetAssemblies"><code><span class="field-name">ReflectionOnlyGetAssemblies</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/Assembly/" class="type-link">cs.system.reflection.Assembly</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ReflectionOnlyGetAssemblies"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.reflection.Assembly](/api-docs/unity/cs/system/reflection/Assembly/)> |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

