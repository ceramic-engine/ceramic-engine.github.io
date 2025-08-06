---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: TilesetImage
target: Unity
permalink: api-docs/unity/ceramic/TilesetImage/
---

# TilesetImage

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/TilesetImage.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/tracker/Model/">tracker.Model</a> → <strong>ceramic.TilesetImage</strong> (Class)</div>

Represents the image resource used by a tileset.

TilesetImage encapsulates the texture and metadata for a tileset's graphical data.
It manages the texture lifecycle, including asset retention and hot-reloading support.
The image dimensions can be specified explicitly or derived from the loaded texture.

## Features

- **Texture Management**: Handles texture loading and lifecycle
- **Asset Retention**: Properly retains/releases texture assets
- **Hot-Reload Support**: Automatically updates when texture assets are replaced
- **Dimension Tracking**: Stores image dimensions for layout calculations

## Usage Example

```haxe
var image = new TilesetImage();
image.source = "tiles/terrain.png";
image.texture = assets.texture("tiles/terrain");

// Dimensions are automatically set from texture if not specified
trace('Image size: ${image.width}x${image.height}');

// Attach to a tileset
tileset.image = image;
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/Tileset/">Tileset</a>, <a href="/api-docs/unity/ceramic/Texture/">Texture</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="texture"><div class="plugin-name">tilemap</div><code><span class="field-name">texture</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#texture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The texture used for this image, if loaded and ready to display

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="width"><div class="plugin-name">tilemap</div><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The image width in points

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="height"><div class="plugin-name">tilemap</div><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The image height in points

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="source"><div class="plugin-name">tilemap</div><code><span class="field-name">source</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#source"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The reference to the tileset image file, if any

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateWidth"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateHeight"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateSource"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateSource</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">tilemap</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedWidth"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedHeight"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedSource"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedSource</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitWidthChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitWidthChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitWidthChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when width field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/unity/Int/) |
| `previous` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitHeightChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitHeightChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHeightChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when height field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/unity/Int/) |
| `previous` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitSourceChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitSourceChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSourceChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when source field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/unity/String/) |
| `previous` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="replaceTexture"><div class="plugin-name">tilemap</div><code><span class="field-name">replaceTexture</span><span class="parenthesis">(</span><span class="arg-name">newTexture</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="arg-name">prevTexture</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#replaceTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal callback for texture hot-reloading.
Called when the texture asset is replaced at runtime.


| Name | Type | Description |
|------|------|-------------|
| `newTexture` | [Texture](/api-docs/unity/ceramic/Texture/) | The new texture instance  |
| `prevTexture` | [Texture](/api-docs/unity/ceramic/Texture/) | The previous texture being replaced |

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
| `:build` | tracker.macros.SerializableMacro.build() |
| `:autoBuild` | tracker.macros.SerializableMacro.build() |

