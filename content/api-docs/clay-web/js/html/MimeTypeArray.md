---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MimeTypeArray
target: Clay (Web)
permalink: api-docs/clay-web/js/html/MimeTypeArray/
---

# MimeTypeArray

<div class="type-hierarchy"><strong>js.html.MimeTypeArray</strong> (extern class)</div>

The `MimeTypeArray` interface returns an array of `MimeType` instances, each of which contains information about a supported browser plugins. This object is returned by `NavigatorPlugins.mimeTypes`.

Documentation [MimeTypeArray](https://developer.mozilla.org/en-US/docs/Web/API/MimeTypeArray) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/MimeTypeArray$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/MimeTypeArray></div>


## Instance Members

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of items in the array.

<hr class="field-separator" />

<div class="signature field-method has-description" id="item"><code><span class="field-name">item</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MimeType/" class="type-link">MimeType</a></code><a class="header-anchor" href="#item"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `MimeType` object with the specified index.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [MimeType](/api-docs/clay-web/js/html/MimeType/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="namedItem"><code><span class="field-name">namedItem</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MimeType/" class="type-link">MimeType</a></code><a class="header-anchor" href="#namedItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `MimeType` object with the specified name.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [MimeType](/api-docs/clay-web/js/html/MimeType/) |

