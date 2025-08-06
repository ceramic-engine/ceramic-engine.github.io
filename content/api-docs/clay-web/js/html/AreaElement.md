---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: AreaElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/AreaElement/
---

# AreaElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.AreaElement</strong> (extern class)</div>

The `HTMLAreaElement` interface provides special properties and methods (beyond those of the regular object `HTMLElement` interface it also has available to it by inheritance) for manipulating the layout and presentation of area elements.

Documentation [HTMLAreaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAreaElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAreaElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLAreaElement></div>


## Instance Members

<div class="signature field-var has-description" id="alt"><code><span class="field-name">alt</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#alt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `alt` HTML attribute, containing alternative text for the element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="coords"><code><span class="field-name">coords</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#coords"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `coords` HTML attribute, containing coordinates to define the hot-spot region.

<hr class="field-separator" />

<div class="signature field-var has-description" id="shape"><code><span class="field-name">shape</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#shape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `shape` HTML attribute, indicating the shape of the hot-spot, limited to known values.

<hr class="field-separator" />

<div class="signature field-var has-description" id="target"><code><span class="field-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#target"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `target` HTML attribute, indicating the browsing context in which to open the linked resource.

<hr class="field-separator" />

<div class="signature field-var has-description" id="download"><code><span class="field-name">download</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#download"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` indicating that the linked resource is intended to be downloaded rather than displayed in the browser. The value represent the proposed name of the file. If the name is not a valid filename of the underlying OS, browser will adapt it.

<hr class="field-separator" />

<div class="signature field-var no-description" id="ping"><code><span class="field-name">ping</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#ping"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="rel"><code><span class="field-name">rel</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#rel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `rel` HTML attribute, indicating relationships of the current document to the linked resource.

<hr class="field-separator" />

<div class="signature field-var has-description" id="referrerPolicy"><code><span class="field-name">referrerPolicy</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#referrerPolicy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `referrerpolicy` HTML attribute indicating which referrer to use when fetching the linked resource.

<hr class="field-separator" />

<div class="signature field-var has-description" id="relList"><code><span class="field-name">relList</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMTokenList/" class="type-link">DOMTokenList</a></code><a class="header-anchor" href="#relList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMTokenList` that reflects the `rel` HTML attribute, indicating relationships of the current document to the linked resource, as a list of tokens.

<hr class="field-separator" />

<div class="signature field-var has-description" id="noHref"><code><span class="field-name">noHref</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#noHref"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` flag indicating if the area is inactive (`true`) or active (`false`).

<hr class="field-separator" />

<div class="signature field-var no-description" id="href"><code><span class="field-name">href</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#href"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="origin"><code><span class="field-name">origin</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#origin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="protocol"><code><span class="field-name">protocol</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#protocol"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="username"><code><span class="field-name">username</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#username"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="password"><code><span class="field-name">password</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#password"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="host"><code><span class="field-name">host</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#host"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="hostname"><code><span class="field-name">hostname</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#hostname"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="port"><code><span class="field-name">port</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#port"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pathname"><code><span class="field-name">pathname</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#pathname"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="search"><code><span class="field-name">search</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#search"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="hash"><code><span class="field-name">hash</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#hash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

