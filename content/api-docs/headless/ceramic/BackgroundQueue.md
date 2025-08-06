---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: BackgroundQueue
target: Headless
permalink: api-docs/headless/ceramic/BackgroundQueue/
---

# BackgroundQueue

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/BackgroundQueue.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <strong>ceramic.BackgroundQueue</strong> (Class)</div>

A thread-safe queue for executing functions serially in a background thread.

BackgroundQueue provides a mechanism to offload work from the main thread while ensuring
that queued functions execute one at a time in the order they were scheduled. This is
useful for operations that should not block the main thread but need to maintain
sequential execution order.

## Features

- **Serial Execution**: Functions are executed one after another, never in parallel
- **Thread Safety**: Safe to schedule functions from any thread
- **Platform Adaptive**: Falls back to main thread execution on platforms without threading
- **Automatic Cleanup**: Stops background thread when destroyed

## Usage Example

```haxe
var queue = new BackgroundQueue();

// Schedule work to run in background
queue.schedule(() -> {
    // Perform expensive computation
    var result = processLargeDataSet();
    // Post result back to main thread
    app.onceImmediate(() -> {
        updateUI(result);
    });
});

// Multiple operations execute in order
queue.schedule(() -> loadFile("data1.json"));
queue.schedule(() -> loadFile("data2.json"));
queue.schedule(() -> processAllData());
```

## Platform Support

- **C++/C#**: Uses native threading with mutex synchronization
- **JavaScript/Other**: Falls back to immediate execution on main thread

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/Runner/">Runner</a></div>


## Instance Members

<div class="signature field-var has-description" id="checkInterval"><code><span class="field-name">checkInterval</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#checkInterval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Time interval between each checks to see if there is something to run.
Lower values provide more responsive execution at the cost of higher CPU usage.

Default: 0.1 seconds (100ms)

<hr class="field-separator" />

<div class="signature field-method has-description" id="schedule"><code><span class="field-name">schedule</span><span class="parenthesis">(</span><span class="arg-name">fn</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#schedule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedules a function to be executed in the background queue.

Functions are executed in the order they are scheduled, with each function
completing before the next one starts. On platforms without threading,
the function is executed immediately on the main thread.



| Name | Type | Description |
|------|------|-------------|
| `fn` | Function | The function to execute in the background * ```haxe queue.schedule(() -> { // This runs in background thread var data = loadLargeFile(); processData(data); }); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys the background queue and stops its thread.

Sets the stop flag which causes the background thread to exit its
main loop. Any pending functions that have not yet started will
not be executed.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">checkInterval</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new background queue.

On platforms with threading support (C++/C#), starts a background thread
that polls for work at the specified interval.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `checkInterval` | [Float](/api-docs/headless/Float/) | `0.1` | Time in seconds between queue checks (default: 0.1) |

## Private Members

<div class="signature field-var has-description" id="runsInBackground"><code><span class="field-name">runsInBackground</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#runsInBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this queue is running functions in a background thread.
False on platforms without threading support.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stop"><code><span class="field-name">stop</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag to signal the background thread to stop.
Set to true when destroy() is called.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pending"><code><span class="field-name">pending</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#pending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Queue of functions waiting to be executed.
Protected by mutex on threaded platforms.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

