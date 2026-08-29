---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImFontGlyphRangesBuilder
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImFontGlyphRangesBuilder/
---

# ImFontGlyphRangesBuilder

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImFontGlyphRangesBuilder</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBit"><code><span class="field-name">getBit</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/SizeT/" class="type-link">cpp.SizeT</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getBit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get bit n in the array

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `n` | [cpp.SizeT](/api-docs/clay-native/cpp/SizeT/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setBit"><code><span class="field-name">setBit</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/SizeT/" class="type-link">cpp.SizeT</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set bit n in the array

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `n` | [cpp.SizeT](/api-docs/clay-native/cpp/SizeT/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addChar"><code><span class="field-name">addChar</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addChar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add character

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `c` | [cpp.UInt16](/api-docs/clay-native/cpp/UInt16/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addText"><code><span class="field-name">addText</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">textEnd</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add string (each character of the UTF-8 string are added)

| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `text` | [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) | |
| `textEnd` | [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) | `null` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addRanges"><code><span class="field-name">addRanges</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">ranges</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addRanges"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add ranges, e.g. builder.AddRanges(ImFontAtlas::GetGlyphRangesDefault()) to force add all of ASCII/Latin+Ext

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `ranges` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="buildRanges"><code><span class="field-name">buildRanges</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">outRanges</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#buildRanges"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Output new ranges (ImVector_Construct()/ImVector_Destruct() can be used to safely construct out_ranges)

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `outRanges` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

## Instance Members

<div class="signature field-var has-description" id="usedChars"><code><span class="field-name">usedChars</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVector_ImU32/" class="type-link">ImVector_ImU32</a></code><a class="header-anchor" href="#usedChars"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Store 1-bit per Unicode code point (0=unused, 1=used)

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

