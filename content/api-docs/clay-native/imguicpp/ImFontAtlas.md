---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImFontAtlas
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImFontAtlas/
---

# ImFontAtlas

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImFontAtlas</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="addFont"><code><span class="field-name">addFont</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">fontCfg</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#addFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `fontCfg` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addFontDefault"><code><span class="field-name">addFontDefault</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fontCfg</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#addFontDefault"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Selects between AddFontDefaultVector() and AddFontDefaultBitmap().

| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `fontCfg` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | `null` |

| Returns |
|---------|
| [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addFontDefaultVector"><code><span class="field-name">addFontDefaultVector</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fontCfg</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#addFontDefaultVector"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Embedded scalable font. Recommended at any higher size.

| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `fontCfg` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | `null` |

| Returns |
|---------|
| [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addFontDefaultBitmap"><code><span class="field-name">addFontDefaultBitmap</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fontCfg</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#addFontDefaultBitmap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Embedded classic pixel-clean font. Recommended at Size 13px with no scaling.

| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `fontCfg` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | `null` |

| Returns |
|---------|
| [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addFontFromFileTTF"><code><span class="field-name">addFontFromFileTTF</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">filename</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sizePixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fontCfg</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">glyphRanges</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#addFontFromFileTTF"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `filename` | [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) | |
| `sizePixels` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `fontCfg` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | `null` |
| `glyphRanges` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | `null` |

| Returns |
|---------|
| [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addFontFromMemoryTTF"><code><span class="field-name">addFontFromMemoryTTF</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">fontData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">fontDataSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sizePixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fontCfg</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">glyphRanges</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#addFontFromMemoryTTF"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Note: Transfer ownership of 'ttf_data' to ImFontAtlas! Will be deleted after destruction of the atlas. Set font_cfg->FontDataOwnedByAtlas=false to keep ownership of your data and it won't be freed.

| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `fontData` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Void](/api-docs/clay-native/cpp/Void/)> | |
| `fontDataSize` | [Int](/api-docs/clay-native/Int/) | |
| `sizePixels` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `fontCfg` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | `null` |
| `glyphRanges` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | `null` |

| Returns |
|---------|
| [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addFontFromMemoryCompressedTTF"><code><span class="field-name">addFontFromMemoryCompressedTTF</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">compressedFontData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">compressedFontDataSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sizePixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fontCfg</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">glyphRanges</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#addFontFromMemoryCompressedTTF"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

'compressed_font_data' still owned by caller. Compress with binary_to_compressed_c.cpp.

| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `compressedFontData` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Void](/api-docs/clay-native/cpp/Void/)> | |
| `compressedFontDataSize` | [Int](/api-docs/clay-native/Int/) | |
| `sizePixels` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `fontCfg` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | `null` |
| `glyphRanges` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | `null` |

| Returns |
|---------|
| [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addFontFromMemoryCompressedBase85TTF"><code><span class="field-name">addFontFromMemoryCompressedBase85TTF</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">compressedFontDataBase85</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sizePixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fontCfg</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">glyphRanges</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#addFontFromMemoryCompressedBase85TTF"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

'compressed_font_data_base85' still owned by caller. Compress with binary_to_compressed_c.cpp with -base85 parameter.

| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `compressedFontDataBase85` | [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) | |
| `sizePixels` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `fontCfg` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | `null` |
| `glyphRanges` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | `null` |

| Returns |
|---------|
| [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeFont"><code><span class="field-name">removeFont</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">font</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `font` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clear everything (fonts + textures). Don't call mid-frame!

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearFonts"><code><span class="field-name">clearFonts</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearFonts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clear input+output font data/glyphs. You can call this mid-frame if you load new fonts afterwards!

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="compactCache"><code><span class="field-name">compactCache</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#compactCache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compact cached glyphs and texture.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setFontLoader"><code><span class="field-name">setFontLoader</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">fontLoader</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFontLoader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Change font loader at runtime.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `fontLoader` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearInputData"><code><span class="field-name">clearInputData</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearInputData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

[OBSOLETE] Clear input data (all ImFontConfig structures including sizes, TTF data, glyph ranges, etc.) = all the data used to build the texture and fonts.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearTexData"><code><span class="field-name">clearTexData</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearTexData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

[OBSOLETE] Clear CPU-side copy of the texture data. Saves RAM once the texture has been copied to graphics memory.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getGlyphRangesDefault"><code><span class="field-name">getGlyphRangesDefault</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#getGlyphRangesDefault"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Basic Latin, Extended Latin

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addCustomRect"><code><span class="field-name">addCustomRect</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">outR</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#addCustomRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Register a rectangle. Return -1 (ImFontAtlasRectId_Invalid) on error.

| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `width` | [Int](/api-docs/clay-native/Int/) | |
| `height` | [Int](/api-docs/clay-native/Int/) | |
| `outR` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | `null` |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeCustomRect"><code><span class="field-name">removeCustomRect</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeCustomRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unregister a rectangle. Existing pixels will stay in texture until resized / garbage collected.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `id` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getCustomRect"><code><span class="field-name">getCustomRect</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">outR</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getCustomRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get rectangle coordinates for current texture. Valid immediately, never store this (read above)!

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `id` | [Int](/api-docs/clay-native/Int/) |
| `outR` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

## Instance Members

<div class="signature field-var has-description" id="flags"><code><span class="field-name">flags</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#flags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Build flags (see ImFontAtlasFlags_)

<hr class="field-separator" />

<div class="signature field-var has-description" id="texDesiredFormat"><code><span class="field-name">texDesiredFormat</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImTextureFormat/" class="type-link">ImTextureFormat</a></code><a class="header-anchor" href="#texDesiredFormat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Desired texture format (default to ImTextureFormat_RGBA32 but may be changed to ImTextureFormat_Alpha8).

<hr class="field-separator" />

<div class="signature field-var has-description" id="texGlyphPadding"><code><span class="field-name">texGlyphPadding</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#texGlyphPadding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

FIXME: Should be called "TexPackPadding". Padding between glyphs within texture in pixels. Defaults to 1. If your rendering method doesn't rely on bilinear filtering you may set this to 0 (will also need to set AntiAliasedLinesUseTex = false).

<hr class="field-separator" />

<div class="signature field-var has-description" id="texMinWidth"><code><span class="field-name">texMinWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#texMinWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Minimum desired texture width. Must be a power of two. Default to 512.

<hr class="field-separator" />

<div class="signature field-var has-description" id="texMinHeight"><code><span class="field-name">texMinHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#texMinHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Minimum desired texture height. Must be a power of two. Default to 128.

<hr class="field-separator" />

<div class="signature field-var has-description" id="texMaxWidth"><code><span class="field-name">texMaxWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#texMaxWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum desired texture width. Must be a power of two. Default to 8192.

<hr class="field-separator" />

<div class="signature field-var has-description" id="texMaxHeight"><code><span class="field-name">texMaxHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#texMaxHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum desired texture height. Must be a power of two. Default to 8192.

<hr class="field-separator" />

<div class="signature field-var has-description" id="userData"><code><span class="field-name">userData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#userData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Store your own atlas related user-data (if e.g. you have multiple font atlas).

<hr class="field-separator" />

<div class="signature field-var has-description" id="texRef"><code><span class="field-name">texRef</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImTextureRef/" class="type-link">ImTextureRef</a></code><a class="header-anchor" href="#texRef"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Latest texture identifier == TexData->GetTexRef().

<hr class="field-separator" />

<div class="signature field-var has-description" id="texData"><code><span class="field-name">texData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#texData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Latest texture.

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

