---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImFontGlyph
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImFontGlyph/
---

# ImFontGlyph

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImFontGlyph</strong> (extern class)</div>

## Instance Members

<div class="signature field-var has-description" id="colored"><code><span class="field-name">colored</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#colored"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag to indicate glyph is colored and should generally ignore tinting (make it usable with no shift on little-endian as this is used in loops)

<hr class="field-separator" />

<div class="signature field-var has-description" id="visible"><code><span class="field-name">visible</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#visible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag to indicate glyph has no visible pixels (e.g. space). Allow early out when rendering.

<hr class="field-separator" />

<div class="signature field-var has-description" id="sourceIdx"><code><span class="field-name">sourceIdx</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#sourceIdx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Index of source in parent font

<hr class="field-separator" />

<div class="signature field-var has-description" id="codepoint"><code><span class="field-name">codepoint</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#codepoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

0x0000..0x10FFFF

<hr class="field-separator" />

<div class="signature field-var has-description" id="advanceX"><code><span class="field-name">advanceX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#advanceX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal distance to advance cursor/layout position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="x0"><code><span class="field-name">x0</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#x0"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Glyph corners. Offsets from current cursor/layout position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="y0"><code><span class="field-name">y0</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#y0"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Glyph corners. Offsets from current cursor/layout position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="x1"><code><span class="field-name">x1</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#x1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Glyph corners. Offsets from current cursor/layout position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="y1"><code><span class="field-name">y1</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#y1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Glyph corners. Offsets from current cursor/layout position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="u0"><code><span class="field-name">u0</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#u0"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Texture coordinates for the current value of ImFontAtlas->TexRef. Cached equivalent of calling GetCustomRect() with PackId.

<hr class="field-separator" />

<div class="signature field-var has-description" id="v0"><code><span class="field-name">v0</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#v0"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Texture coordinates for the current value of ImFontAtlas->TexRef. Cached equivalent of calling GetCustomRect() with PackId.

<hr class="field-separator" />

<div class="signature field-var has-description" id="u1"><code><span class="field-name">u1</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#u1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Texture coordinates for the current value of ImFontAtlas->TexRef. Cached equivalent of calling GetCustomRect() with PackId.

<hr class="field-separator" />

<div class="signature field-var has-description" id="v1"><code><span class="field-name">v1</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#v1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Texture coordinates for the current value of ImFontAtlas->TexRef. Cached equivalent of calling GetCustomRect() with PackId.

<hr class="field-separator" />

<div class="signature field-var has-description" id="packId"><code><span class="field-name">packId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#packId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

[Internal] ImFontAtlasRectId value (FIXME: Cold data, could be moved elsewhere?)

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

