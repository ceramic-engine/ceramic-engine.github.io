---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui
title: ImGuiTextures
target: Headless
permalink: api-docs/headless/ceramic/ImGuiTextures/
---

# ImGuiTextures

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/imgui/runtime/src/ceramic/ImGuiTextures.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ImGuiTextures</strong> (Class)</div>

Cross-backend texture bridge between Dear ImGui and ceramic.

`ImTextureID` values are SMALL INTEGER KEYS into a registry of
`ceramic.Texture` instances - never raw GPU handles or pointers, so the
exact same convention works on every target (cpp, js/wasm, c#).

Also implements the Dear ImGui 1.92 dynamic texture protocol
(`ImGuiBackendFlags_RendererHasTextures`): each frame, ImGui may request
texture creations/updates/destructions through `ImDrawData->Textures`
(font atlas pages etc.); `process()` fulfills them with ceramic textures.
Partial updates are collapsed into a full `submitPixels` (the only
cross-backend texture update path).

## Static Members

<div class="signature field-method has-description has-plugin" id="textureId"><div class="plugin-name">imgui</div><code><span class="field-name">textureId</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imgui/ImTextureID/" class="type-link">imgui.ImTextureID</a></code><a class="header-anchor" href="#textureId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `ImTextureID` for a ceramic texture - use it with `ImGui.image()`
etc. Registers the texture on first use; the slot is released
automatically when the texture is destroyed.

| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/headless/ceramic/Texture/) |

| Returns |
|---------|
| [imgui.ImTextureID](/api-docs/headless/imgui/ImTextureID/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="textureRef"><div class="plugin-name">imgui</div><code><span class="field-name">textureRef</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imgui/ImTextureRef/" class="type-link">imgui.ImTextureRef</a></code><a class="header-anchor" href="#textureRef"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `ImTextureRef` for a ceramic texture - this is what `ImGui.image()`,
`ImGui.imageButton()` etc. take as first argument.

| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/headless/ceramic/Texture/) |

| Returns |
|---------|
| [imgui.ImTextureRef](/api-docs/headless/imgui/ImTextureRef/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="texture"><div class="plugin-name">imgui</div><code><span class="field-name">texture</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/headless/imgui/ImTextureID/" class="type-link">imgui.ImTextureID</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#texture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The ceramic texture for an `ImTextureID` key (null if unknown).

| Name | Type |
|------|------|
| `id` | [imgui.ImTextureID](/api-docs/headless/imgui/ImTextureID/) |

| Returns |
|---------|
| [Texture](/api-docs/headless/ceramic/Texture/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="allTextures"><div class="plugin-name">imgui</div><code><span class="field-name">allTextures</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Texture/" class="type-link">Texture</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#allTextures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Every registered texture (for `Renderable.computeUsedTextures`).
| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<[Texture](/api-docs/headless/ceramic/Texture/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="process"><div class="plugin-name">imgui</div><code><span class="field-name">process</span><span class="parenthesis">(</span><span class="arg-name">drawData</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/_ImGuiTextures/DDPtr/" class="type-link">ceramic._ImGuiTextures.DDPtr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#process"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fulfill this frame's ImTextureData requests (called by the renderable,
right before walking the draw lists).

| Name | Type |
|------|------|
| `drawData` | [ceramic._ImGuiTextures.DDPtr](/api-docs/headless/ceramic/_ImGuiTextures/DDPtr/) |

## Private Members

<div class="signature field-var has-description has-plugin" id="textures"><div class="plugin-name">imgui</div><code><span class="field-name">textures</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Texture/" class="type-link">Texture</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#textures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

id → texture. Index 0 is reserved (ImTextureID_Invalid == 0).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="owned"><div class="plugin-name">imgui</div><code><span class="field-name">owned</span><span class="operator">:</span> <a href="/api-docs/headless/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#owned"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Textures created by the ImTextureData protocol (owned here).

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="allocSlot"><div class="plugin-name">imgui</div><code><span class="field-name">allocSlot</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#allocSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/headless/ceramic/Texture/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="release"><div class="plugin-name">imgui</div><code><span class="field-name">release</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#release"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `id` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createFromTextureData"><div class="plugin-name">imgui</div><code><span class="field-name">createFromTextureData</span><span class="parenthesis">(</span><span class="arg-name">td</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/_ImGuiTextures/TDPtr/" class="type-link">ceramic._ImGuiTextures.TDPtr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#createFromTextureData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `td` | [ceramic._ImGuiTextures.TDPtr](/api-docs/headless/ceramic/_ImGuiTextures/TDPtr/) |

| Returns |
|---------|
| [Texture](/api-docs/headless/ceramic/Texture/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="pixelsFromTextureData"><div class="plugin-name">imgui</div><code><span class="field-name">pixelsFromTextureData</span><span class="parenthesis">(</span><span class="arg-name">td</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/_ImGuiTextures/TDPtr/" class="type-link">ceramic._ImGuiTextures.TDPtr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/UInt8Array/" class="type-link">UInt8Array</a></code><a class="header-anchor" href="#pixelsFromTextureData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copy the RGBA pixels out of an ImTextureData, PREMULTIPLYING alpha
(ceramic's whole pipeline is premultiplied; ImGui atlases are straight
alpha - uploading them raw makes empty texels add pure white with our
ONE / ONE_MINUS_SRC_ALPHA blending). Converts Alpha8 when needed.

| Name | Type |
|------|------|
| `td` | [ceramic._ImGuiTextures.TDPtr](/api-docs/headless/ceramic/_ImGuiTextures/TDPtr/) |

| Returns |
|---------|
| [UInt8Array](/api-docs/headless/ceramic/UInt8Array/) |

