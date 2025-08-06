---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: WatchDirectory
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/WatchDirectory/
---

# WatchDirectory

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/WatchDirectory.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <strong>ceramic.WatchDirectory</strong> (Class)</div>

A directory watcher that monitors file changes in specified directories.

This class provides cross-platform file system monitoring, detecting when files
are added, modified, or removed within watched directories. On Node.js platforms,
it can use the 'chokidar' library for efficient file watching if available,
otherwise it falls back to periodic polling.

Features:
- Monitor multiple directories simultaneously
- Detect file additions, modifications, and deletions
- Configurable update interval for polling mode
- Automatic cleanup when directories are unwatched

Example usage:
```haxe
var watcher = new WatchDirectory(1.0); // Check every second

watcher.onDirectoryChange(this, (path, newFiles, previousFiles) -> {
    trace("Directory changed: " + path);
    // Check for new files
    for (file => mtime in newFiles) {
        if (!previousFiles.exists(file)) {
            trace("New file: " + file);
        }
    }
});

watcher.watchDirectory("/path/to/assets");
```

Note: File watching may have platform-specific limitations and performance
characteristics. The chokidar integration provides better performance on
Node.js platforms when available.

## Instance Members

<div class="signature field-var has-description" id="updateInterval"><code><span class="field-name">updateInterval</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#updateInterval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The interval in seconds between directory checks when using polling mode.
This is ignored when using chokidar on Node.js platforms.

<hr class="field-separator" />

<div class="signature field-var has-description" id="watchedDirectories"><code><span class="field-name">watchedDirectories</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#watchedDirectories"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of watched directory paths to their current file modification times.
The outer map key is the directory path, the inner map contains filenames
mapped to their last modification timestamps.

<hr class="field-separator" />

<div class="signature field-method has-description" id="watchDirectory"><code><span class="field-name">watchDirectory</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#watchDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Start watching a directory for file changes.

The initial file list is computed asynchronously. Once ready, any subsequent
changes will trigger the directoryChange event.



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/clay-native/String/) | The absolute path to the directory to watch  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stopWatchingDirectory"><code><span class="field-name">stopWatchingDirectory</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#stopWatchingDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stop watching a directory.



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/clay-native/String/) | The directory path to stop watching  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | true if the directory was being watched and is now stopped, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">updateInterval</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new directory watcher.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `updateInterval` | [Float](/api-docs/clay-native/Float/) | `1.0` | The interval in seconds between directory checks (default: 1.0). Only used in polling mode; chokidar provides real-time updates. |

## Private Members

<div class="signature field-var no-description" id="startingToWatchDirectories"><code><span class="field-name">startingToWatchDirectories</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#startingToWatchDirectories"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitDirectoryChange"><code><span class="field-name">emitDirectoryChange</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">newFiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previousFiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDirectoryChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when files in a watched directory have changed.



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/clay-native/String/) | The directory path that changed  |
| `newFiles` | [ReadOnlyMap](/api-docs/clay-native/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-native/String/), [Float](/api-docs/clay-native/Float/)> | Map of current files to their modification times (Unix timestamp)  |
| `previousFiles` | [ReadOnlyMap](/api-docs/clay-native/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-native/String/), [Float](/api-docs/clay-native/Float/)> | Map of files to modification times before the change |

<hr class="field-separator" />

<div class="signature field-method has-description" id="tick"><code><span class="field-name">tick</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal method called periodically to check for file changes.
Only used in polling mode when chokidar is not available.

<hr class="field-separator" />

<div class="signature field-method has-description" id="checkWatchedDirectory"><code><span class="field-name">checkWatchedDirectory</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#checkWatchedDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check a specific watched directory for changes.
In chokidar mode, processes queued change events.
In polling mode, compares current files with cached state.



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/clay-native/String/) | The directory path to check |

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeFilesModificationTime"><code><span class="field-name">computeFilesModificationTime</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#computeFilesModificationTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute a map of all files in a directory with their modification times.



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/clay-native/String/) | The directory path to scan  |

| Returns | Description |
|---------|-------------|
| [ReadOnlyMap](/api-docs/clay-native/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-native/String/), [Float](/api-docs/clay-native/Float/)> | Map of relative file paths to modification timestamps |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

