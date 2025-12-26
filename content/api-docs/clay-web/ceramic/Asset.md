---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Asset
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Asset/
---

# Asset

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Asset.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <strong>ceramic.Asset</strong> (Class) → <a href="/api-docs/clay-web/ceramic/AtlasAsset/">AtlasAsset</a>, <a href="/api-docs/clay-web/ceramic/BinaryAsset/">BinaryAsset</a>, <a href="/api-docs/clay-web/ceramic/DatabaseAsset/">DatabaseAsset</a>, <a href="/api-docs/clay-web/ceramic/FontAsset/">FontAsset</a>, <a href="/api-docs/clay-web/ceramic/FragmentsAsset/">FragmentsAsset</a>, <a href="/api-docs/clay-web/ceramic/ImageAsset/">ImageAsset</a>, <a href="/api-docs/clay-web/ceramic/LorelineAsset/">LorelineAsset</a>, <a href="/api-docs/clay-web/ceramic/ShaderAsset/">ShaderAsset</a>, <a href="/api-docs/clay-web/ceramic/SoundAsset/">SoundAsset</a>, <a href="/api-docs/clay-web/ceramic/SpineAsset/">SpineAsset</a>, <a href="/api-docs/clay-web/ceramic/SpriteAsset/">SpriteAsset</a>, <a href="/api-docs/clay-web/ceramic/TextAsset/">TextAsset</a>, <a href="/api-docs/clay-web/ceramic/TilemapAsset/">TilemapAsset</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/tracker/Observable/">tracker.Observable</a></div>

Base class for all asset types in Ceramic.

Assets represent loadable resources like images, fonts, sounds, etc.
This class provides common functionality including:
- Path resolution based on density and variants
- Reference counting for memory management
- Hot reload support
- Asset lifecycle management

Asset subclasses should override the `load()` method to implement
specific loading logic for their asset type.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/Assets/">Assets</a></div>


## Instance Members

<div class="signature field-var has-description" id="observedDirty"><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="kind"><code><span class="field-name">kind</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#kind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asset kind identifier (e.g., 'image', 'font', 'sound').
Used to categorize assets and determine loading behavior.

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asset name without extension or variant.
Setting this triggers path recomputation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="variant"><code><span class="field-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#variant"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional variant suffix for the asset.
Useful for loading different versions of the same asset (e.g., 'large', 'small').

<hr class="field-separator" />

<div class="signature field-var has-description" id="fullName"><code><span class="field-name">fullName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#fullName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Full asset identifier including variant if provided.
Format: 'name' or 'name:variant'

<hr class="field-separator" />

<div class="signature field-var has-description" id="path"><code><span class="field-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#path"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resolved file path for this asset.
Automatically computed based on name, variant, density, and available files.

<hr class="field-separator" />

<div class="signature field-var has-description" id="allPaths"><code><span class="field-name">allPaths</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#allPaths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All available file paths for this asset across different densities.
Useful for preloading multiple resolutions.

<hr class="field-separator" />

<div class="signature field-var has-description" id="density"><code><span class="field-name">density</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#density"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asset target density matching the best available file.
Automatically set based on screen density and available asset files.
Default is 1.0.

<hr class="field-separator" />

<div class="signature field-var has-description" id="owner"><code><span class="field-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Assets/" class="type-link">Assets</a></code><a class="header-anchor" href="#owner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Assets instance that owns this asset.
When the owner is destroyed, all its assets are destroyed too.

<hr class="field-separator" />

<div class="signature field-var has-description" id="runtimeAssets"><code><span class="field-name">runtimeAssets</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/RuntimeAssets/" class="type-link">RuntimeAssets</a></code><a class="header-anchor" href="#runtimeAssets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional runtime assets configuration for dynamic asset loading.
Used to compute paths when loading assets from custom directories.

<hr class="field-separator" />

<div class="signature field-var has-description" id="options"><code><span class="field-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a></code><a class="header-anchor" href="#options"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asset-specific loading options.
Content depends on asset type and backend implementation.
Common options include premultiplyAlpha for images, streaming for sounds, etc.

<hr class="field-separator" />

<div class="signature field-var has-description" id="assets"><code><span class="field-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Assets/" class="type-link">Assets</a></code><a class="header-anchor" href="#assets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sub-assets owned by this asset.
Some assets (like bitmap fonts) create this to manage their dependencies.
Automatically destroyed when the parent asset is destroyed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="refCount"><code><span class="field-name">refCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#refCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference count for memory management.
- Call `retain()` to increase (claim ownership)
- Call `release()` to decrease (release ownership)
- Asset can be safely destroyed when refCount reaches 0

```haxe
var texture = assets.texture('hero');
texture.retain(); // refCount = 1
// ... use texture ...
texture.release(); // refCount = 0, can be cleaned up
```

<hr class="field-separator" />

<div class="signature field-var has-description" id="status"><code><span class="field-name">status</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#status"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current loading status of the asset.
Observable property that triggers updates when status changes.
- NONE: Not loaded
- LOADING: Currently loading
- READY: Successfully loaded
- BROKEN: Failed to load

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateStatus"><code><span class="field-name">invalidateStatus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateStatus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Load the asset.
Subclasses must override this method to implement actual loading logic.
Should set status to LOADING during load, then READY or BROKEN when complete.
Must call emitComplete() when finished.

<hr class="field-separator" />

<div class="signature field-method has-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroy this asset and clean up resources.
- Removes from owner Assets instance
- Destroys any sub-assets
- Should not be called directly if refCount > 0

<hr class="field-separator" />

<div class="signature field-method has-description" id="computePath"><code><span class="field-name">computePath</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">extensions</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">dir</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">runtimeAssets</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/RuntimeAssets/" class="type-link">RuntimeAssets</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute the best file path for this asset based on available files and screen density.
Automatically called during initialization and when properties change.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `extensions` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> | *(optional)* | File extensions to look for (auto-detected if not provided)  |
| `dir` | [Bool](/api-docs/clay-web/Bool/) | *(optional)* | Whether to look for directories instead of files  |
| `runtimeAssets` | [RuntimeAssets](/api-docs/clay-web/ceramic/RuntimeAssets/) | *(optional)* | Runtime assets configuration to use |

<hr class="field-separator" />

<div class="signature field-method has-description" id="retain"><code><span class="field-name">retain</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#retain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Increase the reference count by 1.
Call this when you start using an asset to prevent it from being destroyed.
Must be balanced with a corresponding `release()` call.

<div class="see"><strong>See:</strong> release</div>


<hr class="field-separator" />

<div class="signature field-method has-description" id="release"><code><span class="field-name">release</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#release"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decrease the reference count by 1.
Call this when you're done using an asset.
When refCount reaches 0, the asset can be safely destroyed.

Warning: Calling release() when refCount is already 0 will log a warning.

<div class="see"><strong>See:</strong> retain</div>


<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">kind</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new asset.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `kind` | [String](/api-docs/clay-web/String/) | | The asset type identifier  |
| `name` | [String](/api-docs/clay-web/String/) | | The asset name (without extension)  |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* | Optional variant suffix  |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* | Loading options specific to the asset type |

## Private Members

<div class="signature field-var no-description" id="unobservedStatus"><code><span class="field-name">unobservedStatus</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedStatus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="handleTexturesDensityChange"><code><span class="field-name">handleTexturesDensityChange</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#handleTexturesDensityChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="hotReload"><code><span class="field-name">hotReload</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hotReload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="customExtensions"><code><span class="field-name">customExtensions</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#customExtensions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitObservedDirty"><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">Asset</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [Asset](/api-docs/clay-web/ceramic/Asset/) |
| `fromSerializedField` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitComplete"><code><span class="field-name">emitComplete</span><span class="parenthesis">(</span><span class="arg-name">success</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitComplete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when the asset finishes loading.


| Name | Type | Description |
|------|------|-------------|
| `success` | [Bool](/api-docs/clay-web/Bool/) | True if the asset loaded successfully, false if it failed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitStatusChange"><code><span class="field-name">emitStatusChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitStatusChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when status field changes.

| Name | Type |
|------|------|
| `current` | Anonymous |
| `previous` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description" id="texturesDensityDidChange"><code><span class="field-name">texturesDensityDidChange</span><span class="parenthesis">(</span><span class="arg-name">newDensity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">prevDensity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#texturesDensityDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when screen texture density changes.
Subclasses can override to handle density changes (e.g., reload at new resolution).


| Name | Type | Description |
|------|------|-------------|
| `newDensity` | [Float](/api-docs/clay-web/Float/) | The new texture density  |
| `prevDensity` | [Float](/api-docs/clay-web/Float/) | The previous texture density |

<hr class="field-separator" />

<div class="signature field-method has-description" id="assetFilesDidChange"><code><span class="field-name">assetFilesDidChange</span><span class="parenthesis">(</span><span class="arg-name">newFiles</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previousFiles</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assetFilesDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when watched asset files change on disk.
Subclasses can override to implement hot reload behavior.


| Name | Type | Description |
|------|------|-------------|
| `newFiles` | [ReadOnlyMap](/api-docs/clay-web/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-web/String/), [Float](/api-docs/clay-web/Float/)> | Map of file paths to modification times after change  |
| `previousFiles` | [ReadOnlyMap](/api-docs/clay-web/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-web/String/), [Float](/api-docs/clay-web/Float/)> | Map of file paths to modification times before change |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

String representation of the asset for debugging.

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | String in format "AssetType(name:variant path)" or "AssetType(name:variant)" |

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitComplete"><code><span class="field-name">willEmitComplete</span><span class="parenthesis">(</span><span class="arg-name">success</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitComplete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `success` | [Bool](/api-docs/clay-web/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:allow` | ceramic.Assets |

