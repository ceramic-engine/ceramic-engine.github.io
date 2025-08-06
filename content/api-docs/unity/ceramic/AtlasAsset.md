---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: AtlasAsset
target: Unity
permalink: api-docs/unity/ceramic/AtlasAsset/
---

# AtlasAsset

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/AtlasAsset.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Asset/">Asset</a> → <strong>ceramic.AtlasAsset</strong> (Class)</div>

Asset for loading texture atlases (sprite sheets with metadata).

AtlasAsset handles loading of texture atlas files which contain multiple
packed textures/sprites along with their position metadata. It supports
both Spine/LibGDX atlas format (.atlas) and XML atlas formats.

Features:
- Automatic texture loading for all atlas pages
- Hot-reload support for atlas files
- Density-aware loading (e.g., @2x variants)
- Automatic visual updates when atlas is reloaded
- Custom atlas parser support

The loaded atlas can be used with Quad visuals to display specific regions:

```haxe
// Load an atlas
var atlasAsset = new AtlasAsset('myAtlas');
atlasAsset.path = 'atlases/sprites.atlas';
atlasAsset.onComplete(this, success -> {
    if (success) {
        // Get a specific region from the atlas
        var region = atlasAsset.atlas.region('player_idle');

        // Use it with a Quad
        var quad = new Quad();
        quad.tile = region;

        // Use it with a Sprite
        // (requires sprite plugin) Sprite has better atlas region support than Quad:
        // region offsets are properly handled, allowing trimmed/packed sprites
        // to display correctly with their original bounds and pivot points.
        var sprite = new Sprite();
        sprite.region = region;
    }
});
assets.addAsset(atlasAsset);
assets.load();
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/TextureAtlas/">TextureAtlas</a>, <a href="/api-docs/unity/ceramic/TextureAtlasRegion/">TextureAtlasRegion</a>, <a href="/api-docs/unity/ceramic/ImageAsset/">ImageAsset</a></div>


## Instance Members

<div class="signature field-var has-description" id="atlas"><code><span class="field-name">atlas</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a></code><a class="header-anchor" href="#atlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The loaded texture atlas containing all regions and pages.
Will be null until the asset is successfully loaded.

<hr class="field-separator" />

<div class="signature field-var has-description" id="text"><code><span class="field-name">text</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#text"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The raw text content of the atlas file.
Can be used to inspect the atlas metadata.

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateAtlas"><code><span class="field-name">invalidateAtlas</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateAtlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateText"><code><span class="field-name">invalidateText</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads the atlas asset.

This method:
1. Loads the atlas metadata file
2. Parses the atlas format (auto-detects XML or text format)
3. Loads all texture pages referenced in the atlas
4. Updates existing visuals if this is a reload

The loading process is asynchronous and will emit a complete event
when finished (either success or failure).

<hr class="field-separator" />

<div class="signature field-method has-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys the atlas asset and its loaded atlas.
This will also destroy all texture pages associated with the atlas.

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/unity/String/) | |
| `variant` | [String](/api-docs/unity/String/) | *(optional)* |
| `options` | [Null](/api-docs/unity/Null/)<[AssetOptions](/api-docs/unity/ceramic/AssetOptions/)> | *(optional)* |

## Private Members

<div class="signature field-var no-description" id="unobservedAtlas"><code><span class="field-name">unobservedAtlas</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a></code><a class="header-anchor" href="#unobservedAtlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedText"><code><span class="field-name">unobservedText</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitReplaceAtlas"><code><span class="field-name">emitReplaceAtlas</span><span class="parenthesis">(</span><span class="arg-name">newAtlas</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a><span class="operator">,</span> <span class="arg-name">prevAtlas</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitReplaceAtlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when the atlas is replaced (typically during hot-reload).


| Name | Type | Description |
|------|------|-------------|
| `newAtlas` | [TextureAtlas](/api-docs/unity/ceramic/TextureAtlas/) | The newly loaded atlas  |
| `prevAtlas` | [TextureAtlas](/api-docs/unity/ceramic/TextureAtlas/) | The previous atlas that was replaced |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitAtlasChange"><code><span class="field-name">emitAtlasChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitAtlasChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when atlas field changes.

| Name | Type |
|------|------|
| `current` | [TextureAtlas](/api-docs/unity/ceramic/TextureAtlas/) |
| `previous` | [TextureAtlas](/api-docs/unity/ceramic/TextureAtlas/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitTextChange"><code><span class="field-name">emitTextChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTextChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when text field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/unity/String/) |
| `previous` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseAtlas"><code><span class="field-name">parseAtlas</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a></code><a class="header-anchor" href="#parseAtlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A custom atlas parsing method. Will be used over the default parsing if not null.
This allows you to provide your own atlas format parser.
The parser should take the raw atlas text and return a TextureAtlas instance.

| Name | Type |
|------|------|
| `text` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [TextureAtlas](/api-docs/unity/ceramic/TextureAtlas/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="texturesDensityDidChange"><code><span class="field-name">texturesDensityDidChange</span><span class="parenthesis">(</span><span class="arg-name">newDensity</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">prevDensity</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#texturesDensityDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when the global texture density changes.
Triggers a reload if a different density variant exists.


| Name | Type | Description |
|------|------|-------------|
| `newDensity` | [Float](/api-docs/unity/Float/) | The new texture density multiplier  |
| `prevDensity` | [Float](/api-docs/unity/Float/) | The previous texture density multiplier |

<hr class="field-separator" />

<div class="signature field-method has-description" id="checkTexturesDensity"><code><span class="field-name">checkTexturesDensity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#checkTexturesDensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the atlas needs to be reloaded due to texture density change.
If a different density variant exists (e.g., @2x version), it will reload the atlas.

<hr class="field-separator" />

<div class="signature field-method has-description" id="assetFilesDidChange"><code><span class="field-name">assetFilesDidChange</span><span class="parenthesis">(</span><span class="arg-name">newFiles</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previousFiles</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assetFilesDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when asset files change on disk (hot-reload support).
Automatically reloads the atlas if its file has been modified.


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

