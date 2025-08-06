---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: RuntimeAssets
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/RuntimeAssets/
---

# RuntimeAssets

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/RuntimeAssets.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.RuntimeAssets</strong> (Class)</div>

Runtime utilities to compute asset lists/names from raw (relative) file list.

RuntimeAssets provides runtime access to asset information that is normally
generated at compile-time by AssetsMacro. This allows dynamic asset discovery
and loading, particularly useful for:
- Hot-reloading during development
- Dynamic content loading
- User-generated content
- Asset browsing tools

The class processes a flat list of asset paths and organizes them by:
- Base name (filename without extension and density suffix)
- Asset kind (image, sound, text, etc.)
- Directory structure

It also handles density variants (e.g., @2x, @3x) and provides
constant-style names for programmatic access.

```haxe
// Create from a directory path
var runtimeAssets = RuntimeAssets.fromPath('assets/');

// Get all image asset names
var imageNames = runtimeAssets.getNames('image');
for (entry in imageNames) {
    trace('Image: ${entry.name} at ${entry.paths}');
}

// Get organized asset lists
var lists = runtimeAssets.getLists();
trace('All assets: ${lists.all}');
trace('Assets for "player": ${lists.allByName.get("player")}');
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/Assets/">Assets</a>, AssetsMacro</div>


## Static Members

<div class="signature field-method has-description" id="fromPath"><code><span class="field-name">fromPath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">RuntimeAssets</a></code><a class="header-anchor" href="#fromPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a RuntimeAssets instance by scanning a directory path.
Only available on platforms with file system access.



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/clay-native/String/) | The directory path to scan for assets  |

| Returns | Description |
|---------|-------------|
| [RuntimeAssets](/api-docs/clay-native/ceramic/RuntimeAssets/) | RuntimeAssets instance, or null if file system access is not available |

## Instance Members

<div class="signature field-var has-description" id="path"><code><span class="field-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#path"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The root path of the assets directory, if created from a path.
Will be null if created with a pre-computed asset list.

<hr class="field-separator" />

<div class="signature field-method has-description" id="requestTransformedDir"><code><span class="field-name">requestTransformedDir</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#requestTransformedDir"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Requests the transformed assets directory path asynchronously.
This is the temporary directory where processed assets are stored.

The method caches the result after the first query to avoid repeated
platform calls. Multiple simultaneous requests are queued and resolved
together.



| Name | Type | Description |
|------|------|-------------|
| `callback` | Function | Function called with the transformed directory path (may be null if unavailable) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reset"><code><span class="field-name">reset</span><span class="parenthesis">(</span><span class="arg-name">allAssets</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets the runtime assets with a new list of files.
Clears all caches and recomputes the asset organization.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `allAssets` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> | | New array of asset paths  |
| `path` | [String](/api-docs/clay-native/String/) | *(optional)* | Optional new root path |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getNames"><code><span class="field-name">getNames</span><span class="parenthesis">(</span><span class="arg-name">kind</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">extensions</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">dir</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">AnonStruct</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#getNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets all asset names of a specific kind with their paths and constant names.

This method finds all assets matching the specified kind and optional extensions,
returning structured information about each unique asset (by base name).



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `kind` | [String](/api-docs/clay-native/String/) | | Asset type: 'image', 'text', 'sound', 'shader', 'font', 'atlas', 'database', 'fragments'  |
| `extensions` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> | *(optional)* | Optional additional file extensions to include (beyond the defaults for the kind)  |
| `dir` | [Bool](/api-docs/clay-native/Bool/) | `false` | Whether to search for directories instead of files  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-native/Array/)<AnonStruct> | Array of asset entries with: - name: Base name without extension or density suffix - paths: All file paths for this asset (including variants) - constName: Constant-style name for code generation (e.g., "PLAYER_SPRITE") |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getLists"><code><span class="field-name">getLists</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#getLists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets organized lists of all assets in various formats.

Returns a comprehensive view of all assets organized by:
- Complete file lists
- Directory lists
- Files grouped by base name
- Directories grouped by base name

The results are cached for performance.


| Returns | Description |
|---------|-------------|
| AnonStruct | Object containing: - all: Array of all asset file paths - allDirs: Array of all directory paths containing assets - allByName: Map of base names to their file variants - allDirsByName: Map of base directory names to their variants |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getEncodableLists"><code><span class="field-name">getEncodableLists</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#getEncodableLists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Same as getLists(), but transforms Maps into JSON-encodable objects.

This is useful when you need to serialize the asset lists to JSON
or send them over a network, as Maps cannot be directly JSON-encoded.


| Returns | Description |
|---------|-------------|
| AnonStruct | Same structure as getLists() but with Maps converted to Dynamic objects |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">allAssets</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new RuntimeAssets instance with a pre-computed list of asset paths.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `allAssets` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> | | Array of relative asset paths (e.g., ["images/player.png", "sounds/jump.ogg"])  |
| `path` | [String](/api-docs/clay-native/String/) | *(optional)* | Optional root path where these assets are located |

## Private Members

<div class="signature field-var no-description" id="transformedDir"><code><span class="field-name">transformedDir</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#transformedDir"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="didQueryTransformedDir"><code><span class="field-name">didQueryTransformedDir</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#didQueryTransformedDir"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pendingTransformedDirCallbacks"><code><span class="field-name">pendingTransformedDirCallbacks</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#pendingTransformedDirCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="allAssets"><code><span class="field-name">allAssets</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#allAssets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All asset file paths in the collection

<hr class="field-separator" />

<div class="signature field-var has-description" id="allAssetDirs"><code><span class="field-name">allAssetDirs</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#allAssetDirs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All unique directory paths containing assets

<hr class="field-separator" />

<div class="signature field-var has-description" id="assetsByBaseName"><code><span class="field-name">assetsByBaseName</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#assetsByBaseName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of base names to their file variants (including density variants)

<hr class="field-separator" />

<div class="signature field-var has-description" id="assetDirsByBaseName"><code><span class="field-name">assetDirsByBaseName</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#assetDirsByBaseName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of base directory names to their path variants

<hr class="field-separator" />

<div class="signature field-var has-description" id="cachedNames"><code><span class="field-name">cachedNames</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#cachedNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cache of computed asset names by kind and options

<hr class="field-separator" />

<div class="signature field-method has-description" id="toAssetConstName"><code><span class="field-name">toAssetConstName</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toAssetConstName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts an asset path to a constant-style name suitable for code generation.

Transformation rules:
- Slashes (/) become double underscores (__)
- Dots (.) become single underscores (_)
- camelCase becomes CAMEL_CASE
- Special characters are replaced with underscores
- Result is all uppercase



| Name | Type | Description |
|------|------|-------------|
| `input` | [String](/api-docs/clay-native/String/) | Asset path (e.g., "sprites/player.png")  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | Constant name (e.g., "SPRITES__PLAYER") |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isAsciiChar"><code><span class="field-name">isAsciiChar</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isAsciiChar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a character is a valid ASCII alphanumeric character.
Used for generating valid constant names.



| Name | Type | Description |
|------|------|-------------|
| `c` | [String](/api-docs/clay-native/String/) | Single character string  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if the character is 0-9, A-Z, or a-z |

<hr class="field-separator" />

<div class="signature field-method has-description" id="initData"><code><span class="field-name">initData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes internal data structures from the asset list.

This method:
- Extracts all unique directories from file paths
- Groups files by their base names (without extensions/variants)
- Groups directories by their base names
- Prepares the data for efficient querying

