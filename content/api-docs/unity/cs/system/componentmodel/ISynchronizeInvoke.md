---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: ISynchronizeInvoke
target: Unity
permalink: api-docs/unity/cs/system/componentmodel/ISynchronizeInvoke/
---

# ISynchronizeInvoke

<div class="type-hierarchy"><strong>cs.system.componentmodel.ISynchronizeInvoke</strong> (extern interface)</div>

## Instance Members

<div class="signature field-var no-description" id="InvokeRequired"><code><span class="field-name">InvokeRequired</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#InvokeRequired"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="BeginInvoke"><code><span class="field-name">BeginInvoke</span><span class="parenthesis">(</span><span class="arg-name">method</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Delegate/" class="type-link">cs.system.Delegate</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IAsyncResult/" class="type-link">cs.system.IAsyncResult</a></code><a class="header-anchor" href="#BeginInvoke"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `method` | [cs.system.Delegate](/api-docs/unity/cs/system/Delegate/) |
| `args` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Dynamic](/api-docs/unity/Dynamic/)> |

| Returns |
|---------|
| [cs.system.IAsyncResult](/api-docs/unity/cs/system/IAsyncResult/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="EndInvoke"><code><span class="field-name">EndInvoke</span><span class="parenthesis">(</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IAsyncResult/" class="type-link">cs.system.IAsyncResult</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#EndInvoke"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `result` | [cs.system.IAsyncResult](/api-docs/unity/cs/system/IAsyncResult/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Invoke"><code><span class="field-name">Invoke</span><span class="parenthesis">(</span><span class="arg-name">method</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Delegate/" class="type-link">cs.system.Delegate</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#Invoke"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `method` | [cs.system.Delegate](/api-docs/unity/cs/system/Delegate/) |
| `args` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Dynamic](/api-docs/unity/Dynamic/)> |

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

