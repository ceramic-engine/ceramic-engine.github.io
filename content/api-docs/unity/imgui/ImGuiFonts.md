---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiFonts
target: Unity
permalink: api-docs/unity/imgui/ImGuiFonts/
---

# ImGuiFonts

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imgui/ImGuiFonts.hx">View source</a></div>

<div class="type-hierarchy"><strong>imgui.ImGuiFonts</strong> (Class)</div>

Cross-target font loading helpers (hand-written, never regenerated).

With Dear ImGui 1.92 dynamic fonts (RendererHasTextures backends), fonts
can be added at any time and are rasterized on demand at any size, so
`sizePixels` is usually left at 0 (the size then follows
`style.fontSizeBase` and `pushFontFloat`).

```haxe
var font = ImGuiFonts.addFontFromBytes(myTtfBytes);
ImGui.getIO().fontDefault = font;            // global default font
// or per window / per widget:
ImGui.pushFontFloat(font, 18);
...
ImGui.popFont();
```

## Static Members

<div class="signature field-var has-description" id="DEFAULT_REFERENCE_SIZE"><code><span class="field-name">DEFAULT_REFERENCE_SIZE</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#DEFAULT_REFERENCE_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference size used when a glyph offset is requested without one.
Matches ImGui's own default font size.

<hr class="field-separator" />

<div class="signature field-method has-description" id="addFontFromBytes"><code><span class="field-name">addFontFromBytes</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sizePixels</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">merge</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/imgui/ImGuiFontPtr/" class="type-link">ImGuiFontPtr</a></code><a class="header-anchor" href="#addFontFromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add a TTF/OTF font to the atlas from haxe.io.Bytes. Returns the ImFont
handle (target-typed). `sizePixels` = 0 uses the dynamic default size.

With `merge` = true, the font is MERGED into the previously added font
instead of creating a new one: use this to add fallback glyphs (e.g.
Japanese/CJK coverage, icons) to a base font. Order matters: add the
merge font right after its base font.

The TTF data is copied to native memory allocated with ImGui's OWN
allocator and handed over to the atlas (fontDataOwnedByAtlas=true):
since 1.92 the data must stay alive for the whole life of the atlas,
and ImGui releases it with `IM_FREE` when the atlas source goes away
(so with the context). Keeping ownership on our side instead would
leak one copy of every font per context - which an editor that reloads
the app in-process (Unity's play mode) turns into a leak per run.

| Name | Type | Default |
|------|------|---------|
| `bytes` | [haxe.io.Bytes](/api-docs/unity/haxe/io/Bytes/) | |
| `sizePixels` | [Float](/api-docs/unity/Float/) | `0.0` |
| `merge` | [Bool](/api-docs/unity/Bool/) | `false` |

| Returns |
|---------|
| [ImGuiFontPtr](/api-docs/unity/imgui/ImGuiFontPtr/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addFontFromBytesRanged"><code><span class="field-name">addFontFromBytesRanged</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sizePixels</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">merge</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ranges</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/imgui/ImGuiFontPtr/" class="type-link">ImGuiFontPtr</a></code><a class="header-anchor" href="#addFontFromBytesRanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add a font, restricted to a range of codepoints and optionally nudged
vertically. This is what an ICON font needs: icon sets live in the
private use area, and merging one into the text font usually requires a
small vertical offset so the glyphs sit on the text baseline.

```haxe
// Text font first, then the icons merged into it
ImGuiFonts.addFontFromBytes(textBytes);
ImGuiFonts.addFontFromBytesRanged(iconBytes, 0, true, [0xE000, 0xF8FF], 3);
```

Kept to five parameters on purpose: hxcpp only generates reflection
wrappers for static functions up to six arguments.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `bytes` | [haxe.io.Bytes](/api-docs/unity/haxe/io/Bytes/) | | the TTF data  |
| `sizePixels` | [Float](/api-docs/unity/Float/) | `0.0` | 0 to follow `style.fontSizeBase`. Must be non zero when `offsetY` is used: ImGui scales the offset relative to it, and asserts otherwise. A reference size is substituted automatically if you forget.  |
| `merge` | [Bool](/api-docs/unity/Bool/) | `false` | merge into the previously added font  |
| `ranges` | [Array](/api-docs/unity/Array/)<[Int](/api-docs/unity/Int/)> | *(optional)* | pairs of inclusive codepoint bounds, e.g. `[0xE000, 0xF8FF]`  |
| `offsetY` | [Float](/api-docs/unity/Float/) | `0` | vertical nudge, expressed at `sizePixels`, scaled with the font when it is rendered at another size |

| Returns |
|---------|
| [ImGuiFontPtr](/api-docs/unity/imgui/ImGuiFontPtr/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addDefaultFont"><code><span class="field-name">addDefaultFont</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/imgui/ImGuiFontPtr/" class="type-link">ImGuiFontPtr</a></code><a class="header-anchor" href="#addDefaultFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add ImGui's built-in default font (ProggyClean) to the atlas and
return its handle. Useful to keep the pixel font around after
switching `io.fontDefault` to a custom TTF.
| Returns |
|---------|
| [ImGuiFontPtr](/api-docs/unity/imgui/ImGuiFontPtr/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

