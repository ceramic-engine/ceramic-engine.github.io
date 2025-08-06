---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: StyleSheet
target: Clay (Web)
permalink: api-docs/clay-web/js/html/StyleSheet/
---

# StyleSheet

<div class="type-hierarchy"><strong>js.html.StyleSheet</strong> (extern class) → <a href="/api-docs/clay-web/js/html/CSSStyleSheet/">CSSStyleSheet</a></div>

An object implementing the `StyleSheet` interface represents a single style sheet. CSS style sheets will further implement the more specialized `CSSStyleSheet` interface.

Documentation [StyleSheet](https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet></div>


## Instance Members

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` representing the style sheet language for this style sheet.

<hr class="field-separator" />

<div class="signature field-var has-description" id="href"><code><span class="field-name">href</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#href"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` representing the location of the stylesheet.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ownerNode"><code><span class="field-name">ownerNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#ownerNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Node` associating this style sheet with the current document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="parentStyleSheet"><code><span class="field-name">parentStyleSheet</span><span class="operator">:</span> <a href="#" class="type-link">StyleSheet</a></code><a class="header-anchor" href="#parentStyleSheet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `StyleSheet` including this one, if any; returns `null` if there aren't any.

<hr class="field-separator" />

<div class="signature field-var has-description" id="title"><code><span class="field-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#title"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` representing the advisory title of the current style sheet.

<hr class="field-separator" />

<div class="signature field-var has-description" id="media"><code><span class="field-name">media</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MediaList/" class="type-link">MediaList</a></code><a class="header-anchor" href="#media"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `MediaList` representing the intended destination medium for style information.

<hr class="field-separator" />

<div class="signature field-var has-description" id="disabled"><code><span class="field-name">disabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#disabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` representing whether the current stylesheet has been applied or not.

