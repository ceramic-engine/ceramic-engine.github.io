---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: PluginArray
target: Clay (Web)
permalink: api-docs/clay-web/js/html/PluginArray/
---

# PluginArray

<div class="type-hierarchy"><strong>js.html.PluginArray</strong> (extern class)</div>

The `PluginArray` interface is used to store a list of `Plugin` objects describing the available plugins; it's returned by the `window.navigator.plugins` property. The `PluginArray` is not a JavaScript array, but has the `length` property and supports accessing individual items using bracket notation (`plugins[2]`), as well as via `item(index)` and `namedItem("name")` methods.

Documentation [PluginArray](https://developer.mozilla.org/en-US/docs/Web/API/PluginArray) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/PluginArray$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/PluginArray></div>


## Instance Members

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of plugins in the array.

<hr class="field-separator" />

<div class="signature field-method no-description" id="item"><code><span class="field-name">item</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Plugin/" class="type-link">Plugin</a></code><a class="header-anchor" href="#item"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Plugin](/api-docs/clay-web/js/html/Plugin/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="namedItem"><code><span class="field-name">namedItem</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Plugin/" class="type-link">Plugin</a></code><a class="header-anchor" href="#namedItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Plugin](/api-docs/clay-web/js/html/Plugin/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="refresh"><code><span class="field-name">refresh</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">reloadDocuments</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#refresh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `reloadDocuments` | [Bool](/api-docs/clay-web/Bool/) | `false` |

