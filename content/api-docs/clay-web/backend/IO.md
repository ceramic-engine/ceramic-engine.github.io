---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: IO
target: Clay (Web)
permalink: api-docs/clay-web/backend/IO/
---

# IO

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/IO.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.IO</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/spec/IO/">spec.IO</a></div>

Clay backend implementation for persistent key-value storage.

This class provides cross-platform persistent storage with different
implementations based on the target platform:

- **Desktop (sys + SQLite)**: Uses SQLite database for efficient storage
- **Desktop (sys without SQLite)**: Falls back to individual files
- **Web**: Uses browser localStorage API

Key features:
- All data is encoded with MD5 hashing for integrity verification
- Keys are hashed to avoid filesystem issues with special characters
- Supports importing initial SQLite database from assets
- Thread-safe on platforms that support it

The SQLite implementation allows importing a pre-populated database
from assets on first run, useful for shipping default data.

<div class="see"><strong>See:</strong> spec.IO The interface this class implements, ceramic.PersistentData For the high-level storage API</div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="saveString"><div class="plugin-name">clay</div><code><span class="field-name">saveString</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#saveString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Browser localStorage implementation of saveString.
Limited by browser storage quotas (typically 5-10MB).

| Name | Type |
|------|------|
| `key` | [String](/api-docs/clay-web/String/) |
| `str` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="appendString"><div class="plugin-name">clay</div><code><span class="field-name">appendString</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#appendString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [String](/api-docs/clay-web/String/) |
| `str` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="readString"><div class="plugin-name">clay</div><code><span class="field-name">readString</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#readString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">clay</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method has-description has-plugin" id="initKeyValueIfNeeded"><div class="plugin-name">clay</div><code><span class="field-name">initKeyValueIfNeeded</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initKeyValueIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes the key-value storage backend if needed.
Called by the main backend during initialization.

