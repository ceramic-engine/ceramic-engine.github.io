---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TextAsset
target: Headless
permalink: api-docs/headless/ceramic/TextAsset/
---

# TextAsset

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TextAsset.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <a href="/api-docs/headless/ceramic/Asset/">Asset</a> → <strong>ceramic.TextAsset</strong> (Class)</div>

Asset type for loading text files.

Loads any text-based file format like:
- Plain text files (.txt)
- JSON files (.json)
- XML files (.xml)
- Configuration files (.cfg, .ini, etc.)
- Any UTF-8 encoded text content

Features:
- UTF-8 encoding support
- Hot reload for live content updates
- Suitable for loading game data, configurations, or localization files

```haxe
var assets = new Assets();
assets.addText('config.json');
assets.addText('dialogue/intro.txt');
assets.load();

// Access loaded text
var configJson = assets.text('config');
var config = Json.parse(configJson);
```

## Instance Members

<div class="signature field-var has-description" id="text"><code><span class="field-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#text"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The loaded text content.
Observable property that updates when the text is loaded or reloaded.
Null until the asset is successfully loaded.

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateText"><code><span class="field-name">invalidateText</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Load the text file content.
The file is loaded as UTF-8 encoded text.
Emits complete event when finished.

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new text asset.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | [String](/api-docs/headless/String/) | | Text file name (with or without extension)  |
| `variant` | [String](/api-docs/headless/String/) | *(optional)* | Optional variant suffix  |
| `options` | [Null](/api-docs/headless/Null/)<[AssetOptions](/api-docs/headless/ceramic/AssetOptions/)> | *(optional)* | Loading options (backend-specific) |

## Private Members

<div class="signature field-var no-description" id="unobservedText"><code><span class="field-name">unobservedText</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitTextChange"><code><span class="field-name">emitTextChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTextChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when text field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/headless/String/) |
| `previous` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="assetFilesDidChange"><code><span class="field-name">assetFilesDidChange</span><span class="parenthesis">(</span><span class="arg-name">newFiles</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previousFiles</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assetFilesDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handle file system changes for hot reload.
Automatically reloads the text when the source file is modified.

| Name | Type |
|------|------|
| `newFiles` | [ReadOnlyMap](/api-docs/headless/ceramic/ReadOnlyMap/)<[String](/api-docs/headless/String/), [Float](/api-docs/headless/Float/)> |
| `previousFiles` | [ReadOnlyMap](/api-docs/headless/ceramic/ReadOnlyMap/)<[String](/api-docs/headless/String/), [Float](/api-docs/headless/Float/)> |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |

