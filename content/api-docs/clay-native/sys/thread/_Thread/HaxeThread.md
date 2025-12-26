---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: HaxeThread
target: Clay (Native)
permalink: api-docs/clay-native/sys/thread/_Thread/HaxeThread/
---

# HaxeThread

<div class="type-hierarchy"><strong>sys.thread._Thread.HaxeThread</strong> (private class)</div>

## Static Members

<div class="signature field-method no-description" id="current"><code><span class="field-name">current</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">HaxeThread</a></code><a class="header-anchor" href="#current"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [HaxeThread](/api-docs/clay-native/sys/thread/_Thread/HaxeThread/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="create"><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="arg-name">job</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">withEventLoop</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/thread/Thread/" class="type-link">sys.thread.Thread</a></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `job` | Function |
| `withEventLoop` | [Bool](/api-docs/clay-native/Bool/) |

| Returns |
|---------|
| [sys.thread.Thread](/api-docs/clay-native/sys/thread/Thread/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="readMessage"><code><span class="field-name">readMessage</span><span class="parenthesis">(</span><span class="arg-name">block</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#readMessage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `block` | [Bool](/api-docs/clay-native/Bool/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-native/Dynamic/) |

## Instance Members

<div class="signature field-var no-description" id="events"><code><span class="field-name">events</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/sys/thread/EventLoop/" class="type-link">sys.thread.EventLoop</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#events"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="handle"><code><span class="field-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/thread/_Thread/ThreadHandle/" class="type-link">ThreadHandle</a></code><a class="header-anchor" href="#handle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="sendMessage"><code><span class="field-name">sendMessage</span><span class="parenthesis">(</span><span class="arg-name">msg</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sendMessage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `msg` | [Dynamic](/api-docs/clay-native/Dynamic/) |

## Private Members

<div class="signature field-var no-description" id="threads"><code><span class="field-name">threads</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">AnonStruct</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#threads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="threadsMutex"><code><span class="field-name">threadsMutex</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/thread/Mutex/" class="type-link">sys.thread.Mutex</a></code><a class="header-anchor" href="#threadsMutex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="mainThreadHandle"><code><span class="field-name">mainThreadHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/thread/_Thread/ThreadHandle/" class="type-link">ThreadHandle</a></code><a class="header-anchor" href="#mainThreadHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="mainThread"><code><span class="field-name">mainThread</span><span class="operator">:</span> <a href="#" class="type-link">HaxeThread</a></code><a class="header-anchor" href="#mainThread"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="messages"><code><span class="field-name">messages</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/thread/Deque/" class="type-link">sys.thread.Deque</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#messages"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="dropThread"><code><span class="field-name">dropThread</span><span class="parenthesis">(</span><span class="arg-name">item</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="operator">,</span> <span class="arg-name">probableIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dropThread"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `item` | AnonStruct |
| `probableIndex` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="currentHandle"><code><span class="field-name">currentHandle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/thread/_Thread/ThreadHandle/" class="type-link">ThreadHandle</a></code><a class="header-anchor" href="#currentHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ThreadHandle](/api-docs/clay-native/sys/thread/_Thread/ThreadHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="createHandle"><code><span class="field-name">createHandle</span><span class="parenthesis">(</span><span class="arg-name">callb</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/thread/_Thread/ThreadHandle/" class="type-link">ThreadHandle</a></code><a class="header-anchor" href="#createHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `callb` | Function |

| Returns |
|---------|
| [ThreadHandle](/api-docs/clay-native/sys/thread/_Thread/ThreadHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">h</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/thread/_Thread/ThreadHandle/" class="type-link">ThreadHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `h` | [ThreadHandle](/api-docs/clay-native/sys/thread/_Thread/ThreadHandle/) |

