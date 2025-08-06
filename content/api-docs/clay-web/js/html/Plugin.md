---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Plugin
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Plugin/
---

# Plugin

<div class="type-hierarchy"><strong>js.html.Plugin</strong> (extern class)</div>

The `Plugin` interface provides information about a browser plugin.

Documentation [Plugin](https://developer.mozilla.org/en-US/docs/Web/API/Plugin) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Plugin$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Plugin></div>


## Instance Members

<div class="signature field-var has-description" id="description"><code><span class="field-name">description</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#description"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A human readable description of the plugin.

<hr class="field-separator" />

<div class="signature field-var has-description" id="filename"><code><span class="field-name">filename</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#filename"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The filename of the plugin file.

<hr class="field-separator" />

<div class="signature field-var has-description" id="version"><code><span class="field-name">version</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#version"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The plugin's version number string.

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the plugin.

<hr class="field-separator" />

<div class="signature field-var no-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="item"><code><span class="field-name">item</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MimeType/" class="type-link">MimeType</a></code><a class="header-anchor" href="#item"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [MimeType](/api-docs/clay-web/js/html/MimeType/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="namedItem"><code><span class="field-name">namedItem</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MimeType/" class="type-link">MimeType</a></code><a class="header-anchor" href="#namedItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [MimeType](/api-docs/clay-web/js/html/MimeType/) |

