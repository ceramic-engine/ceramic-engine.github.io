---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: RenderTexture
target: Unity
permalink: api-docs/unity/unityengine/RenderTexture/
---

# RenderTexture

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/RenderTexture.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/unityengine/Object/">Object</a> → <a href="/api-docs/unity/unityengine/Texture/">Texture</a> → <strong>unityengine.RenderTexture</strong> (extern class)</div>

A texture that can be rendered to by cameras or used as a render target.
RenderTextures enable off-screen rendering for post-processing effects,
mirrors, minimaps, and render-to-texture operations.

In Ceramic's Unity backend, RenderTextures are used for:
- Implementing render-to-texture functionality
- Creating dynamic textures at runtime
- Post-processing effects and filters
- Capturing screen content

Key features:
- GPU-based rendering target
- Multiple format support (color, depth, stencil)
- Can be used as regular textures after rendering
- Supports anti-aliasing and HDR

Basic usage:
```haxe
// RenderTextures are typically created and managed
// by Ceramic's backend for filters and effects
RenderTexture.active = myRenderTexture;
// Render operations here...
RenderTexture.active = null;
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/unityengine/Texture/">Texture</a>, Camera</div>


## Static Members

<div class="signature field-var has-description has-plugin" id="active"><div class="plugin-name">unity</div><code><span class="field-name">active</span><span class="operator">:</span> <a href="#" class="type-link">RenderTexture</a></code><a class="header-anchor" href="#active"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The currently active render texture for drawing operations.
All rendering commands target this texture until changed.

Set to a RenderTexture before rendering to draw into it.
Set to null to render to screen/framebuffer.

Critical for render-to-texture operations:
```haxe
var previous = RenderTexture.active;
RenderTexture.active = myRT;
// Render here
RenderTexture.active = previous; // Restore
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="width"><div class="plugin-name">unity</div><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width of the render texture in pixels.
Read-only after creation.

Should match the aspect ratio and resolution needs
of your rendering use case.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="height"><div class="plugin-name">unity</div><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height of the render texture in pixels.
Read-only after creation.

Common sizes:
- Power of 2 for older hardware compatibility
- Screen resolution for full-screen effects
- Smaller for performance (e.g., 256x256 for minimaps)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="filterMode"><div class="plugin-name">unity</div><code><span class="field-name">filterMode</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/FilterMode/" class="type-link">FilterMode</a></code><a class="header-anchor" href="#filterMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Texture filtering mode when sampling.
Affects visual quality when texture is scaled.

- Point: Pixelated/nearest neighbor (retro look)
- Bilinear: Smooth interpolation (default)
- Trilinear: Smooth with mipmaps

For pixel-perfect rendering, use Point filtering.

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/unityengine/FilterMode/">FilterMode</a></div>


## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

