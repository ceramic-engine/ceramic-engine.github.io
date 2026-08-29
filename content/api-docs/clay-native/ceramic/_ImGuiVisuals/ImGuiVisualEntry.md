---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui
title: ImGuiVisualEntry
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/_ImGuiVisuals/ImGuiVisualEntry/
---

# ImGuiVisualEntry

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/imgui/runtime/src/ceramic/ImGuiVisuals.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic._ImGuiVisuals.ImGuiVisualEntry</strong> (private class)</div>

One displayed visual: its filter (atlas tile or dedicated RT) + lifecycle state.

## Instance Members

<div class="signature field-var no-description has-plugin" id="visual"><div class="plugin-name">imgui</div><code><span class="field-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">ceramic.Visual</a></code><a class="header-anchor" href="#visual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="filter"><div class="plugin-name">imgui</div><code><span class="field-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Filter/" class="type-link">ceramic.Filter</a></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="lastUsedFrame"><div class="plugin-name">imgui</div><code><span class="field-name">lastUsedFrame</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lastUsedFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="width"><div class="plugin-name">imgui</div><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Filter area size (logical units): the offscreen texture area.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="height"><div class="plugin-name">imgui</div><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="displayWidth"><div class="plugin-name">imgui</div><code><span class="field-name">displayWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#displayWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Displayed image size in the ImGui layout (may differ from the
texture area in native resolution mode).

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="displayHeight"><div class="plugin-name">imgui</div><code><span class="field-name">displayHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#displayHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="dedicated"><div class="plugin-name">imgui</div><code><span class="field-name">dedicated</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dedicated"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

True when this entry uses its own render texture instead of the shared atlas.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="antialiasing"><div class="plugin-name">imgui</div><code><span class="field-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#antialiasing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Offscreen texture settings for this entry.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="nearest"><div class="plugin-name">imgui</div><code><span class="field-name">nearest</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#nearest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hitProxy"><div class="plugin-name">imgui</div><code><span class="field-name">hitProxy</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Quad/" class="type-link">ceramic.Quad</a></code><a class="header-anchor" href="#hitProxy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Invisible quad aligned with the ImGui item rect, used as the filter's
`hitVisual` so ceramic pointer events reach the content.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="windowFocused"><div class="plugin-name">imgui</div><code><span class="field-name">windowFocused</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#windowFocused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the ImGui window displaying this visual is focused (last submit).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hovered"><div class="plugin-name">imgui</div><code><span class="field-name">hovered</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hovered"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the displayed image is hovered (last submit).

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="ensureFilter"><div class="plugin-name">imgui</div><code><span class="field-name">ensureFilter</span><span class="parenthesis">(</span><span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">h</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">nearest</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensureFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create the filter if needed and keep its size/settings in sync.

| Name | Type |
|------|------|
| `w` | [Int](/api-docs/clay-native/Int/) |
| `h` | [Int](/api-docs/clay-native/Int/) |
| `antialiasing` | [Int](/api-docs/clay-native/Int/) |
| `nearest` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="attach"><div class="plugin-name">imgui</div><code><span class="field-name">attach</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#attach"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reparent the visual into the filter content (elements semantics).

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layoutContent"><div class="plugin-name">imgui</div><code><span class="field-name">layoutContent</span><span class="parenthesis">(</span><span class="arg-name">nativeResolution</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layoutContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Center the visual in the filter area (scaled to fit, or 1:1 in native resolution mode).

| Name | Type |
|------|------|
| `nativeResolution` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="detach"><div class="plugin-name">imgui</div><code><span class="field-name">detach</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#detach"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pause: detach the visual and stop rendering (entry kept during grace period).

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="dispose"><div class="plugin-name">imgui</div><code><span class="field-name">dispose</span><span class="parenthesis">(</span><span class="arg-name">detachVisual</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroy the filter (releases the atlas tile). `detachVisual` false when the visual itself is being destroyed.

| Name | Type |
|------|------|
| `detachVisual` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">imgui</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">ceramic.Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `visual` | [ceramic.Visual](/api-docs/clay-native/ceramic/Visual/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="attached"><div class="plugin-name">imgui</div><code><span class="field-name">attached</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#attached"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:allow` | ceramic.ImGuiVisuals |

