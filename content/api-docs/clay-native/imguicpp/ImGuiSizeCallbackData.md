---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiSizeCallbackData
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImGuiSizeCallbackData/
---

# ImGuiSizeCallbackData

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImGuiSizeCallbackData</strong> (extern class)</div>

## Instance Members

<div class="signature field-var has-description" id="userData"><code><span class="field-name">userData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#userData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read-only.   What user passed to SetNextWindowSizeConstraints(). Generally store an integer or float in here (need reinterpret_cast<>).

<hr class="field-separator" />

<div class="signature field-var has-description" id="pos"><code><span class="field-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#pos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read-only.   Window position, for reference.

<hr class="field-separator" />

<div class="signature field-var has-description" id="currentSize"><code><span class="field-name">currentSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#currentSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read-only.   Current window size.

<hr class="field-separator" />

<div class="signature field-var has-description" id="desiredSize"><code><span class="field-name">desiredSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#desiredSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read-write.  Desired size, based on user's mouse position. Write to this field to restrain resizing.

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

