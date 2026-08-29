---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImDrawData
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImDrawData/
---

# ImDrawData

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImDrawData</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addDrawList"><code><span class="field-name">addDrawList</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">drawList</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addDrawList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Helper to add an external draw list into an existing ImDrawData.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `drawList` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deIndexAllBuffers"><code><span class="field-name">deIndexAllBuffers</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deIndexAllBuffers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Helper to convert all buffers from indexed to non-indexed, in case you cannot render indexed. Note: this is slow and most likely a waste of resources. Always prefer indexed rendering!

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scaleClipRects"><code><span class="field-name">scaleClipRects</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">fbScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scaleClipRects"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Helper to scale the ClipRect field of each ImDrawCmd. Use if your final output buffer is at a different scale than Dear ImGui expects, or if there is a difference between your window resolution and framebuffer resolution.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `fbScale` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |

## Instance Members

<div class="signature field-var has-description" id="valid"><code><span class="field-name">valid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#valid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Only valid after Render() is called and before the next NewFrame() is called.

<hr class="field-separator" />

<div class="signature field-var has-description" id="cmdListsCount"><code><span class="field-name">cmdListsCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cmdListsCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

== CmdLists.Size. (OBSOLETE: exists for legacy reasons). Number of ImDrawList* to render.

<hr class="field-separator" />

<div class="signature field-var has-description" id="totalIdxCount"><code><span class="field-name">totalIdxCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#totalIdxCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For convenience, sum of all ImDrawList's IdxBuffer.Size

<hr class="field-separator" />

<div class="signature field-var has-description" id="totalVtxCount"><code><span class="field-name">totalVtxCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#totalVtxCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For convenience, sum of all ImDrawList's VtxBuffer.Size

<hr class="field-separator" />

<div class="signature field-var has-description" id="cmdLists"><code><span class="field-name">cmdLists</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVector_ImDrawListPtr/" class="type-link">ImVector_ImDrawListPtr</a></code><a class="header-anchor" href="#cmdLists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of ImDrawList* to render. The ImDrawLists are owned by ImGuiContext and only pointed to from here.

<hr class="field-separator" />

<div class="signature field-var has-description" id="displayPos"><code><span class="field-name">displayPos</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#displayPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Top-left position of the viewport to render (== top-left of the orthogonal projection matrix to use) (== GetMainViewport()->Pos for the main viewport, == (0.0) in most single-viewport applications)

<hr class="field-separator" />

<div class="signature field-var has-description" id="displaySize"><code><span class="field-name">displaySize</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#displaySize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Size of the viewport to render (== GetMainViewport()->Size for the main viewport, == io.DisplaySize in most single-viewport applications)

<hr class="field-separator" />

<div class="signature field-var has-description" id="framebufferScale"><code><span class="field-name">framebufferScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#framebufferScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Amount of pixels for each unit of DisplaySize. Copied from viewport->FramebufferScale (== io.DisplayFramebufferScale for main viewport). Generally (1,1) on normal display, (2,2) on OSX with Retina display.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ownerViewport"><code><span class="field-name">ownerViewport</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#ownerViewport"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Viewport carrying the ImDrawData instance, might be of use to the renderer (generally not).

<hr class="field-separator" />

<div class="signature field-var has-description" id="textures"><code><span class="field-name">textures</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#textures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of textures to update. Most of the times the list is shared by all ImDrawData, has only 1 texture and it doesn't need any update. This almost always points to ImGui::GetPlatformIO().Textures[]. May be overridden or set to NULL if you want to manually update textures.

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

