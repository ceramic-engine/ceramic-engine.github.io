---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiPlatformMonitor
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImGuiPlatformMonitor/
---

# ImGuiPlatformMonitor

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImGuiPlatformMonitor</strong> (extern class)</div>

## Instance Members

<div class="signature field-var has-description" id="mainPos"><code><span class="field-name">mainPos</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#mainPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Coordinates of the area displayed on this monitor (Min = upper left, Max = bottom right)

<hr class="field-separator" />

<div class="signature field-var has-description" id="mainSize"><code><span class="field-name">mainSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#mainSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Coordinates of the area displayed on this monitor (Min = upper left, Max = bottom right)

<hr class="field-separator" />

<div class="signature field-var has-description" id="workPos"><code><span class="field-name">workPos</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#workPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Coordinates without task bars / side bars / menu bars. Used to avoid positioning popups/tooltips inside this region. If you don't have this info, please copy the value for MainPos/MainSize.

<hr class="field-separator" />

<div class="signature field-var has-description" id="workSize"><code><span class="field-name">workSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#workSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Coordinates without task bars / side bars / menu bars. Used to avoid positioning popups/tooltips inside this region. If you don't have this info, please copy the value for MainPos/MainSize.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dpiScale"><code><span class="field-name">dpiScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#dpiScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

1.0f = 96 DPI

<hr class="field-separator" />

<div class="signature field-var has-description" id="platformHandle"><code><span class="field-name">platformHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#platformHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Backend dependant data (e.g. HMONITOR, GLFWmonitor*, SDL Display Index, NSScreen*)

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

