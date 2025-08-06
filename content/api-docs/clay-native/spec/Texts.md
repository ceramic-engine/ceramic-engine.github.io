---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spec
title: Texts
target: Clay (Native)
permalink: api-docs/clay-native/spec/Texts/
---

# Texts

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/spec/Texts.hx">View source</a></div>

<div class="type-hierarchy"><strong>spec.Texts</strong> (Interface) → <a href="/api-docs/clay-native/backend/Texts/">backend.Texts</a></div>

Backend interface for text file loading operations.

This interface handles loading text files from various sources. Text files
are loaded as UTF-8 encoded strings and include any file type marked as
text by the backend (txt, json, xml, etc.).

The interface is separate from Binaries to allow backends to optimize
text handling differently from binary data, such as applying text-specific
caching or encoding conversions.

Used by the TextAsset class and other systems that need text file access.

## Instance Members

<div class="signature field-method has-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/backend/LoadTextOptions/" class="type-link">backend.LoadTextOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads a text file from the specified path.

The file is loaded as a UTF-8 string. The path is relative to the
assets directory unless it's an absolute path or URL.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `path` | [String](/api-docs/clay-native/String/) | | The path to the text file to load  |
| `options` | [Null](/api-docs/clay-native/Null/)<[backend.LoadTextOptions](/api-docs/clay-native/backend/LoadTextOptions/)> | *(optional)* | Optional loading configuration (caching, hot-reload, etc.)  |
| `done` | Function | | Callback invoked with the loaded text content or null on failure |

<hr class="field-separator" />

<div class="signature field-method has-description" id="supportsHotReloadPath"><code><span class="field-name">supportsHotReloadPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#supportsHotReloadPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the backend supports hot-reloading of text files.

When true, files can include a `?hot=timestamp` query parameter to
bypass caching and force reloading when the file changes during development.
This is particularly useful for configuration files and data that changes
frequently during development.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if hot-reload paths are supported, false otherwise |

