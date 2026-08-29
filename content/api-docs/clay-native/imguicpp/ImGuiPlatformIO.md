---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiPlatformIO
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImGuiPlatformIO/
---

# ImGuiPlatformIO

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImGuiPlatformIO</strong> (extern class)</div>

## Static Members

<div class="signature field-method has-description" id="setPlatform_GetWindowWorkAreaInsets"><code><span class="field-name">setPlatform_GetWindowWorkAreaInsets</span><span class="parenthesis">(</span><span class="arg-name">getWindowWorkAreaInsetsFunc</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPlatform_GetWindowWorkAreaInsets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set ImGuiPlatformIO::Platform_GetWindowWorkAreaInsets in a C-compatible mannner

| Name | Type |
|------|------|
| `getWindowWorkAreaInsetsFunc` | [ImGuiOpaqueCallback](/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setPlatform_GetWindowFramebufferScale"><code><span class="field-name">setPlatform_GetWindowFramebufferScale</span><span class="parenthesis">(</span><span class="arg-name">getWindowFramebufferScaleFunc</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPlatform_GetWindowFramebufferScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set ImGuiPlatformIO::Platform_GetWindowFramebufferScale in a C-compatible mannner

| Name | Type |
|------|------|
| `getWindowFramebufferScaleFunc` | [ImGuiOpaqueCallback](/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setPlatform_GetWindowPos"><code><span class="field-name">setPlatform_GetWindowPos</span><span class="parenthesis">(</span><span class="arg-name">getWindowPosFunc</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPlatform_GetWindowPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set ImGuiPlatformIO::Platform_GetWindowPos in a C-compatible mannner

| Name | Type |
|------|------|
| `getWindowPosFunc` | [ImGuiOpaqueCallback](/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setPlatform_GetWindowSize"><code><span class="field-name">setPlatform_GetWindowSize</span><span class="parenthesis">(</span><span class="arg-name">getWindowSizeFunc</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPlatform_GetWindowSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set ImGuiPlatformIO::Platform_GetWindowSize in a C-compatible mannner

| Name | Type |
|------|------|
| `getWindowSizeFunc` | [ImGuiOpaqueCallback](/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearPlatformHandlers"><code><span class="field-name">clearPlatformHandlers</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearPlatformHandlers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clear all Platform_XXX fields. Typically called on Platform Backend shutdown.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearRendererHandlers"><code><span class="field-name">clearRendererHandlers</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearRendererHandlers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clear all Renderer_XXX fields. Typically called on Renderer Backend shutdown.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

## Instance Members

<div class="signature field-var has-description" id="platform_GetClipboardTextFn"><code><span class="field-name">platform_GetClipboardTextFn</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_GetClipboardTextFn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Should return NULL on failure (e.g. clipboard data is not text).

<hr class="field-separator" />

<div class="signature field-var no-description" id="platform_SetClipboardTextFn"><code><span class="field-name">platform_SetClipboardTextFn</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_SetClipboardTextFn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="platform_ClipboardUserData"><code><span class="field-name">platform_ClipboardUserData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#platform_ClipboardUserData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="platform_OpenInShellFn"><code><span class="field-name">platform_OpenInShellFn</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_OpenInShellFn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="platform_OpenInShellUserData"><code><span class="field-name">platform_OpenInShellUserData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#platform_OpenInShellUserData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="platform_SetImeDataFn"><code><span class="field-name">platform_SetImeDataFn</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_SetImeDataFn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="platform_ImeUserData"><code><span class="field-name">platform_ImeUserData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#platform_ImeUserData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_LocaleDecimalPoint"><code><span class="field-name">platform_LocaleDecimalPoint</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a></code><a class="header-anchor" href="#platform_LocaleDecimalPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

'.'

<hr class="field-separator" />

<div class="signature field-var no-description" id="renderer_TextureMaxWidth"><code><span class="field-name">renderer_TextureMaxWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#renderer_TextureMaxWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="renderer_TextureMaxHeight"><code><span class="field-name">renderer_TextureMaxHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#renderer_TextureMaxHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="renderer_RenderState"><code><span class="field-name">renderer_RenderState</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#renderer_RenderState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="drawCallback_ResetRenderState"><code><span class="field-name">drawCallback_ResetRenderState</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#drawCallback_ResetRenderState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Request to reset the graphics/render state.

<hr class="field-separator" />

<div class="signature field-var has-description" id="drawCallback_SetSamplerLinear"><code><span class="field-name">drawCallback_SetSamplerLinear</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#drawCallback_SetSamplerLinear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Request backend to set texture sampling to Linear.

<hr class="field-separator" />

<div class="signature field-var has-description" id="drawCallback_SetSamplerNearest"><code><span class="field-name">drawCallback_SetSamplerNearest</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#drawCallback_SetSamplerNearest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Request backend to set texture sampling to Nearest/Point.

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_CreateWindow"><code><span class="field-name">platform_CreateWindow</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_CreateWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

. . U . .  // Create a new platform window for the given viewport

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_DestroyWindow"><code><span class="field-name">platform_DestroyWindow</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_DestroyWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

N . U . D  //

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_ShowWindow"><code><span class="field-name">platform_ShowWindow</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_ShowWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

. . U . .  // Newly created windows are initially hidden so SetWindowPos/Size/Title can be called on them before showing the window

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_SetWindowPos"><code><span class="field-name">platform_SetWindowPos</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_SetWindowPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

. . U . .  // Set platform window position (given the upper-left corner of client area)

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_GetWindowPos"><code><span class="field-name">platform_GetWindowPos</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_GetWindowPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

N . . . .  // (Use ImGuiPlatformIO_SetPlatform_GetWindowPos() to set this from C, otherwise you will likely encounter stack corruption)

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_SetWindowSize"><code><span class="field-name">platform_SetWindowSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_SetWindowSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

. . U . .  // Set platform window client area size (ignoring OS decorations such as OS title bar etc.)

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_GetWindowSize"><code><span class="field-name">platform_GetWindowSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_GetWindowSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

N . . . .  // Get platform window client area size (Use ImGuiPlatformIO_SetPlatform_GetWindowSize() to set this from C, otherwise you will likely encounter stack corruption)

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_GetWindowFramebufferScale"><code><span class="field-name">platform_GetWindowFramebufferScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_GetWindowFramebufferScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

N . . . .  // Return viewport density. Always 1,1 on Windows, often 2,2 on Retina display on macOS/iOS. MUST BE INTEGER VALUES. (Use ImGuiPlatformIO_SetPlatform_GetWindowFramebufferScale() to set this from C, otherwise you will likely encounter stack corruption)

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_SetWindowFocus"><code><span class="field-name">platform_SetWindowFocus</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_SetWindowFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

N . . . .  // Move window to front and set input focus

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_GetWindowFocus"><code><span class="field-name">platform_GetWindowFocus</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_GetWindowFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

. . U . .  //

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_GetWindowMinimized"><code><span class="field-name">platform_GetWindowMinimized</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_GetWindowMinimized"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

N . . . .  // Get platform window minimized state. When minimized, we generally won't attempt to get/set size and contents will be culled more easily

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_SetWindowTitle"><code><span class="field-name">platform_SetWindowTitle</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_SetWindowTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

. . U . .  // Set platform window title (given an UTF-8 string)

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_SetWindowAlpha"><code><span class="field-name">platform_SetWindowAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_SetWindowAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

. . U . .  // (Optional) Setup global transparency (not per-pixel transparency)

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_UpdateWindow"><code><span class="field-name">platform_UpdateWindow</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_UpdateWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

. . U . .  // (Optional) Called by UpdatePlatformWindows(). Optional hook to allow the platform backend from doing general book-keeping every frame.

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_RenderWindow"><code><span class="field-name">platform_RenderWindow</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_RenderWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

. . . R .  // (Optional) Main rendering (platform side! This is often unused, or just setting a "current" context for OpenGL bindings). 'render_arg' is the value passed to RenderPlatformWindowsDefault().

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_SwapBuffers"><code><span class="field-name">platform_SwapBuffers</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_SwapBuffers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

. . . R .  // (Optional) Call Present/SwapBuffers (platform side! This is often unused!). 'render_arg' is the value passed to RenderPlatformWindowsDefault().

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_GetWindowDpiScale"><code><span class="field-name">platform_GetWindowDpiScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_GetWindowDpiScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

N . . . .  // (Optional) [BETA] FIXME-DPI: DPI handling: Return DPI scale for this viewport. 1.0f = 96 DPI.

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_OnChangedViewport"><code><span class="field-name">platform_OnChangedViewport</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_OnChangedViewport"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

. F . . .  // (Optional) [BETA] FIXME-DPI: DPI handling: Called during Begin() every time the viewport we are outputting into changes, so backend has a chance to swap fonts to adjust style.

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_GetWindowWorkAreaInsets"><code><span class="field-name">platform_GetWindowWorkAreaInsets</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_GetWindowWorkAreaInsets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

N . . . .  // (Optional) [BETA] Get initial work area inset for the viewport (won't be covered by main menu bar, dockspace over viewport etc.). Default to (0,0),(0,0). 'safeAreaInsets' in iOS land, 'DisplayCutout' in Android land. (Use ImGuiPlatformIO_SetPlatform_GetWindowWorkAreaInsets() to set this from C, otherwise you will likely encounter stack corruption)

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform_CreateVkSurface"><code><span class="field-name">platform_CreateVkSurface</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#platform_CreateVkSurface"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

(Optional) For a Vulkan Renderer to call into Platform code (since the surface creation needs to tie them both).

<hr class="field-separator" />

<div class="signature field-var has-description" id="renderer_CreateWindow"><code><span class="field-name">renderer_CreateWindow</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#renderer_CreateWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

. . U . .  // Create swap chain, frame buffers etc. (called after Platform_CreateWindow)

<hr class="field-separator" />

<div class="signature field-var has-description" id="renderer_DestroyWindow"><code><span class="field-name">renderer_DestroyWindow</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#renderer_DestroyWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

N . U . D  // Destroy swap chain, frame buffers etc. (called before Platform_DestroyWindow)

<hr class="field-separator" />

<div class="signature field-var has-description" id="renderer_SetWindowSize"><code><span class="field-name">renderer_SetWindowSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#renderer_SetWindowSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

. . U . .  // Resize swap chain, frame buffers etc. (called after Platform_SetWindowSize)

<hr class="field-separator" />

<div class="signature field-var has-description" id="renderer_RenderWindow"><code><span class="field-name">renderer_RenderWindow</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#renderer_RenderWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

. . . R .  // (Optional) Clear framebuffer, setup render target, then render the viewport->DrawData. 'render_arg' is the value passed to RenderPlatformWindowsDefault().

<hr class="field-separator" />

<div class="signature field-var has-description" id="renderer_SwapBuffers"><code><span class="field-name">renderer_SwapBuffers</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#renderer_SwapBuffers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

. . . R .  // (Optional) Call Present/SwapBuffers. 'render_arg' is the value passed to RenderPlatformWindowsDefault().

<hr class="field-separator" />

<div class="signature field-var no-description" id="monitors"><code><span class="field-name">monitors</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVector_ImGuiPlatformMonitor/" class="type-link">ImVector_ImGuiPlatformMonitor</a></code><a class="header-anchor" href="#monitors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="textures"><code><span class="field-name">textures</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVector_ImTextureDataPtr/" class="type-link">ImVector_ImTextureDataPtr</a></code><a class="header-anchor" href="#textures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of textures used by Dear ImGui (most often 1) + contents of external texture list is automatically appended into this.

<hr class="field-separator" />

<div class="signature field-var has-description" id="viewports"><code><span class="field-name">viewports</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVector_ImGuiViewportPtr/" class="type-link">ImVector_ImGuiViewportPtr</a></code><a class="header-anchor" href="#viewports"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Main viewports, followed by all secondary viewports.

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

