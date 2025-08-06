---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: TextureWrapMode
target: Unity
permalink: api-docs/unity/unityengine/TextureWrapMode/
---

# TextureWrapMode

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/TextureWrapMode.hx">View source</a></div>

<div class="type-hierarchy"><strong>unityengine.TextureWrapMode</strong> (extern class)</div>

Unity TextureWrapMode enum extern binding for Ceramic.
Controls how texture coordinates outside the 0-1 range are handled.

This determines the behavior when UV coordinates exceed the
texture boundaries, enabling effects like tiling, clamping,
or mirroring.

## Static Members

<div class="signature field-var has-description has-plugin" id="Repeat"><div class="plugin-name">unity</div><code><span class="field-name">Repeat</span><span class="operator">:</span> <a href="#" class="type-link">TextureWrapMode</a></code><a class="header-anchor" href="#Repeat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tiles the texture, repeating it continuously.
UV coordinates wrap around: 1.5 becomes 0.5, 2.0 becomes 0.0, etc.
Most common mode for tiling textures like floors or walls.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="Clamp"><div class="plugin-name">unity</div><code><span class="field-name">Clamp</span><span class="operator">:</span> <a href="#" class="type-link">TextureWrapMode</a></code><a class="header-anchor" href="#Clamp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clamps texture coordinates to the 0-1 range.
Pixels outside this range use the edge pixel color.
Useful for UI elements or when you want to avoid texture bleeding.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="Mirror"><div class="plugin-name">unity</div><code><span class="field-name">Mirror</span><span class="operator">:</span> <a href="#" class="type-link">TextureWrapMode</a></code><a class="header-anchor" href="#Mirror"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tiles the texture with mirroring on each repetition.
Creates a seamless pattern by flipping alternating tiles.
UV 0-1 normal, 1-2 mirrored, 2-3 normal, etc.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="MirrorOnce"><div class="plugin-name">unity</div><code><span class="field-name">MirrorOnce</span><span class="operator">:</span> <a href="#" class="type-link">TextureWrapMode</a></code><a class="header-anchor" href="#MirrorOnce"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mirrors the texture once, then clamps.
UV 0-1 shows normal texture, 1+ shows mirrored edge pixels.
Useful for symmetric effects without full tiling.

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

