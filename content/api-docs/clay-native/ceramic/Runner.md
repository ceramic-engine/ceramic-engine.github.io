---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Runner
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Runner/
---

# Runner

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Runner.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Runner</strong> (Class)</div>

## Static Members

<div class="signature field-method has-description" id="currentIsMainThread"><code><span class="field-name">currentIsMainThread</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#currentIsMainThread"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the current thread is the main thread.

This method is useful for determining execution context and ensuring
thread-safe operations. On single-threaded platforms, this always
returns true.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | `true` if executing on the main thread, `false` otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isEmulatingBackgroundWithMain"><code><span class="field-name">isEmulatingBackgroundWithMain</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isEmulatingBackgroundWithMain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if background execution is emulated on the current platform.

Some platforms (like JavaScript/Web) don't support true threading, so
background execution is emulated using deferred callbacks on the main thread.
This method helps code adapt to platform capabilities.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | `true` if background threads are emulated (JS/Web), `false` if real threads are available (C++/C#) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="runInMain"><code><span class="field-name">runInMain</span><span class="parenthesis">(</span><span class="arg-name">_fn</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#runInMain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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

<div class="signature field-method has-description" id="runInBackground"><code><span class="field-name">runInBackground</span><span class="parenthesis">(</span><span class="arg-name">fn</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#runInBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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

<hr class="field-separator" />

<div class="signature field-method has-description" id="setThreadAffinity"><code><span class="field-name">setThreadAffinity</span><span class="parenthesis">(</span><span class="arg-name">affinity</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ThreadAffinity/" class="type-link">ThreadAffinity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#setThreadAffinity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Makes the calling thread run on the given kind of cores (see `ThreadAffinity`), on
devices whose cores are not all the same. On Android and Linux, the thread is
restricted to these cores; on iOS and macOS, it gets a quality of service class
that leads the system to them. Returns `true` if the choice was applied, `false`
where it has no effect (other platforms, cores all the same, cores not allowed to
the app right now).

Android may reset the cores of the threads of the app when it goes to the
background and comes back: a long-lived thread should apply its choice again from
time to time, for instance before each piece of work (the call is cheap).

| Name | Type |
|------|------|
| `affinity` | [ThreadAffinity](/api-docs/clay-native/ceramic/ThreadAffinity/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

## Private Members

<div class="signature field-var has-description" id="mainThread"><code><span class="field-name">mainThread</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/thread/Thread/" class="type-link">sys.thread.Thread</a></code><a class="header-anchor" href="#mainThread"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the main thread.
Set during initialization to identify the primary thread for callback execution.

<hr class="field-separator" />

<div class="signature field-var has-description" id="queue"><code><span class="field-name">queue</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/thread/Deque/" class="type-link">sys.thread.Deque</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#queue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thread-safe queue for storing callbacks to be executed on the main thread.
Background threads push callbacks here, and the main thread processes them during tick().

## Metadata

| Name | Parameters |
|------|------------|
| `:cppFileCode` | "\n#include <pthread.h>\n#include <pthread/qos.h>\n\nnamespace ceramic_thread_affinity {\n\n    // No affinity on Apple platforms: a quality of service class leads the scheduler to\n    // the performance or efficiency cores\n    static bool apply(int affinity, bool* first) {\n        *first = false;\n        qos_class_t qos = affinity == 1 ? QOS_CLASS_BACKGROUND : affinity == 0 ? QOS_CLASS_DEFAULT : QOS_CLASS_USER_INTERACTIVE;\n        return pthread_set_qos_class_self_np(qos, 0) == 0;\n    }\n\n    static const char* describe() {\n        return \"quality of service\";\n    }\n\n}\n" |

