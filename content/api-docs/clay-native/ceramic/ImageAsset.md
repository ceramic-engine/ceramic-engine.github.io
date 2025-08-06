---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ImageAsset
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/ImageAsset/
---

# ImageAsset

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ImageAsset.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/Asset/">Asset</a> → <strong>ceramic.ImageAsset</strong> (Class)</div>

Asset type for loading image files as textures.

Supports various image formats including PNG, JPG, WebP (backend-dependent),
and Aseprite files (.ase/.aseprite) when the ase plugin is enabled.

Features:
- Automatic density selection based on screen resolution
- Hot reload support for development
- Texture replacement with automatic visual updates
- Integration with texture atlas packing

```haxe
var assets = new Assets();
assets.addImage('hero.png');
assets.load();

// Access loaded texture
var texture = assets.texture('hero');
```

## Instance Members

<div class="signature field-var has-description" id="texture"><code><span class="field-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#texture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The loaded texture instance.
Observable property that updates when the texture is loaded or replaced.
Null until the asset is successfully loaded.

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateTexture"><code><span class="field-name">invalidateTexture</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Load the image file and create a texture.
Handles density selection, hot reload, and visual updates.
Emits complete event when finished.

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new image asset.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | | Image file name (with or without extension)  |
| `variant` | [String](/api-docs/clay-native/String/) | *(optional)* | Optional variant suffix  |
| `options` | [Null](/api-docs/clay-native/Null/)<[AssetOptions](/api-docs/clay-native/ceramic/AssetOptions/)> | *(optional)* | Loading options including: - premultiplyAlpha: Whether to premultiply alpha channel - width/height: For Aseprite grid texture loading - layers: Specific layers to load from Aseprite files |

## Private Members

<div class="signature field-var no-description" id="unobservedTexture"><code><span class="field-name">unobservedTexture</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#unobservedTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="defaultImageOptions"><code><span class="field-name">defaultImageOptions</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AssetOptions/" class="type-link">AssetOptions</a></code><a class="header-anchor" href="#defaultImageOptions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="reloadBecauseOfDensityChange"><code><span class="field-name">reloadBecauseOfDensityChange</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#reloadBecauseOfDensityChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="aseTexWidth"><code><span class="field-name">aseTexWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#aseTexWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="aseTexHeight"><code><span class="field-name">aseTexHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#aseTexHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="asePadding"><code><span class="field-name">asePadding</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#asePadding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="aseSpacing"><code><span class="field-name">aseSpacing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#aseSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitReplaceTexture"><code><span class="field-name">emitReplaceTexture</span><span class="parenthesis">(</span><span class="arg-name">newTexture</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="arg-name">prevTexture</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitReplaceTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when the texture is replaced (e.g., during hot reload).
All visuals using the previous texture are automatically updated.


| Name | Type | Description |
|------|------|-------------|
| `newTexture` | [Texture](/api-docs/clay-native/ceramic/Texture/) | The newly loaded texture  |
| `prevTexture` | [Texture](/api-docs/clay-native/ceramic/Texture/) | The previous texture being replaced |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitTextureChange"><code><span class="field-name">emitTextureChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTextureChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when texture field changes.

| Name | Type |
|------|------|
| `current` | [Texture](/api-docs/clay-native/ceramic/Texture/) |
| `previous` | [Texture](/api-docs/clay-native/ceramic/Texture/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loadTexture"><code><span class="field-name">loadTexture</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">loadOptions</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/clay-native/String/) |
| `loadOptions` | [AssetOptions](/api-docs/clay-native/ceramic/AssetOptions/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="texturesDensityDidChange"><code><span class="field-name">texturesDensityDidChange</span><span class="parenthesis">(</span><span class="arg-name">newDensity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">prevDensity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#texturesDensityDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handle screen density changes by reloading the texture at appropriate resolution.
Only triggers if the asset is already loaded and a better resolution is available.

| Name | Type |
|------|------|
| `newDensity` | [Float](/api-docs/clay-native/Float/) |
| `prevDensity` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="checkTexturesDensity"><code><span class="field-name">checkTexturesDensity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#checkTexturesDensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="assetFilesDidChange"><code><span class="field-name">assetFilesDidChange</span><span class="parenthesis">(</span><span class="arg-name">newFiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previousFiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assetFilesDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handle file system changes for hot reload.
Automatically reloads the texture when the source file is modified.

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

