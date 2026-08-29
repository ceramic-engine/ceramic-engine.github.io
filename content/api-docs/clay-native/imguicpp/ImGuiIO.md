---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiIO
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImGuiIO/
---

# ImGuiIO

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImGuiIO</strong> (extern class)</div>

## Static Members

<div class="signature field-method has-description" id="addKeyEvent"><code><span class="field-name">addKeyEvent</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">down</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addKeyEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Queue a new key down/up event. Key should be "translated" (as in, generally ImGuiKey_A matches the key end-user would use to emit an 'A' character)

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `key` | [Int](/api-docs/clay-native/Int/) |
| `down` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addKeyAnalogEvent"><code><span class="field-name">addKeyAnalogEvent</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">down</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addKeyAnalogEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Queue a new key down/up event for analog values (e.g. ImGuiKey_Gamepad_ values). Dead-zones should be handled by the backend.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `key` | [Int](/api-docs/clay-native/Int/) |
| `down` | [Bool](/api-docs/clay-native/Bool/) |
| `v` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addMousePosEvent"><code><span class="field-name">addMousePosEvent</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addMousePosEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Queue a mouse position update. Use -FLT_MAX,-FLT_MAX to signify no mouse (e.g. app not focused and not hovered)

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `x` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `y` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addMouseButtonEvent"><code><span class="field-name">addMouseButtonEvent</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">down</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addMouseButtonEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Queue a mouse button change

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `button` | [Int](/api-docs/clay-native/Int/) |
| `down` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addMouseWheelEvent"><code><span class="field-name">addMouseWheelEvent</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">wheelX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">wheelY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addMouseWheelEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Queue a mouse wheel update. wheel_y<0: scroll down, wheel_y>0: scroll up, wheel_x<0: scroll right, wheel_x>0: scroll left.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `wheelX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `wheelY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addMouseSourceEvent"><code><span class="field-name">addMouseSourceEvent</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addMouseSourceEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Queue a mouse source change (Mouse/TouchScreen/Pen)

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `source` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addMouseViewportEvent"><code><span class="field-name">addMouseViewportEvent</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addMouseViewportEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Queue a mouse hovered viewport. Requires backend to set ImGuiBackendFlags_HasMouseHoveredViewport to call this (for multi-viewport support).

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `id` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addFocusEvent"><code><span class="field-name">addFocusEvent</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">focused</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addFocusEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Queue a gain/loss of focus for the application (generally based on OS/platform focus of your window)

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `focused` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addInputCharacter"><code><span class="field-name">addInputCharacter</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addInputCharacter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Queue a new character input

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `c` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addInputCharacterUTF16"><code><span class="field-name">addInputCharacterUTF16</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addInputCharacterUTF16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Queue a new character input from a UTF-16 character, it can be a surrogate

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `c` | [cpp.UInt16](/api-docs/clay-native/cpp/UInt16/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addInputCharactersUTF8"><code><span class="field-name">addInputCharactersUTF8</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addInputCharactersUTF8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Queue a new characters input from a UTF-8 string

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `str` | [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setKeyEventNativeDataEx"><code><span class="field-name">setKeyEventNativeDataEx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">nativeKeycode</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">nativeScancode</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">nativeLegacyIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setKeyEventNativeDataEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

[Optional] Specify index for legacy <1.87 IsKeyXXX() functions with native indices + specify native keycode, scancode.

| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `key` | [Int](/api-docs/clay-native/Int/) | |
| `nativeKeycode` | [Int](/api-docs/clay-native/Int/) | |
| `nativeScancode` | [Int](/api-docs/clay-native/Int/) | |
| `nativeLegacyIndex` | [Int](/api-docs/clay-native/Int/) | `-1` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setKeyEventNativeData"><code><span class="field-name">setKeyEventNativeData</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">nativeKeycode</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">nativeScancode</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setKeyEventNativeData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Implied native_legacy_index = -1

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `key` | [Int](/api-docs/clay-native/Int/) |
| `nativeKeycode` | [Int](/api-docs/clay-native/Int/) |
| `nativeScancode` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setAppAcceptingEvents"><code><span class="field-name">setAppAcceptingEvents</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">acceptingEvents</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAppAcceptingEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set master flag for accepting key/mouse/text events (default to true). Useful if you have native dialog boxes that are interrupting your application loop/refresh, and you want to disable events being queued while your app is frozen.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `acceptingEvents` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearEventsQueue"><code><span class="field-name">clearEventsQueue</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearEventsQueue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clear all incoming events.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearInputKeys"><code><span class="field-name">clearInputKeys</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearInputKeys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clear current keyboard/gamepad state + current frame text input buffer. Equivalent to releasing all keys/buttons.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearInputMouse"><code><span class="field-name">clearInputMouse</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearInputMouse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clear current mouse state.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

## Instance Members

<div class="signature field-var has-description" id="configFlags"><code><span class="field-name">configFlags</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#configFlags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= 0              // See ImGuiConfigFlags_ enum. Set by user/application. Keyboard/Gamepad navigation options, etc.

<hr class="field-separator" />

<div class="signature field-var has-description" id="backendFlags"><code><span class="field-name">backendFlags</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#backendFlags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= 0              // See ImGuiBackendFlags_ enum. Set by backend (imgui_impl_xxx files or custom backend) to communicate features supported by the backend.

<hr class="field-separator" />

<div class="signature field-var has-description" id="displaySize"><code><span class="field-name">displaySize</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#displaySize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<unset>          // Main display size, in pixels (== GetMainViewport()->Size). May change every frame.

<hr class="field-separator" />

<div class="signature field-var has-description" id="displayFramebufferScale"><code><span class="field-name">displayFramebufferScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#displayFramebufferScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= (1, 1)         // Main display density. For retina display where window coordinates are different from framebuffer coordinates. This will affect font density + will end up in ImDrawData::FramebufferScale.

<hr class="field-separator" />

<div class="signature field-var has-description" id="deltaTime"><code><span class="field-name">deltaTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#deltaTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= 1.0f/60.0f     // Time elapsed since last frame, in seconds. May change every frame.

<hr class="field-separator" />

<div class="signature field-var has-description" id="iniSavingRate"><code><span class="field-name">iniSavingRate</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#iniSavingRate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= 5.0f           // Minimum time between saving positions/sizes to .ini file, in seconds.

<hr class="field-separator" />

<div class="signature field-var has-description" id="iniFilename"><code><span class="field-name">iniFilename</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a></code><a class="header-anchor" href="#iniFilename"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= "imgui.ini"    // Path to .ini file (important: default "imgui.ini" is relative to current working dir!). Set NULL to disable automatic .ini loading/saving or if you want to manually call LoadIniSettingsXXX() / SaveIniSettingsXXX() functions.

<hr class="field-separator" />

<div class="signature field-var has-description" id="logFilename"><code><span class="field-name">logFilename</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a></code><a class="header-anchor" href="#logFilename"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= "imgui_log.txt"// Path to .log file (default parameter to ImGui::LogToFile when no file is specified).

<hr class="field-separator" />

<div class="signature field-var has-description" id="userData"><code><span class="field-name">userData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#userData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= NULL           // Store your own data.

<hr class="field-separator" />

<div class="signature field-var has-description" id="fonts"><code><span class="field-name">fonts</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#fonts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<auto>           // Font atlas: load, rasterize and pack one or more fonts into a single texture.

<hr class="field-separator" />

<div class="signature field-var has-description" id="fontDefault"><code><span class="field-name">fontDefault</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#fontDefault"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= NULL           // Font to use on NewFrame(). Use NULL to uses Fonts->Fonts[0].

<hr class="field-separator" />

<div class="signature field-var has-description" id="fontAllowUserScaling"><code><span class="field-name">fontAllowUserScaling</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#fontAllowUserScaling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // Allow user scaling text of individual window with Ctrl+Wheel.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configNavSwapGamepadButtons"><code><span class="field-name">configNavSwapGamepadButtons</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configNavSwapGamepadButtons"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // Swap Activate<>Cancel (A<>B) buttons, matching typical "Nintendo/Japanese style" gamepad layout.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configNavMoveSetMousePos"><code><span class="field-name">configNavMoveSetMousePos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configNavMoveSetMousePos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // Directional/tabbing navigation teleports the mouse cursor. May be useful on TV/console systems where moving a virtual mouse is difficult. Will update io.MousePos and set io.WantSetMousePos=true.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configNavCaptureKeyboard"><code><span class="field-name">configNavCaptureKeyboard</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configNavCaptureKeyboard"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= true           // Sets io.WantCaptureKeyboard when io.NavActive is set.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configNavEscapeClearFocusItem"><code><span class="field-name">configNavEscapeClearFocusItem</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configNavEscapeClearFocusItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= true           // Pressing Escape can clear focused item + navigation id/highlight. Set to false if you want to always keep highlight on.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configNavEscapeClearFocusWindow"><code><span class="field-name">configNavEscapeClearFocusWindow</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configNavEscapeClearFocusWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // Pressing Escape can clear focused window as well (super set of io.ConfigNavEscapeClearFocusItem).

<hr class="field-separator" />

<div class="signature field-var has-description" id="configNavCursorVisibleAuto"><code><span class="field-name">configNavCursorVisibleAuto</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configNavCursorVisibleAuto"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= true           // Using directional navigation key makes the cursor visible. Mouse click hides the cursor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configNavCursorVisibleAlways"><code><span class="field-name">configNavCursorVisibleAlways</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configNavCursorVisibleAlways"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // Navigation cursor is always visible.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configDockingNoSplit"><code><span class="field-name">configDockingNoSplit</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configDockingNoSplit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // Simplified docking mode: disable window splitting, so docking is limited to merging multiple windows together into tab-bars.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configDockingNoDockingOver"><code><span class="field-name">configDockingNoDockingOver</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configDockingNoDockingOver"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // Simplified docking mode: disable window merging into a same tab-bar, so docking is limited to splitting windows.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configDockingWithShift"><code><span class="field-name">configDockingWithShift</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configDockingWithShift"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // Enable docking with holding Shift key (reduce visual noise, allows dropping in wider space)

<hr class="field-separator" />

<div class="signature field-var has-description" id="configDockingAlwaysTabBar"><code><span class="field-name">configDockingAlwaysTabBar</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configDockingAlwaysTabBar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // [BETA] [FIXME: This currently creates regression with auto-sizing and general overhead] Make every single floating window display within a docking node.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configDockingTransparentPayload"><code><span class="field-name">configDockingTransparentPayload</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configDockingTransparentPayload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // [BETA] Make window or viewport transparent when docking and only display docking boxes on the target viewport. Useful if rendering of multiple viewport cannot be synced. Best used with ConfigViewportsNoAutoMerge.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configViewportsNoAutoMerge"><code><span class="field-name">configViewportsNoAutoMerge</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configViewportsNoAutoMerge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false;         // Set to make all floating imgui windows always create their own viewport. Otherwise, they are merged into the main host viewports when overlapping it. May also set ImGuiViewportFlags_NoAutoMerge on individual viewport.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configViewportsNoTaskBarIcon"><code><span class="field-name">configViewportsNoTaskBarIcon</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configViewportsNoTaskBarIcon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // Disable default OS task bar icon flag for secondary viewports. When a viewport doesn't want a task bar icon, ImGuiViewportFlags_NoTaskBarIcon will be set on it.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configViewportsNoDecoration"><code><span class="field-name">configViewportsNoDecoration</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configViewportsNoDecoration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= true           // Disable default OS window decoration flag for secondary viewports. When a viewport doesn't want window decorations, ImGuiViewportFlags_NoDecoration will be set on it. Enabling decoration can create subsequent issues at OS levels (e.g. minimum window size).

<hr class="field-separator" />

<div class="signature field-var has-description" id="configViewportsNoDefaultParent"><code><span class="field-name">configViewportsNoDefaultParent</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configViewportsNoDefaultParent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= true           // Disable setting OS window parent to main viewport by default. The platform backend is expected to honor `viewport->ParentViewportID` to setup a parent/child relationship between the OS windows (supported if ImGuiBackendFlags_HasParentViewport is set). When parented: child windows always appear in front of their parent. Set to false if you want viewports to automatically be parent of main viewport, otherwise all viewports will be top-level OS windows. Parent/child relationship may be set on a per-window basis using ImGuiWindowClass.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configViewportsPlatformFocusSetsImGuiFocus"><code><span class="field-name">configViewportsPlatformFocusSetsImGuiFocus</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configViewportsPlatformFocusSetsImGuiFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= true // When a platform window is focused (e.g. using Alt+Tab, clicking Platform Title Bar), apply corresponding focus on imgui windows (may clear focus/active id from imgui windows location in other platform windows). In principle this is better enabled but we provide an opt-out, because some Linux window managers tend to eagerly focus windows (e.g. on mouse hover, or even a simple window pos/size change).

<hr class="field-separator" />

<div class="signature field-var has-description" id="configDpiScaleFonts"><code><span class="field-name">configDpiScaleFonts</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configDpiScaleFonts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // [EXPERIMENTAL] Automatically overwrite style.FontScaleDpi when Monitor DPI changes. This will scale fonts but _NOT_ scale sizes/padding for now.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configDpiScaleViewports"><code><span class="field-name">configDpiScaleViewports</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configDpiScaleViewports"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // [EXPERIMENTAL] Scale Dear ImGui and Platform Windows when Monitor DPI changes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mouseDrawCursor"><code><span class="field-name">mouseDrawCursor</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mouseDrawCursor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // Request ImGui to draw a mouse cursor for you (if you are on a platform without a mouse cursor). Cannot be easily renamed to 'io.ConfigXXX' because this is frequently used by backend implementations.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configMacOSXBehaviors"><code><span class="field-name">configMacOSXBehaviors</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configMacOSXBehaviors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= defined(__APPLE__) // Swap Cmd<>Ctrl keys + OS X style text editing cursor movement using Alt instead of Ctrl, Shortcuts using Cmd/Super instead of Ctrl, Line/Text Start and End using Cmd+Arrows instead of Home/End, Double click selects by word instead of selecting whole text, Multi-selection in lists uses Cmd/Super instead of Ctrl.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configInputTrickleEventQueue"><code><span class="field-name">configInputTrickleEventQueue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configInputTrickleEventQueue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= true           // Enable input queue trickling: some types of events submitted during the same frame (e.g. button down + up) will be spread over multiple frames, improving interactions with low framerates.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configInputTextCursorBlink"><code><span class="field-name">configInputTextCursorBlink</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configInputTextCursorBlink"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= true           // Enable blinking cursor (optional as some users consider it to be distracting).

<hr class="field-separator" />

<div class="signature field-var has-description" id="configInputTextEnterKeepActive"><code><span class="field-name">configInputTextEnterKeepActive</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configInputTextEnterKeepActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // [BETA] Pressing Enter will reactivate item and select all text (single-line only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="configDragClickToInputText"><code><span class="field-name">configDragClickToInputText</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configDragClickToInputText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // [BETA] Enable turning DragXXX widgets into text input with a simple mouse click-release (without moving). Not desirable on devices without a keyboard.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configWindowsResizeFromEdges"><code><span class="field-name">configWindowsResizeFromEdges</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configWindowsResizeFromEdges"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= true           // Enable resizing of windows from their edges and from the lower-left corner. This requires ImGuiBackendFlags_HasMouseCursors for better mouse cursor feedback. (This used to be a per-window ImGuiWindowFlags_ResizeFromAnySide flag)

<hr class="field-separator" />

<div class="signature field-var has-description" id="configWindowsMoveFromTitleBarOnly"><code><span class="field-name">configWindowsMoveFromTitleBarOnly</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configWindowsMoveFromTitleBarOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false      // Enable allowing to move windows only when clicking on their title bar. Does not apply to windows without a title bar.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configWindowsCopyContentsWithCtrlC"><code><span class="field-name">configWindowsCopyContentsWithCtrlC</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configWindowsCopyContentsWithCtrlC"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false      // [EXPERIMENTAL] Ctrl+C copy the contents of focused window into the clipboard. Experimental because: (1) has known issues with nested Begin/End pairs (2) text output quality varies (3) text output is in submission order rather than spatial order.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configScrollbarScrollByPage"><code><span class="field-name">configScrollbarScrollByPage</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configScrollbarScrollByPage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= true           // Enable scrolling page by page when clicking outside the scrollbar grab. When disabled, always scroll to clicked location. When enabled, Shift+Click scrolls to clicked location.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configMemoryCompactTimer"><code><span class="field-name">configMemoryCompactTimer</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#configMemoryCompactTimer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= 60.0f          // Timer (in seconds) to free transient windows/tables memory buffers when unused. Set to -1.0f to disable.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mouseDoubleClickTime"><code><span class="field-name">mouseDoubleClickTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mouseDoubleClickTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= 0.30f          // Time for a double-click, in seconds.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mouseDoubleClickMaxDist"><code><span class="field-name">mouseDoubleClickMaxDist</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mouseDoubleClickMaxDist"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= 6.0f           // Distance threshold to stay in to validate a double-click, in pixels.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mouseDragThreshold"><code><span class="field-name">mouseDragThreshold</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mouseDragThreshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= 6.0f           // Distance threshold before considering we are dragging.

<hr class="field-separator" />

<div class="signature field-var has-description" id="keyRepeatDelay"><code><span class="field-name">keyRepeatDelay</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#keyRepeatDelay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= 0.275f         // When holding a key/button, time before it starts repeating, in seconds (for buttons in Repeat mode, etc.).

<hr class="field-separator" />

<div class="signature field-var has-description" id="keyRepeatRate"><code><span class="field-name">keyRepeatRate</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#keyRepeatRate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= 0.050f         // When holding a key/button, rate at which it repeats, in seconds.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configErrorRecovery"><code><span class="field-name">configErrorRecovery</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configErrorRecovery"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= true       // Enable error recovery support. Some errors won't be detected and lead to direct crashes if recovery is disabled.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configErrorRecoveryEnableAssert"><code><span class="field-name">configErrorRecoveryEnableAssert</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configErrorRecoveryEnableAssert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= true       // Enable asserts on recoverable error. By default call IM_ASSERT() when returning from a failing IM_ASSERT_USER_ERROR()

<hr class="field-separator" />

<div class="signature field-var has-description" id="configErrorRecoveryEnableDebugLog"><code><span class="field-name">configErrorRecoveryEnableDebugLog</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configErrorRecoveryEnableDebugLog"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= true       // Enable debug log output on recoverable errors.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configErrorRecoveryEnableTooltip"><code><span class="field-name">configErrorRecoveryEnableTooltip</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configErrorRecoveryEnableTooltip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= true       // Enable tooltip on recoverable errors. The tooltip include a way to enable asserts if they were disabled.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configDebugIsDebuggerPresent"><code><span class="field-name">configDebugIsDebuggerPresent</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configDebugIsDebuggerPresent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // Enable various tools calling IM_DEBUG_BREAK().

<hr class="field-separator" />

<div class="signature field-var has-description" id="configDebugHighlightIdConflicts"><code><span class="field-name">configDebugHighlightIdConflicts</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configDebugHighlightIdConflicts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= true           // Highlight and show an error message popup when multiple items have conflicting identifiers.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configDebugHighlightIdConflictsShowItemPicker"><code><span class="field-name">configDebugHighlightIdConflictsShowItemPicker</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configDebugHighlightIdConflictsShowItemPicker"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

=true // Show "Item Picker" button in aforementioned popup.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configDebugBeginReturnValueOnce"><code><span class="field-name">configDebugBeginReturnValueOnce</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configDebugBeginReturnValueOnce"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // First-time calls to Begin()/BeginChild() will return false. NEEDS TO BE SET AT APPLICATION BOOT TIME if you don't want to miss windows.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configDebugBeginReturnValueLoop"><code><span class="field-name">configDebugBeginReturnValueLoop</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configDebugBeginReturnValueLoop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // Some calls to Begin()/BeginChild() will return false. Will cycle through window depths then repeat. Suggested use: add "io.ConfigDebugBeginReturnValue = io.KeyShift" in your main loop then occasionally press SHIFT. Windows should be flickering while running.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configDebugIgnoreFocusLoss"><code><span class="field-name">configDebugIgnoreFocusLoss</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configDebugIgnoreFocusLoss"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // Ignore io.AddFocusEvent(false), consequently not calling io.ClearInputKeys()/io.ClearInputMouse() in input processing.

<hr class="field-separator" />

<div class="signature field-var has-description" id="configDebugIniSettings"><code><span class="field-name">configDebugIniSettings</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#configDebugIniSettings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false          // Save .ini data with extra comments (particularly helpful for Docking, but makes saving slower)

<hr class="field-separator" />

<div class="signature field-var has-description" id="backendPlatformName"><code><span class="field-name">backendPlatformName</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a></code><a class="header-anchor" href="#backendPlatformName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= NULL

<hr class="field-separator" />

<div class="signature field-var has-description" id="backendRendererName"><code><span class="field-name">backendRendererName</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a></code><a class="header-anchor" href="#backendRendererName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= NULL

<hr class="field-separator" />

<div class="signature field-var has-description" id="backendPlatformUserData"><code><span class="field-name">backendPlatformUserData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#backendPlatformUserData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= NULL           // User data for platform backend

<hr class="field-separator" />

<div class="signature field-var has-description" id="backendRendererUserData"><code><span class="field-name">backendRendererUserData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#backendRendererUserData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= NULL           // User data for renderer backend

<hr class="field-separator" />

<div class="signature field-var has-description" id="backendLanguageUserData"><code><span class="field-name">backendLanguageUserData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#backendLanguageUserData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= NULL           // User data for non C++ programming language backend

<hr class="field-separator" />

<div class="signature field-var has-description" id="wantCaptureMouse"><code><span class="field-name">wantCaptureMouse</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#wantCaptureMouse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set when Dear ImGui will use mouse inputs, in this case do not dispatch them to your main game/application (either way, always pass on mouse inputs to imgui). (e.g. unclicked mouse is hovering over an imgui window, widget is active, mouse was clicked over an imgui window, etc.).

<hr class="field-separator" />

<div class="signature field-var has-description" id="wantCaptureKeyboard"><code><span class="field-name">wantCaptureKeyboard</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#wantCaptureKeyboard"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set when Dear ImGui will use keyboard inputs, in this case do not dispatch them to your main game/application (either way, always pass keyboard inputs to imgui). (e.g. InputText active, or an imgui window is focused and navigation is enabled, etc.).

<hr class="field-separator" />

<div class="signature field-var has-description" id="wantTextInput"><code><span class="field-name">wantTextInput</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#wantTextInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mobile/console: when set, you may display an on-screen keyboard. This is set by Dear ImGui when it wants textual keyboard input to happen (e.g. when a InputText widget is active).

<hr class="field-separator" />

<div class="signature field-var has-description" id="wantSetMousePos"><code><span class="field-name">wantSetMousePos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#wantSetMousePos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

MousePos has been altered, backend should reposition mouse on next frame. Rarely used! Set only when io.ConfigNavMoveSetMousePos is enabled.

<hr class="field-separator" />

<div class="signature field-var has-description" id="wantSaveIniSettings"><code><span class="field-name">wantSaveIniSettings</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#wantSaveIniSettings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When manual .ini load/save is active (io.IniFilename == NULL), this will be set to notify your application that you can call SaveIniSettingsToMemory() and save yourself. Important: clear io.WantSaveIniSettings yourself after saving!

<hr class="field-separator" />

<div class="signature field-var has-description" id="navActive"><code><span class="field-name">navActive</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#navActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Keyboard/Gamepad navigation is currently allowed (will handle ImGuiKey_NavXXX events) = a window is focused and it doesn't use the ImGuiWindowFlags_NoNavInputs flag.

<hr class="field-separator" />

<div class="signature field-var has-description" id="navVisible"><code><span class="field-name">navVisible</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#navVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Keyboard/Gamepad navigation highlight is visible and allowed (will handle ImGuiKey_NavXXX events).

<hr class="field-separator" />

<div class="signature field-var has-description" id="framerate"><code><span class="field-name">framerate</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#framerate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Estimate of application framerate (rolling average over 60 frames, based on io.DeltaTime), in frame per second. Solely for convenience. Slow applications may not want to use a moving average or may want to reset underlying buffers occasionally.

<hr class="field-separator" />

<div class="signature field-var has-description" id="metricsRenderVertices"><code><span class="field-name">metricsRenderVertices</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#metricsRenderVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertices output during last call to Render()

<hr class="field-separator" />

<div class="signature field-var has-description" id="metricsRenderIndices"><code><span class="field-name">metricsRenderIndices</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#metricsRenderIndices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indices output during last call to Render() = number of triangles * 3

<hr class="field-separator" />

<div class="signature field-var has-description" id="metricsRenderWindows"><code><span class="field-name">metricsRenderWindows</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#metricsRenderWindows"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of visible windows

<hr class="field-separator" />

<div class="signature field-var has-description" id="metricsActiveWindows"><code><span class="field-name">metricsActiveWindows</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#metricsActiveWindows"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of active windows

<hr class="field-separator" />

<div class="signature field-var has-description" id="mouseDelta"><code><span class="field-name">mouseDelta</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#mouseDelta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mouse delta. Note that this is zero if either current or previous position are invalid (-FLT_MAX,-FLT_MAX), so a disappearing/reappearing mouse won't have a huge delta.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ctx"><code><span class="field-name">ctx</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#ctx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parent UI context (needs to be set explicitly by parent).

<hr class="field-separator" />

<div class="signature field-var has-description" id="mousePos"><code><span class="field-name">mousePos</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#mousePos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mouse position, in pixels. Set to ImVec2(-FLT_MAX, -FLT_MAX) if mouse is unavailable (on another screen, etc.)

<hr class="field-separator" />

<div class="signature field-var has-description" id="mouseWheel"><code><span class="field-name">mouseWheel</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mouseWheel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mouse wheel Vertical: 1 unit scrolls about 5 lines text. >0 scrolls Up, <0 scrolls Down. Hold Shift to turn vertical scroll into horizontal scroll.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mouseWheelH"><code><span class="field-name">mouseWheelH</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mouseWheelH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mouse wheel Horizontal. >0 scrolls Left, <0 scrolls Right. Most users don't have a mouse with a horizontal wheel, may not be filled by all backends.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mouseSource"><code><span class="field-name">mouseSource</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#mouseSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mouse actual input peripheral (Mouse/TouchScreen/Pen).

<hr class="field-separator" />

<div class="signature field-var has-description" id="mouseHoveredViewport"><code><span class="field-name">mouseHoveredViewport</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#mouseHoveredViewport"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

(Optional) Modify using io.AddMouseViewportEvent(). With multi-viewports: viewport the OS mouse is hovering. If possible _IGNORING_ viewports with the ImGuiViewportFlags_NoInputs flag is much better (few backends can handle that). Set io.BackendFlags |= ImGuiBackendFlags_HasMouseHoveredViewport if you can provide this info. If you don't imgui will infer the value using the rectangles and last focused time of the viewports it knows about (ignoring other OS windows).

<hr class="field-separator" />

<div class="signature field-var has-description" id="keyCtrl"><code><span class="field-name">keyCtrl</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#keyCtrl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Keyboard modifier down: Ctrl (non-macOS), Cmd (macOS)

<hr class="field-separator" />

<div class="signature field-var has-description" id="keyShift"><code><span class="field-name">keyShift</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#keyShift"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Keyboard modifier down: Shift

<hr class="field-separator" />

<div class="signature field-var has-description" id="keyAlt"><code><span class="field-name">keyAlt</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#keyAlt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Keyboard modifier down: Alt

<hr class="field-separator" />

<div class="signature field-var has-description" id="keySuper"><code><span class="field-name">keySuper</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#keySuper"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Keyboard modifier down: Windows/Super (non-macOS), Ctrl (macOS)

<hr class="field-separator" />

<div class="signature field-var has-description" id="keyMods"><code><span class="field-name">keyMods</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#keyMods"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Key mods flags (any of ImGuiMod_Ctrl/ImGuiMod_Shift/ImGuiMod_Alt/ImGuiMod_Super flags, same as io.KeyCtrl/KeyShift/KeyAlt/KeySuper but merged into flags). Read-only, updated by NewFrame()

<hr class="field-separator" />

<div class="signature field-var has-description" id="wantCaptureMouseUnlessPopupClose"><code><span class="field-name">wantCaptureMouseUnlessPopupClose</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#wantCaptureMouseUnlessPopupClose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alternative to WantCaptureMouse: (WantCaptureMouse == true && WantCaptureMouseUnlessPopupClose == false) when a click over void is expected to close a popup.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mousePosPrev"><code><span class="field-name">mousePosPrev</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#mousePosPrev"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Previous mouse position (note that MouseDelta is not necessary == MousePos-MousePosPrev, in case either position is invalid)

<hr class="field-separator" />

<div class="signature field-var has-description" id="mouseWheelRequestAxisSwap"><code><span class="field-name">mouseWheelRequestAxisSwap</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mouseWheelRequestAxisSwap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

On a non-Mac system, holding Shift requests WheelY to perform the equivalent of a WheelX event. On a Mac system this is already enforced by the system.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mouseCtrlLeftAsRightClick"><code><span class="field-name">mouseCtrlLeftAsRightClick</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mouseCtrlLeftAsRightClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

(OSX) Set to true when the current click was a Ctrl+Click that spawned a simulated right click

<hr class="field-separator" />

<div class="signature field-var has-description" id="penPressure"><code><span class="field-name">penPressure</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#penPressure"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Touch/Pen pressure (0.0f to 1.0f, should be >0.0f only when MouseDown[0] == true). Helper storage currently unused by Dear ImGui.

<hr class="field-separator" />

<div class="signature field-var has-description" id="appFocusLost"><code><span class="field-name">appFocusLost</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#appFocusLost"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Only modify via AddFocusEvent()

<hr class="field-separator" />

<div class="signature field-var has-description" id="appAcceptingEvents"><code><span class="field-name">appAcceptingEvents</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#appAcceptingEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Only modify via SetAppAcceptingEvents()

<hr class="field-separator" />

<div class="signature field-var has-description" id="inputQueueSurrogate"><code><span class="field-name">inputQueueSurrogate</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a></code><a class="header-anchor" href="#inputQueueSurrogate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For AddInputCharacterUTF16()

<hr class="field-separator" />

<div class="signature field-var has-description" id="inputQueueCharacters"><code><span class="field-name">inputQueueCharacters</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVector_ImWchar/" class="type-link">ImVector_ImWchar</a></code><a class="header-anchor" href="#inputQueueCharacters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Queue of _characters_ input (obtained by platform backend). Fill using AddInputCharacter() helper.

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

