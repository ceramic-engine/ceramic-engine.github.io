---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiListClipper
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImGuiListClipper/
---

# ImGuiListClipper

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImGuiListClipper</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="begin"><code><span class="field-name">begin</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">itemsCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">itemsHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">-1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#begin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `itemsCount` | [Int](/api-docs/clay-native/Int/) | |
| `itemsHeight` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `-1.0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="end"><code><span class="field-name">end</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#end"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Automatically called on the last call of Step() that returns false.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="step"><code><span class="field-name">step</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#step"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Call until it returns false. The DisplayStart/DisplayEnd fields will be set and you can process/draw those items.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="includeItemByIndex"><code><span class="field-name">includeItemByIndex</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#includeItemByIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `itemIndex` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="includeItemsByIndex"><code><span class="field-name">includeItemsByIndex</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">itemBegin</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">itemEnd</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#includeItemsByIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

item_end is exclusive e.g. use (42, 42+1) to make item 42 never clipped.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `itemBegin` | [Int](/api-docs/clay-native/Int/) |
| `itemEnd` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="seekCursorForItem"><code><span class="field-name">seekCursorForItem</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#seekCursorForItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `itemIndex` | [Int](/api-docs/clay-native/Int/) |

## Instance Members

<div class="signature field-var has-description" id="displayStart"><code><span class="field-name">displayStart</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#displayStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

First item to display, updated by each call to Step()

<hr class="field-separator" />

<div class="signature field-var has-description" id="displayEnd"><code><span class="field-name">displayEnd</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#displayEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

End of items to display (exclusive)

<hr class="field-separator" />

<div class="signature field-var has-description" id="userIndex"><code><span class="field-name">userIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#userIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Helper storage for user convenience/code. Optional, and otherwise unused if you don't use it.

<hr class="field-separator" />

<div class="signature field-var has-description" id="itemsCount"><code><span class="field-name">itemsCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#itemsCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

[Internal] Number of items

<hr class="field-separator" />

<div class="signature field-var has-description" id="itemsHeight"><code><span class="field-name">itemsHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#itemsHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

[Internal] Height of item after a first step and item submission can calculate it

<hr class="field-separator" />

<div class="signature field-var has-description" id="flags"><code><span class="field-name">flags</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#flags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

[Internal] Flags, currently not yet well exposed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="startPosY"><code><span class="field-name">startPosY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#startPosY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

[Internal] Cursor position at the time of Begin() or after table frozen rows are all processed

<hr class="field-separator" />

<div class="signature field-var has-description" id="startSeekOffsetY"><code><span class="field-name">startSeekOffsetY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#startSeekOffsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

[Internal] Account for frozen rows in a table and initial loss of precision in very large windows.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ctx"><code><span class="field-name">ctx</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#ctx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

[Internal] Parent UI context

<hr class="field-separator" />

<div class="signature field-var has-description" id="tempData"><code><span class="field-name">tempData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tempData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

[Internal] Internal data

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

