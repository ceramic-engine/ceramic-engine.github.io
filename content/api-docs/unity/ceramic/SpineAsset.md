---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SpineAsset
target: Unity
permalink: api-docs/unity/ceramic/SpineAsset/
---

# SpineAsset

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/SpineAsset.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Asset/">Asset</a> → <strong>ceramic.SpineAsset</strong> (Class)</div>

Asset loader for Spine 2D skeletal animation data.

This asset handles loading Spine JSON files along with their associated
texture atlases and images. It automatically manages:
- JSON skeleton data parsing
- Atlas file loading with texture page management
- Hot-reloading when source files change
- Texture density switching for different screen resolutions
- Spine data lifecycle and memory management

## File Structure

A typical Spine asset folder contains:
- `skeleton.json` - The skeleton and animation data
- `skeleton.atlas` - Texture atlas definition
- `skeleton.png` - One or more texture pages

## Usage Example

```haxe
var spineAsset = assets.spine('hero');
var spine = new Spine();
spine.spineData = spineAsset.spineData;
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/SpineData/">SpineData</a>, <a href="/api-docs/unity/ceramic/Spine/">Spine</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="json"><div class="plugin-name">spine</div><code><span class="field-name">json</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#json"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The raw JSON string containing the skeleton data.
Available after the asset is loaded.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="atlas"><div class="plugin-name">spine</div><code><span class="field-name">atlas</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/graphics/TextureAtlas/" class="type-link">spine.support.graphics.TextureAtlas</a></code><a class="header-anchor" href="#atlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The parsed texture atlas containing all texture regions.
Maps skeleton attachments to texture coordinates.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="spineData"><div class="plugin-name">spine</div><code><span class="field-name">spineData</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/SpineData/" class="type-link">SpineData</a></code><a class="header-anchor" href="#spineData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The fully loaded Spine data ready for use in animations.
Contains skeleton structure, animations, and texture references.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="scale"><div class="plugin-name">spine</div><code><span class="field-name">scale</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scale factor applied to the skeleton data.
Use this to adjust the size of Spine animations at load time.
Default is 1.0.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pages"><div class="plugin-name">spine</div><code><span class="field-name">pages</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#pages"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of atlas pages to their corresponding image assets.
Used internally to manage texture loading and lifecycle.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateSpineData"><div class="plugin-name">spine</div><code><span class="field-name">invalidateSpineData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateSpineData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="load"><div class="plugin-name">spine</div><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads the Spine asset files.

This method:
1. Discovers JSON and atlas files in the asset folder
2. Loads the JSON skeleton data
3. Loads the atlas file and its texture pages
4. Creates the SpineData instance
5. Handles hot-reload if files were previously loaded

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="destroy"><div class="plugin-name">spine</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cleans up the asset and releases all resources.
Destroys the SpineData and all associated textures.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Spine asset.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | [String](/api-docs/unity/String/) | | The asset name (typically the folder name containing Spine files)  |
| `variant` | [String](/api-docs/unity/String/) | *(optional)* | Optional variant for different asset versions  |
| `options` | [Null](/api-docs/unity/Null/)<[AssetOptions](/api-docs/unity/ceramic/AssetOptions/)> | *(optional)* | Asset loading options, including scale factor |

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedSpineData"><div class="plugin-name">spine</div><code><span class="field-name">unobservedSpineData</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/SpineData/" class="type-link">SpineData</a></code><a class="header-anchor" href="#unobservedSpineData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="atlasAsset"><div class="plugin-name">spine</div><code><span class="field-name">atlasAsset</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TextAsset/" class="type-link">TextAsset</a></code><a class="header-anchor" href="#atlasAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitReplaceSpineData"><div class="plugin-name">spine</div><code><span class="field-name">emitReplaceSpineData</span><span class="parenthesis">(</span><span class="arg-name">newSpineData</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/SpineData/" class="type-link">SpineData</a><span class="operator">,</span> <span class="arg-name">prevSpineData</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/SpineData/" class="type-link">SpineData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitReplaceSpineData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when the spine data is replaced during hot-reload.
This allows Spine instances to update their data automatically.



| Name | Type | Description |
|------|------|-------------|
| `newSpineData` | [SpineData](/api-docs/unity/ceramic/SpineData/) | The newly loaded spine data  |
| `prevSpineData` | [SpineData](/api-docs/unity/ceramic/SpineData/) | The previous spine data being replaced |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitSpineDataChange"><div class="plugin-name">spine</div><code><span class="field-name">emitSpineDataChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/SpineData/" class="type-link">SpineData</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/SpineData/" class="type-link">SpineData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSpineDataChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when spineData field changes.

| Name | Type |
|------|------|
| `current` | [SpineData](/api-docs/unity/ceramic/SpineData/) |
| `previous` | [SpineData](/api-docs/unity/ceramic/SpineData/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="loadPage"><div class="plugin-name">spine</div><code><span class="field-name">loadPage</span><span class="parenthesis">(</span><span class="arg-name">page</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/graphics/AtlasPage/" class="type-link">spine.support.graphics.AtlasPage</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">basePath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadPage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads a texture page for the atlas.

Called by the SpineTextureLoader when the atlas references a texture.
Creates an ImageAsset for each texture page and tracks it.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `page` | [spine.support.graphics.AtlasPage](/api-docs/unity/spine/support/graphics/AtlasPage/) | | The atlas page to load  |
| `path` | [String](/api-docs/unity/String/) | | The texture file path  |
| `basePath` | [String](/api-docs/unity/String/) | *(optional)* | Optional base directory path |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="unloadPage"><div class="plugin-name">spine</div><code><span class="field-name">unloadPage</span><span class="parenthesis">(</span><span class="arg-name">page</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/graphics/AtlasPage/" class="type-link">spine.support.graphics.AtlasPage</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unloadPage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unloads a texture page from memory.

Removes the page from tracking and destroys its image asset.



| Name | Type | Description |
|------|------|-------------|
| `page` | [spine.support.graphics.AtlasPage](/api-docs/unity/spine/support/graphics/AtlasPage/) | The atlas page to unload |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="texturesDensityDidChange"><div class="plugin-name">spine</div><code><span class="field-name">texturesDensityDidChange</span><span class="parenthesis">(</span><span class="arg-name">newDensity</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">prevDensity</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#texturesDensityDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when the texture density changes (e.g., switching to @2x textures).
Triggers a reload if the atlas path changes due to density.

| Name | Type |
|------|------|
| `newDensity` | [Float](/api-docs/unity/Float/) |
| `prevDensity` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="checkTexturesDensity"><div class="plugin-name">spine</div><code><span class="field-name">checkTexturesDensity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#checkTexturesDensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if texture density change requires reloading the asset.
This happens when different density atlases are available.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="assetFilesDidChange"><div class="plugin-name">spine</div><code><span class="field-name">assetFilesDidChange</span><span class="parenthesis">(</span><span class="arg-name">newFiles</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previousFiles</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assetFilesDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles hot-reload when asset files change on disk.
Automatically reloads the Spine data when source files are modified.

| Name | Type |
|------|------|
| `newFiles` | [ReadOnlyMap](/api-docs/unity/ceramic/ReadOnlyMap/)<[String](/api-docs/unity/String/), [Float](/api-docs/unity/Float/)> |
| `previousFiles` | [ReadOnlyMap](/api-docs/unity/ceramic/ReadOnlyMap/)<[String](/api-docs/unity/String/), [Float](/api-docs/unity/Float/)> |

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

