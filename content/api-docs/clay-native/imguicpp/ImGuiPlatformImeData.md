---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiPlatformImeData
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImGuiPlatformImeData/
---

# ImGuiPlatformImeData

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImGuiPlatformImeData</strong> (extern class)</div>

## Instance Members

<div class="signature field-var has-description" id="wantVisible"><code><span class="field-name">wantVisible</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#wantVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A widget wants the IME to be visible.

<hr class="field-separator" />

<div class="signature field-var has-description" id="wantTextInput"><code><span class="field-name">wantTextInput</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#wantTextInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A widget wants text input, not necessarily IME to be visible. This is automatically set to the upcoming value of io.WantTextInput.

<hr class="field-separator" />

<div class="signature field-var has-description" id="inputPos"><code><span class="field-name">inputPos</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#inputPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Position of input cursor (for IME).

<hr class="field-separator" />

<div class="signature field-var has-description" id="inputLineHeight"><code><span class="field-name">inputLineHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#inputLineHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Line height (for IME).

<hr class="field-separator" />

<div class="signature field-var has-description" id="viewportId"><code><span class="field-name">viewportId</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#viewportId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

ID of platform window/viewport.

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

