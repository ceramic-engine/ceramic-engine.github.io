---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Assets
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Assets/
---

# Assets

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Assets.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <strong>ceramic.Assets</strong> (Class)</div>

The main asset management class for Ceramic framework.

Handles loading, managing, and hot-reloading of various asset types including:
- Images/Textures
- Fonts (bitmap and TTF/OTF)
- Atlases (texture atlases)
- Text files
- Binary data
- Sounds/Audio
- Databases (CSV)
- Fragments (JSON-based UI/game fragments)
- Shaders

Features:
- Reference counting for memory management
- Asset variants and density handling for multi-resolution support
- Hot reloading when watching directories
- Parent-child asset relationships
- Custom asset type registration
- Parallel/serial loading strategies

```haxe
var assets = new Assets();
assets.addImage('hero.png');
assets.addFont('main.fnt');
assets.load();
```

## Static Members

<div class="signature field-var has-description" id="instances"><code><span class="field-name">instances</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="#" class="type-link">Assets</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#instances"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All active Assets instances in the application.
Read-only array to prevent external modification.

<hr class="field-separator" />

<div class="signature field-var has-description" id="all"><code><span class="field-name">all</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#all"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All available asset paths in the project.

<hr class="field-separator" />

<div class="signature field-var has-description" id="allDirs"><code><span class="field-name">allDirs</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#allDirs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All available directory paths in the project.

<hr class="field-separator" />

<div class="signature field-var has-description" id="allByName"><code><span class="field-name">allByName</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#allByName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of asset names to their available file paths.
Useful for finding all variants of an asset.

<hr class="field-separator" />

<div class="signature field-var has-description" id="allDirsByName"><code><span class="field-name">allDirsByName</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#allDirsByName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of directory names to their paths.

<hr class="field-separator" />

<div class="signature field-method no-description" id="flushAllInstancesImmediate"><code><span class="field-name">flushAllInstancesImmediate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#flushAllInstancesImmediate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="decodePath"><code><span class="field-name">decodePath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AssetPathInfo/" class="type-link">AssetPathInfo</a></code><a class="header-anchor" href="#decodePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decode an asset path to extract information about density, variant, etc.


| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/clay-web/String/) | The asset path to decode  |

| Returns | Description |
|---------|-------------|
| [AssetPathInfo](/api-docs/clay-web/ceramic/AssetPathInfo/) | AssetPathInfo object containing parsed path information |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addAssetKind"><code><span class="field-name">addAssetKind</span><span class="parenthesis">(</span><span class="arg-name">kind</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">add</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">extensions</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">dir</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">types</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addAssetKind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Register a custom asset kind that can be loaded by the asset system.


| Name | Type | Description |
|------|------|-------------|
| `kind` | [String](/api-docs/clay-web/String/) | The unique identifier for this asset type (e.g., 'sprite', 'level')  |
| `add` | Function | Function that handles adding this asset type to an Assets instance  |
| `extensions` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> | File extensions associated with this asset type  |
| `dir` | [Bool](/api-docs/clay-web/Bool/) | Whether this asset type is directory-based  |
| `types` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> | Additional type information for the asset kind |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAssetsPath"><code><span class="field-name">getAssetsPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getAssetsPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the base assets path for the current platform.

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The platform-specific assets path |

<hr class="field-separator" />

<div class="signature field-method has-description" id="assetNameFromPath"><code><span class="field-name">assetNameFromPath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#assetNameFromPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the asset name associated with a given file path.


| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/clay-web/String/) | The file path to look up  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The asset name, or null if no asset uses this path |

<hr class="field-separator" />

<div class="signature field-method no-description" id="realAssetPath"><code><span class="field-name">realAssetPath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">runtimeAssets</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/RuntimeAssets/" class="type-link">RuntimeAssets</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#realAssetPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `path` | [String](/api-docs/clay-web/String/) | |
| `runtimeAssets` | [RuntimeAssets](/api-docs/clay-web/ceramic/RuntimeAssets/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getReloadCount"><code><span class="field-name">getReloadCount</span><span class="parenthesis">(</span><span class="arg-name">realAssetPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getReloadCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `realAssetPath` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

## Instance Members

<div class="signature field-var no-description" id="immediate"><code><span class="field-name">immediate</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Immediate/" class="type-link">Immediate</a></code><a class="header-anchor" href="#immediate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="runtimeAssets"><code><span class="field-name">runtimeAssets</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/RuntimeAssets/" class="type-link">RuntimeAssets</a></code><a class="header-anchor" href="#runtimeAssets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If set, will be provided to each added asset in this `Assets` instance.
Used for runtime asset loading from file system.

<hr class="field-separator" />

<div class="signature field-var has-description" id="defaultImageOptions"><code><span class="field-name">defaultImageOptions</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a></code><a class="header-anchor" href="#defaultImageOptions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default options applied to all image assets added to this instance.
Can be overridden per asset.

<hr class="field-separator" />

<div class="signature field-var has-description" id="loadMethod"><code><span class="field-name">loadMethod</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AssetsLoadMethod/" class="type-link">AssetsLoadMethod</a></code><a class="header-anchor" href="#loadMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The loading method to use (SYNC or ASYNC).
SYNC blocks until loading completes, ASYNC loads in background.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scheduleMethod"><code><span class="field-name">scheduleMethod</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AssetsScheduleMethod/" class="type-link">AssetsScheduleMethod</a></code><a class="header-anchor" href="#scheduleMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The scheduling method for loading multiple assets.
PARALLEL loads all at once, SERIAL loads one at a time.

<hr class="field-separator" />

<div class="signature field-var has-description" id="delayBetweenXAssets"><code><span class="field-name">delayBetweenXAssets</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#delayBetweenXAssets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If > 0, adds a delay every X assets when loading in parallel.
Useful to avoid overwhelming the system with too many concurrent loads.

<hr class="field-separator" />

<div class="signature field-var has-description" id="reloadOnTextureDensityChange"><code><span class="field-name">reloadOnTextureDensityChange</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#reloadOnTextureDensityChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to automatically reload assets when texture density changes.
Useful for supporting multiple screen resolutions.

<hr class="field-separator" />

<div class="signature field-var has-description" id="parent"><code><span class="field-name">parent</span><span class="operator">:</span> <a href="#" class="type-link">Assets</a></code><a class="header-anchor" href="#parent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If provided, when requesting an asset, it will also check if the parent `Assets`
instance has it and return it if that's the case.

<hr class="field-separator" />

<div class="signature field-var has-description" id="atlasPacker"><code><span class="field-name">atlasPacker</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureAtlasPacker/" class="type-link">TextureAtlasPacker</a></code><a class="header-anchor" href="#atlasPacker"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A shared texture atlas packer that can be used to merge smaller textures together.
Also required when loading some kind of assets, like `.ase`/`.aseprite` files.

<hr class="field-separator" />

<div class="signature field-var has-description" id="hotReload"><code><span class="field-name">hotReload</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hotReload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set to `true` to enable hot reload.
When enabled and used with `watchDirectory()`, assets will automatically
reload when their files change on disk.
Note: this won't do anything unless used in pair with `watchDirectory(path)`

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="flush"><code><span class="field-name">flush</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#flush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroy assets that have their refCount at `0`.
This is useful for cleaning up unused assets to free memory.
Assets with refCount > 0 are still in use and won't be destroyed.

<hr class="field-separator" />

<div class="signature field-method no-description" id="hasAsset"><code><span class="field-name">hasAsset</span><span class="parenthesis">(</span><span class="arg-name">asset</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Asset/" class="type-link">Asset</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `asset` | [Asset](/api-docs/clay-web/ceramic/Asset/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `id` | [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[Dynamic](/api-docs/clay-web/Dynamic/)> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addAll"><code><span class="field-name">addAll</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">pathPattern</span><span class="operator">:</span> <a href="/api-docs/clay-web/EReg/" class="type-link">EReg</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add all assets matching given path pattern (if provided).
Automatically detects asset types based on file extensions.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `pathPattern` | [EReg](/api-docs/clay-web/EReg/) | *(optional)* | Optional regex pattern to filter asset paths ```haxe // Add all assets assets.addAll(); // Add only assets in 'sprites' folder assets.addAll(~/^sprites\/.*$/); ``` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addImage"><code><span class="field-name">addImage</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addImage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addFont"><code><span class="field-name">addFont</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addAtlas"><code><span class="field-name">addAtlas</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addAtlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addText"><code><span class="field-name">addText</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addBinary"><code><span class="field-name">addBinary</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addBinary"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addSound"><code><span class="field-name">addSound</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addSound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addDatabase"><code><span class="field-name">addDatabase</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addDatabase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addFragments"><code><span class="field-name">addFragments</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addFragments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addShader"><code><span class="field-name">addShader</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addAsset"><code><span class="field-name">addAsset</span><span class="parenthesis">(</span><span class="arg-name">asset</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Asset/" class="type-link">Asset</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Asset/" class="type-link">Asset</a></code><a class="header-anchor" href="#addAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add the given asset to this Assets instance.
If an asset with the same kind and name already exists, it will be replaced.


| Name | Type | Description |
|------|------|-------------|
| `asset` | [Asset](/api-docs/clay-web/ceramic/Asset/) | The asset to add  |

| Returns | Description |
|---------|-------------|
| [Asset](/api-docs/clay-web/ceramic/Asset/) | The previous asset if one was replaced, null otherwise |

<hr class="field-separator" />

<div class="signature field-method no-description" id="imageAsset"><code><span class="field-name">imageAsset</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ImageAsset/" class="type-link">ImageAsset</a></code><a class="header-anchor" href="#imageAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |

| Returns |
|---------|
| [ImageAsset](/api-docs/clay-web/ceramic/ImageAsset/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fontAsset"><code><span class="field-name">fontAsset</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/FontAsset/" class="type-link">FontAsset</a></code><a class="header-anchor" href="#fontAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |

| Returns |
|---------|
| [FontAsset](/api-docs/clay-web/ceramic/FontAsset/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="atlasAsset"><code><span class="field-name">atlasAsset</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AtlasAsset/" class="type-link">AtlasAsset</a></code><a class="header-anchor" href="#atlasAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |

| Returns |
|---------|
| [AtlasAsset](/api-docs/clay-web/ceramic/AtlasAsset/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="textAsset"><code><span class="field-name">textAsset</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextAsset/" class="type-link">TextAsset</a></code><a class="header-anchor" href="#textAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |

| Returns |
|---------|
| [TextAsset](/api-docs/clay-web/ceramic/TextAsset/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="soundAsset"><code><span class="field-name">soundAsset</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/SoundAsset/" class="type-link">SoundAsset</a></code><a class="header-anchor" href="#soundAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |

| Returns |
|---------|
| [SoundAsset](/api-docs/clay-web/ceramic/SoundAsset/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="databaseAsset"><code><span class="field-name">databaseAsset</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/DatabaseAsset/" class="type-link">DatabaseAsset</a></code><a class="header-anchor" href="#databaseAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |

| Returns |
|---------|
| [DatabaseAsset](/api-docs/clay-web/ceramic/DatabaseAsset/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fragmentsAsset"><code><span class="field-name">fragmentsAsset</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/FragmentsAsset/" class="type-link">FragmentsAsset</a></code><a class="header-anchor" href="#fragmentsAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |

| Returns |
|---------|
| [FragmentsAsset](/api-docs/clay-web/ceramic/FragmentsAsset/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="shaderAsset"><code><span class="field-name">shaderAsset</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ShaderAsset/" class="type-link">ShaderAsset</a></code><a class="header-anchor" href="#shaderAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |

| Returns |
|---------|
| [ShaderAsset](/api-docs/clay-web/ceramic/ShaderAsset/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="asset"><code><span class="field-name">asset</span><span class="parenthesis">(</span><span class="arg-name">idOrName</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">kind</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Asset/" class="type-link">Asset</a></code><a class="header-anchor" href="#asset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `idOrName` | [Dynamic](/api-docs/clay-web/Dynamic/) | |
| `kind` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |

| Returns |
|---------|
| [Asset](/api-docs/clay-web/ceramic/Asset/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeAsset"><code><span class="field-name">removeAsset</span><span class="parenthesis">(</span><span class="arg-name">asset</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Asset/" class="type-link">Asset</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `asset` | [Asset](/api-docs/clay-web/ceramic/Asset/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="moveAll"><code><span class="field-name">moveAll</span><span class="parenthesis">(</span><span class="arg-name">toAssets</span><span class="operator">:</span> <a href="#" class="type-link">Assets</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#moveAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Move all assets owned by this `Assets` instance
to the given `toAssets` object.
Useful for transferring assets between scenes or asset groups.


| Name | Type | Description |
|------|------|-------------|
| `toAssets` | [Assets](/api-docs/clay-web/ceramic/Assets/) | The target Assets instance to move assets to |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hasAnythingToLoad"><code><span class="field-name">hasAnythingToLoad</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasAnythingToLoad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if there are assets that should be loaded.
Checks for assets with status NONE (not yet loaded).

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if there are unloaded assets, false otherwise |

<hr class="field-separator" />

<div class="signature field-method no-description" id="countAssetsWithStatus"><code><span class="field-name">countAssetsWithStatus</span><span class="parenthesis">(</span><span class="arg-name">status</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#countAssetsWithStatus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `status` | Anonymous |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">warnIfNothingToLoad</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/haxe/PosInfos/" class="type-link">haxe.PosInfos</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Load all assets that have been added to this instance.
Emits progress events during loading and complete event when finished.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `warnIfNothingToLoad` | [Bool](/api-docs/clay-web/Bool/) | `true` | If true, logs a warning when there are no assets to load  |
| `pos` | [Null](/api-docs/clay-web/Null/)<[haxe.PosInfos](/api-docs/clay-web/haxe/PosInfos/)> | *(optional)* | Source position for debugging (automatically provided) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ensure"><code><span class="field-name">ensure</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensure"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ensures and asset is loaded and return it on the callback.
This will check if the requested asset is currently being loaded,
already loaded or should be added and loaded. In all cases, it will try
its best to deliver the requested asset or `null` if something went wrong.

| Name | Type | Default |
|------|------|---------|
| `id` | [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[Dynamic](/api-docs/clay-web/Dynamic/)> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |
| `done` | Function | |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ensureImage"><code><span class="field-name">ensureImage</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensureImage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |
| `done` | Function | |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ensureFont"><code><span class="field-name">ensureFont</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensureFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |
| `done` | Function | |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ensureAtlas"><code><span class="field-name">ensureAtlas</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensureAtlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |
| `done` | Function | |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ensureText"><code><span class="field-name">ensureText</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensureText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |
| `done` | Function | |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ensureSound"><code><span class="field-name">ensureSound</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensureSound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |
| `done` | Function | |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ensureDatabase"><code><span class="field-name">ensureDatabase</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensureDatabase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |
| `done` | Function | |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ensureShader"><code><span class="field-name">ensureShader</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensureShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |
| `done` | Function | |

<hr class="field-separator" />

<div class="signature field-method has-description" id="texture"><code><span class="field-name">texture</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#texture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a loaded texture by name.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | | The texture name or asset ID  |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* | Optional variant suffix  |

| Returns | Description |
|---------|-------------|
| [Texture](/api-docs/clay-web/ceramic/Texture/) | The texture, or null if not found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="font"><code><span class="field-name">font</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/BitmapFont/" class="type-link">BitmapFont</a></code><a class="header-anchor" href="#font"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a loaded font by name.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | | The font name or asset ID  |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* | Optional variant suffix  |

| Returns | Description |
|---------|-------------|
| [BitmapFont](/api-docs/clay-web/ceramic/BitmapFont/) | The font, or null if not found |

<hr class="field-separator" />

<div class="signature field-method no-description" id="atlas"><code><span class="field-name">atlas</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a></code><a class="header-anchor" href="#atlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |

| Returns |
|---------|
| [TextureAtlas](/api-docs/clay-web/ceramic/TextureAtlas/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sound"><code><span class="field-name">sound</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Sound/" class="type-link">Sound</a></code><a class="header-anchor" href="#sound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a loaded sound by name.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | | The sound name or asset ID  |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* | Optional variant suffix  |

| Returns | Description |
|---------|-------------|
| [Sound](/api-docs/clay-web/ceramic/Sound/) | The sound, or null if not found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="text"><code><span class="field-name">text</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#text"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get loaded text content by name.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | | The text asset name or asset ID  |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* | Optional variant suffix  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The text content, or null if not found |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bytes"><code><span class="field-name">bytes</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#bytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |

| Returns |
|---------|
| [haxe.io.Bytes](/api-docs/clay-web/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="shader"><code><span class="field-name">shader</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Shader/" class="type-link">Shader</a></code><a class="header-anchor" href="#shader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a loaded shader by name.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | | The shader name or asset ID  |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* | Optional variant suffix  |

| Returns | Description |
|---------|-------------|
| [Shader](/api-docs/clay-web/ceramic/Shader/) | The shader, or null if not found |

<hr class="field-separator" />

<div class="signature field-method no-description" id="database"><code><span class="field-name">database</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#database"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[haxe.DynamicAccess](/api-docs/clay-web/haxe/DynamicAccess/)<[String](/api-docs/clay-web/String/)>> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fragments"><code><span class="field-name">fragments</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/FragmentData/" class="type-link">FragmentData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fragments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [Either](/api-docs/clay-web/ceramic/Either/)<[String](/api-docs/clay-web/String/), [AssetId](/api-docs/clay-web/ceramic/AssetId/)<[String](/api-docs/clay-web/String/)>> | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |

| Returns |
|---------|
| [haxe.DynamicAccess](/api-docs/clay-web/haxe/DynamicAccess/)<[FragmentData](/api-docs/clay-web/ceramic/FragmentData/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="iterator"><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Iterator](/api-docs/clay-web/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="watchDirectory"><code><span class="field-name">watchDirectory</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">hotReload</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/WatchDirectory/" class="type-link">WatchDirectory</a></code><a class="header-anchor" href="#watchDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Watch the given asset directory for changes.
Any file change will fire `assetFilesChange` event and optionally trigger hot reload.

This is particularly useful during development to see asset changes without restarting.
Behavior may differ depending on the platform.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `path` | [String](/api-docs/clay-web/String/) | *(optional)* | The assets path to watch. If null, uses the default assets path from project configuration. You can use `ceramic.macros.DefinesMacro.getJsonDefine('assets_path')` to get the default.  |
| `hotReload` | [Bool](/api-docs/clay-web/Bool/) | `true` | If true (default), assets will automatically reload when their files change  |

| Returns | Description |
|---------|-------------|
| [WatchDirectory](/api-docs/clay-web/ceramic/WatchDirectory/) | WatchDirectory instance used internally * ```haxe // Watch default assets directory with hot reload assets.watchDirectory(); * // Watch custom path without hot reload assets.watchDirectory('/path/to/assets', false); ``` * Note: When using web target via electron, add `ceramic_use_electron` define. |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="customAssetKinds"><code><span class="field-name">customAssetKinds</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#customAssetKinds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="reloadCountByRealAssetPath"><code><span class="field-name">reloadCountByRealAssetPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#reloadCountByRealAssetPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="lastModifiedByRealAssetPath"><code><span class="field-name">lastModifiedByRealAssetPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#lastModifiedByRealAssetPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="addedAssets"><code><span class="field-name">addedAssets</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/Asset/" class="type-link">Asset</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#addedAssets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="assetsByKindAndName"><code><span class="field-name">assetsByKindAndName</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#assetsByKindAndName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pendingAtlasPackers"><code><span class="field-name">pendingAtlasPackers</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/TextureAtlasPacker/" class="type-link">TextureAtlasPacker</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pendingAtlasPackers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="incrementReloadCount"><code><span class="field-name">incrementReloadCount</span><span class="parenthesis">(</span><span class="arg-name">realAssetPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#incrementReloadCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `realAssetPath` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitComplete"><code><span class="field-name">emitComplete</span><span class="parenthesis">(</span><span class="arg-name">success</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitComplete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when all assets have finished loading.


| Name | Type | Description |
|------|------|-------------|
| `success` | [Bool](/api-docs/clay-web/Bool/) | True if all assets loaded successfully, false if any failed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitUpdate"><code><span class="field-name">emitUpdate</span><span class="parenthesis">(</span><span class="arg-name">asset</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Asset/" class="type-link">Asset</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when an individual asset is updated (loaded, reloaded, etc).


| Name | Type | Description |
|------|------|-------------|
| `asset` | [Asset](/api-docs/clay-web/ceramic/Asset/) | The asset that was updated |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitProgress"><code><span class="field-name">emitProgress</span><span class="parenthesis">(</span><span class="arg-name">loaded</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">total</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">success</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitProgress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted during loading to report progress.


| Name | Type | Description |
|------|------|-------------|
| `loaded` | [Int](/api-docs/clay-web/Int/) | Number of assets loaded so far  |
| `total` | [Int](/api-docs/clay-web/Int/) | Total number of assets to load  |
| `success` | [Bool](/api-docs/clay-web/Bool/) | True if all loaded assets succeeded so far |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitAssetFilesChange"><code><span class="field-name">emitAssetFilesChange</span><span class="parenthesis">(</span><span class="arg-name">newFiles</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previousFiles</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitAssetFilesChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when watched asset files change on disk.


| Name | Type | Description |
|------|------|-------------|
| `newFiles` | [ReadOnlyMap](/api-docs/clay-web/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-web/String/), [Float](/api-docs/clay-web/Float/)> | Map of file paths to their modification times after change  |
| `previousFiles` | [ReadOnlyMap](/api-docs/clay-web/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-web/String/), [Float](/api-docs/clay-web/Float/)> | Map of file paths to their modification times before change |

<hr class="field-separator" />

<div class="signature field-method no-description" id="assetDestroyed"><code><span class="field-name">assetDestroyed</span><span class="parenthesis">(</span><span class="arg-name">_</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assetDestroyed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `_` | [Entity](/api-docs/clay-web/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addPendingAtlasPacker"><code><span class="field-name">addPendingAtlasPacker</span><span class="parenthesis">(</span><span class="arg-name">atlasPacker</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureAtlasPacker/" class="type-link">TextureAtlasPacker</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addPendingAtlasPacker"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `atlasPacker` | [TextureAtlasPacker](/api-docs/clay-web/ceramic/TextureAtlasPacker/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:allow` | ceramic.Asset |

