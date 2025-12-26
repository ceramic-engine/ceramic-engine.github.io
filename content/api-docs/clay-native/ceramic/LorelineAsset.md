---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: LorelineAsset
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/LorelineAsset/
---

# LorelineAsset

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/loreline/runtime/src/ceramic/LorelineAsset.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/Asset/">Asset</a> → <strong>ceramic.LorelineAsset</strong> (Class)</div>

Asset class for loading and managing Loreline script files.

Loreline is a scripting language for narrative content, dialogue trees,
and interactive storytelling. This asset type handles:
- Loading Loreline script files (.lor, .loreline)
- Parsing scripts with import resolution
- Hot-reloading when script files change
- Managing script dependencies

Example usage:
```haxe
assets.add('loreline:dialogue/intro');
assets.onceComplete(this, success -> {
    var script = assets.loreline('dialogue/intro');
    // Use the parsed Loreline script
});
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/loreline/Loreline/">loreline.Loreline</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="lorelineScript"><div class="plugin-name">loreline</div><code><span class="field-name">lorelineScript</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Script/" class="type-link">loreline.Script</a></code><a class="header-anchor" href="#lorelineScript"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The parsed Loreline script object.
Contains the dialogue nodes, conditions, and flow logic.
Observable to track when the script is loaded or reloaded.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateLorelineScript"><div class="plugin-name">loreline</div><code><span class="field-name">invalidateLorelineScript</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateLorelineScript"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="load"><div class="plugin-name">loreline</div><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">loreline</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">loreline</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-native/String/) | |
| `variant` | [String](/api-docs/clay-native/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-native/Null/)<[AssetOptions](/api-docs/clay-native/ceramic/AssetOptions/)> | *(optional)* |

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedLorelineScript"><div class="plugin-name">loreline</div><code><span class="field-name">unobservedLorelineScript</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Script/" class="type-link">loreline.Script</a></code><a class="header-anchor" href="#unobservedLorelineScript"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="importedFiles"><div class="plugin-name">loreline</div><code><span class="field-name">importedFiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#importedFiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of imported file paths used by this script.
Used for hot-reload detection of dependencies.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitLorelineScriptChange"><div class="plugin-name">loreline</div><code><span class="field-name">emitLorelineScriptChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Script/" class="type-link">loreline.Script</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Script/" class="type-link">loreline.Script</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLorelineScriptChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when lorelineScript field changes.

| Name | Type |
|------|------|
| `current` | [loreline.Script](/api-docs/clay-native/loreline/Script/) |
| `previous` | [loreline.Script](/api-docs/clay-native/loreline/Script/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="loadImported"><div class="plugin-name">loreline</div><code><span class="field-name">loadImported</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">importPath</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">importCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadImported"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads an imported Loreline file referenced by the main script.


| Name | Type | Description |
|------|------|-------------|
| `assets` | [Assets](/api-docs/clay-native/ceramic/Assets/) | The assets instance to use for loading  |
| `importPath` | [String](/api-docs/clay-native/String/) | Path to the imported file  |
| `importCallback` | Function | Callback with the loaded text content |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="assetFilesDidChange"><div class="plugin-name">loreline</div><code><span class="field-name">assetFilesDidChange</span><span class="parenthesis">(</span><span class="arg-name">newFiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previousFiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assetFilesDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles file change detection for hot-reloading.
Monitors both the main script file and any imported files.
Triggers a reload when any monitored file changes.

| Name | Type |
|------|------|
| `newFiles` | [ReadOnlyMap](/api-docs/clay-native/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-native/String/), [Float](/api-docs/clay-native/Float/)> |
| `previousFiles` | [ReadOnlyMap](/api-docs/clay-native/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-native/String/), [Float](/api-docs/clay-native/Float/)> |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |

