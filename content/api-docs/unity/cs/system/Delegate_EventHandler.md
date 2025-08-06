---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Delegate_EventHandler
target: Unity
permalink: api-docs/unity/cs/system/Delegate_EventHandler/
---

# Delegate_EventHandler

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/Delegate/">Delegate</a> → <a href="/api-docs/unity/cs/system/MulticastDelegate/">MulticastDelegate</a> → <strong>cs.system.Delegate_EventHandler</strong> (extern final class)</div>

## Static Members

<div class="signature field-method no-description" id="op_Addition"><code><span class="field-name">op_Addition</span><span class="parenthesis">(</span><span class="arg-name">arg1</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventHandler/" class="type-link">EventHandler</a><span class="operator">,</span> <span class="arg-name">arg2</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventHandler/" class="type-link">EventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventHandler/" class="type-link">EventHandler</a></code><a class="header-anchor" href="#op_Addition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `arg1` | [EventHandler](/api-docs/unity/cs/system/EventHandler/) |
| `arg2` | [EventHandler](/api-docs/unity/cs/system/EventHandler/) |

| Returns |
|---------|
| [EventHandler](/api-docs/unity/cs/system/EventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Subtraction"><code><span class="field-name">op_Subtraction</span><span class="parenthesis">(</span><span class="arg-name">arg1</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventHandler/" class="type-link">EventHandler</a><span class="operator">,</span> <span class="arg-name">arg2</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventHandler/" class="type-link">EventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventHandler/" class="type-link">EventHandler</a></code><a class="header-anchor" href="#op_Subtraction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `arg1` | [EventHandler](/api-docs/unity/cs/system/EventHandler/) |
| `arg2` | [EventHandler](/api-docs/unity/cs/system/EventHandler/) |

| Returns |
|---------|
| [EventHandler](/api-docs/unity/cs/system/EventHandler/) |

## Instance Members

<div class="signature field-method no-description" id="Invoke"><code><span class="field-name">Invoke</span><span class="parenthesis">(</span><span class="arg-name">sender</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventArgs/" class="type-link">EventArgs</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Invoke"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sender` | [Dynamic](/api-docs/unity/Dynamic/) |
| `e` | [EventArgs](/api-docs/unity/cs/system/EventArgs/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="BeginInvoke"><code><span class="field-name">BeginInvoke</span><span class="parenthesis">(</span><span class="arg-name">sender</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventArgs/" class="type-link">EventArgs</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/AsyncCallback/" class="type-link">AsyncCallback</a><span class="operator">,</span> <span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IAsyncResult/" class="type-link">IAsyncResult</a></code><a class="header-anchor" href="#BeginInvoke"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sender` | [Dynamic](/api-docs/unity/Dynamic/) |
| `e` | [EventArgs](/api-docs/unity/cs/system/EventArgs/) |
| `callback` | [AsyncCallback](/api-docs/unity/cs/system/AsyncCallback/) |
| `object` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [IAsyncResult](/api-docs/unity/cs/system/IAsyncResult/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="EndInvoke"><code><span class="field-name">EndInvoke</span><span class="parenthesis">(</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IAsyncResult/" class="type-link">IAsyncResult</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#EndInvoke"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `result` | [IAsyncResult](/api-docs/unity/cs/system/IAsyncResult/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">method</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">IntPtr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `object` | [Dynamic](/api-docs/unity/Dynamic/) |
| `method` | [IntPtr](/api-docs/unity/cs/system/IntPtr/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

