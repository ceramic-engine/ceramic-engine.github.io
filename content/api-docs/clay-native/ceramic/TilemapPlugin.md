---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: TilemapPlugin
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/TilemapPlugin/
---

# TilemapPlugin

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/TilemapPlugin.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TilemapPlugin</strong> (Class)</div>

Main plugin class that integrates tilemap support into Ceramic.

The TilemapPlugin extends the asset system to support loading and managing tilemap files,
including TMX (Tiled Map Editor) and optionally LDtk formats. It provides convenience
methods for working with tilemap assets and manages parser instances and caching.

## Features

- **Asset Integration**: Adds 'tilemap' asset kind to the asset system
- **Format Support**: TMX files, with optional LDtk support
- **Parser Management**: Maintains parser instances per Assets object
- **TSX Caching**: Caches external tileset data for performance
- **Type Conversion**: Registers TilemapData converter for serialization

## Usage Example

```haxe
// Add a tilemap asset
assets.addTilemap('level1');

// Load and use tilemap data
assets.onceComplete(this, function(success) {
    var tilemapData = assets.tilemap('level1');
    var tilemap = new Tilemap();
    tilemap.tilemapData = tilemapData;
});

// Access LDtk data (if available)
var ldtkData = assets.ldtk('myLevel');
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/TilemapAsset/">TilemapAsset</a>, <a href="/api-docs/clay-native/ceramic/TilemapData/">TilemapData</a>, <a href="/api-docs/clay-native/ceramic/TilemapParser/">TilemapParser</a></div>


## Static Members

<div class="signature field-method has-description has-plugin" id="ldtk"><div class="plugin-name">ldtk</div><code><span class="field-name">ldtk</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-native/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkData/" class="type-link">LdtkData</a></code><a class="header-anchor" href="#ldtk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the LdtkData from a loaded LDtk tilemap asset.
Only available when the ldtk plugin is enabled.


| Name | Type | Description |
|------|------|-------------|
| `assets` | [Assets](/api-docs/clay-native/ceramic/Assets/) | The assets manager  |
| `name` | [Either](/api-docs/clay-native/ceramic/Either/)<[String](/api-docs/clay-native/String/), [AssetId](/api-docs/clay-native/ceramic/AssetId/)<[String](/api-docs/clay-native/String/)>> | The LDtk file name or asset ID  |

| Returns | Description |
|---------|-------------|
| [LdtkData](/api-docs/clay-native/ceramic/LdtkData/) | The LdtkData instance, or null if not found or not an LDtk file |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="addTilemap"><div class="plugin-name">tilemap</div><code><span class="field-name">addTilemap</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addTilemap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a tilemap asset to the asset manager.
The tilemap will be loaded from a file with the given name and appropriate extension (.tmx or .ldtk).


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | [Assets](/api-docs/clay-native/ceramic/Assets/) | | The assets manager to add the tilemap to  |
| `name` | [String](/api-docs/clay-native/String/) | | The name of the tilemap file (without extension)  |
| `variant` | [String](/api-docs/clay-native/String/) | *(optional)* | Optional variant suffix for the file  |
| `options` | [Null](/api-docs/clay-native/Null/)<[AssetOptions](/api-docs/clay-native/ceramic/AssetOptions/)> | *(optional)* | Optional asset loading options |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="ensureTilemap"><div class="plugin-name">tilemap</div><code><span class="field-name">ensureTilemap</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-native/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensureTilemap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ensures a tilemap asset is loaded, loading it if necessary.
This method is useful when you need to guarantee an asset is available before using it.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | [Assets](/api-docs/clay-native/ceramic/Assets/) | | The assets manager  |
| `name` | [Either](/api-docs/clay-native/ceramic/Either/)<[String](/api-docs/clay-native/String/), [AssetId](/api-docs/clay-native/ceramic/AssetId/)<[String](/api-docs/clay-native/String/)>> | | The tilemap name or asset ID  |
| `variant` | [String](/api-docs/clay-native/String/) | *(optional)* | Optional variant suffix  |
| `options` | [Null](/api-docs/clay-native/Null/)<[AssetOptions](/api-docs/clay-native/ceramic/AssetOptions/)> | *(optional)* | Optional loading options  |
| `done` | Function | | Callback that receives the loaded TilemapAsset (or null if loading failed) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tilemap"><div class="plugin-name">tilemap</div><code><span class="field-name">tilemap</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-native/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TilemapData/" class="type-link">TilemapData</a></code><a class="header-anchor" href="#tilemap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the TilemapData from a loaded tilemap asset.
Returns null if the asset is not found or not loaded.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | [Assets](/api-docs/clay-native/ceramic/Assets/) | | The assets manager  |
| `name` | [Either](/api-docs/clay-native/ceramic/Either/)<[String](/api-docs/clay-native/String/), [AssetId](/api-docs/clay-native/ceramic/AssetId/)<[String](/api-docs/clay-native/String/)>> | | The tilemap name or asset ID  |
| `variant` | [String](/api-docs/clay-native/String/) | *(optional)* | Optional variant suffix  |

| Returns | Description |
|---------|-------------|
| [TilemapData](/api-docs/clay-native/ceramic/TilemapData/) | The TilemapData instance, or null if not found |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tilemapAsset"><div class="plugin-name">tilemap</div><code><span class="field-name">tilemapAsset</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-native/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TilemapAsset/" class="type-link">TilemapAsset</a></code><a class="header-anchor" href="#tilemapAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the TilemapAsset instance for the given name.
Searches in the current assets manager and its parents.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | [Assets](/api-docs/clay-native/ceramic/Assets/) | | The assets manager  |
| `name` | [Either](/api-docs/clay-native/ceramic/Either/)<[String](/api-docs/clay-native/String/), [AssetId](/api-docs/clay-native/ceramic/AssetId/)<[String](/api-docs/clay-native/String/)>> | | The tilemap name or asset ID  |
| `variant` | [String](/api-docs/clay-native/String/) | *(optional)* | Optional variant suffix  |

| Returns | Description |
|---------|-------------|
| [TilemapAsset](/api-docs/clay-native/ceramic/TilemapAsset/) | The TilemapAsset instance, or null if not found |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTilemapParser"><div class="plugin-name">tilemap</div><code><span class="field-name">getTilemapParser</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Assets/" class="type-link">Assets</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TilemapParser/" class="type-link">TilemapParser</a></code><a class="header-anchor" href="#getTilemapParser"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return the tilemap parser instance associated with this `Assets` object.
The first time, creates an instance, then reuses it.


| Name | Type | Description |
|------|------|-------------|
| `assets` | [Assets](/api-docs/clay-native/ceramic/Assets/) | * |

| Returns | Description |
|---------|-------------|
| [TilemapParser](/api-docs/clay-native/ceramic/TilemapParser/) | TilemapParser |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getRawTsxCache"><div class="plugin-name">tilemap</div><code><span class="field-name">getRawTsxCache</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Assets/" class="type-link">Assets</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#getRawTsxCache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return a string map to read and store raw TSX cached data


| Name | Type | Description |
|------|------|-------------|
| `assets` | [Assets](/api-docs/clay-native/ceramic/Assets/) | * |

| Returns | Description |
|---------|-------------|
| [Map](/api-docs/clay-native/Map/) | Map<String,String> |

## Private Members

<div class="signature field-method has-description has-plugin" id="pluginInit"><div class="plugin-name">tilemap</div><code><span class="field-name">pluginInit</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pluginInit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes the tilemap plugin during application startup.
This method is called automatically by the plugin system.
Registers the 'tilemap' asset kind and sets up converters.

## Metadata

| Name | Parameters |
|------|------------|
| `:access` | ceramic.App |

