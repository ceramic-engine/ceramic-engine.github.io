---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: _AppDomain
target: Unity
permalink: api-docs/unity/cs/system/_AppDomain/
---

# _AppDomain

<div class="type-hierarchy"><strong>cs.system._AppDomain</strong> (extern interface) → <a href="/api-docs/unity/cs/system/AppDomain/">AppDomain</a></div>

## Instance Members

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

<div class="signature field-var no-description" id="ShadowCopyFiles"><code><span class="field-name">ShadowCopyFiles</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ShadowCopyFiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RelativeSearchPath"><code><span class="field-name">RelativeSearchPath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#RelativeSearchPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FriendlyName"><code><span class="field-name">FriendlyName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#FriendlyName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Evidence"><code><span class="field-name">Evidence</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/Evidence/" class="type-link">cs.system.security.policy.Evidence</a></code><a class="header-anchor" href="#Evidence"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DynamicDirectory"><code><span class="field-name">DynamicDirectory</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#DynamicDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BaseDirectory"><code><span class="field-name">BaseDirectory</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#BaseDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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

<div class="signature field-method no-description" id="AppendPrivatePath"><code><span class="field-name">AppendPrivatePath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AppendPrivatePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ClearPrivatePath"><code><span class="field-name">ClearPrivatePath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ClearPrivatePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="ClearShadowCopyPath"><code><span class="field-name">ClearShadowCopyPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ClearShadowCopyPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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

<div class="signature field-method no-description" id="CreateInstanceFrom"><code><span class="field-name">CreateInstanceFrom</span><span class="parenthesis">(</span><span class="arg-name">assemblyFile</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">typeName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/remoting/ObjectHandle/" class="type-link">cs.system.runtime.remoting.ObjectHandle</a></code><a class="header-anchor" href="#CreateInstanceFrom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `assemblyFile` | [String](/api-docs/unity/String/) |
| `typeName` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.runtime.remoting.ObjectHandle](/api-docs/unity/cs/system/runtime/remoting/ObjectHandle/) |

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

<div class="signature field-method no-description" id="DoCallBack"><code><span class="field-name">DoCallBack</span><span class="parenthesis">(</span><span class="arg-name">theDelegate</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/CrossAppDomainDelegate/" class="type-link">CrossAppDomainDelegate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#DoCallBack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `theDelegate` | [CrossAppDomainDelegate](/api-docs/unity/cs/system/CrossAppDomainDelegate/) |

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

<div class="signature field-method no-description" id="GetLifetimeService"><code><span class="field-name">GetLifetimeService</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#GetLifetimeService"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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

<div class="signature field-method no-description" id="SetCachePath"><code><span class="field-name">SetCachePath</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetCachePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetData"><code><span class="field-name">SetData</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `data` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetPrincipalPolicy"><code><span class="field-name">SetPrincipalPolicy</span><span class="parenthesis">(</span><span class="arg-name">policy</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetPrincipalPolicy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `policy` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetShadowCopyPath"><code><span class="field-name">SetShadowCopyPath</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetShadowCopyPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetThreadPrincipal"><code><span class="field-name">SetThreadPrincipal</span><span class="parenthesis">(</span><span class="arg-name">principal</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/principal/IPrincipal/" class="type-link">cs.system.security.principal.IPrincipal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetThreadPrincipal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `principal` | [cs.system.security.principal.IPrincipal](/api-docs/unity/cs/system/security/principal/IPrincipal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetIDsOfNames"><code><span class="field-name">GetIDsOfNames</span><span class="parenthesis">(</span><span class="arg-name">riid</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Ref/" class="type-link">cs.Ref</a><span class="operator">,</span> <span class="arg-name">rgszNames</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">IntPtr</a><span class="operator">,</span> <span class="arg-name">cNames</span><span class="operator">:</span> <a href="/api-docs/unity/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">lcid</span><span class="operator">:</span> <a href="/api-docs/unity/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">rgDispId</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">IntPtr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#GetIDsOfNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `riid` | [cs.Ref](/api-docs/unity/cs/Ref/) |
| `rgszNames` | [IntPtr](/api-docs/unity/cs/system/IntPtr/) |
| `cNames` | [UInt](/api-docs/unity/UInt/) |
| `lcid` | [UInt](/api-docs/unity/UInt/) |
| `rgDispId` | [IntPtr](/api-docs/unity/cs/system/IntPtr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetTypeInfo"><code><span class="field-name">GetTypeInfo</span><span class="parenthesis">(</span><span class="arg-name">iTInfo</span><span class="operator">:</span> <a href="/api-docs/unity/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">lcid</span><span class="operator">:</span> <a href="/api-docs/unity/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">ppTInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">IntPtr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#GetTypeInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `iTInfo` | [UInt](/api-docs/unity/UInt/) |
| `lcid` | [UInt](/api-docs/unity/UInt/) |
| `ppTInfo` | [IntPtr](/api-docs/unity/cs/system/IntPtr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetTypeInfoCount"><code><span class="field-name">GetTypeInfoCount</span><span class="parenthesis">(</span><span class="arg-name">pcTInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Out/" class="type-link">cs.Out</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#GetTypeInfoCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pcTInfo` | [cs.Out](/api-docs/unity/cs/Out/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Invoke"><code><span class="field-name">Invoke</span><span class="parenthesis">(</span><span class="arg-name">dispIdMember</span><span class="operator">:</span> <a href="/api-docs/unity/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">riid</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Ref/" class="type-link">cs.Ref</a><span class="operator">,</span> <span class="arg-name">lcid</span><span class="operator">:</span> <a href="/api-docs/unity/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">wFlags</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/Int16/" class="type-link">cs.types.Int16</a><span class="operator">,</span> <span class="arg-name">pDispParams</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">IntPtr</a><span class="operator">,</span> <span class="arg-name">pVarResult</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">IntPtr</a><span class="operator">,</span> <span class="arg-name">pExcepInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">IntPtr</a><span class="operator">,</span> <span class="arg-name">puArgErr</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">IntPtr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Invoke"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dispIdMember` | [UInt](/api-docs/unity/UInt/) |
| `riid` | [cs.Ref](/api-docs/unity/cs/Ref/) |
| `lcid` | [UInt](/api-docs/unity/UInt/) |
| `wFlags` | [cs.types.Int16](/api-docs/unity/cs/types/Int16/) |
| `pDispParams` | [IntPtr](/api-docs/unity/cs/system/IntPtr/) |
| `pVarResult` | [IntPtr](/api-docs/unity/cs/system/IntPtr/) |
| `pExcepInfo` | [IntPtr](/api-docs/unity/cs/system/IntPtr/) |
| `puArgErr` | [IntPtr](/api-docs/unity/cs/system/IntPtr/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

