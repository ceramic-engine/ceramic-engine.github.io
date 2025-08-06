---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Runner
target: Unity
permalink: api-docs/unity/ceramic/Runner/
---

# Runner

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Runner.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Runner</strong> (Class)</div>

Cross-platform thread management utility for executing code on main and background threads.

Runner provides a simple interface for thread management in Ceramic, supporting both
platforms with native threading (C++/C#) and single-threaded environments (JS/Web).
It ensures safe execution of code on the main thread from background threads and
vice versa.

Key features:
- Main thread callback execution from background threads
- Background thread creation on supported platforms
- Graceful fallback to deferred execution on single-threaded platforms
- Thread-safe queue for main thread callbacks

Platform behavior:
- **C++/C#**: Full threading support with real background threads
- **JS/Web**: Emulates background execution using immediate callbacks

Usage example:
```haxe
// Initialize on app start (main thread)
Runner.init();

// In your main loop
Runner.tick();

// Run heavy computation in background
Runner.runInBackground(() -> {
    var result = performHeavyCalculation();
    // Update UI on main thread
    Runner.runInMain(() -> {
        updateUI(result);
    });
});
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/App/">App</a>, <a href="/api-docs/unity/ceramic/System/">System</a></div>


## Static Members

<div class="signature field-method has-description" id="currentIsMainThread"><code><span class="field-name">currentIsMainThread</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#currentIsMainThread"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the current thread is the main thread.

This method is useful for determining execution context and ensuring
thread-safe operations. On single-threaded platforms, this always
returns true.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | `true` if executing on the main thread, `false` otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isEmulatingBackgroundWithMain"><code><span class="field-name">isEmulatingBackgroundWithMain</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isEmulatingBackgroundWithMain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if background execution is emulated on the current platform.

Some platforms (like JavaScript/Web) don't support true threading, so
background execution is emulated using deferred callbacks on the main thread.
This method helps code adapt to platform capabilities.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | `true` if background threads are emulated (JS/Web), `false` if real threads are available (C++/C#) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="runInMain"><code><span class="field-name">runInMain</span><span class="parenthesis">(</span><span class="arg-name">_fn</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#runInMain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedules a function to run on the main thread.

This method queues the given function for execution on the main thread.
The function will be executed during the next `tick()` call. This is
particularly useful for updating UI or accessing main-thread-only resources
from background threads.

The call is non-blocking and doesn't wait for the function to complete.

Example:
```haxe
Runner.runInMain(() -> {
    myVisual.alpha = 0.5; // Safe UI update
});
```



| Name | Type | Description |
|------|------|-------------|
| `_fn` | Function | The function to execute on the main thread |

<hr class="field-separator" />

<div class="signature field-method has-description" id="runInBackground"><code><span class="field-name">runInBackground</span><span class="parenthesis">(</span><span class="arg-name">fn</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#runInBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Executes a function on a background thread.

On platforms with threading support (C++/C#), this creates a new thread
to execute the function. On single-threaded platforms (JS/Web), the
function is scheduled for deferred execution on the main thread.

This is useful for offloading heavy computations or I/O operations
without blocking the main thread.

Example:
```haxe
Runner.runInBackground(() -> {
    // Heavy computation
    var data = processLargeDataset();
    // Return result to main thread
    Runner.runInMain(() -> {
        handleProcessedData(data);
    });
});
```



| Name | Type | Description |
|------|------|-------------|
| `fn` | Function | The function to execute in the background |

## Private Members

<div class="signature field-var has-description" id="mainThread"><code><span class="field-name">mainThread</span><span class="operator">:</span> <a href="/api-docs/unity/sys/thread/Thread/" class="type-link">sys.thread.Thread</a></code><a class="header-anchor" href="#mainThread"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the main thread.
Set during initialization to identify the primary thread for callback execution.

<hr class="field-separator" />

<div class="signature field-var has-description" id="queue"><code><span class="field-name">queue</span><span class="operator">:</span> <a href="/api-docs/unity/sys/thread/Deque/" class="type-link">sys.thread.Deque</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#queue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thread-safe queue for storing callbacks to be executed on the main thread.
Background threads push callbacks here, and the main thread processes them during tick().

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

