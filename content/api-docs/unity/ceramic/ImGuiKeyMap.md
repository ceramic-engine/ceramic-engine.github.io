---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui
title: ImGuiKeyMap
target: Unity
permalink: api-docs/unity/ceramic/ImGuiKeyMap/
---

# ImGuiKeyMap

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/imgui/runtime/src/ceramic/ImGuiKeyMap.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ImGuiKeyMap</strong> (Class)</div>

Maps ceramic scan codes (physical keys, SDL scancode values) to `ImGuiKey`
values (which are physical-key based since Dear ImGui 1.87).

## Static Members

<div class="signature field-method no-description has-plugin" id="fromScanCode"><div class="plugin-name">imgui</div><code><span class="field-name">fromScanCode</span><span class="parenthesis">(</span><span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ScanCode/" class="type-link">ScanCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/imgui/ImGuiKey/" class="type-link">imgui.ImGuiKey</a></code><a class="header-anchor" href="#fromScanCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scanCode` | [ScanCode](/api-docs/unity/ceramic/ScanCode/) |

| Returns |
|---------|
| [imgui.ImGuiKey](/api-docs/unity/imgui/ImGuiKey/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="modFromScanCode"><div class="plugin-name">imgui</div><code><span class="field-name">modFromScanCode</span><span class="parenthesis">(</span><span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ScanCode/" class="type-link">ScanCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/imgui/ImGuiKey/" class="type-link">imgui.ImGuiKey</a></code><a class="header-anchor" href="#modFromScanCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The modifier ImGuiKey (ImGuiMod_*) affected by a scan code, or None.

| Name | Type |
|------|------|
| `scanCode` | [ScanCode](/api-docs/unity/ceramic/ScanCode/) |

| Returns |
|---------|
| [imgui.ImGuiKey](/api-docs/unity/imgui/ImGuiKey/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

