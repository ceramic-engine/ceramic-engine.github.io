---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spec
title: IO
target: Unity
permalink: api-docs/unity/spec/IO/
---

# IO

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/spec/IO.hx">View source</a></div>

<div class="type-hierarchy"><strong>spec.IO</strong> (Interface) → <a href="/api-docs/unity/backend/IO/">backend.IO</a></div>

Backend interface for file input/output operations.

This interface provides simple key-value file storage in the platform's
storage directory. It's primarily used for saving game data, preferences,
and other persistent information.

The 'key' parameter is typically a relative file path within the storage
directory. Backends handle the actual file system operations and ensure
data is written to the appropriate platform-specific location.

<div class="see"><strong>See:</strong> spec.Info.storageDirectory() for the storage location</div>


## Instance Members

<div class="signature field-method has-description" id="saveString"><code><span class="field-name">saveString</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#saveString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Saves a string to persistent storage, overwriting any existing content.
The key is used as a relative file path within the storage directory.



| Name | Type | Description |
|------|------|-------------|
| `key` | [String](/api-docs/unity/String/) | The storage key/path (e.g., "saves/game1.json")  |
| `str` | [String](/api-docs/unity/String/) | The string content to save  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if the save was successful, false on error |

<hr class="field-separator" />

<div class="signature field-method has-description" id="appendString"><code><span class="field-name">appendString</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#appendString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Appends a string to an existing file in persistent storage.
If the file doesn't exist, it will be created.



| Name | Type | Description |
|------|------|-------------|
| `key` | [String](/api-docs/unity/String/) | The storage key/path (e.g., "logs/debug.txt")  |
| `str` | [String](/api-docs/unity/String/) | The string content to append  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if the append was successful, false on error |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readString"><code><span class="field-name">readString</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#readString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a string from persistent storage.



| Name | Type | Description |
|------|------|-------------|
| `key` | [String](/api-docs/unity/String/) | The storage key/path (e.g., "saves/game1.json")  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | The file contents as a string, or null if the file doesn't exist or can't be read |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

