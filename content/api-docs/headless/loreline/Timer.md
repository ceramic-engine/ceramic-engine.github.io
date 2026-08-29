---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Timer
target: Headless
permalink: api-docs/headless/loreline/Timer/
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

<div class="signature field-method has-description" id="register"><code><span class="field-name">register</span><span class="parenthesis">(</span><span class="arg-name">seconds</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#register"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Register a timer to fire `done` after `seconds` have elapsed.
Called by wait() when deferred mode is active.

| Name | Type |
|------|------|
| `seconds` | [Float](/api-docs/headless/Float/) |
| `done` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="update"><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tick all pending timers by `delta` seconds, firing any that have expired.
Call this every frame from your game loop. The first call also enables
deferred mode on sys targets.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/headless/Float/) | Time elapsed since the last frame in seconds. |

## Private Members

<div class="signature field-var no-description" id="timers"><code><span class="field-name">timers</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/_Timer/PendingTimer/" class="type-link">loreline._Timer.PendingTimer</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#timers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

