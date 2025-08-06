---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: WaitHandle
target: Unity
permalink: api-docs/unity/cs/system/threading/WaitHandle/
---

# WaitHandle

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/MarshalByRefObject/">cs.system.MarshalByRefObject</a> → <strong>cs.system.threading.WaitHandle</strong> (extern class) → <a href="/api-docs/unity/cs/system/diagnostics/Process_ProcessWaitHandle/">cs.system.diagnostics.Process_ProcessWaitHandle</a>, <a href="/api-docs/unity/cs/system/threading/EventWaitHandle/">EventWaitHandle</a>, <a href="/api-docs/unity/cs/system/threading/Mutex/">Mutex</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/IDisposable/">cs.system.IDisposable</a></div>

## Static Members

<div class="signature field-var no-description" id="InvalidHandle"><code><span class="field-name">InvalidHandle</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a></code><a class="header-anchor" href="#InvalidHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="WaitTimeout"><code><span class="field-name">WaitTimeout</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#WaitTimeout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="WaitAll"><code><span class="field-name">WaitAll</span><span class="parenthesis">(</span><span class="arg-name">waitHandles</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="#" class="type-link">WaitHandle</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#WaitAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `waitHandles` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[WaitHandle](/api-docs/unity/cs/system/threading/WaitHandle/)> |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="WaitAny"><code><span class="field-name">WaitAny</span><span class="parenthesis">(</span><span class="arg-name">waitHandles</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="#" class="type-link">WaitHandle</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#WaitAny"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `waitHandles` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[WaitHandle](/api-docs/unity/cs/system/threading/WaitHandle/)> |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SignalAndWait"><code><span class="field-name">SignalAndWait</span><span class="parenthesis">(</span><span class="arg-name">toSignal</span><span class="operator">:</span> <a href="#" class="type-link">WaitHandle</a><span class="operator">,</span> <span class="arg-name">toWaitOn</span><span class="operator">:</span> <a href="#" class="type-link">WaitHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#SignalAndWait"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `toSignal` | [WaitHandle](/api-docs/unity/cs/system/threading/WaitHandle/) |
| `toWaitOn` | [WaitHandle](/api-docs/unity/cs/system/threading/WaitHandle/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Instance Members

<div class="signature field-var no-description" id="SafeWaitHandle"><code><span class="field-name">SafeWaitHandle</span><span class="operator">:</span> <a href="/api-docs/unity/microsoft/win32/safehandles/SafeWaitHandle/" class="type-link">microsoft.win32.safehandles.SafeWaitHandle</a></code><a class="header-anchor" href="#SafeWaitHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Handle"><code><span class="field-name">Handle</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a></code><a class="header-anchor" href="#Handle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Close"><code><span class="field-name">Close</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="WaitOne"><code><span class="field-name">WaitOne</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#WaitOne"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

