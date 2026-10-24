---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiClipboard
target: Unity
permalink: api-docs/unity/imgui/ImGuiClipboard/
---

# ImGuiClipboard

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imgui/ImGuiClipboard.hx">View source</a></div>

<div class="type-hierarchy"><strong>imgui.ImGuiClipboard</strong> (Class)</div>

Route ImGui's clipboard (SetClipboardText/GetClipboardText, and copy/paste
inside InputText widgets) through the host application.

ImGui's own defaults only reach the OS clipboard on targets where it has a
platform backend; on js/wasm its default is an internal buffer that never
touches the system clipboard. The host usually has a better channel (a game
engine's clipboard API, Electron's `clipboard` module...): install it here.

Per target:
- hxcpp: GC-rooted closures through linc (`ImGuiNative.setClipboardHandlers`);
- js/wasm: `Module.addFunction` trampolines over `dcx_SetClipboardHandlers`
(the getter's string lives in a persistent wasm-side buffer);
- C#/Unity: not wired (Unity's `GUIUtility.systemCopyBuffer` integration
would belong in a DCImGuiClipboard.cs companion; ImGui's internal
clipboard is used until then).

Must be called with a current ImGui context (after `createContext`).

## Static Members

<div class="signature field-method no-description" id="setHandlers"><code><span class="field-name">setHandlers</span><span class="parenthesis">(</span><span class="arg-name">get</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">set</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setHandlers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `get` | Function |
| `set` | Function |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

