---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiStyleExtra
target: Clay (Web)
permalink: api-docs/clay-web/imgui/ImGuiStyleExtra/
---

# ImGuiStyleExtra

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imgui/ImGuiStyleExtra.hx">View source</a></div>

<div class="type-hierarchy"><strong>imgui.ImGuiStyleExtra</strong> (Class)</div>

Portable access to the parts of `ImGuiStyle` the generator cannot bind: the
`Colors[]` C array, and the next-frame font size. Backed by the hand-written
dcimgui_extra_glue.cpp helpers, compiled into every target.

## Static Members

<div class="signature field-method no-description" id="getStyleColor"><code><span class="field-name">getStyleColor</span><span class="parenthesis">(</span><span class="arg-name">style</span><span class="operator">:</span> <a href="/api-docs/clay-web/imgui/ImGuiStyle/" class="type-link">ImGuiStyle</a><span class="operator">,</span> <span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/clay-web/imgui/ImGuiCol/" class="type-link">ImGuiCol</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/imgui/ImVec4/" class="type-link">ImVec4</a></code><a class="header-anchor" href="#getStyleColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `style` | [ImGuiStyle](/api-docs/clay-web/imgui/ImGuiStyle/) |
| `idx` | [ImGuiCol](/api-docs/clay-web/imgui/ImGuiCol/) |

| Returns |
|---------|
| [ImVec4](/api-docs/clay-web/imgui/ImVec4/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setNextFrameFontSizeBase"><code><span class="field-name">setNextFrameFontSizeBase</span><span class="parenthesis">(</span><span class="arg-name">style</span><span class="operator">:</span> <a href="/api-docs/clay-web/imgui/ImGuiStyle/" class="type-link">ImGuiStyle</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextFrameFontSizeBase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the base font size, taking effect at the next frame.

Assigning `style.fontSizeBase` from inside a frame does nothing: ImGui
restores that field from the frame's own value as it builds it, so the
one place a size slider can run is the one place the assignment is lost.
This goes through the separate field ImGui keeps for the purpose (the one
its own style editor uses).

A size of 0 means "leave it alone" to ImGui, so it is ignored here.

| Name | Type |
|------|------|
| `style` | [ImGuiStyle](/api-docs/clay-web/imgui/ImGuiStyle/) |
| `size` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setStyleColor"><code><span class="field-name">setStyleColor</span><span class="parenthesis">(</span><span class="arg-name">style</span><span class="operator">:</span> <a href="/api-docs/clay-web/imgui/ImGuiStyle/" class="type-link">ImGuiStyle</a><span class="operator">,</span> <span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/clay-web/imgui/ImGuiCol/" class="type-link">ImGuiCol</a><span class="operator">,</span> <span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-web/imgui/ImVec4/" class="type-link">ImVec4</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setStyleColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `style` | [ImGuiStyle](/api-docs/clay-web/imgui/ImGuiStyle/) |
| `idx` | [ImGuiCol](/api-docs/clay-web/imgui/ImGuiCol/) |
| `color` | [ImVec4](/api-docs/clay-web/imgui/ImVec4/) |

