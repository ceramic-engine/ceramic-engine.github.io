---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SpinePlugin
target: Headless
permalink: api-docs/headless/ceramic/SpinePlugin/
---

# SpinePlugin

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/SpinePlugin.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SpinePlugin</strong> (Class)</div>

Plugin that integrates the Spine 2D skeletal animation runtime into Ceramic.

This plugin extends Ceramic's asset system to support loading and managing
Spine animations, including skeleton data, texture atlases, and animation
configurations. It provides convenient methods for loading Spine assets
and accessing them throughout your application.

The plugin automatically:
- Registers the 'spine' asset kind with the asset system
- Sets up SpineData converters for serialization
- Loads required shaders for two-color tinting support
- Provides helper methods for accessing Spine assets

Loading Spine assets
```haxe
// Add a spine asset to load
assets.add(Spines.HERO);

// Load and use
assets.load(function(success) {
    if (success) {
        var heroData = assets.spine(Spines.HERO);
        var spine = new Spine();
        spine.spineData = heroData;
        spine.animate("idle", true);
    }
});
```

## Static Members

<div class="signature field-method has-description has-plugin" id="addSpine"><div class="plugin-name">spine</div><code><span class="field-name">addSpine</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addSpine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a Spine asset to the asset loading queue.

This method creates a new SpineAsset instance and registers it with
the asset system for loading. The asset will be loaded when assets.load()
is called.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | [Assets](/api-docs/headless/ceramic/Assets/) | | The Assets instance to add the spine asset to  |
| `name` | [String](/api-docs/headless/String/) | | The asset name/path (with or without 'spine:' prefix)  |
| `variant` | [String](/api-docs/headless/String/) | *(optional)* | Optional variant name for different versions of the same asset  |
| `options` | [Null](/api-docs/headless/Null/)<[AssetOptions](/api-docs/headless/ceramic/AssetOptions/)> | *(optional)* | Optional loading options (density, filter, etc.) * ```haxe assets.addSpine("characters/hero"); assets.addSpine("spine:characters/hero"); // Same as above assets.addSpine("characters/hero", "hd"); // HD variant ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="ensureSpine"><div class="plugin-name">spine</div><code><span class="field-name">ensureSpine</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensureSpine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ensures a Spine asset is loaded before executing a callback.

This method checks if the specified Spine asset is already loaded.
If not, it loads the asset first. Once the asset is available,
the callback is executed with the loaded SpineAsset.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | [Assets](/api-docs/headless/ceramic/Assets/) | | The Assets instance to check/load from  |
| `name` | [Either](/api-docs/headless/ceramic/Either/)<[String](/api-docs/headless/String/), [Dynamic](/api-docs/headless/Dynamic/)> | | Asset identifier - either a string name or an object with _id field  |
| `variant` | [String](/api-docs/headless/String/) | *(optional)* | Optional variant name  |
| `options` | [Null](/api-docs/headless/Null/)<[AssetOptions](/api-docs/headless/ceramic/AssetOptions/)> | *(optional)* | Optional loading options  |
| `done` | Function | | Callback executed with the loaded SpineAsset (or null if loading failed) * ```haxe assets.ensureSpine(Spines.HERO, function(asset) { if (asset != null) { var spine = new Spine(); spine.spineData = asset.spineData; } }); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="spine"><div class="plugin-name">spine</div><code><span class="field-name">spine</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SpineData/" class="type-link">SpineData</a></code><a class="header-anchor" href="#spine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves the SpineData for a loaded Spine asset.

This is a convenience method that gets the SpineAsset and returns
its spineData property. Returns null if the asset is not found or
not yet loaded.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | [Assets](/api-docs/headless/ceramic/Assets/) | | The Assets instance to retrieve from  |
| `name` | [Either](/api-docs/headless/ceramic/Either/)<[String](/api-docs/headless/String/), [Dynamic](/api-docs/headless/Dynamic/)> | | Asset identifier - either a string name or an object with _id field  |
| `variant` | [String](/api-docs/headless/String/) | *(optional)* | Optional variant name  |

| Returns | Description |
|---------|-------------|
| [SpineData](/api-docs/headless/ceramic/SpineData/) | The SpineData instance, or null if not found/loaded * ```haxe var heroData = assets.spine(Spines.HERO); if (heroData != null) { var spine = new Spine(); spine.spineData = heroData; } ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="spineAsset"><div class="plugin-name">spine</div><code><span class="field-name">spineAsset</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SpineAsset/" class="type-link">SpineAsset</a></code><a class="header-anchor" href="#spineAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves a SpineAsset from the asset system.

This method looks up a Spine asset by name and variant, checking both
the current Assets instance and its parent hierarchy if not found.
The 'spine:' prefix is handled automatically.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | [Assets](/api-docs/headless/ceramic/Assets/) | | The Assets instance to search in  |
| `name` | [Either](/api-docs/headless/ceramic/Either/)<[String](/api-docs/headless/String/), [Dynamic](/api-docs/headless/Dynamic/)> | | Asset identifier - either a string name or an object with _id field  |
| `variant` | [String](/api-docs/headless/String/) | *(optional)* | Optional variant name  |

| Returns | Description |
|---------|-------------|
| [SpineAsset](/api-docs/headless/ceramic/SpineAsset/) | The SpineAsset if found, null otherwise * ```haxe var asset = assets.spineAsset("characters/hero"); if (asset != null && asset.status == READY) { // Asset is loaded and ready to use } ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toSkeletonName"><div class="plugin-name">spine</div><code><span class="field-name">toSkeletonName</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toSkeletonName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a dynamic asset reference to its skeleton name string.

This utility method extracts the '_id' field from asset constant objects
generated by the build system (e.g., from the Spines class).



| Name | Type | Description |
|------|------|-------------|
| `name` | [Dynamic](/api-docs/headless/Dynamic/) | An asset constant object with an _id field  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | The string identifier for the skeleton * ```haxe var skeletonName = SpinePlugin.toSkeletonName(Spines.HERO); // Returns something like "characters/hero" ``` |

## Private Members

<div class="signature field-method has-description has-plugin" id="pluginInit"><div class="plugin-name">spine</div><code><span class="field-name">pluginInit</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pluginInit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes the Spine plugin during Ceramic's pre-initialization phase.

This method is called automatically by Ceramic's plugin system and:
- Registers the 'spine' asset kind for .spine file support
- Sets up the SpineData converter for serialization/deserialization
- Loads the tintBlack shader required for two-color tinting in Spine

The plugin initialization happens before the main app initialization,
ensuring Spine assets can be loaded during the app's startup phase.

## Metadata

| Name | Parameters |
|------|------------|
| `:access` | ceramic.App |

