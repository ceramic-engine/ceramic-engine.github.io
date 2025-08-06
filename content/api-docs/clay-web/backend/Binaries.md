---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Binaries
target: Clay (Web)
permalink: api-docs/clay-web/backend/Binaries/
---

# Binaries

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/Binaries.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Binaries</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/spec/Binaries/">spec.Binaries</a></div>

Clay backend implementation for loading binary data files.

This class handles loading of raw binary data from various sources including:
- Local filesystem (when available)
- HTTP/HTTPS URLs
- Application bundle resources

The implementation includes:
- Asynchronous loading with callback support
- Request deduplication (multiple requests for the same file share one load operation)
- Hot reload support for development
- Automatic path resolution relative to assets directory

<div class="see"><strong>See:</strong> spec.Binaries The interface this class implements, BinaryAsset For the high-level binary asset interface</div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="load"><div class="plugin-name">clay</div><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/backend/LoadBinaryOptions/" class="type-link">LoadBinaryOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">_done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads binary data from the specified path.

The path can be:
- Relative to the assets directory (e.g., "data/config.bin")
- Absolute filesystem path (e.g., "/usr/local/data/config.bin")
- HTTP/HTTPS URL (e.g., "https://example.com/data.bin")



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `path` | [String](/api-docs/clay-web/String/) | | Path to the binary file to load  |
| `options` | [Null](/api-docs/clay-web/Null/)<[LoadBinaryOptions](/api-docs/clay-web/backend/LoadBinaryOptions/)> | *(optional)* | Optional loading configuration (immediate callback execution)  |
| `_done` | Function | | Callback invoked with the loaded bytes data (null on error) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="supportsHotReloadPath"><div class="plugin-name">clay</div><code><span class="field-name">supportsHotReloadPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#supportsHotReloadPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates whether this backend supports hot reloading of binary files.
Clay backend always supports hot reload for development efficiency.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | true, indicating hot reload is supported |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">clay</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description has-plugin" id="loadingBinaryCallbacks"><div class="plugin-name">clay</div><code><span class="field-name">loadingBinaryCallbacks</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#loadingBinaryCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tracks pending load operations to prevent duplicate requests.
Maps file paths to arrays of callbacks waiting for that file.

