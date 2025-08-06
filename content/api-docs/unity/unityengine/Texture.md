---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: Texture
target: Unity
permalink: api-docs/unity/unityengine/Texture/
---

# Texture

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/Texture.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/unityengine/Object/">Object</a> → <strong>unityengine.Texture</strong> (extern class) → <a href="/api-docs/unity/unityengine/RenderTexture/">RenderTexture</a>, <a href="/api-docs/unity/unityengine/Texture2D/">Texture2D</a></div>

Unity Texture class extern binding for Ceramic.
Base class for all texture types in Unity (Texture2D, RenderTexture, etc).

This binding exposes the wrap mode properties that control how
textures behave when UV coordinates go outside the 0-1 range.
These are essential for controlling texture tiling and clamping.

## Instance Members

<div class="signature field-var has-description has-plugin" id="wrapModeU"><div class="plugin-name">unity</div><code><span class="field-name">wrapModeU</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/TextureWrapMode/" class="type-link">TextureWrapMode</a></code><a class="header-anchor" href="#wrapModeU"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Texture wrap mode for the U coordinate (horizontal).
Controls behavior when texture coordinates exceed 0-1 range horizontally.
Common values: Repeat (tile), Clamp (stretch edge pixels), Mirror.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="wrapModeV"><div class="plugin-name">unity</div><code><span class="field-name">wrapModeV</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/TextureWrapMode/" class="type-link">TextureWrapMode</a></code><a class="header-anchor" href="#wrapModeV"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Texture wrap mode for the V coordinate (vertical).
Controls behavior when texture coordinates exceed 0-1 range vertically.
Common values: Repeat (tile), Clamp (stretch edge pixels), Mirror.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="wrapModeW"><div class="plugin-name">unity</div><code><span class="field-name">wrapModeW</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/TextureWrapMode/" class="type-link">TextureWrapMode</a></code><a class="header-anchor" href="#wrapModeW"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Texture wrap mode for the W coordinate (depth).
Only relevant for 3D textures. Controls behavior for the depth dimension.
For 2D textures, this setting has no effect.

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

