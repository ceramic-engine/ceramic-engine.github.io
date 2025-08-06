---
layout: api-docs
category: api-docs
subCategory: doc
menu: Sprite
title: SpriteAsset
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/SpriteAsset/
---

# SpriteAsset

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/sprite/runtime/src/ceramic/SpriteAsset.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/Asset/">Asset</a> → <strong>ceramic.SpriteAsset</strong> (Class)</div>

Asset loader for sprite sheets and animations.
Supports multiple formats:
- Aseprite JSON format (.sprite files)
- Native Aseprite files (.ase, .aseprite) when ase plugin is enabled
- Custom sprite sheet formats via SpriteSheetParser

Automatically handles:
- Texture atlas loading and management
- Hot-reload support for development
- Animation parsing from frame tags
- Memory management and reference counting

Example usage:
```haxe
assets.add(Sprites.CHARACTER);
assets.onceComplete(this, success -> {
    var sprite = new Sprite();
    sprite.sheet = assets.sheet(Sprites.CHARACTER);
    sprite.animation = "idle";
});
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="sheet"><div class="plugin-name">sprite</div><code><span class="field-name">sheet</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/SpriteSheet/" class="type-link">SpriteSheet</a></code><a class="header-anchor" href="#sheet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The loaded sprite sheet containing animations.
Available after successful loading.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="text"><div class="plugin-name">sprite</div><code><span class="field-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#text"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Raw text content of the sprite data file.
Contains the JSON or other format data before parsing.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="atlas"><div class="plugin-name">sprite</div><code><span class="field-name">atlas</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a></code><a class="header-anchor" href="#atlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The texture atlas associated with this sprite.
Retrieved from the internal atlas asset.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateSheet"><div class="plugin-name">sprite</div><code><span class="field-name">invalidateSheet</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateSheet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateText"><div class="plugin-name">sprite</div><code><span class="field-name">invalidateText</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="load"><div class="plugin-name">sprite</div><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Load the sprite asset.
Automatically detects format based on file extension and loads appropriately.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="destroy"><div class="plugin-name">sprite</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clean up and destroy the sprite asset.
Destroys associated sheet and Aseprite data if present.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">sprite</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedSheet"><div class="plugin-name">sprite</div><code><span class="field-name">unobservedSheet</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/SpriteSheet/" class="type-link">SpriteSheet</a></code><a class="header-anchor" href="#unobservedSheet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedText"><div class="plugin-name">sprite</div><code><span class="field-name">unobservedText</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="atlasAsset"><div class="plugin-name">sprite</div><code><span class="field-name">atlasAsset</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AtlasAsset/" class="type-link">AtlasAsset</a></code><a class="header-anchor" href="#atlasAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="asepriteData"><div class="plugin-name">sprite</div><code><span class="field-name">asepriteData</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AsepriteData/" class="type-link">AsepriteData</a></code><a class="header-anchor" href="#asepriteData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitSheetChange"><div class="plugin-name">sprite</div><code><span class="field-name">emitSheetChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/SpriteSheet/" class="type-link">SpriteSheet</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/SpriteSheet/" class="type-link">SpriteSheet</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSheetChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when sheet field changes.

| Name | Type |
|------|------|
| `current` | [SpriteSheet](/api-docs/clay-web/ceramic/SpriteSheet/) |
| `previous` | [SpriteSheet](/api-docs/clay-web/ceramic/SpriteSheet/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTextChange"><div class="plugin-name">sprite</div><code><span class="field-name">emitTextChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTextChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when text field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/clay-web/String/) |
| `previous` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="asepritePostPack"><div class="plugin-name">sprite</div><code><span class="field-name">asepritePostPack</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#asepritePostPack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="loadSpriteSheet"><div class="plugin-name">sprite</div><code><span class="field-name">loadSpriteSheet</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadSpriteSheet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Load a standard sprite sheet file (.sprite or other custom formats).
Uses SpriteSheetParser to parse the data after loading the atlas.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="loadAse"><div class="plugin-name">sprite</div><code><span class="field-name">loadAse</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadAse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Load a native Aseprite file (.ase or .aseprite).
Extracts frames and animations directly from the binary format.
Requires the ase plugin to be enabled.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="parseAtlas"><div class="plugin-name">sprite</div><code><span class="field-name">parseAtlas</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a></code><a class="header-anchor" href="#parseAtlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom atlas parsing method provided to AtlasAsset.
Delegates to SpriteSheetParser for sprite-specific atlas formats.


| Name | Type | Description |
|------|------|-------------|
| `text` | [String](/api-docs/clay-web/String/) | The raw atlas text data  |

| Returns | Description |
|---------|-------------|
| [TextureAtlas](/api-docs/clay-web/ceramic/TextureAtlas/) | Parsed texture atlas |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="assetFilesDidChange"><div class="plugin-name">sprite</div><code><span class="field-name">assetFilesDidChange</span><span class="parenthesis">(</span><span class="arg-name">newFiles</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previousFiles</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assetFilesDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handle file change notifications for hot-reload.
Automatically reloads the sprite when the source file changes.


| Name | Type | Description |
|------|------|-------------|
| `newFiles` | [ReadOnlyMap](/api-docs/clay-web/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-web/String/), [Float](/api-docs/clay-web/Float/)> | Map of current file paths to modification times  |
| `previousFiles` | [ReadOnlyMap](/api-docs/clay-web/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-web/String/), [Float](/api-docs/clay-web/Float/)> | Map of previous file paths to modification times |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |

