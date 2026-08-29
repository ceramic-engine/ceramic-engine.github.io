---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImDrawCmd
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImDrawCmd/
---

# ImDrawCmd

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImDrawCmd</strong> (extern class)</div>

## Static Members

<div class="signature field-method has-description" id="getTexID"><code><span class="field-name">getTexID</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt64/" class="type-link">cpp.UInt64</a></code><a class="header-anchor" href="#getTexID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

== (TexRef._TexData ? TexRef._TexData->TexID : TexRef._TexID)

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [cpp.UInt64](/api-docs/clay-native/cpp/UInt64/) |

## Instance Members

<div class="signature field-var has-description" id="clipRect"><code><span class="field-name">clipRect</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec4/" class="type-link">ImVec4</a></code><a class="header-anchor" href="#clipRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

4*4  // Clipping rectangle (x1, y1, x2, y2). Subtract ImDrawData->DisplayPos to get clipping rectangle in "viewport" coordinates

<hr class="field-separator" />

<div class="signature field-var has-description" id="texRef"><code><span class="field-name">texRef</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImTextureRef/" class="type-link">ImTextureRef</a></code><a class="header-anchor" href="#texRef"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

16   // Reference to a font/texture atlas (where backend called ImTextureData::SetTexID()) or to a user-provided texture ID (via e.g. ImGui::Image() calls). Both will lead to a ImTextureID value.

<hr class="field-separator" />

<div class="signature field-var has-description" id="vtxOffset"><code><span class="field-name">vtxOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#vtxOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

4    // Start offset in vertex buffer. ImGuiBackendFlags_RendererHasVtxOffset: always 0, otherwise may be >0 to support meshes larger than 64K vertices with 16-bit indices.

<hr class="field-separator" />

<div class="signature field-var has-description" id="idxOffset"><code><span class="field-name">idxOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#idxOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

4    // Start offset in index buffer.

<hr class="field-separator" />

<div class="signature field-var has-description" id="elemCount"><code><span class="field-name">elemCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#elemCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

4    // Number of indices (multiple of 3) to be rendered as triangles. Vertices are stored in the callee ImDrawList's vtx_buffer[] array, indices in idx_buffer[].

<hr class="field-separator" />

<div class="signature field-var has-description" id="userCallback"><code><span class="field-name">userCallback</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#userCallback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

4-8  // If != NULL, call the function instead of rendering the vertices. clip_rect and texture_id will be set normally.

<hr class="field-separator" />

<div class="signature field-var has-description" id="userCallbackData"><code><span class="field-name">userCallbackData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#userCallbackData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

4-8  // Callback user data (when UserCallback != NULL). If called AddCallback() with size == 0, this is a copy of the AddCallback() argument. If called AddCallback() with size > 0, this is pointing to a buffer where data is stored.

<hr class="field-separator" />

<div class="signature field-var has-description" id="userCallbackDataSize"><code><span class="field-name">userCallbackDataSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#userCallbackDataSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

4 // Size of callback user data when using storage, otherwise 0.

<hr class="field-separator" />

<div class="signature field-var has-description" id="userCallbackDataOffset"><code><span class="field-name">userCallbackDataOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#userCallbackDataOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

4 // [Internal] Offset of callback user data when using storage, otherwise -1.

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

