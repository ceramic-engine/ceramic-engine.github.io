---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Timer
target: Unity
permalink: api-docs/unity/loreline/Timer/
---

# Timer

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Timer.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Timer</strong> (Class)</div>

Deferred timer system for non-blocking wait() on game-loop targets.

On sys targets, `deferredMode` starts false. Once the host calls
`update()` (or `enableDeferredMode()` directly), deferred mode is active
and wait() will register timers here instead of blocking with Sys.sleep().

For CLI/tool targets that never call update(), wait() falls back to
the blocking Sys.sleep() path automatically.

## Static Members

<div class="signature field-var has-description" id="deferredMode"><code><span class="field-name">deferredMode</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#deferredMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

True once the host's update loop has been connected.
Gates deferred vs. blocking wait() on sys targets.

<hr class="field-separator" />

<div class="signature field-method has-description" id="enableDeferredMode"><code><span class="field-name">enableDeferredMode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#enableDeferredMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Proactively enable deferred mode without ticking timers.
Call this before any interpreter work starts (e.g. in Loreline_createThread)
to avoid a race condition where wait() runs before the first update().

<hr class="field-separator" />

<div class="signature field-method has-description" id="register"><code><span class="field-name">register</span><span class="parenthesis">(</span><span class="arg-name">seconds</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#register"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Register a timer to fire `done` after `seconds` have elapsed.
Called by wait() when deferred mode is active.

| Name | Type |
|------|------|
| `seconds` | [Float](/api-docs/unity/Float/) |
| `done` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="update"><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tick all pending timers by `delta` seconds, firing any that have expired.
Call this every frame from your game loop. The first call also enables
deferred mode on sys targets.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/unity/Float/) | Time elapsed since the last frame in seconds. |

## Private Members

<div class="signature field-var no-description" id="timers"><code><span class="field-name">timers</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/_Timer/PendingTimer/" class="type-link">loreline._Timer.PendingTimer</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#timers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

