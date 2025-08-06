---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MediaQueryList
target: Clay (Web)
permalink: api-docs/clay-web/js/html/MediaQueryList/
---

# MediaQueryList

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.MediaQueryList</strong> (extern class)</div>

A `MediaQueryList` object stores information on a media query applied to a document, and handles sending notifications to listeners when the media query state change (i.e. when the media query test starts or stops evaluating to `true`).

Documentation [MediaQueryList](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList></div>


## Instance Members

<div class="signature field-var has-description" id="media"><code><span class="field-name">media</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#media"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` representing a serialized media query.

<hr class="field-separator" />

<div class="signature field-var has-description" id="matches"><code><span class="field-name">matches</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#matches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Boolean` that returns `true` if the `document` currently matches the media query list, or `false` if not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onchange"><code><span class="field-name">onchange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onchange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An event handler property representing a function that is invoked when the `change` event fires, i.e when the status of media query support changes. The event object is a `MediaQueryListEvent` instance, which is recognised as a `MediaListQuery` instance in older browsers, for backwards compatibility purposes.

<hr class="field-separator" />

<div class="signature field-method has-description" id="addListener"><code><span class="field-name">addListener</span><span class="parenthesis">(</span><span class="arg-name">listener</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a listener to the `MediaQueryListener` that will run a custom callback function in response to the media query status changing. This is basically an alias for `EventTarget.addEventListener()`, for backwards compatibility purposes.

| Name | Type |
|------|------|
| `listener` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeListener"><code><span class="field-name">removeListener</span><span class="parenthesis">(</span><span class="arg-name">listener</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a listener from the `MediaQueryListener`. This is basically an alias for `EventTarget.removeEventListener()`, for backwards compatibility purposes.

| Name | Type |
|------|------|
| `listener` | Function |

