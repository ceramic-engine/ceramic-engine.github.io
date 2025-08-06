---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: TmxImage
target: Clay (Web)
permalink: api-docs/clay-web/format/tmx/TmxImage/
---

# TmxImage

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Data.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.TmxImage</strong> (Class)</div>

As of the current version of Tiled Qt, each tileset has a single image associated with it,
which is cut into smaller tiles based on the attributes defined on the tileset element.
Later versions may add support for adding multiple images to a single tileset, as is possible in Tiled Java.

## Instance Members

<div class="signature field-var has-description" id="format"><code><span class="field-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#format"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Used for embedded images, in combination with a data child element. Valid values are file extensions like png, gif, jpg, bmp, etc. (since 0.9.0)

<hr class="field-separator" />

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Used by some versions of Tiled Java. Deprecated and unsupported by Tiled Qt.

<hr class="field-separator" />

<div class="signature field-var has-description" id="source"><code><span class="field-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#source"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The reference to the tileset image file (Tiled supports most common image formats).

<hr class="field-separator" />

<div class="signature field-var has-description" id="transparent"><code><span class="field-name">transparent</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#transparent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Defines a specific color that is treated as transparent (example value: "#FF00FF" for magenta).
Up until Tiled 0.10 (upd: 0.12), this value is written out without a # but this is planned to change.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The image width in pixels (optional, used for tile index correction when the image changes)

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The image height in pixels (optional)

<hr class="field-separator" />

<div class="signature field-var has-description" id="data"><code><span class="field-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/format/tmx/TmxData/" class="type-link">TmxData</a></code><a class="header-anchor" href="#data"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Since 0.9

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">transparent</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/format/tmx/TmxData/" class="type-link">TmxData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `format` | [String](/api-docs/clay-web/String/) | *(optional)* | Used for embedded images, in combination with a data child element. Valid values are file extensions like png, gif, jpg, bmp, etc. (since 0.9.0) |
| `id` | [String](/api-docs/clay-web/String/) | *(optional)* | Used by some versions of Tiled Java. Deprecated and unsupported by Tiled Qt. |
| `source` | [String](/api-docs/clay-web/String/) | | The reference to the tileset image file (Tiled supports most common image formats). |
| `transparent` | [Int](/api-docs/clay-web/Int/) | *(optional)* | * Defines a specific color that is treated as transparent (example value: "#FF00FF" for magenta). Up until Tiled 0.10 (upd: 0.12), this value is written out without a # but this is planned to change. |
| `width` | [Int](/api-docs/clay-web/Int/) | *(optional)* | The image width in pixels (optional, used for tile index correction when the image changes) |
| `height` | [Int](/api-docs/clay-web/Int/) | *(optional)* | The image height in pixels (optional) |
| `data` | [TmxData](/api-docs/clay-web/format/tmx/TmxData/) | *(optional)* | Since 0.9 |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

