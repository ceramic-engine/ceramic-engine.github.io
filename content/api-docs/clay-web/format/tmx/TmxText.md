---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: TmxText
target: Clay (Web)
permalink: api-docs/clay-web/format/tmx/TmxText/
---

# TmxText

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Data.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.TmxText</strong> (Class)</div>

Used to mark an object as a text object. Contains the actual text as character data.

## Instance Members

<div class="signature field-var has-description" id="fontFamily"><code><span class="field-name">fontFamily</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#fontFamily"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The font family used (default: “sans-serif”)

<hr class="field-separator" />

<div class="signature field-var has-description" id="pixelSize"><code><span class="field-name">pixelSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pixelSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The size of the font in pixels (not using points, because other sizes in the TMX format are also using pixels) (default: 16)

<hr class="field-separator" />

<div class="signature field-var has-description" id="wrap"><code><span class="field-name">wrap</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#wrap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether word wrapping is enabled (1) or disabled (0). Defaults to 0.

<hr class="field-separator" />

<div class="signature field-var has-description" id="color"><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Color of the text in #AARRGGBB or #RRGGBB format (default: #000000)

<hr class="field-separator" />

<div class="signature field-var has-description" id="bold"><code><span class="field-name">bold</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the font is bold (1) or not (0). Defaults to 0.

<hr class="field-separator" />

<div class="signature field-var has-description" id="italic"><code><span class="field-name">italic</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#italic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the font is italic (1) or not (0). Defaults to 0.

<hr class="field-separator" />

<div class="signature field-var has-description" id="underline"><code><span class="field-name">underline</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#underline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether a line should be drawn below the text (1) or not (0). Defaults to 0.

<hr class="field-separator" />

<div class="signature field-var has-description" id="strikeout"><code><span class="field-name">strikeout</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#strikeout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether a line should be drawn through the text (1) or not (0). Defaults to 0.

<hr class="field-separator" />

<div class="signature field-var has-description" id="kerning"><code><span class="field-name">kerning</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#kerning"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether kerning should be used while rendering the text (1) or not (0). Default to 1.

<hr class="field-separator" />

<div class="signature field-var has-description" id="halign"><code><span class="field-name">halign</span><span class="operator">:</span> <a href="/api-docs/clay-web/format/tmx/TmxHAlign/" class="type-link">TmxHAlign</a></code><a class="header-anchor" href="#halign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal alignment of the text within the object (left (default), center, right or justify (since Tiled 1.2.1))

<hr class="field-separator" />

<div class="signature field-var has-description" id="valign"><code><span class="field-name">valign</span><span class="operator">:</span> <a href="/api-docs/clay-web/format/tmx/TmxVAlign/" class="type-link">TmxVAlign</a></code><a class="header-anchor" href="#valign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical alignment of the text within the object (top (default), center or bottom)

<hr class="field-separator" />

<div class="signature field-var has-description" id="text"><code><span class="field-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#text"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Actual text of object

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">fontFamily</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pixelSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">wrap</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bold</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">italic</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">underline</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">strikeout</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">kerning</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">halign</span><span class="operator">:</span> <a href="/api-docs/clay-web/format/tmx/TmxHAlign/" class="type-link">TmxHAlign</a><span class="operator">,</span> <span class="arg-name">valign</span><span class="operator">:</span> <a href="/api-docs/clay-web/format/tmx/TmxVAlign/" class="type-link">TmxVAlign</a><span class="operator">,</span> <span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `fontFamily` | [String](/api-docs/clay-web/String/) | The font family used (default: “sans-serif”) |
| `pixelSize` | [Int](/api-docs/clay-web/Int/) | The size of the font in pixels (not using points, because other sizes in the TMX format are also using pixels) (default: 16) |
| `wrap` | [Bool](/api-docs/clay-web/Bool/) | Whether word wrapping is enabled (1) or disabled (0). Defaults to 0. |
| `color` | [Int](/api-docs/clay-web/Int/) | Color of the text in #AARRGGBB or #RRGGBB format (default: #000000) |
| `bold` | [Bool](/api-docs/clay-web/Bool/) | Whether the font is bold (1) or not (0). Defaults to 0. |
| `italic` | [Bool](/api-docs/clay-web/Bool/) | Whether the font is italic (1) or not (0). Defaults to 0. |
| `underline` | [Bool](/api-docs/clay-web/Bool/) | Whether a line should be drawn below the text (1) or not (0). Defaults to 0. |
| `strikeout` | [Bool](/api-docs/clay-web/Bool/) | Whether a line should be drawn through the text (1) or not (0). Defaults to 0. |
| `kerning` | [Bool](/api-docs/clay-web/Bool/) | Whether kerning should be used while rendering the text (1) or not (0). Default to 1. |
| `halign` | [TmxHAlign](/api-docs/clay-web/format/tmx/TmxHAlign/) | Horizontal alignment of the text within the object (left (default), center, right or justify (since Tiled 1.2.1)) |
| `valign` | [TmxVAlign](/api-docs/clay-web/format/tmx/TmxVAlign/) | Vertical alignment of the text within the object (top (default), center or bottom) |
| `text` | [String](/api-docs/clay-web/String/) | Actual text of object |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

