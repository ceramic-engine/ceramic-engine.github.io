---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Thread
target: Unity
permalink: api-docs/unity/cs/system/threading/Thread/
---

# Thread

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/runtime/constrainedexecution/CriticalFinalizerObject/">cs.system.runtime.constrainedexecution.CriticalFinalizerObject</a> → <strong>cs.system.threading.Thread</strong> (extern final class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/runtime/interopservices/_Thread/">cs.system.runtime.interopservices._Thread</a></div>

## Static Members

<div class="signature field-var no-description" id="CurrentThread"><code><span class="field-name">CurrentThread</span><span class="operator">:</span> <a href="#" class="type-link">Thread</a></code><a class="header-anchor" href="#CurrentThread"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CurrentPrincipal"><code><span class="field-name">CurrentPrincipal</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/principal/IPrincipal/" class="type-link">cs.system.security.principal.IPrincipal</a></code><a class="header-anchor" href="#CurrentPrincipal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CurrentContext"><code><span class="field-name">CurrentContext</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/remoting/contexts/Context/" class="type-link">cs.system.runtime.remoting.contexts.Context</a></code><a class="header-anchor" href="#CurrentContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="AllocateNamedDataSlot"><code><span class="field-name">AllocateNamedDataSlot</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/LocalDataStoreSlot/" class="type-link">cs.system.LocalDataStoreSlot</a></code><a class="header-anchor" href="#AllocateNamedDataSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.LocalDataStoreSlot](/api-docs/unity/cs/system/LocalDataStoreSlot/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FreeNamedDataSlot"><code><span class="field-name">FreeNamedDataSlot</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#FreeNamedDataSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AllocateDataSlot"><code><span class="field-name">AllocateDataSlot</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/LocalDataStoreSlot/" class="type-link">cs.system.LocalDataStoreSlot</a></code><a class="header-anchor" href="#AllocateDataSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.LocalDataStoreSlot](/api-docs/unity/cs/system/LocalDataStoreSlot/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetData"><code><span class="field-name">GetData</span><span class="parenthesis">(</span><span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/LocalDataStoreSlot/" class="type-link">cs.system.LocalDataStoreSlot</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#GetData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `slot` | [cs.system.LocalDataStoreSlot](/api-docs/unity/cs/system/LocalDataStoreSlot/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetData"><code><span class="field-name">SetData</span><span class="parenthesis">(</span><span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/LocalDataStoreSlot/" class="type-link">cs.system.LocalDataStoreSlot</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `slot` | [cs.system.LocalDataStoreSlot](/api-docs/unity/cs/system/LocalDataStoreSlot/) |
| `data` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetNamedDataSlot"><code><span class="field-name">GetNamedDataSlot</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/LocalDataStoreSlot/" class="type-link">cs.system.LocalDataStoreSlot</a></code><a class="header-anchor" href="#GetNamedDataSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.LocalDataStoreSlot](/api-docs/unity/cs/system/LocalDataStoreSlot/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetDomain"><code><span class="field-name">GetDomain</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/AppDomain/" class="type-link">cs.system.AppDomain</a></code><a class="header-anchor" href="#GetDomain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.AppDomain](/api-docs/unity/cs/system/AppDomain/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetDomainID"><code><span class="field-name">GetDomainID</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetDomainID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ResetAbort"><code><span class="field-name">ResetAbort</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ResetAbort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Sleep"><code><span class="field-name">Sleep</span><span class="parenthesis">(</span><span class="arg-name">millisecondsTimeout</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Sleep"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `millisecondsTimeout` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="MemoryBarrier"><code><span class="field-name">MemoryBarrier</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#MemoryBarrier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="SpinWait"><code><span class="field-name">SpinWait</span><span class="parenthesis">(</span><span class="arg-name">iterations</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SpinWait"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `iterations` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="VolatileRead"><code><span class="field-name">VolatileRead</span><span class="parenthesis">(</span><span class="arg-name">address</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Ref/" class="type-link">cs.Ref</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a></code><a class="header-anchor" href="#VolatileRead"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `address` | [cs.Ref](/api-docs/unity/cs/Ref/) |

| Returns |
|---------|
| [cs.types.UInt8](/api-docs/unity/cs/types/UInt8/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="VolatileWrite"><code><span class="field-name">VolatileWrite</span><span class="parenthesis">(</span><span class="arg-name">address</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Ref/" class="type-link">cs.Ref</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#VolatileWrite"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `address` | [cs.Ref](/api-docs/unity/cs/Ref/) |
| `value` | [cs.types.UInt8](/api-docs/unity/cs/types/UInt8/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="BeginCriticalRegion"><code><span class="field-name">BeginCriticalRegion</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#BeginCriticalRegion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="EndCriticalRegion"><code><span class="field-name">EndCriticalRegion</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#EndCriticalRegion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="BeginThreadAffinity"><code><span class="field-name">BeginThreadAffinity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#BeginThreadAffinity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="EndThreadAffinity"><code><span class="field-name">EndThreadAffinity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#EndThreadAffinity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var no-description" id="ManagedThreadId"><code><span class="field-name">ManagedThreadId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ManagedThreadId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ExecutionContext"><code><span class="field-name">ExecutionContext</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/threading/ExecutionContext/" class="type-link">ExecutionContext</a></code><a class="header-anchor" href="#ExecutionContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ThreadState"><code><span class="field-name">ThreadState</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#ThreadState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Priority"><code><span class="field-name">Priority</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#Priority"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Name"><code><span class="field-name">Name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsBackground"><code><span class="field-name">IsBackground</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsAlive"><code><span class="field-name">IsAlive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsAlive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsThreadPoolThread"><code><span class="field-name">IsThreadPoolThread</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsThreadPoolThread"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CurrentUICulture"><code><span class="field-name">CurrentUICulture</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/globalization/CultureInfo/" class="type-link">cs.system.globalization.CultureInfo</a></code><a class="header-anchor" href="#CurrentUICulture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CurrentCulture"><code><span class="field-name">CurrentCulture</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/globalization/CultureInfo/" class="type-link">cs.system.globalization.CultureInfo</a></code><a class="header-anchor" href="#CurrentCulture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ApartmentState"><code><span class="field-name">ApartmentState</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#ApartmentState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Abort"><code><span class="field-name">Abort</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Abort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Interrupt"><code><span class="field-name">Interrupt</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Interrupt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Join"><code><span class="field-name">Join</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Join"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Resume"><code><span class="field-name">Resume</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Resume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Start"><code><span class="field-name">Start</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Start"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Suspend"><code><span class="field-name">Suspend</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Suspend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetApartmentState"><code><span class="field-name">GetApartmentState</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#GetApartmentState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetApartmentState"><code><span class="field-name">SetApartmentState</span><span class="parenthesis">(</span><span class="arg-name">state</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetApartmentState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `state` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="TrySetApartmentState"><code><span class="field-name">TrySetApartmentState</span><span class="parenthesis">(</span><span class="arg-name">state</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#TrySetApartmentState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `state` | Anonymous |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetCompressedStack"><code><span class="field-name">GetCompressedStack</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/threading/CompressedStack/" class="type-link">CompressedStack</a></code><a class="header-anchor" href="#GetCompressedStack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [CompressedStack](/api-docs/unity/cs/system/threading/CompressedStack/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetCompressedStack"><code><span class="field-name">SetCompressedStack</span><span class="parenthesis">(</span><span class="arg-name">stack</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/threading/CompressedStack/" class="type-link">CompressedStack</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetCompressedStack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `stack` | [CompressedStack](/api-docs/unity/cs/system/threading/CompressedStack/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/threading/ThreadStart/" class="type-link">ThreadStart</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `start` | [ThreadStart](/api-docs/unity/cs/system/threading/ThreadStart/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

