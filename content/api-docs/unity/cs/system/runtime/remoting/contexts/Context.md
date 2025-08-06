---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Context
target: Unity
permalink: api-docs/unity/cs/system/runtime/remoting/contexts/Context/
---

# Context

<div class="type-hierarchy"><strong>cs.system.runtime.remoting.contexts.Context</strong> (extern class)</div>

## Static Members

<div class="signature field-var no-description" id="DefaultContext"><code><span class="field-name">DefaultContext</span><span class="operator">:</span> <a href="#" class="type-link">Context</a></code><a class="header-anchor" href="#DefaultContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="RegisterDynamicProperty"><code><span class="field-name">RegisterDynamicProperty</span><span class="parenthesis">(</span><span class="arg-name">prop</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/remoting/contexts/IDynamicProperty/" class="type-link">IDynamicProperty</a><span class="operator">,</span> <span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/ContextBoundObject/" class="type-link">cs.system.ContextBoundObject</a><span class="operator">,</span> <span class="arg-name">ctx</span><span class="operator">:</span> <a href="#" class="type-link">Context</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#RegisterDynamicProperty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `prop` | [IDynamicProperty](/api-docs/unity/cs/system/runtime/remoting/contexts/IDynamicProperty/) |
| `obj` | [cs.system.ContextBoundObject](/api-docs/unity/cs/system/ContextBoundObject/) |
| `ctx` | [Context](/api-docs/unity/cs/system/runtime/remoting/contexts/Context/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="UnregisterDynamicProperty"><code><span class="field-name">UnregisterDynamicProperty</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/ContextBoundObject/" class="type-link">cs.system.ContextBoundObject</a><span class="operator">,</span> <span class="arg-name">ctx</span><span class="operator">:</span> <a href="#" class="type-link">Context</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#UnregisterDynamicProperty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `obj` | [cs.system.ContextBoundObject](/api-docs/unity/cs/system/ContextBoundObject/) |
| `ctx` | [Context](/api-docs/unity/cs/system/runtime/remoting/contexts/Context/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AllocateDataSlot"><code><span class="field-name">AllocateDataSlot</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/LocalDataStoreSlot/" class="type-link">cs.system.LocalDataStoreSlot</a></code><a class="header-anchor" href="#AllocateDataSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.LocalDataStoreSlot](/api-docs/unity/cs/system/LocalDataStoreSlot/) |

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

<div class="signature field-method no-description" id="GetData"><code><span class="field-name">GetData</span><span class="parenthesis">(</span><span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/LocalDataStoreSlot/" class="type-link">cs.system.LocalDataStoreSlot</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#GetData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `slot` | [cs.system.LocalDataStoreSlot](/api-docs/unity/cs/system/LocalDataStoreSlot/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetNamedDataSlot"><code><span class="field-name">GetNamedDataSlot</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/LocalDataStoreSlot/" class="type-link">cs.system.LocalDataStoreSlot</a></code><a class="header-anchor" href="#GetNamedDataSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.LocalDataStoreSlot](/api-docs/unity/cs/system/LocalDataStoreSlot/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetData"><code><span class="field-name">SetData</span><span class="parenthesis">(</span><span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/LocalDataStoreSlot/" class="type-link">cs.system.LocalDataStoreSlot</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `slot` | [cs.system.LocalDataStoreSlot](/api-docs/unity/cs/system/LocalDataStoreSlot/) |
| `data` | [Dynamic](/api-docs/unity/Dynamic/) |

## Instance Members

<div class="signature field-var no-description" id="ContextProperties"><code><span class="field-name">ContextProperties</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/runtime/remoting/contexts/IContextProperty/" class="type-link">IContextProperty</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ContextProperties"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ContextID"><code><span class="field-name">ContextID</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ContextID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetProperty"><code><span class="field-name">GetProperty</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/remoting/contexts/IContextProperty/" class="type-link">IContextProperty</a></code><a class="header-anchor" href="#GetProperty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [IContextProperty](/api-docs/unity/cs/system/runtime/remoting/contexts/IContextProperty/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetProperty"><code><span class="field-name">SetProperty</span><span class="parenthesis">(</span><span class="arg-name">prop</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/remoting/contexts/IContextProperty/" class="type-link">IContextProperty</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetProperty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `prop` | [IContextProperty](/api-docs/unity/cs/system/runtime/remoting/contexts/IContextProperty/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Freeze"><code><span class="field-name">Freeze</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Freeze"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DoCallBack"><code><span class="field-name">DoCallBack</span><span class="parenthesis">(</span><span class="arg-name">deleg</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/remoting/contexts/CrossContextDelegate/" class="type-link">CrossContextDelegate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#DoCallBack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `deleg` | [CrossContextDelegate](/api-docs/unity/cs/system/runtime/remoting/contexts/CrossContextDelegate/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

