---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: LorelinePlugin
target: Unity
permalink: api-docs/unity/ceramic/LorelinePlugin/
---

# LorelinePlugin

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/loreline/runtime/src/ceramic/LorelinePlugin.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LorelinePlugin</strong> (Class)</div>

Plugin that integrates Loreline scripting language into Ceramic.

Loreline is a narrative scripting language designed for:
- Dialogue trees and branching conversations
- Interactive storytelling
- Game narrative and quest systems
- Conditional story flow

This plugin provides:
- Asset loading for .lor and .loreline files
- Script parsing with import resolution
- Easy access to parsed scripts through the Assets API
- Hot-reload support for iterative development

Usage:
```haxe
// In ceramic.yml:
plugins:
  - loreline

// In your code:
assets.add('loreline:story/chapter1');
var script = assets.loreline('story/chapter1');
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/LorelineAsset/">LorelineAsset</a>, https://github.com/loreline/loreline for the Loreline language</div>


## Static Members

<div class="signature field-method has-description has-plugin" id="addLoreline"><div class="plugin-name">loreline</div><code><span class="field-name">addLoreline</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addLoreline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a Loreline asset to the assets collection.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | [Assets](/api-docs/unity/ceramic/Assets/) | | The assets collection to add to  |
| `name` | [String](/api-docs/unity/String/) | | The asset name (with or without 'loreline:' prefix)  |
| `variant` | [String](/api-docs/unity/String/) | *(optional)* | Optional variant identifier  |
| `options` | [Null](/api-docs/unity/Null/)<[AssetOptions](/api-docs/unity/ceramic/AssetOptions/)> | *(optional)* | Optional asset loading options |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="ensureLoreline"><div class="plugin-name">loreline</div><code><span class="field-name">ensureLoreline</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensureLoreline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ensures a Loreline asset is loaded before proceeding.
Loads the asset if not already loaded, or returns the existing one.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | [Assets](/api-docs/unity/ceramic/Assets/) | | The assets collection  |
| `name` | [Either](/api-docs/unity/ceramic/Either/)<[String](/api-docs/unity/String/), [Dynamic](/api-docs/unity/Dynamic/)> | | The asset name or identifier  |
| `variant` | [String](/api-docs/unity/String/) | *(optional)* | Optional variant identifier  |
| `options` | [Null](/api-docs/unity/Null/)<[AssetOptions](/api-docs/unity/ceramic/AssetOptions/)> | *(optional)* | Optional asset loading options  |
| `done` | Function | | Callback with the loaded LorelineAsset |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="loreline"><div class="plugin-name">loreline</div><code><span class="field-name">loreline</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Script/" class="type-link">loreline.Script</a></code><a class="header-anchor" href="#loreline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a parsed Loreline script from the assets collection.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | [Assets](/api-docs/unity/ceramic/Assets/) | | The assets collection  |
| `name` | [Either](/api-docs/unity/ceramic/Either/)<[String](/api-docs/unity/String/), [Dynamic](/api-docs/unity/Dynamic/)> | | The asset name or identifier  |
| `variant` | [String](/api-docs/unity/String/) | *(optional)* | Optional variant identifier  |

| Returns | Description |
|---------|-------------|
| [loreline.Script](/api-docs/unity/loreline/Script/) | The parsed Loreline script, or null if not found |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="lorelineAsset"><div class="plugin-name">loreline</div><code><span class="field-name">lorelineAsset</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LorelineAsset/" class="type-link">LorelineAsset</a></code><a class="header-anchor" href="#lorelineAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a LorelineAsset from the assets collection.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | [Assets](/api-docs/unity/ceramic/Assets/) | | The assets collection  |
| `name` | [Either](/api-docs/unity/ceramic/Either/)<[String](/api-docs/unity/String/), [Dynamic](/api-docs/unity/Dynamic/)> | | The asset name or identifier  |
| `variant` | [String](/api-docs/unity/String/) | *(optional)* | Optional variant identifier  |

| Returns | Description |
|---------|-------------|
| [LorelineAsset](/api-docs/unity/ceramic/LorelineAsset/) | The LorelineAsset, or null if not found |

## Private Members

<div class="signature field-method has-description has-plugin" id="pluginInit"><div class="plugin-name">loreline</div><code><span class="field-name">pluginInit</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pluginInit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Plugin initialization entry point.
Registers the 'loreline' asset kind with supported file extensions.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:access` | ceramic.App |

