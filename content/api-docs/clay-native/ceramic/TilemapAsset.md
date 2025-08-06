---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: TilemapAsset
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/TilemapAsset/
---

# TilemapAsset

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/TilemapAsset.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/Asset/">Asset</a> → <strong>ceramic.TilemapAsset</strong> (Class)</div>

Asset type for loading tilemap data from various formats (TMX, LDtk).
Handles loading of tilemap files, external tilesets, and associated textures.

Supported formats:
- TMX (Tiled Map Editor): XML-based format with optional external TSX tilesets
- LDtk (Level Designer Toolkit): JSON-based format with modern features

The asset automatically:
- Parses tilemap data into a unified TilemapData structure
- Loads required tileset textures
- Handles external tileset references
- Supports hot-reloading when files change
- Manages texture density changes for different screen resolutions

## Usage Example:
```haxe
// Load a TMX tilemap
assets.add(Tilemaps.LEVEL1);
assets.load();

// Access the tilemap data
var tilemapData = assets.tilemap(Tilemaps.LEVEL1).tilemapData;

// Create a visual from the data
var tilemap = new Tilemap();
tilemap.tilemapData = tilemapData;
```

<div class="see"><strong>See:</strong> TilemapData The unified tilemap data structure, Tilemap The visual component for rendering tilemaps, TilemapParser For parsing tilemap formats</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="ldtkData"><div class="plugin-name">ldtk</div><code><span class="field-name">ldtkData</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkData/" class="type-link">LdtkData</a></code><a class="header-anchor" href="#ldtkData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If the tilemap originates from an LDtk file, this contains
the complete LDtk data structure. Provides access to:
- All levels in the project
- Entity instances
- Custom fields
- Generated tilemaps

This is null for non-LDtk tilemaps.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tmxMap"><div class="plugin-name">tilemap</div><code><span class="field-name">tmxMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxMap/" class="type-link">format.tmx.TmxMap</a></code><a class="header-anchor" href="#tmxMap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If the tilemap originates from a Tiled/TMX file, this contains
the raw TMX data structure. Useful for accessing custom properties,
object layers, or other TMX-specific features not converted to TilemapData.

This is null for non-TMX tilemaps.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tilemapData"><div class="plugin-name">tilemap</div><code><span class="field-name">tilemapData</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TilemapData/" class="type-link">TilemapData</a></code><a class="header-anchor" href="#tilemapData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The unified tilemap data that can be used with Ceramic's Tilemap visual.
This is the primary output of the asset, containing layers, tilesets,
and tile placement data in a format-agnostic structure.

For TMX files, this contains the first/main tilemap.
For LDtk files, access individual level tilemaps through ldtkData.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTmxMap"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateTmxMap</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTmxMap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateLdtkData"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateLdtkData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateLdtkData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTilemapData"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateTilemapData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTilemapData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="load"><div class="plugin-name">tilemap</div><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="destroy"><div class="plugin-name">tilemap</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cleans up the tilemap asset and all associated data.
Destroys:
- The TilemapData instance
- The LDtk data (if applicable)
- References to TMX data
- All loaded textures and sub-assets

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">tilemap</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-native/String/) | |
| `variant` | [String](/api-docs/clay-native/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-native/Null/)<[AssetOptions](/api-docs/clay-native/ceramic/AssetOptions/)> | *(optional)* |

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedTmxMap"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedTmxMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxMap/" class="type-link">format.tmx.TmxMap</a></code><a class="header-anchor" href="#unobservedTmxMap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedLdtkData"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedLdtkData</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkData/" class="type-link">LdtkData</a></code><a class="header-anchor" href="#unobservedLdtkData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTilemapData"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedTilemapData</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TilemapData/" class="type-link">TilemapData</a></code><a class="header-anchor" href="#unobservedTilemapData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tsxRawData"><div class="plugin-name">tilemap</div><code><span class="field-name">tsxRawData</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#tsxRawData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cache for external TSX tileset data loaded from separate files.
Maps from tileset source path to raw XML content.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ldtkExternalSources"><div class="plugin-name">tilemap</div><code><span class="field-name">ldtkExternalSources</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ldtkExternalSources"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of external LDtk level file paths for hot-reload monitoring.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTmxMapChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitTmxMapChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxMap/" class="type-link">format.tmx.TmxMap</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxMap/" class="type-link">format.tmx.TmxMap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTmxMapChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tmxMap field changes.

| Name | Type |
|------|------|
| `current` | [format.tmx.TmxMap](/api-docs/clay-native/format/tmx/TmxMap/) |
| `previous` | [format.tmx.TmxMap](/api-docs/clay-native/format/tmx/TmxMap/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitLdtkDataChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitLdtkDataChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkData/" class="type-link">LdtkData</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkData/" class="type-link">LdtkData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLdtkDataChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when ldtkData field changes.

| Name | Type |
|------|------|
| `current` | [LdtkData](/api-docs/clay-native/ceramic/LdtkData/) |
| `previous` | [LdtkData](/api-docs/clay-native/ceramic/LdtkData/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTilemapDataChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitTilemapDataChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TilemapData/" class="type-link">TilemapData</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TilemapData/" class="type-link">TilemapData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTilemapDataChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tilemapData field changes.

| Name | Type |
|------|------|
| `current` | [TilemapData](/api-docs/clay-native/ceramic/TilemapData/) |
| `previous` | [TilemapData](/api-docs/clay-native/ceramic/TilemapData/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="loadTmxTiledMap"><div class="plugin-name">tilemap</div><code><span class="field-name">loadTmxTiledMap</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadTmxTiledMap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads a TMX (Tiled Map Editor) format tilemap.
Handles:
1. Loading the main TMX file
2. Loading external TSX tilesets if referenced
3. Parsing the XML data into TmxMap structure
4. Converting to unified TilemapData
5. Loading all required textures

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="loadExternalTsxTilesetData"><div class="plugin-name">tilemap</div><code><span class="field-name">loadExternalTsxTilesetData</span><span class="parenthesis">(</span><span class="arg-name">rawTmxData</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadExternalTsxTilesetData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads external TSX tileset files referenced by the TMX map.
TSX files allow sharing tilesets between multiple maps.

This method:
- Parses the TMX to find external tileset references
- Checks the cache for already-loaded TSX data
- Loads any missing TSX files
- Caches the results for future use



| Name | Type | Description |
|------|------|-------------|
| `rawTmxData` | [String](/api-docs/clay-native/String/) | The raw TMX XML content  |
| `done` | Function | Callback with success status |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="addTilesetTextAsset"><div class="plugin-name">tilemap</div><code><span class="field-name">addTilesetTextAsset</span><span class="parenthesis">(</span><span class="arg-name">textAssets</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addTilesetTextAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a text asset for loading an external TSX tileset file.



| Name | Type | Description |
|------|------|-------------|
| `textAssets` | [Assets](/api-docs/clay-native/ceramic/Assets/) | The Assets instance to add the asset to  |
| `source` | [String](/api-docs/clay-native/String/) | The relative path to the TSX file from the TMX location |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="resolveTsxRawData"><div class="plugin-name">tilemap</div><code><span class="field-name">resolveTsxRawData</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">cwd</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#resolveTsxRawData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resolves raw TSX data from the cache by filename.
Called by the parser when it encounters an external tileset reference.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | The TSX filename to resolve  |
| `cwd` | [String](/api-docs/clay-native/String/) | The current working directory (unused but part of parser interface)  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | The raw TSX XML content, or null if not loaded |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="loadTextureFromSource"><div class="plugin-name">tilemap</div><code><span class="field-name">loadTextureFromSource</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">configureAsset</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadTextureFromSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads a texture from a source path, used by tileset loading.

This method:
- Checks if the texture is already loaded
- Creates an ImageAsset if needed
- Configures the asset (e.g., for filtering)
- Shares loaded textures with the owner Assets instance
- Sets NEAREST filter by default (pixel-perfect for tilemaps)



| Name | Type | Description |
|------|------|-------------|
| `source` | [String](/api-docs/clay-native/String/) | The relative path to the image file  |
| `configureAsset` | Function | Optional callback to configure the ImageAsset  |
| `done` | Function | Callback that receives the loaded texture (or null on failure) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="loadLdtk"><div class="plugin-name">tilemap</div><code><span class="field-name">loadLdtk</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadLdtk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads an LDtk (Level Designer Toolkit) format tilemap project.

Handles:
1. Loading the main .ldtk JSON file
2. Loading external level files if the project uses them
3. Parsing the LDtk data structure
4. Loading tileset textures for all levels
5. Generating TilemapData for each level

The `skip` option in AssetOptions can exclude specific levels from loading.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="loadExternalLdtkLevelData"><div class="plugin-name">tilemap</div><code><span class="field-name">loadExternalLdtkLevelData</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadExternalLdtkLevelData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads an external LDtk level file (.ldtkl).
Used when LDtk projects are configured to save levels in separate files.



| Name | Type | Description |
|------|------|-------------|
| `source` | [String](/api-docs/clay-native/String/) | The path to the external level file  |
| `callback` | Function | Receives the raw level JSON data, or null on failure |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="texturesDensityDidChange"><div class="plugin-name">tilemap</div><code><span class="field-name">texturesDensityDidChange</span><span class="parenthesis">(</span><span class="arg-name">newDensity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">prevDensity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#texturesDensityDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles texture density changes for responsive asset loading.
Called when the screen density changes (e.g., moving between displays).



| Name | Type | Description |
|------|------|-------------|
| `newDensity` | [Float](/api-docs/clay-native/Float/) | The new texture density multiplier  |
| `prevDensity` | [Float](/api-docs/clay-native/Float/) | The previous texture density multiplier |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="checkTexturesDensity"><div class="plugin-name">tilemap</div><code><span class="field-name">checkTexturesDensity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#checkTexturesDensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks and updates textures for the current screen density.
Currently a no-op as tileset textures handle density changes themselves,
but kept for potential future use.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="assetFilesDidChange"><div class="plugin-name">tilemap</div><code><span class="field-name">assetFilesDidChange</span><span class="parenthesis">(</span><span class="arg-name">newFiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previousFiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assetFilesDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles file change notifications for hot-reloading.
Automatically reloads the tilemap when:
- The main tilemap file changes
- Any external level files change (LDtk)
- Any referenced tileset files change



| Name | Type | Description |
|------|------|-------------|
| `newFiles` | [ReadOnlyMap](/api-docs/clay-native/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-native/String/), [Float](/api-docs/clay-native/Float/)> | Map of current file paths to modification times  |
| `previousFiles` | [ReadOnlyMap](/api-docs/clay-native/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-native/String/), [Float](/api-docs/clay-native/Float/)> | Map of previous file paths to modification times |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |

