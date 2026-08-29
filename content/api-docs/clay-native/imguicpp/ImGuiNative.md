---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiNative
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImGuiNative/
---

# ImGuiNative

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGuiNative.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImGuiNative</strong> (extern class)</div>

Hand-written native helpers backed by linc_imgui.cpp - NOT generated.
Only for things a plain extern can't express (callbacks crossing the
C → Haxe boundary).

## Static Members

<div class="signature field-method has-description" id="setClipboardHandlers"><code><span class="field-name">setClipboardHandlers</span><span class="parenthesis">(</span><span class="arg-name">get</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">set</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setClipboardHandlers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Route ImGui's clipboard (ImGuiPlatformIO function pointers) through
Haxe functions. Call after `ImGui.createContext()`.

| Name | Type |
|------|------|
| `get` | Function |
| `set` | Function |

## Metadata

| Name | Parameters |
|------|------------|
| `:include` | "linc_imgui.h" |

