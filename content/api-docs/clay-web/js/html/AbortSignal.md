---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: AbortSignal
target: Clay (Web)
permalink: api-docs/clay-web/js/html/AbortSignal/
---

# AbortSignal

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.AbortSignal</strong> (extern class)</div>

The `AbortSignal` interface represents a signal object that allows you to communicate with a DOM request (such as a Fetch) and abort it if required via an `AbortController` object.

Documentation [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal></div>


## Instance Members

<div class="signature field-var has-description" id="aborted"><code><span class="field-name">aborted</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#aborted"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Boolean` that indicates whether the request(s) the signal is communicating with is/are aborted (`true`) or not (`false`).

<hr class="field-separator" />

<div class="signature field-var has-description" id="onabort"><code><span class="field-name">onabort</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onabort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Invoked when an `abort_(dom_abort_api)` event fires, i.e. when the DOM request(s) the signal is communicating with is/are aborted.

