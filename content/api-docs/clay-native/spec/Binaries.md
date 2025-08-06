---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spec
title: Binaries
target: Clay (Native)
permalink: api-docs/clay-native/spec/Binaries/
---

# Binaries

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/spec/Binaries.hx">View source</a></div>

<div class="type-hierarchy"><strong>spec.Binaries</strong> (Interface) → <a href="/api-docs/clay-native/backend/Binaries/">backend.Binaries</a></div>

Backend interface for binary data loading operations.

This interface handles loading raw binary files from various sources (disk, network, embedded).
Binary data is returned as Haxe Bytes objects, which provide cross-platform byte array handling.

Used by the BinaryAsset class and other systems that need raw file access.

## Instance Members

<div class="signature field-method has-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/backend/LoadBinaryOptions/" class="type-link">backend.LoadBinaryOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads binary data from the specified path.
The path is relative to the assets directory unless it's an absolute path or URL.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `path` | [String](/api-docs/clay-native/String/) | | The path to the binary file to load  |
| `options` | [Null](/api-docs/clay-native/Null/)<[backend.LoadBinaryOptions](/api-docs/clay-native/backend/LoadBinaryOptions/)> | *(optional)* | Optional loading configuration (caching, hot-reload, etc.)  |
| `done` | Function | | Callback invoked with the loaded Bytes data or null on failure |

<hr class="field-separator" />

<div class="signature field-method has-description" id="supportsHotReloadPath"><code><span class="field-name">supportsHotReloadPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#supportsHotReloadPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the backend supports hot-reloading of binary files.
When true, files can include a `?hot=timestamp` query parameter to bypass caching
and force reloading when the file changes during development.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if hot-reload paths are supported, false otherwise |

