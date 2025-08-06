---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Clipboard
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Clipboard/
---

# Clipboard

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.Clipboard</strong> (extern class)</div>

The `Clipboard` interface implements the Clipboard API, providing—if the user grants permission—both read and write access to the contents of the system clipboard.

Documentation [Clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Clipboard></div>


## Instance Members

<div class="signature field-method has-description" id="read"><code><span class="field-name">read</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/DataTransfer/" class="type-link">DataTransfer</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#read"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Requests arbitrary data (such as images) from the clipboard, returning a `Promise`. When the data has been retrieved, the promise is resolved with a `DataTransfer` object that provides the data.
| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[DataTransfer](/api-docs/clay-web/js/html/DataTransfer/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readText"><code><span class="field-name">readText</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#readText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Requests text from the system clipboard; returns a `Promise` which is resolved with a `DOMString` containing the clipboard's text once it's available.
| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[String](/api-docs/clay-web/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="write"><code><span class="field-name">write</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DataTransfer/" class="type-link">DataTransfer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#write"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes arbitrary data to the system clipboard. This asynchronous operation signals that it's finished by resolving the returned `Promise`.

| Name | Type |
|------|------|
| `data` | [DataTransfer](/api-docs/clay-web/js/html/DataTransfer/) |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Void](/api-docs/clay-web/Void/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeText"><code><span class="field-name">writeText</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#writeText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes text to the system clipboard, returning a `Promise` which is resolved once the text is fully copied into the clipboard.

| Name | Type |
|------|------|
| `data` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Void](/api-docs/clay-web/Void/)> |

