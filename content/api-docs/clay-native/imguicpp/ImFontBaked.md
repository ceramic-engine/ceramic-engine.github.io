---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImFontBaked
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImFontBaked/
---

# ImFontBaked

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImFontBaked</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="clearOutputData"><code><span class="field-name">clearOutputData</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearOutputData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findGlyph"><code><span class="field-name">findGlyph</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#findGlyph"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return U+FFFD glyph if requested glyph doesn't exists.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `c` | [cpp.UInt16](/api-docs/clay-native/cpp/UInt16/) |

| Returns |
|---------|
| [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findGlyphNoFallback"><code><span class="field-name">findGlyphNoFallback</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#findGlyphNoFallback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return NULL if glyph doesn't exist

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `c` | [cpp.UInt16](/api-docs/clay-native/cpp/UInt16/) |

| Returns |
|---------|
| [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getCharAdvance"><code><span class="field-name">getCharAdvance</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#getCharAdvance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `c` | [cpp.UInt16](/api-docs/clay-native/cpp/UInt16/) |

| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isGlyphLoaded"><code><span class="field-name">isGlyphLoaded</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isGlyphLoaded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `c` | [cpp.UInt16](/api-docs/clay-native/cpp/UInt16/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

