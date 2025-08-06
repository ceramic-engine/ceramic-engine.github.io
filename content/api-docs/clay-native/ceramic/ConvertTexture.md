---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ConvertTexture
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/ConvertTexture/
---

# ConvertTexture

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ConvertTexture.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ConvertTexture</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/ceramic/ConvertField/">ConvertField</a></div>

Converter for Texture fields in fragments and data serialization.

This converter handles Texture instances by storing and loading them
using asset names. During deserialization, textures are loaded from
the asset system asynchronously. This allows fragments to reference
textures by name without embedding the actual image data.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/ConvertField/">ConvertField</a>, <a href="/api-docs/clay-native/ceramic/Texture/">Texture</a>, <a href="/api-docs/clay-native/ceramic/ImageAsset/">ImageAsset</a>, <a href="/api-docs/clay-native/ceramic/Fragment/">Fragment</a></div>


## Instance Members

<div class="signature field-method has-description" id="basicToField"><code><span class="field-name">basicToField</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">basic</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#basicToField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert an image asset name to a Texture instance.

The image is loaded asynchronously from the asset system.
If loading fails or the asset name is null, returns null.



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/clay-native/ceramic/Entity/) | The entity that will use this texture  |
| `field` | [String](/api-docs/clay-native/String/) | The name of the field being converted  |
| `assets` | [Assets](/api-docs/clay-native/ceramic/Assets/) | Assets instance used to load the image  |
| `basic` | [String](/api-docs/clay-native/String/) | The image asset name to load  |
| `done` | Function | Callback invoked with the loaded Texture instance |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fieldToBasic"><code><span class="field-name">fieldToBasic</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#fieldToBasic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert a Texture instance to its asset name for serialization.



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/clay-native/ceramic/Entity/) | The entity that owns this texture  |
| `field` | [String](/api-docs/clay-native/String/) | The name of the field being converted  |
| `value` | [Texture](/api-docs/clay-native/ceramic/Texture/) | The Texture instance to convert  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | The texture's asset name, or null if the texture or its asset is null |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new texture converter instance.

