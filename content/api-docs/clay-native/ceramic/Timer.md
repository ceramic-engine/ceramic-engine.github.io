---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Timer
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Timer/
---

# Timer

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Timer.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Timer</strong> (Class)</div>

Timer system for scheduling delayed and periodic callbacks.

The Timer class provides a central timing system that tracks application time
and allows scheduling callbacks to run after delays or at regular intervals.
All timers are synchronized with the main application update loop.

Time tracking:
- `Timer.now`: Application time in seconds since startup
- `Timer.timestamp`: Unix timestamp synchronized with application time

Basic usage:
```haxe
// Run callback after 2 seconds
Timer.delay(this, 2.0, () -> {
    trace("2 seconds elapsed");
});

// Run callback every 0.5 seconds
var cancel = Timer.interval(this, 0.5, () -> {
    trace("Tick!");
});

// Cancel the interval later
cancel();
```

Timers are automatically cancelled when their owner entity is destroyed,
preventing memory leaks and null reference errors.

## Static Members

<div class="signature field-var has-description" id="now"><code><span class="field-name">now</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#now"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current time, relative to app.
(number of active seconds since app was started)

This value is incremented by the frame delta each update,
providing a consistent time reference for the entire application.

<hr class="field-separator" />

<div class="signature field-var has-description" id="timestamp"><code><span class="field-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#timestamp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current unix time synchronized with ceramic Timer.
`Timer.now` and `Timer.timestamp` are guaranteed to get incremented
exactly at the same rate, except when app frame real delta > 1s
(number of seconds since January 1st, 1970)

Useful for timestamping events or synchronizing with external systems.

<hr class="field-separator" />

<div class="signature field-var has-description" id="startTimestamp"><code><span class="field-name">startTimestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#startTimestamp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The unix timestamp when the application started.
Used as the base for calculating the current timestamp.

<hr class="field-separator" />

<div class="signature field-method has-description" id="delay"><code><span class="field-name">delay</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">seconds</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Function</span></code><a class="header-anchor" href="#delay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Execute a callback after the given delay in seconds.



| Name | Type | Description |
|------|------|-------------|
| `owner` | [Null](/api-docs/clay-native/Null/)<[Entity](/api-docs/clay-native/ceramic/Entity/)> | Optional entity that owns this timer. If provided and the entity is destroyed, the timer is automatically cancelled.  |
| `seconds` | [Float](/api-docs/clay-native/Float/) | The delay in seconds before executing the callback  |
| `callback` | Function | The function to execute after the delay  |

| Returns | Description |
|---------|-------------|
| Function | A function that can be called to cancel this timer delay * Example: ```haxe // Simple delay Timer.delay(this, 1.0, () -> trace("1 second passed")); * // With cancellation var cancel = Timer.delay(this, 5.0, () -> startBossFight()); // Cancel if player dies if (playerDied) cancel(); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="interval"><code><span class="field-name">interval</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">seconds</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Function</span></code><a class="header-anchor" href="#interval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Execute a callback periodically at the given interval in seconds.



| Name | Type | Description |
|------|------|-------------|
| `owner` | [Null](/api-docs/clay-native/Null/)<[Entity](/api-docs/clay-native/ceramic/Entity/)> | Optional entity that owns this timer. If provided and the entity is destroyed, the timer is automatically cancelled.  |
| `seconds` | [Float](/api-docs/clay-native/Float/) | The interval in seconds between each callback execution  |
| `callback` | Function | The function to execute at each interval  |

| Returns | Description |
|---------|-------------|
| Function | A function that can be called to cancel this timer interval * Example: ```haxe // Update every frame (60 FPS) Timer.interval(this, 1/60, () -> updatePhysics()); * // Spawn enemy every 2 seconds var spawnTimer = Timer.interval(this, 2.0, () -> spawnEnemy()); * // Stop spawning after 10 seconds Timer.delay(this, 10.0, () -> spawnTimer()); ``` |

## Private Members

<div class="signature field-var no-description" id="callbacks"><code><span class="field-name">callbacks</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/TimerCallback/" class="type-link">TimerCallback</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#callbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="next"><code><span class="field-name">next</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="update"><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">realDelta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal method called by App to update timer state.


| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-native/Float/) | The frame time delta in seconds  |
| `realDelta` | [Float](/api-docs/clay-native/Float/) | The real time delta in seconds (unaffected by time scale) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="flush"><code><span class="field-name">flush</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#flush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Process all pending timer callbacks that are ready to execute.
Called automatically when timer callbacks are due.

<hr class="field-separator" />

<div class="signature field-method has-description" id="schedule"><code><span class="field-name">schedule</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">seconds</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">interval</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Function</span></code><a class="header-anchor" href="#schedule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal method to schedule a timer callback.


| Name | Type | Description |
|------|------|-------------|
| `owner` | [Entity](/api-docs/clay-native/ceramic/Entity/) | The entity that owns this timer (for auto-cleanup)  |
| `seconds` | [Float](/api-docs/clay-native/Float/) | Initial delay before first execution  |
| `callback` | Function | The function to execute  |
| `interval` | [Float](/api-docs/clay-native/Float/) | For repeating timers, the interval between executions. -1 for one-shot timers.  |

| Returns | Description |
|---------|-------------|
| Function | A function to cancel the timer |

