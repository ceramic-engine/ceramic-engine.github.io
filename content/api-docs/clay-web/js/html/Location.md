---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Location
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Location/
---

# Location

<div class="type-hierarchy"><strong>js.html.Location</strong> (extern class)</div>

The `Location` interface represents the location (URL) of the object it is linked to. Changes done on it are reflected on the object it relates to. Both the `Document` and `Window` interface have such a linked `Location`, accessible via `Document.location` and `Window.location` respectively.

Documentation [Location](https://developer.mozilla.org/en-US/docs/Web/API/Location) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Location$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Location></div>


## Instance Members

<div class="signature field-var has-description" id="href"><code><span class="field-name">href</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#href"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing the entire URL. If changed, the associated document navigates to the new page. It can be set from a different origin than the associated document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="origin"><code><span class="field-name">origin</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#origin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` containing the canonical form of the origin of the specific location.

<hr class="field-separator" />

<div class="signature field-var has-description" id="protocol"><code><span class="field-name">protocol</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#protocol"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing the protocol scheme of the URL, including the final `':'`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="host"><code><span class="field-name">host</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#host"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing the host, that is the hostname, a `':'`, and the port of the URL.

<hr class="field-separator" />

<div class="signature field-var has-description" id="hostname"><code><span class="field-name">hostname</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#hostname"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing the domain of the URL.

<hr class="field-separator" />

<div class="signature field-var has-description" id="port"><code><span class="field-name">port</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#port"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing the port number of the URL.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pathname"><code><span class="field-name">pathname</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#pathname"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing an initial `'/'` followed by the path of the URL.

<hr class="field-separator" />

<div class="signature field-var has-description" id="search"><code><span class="field-name">search</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#search"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing a `'?'` followed by the parameters or "querystring" of the URL. Modern browsers provide URLSearchParams and URL.searchParams to make it easy to parse out the parameters from the querystring.

<hr class="field-separator" />

<div class="signature field-var has-description" id="hash"><code><span class="field-name">hash</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#hash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing a `'#'` followed by the fragment identifier of the URL.

<hr class="field-separator" />

<div class="signature field-method has-description" id="assign"><code><span class="field-name">assign</span><span class="parenthesis">(</span><span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads the resource at the URL provided in parameter.

| Name | Type |
|------|------|
| `url` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="replace"><code><span class="field-name">replace</span><span class="parenthesis">(</span><span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#replace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Replaces the current resource with the one at the provided URL. The difference from the `assign()` method is that after using `replace()` the current page will not be saved in session `History`, meaning the user won't be able to use the back button to navigate to it.

| Name | Type |
|------|------|
| `url` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reload"><code><span class="field-name">reload</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">forceget</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reloads the resource from the current URL. Its optional unique parameter is a `Boolean`, which, when it is `true`, causes the page to always be reloaded from the server. If it is `false` or not specified, the browser may reload the page from its cache.

| Name | Type | Default |
|------|------|---------|
| `forceget` | [Bool](/api-docs/clay-web/Bool/) | `false` |

