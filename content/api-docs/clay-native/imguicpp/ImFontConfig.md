---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImFontConfig
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImFontConfig/
---

# ImFontConfig

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImFontConfig</strong> (extern class)</div>

## Instance Members

<div class="signature field-var has-description" id="fontData"><code><span class="field-name">fontData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fontData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

// TTF/OTF data

<hr class="field-separator" />

<div class="signature field-var has-description" id="fontDataSize"><code><span class="field-name">fontDataSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#fontDataSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

// TTF/OTF data size

<hr class="field-separator" />

<div class="signature field-var has-description" id="fontDataOwnedByAtlas"><code><span class="field-name">fontDataOwnedByAtlas</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#fontDataOwnedByAtlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

true     // TTF/OTF data ownership taken by the owner ImFontAtlas (will delete memory itself). SINCE 1.92, THE DATA NEEDS TO PERSIST FOR WHOLE DURATION OF ATLAS.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mergeMode"><code><span class="field-name">mergeMode</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mergeMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

false    // Merge into previous ImFont, so you can combine multiple inputs font into one ImFont (e.g. ASCII font + icons + Japanese glyphs). You may want to use GlyphOffset.y when merge font of different heights.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pixelSnapH"><code><span class="field-name">pixelSnapH</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pixelSnapH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

false    // Align every glyph AdvanceX to pixel boundaries. Prevents fractional font size from working correctly! Useful e.g. if you are merging a non-pixel aligned font with the default font. If enabled, OversampleH/V will default to 1.

<hr class="field-separator" />

<div class="signature field-var has-description" id="oversampleH"><code><span class="field-name">oversampleH</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int8/" class="type-link">cpp.Int8</a></code><a class="header-anchor" href="#oversampleH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

0 (2)    // Rasterize at higher quality for sub-pixel positioning. 0 == auto == 1 or 2 depending on size. Note the difference between 2 and 3 is minimal. You can reduce this to 1 for large glyphs save memory. Read https://github.com/nothings/stb/blob/master/tests/oversample/README.md for details.

<hr class="field-separator" />

<div class="signature field-var has-description" id="oversampleV"><code><span class="field-name">oversampleV</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int8/" class="type-link">cpp.Int8</a></code><a class="header-anchor" href="#oversampleV"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

0 (1)    // Rasterize at higher quality for sub-pixel positioning. 0 == auto == 1. This is not really useful as we don't use sub-pixel positions on the Y axis.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ellipsisChar"><code><span class="field-name">ellipsisChar</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a></code><a class="header-anchor" href="#ellipsisChar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

0        // Explicitly specify Unicode codepoint of ellipsis character. When fonts are being merged first specified ellipsis will be used.

<hr class="field-separator" />

<div class="signature field-var has-description" id="sizePixels"><code><span class="field-name">sizePixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#sizePixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

// Output size in pixels for rasterizer (more or less maps to the resulting font height).

<hr class="field-separator" />

<div class="signature field-var has-description" id="glyphRanges"><code><span class="field-name">glyphRanges</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#glyphRanges"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

NULL     // *LEGACY* THE ARRAY DATA NEEDS TO PERSIST AS LONG AS THE FONT IS ALIVE. Pointer to a user-provided list of Unicode range (2 value per range, values are inclusive, zero-terminated list).

<hr class="field-separator" />

<div class="signature field-var has-description" id="glyphExcludeRanges"><code><span class="field-name">glyphExcludeRanges</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#glyphExcludeRanges"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

NULL     // Pointer to a small user-provided list of Unicode ranges (2 value per range, values are inclusive, zero-terminated list). This is very close to GlyphRanges[] but designed to exclude ranges from a font source, when merging fonts with overlapping glyphs. Use "Input Glyphs Overlap Detection Tool" to find about your overlapping ranges.

<hr class="field-separator" />

<div class="signature field-var has-description" id="glyphOffset"><code><span class="field-name">glyphOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#glyphOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

0, 0     // Offset (in pixels) all glyphs from this font input. Absolute value for default size, other sizes will scale this value.

<hr class="field-separator" />

<div class="signature field-var has-description" id="glyphMinAdvanceX"><code><span class="field-name">glyphMinAdvanceX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#glyphMinAdvanceX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

0        // Minimum AdvanceX for glyphs, set Min to align font icons, set both Min/Max to enforce mono-space font. Absolute value for default size, other sizes will scale this value.

<hr class="field-separator" />

<div class="signature field-var has-description" id="glyphMaxAdvanceX"><code><span class="field-name">glyphMaxAdvanceX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#glyphMaxAdvanceX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

FLT_MAX  // Maximum AdvanceX for glyphs

<hr class="field-separator" />

<div class="signature field-var has-description" id="glyphExtraAdvanceX"><code><span class="field-name">glyphExtraAdvanceX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#glyphExtraAdvanceX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

0        // Extra spacing (in pixels) between glyphs. Please contact us if you are using this. // FIXME-NEWATLAS: Intentionally unscaled

<hr class="field-separator" />

<div class="signature field-var has-description" id="fontNo"><code><span class="field-name">fontNo</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#fontNo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

0        // Index of font within TTF/OTF file

<hr class="field-separator" />

<div class="signature field-var has-description" id="fontLoaderFlags"><code><span class="field-name">fontLoaderFlags</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#fontLoaderFlags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

0        // Settings for custom font builder. THIS IS BUILDER IMPLEMENTATION DEPENDENT. Leave as zero if unsure.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rasterizerMultiply"><code><span class="field-name">rasterizerMultiply</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#rasterizerMultiply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

1.0f     // Linearly brighten (>1.0f) or darken (<1.0f) font output. Brightening small fonts may be a good workaround to make them more readable. This is a silly thing we may remove in the future.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rasterizerDensity"><code><span class="field-name">rasterizerDensity</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#rasterizerDensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

1.0f     // [LEGACY: this only makes sense when ImGuiBackendFlags_RendererHasTextures is not supported] DPI scale multiplier for rasterization. Not altering other font metrics: makes it easy to swap between e.g. a 100% and a 400% fonts for a zooming display, or handle Retina screen. IMPORTANT: If you change this it is expected that you increase/decrease font scale roughly to the inverse of this, otherwise quality may look lowered.

<hr class="field-separator" />

<div class="signature field-var has-description" id="extraSizeScale"><code><span class="field-name">extraSizeScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#extraSizeScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

1.0f     // Extra rasterizer scale over SizePixels.

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

