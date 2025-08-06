---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TrackerBackend
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/TrackerBackend/
---

# TrackerBackend

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TrackerBackend.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TrackerBackend</strong> (Class)</div>

Backend adapter that bridges the Tracker observable framework with Ceramic's backend services.

TrackerBackend provides a unified interface for the Tracker framework to access
platform-specific functionality through Ceramic's backend system. It handles
threading, persistence, logging, timers, and file system operations in a
platform-agnostic way.

This class is used internally by the Tracker framework and typically doesn't
need to be accessed directly by application code. It ensures that observable
objects and reactive systems can leverage Ceramic's full feature set.

Key responsibilities:
- **Scheduling**: Immediate callbacks and background execution
- **Persistence**: String-based key-value storage
- **Logging**: Warning, error, and success messages
- **Threading**: Background and main thread execution
- **Timers**: Intervals and delayed callbacks
- **File System**: Storage directory and path operations

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/tracker/Observable/">tracker.Observable</a>, <a href="/api-docs/clay-native/tracker/Tracker/">tracker.Tracker</a>, <a href="/api-docs/clay-native/ceramic/BackgroundQueue/">BackgroundQueue</a></div>


## Instance Members

<div class="signature field-method has-description" id="onceImmediate"><code><span class="field-name">onceImmediate</span><span class="parenthesis">(</span><span class="arg-name">handleImmediate</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#onceImmediate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedules a callback to run on the next frame or event loop iteration.

The callback is queued and will be executed during the next update cycle.
This is useful for deferring operations that should happen after the current
call stack completes.



| Name | Type | Description |
|------|------|-------------|
| `handleImmediate` | Function | The callback to schedule for immediate execution |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readString"><code><span class="field-name">readString</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#readString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read a string for the given key


| Name | Type | Description |
|------|------|-------------|
| `key` | [String](/api-docs/clay-native/String/) | the key to use  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | String or null of no string was found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="saveString"><code><span class="field-name">saveString</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#saveString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Save a string for the given key


| Name | Type | Description |
|------|------|-------------|
| `key` | [String](/api-docs/clay-native/String/) | the key to use  |
| `str` | [String](/api-docs/clay-native/String/) | the string to save  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | Bool `true` if the save was successful |

<hr class="field-separator" />

<div class="signature field-method has-description" id="appendString"><code><span class="field-name">appendString</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#appendString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Append a string on the given key. If the key doesn't exist,
creates a new one with the string to append.


| Name | Type | Description |
|------|------|-------------|
| `key` | [String](/api-docs/clay-native/String/) | the key to use  |
| `str` | [String](/api-docs/clay-native/String/) | the string to append  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | Bool `true` if the save was successful |

<hr class="field-separator" />

<div class="signature field-method has-description" id="warning"><code><span class="field-name">warning</span><span class="parenthesis">(</span><span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/PosInfos/" class="type-link">haxe.PosInfos</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#warning"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Log a warning message


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `message` | [Dynamic](/api-docs/clay-native/Dynamic/) | | the warning message |
| `pos` | [Null](/api-docs/clay-native/Null/)<[haxe.PosInfos](/api-docs/clay-native/haxe/PosInfos/)> | *(optional)* |  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="error"><code><span class="field-name">error</span><span class="parenthesis">(</span><span class="arg-name">error</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/PosInfos/" class="type-link">haxe.PosInfos</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#error"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Log an error message


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `error` | [Dynamic](/api-docs/clay-native/Dynamic/) | | the error message |
| `pos` | [Null](/api-docs/clay-native/Null/)<[haxe.PosInfos](/api-docs/clay-native/haxe/PosInfos/)> | *(optional)* |  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="success"><code><span class="field-name">success</span><span class="parenthesis">(</span><span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/PosInfos/" class="type-link">haxe.PosInfos</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#success"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Log a success message


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `message` | [Dynamic](/api-docs/clay-native/Dynamic/) | | the success message |
| `pos` | [Null](/api-docs/clay-native/Null/)<[haxe.PosInfos](/api-docs/clay-native/haxe/PosInfos/)> | *(optional)* |  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="runInBackground"><code><span class="field-name">runInBackground</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#runInBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Executes a callback on a background thread when available.

On platforms with threading support, the callback runs on a separate thread.
On single-threaded platforms (like web), the callback is queued and executed
on the main thread to maintain compatibility.

Use this for CPU-intensive operations that shouldn't block the UI.



| Name | Type | Description |
|------|------|-------------|
| `callback` | Function | The function to execute in the background |

<hr class="field-separator" />

<div class="signature field-method has-description" id="runInMain"><code><span class="field-name">runInMain</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#runInMain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedules a callback to run on the main thread.

If called from a background thread, the callback is queued for execution
on the main thread. If already on the main thread, the callback may be
executed immediately or queued depending on the implementation.

Essential for updating UI or accessing main-thread-only resources from
background threads.



| Name | Type | Description |
|------|------|-------------|
| `callback` | Function | The function to execute on the main thread |

<hr class="field-separator" />

<div class="signature field-method has-description" id="interval"><code><span class="field-name">interval</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">seconds</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Function</span></code><a class="header-anchor" href="#interval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Execute a callback periodically at the given interval in seconds.


| Name | Type | Description |
|------|------|-------------|
| `owner` | [Entity](/api-docs/clay-native/ceramic/Entity/) | The entity that owns this interval  |
| `seconds` | [Float](/api-docs/clay-native/Float/) | The time in seconds between each call  |
| `callback` | Function | The callback to call  |

| Returns | Description |
|---------|-------------|
| Function | Void->Void A callback to cancel the interval |

<hr class="field-separator" />

<div class="signature field-method has-description" id="delay"><code><span class="field-name">delay</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">seconds</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Function</span></code><a class="header-anchor" href="#delay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Execute a callback after the given delay in seconds.


| Name | Type | Description |
|------|------|-------------|
| `owner` | [Entity](/api-docs/clay-native/ceramic/Entity/) | The entity that owns this delayed call  |
| `seconds` | [Float](/api-docs/clay-native/Float/) | The time in seconds of delay before the call  |
| `callback` | Function | The callback to call  |

| Returns | Description |
|---------|-------------|
| Function | Void->Void A callback to cancel the delayed call |

<hr class="field-separator" />

<div class="signature field-method has-description" id="storageDirectory"><code><span class="field-name">storageDirectory</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#storageDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the platform-specific storage directory for persistent data.

Returns a writable directory path where the application can store
user data, save files, and preferences. The location varies by platform:
- Desktop: User's app data directory
- Mobile: App's private storage
- Web: May return null (use other storage methods)


| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-native/Null/)<[String](/api-docs/clay-native/String/)> | The storage directory path, or null if not available |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pathJoin"><code><span class="field-name">pathJoin</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#pathJoin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Joins multiple path segments into a single path string.

Handles platform-specific path separators and resolves relative paths.
Useful for building file paths in a cross-platform way.

Example:
```haxe
pathJoin(["assets", "images", "player.png"]); // "assets/images/player.png"
```



| Name | Type | Description |
|------|------|-------------|
| `paths` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> | Array of path segments to join  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | The combined path with appropriate separators |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new TrackerBackend instance.
Initializes the background queue for task scheduling.

## Private Members

<div class="signature field-var has-description" id="backgroundQueue"><code><span class="field-name">backgroundQueue</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/BackgroundQueue/" class="type-link">BackgroundQueue</a></code><a class="header-anchor" href="#backgroundQueue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Queue for managing background task execution.
Handles scheduling and execution of tasks on background threads when available.

