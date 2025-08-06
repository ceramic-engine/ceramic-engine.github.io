---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: BinaryAsset
target: Unity
permalink: api-docs/unity/ceramic/BinaryAsset/
---

# BinaryAsset

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/BinaryAsset.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Asset/">Asset</a> → <strong>ceramic.BinaryAsset</strong> (Class)</div>

Asset for loading binary files as raw bytes.

BinaryAsset loads any file as raw binary data, making it useful for:
- Custom file formats
- Binary protocols
- Compressed data
- Non-text resources

The loaded data is provided as haxe.io.Bytes, which can be processed
as needed by your application.

Features:
- Hot-reload support for binary files
- Asynchronous loading
- Memory-efficient byte handling

```haxe
// Load a binary file
var binaryAsset = new BinaryAsset('data');
binaryAsset.path = 'data/level.dat';
binaryAsset.onComplete(this, success -> {
    if (success) {
        // Access the raw bytes
        var bytes = binaryAsset.bytes;
        trace('Loaded ${bytes.length} bytes');
        // Process the binary data
        var input = new haxe.io.BytesInput(bytes);
        var version = input.readInt32();
        // ... read more data
    }
});
assets.addAsset(binaryAsset);
assets.load();
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/Asset/">Asset</a>, <a href="/api-docs/unity/haxe/io/Bytes/">haxe.io.Bytes</a></div>


## Instance Members

<div class="signature field-var has-description" id="bytes"><code><span class="field-name">bytes</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#bytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The loaded binary data as raw bytes.
Will be null until the asset is successfully loaded.

Use haxe.io APIs to read and process the binary data:
- BytesInput for reading
- BytesOutput for writing
- BytesBuffer for building

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateBytes"><code><span class="field-name">invalidateBytes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads the binary file from the specified path.

The loading is asynchronous and will emit a complete event when finished.
On success, the bytes property will contain the loaded data.

Supports hot-reload on platforms that allow it - the file will be
automatically reloaded when it changes on disk.

<hr class="field-separator" />

<div class="signature field-method has-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys the binary asset and releases the loaded bytes from memory.

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/unity/String/) | |
| `variant` | [String](/api-docs/unity/String/) | *(optional)* |
| `options` | [Null](/api-docs/unity/Null/)<[AssetOptions](/api-docs/unity/ceramic/AssetOptions/)> | *(optional)* |

## Private Members

<div class="signature field-var no-description" id="unobservedBytes"><code><span class="field-name">unobservedBytes</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#unobservedBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitBytesChange"><code><span class="field-name">emitBytesChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBytesChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when bytes field changes.

| Name | Type |
|------|------|
| `current` | [haxe.io.Bytes](/api-docs/unity/haxe/io/Bytes/) |
| `previous` | [haxe.io.Bytes](/api-docs/unity/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="assetFilesDidChange"><code><span class="field-name">assetFilesDidChange</span><span class="parenthesis">(</span><span class="arg-name">newFiles</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previousFiles</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assetFilesDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when asset files change on disk (hot-reload support).
Automatically reloads the binary file if it has been modified.


| Name | Type | Description |
|------|------|-------------|
| `newFiles` | [ReadOnlyMap](/api-docs/unity/ceramic/ReadOnlyMap/)<[String](/api-docs/unity/String/), [Float](/api-docs/unity/Float/)> | Map of current files and their modification times  |
| `previousFiles` | [ReadOnlyMap](/api-docs/unity/ceramic/ReadOnlyMap/)<[String](/api-docs/unity/String/), [Float](/api-docs/unity/Float/)> | Map of previous files and their modification times |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |

