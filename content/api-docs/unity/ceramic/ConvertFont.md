---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ConvertFont
target: Unity
permalink: api-docs/unity/ceramic/ConvertFont/
---

# ConvertFont

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ConvertFont.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ConvertFont</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/ceramic/ConvertField/">ConvertField</a></div>

Converter for BitmapFont fields in fragments and data serialization.

This converter handles BitmapFont instances by storing and loading them
using asset names. During deserialization, fonts are loaded from the
asset system asynchronously. The default font is handled as a special
case to avoid unnecessary loading.

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/ConvertField/">ConvertField</a>, <a href="/api-docs/unity/ceramic/BitmapFont/">BitmapFont</a>, <a href="/api-docs/unity/ceramic/FontAsset/">FontAsset</a>, <a href="/api-docs/unity/ceramic/Fragment/">Fragment</a></div>


## Instance Members

<div class="signature field-method has-description" id="basicToField"><code><span class="field-name">basicToField</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">basic</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#basicToField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert a font asset name to a BitmapFont instance.

Special handling:
- If the name matches the default font, returns it immediately
- Otherwise loads the font asset asynchronously
- Returns null if the asset name is null or loading fails



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/unity/ceramic/Entity/) | The entity that will use this font  |
| `field` | [String](/api-docs/unity/String/) | The name of the field being converted  |
| `assets` | [Assets](/api-docs/unity/ceramic/Assets/) | Assets instance used to load the font  |
| `basic` | [String](/api-docs/unity/String/) | The font asset name to load  |
| `done` | Function | Callback invoked with the loaded BitmapFont instance |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fieldToBasic"><code><span class="field-name">fieldToBasic</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/BitmapFont/" class="type-link">BitmapFont</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#fieldToBasic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert a BitmapFont instance to its asset name for serialization.



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/unity/ceramic/Entity/) | The entity that owns this font  |
| `field` | [String](/api-docs/unity/String/) | The name of the field being converted  |
| `value` | [BitmapFont](/api-docs/unity/ceramic/BitmapFont/) | The BitmapFont instance to convert  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | The font's asset name, or null if the font or its asset is null |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new font converter instance.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

