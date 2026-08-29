---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiThemes
target: Clay (Web)
permalink: api-docs/clay-web/imgui/ImGuiThemes/
---

# ImGuiThemes

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imgui/ImGuiThemes.hx">View source</a></div>

<div class="type-hierarchy"><strong>imgui.ImGuiThemes</strong> (Class)</div>

Ready-to-use ImGui themes (hand-written, never regenerated).

All of it goes through the portable facade (style fields +
ImGuiStyleExtra.setStyleColor), so it works identically on hxcpp,
js/wasm and C#/Unity.

## Static Members

<div class="signature field-method has-description" id="applyDarkBlue"><code><span class="field-name">applyDarkBlue</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">hue</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">saturation</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">saturationAccent</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">transparency</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.95</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">borderSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyDarkBlue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dark blue theme by Sixze (dear imgui issue #707), with adjustable hue,
saturation and transparency.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `hue` | [Float](/api-docs/clay-web/Float/) | `0.0` | Hue shift, [0,1] range (0 = original blue).  |
| `saturation` | [Float](/api-docs/clay-web/Float/) | `1.0` | Saturation scale for backgrounds/text, [0,6] range.  |
| `saturationAccent` | [Float](/api-docs/clay-web/Float/) | `1.0` | Saturation scale for accents, [0,6] range.  |
| `transparency` | [Float](/api-docs/clay-web/Float/) | `0.95` | Window/child/title background opacity, [0,1].  |
| `borderSize` | [Float](/api-docs/clay-web/Float/) | `0.0` | Frame/image/tab border size (0 = borderless look). |

## Private Members

<div class="signature field-method has-description" id="adjust"><code><span class="field-name">adjust</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-web/imgui/ImVec4/" class="type-link">ImVec4</a><span class="operator">,</span> <span class="arg-name">hueShift</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">saturationScale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/imgui/ImVec4/" class="type-link">ImVec4</a></code><a class="header-anchor" href="#adjust"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shift hue and scale saturation of a color (HSV round-trip).

| Name | Type |
|------|------|
| `color` | [ImVec4](/api-docs/clay-web/imgui/ImVec4/) |
| `hueShift` | [Float](/api-docs/clay-web/Float/) |
| `saturationScale` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [ImVec4](/api-docs/clay-web/imgui/ImVec4/) |

