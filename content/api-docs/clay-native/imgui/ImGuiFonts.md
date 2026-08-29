---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiFonts
target: Clay (Native)
permalink: api-docs/clay-native/imgui/ImGuiFonts/
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

<div class="signature field-method has-description" id="addFontFromBytes"><code><span class="field-name">addFontFromBytes</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sizePixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">merge</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/imgui/ImGuiFontPtr/" class="type-link">ImGuiFontPtr</a></code><a class="header-anchor" href="#addFontFromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add a TTF/OTF font to the atlas from haxe.io.Bytes. Returns the ImFont
handle (target-typed). `sizePixels` = 0 uses the dynamic default size.

With `merge` = true, the font is MERGED into the previously added font
instead of creating a new one: use this to add fallback glyphs (e.g.
Japanese/CJK coverage, icons) to a base font. Order matters: add the
merge font right after its base font.

The TTF data is copied to native memory that stays alive for the whole
app lifetime (the atlas does NOT own it, fontDataOwnedByAtlas=false,
to avoid any cross-target allocator mismatch; native malloc memory is
not garbage collected so no retention is needed).

| Name | Type | Default |
|------|------|---------|
| `bytes` | [haxe.io.Bytes](/api-docs/clay-native/haxe/io/Bytes/) | |
| `sizePixels` | [Float](/api-docs/clay-native/Float/) | `0.0` |
| `merge` | [Bool](/api-docs/clay-native/Bool/) | `false` |

| Returns |
|---------|
| [ImGuiFontPtr](/api-docs/clay-native/imgui/ImGuiFontPtr/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addDefaultFont"><code><span class="field-name">addDefaultFont</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/imgui/ImGuiFontPtr/" class="type-link">ImGuiFontPtr</a></code><a class="header-anchor" href="#addDefaultFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add ImGui's built-in default font (ProggyClean) to the atlas and
return its handle. Useful to keep the pixel font around after
switching `io.fontDefault` to a custom TTF.
| Returns |
|---------|
| [ImGuiFontPtr](/api-docs/clay-native/imgui/ImGuiFontPtr/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:cppInclude` | "linc_imgui.h" |

