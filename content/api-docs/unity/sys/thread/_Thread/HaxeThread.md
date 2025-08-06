---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: HaxeThread
target: Unity
permalink: api-docs/unity/sys/thread/_Thread/HaxeThread/
---

# HaxeThread

<div class="type-hierarchy"><strong>sys.thread._Thread.HaxeThread</strong> (private class)</div>

## Static Members

<div class="signature field-method no-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">native</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/threading/_Thread/NativeThread/" class="type-link">cs.system.threading._Thread.NativeThread</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">HaxeThread</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `native` | [cs.system.threading._Thread.NativeThread](/api-docs/unity/cs/system/threading/_Thread/NativeThread/) |

| Returns |
|---------|
| [HaxeThread](/api-docs/unity/sys/thread/_Thread/HaxeThread/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="allocate"><code><span class="field-name">allocate</span><span class="parenthesis">(</span><span class="arg-name">native</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/threading/_Thread/NativeThread/" class="type-link">cs.system.threading._Thread.NativeThread</a><span class="operator">,</span> <span class="arg-name">withEventLoop</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">HaxeThread</a></code><a class="header-anchor" href="#allocate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `native` | [cs.system.threading._Thread.NativeThread](/api-docs/unity/cs/system/threading/_Thread/NativeThread/) |
| `withEventLoop` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [HaxeThread](/api-docs/unity/sys/thread/_Thread/HaxeThread/) |

## Instance Members

<div class="signature field-var no-description" id="native"><code><span class="field-name">native</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/threading/_Thread/NativeThread/" class="type-link">cs.system.threading._Thread.NativeThread</a></code><a class="header-anchor" href="#native"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="events"><code><span class="field-name">events</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/sys/thread/EventLoop/" class="type-link">sys.thread.EventLoop</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#events"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="mainNativeThread"><code><span class="field-name">mainNativeThread</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/threading/_Thread/NativeThread/" class="type-link">cs.system.threading._Thread.NativeThread</a></code><a class="header-anchor" href="#mainNativeThread"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="mainHaxeThread"><code><span class="field-name">mainHaxeThread</span><span class="operator">:</span> <a href="#" class="type-link">HaxeThread</a></code><a class="header-anchor" href="#mainHaxeThread"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="threads"><code><span class="field-name">threads</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#threads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="threadsMutex"><code><span class="field-name">threadsMutex</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/threading/_Mutex/NativeMutex/" class="type-link">cs.system.threading._Mutex.NativeMutex</a></code><a class="header-anchor" href="#threadsMutex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="allocateCount"><code><span class="field-name">allocateCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#allocateCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">native</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/threading/_Thread/NativeThread/" class="type-link">cs.system.threading._Thread.NativeThread</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `native` | [cs.system.threading._Thread.NativeThread](/api-docs/unity/cs/system/threading/_Thread/NativeThread/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

