---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Runner
target: Clay (Native)
permalink: api-docs/clay-native/clay/Runner/
---

# Runner

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/Runner.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.Runner</strong> (Class)</div>

A simple Haxe class for easily running threads and calling functions on the primary thread.
from https://github.com/underscorediscovery/

Usage:
- call Runner.init() from your primary thread
- call Runner.tick() periodically to service callbacks (i.e inside your main loop)
- use Runner.thread(function() { ... }) to make a thread
- use Runner.runInMainThread(function() { ... }) to run code on the main thread
- use runInMainThreadBlocking to run code on the main thread and wait for the return value

## Static Members

<div class="signature field-method has-description" id="currentIsMainThread"><code><span class="field-name">currentIsMainThread</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#currentIsMainThread"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if current running thread is main thread

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | Bool |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isEmulatingBackgroundWithMain"><code><span class="field-name">isEmulatingBackgroundWithMain</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isEmulatingBackgroundWithMain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if _running in background_ is emulated on this platform by
running _background_ code in main thread instead of using background thread.
| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="runInMain"><code><span class="field-name">runInMain</span><span class="parenthesis">(</span><span class="arg-name">_fn</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#runInMain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Call a function on the primary thread without waiting or blocking.
If you want return values see runInMainBlocking

| Name | Type |
|------|------|
| `_fn` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="runInBackground"><code><span class="field-name">runInBackground</span><span class="parenthesis">(</span><span class="arg-name">fn</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#runInBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a background thread using the given function, or just run (deferred) the function if threads are not supported

| Name | Type |
|------|------|
| `fn` | Function |

## Private Members

<div class="signature field-var no-description" id="mainThread"><code><span class="field-name">mainThread</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/thread/Thread/" class="type-link">sys.thread.Thread</a></code><a class="header-anchor" href="#mainThread"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="queue"><code><span class="field-name">queue</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/thread/Deque/" class="type-link">sys.thread.Deque</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#queue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

