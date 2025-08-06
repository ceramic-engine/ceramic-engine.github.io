---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: FileWatcher
target: Unity
permalink: api-docs/unity/ceramic/FileWatcher/
---

# FileWatcher

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/FileWatcher.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <strong>ceramic.FileWatcher</strong> (Class)</div>

Cross-platform file monitoring system for hot-reloading and file change detection.

FileWatcher provides a unified API for monitoring file changes across different platforms
including native (sys), Node.js, and Electron environments. It periodically checks for
file modifications and notifies registered callbacks when changes are detected.

The watcher can operate in two modes:
- Content checking mode (default): Compares actual file content to detect changes
- Timestamp mode: Only checks modification time (faster but less reliable)

This implementation is compatible with the interpret.Watcher interface, allowing it
to be used with scripting and hot-reload systems.

Example:
```haxe
var watcher = new FileWatcher();
var stopWatching = watcher.watch("config.json", function(content) {
    trace("Config file changed: " + content);
});

// Later, to stop watching:
stopWatching();
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/Entity/">Entity</a></div>


## Static Members

<div class="signature field-var has-description" id="UPDATE_INTERVAL"><code><span class="field-name">UPDATE_INTERVAL</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#UPDATE_INTERVAL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The interval in seconds between file checks.
Lower values provide faster detection but use more CPU.
Default: 1.0 second

## Instance Members

<div class="signature field-method has-description" id="canWatch"><code><span class="field-name">canWatch</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canWatch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if file watching is supported on the current platform.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if the platform supports file watching, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="watch"><code><span class="field-name">watch</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">onUpdate</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Function</span></code><a class="header-anchor" href="#watch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starts watching a file for changes.

Multiple callbacks can be registered for the same file. Each callback
receives the new file content when a change is detected.

Example:
```haxe
var stop = watcher.watch("data.txt", function(content) {
    trace("File updated with content: " + content);
});
```



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/unity/String/) | The file path to watch  |
| `onUpdate` | Function | Callback function that receives the new file content  |

| Returns | Description |
|---------|-------------|
| Function | A function that stops watching when called |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description" id="checkContent"><code><span class="field-name">checkContent</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to compare actual file content or just modification times.

When true (default), the watcher reads and compares file content to detect
changes, which is more reliable but slower. When false, only modification
timestamps are checked, which is faster but may miss some changes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="watched"><code><span class="field-name">watched</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#watched"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of file paths to their watched state information.

<hr class="field-separator" />

<div class="signature field-var has-description" id="timeSinceLastCheck"><code><span class="field-name">timeSinceLastCheck</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#timeSinceLastCheck"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Accumulator for time since last file check.

<hr class="field-separator" />

<div class="signature field-method has-description" id="tick"><code><span class="field-name">tick</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Update tick called by the app's update loop.
Checks all watched files for changes at the configured interval.

| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isFile"><code><span class="field-name">isFile</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a path points to a regular file (not a directory).



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/unity/String/) | The path to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if the path is a file, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lastModified"><code><span class="field-name">lastModified</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lastModified"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the last modification time of a file.



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/unity/String/) | The file path  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | Modification time in milliseconds since epoch, or -1 if unavailable |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getContent"><code><span class="field-name">getContent</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#getContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads the content of a file as a string.



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/unity/String/) | The file path  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | The file content, or null if unavailable |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

