---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: FontAsset
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/FontAsset/
---

# FontAsset

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/FontAsset.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/Asset/">Asset</a> → <strong>ceramic.FontAsset</strong> (Class)</div>

Asset type for loading bitmap fonts.

Supports loading:
- AngelCode BMFont format (.fnt files)
- TrueType/OpenType fonts (.ttf/.otf) that have been pre-converted to bitmap fonts

A bitmap font consists of:
- Font data file (.fnt) describing character metrics
- One or more texture pages containing the rendered glyphs

Features:
- Multi-page font support
- Automatic density selection for font textures
- Hot reload support
- Automatic Text visual updates when font is replaced

```haxe
var assets = new Assets();
assets.addFont('arial.fnt');
assets.addFont('roboto.ttf'); // Assumes roboto.fnt exists
assets.load();

// Use loaded font
var text = new Text();
text.font = assets.font('arial');
```

## Instance Members

<div class="signature field-var has-description" id="fontData"><code><span class="field-name">fontData</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/BitmapFontData/" class="type-link">BitmapFontData</a></code><a class="header-anchor" href="#fontData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The parsed font data containing character metrics and layout information.
Available after successful loading.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pages"><code><span class="field-name">pages</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#pages"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of texture page paths to loaded textures.
Bitmap fonts can use multiple texture pages for large character sets.

<hr class="field-separator" />

<div class="signature field-var has-description" id="font"><code><span class="field-name">font</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/BitmapFont/" class="type-link">BitmapFont</a></code><a class="header-anchor" href="#font"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The loaded BitmapFont instance.
Observable property that updates when the font is loaded or replaced.
Null until the asset is successfully loaded.

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateFont"><code><span class="field-name">invalidateFont</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Load the font data and associated texture pages.
For TTF/OTF fonts, looks for pre-converted .fnt files.
Handles multi-page fonts by loading all required textures.
Emits complete event when finished.

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new font asset.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | | Font file name (.fnt, .ttf, or .otf)  |
| `variant` | [String](/api-docs/clay-native/String/) | *(optional)* | Optional variant suffix  |
| `options` | [Null](/api-docs/clay-native/Null/)<[AssetOptions](/api-docs/clay-native/ceramic/AssetOptions/)> | *(optional)* | Loading options (font-specific options depend on backend) |

## Private Members

<div class="signature field-var no-description" id="unobservedFont"><code><span class="field-name">unobservedFont</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/BitmapFont/" class="type-link">BitmapFont</a></code><a class="header-anchor" href="#unobservedFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="transformedPath"><code><span class="field-name">transformedPath</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#transformedPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitReplaceFont"><code><span class="field-name">emitReplaceFont</span><span class="parenthesis">(</span><span class="arg-name">newFont</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/BitmapFont/" class="type-link">BitmapFont</a><span class="operator">,</span> <span class="arg-name">prevFont</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/BitmapFont/" class="type-link">BitmapFont</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitReplaceFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when the font is replaced (e.g., during hot reload).
All Text visuals using the previous font are automatically updated.


| Name | Type | Description |
|------|------|-------------|
| `newFont` | [BitmapFont](/api-docs/clay-native/ceramic/BitmapFont/) | The newly loaded font  |
| `prevFont` | [BitmapFont](/api-docs/clay-native/ceramic/BitmapFont/) | The previous font being replaced |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitFontChange"><code><span class="field-name">emitFontChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/BitmapFont/" class="type-link">BitmapFont</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/BitmapFont/" class="type-link">BitmapFont</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFontChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when font field changes.

| Name | Type |
|------|------|
| `current` | [BitmapFont](/api-docs/clay-native/ceramic/BitmapFont/) |
| `previous` | [BitmapFont](/api-docs/clay-native/ceramic/BitmapFont/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="texturesDensityDidChange"><code><span class="field-name">texturesDensityDidChange</span><span class="parenthesis">(</span><span class="arg-name">newDensity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">prevDensity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#texturesDensityDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handle screen density changes by reloading the font at appropriate resolution.
This ensures text remains crisp when display density changes.

| Name | Type |
|------|------|
| `newDensity` | [Float](/api-docs/clay-native/Float/) |
| `prevDensity` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="checkTexturesDensity"><code><span class="field-name">checkTexturesDensity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#checkTexturesDensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="assetFilesDidChange"><code><span class="field-name">assetFilesDidChange</span><span class="parenthesis">(</span><span class="arg-name">newFiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previousFiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assetFilesDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handle file system changes for hot reload.
Monitors both the font data file and texture pages for changes.

| Name | Type |
|------|------|
| `newFiles` | [ReadOnlyMap](/api-docs/clay-native/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-native/String/), [Float](/api-docs/clay-native/Float/)> |
| `previousFiles` | [ReadOnlyMap](/api-docs/clay-native/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-native/String/), [Float](/api-docs/clay-native/Float/)> |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |

