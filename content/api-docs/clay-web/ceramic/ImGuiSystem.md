---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui
title: ImGuiSystem
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/ImGuiSystem/
---

# ImGuiSystem

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/imgui/runtime/src/ceramic/ImGuiSystem.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/System/">System</a> → <strong>ceramic.ImGuiSystem</strong> (Class)</div>

Dear ImGui integration for ceramic - fully backend-agnostic.

Everything goes through ceramic itself, so the SAME code runs on clay
(native + web) and unity:
 - INPUT: ceramic events are forwarded to ImGui's 1.87+ event queue
(`addMousePosEvent`, `addKeyEvent`, ...), text goes through ceramic's
text input sessions (IME-aware), driven by `io.wantTextInput`.
 - FRAME: `newFrame()` at early update (before user code builds its UI in
`update()`), `render()` at late update.
 - RENDERING: `ImGuiRenderable` consumes the draw data through the concrete
`backend.Draw` during the normal visuals pass (no imgui_impl_* backend).
 - TEXTURES: the 1.92 `ImTextureData` protocol handled with ceramic
textures; `ImTextureID` is a registry key (see `ImGuiTextures`).
 - LAYOUT: window positions, sizes and dock nodes are persisted through
ceramic's `PersistentData` instead of ImGui's own `imgui.ini` file (see
`saveLayout()`); opt out with the `imgui_no_persistent_layout` define.

Usage stays the same as before: make `ImGui.*` calls anywhere between
updates (typically in `update()`); frame boundaries are automatic.

## Static Members

<div class="signature field-var has-description has-plugin" id="DEFAULT_FONT"><div class="plugin-name">imgui</div><code><span class="field-name">DEFAULT_FONT</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#DEFAULT_FONT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Name of the default font bundled with the plugin (Roboto-Medium), used
when the project does not provide its own `imgui_font` define.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="DEFAULT_FONT_FALLBACK"><div class="plugin-name">imgui</div><code><span class="field-name">DEFAULT_FONT_FALLBACK</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#DEFAULT_FONT_FALLBACK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Name of the default fallback font bundled with the plugin (Kosugi,
for CJK glyph coverage), merged into the default font.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="shared"><div class="plugin-name">imgui</div><code><span class="field-name">shared</span><span class="operator">:</span> <a href="#" class="type-link">ImGuiSystem</a></code><a class="header-anchor" href="#shared"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared ImGui system instance.
Automatically created when first accessed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="LAYOUT_STORAGE_ID"><div class="plugin-name">imgui</div><code><span class="field-name">LAYOUT_STORAGE_ID</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#LAYOUT_STORAGE_ID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Id of the `PersistentData` storage holding the ImGui layout (window
positions and sizes, dock node tree, collapsed/selected tabs...).

## Instance Members

<div class="signature field-var has-description has-plugin" id="wantCaptureMouse"><div class="plugin-name">imgui</div><code><span class="field-name">wantCaptureMouse</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#wantCaptureMouse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

True when ImGui wants the mouse (apps should ignore clicks then).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="wantCaptureKeyboard"><div class="plugin-name">imgui</div><code><span class="field-name">wantCaptureKeyboard</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#wantCaptureKeyboard"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

True when ImGui wants the keyboard.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="renderable"><div class="plugin-name">imgui</div><code><span class="field-name">renderable</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ImGuiRenderable/" class="type-link">ImGuiRenderable</a></code><a class="header-anchor" href="#renderable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The renderable that draws ImGui (its `depth` places the UI, default topmost).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="customFont"><div class="plugin-name">imgui</div><code><span class="field-name">customFont</span><span class="operator">:</span> <a href="/api-docs/clay-web/imgui/ImGuiFontPtr/" class="type-link">imgui.ImGuiFontPtr</a></code><a class="header-anchor" href="#customFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The custom font loaded from the `imgui_font` define (if any).
It is also assigned to `io.fontDefault`; use it with
`ImGui.pushFontFloat(customFont, size)` for per-window sizes.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="wheelScale"><div class="plugin-name">imgui</div><code><span class="field-name">wheelScale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#wheelScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Multiplier applied to ceramic wheel deltas before feeding ImGui.
The default (1/24) is calibrated for a comfortable trackpad feel with
ceramic's wheel units; raise it if a notched mouse wheel feels too slow.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="nativeScreen"><div class="plugin-name">imgui</div><code><span class="field-name">nativeScreen</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#nativeScreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When enabled (default), the ImGui UI is laid out at the screen's
NATIVE size (1 ImGui point = 1 screen point), independently of the
app's logical scaling (FIT, FILL...): the game keeps its own scaling
while the UI stays at a consistent, crisp size. This is the same
behavior as the `elements` plugin's Im UI. Set to `false` to lay out the UI in
the app's logical coordinates instead (the previous behavior, where
the UI is scaled together with the app content).

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="saveLayout"><div class="plugin-name">imgui</div><code><span class="field-name">saveLayout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#saveLayout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Write the current ImGui layout to persistent storage now.

Called automatically when ImGui reports the layout changed and when the
app terminates; call it explicitly to save at another moment (before a
scene switch, on window blur...). No-op when layout persistence is off.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clearLayout"><div class="plugin-name">imgui</div><code><span class="field-name">clearLayout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearLayout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Forget the persisted layout, so the next run starts from the app's
default arrangement again (see `imgui.ImGuiDockBuilder` to build one).

This does not rearrange the live windows: pair it with a rebuild of the
layout, or with a restart.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="screenToImGuiX"><div class="plugin-name">imgui</div><code><span class="field-name">screenToImGuiX</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#screenToImGuiX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert a position in ceramic's logical screen coordinates to ImGui
coordinates (native screen points when `nativeScreen` is enabled,
identical coordinates otherwise).

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="screenToImGuiY"><div class="plugin-name">imgui</div><code><span class="field-name">screenToImGuiY</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#screenToImGuiY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<div class="see"><strong>See:</strong> screenToImGuiX</div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="imGuiToScreenX"><div class="plugin-name">imgui</div><code><span class="field-name">imGuiToScreenX</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#imGuiToScreenX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert a position in ImGui coordinates back to ceramic's logical
screen coordinates.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="imGuiToScreenY"><div class="plugin-name">imgui</div><code><span class="field-name">imGuiToScreenY</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#imGuiToScreenY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<div class="see"><strong>See:</strong> imGuiToScreenX</div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

## Private Members

<div class="signature field-var has-description has-plugin" id="LAYOUT_KEY"><div class="plugin-name">imgui</div><code><span class="field-name">LAYOUT_KEY</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#LAYOUT_KEY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Key of the ini settings blob inside that storage.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="inited"><div class="plugin-name">imgui</div><code><span class="field-name">inited</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inited"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="frameStarted"><div class="plugin-name">imgui</div><code><span class="field-name">frameStarted</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#frameStarted"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="layoutData"><div class="plugin-name">imgui</div><code><span class="field-name">layoutData</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/PersistentData/" class="type-link">PersistentData</a></code><a class="header-anchor" href="#layoutData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="lastSavedLayout"><div class="plugin-name">imgui</div><code><span class="field-name">lastSavedLayout</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#lastSavedLayout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="textInputActive"><div class="plugin-name">imgui</div><code><span class="field-name">textInputActive</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#textInputActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="lastTextInputText"><div class="plugin-name">imgui</div><code><span class="field-name">lastTextInputText</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#lastTextInputText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="blockingDefaultScroll"><div class="plugin-name">imgui</div><code><span class="field-name">blockingDefaultScroll</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#blockingDefaultScroll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="loadScript"><div class="plugin-name">imgui</div><code><span class="field-name">loadScript</span><span class="parenthesis">(</span><span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadScript"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `src` | [String](/api-docs/clay-web/String/) |
| `done` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="imguiMouseButton"><div class="plugin-name">imgui</div><code><span class="field-name">imguiMouseButton</span><span class="parenthesis">(</span><span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#imguiMouseButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buttonId` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="start"><div class="plugin-name">imgui</div><code><span class="field-name">start</span><span class="parenthesis">(</span><span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#start"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `done` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="initImGui"><div class="plugin-name">imgui</div><code><span class="field-name">initImGui</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initImGui"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="loadFont"><div class="plugin-name">imgui</div><code><span class="field-name">loadFont</span><span class="parenthesis">(</span><span class="arg-name">fontId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fallbackId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Load `fontId` as the default ImGui font and, if `fallbackId` is provided,
merge its glyphs (e.g. CJK) into it. Both are binary asset names.

| Name | Type | Default |
|------|------|---------|
| `fontId` | [String](/api-docs/clay-web/String/) | |
| `fallbackId` | [String](/api-docs/clay-web/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="initLayoutPersistence"><div class="plugin-name">imgui</div><code><span class="field-name">initLayoutPersistence</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initLayoutPersistence"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Take over ImGui's ini settings and store them through ceramic.

Left alone, ImGui reads and writes `imgui.ini` in the process working
directory: inside the bundle for a packaged mac app (where a stale file
silently overrides every `FirstUseEver` position), and nowhere at all on
web. `PersistentData` goes through `app.backend.io`, so the layout lands
where the backend puts save data on every target, web included.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="earlyUpdate"><div class="plugin-name">imgui</div><code><span class="field-name">earlyUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#earlyUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="lateUpdate"><div class="plugin-name">imgui</div><code><span class="field-name">lateUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lateUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="bindInput"><div class="plugin-name">imgui</div><code><span class="field-name">bindInput</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="forwardKey"><div class="plugin-name">imgui</div><code><span class="field-name">forwardKey</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Key/" class="type-link">Key</a><span class="operator">,</span> <span class="arg-name">down</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#forwardKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Key](/api-docs/clay-web/ceramic/Key/) |
| `down` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateTextInputSession"><div class="plugin-name">imgui</div><code><span class="field-name">updateTextInputSession</span><span class="parenthesis">(</span><span class="arg-name">want</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateTextInputSession"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Characters flow through ceramic's text input sessions (IME-aware): we
open a session while ImGui wants text, and forward what gets typed by
diffing the session buffer (editing keys are handled by ImGui itself
through the key events).

| Name | Type |
|------|------|
| `want` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handleTextInputUpdate"><div class="plugin-name">imgui</div><code><span class="field-name">handleTextInputUpdate</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleTextInputUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">imgui</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

