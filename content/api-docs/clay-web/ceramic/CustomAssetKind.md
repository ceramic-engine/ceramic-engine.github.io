---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: CustomAssetKind
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/CustomAssetKind/
---

# CustomAssetKind

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/CustomAssetKind.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.CustomAssetKind</strong> (Class)</div>

Defines a custom asset type that can be registered with the Assets system.

CustomAssetKind allows you to extend Ceramic's asset system with your own
asset types beyond the built-in ones (image, text, sound, etc.). This is
useful for game-specific or application-specific asset formats.

When registered, the Assets system will automatically recognize files with
the specified extensions and handle them using your custom logic.

```haxe
// Define a custom asset kind for level files
var levelAssetKind:CustomAssetKind = {
    kind: 'level',
    extensions: ['lvl', 'level'],
    add: (assets, name, variant, options) -> {
        var asset = new LevelAsset(name, variant, options);
        assets.addAsset(asset);
    },
    dir: false,
    types: null
};

// Register it with the Assets system
Assets.customAssetKinds.push(levelAssetKind);

// Now you can load level files like any other asset
assets.add('levels/world1');  // Will load world1.lvl or world1.level
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/Assets/">Assets</a>, <a href="/api-docs/clay-web/ceramic/Asset/">Asset</a></div>


## Instance Members

<div class="signature field-var has-description" id="kind"><code><span class="field-name">kind</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#kind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The unique identifier for this asset type.
This string is used internally by the asset system and should be
unique among all registered asset kinds.

Examples: 'level', 'dialog', 'quest', 'particle'

<hr class="field-separator" />

<div class="signature field-var has-description" id="extensions"><code><span class="field-name">extensions</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#extensions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of file extensions (without dots) that identify this asset type.

The Assets system uses these extensions to determine which CustomAssetKind
to use when loading files. Extensions are case-insensitive.

Examples: ['lvl', 'level'], ['dialog', 'dlg'], ['particle', 'ptc']

<hr class="field-separator" />

<div class="signature field-var has-description" id="dir"><code><span class="field-name">dir</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dir"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this asset type represents a directory rather than a file.

Set to true if your asset type loads entire directories (like a folder
of images for an animation). Set to false for single file assets.

Default should be false for most custom asset types.

<hr class="field-separator" />

<div class="signature field-var has-description" id="types"><code><span class="field-name">types</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#types"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of additional type identifiers for this asset kind.

This can be used to provide alternative ways to identify the asset type
beyond file extensions. Can be null if not needed.

This is primarily used internally by the framework.

<hr class="field-separator" />

<div class="signature field-method has-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Function called when an asset of this type needs to be added to the Assets collection.

This function should:
1. Create an instance of your custom Asset subclass
2. Configure it with the provided parameters
3. Add it to the assets collection using assets.addAsset()



| Name | Type | Description |
|------|------|-------------|
| `assets` | [Assets](/api-docs/clay-web/ceramic/Assets/) | The Assets instance to add the asset to  |
| `name` | [String](/api-docs/clay-web/String/) | The asset name (without extension)  |
| `variant` | [String](/api-docs/clay-web/String/) | Optional variant suffix (e.g., " |
| `options` | [AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/) | Additional loading options |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">kind</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">add</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">extensions</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">dir</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">types</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `kind` | [String](/api-docs/clay-web/String/) | * The unique identifier for this asset type. This string is used internally by the asset system and should be unique among all registered asset kinds. * Examples: 'level', 'dialog', 'quest', 'particle' |
| `add` | Function | * Function called when an asset of this type needs to be added to the Assets collection. * This function should: 1. Create an instance of your custom Asset subclass 2. Configure it with the provided parameters 3. Add it to the assets collection using assets.addAsset() * |
| `extensions` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> | * Array of file extensions (without dots) that identify this asset type. * The Assets system uses these extensions to determine which CustomAssetKind to use when loading files. Extensions are case-insensitive. * Examples: ['lvl', 'level'], ['dialog', 'dlg'], ['particle', 'ptc'] |
| `dir` | [Bool](/api-docs/clay-web/Bool/) | * Whether this asset type represents a directory rather than a file. * Set to true if your asset type loads entire directories (like a folder of images for an animation). Set to false for single file assets. * Default should be false for most custom asset types. |
| `types` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> | * Array of additional type identifiers for this asset kind. * This can be used to provide alternative ways to identify the asset type beyond file extensions. Can be null if not needed. * This is primarily used internally by the framework. |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

