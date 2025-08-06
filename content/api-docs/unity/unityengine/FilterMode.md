---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: FilterMode
target: Unity
permalink: api-docs/unity/unityengine/FilterMode/
---

# FilterMode

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/FilterMode.hx">View source</a></div>

<div class="type-hierarchy"><strong>unityengine.FilterMode</strong> (extern class)</div>

Unity FilterMode enum extern binding for Ceramic.
Controls texture sampling quality when textures are scaled.

Filter mode determines how pixel colors are calculated when
a texture is displayed at a different size than its native
resolution, affecting both performance and visual quality.

## Static Members

<div class="signature field-var has-description has-plugin" id="Point"><div class="plugin-name">unity</div><code><span class="field-name">Point</span><span class="operator">:</span> <a href="#" class="type-link">FilterMode</a></code><a class="header-anchor" href="#Point"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Point filtering (nearest-neighbor sampling).
Fastest but produces pixelated results when scaled.
Best for pixel art or when crisp pixels are desired.
No interpolation between pixels.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="Bilinear"><div class="plugin-name">unity</div><code><span class="field-name">Bilinear</span><span class="operator">:</span> <a href="#" class="type-link">FilterMode</a></code><a class="header-anchor" href="#Bilinear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bilinear filtering.
Smoothly interpolates between adjacent pixels.
Good balance of quality and performance for most textures.
Blends 4 nearest pixels for smooth scaling.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="Trilinear"><div class="plugin-name">unity</div><code><span class="field-name">Trilinear</span><span class="operator">:</span> <a href="#" class="type-link">FilterMode</a></code><a class="header-anchor" href="#Trilinear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Trilinear filtering.
Like bilinear but also blends between mipmap levels.
Best quality, especially for textures viewed at angles.
Slightly more expensive than bilinear filtering.

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

