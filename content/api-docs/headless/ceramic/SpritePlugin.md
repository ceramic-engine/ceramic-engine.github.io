---
layout: api-docs
category: api-docs
subCategory: doc
menu: Sprite
title: SpritePlugin
target: Headless
permalink: api-docs/headless/ceramic/SpritePlugin/
---

# SpritePlugin

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/sprite/runtime/src/ceramic/SpritePlugin.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SpritePlugin</strong> (Class)</div>

Plugin that adds sprite sheet and animation support to Ceramic.

Provides:
- SpriteAsset loading for various sprite sheet formats
- Sprite visual for animated sprites
- SpriteSystem for automatic sprite updates
- Asset extensions for easy sprite access

Supported formats:
- Aseprite JSON exports (.sprite files)
- Native Aseprite files (.ase, .aseprite) when ase plugin is enabled

This plugin is automatically initialized when included in the project.

## Static Members

<div class="signature field-method has-description has-plugin" id="addSprite"><div class="plugin-name">sprite</div><code><span class="field-name">addSprite</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addSprite"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add a sprite asset to the assets list for loading.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | [Assets](/api-docs/headless/ceramic/Assets/) | | The assets instance to add to  |
| `name` | [String](/api-docs/headless/String/) | | The sprite asset name (without 'sprite:' prefix)  |
| `variant` | [String](/api-docs/headless/String/) | *(optional)* | Optional variant name  |
| `options` | [Null](/api-docs/headless/Null/)<[AssetOptions](/api-docs/headless/ceramic/AssetOptions/)> | *(optional)* | Loading options |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="ensureSprite"><div class="plugin-name">sprite</div><code><span class="field-name">ensureSprite</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensureSprite"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ensure a sprite asset is loaded, loading it if necessary.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | [Assets](/api-docs/headless/ceramic/Assets/) | | The assets instance  |
| `name` | [Either](/api-docs/headless/ceramic/Either/)<[String](/api-docs/headless/String/), [AssetId](/api-docs/headless/ceramic/AssetId/)<[String](/api-docs/headless/String/)>> | | The sprite asset name or AssetId  |
| `variant` | [String](/api-docs/headless/String/) | *(optional)* | Optional variant name  |
| `options` | [Null](/api-docs/headless/Null/)<[AssetOptions](/api-docs/headless/ceramic/AssetOptions/)> | *(optional)* | Loading options  |
| `done` | Function | | Callback with the loaded SpriteAsset |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="sheet"><div class="plugin-name">sprite</div><code><span class="field-name">sheet</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SpriteSheet/" class="type-link">SpriteSheet</a></code><a class="header-anchor" href="#sheet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a loaded sprite sheet by name.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | [Assets](/api-docs/headless/ceramic/Assets/) | | The assets instance  |
| `name` | [Either](/api-docs/headless/ceramic/Either/)<[String](/api-docs/headless/String/), [AssetId](/api-docs/headless/ceramic/AssetId/)<[String](/api-docs/headless/String/)>> | | The sprite asset name or AssetId  |
| `variant` | [String](/api-docs/headless/String/) | *(optional)* | Optional variant name  |

| Returns | Description |
|---------|-------------|
| [SpriteSheet](/api-docs/headless/ceramic/SpriteSheet/) | The SpriteSheet if loaded, null otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="spriteAsset"><div class="plugin-name">sprite</div><code><span class="field-name">spriteAsset</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SpriteAsset/" class="type-link">SpriteAsset</a></code><a class="header-anchor" href="#spriteAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a loaded sprite asset by name.
Searches in the current assets and parent assets if not found.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | [Assets](/api-docs/headless/ceramic/Assets/) | | The assets instance  |
| `name` | [Either](/api-docs/headless/ceramic/Either/)<[String](/api-docs/headless/String/), [AssetId](/api-docs/headless/ceramic/AssetId/)<[String](/api-docs/headless/String/)>> | | The sprite asset name or AssetId  |
| `variant` | [String](/api-docs/headless/String/) | *(optional)* | Optional variant name  |

| Returns | Description |
|---------|-------------|
| [SpriteAsset](/api-docs/headless/ceramic/SpriteAsset/) | The SpriteAsset if loaded, null otherwise |

## Private Members

<div class="signature field-method has-description has-plugin" id="pluginInit"><div class="plugin-name">sprite</div><code><span class="field-name">pluginInit</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pluginInit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initialize the sprite plugin.
Called automatically by Ceramic during app initialization.
Registers asset kinds and converters for sprite support.

## Metadata

| Name | Parameters |
|------|------------|
| `:access` | ceramic.App |

