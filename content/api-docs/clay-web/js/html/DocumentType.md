---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: DocumentType
target: Clay (Web)
permalink: api-docs/clay-web/js/html/DocumentType/
---

# DocumentType

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <strong>js.html.DocumentType</strong> (extern class)</div>

The `DocumentType` interface represents a `Node` containing a doctype.

Documentation [DocumentType](https://developer.mozilla.org/en-US/docs/Web/API/DocumentType) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/DocumentType$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/DocumentType></div>


## Instance Members

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString`, eg `"html"` for `!DOCTYPE HTML`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="publicId"><code><span class="field-name">publicId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#publicId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString`, eg `"-//W3C//DTD HTML 4.01//EN"`, empty string for HTML5.

<hr class="field-separator" />

<div class="signature field-var has-description" id="systemId"><code><span class="field-name">systemId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#systemId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString`, eg `"http://www.w3.org/TR/html4/strict.dtd"`, empty string for HTML5.

<hr class="field-separator" />

<div class="signature field-method has-description" id="before"><code><span class="field-name">before</span><span class="parenthesis">(</span><span class="arg-name">nodes</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#before"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `nodes` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="after"><code><span class="field-name">after</span><span class="parenthesis">(</span><span class="arg-name">nodes</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#after"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `nodes` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="replaceWith"><code><span class="field-name">replaceWith</span><span class="parenthesis">(</span><span class="arg-name">nodes</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#replaceWith"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `nodes` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

