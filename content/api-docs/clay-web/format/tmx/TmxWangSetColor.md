---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: TmxWangSetColor
target: Clay (Web)
permalink: api-docs/clay-web/format/tmx/TmxWangSetColor/
---

# TmxWangSetColor

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Data.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.TmxWangSetColor</strong> (Class)</div>

A color that can be used to define the corner or an edge of a Wang tile.

## Instance Members

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of this color.

<hr class="field-separator" />

<div class="signature field-var has-description" id="color"><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color in #RRGGBB format (example: #c17d11).

<hr class="field-separator" />

<div class="signature field-var has-description" id="tile"><code><span class="field-name">tile</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The tile ID of the tile representing this color.

<hr class="field-separator" />

<div class="signature field-var has-description" id="probability"><code><span class="field-name">probability</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#probability"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The relative probability that this color is chosen over others in case of multiple options.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">tile</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">probability</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-web/String/) | The name of this color. |
| `color` | [Int](/api-docs/clay-web/Int/) | The color in #RRGGBB format (example: #c17d11). |
| `tile` | [Int](/api-docs/clay-web/Int/) | The tile ID of the tile representing this color. |
| `probability` | [Float](/api-docs/clay-web/Float/) | The relative probability that this color is chosen over others in case of multiple options. |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

