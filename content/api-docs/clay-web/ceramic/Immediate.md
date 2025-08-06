---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Immediate
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Immediate/
---

# Immediate

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Immediate.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Immediate</strong> (Class)</div>

A utility class for scheduling callbacks to be executed in a batch.

Immediate provides a simple queuing mechanism where callbacks can be scheduled
with `push()` and then all executed at once with `flush()`. This pattern is
useful for deferring work until a specific point in the application lifecycle,
such as at the end of a frame or after a batch of operations.

Key features:
- Efficient callback storage with pre-allocated capacity
- Safe execution that allows new callbacks to be added during flush
- Memory pooling to avoid allocations during flush operations
- Null callback protection

Common use cases:
- Deferring expensive operations until after critical path execution
- Batching multiple updates to avoid redundant calculations
- Implementing a simple event loop or task queue
- Ensuring callbacks run after the current call stack completes

Example usage:
```haxe
var immediate = new Immediate();

// Schedule some callbacks
immediate.push(() -> trace("First callback"));
immediate.push(() -> trace("Second callback"));

// Later, execute all callbacks
if (immediate.flush()) {
    trace("Callbacks were executed");
}

// Callbacks can add more callbacks during execution
immediate.push(() -> {
    trace("This callback adds another");
    immediate.push(() -> trace("Added during flush"));
});
immediate.flush(); // Both callbacks will execute
```

<div class="see"><strong>See:</strong> ceramic.App For the main application immediate queue, ceramic.Timer For time-based callback scheduling</div>


## Instance Members

<div class="signature field-method has-description" id="push"><code><span class="field-name">push</span><span class="parenthesis">(</span><span class="arg-name">handleImmediate</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#push"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedules a callback to be executed when `flush()` is called.

The callback will be added to the queue and executed in the order it was added
(FIFO - First In, First Out). Multiple callbacks can be queued before flushing.

The implementation uses a pre-allocated array that grows as needed, avoiding
unnecessary allocations for typical usage patterns.



| Name | Type | Description |
|------|------|-------------|
| `handleImmediate` | Function | The callback function to schedule. Must not be null.  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="flush"><code><span class="field-name">flush</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#flush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Executes all queued callbacks and clears the queue.

This method will execute callbacks in the order they were added. If any callback
adds new callbacks to the queue (by calling `push()`), those new callbacks will
also be executed in the same flush operation. This continues until no more
callbacks remain in the queue.

The implementation uses a temporary array from the pool to safely iterate through
callbacks while allowing the queue to be modified during execution.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | `true` if any callbacks were executed, `false` if the queue was empty |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Immediate instance with an empty callback queue.

## Private Members

<div class="signature field-var has-description" id="immediateCallbacks"><code><span class="field-name">immediateCallbacks</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#immediateCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array storing the queued callbacks. Pre-allocated for efficiency.

<hr class="field-separator" />

<div class="signature field-var has-description" id="immediateCallbacksCapacity"><code><span class="field-name">immediateCallbacksCapacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#immediateCallbacksCapacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current allocated capacity of the callbacks array.
Used to track when the array needs to grow.

<hr class="field-separator" />

<div class="signature field-var has-description" id="immediateCallbacksLen"><code><span class="field-name">immediateCallbacksLen</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#immediateCallbacksLen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of callbacks currently queued.
This may be less than the array capacity.

