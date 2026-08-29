---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiViewport
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImGuiViewport/
---

# ImGuiViewport

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImGuiViewport</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="getCenter"><code><span class="field-name">getCenter</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#getCenter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getWorkCenter"><code><span class="field-name">getWorkCenter</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#getWorkCenter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getDebugName"><code><span class="field-name">getDebugName</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a></code><a class="header-anchor" href="#getDebugName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) |

## Instance Members

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique identifier for the viewport

<hr class="field-separator" />

<div class="signature field-var has-description" id="flags"><code><span class="field-name">flags</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#flags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See ImGuiViewportFlags_

<hr class="field-separator" />

<div class="signature field-var has-description" id="pos"><code><span class="field-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#pos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Main Area: Position of the viewport (Dear ImGui coordinates are the same as OS desktop/native coordinates)

<hr class="field-separator" />

<div class="signature field-var has-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Main Area: Size of the viewport.

<hr class="field-separator" />

<div class="signature field-var has-description" id="framebufferScale"><code><span class="field-name">framebufferScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#framebufferScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Density of the viewport for Retina display (always 1,1 on Windows, may be 2,2 etc on macOS/iOS). This will affect font rasterizer density.

<hr class="field-separator" />

<div class="signature field-var has-description" id="workPos"><code><span class="field-name">workPos</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#workPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Work Area: Position of the viewport minus task bars, menus bars, status bars (>= Pos)

<hr class="field-separator" />

<div class="signature field-var has-description" id="workSize"><code><span class="field-name">workSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#workSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Work Area: Size of the viewport minus task bars, menu bars, status bars (<= Size)

<hr class="field-separator" />

<div class="signature field-var has-description" id="dpiScale"><code><span class="field-name">dpiScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#dpiScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

1.0f = 96 DPI = No extra scale.

<hr class="field-separator" />

<div class="signature field-var has-description" id="parentViewportId"><code><span class="field-name">parentViewportId</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#parentViewportId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

(Advanced) 0: no parent. Instruct the platform backend to setup a parent/child relationship between platform windows.

<hr class="field-separator" />

<div class="signature field-var has-description" id="parentViewport"><code><span class="field-name">parentViewport</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#parentViewport"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

(Advanced) Direct shortcut to ImGui::FindViewportByID(ParentViewportId). NULL: no parent.

<hr class="field-separator" />

<div class="signature field-var has-description" id="drawData"><code><span class="field-name">drawData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#drawData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The ImDrawData corresponding to this viewport. Valid after Render() and until the next call to NewFrame().

<hr class="field-separator" />

<div class="signature field-var has-description" id="rendererUserData"><code><span class="field-name">rendererUserData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#rendererUserData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

void* to hold custom data structure for the renderer (e.g. swap chain, framebuffers etc.). generally set by your Renderer_CreateWindow function.

<hr class="field-separator" />

<div class="signature field-var has-description" id="platformUserData"><code><span class="field-name">platformUserData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#platformUserData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

void* to hold custom data structure for the OS / platform (e.g. windowing info, render context). generally set by your Platform_CreateWindow function.

<hr class="field-separator" />

<div class="signature field-var has-description" id="platformIconData"><code><span class="field-name">platformIconData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#platformIconData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

void* to hold custom data structure for the OS / platform to specify an icon. Currently unused for exposed to allow experiments.

<hr class="field-separator" />

<div class="signature field-var has-description" id="platformHandle"><code><span class="field-name">platformHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#platformHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

void* to hold higher-level, platform window handle (e.g. HWND for Win32 backend, Uint32 WindowID for SDL, GLFWWindow* for GLFW), for FindViewportByPlatformHandle().

<hr class="field-separator" />

<div class="signature field-var has-description" id="platformHandleRaw"><code><span class="field-name">platformHandleRaw</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#platformHandleRaw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

void* to hold lower-level, platform-native window handle (always HWND on Win32 platform, unused for other platforms).

<hr class="field-separator" />

<div class="signature field-var has-description" id="platformWindowCreated"><code><span class="field-name">platformWindowCreated</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#platformWindowCreated"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Platform window has been created (Platform_CreateWindow() has been called). This is false during the first frame where a viewport is being created.

<hr class="field-separator" />

<div class="signature field-var has-description" id="platformRequestMove"><code><span class="field-name">platformRequestMove</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#platformRequestMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Platform window requested move (e.g. window was moved by the OS / host window manager, authoritative position will be OS window position)

<hr class="field-separator" />

<div class="signature field-var has-description" id="platformRequestResize"><code><span class="field-name">platformRequestResize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#platformRequestResize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Platform window requested resize (e.g. window was resized by the OS / host window manager, authoritative size will be OS window size)

<hr class="field-separator" />

<div class="signature field-var has-description" id="platformRequestClose"><code><span class="field-name">platformRequestClose</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#platformRequestClose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Platform window requested closure (e.g. window was moved by the OS / host window manager, e.g. pressing ALT-F4)

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

