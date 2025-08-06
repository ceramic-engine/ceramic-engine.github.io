---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Texts
target: Clay (Web)
permalink: api-docs/clay-web/backend/Texts/
---

# Texts

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/Texts.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Texts</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/spec/Texts/">spec.Texts</a></div>

Clay backend implementation for loading text files.

This class handles loading of text-based resources from various sources:
- Local filesystem (when available)
- HTTP/HTTPS URLs
- Application bundle resources

Features:
- Asynchronous and synchronous loading modes
- Request deduplication to prevent redundant loads
- Hot reload support for development
- Automatic UTF-8 text decoding
- URL query parameter stripping for cache busting

Common text file types include JSON, XML, configuration files,
shader source code, and other text-based assets.

<div class="see"><strong>See:</strong> spec.Texts The interface this class implements, TextAsset For the high-level text asset interface</div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="load"><div class="plugin-name">clay</div><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/backend/LoadTextOptions/" class="type-link">LoadTextOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">_done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads text content from the specified path.

The path can be:
- Relative to the assets directory (e.g., "data/config.json")
- Absolute filesystem path (e.g., "/usr/local/data/config.txt")
- HTTP/HTTPS URL (e.g., "https://example.com/data.json")

Multiple requests for the same path are automatically deduplicated,
with all callbacks being notified when the load completes.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `path` | [String](/api-docs/clay-web/String/) | | Path to the text file to load  |
| `options` | [Null](/api-docs/clay-web/Null/)<[LoadTextOptions](/api-docs/clay-web/backend/LoadTextOptions/)> | *(optional)* | Optional loading configuration (sync/async, immediate queue)  |
| `_done` | Function | | Callback invoked with the loaded text (null on error) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="supportsHotReloadPath"><div class="plugin-name">clay</div><code><span class="field-name">supportsHotReloadPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#supportsHotReloadPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates whether this backend supports hot reloading of text files.
Clay backend always supports hot reload for development efficiency.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | true, indicating hot reload is supported |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">clay</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description has-plugin" id="loadingTextCallbacks"><div class="plugin-name">clay</div><code><span class="field-name">loadingTextCallbacks</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#loadingTextCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tracks pending load operations to prevent duplicate requests.
Maps file paths to arrays of callbacks waiting for that file.

