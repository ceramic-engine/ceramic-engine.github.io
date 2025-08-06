---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: BitmapFontDataPage
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/BitmapFontDataPage/
---

# BitmapFontDataPage

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/BitmapFontData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.BitmapFontDataPage</strong> (Class)</div>

Information about a single texture page in a multi-page bitmap font.

Large bitmap fonts may require multiple texture pages to accommodate
all characters. Each page is a separate texture file containing a
subset of the font's glyphs. Characters reference their page by ID.

<div class="see"><strong>See:</strong> BitmapFontData.pages Where page data is stored, BitmapFontCharacter.page References page by ID</div>


## Instance Members

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique identifier of this texture page.
Referenced by characters to indicate which texture contains their glyph.
Typically starts at 0 and increments for each additional page.

<hr class="field-separator" />

<div class="signature field-var has-description" id="file"><code><span class="field-name">file</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#file"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Path to the texture file containing the glyphs.
Can be relative (resolved using BitmapFontData.path) or absolute.
Common formats: PNG, TGA, or other image formats supported by the engine.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">file</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `id` | [Int](/api-docs/clay-web/Int/) | * Unique identifier of this texture page. Referenced by characters to indicate which texture contains their glyph. Typically starts at 0 and increments for each additional page. |
| `file` | [String](/api-docs/clay-web/String/) | * Path to the texture file containing the glyphs. Can be relative (resolved using BitmapFontData.path) or absolute. Common formats: PNG, TGA, or other image formats supported by the engine. |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

