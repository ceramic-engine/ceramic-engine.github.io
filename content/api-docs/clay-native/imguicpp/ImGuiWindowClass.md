---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiWindowClass
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImGuiWindowClass/
---

# ImGuiWindowClass

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImGuiWindowClass</strong> (extern class)</div>

## Instance Members

<div class="signature field-var has-description" id="classId"><code><span class="field-name">classId</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#classId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

User data. 0 = Default class (unclassed). Windows of different classes cannot be docked with each others.

<hr class="field-separator" />

<div class="signature field-var has-description" id="parentViewportId"><code><span class="field-name">parentViewportId</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#parentViewportId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Hint for the platform backend. -1: use default. 0: request platform backend to not parent the platform. != 0: request platform backend to create a parent<>child relationship between the platform windows. Not conforming backends are free to e.g. parent every viewport to the main viewport or not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="focusRouteParentWindowId"><code><span class="field-name">focusRouteParentWindowId</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#focusRouteParentWindowId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

ID of parent window for shortcut focus route evaluation, e.g. Shortcut() call from Parent Window will succeed when this window is focused.

<hr class="field-separator" />

<div class="signature field-var has-description" id="viewportFlagsOverrideSet"><code><span class="field-name">viewportFlagsOverrideSet</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#viewportFlagsOverrideSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Viewport flags to set when a window of this class owns a viewport. This allows you to enforce OS decoration or task bar icon, override the defaults on a per-window basis.

<hr class="field-separator" />

<div class="signature field-var has-description" id="viewportFlagsOverrideClear"><code><span class="field-name">viewportFlagsOverrideClear</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#viewportFlagsOverrideClear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Viewport flags to clear when a window of this class owns a viewport. This allows you to enforce OS decoration or task bar icon, override the defaults on a per-window basis.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tabItemFlagsOverrideSet"><code><span class="field-name">tabItemFlagsOverrideSet</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tabItemFlagsOverrideSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

[EXPERIMENTAL] TabItem flags to set when a window of this class gets submitted into a dock node tab bar. May use with ImGuiTabItemFlags_Leading or ImGuiTabItemFlags_Trailing.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dockNodeFlagsOverrideSet"><code><span class="field-name">dockNodeFlagsOverrideSet</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#dockNodeFlagsOverrideSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

[EXPERIMENTAL] Dock node flags to set when a window of this class is hosted by a dock node (it doesn't have to be selected!)

<hr class="field-separator" />

<div class="signature field-var has-description" id="dockingAlwaysTabBar"><code><span class="field-name">dockingAlwaysTabBar</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dockingAlwaysTabBar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set to true to enforce single floating windows of this class always having their own docking node (equivalent of setting the global io.ConfigDockingAlwaysTabBar)

<hr class="field-separator" />

<div class="signature field-var has-description" id="dockingAllowUnclassed"><code><span class="field-name">dockingAllowUnclassed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dockingAllowUnclassed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set to true to allow windows of this class to be docked/merged with an unclassed window. // FIXME-DOCK: Move to DockNodeFlags override?

<hr class="field-separator" />

<div class="signature field-var has-description" id="platformIconData"><code><span class="field-name">platformIconData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#platformIconData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

[EXPERIMENTAL] Pass opaque data for Platform backend to handle.

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

