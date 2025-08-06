---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: FragmentsAsset
target: Unity
permalink: api-docs/unity/ceramic/FragmentsAsset/
---

# FragmentsAsset

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/FragmentsAsset.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Asset/">Asset</a> → <strong>ceramic.FragmentsAsset</strong> (Class)</div>

An asset that loads and manages fragment data from `.fragment` files.

Fragments in Ceramic are reusable groups of visuals and entities that can be
instantiated from data files. They support:
- Multiple visual elements and entities with properties
- Timeline-based animations with keyframes
- Components that can be attached to fragment items
- Hot-reloading for development

Fragment files can be in two formats:
1. Legacy format: Direct JSON representation of FragmentData objects
2. Version 1 format: Structured format with schema support that gets converted at load time

Example usage:
```haxe
// Load a fragments asset
var fragmentsAsset = new FragmentsAsset('myFragments.fragment');
fragmentsAsset.onComplete(this, success -> {
    if (success) {
        // Access fragment data
        var menuFragment = fragmentsAsset.fragments.get('mainMenu');
        // Create a Fragment instance from the data
        var fragment = new Fragment();
        fragment.fragmentData = menuFragment;
    }
});
fragmentsAsset.load();
```

<div class="see"><strong>See:</strong> Fragment The runtime representation of fragment data, FragmentData The data structure for fragments, FragmentItem Individual items within a fragment</div>


## Instance Members

<div class="signature field-var has-description" id="fragments"><code><span class="field-name">fragments</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/FragmentData/" class="type-link">FragmentData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fragments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A map of fragment IDs to their corresponding FragmentData objects.
This property is populated after successfully loading the fragments file.
Each fragment can be accessed by its ID and used to create Fragment instances.

The property is observable, so you can react to changes when fragments are loaded:
```haxe
fragmentsAsset.onFragmentsChange(this, (fragments, prevFragments) -> {
    if (fragments != null) {
        // Fragments loaded successfully
        for (id in fragments.keys()) {
            trace('Loaded fragment: ' + id);
        }
    }
});
```

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateFragments"><code><span class="field-name">invalidateFragments</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateFragments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads the fragments file from the specified path.

The loading process:
1. Loads the JSON file as text
2. Parses the JSON data
3. Detects the format version (legacy or version 1)
4. Converts version 1 format to runtime format if needed

Supports hot-reload on platforms that allow it - the file will be
automatically reloaded when it changes on disk.

<hr class="field-separator" />

<div class="signature field-method has-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys the fragments asset and clears the loaded fragment data from memory.

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/unity/String/) | |
| `variant` | [String](/api-docs/unity/String/) | *(optional)* |
| `options` | [Null](/api-docs/unity/Null/)<[AssetOptions](/api-docs/unity/ceramic/AssetOptions/)> | *(optional)* |

## Private Members

<div class="signature field-var no-description" id="unobservedFragments"><code><span class="field-name">unobservedFragments</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/FragmentData/" class="type-link">FragmentData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedFragments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromRawFragments"><code><span class="field-name">fromRawFragments</span><span class="parenthesis">(</span><span class="arg-name">rawFragments</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/FragmentData/" class="type-link">FragmentData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fromRawFragments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts version 1 fragment format to the runtime format.

This method handles the transformation of the newer fragment file format
that includes additional metadata and schema information. It processes:
- Fragment metadata (id, dimensions, color, transparency)
- Visual and entity items with their properties
- Component configurations
- Schema references for entity types



| Name | Type | Description |
|------|------|-------------|
| `rawFragments` | [Dynamic](/api-docs/unity/Dynamic/) | The raw parsed JSON data with version field  |

| Returns | Description |
|---------|-------------|
| [haxe.DynamicAccess](/api-docs/unity/haxe/DynamicAccess/)<[FragmentData](/api-docs/unity/ceramic/FragmentData/)> | Map of fragment IDs to FragmentData objects |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitFragmentsChange"><code><span class="field-name">emitFragmentsChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/FragmentData/" class="type-link">FragmentData</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/FragmentData/" class="type-link">FragmentData</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFragmentsChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when fragments field changes.

| Name | Type |
|------|------|
| `current` | [haxe.DynamicAccess](/api-docs/unity/haxe/DynamicAccess/)<[FragmentData](/api-docs/unity/ceramic/FragmentData/)> |
| `previous` | [haxe.DynamicAccess](/api-docs/unity/haxe/DynamicAccess/)<[FragmentData](/api-docs/unity/ceramic/FragmentData/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="assetFilesDidChange"><code><span class="field-name">assetFilesDidChange</span><span class="parenthesis">(</span><span class="arg-name">newFiles</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previousFiles</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assetFilesDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when asset files change on disk (hot-reload support).
Automatically reloads the fragments file if it has been modified.


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

