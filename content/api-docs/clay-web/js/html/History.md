---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: History
target: Clay (Web)
permalink: api-docs/clay-web/js/html/History/
---

# History

<div class="type-hierarchy"><strong>js.html.History</strong> (extern class)</div>

The `History` interface allows manipulation of the browser session history, that is the pages visited in the tab or frame that the current page is loaded in.

Documentation [History](https://developer.mozilla.org/en-US/docs/Web/API/History) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/History$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/History></div>


## Instance Members

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `Integer` representing the number of elements in the session history, including the currently loaded page. For example, for a page loaded in a new tab this property returns `1`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollRestoration"><code><span class="field-name">scrollRestoration</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ScrollRestoration/" class="type-link">ScrollRestoration</a></code><a class="header-anchor" href="#scrollRestoration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allows web applications to explicitly set default scroll restoration behavior on history navigation. This property can be either `auto` or `manual`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="state"><code><span class="field-name">state</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#state"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `any` value representing the state at the top of the history stack. This is a way to look at the state without having to wait for a `popstate` event.

<hr class="field-separator" />

<div class="signature field-method has-description" id="go"><code><span class="field-name">go</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#go"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads a page from the session history, identified by its relative location to the current page, for example -1 for the previous page or 1  for the next page. If you specify an out-of-bounds value (for instance, specifying -1 when there are no previously-visited pages in the session history), this method silently has no effect. Calling `go()` without parameters or a value of 0 reloads the current page. Internet Explorer lets you also specify a string to go to a specific page in the history list.

| Name | Type | Default |
|------|------|---------|
| `delta` | [Int](/api-docs/clay-web/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="back"><code><span class="field-name">back</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#back"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Goes to the previous page in session history, the same action as when the user clicks the browser's Back button. Equivalent to `history.go(-1)`.
Calling this method to go back beyond the first page in the session history has no effect and doesn't raise an exception.


<hr class="field-separator" />

<div class="signature field-method has-description" id="forward"><code><span class="field-name">forward</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#forward"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Goes to the next page in session history, the same action as when the user clicks the browser's Forward button; this is equivalent to `history.go(1)`.
Calling this method to go forward beyond the most recent page in the session history has no effect and doesn't raise an exception.


<hr class="field-separator" />

<div class="signature field-method has-description" id="pushState"><code><span class="field-name">pushState</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pushes the given data onto the session history stack with the specified title and, if provided, URL. The data is treated as opaque by the DOM; you may specify any JavaScript object that can be serialized.  Note that Firefox currently ignores the title parameter; for more information, see manipulating the browser history.

| Name | Type | Default |
|------|------|---------|
| `data` | [Dynamic](/api-docs/clay-web/Dynamic/) | |
| `title` | [String](/api-docs/clay-web/String/) | |
| `url` | [String](/api-docs/clay-web/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="replaceState"><code><span class="field-name">replaceState</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#replaceState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the most recent entry on the history stack to have the specified data, title, and, if provided, URL. The data is treated as opaque by the DOM; you may specify any JavaScript object that can be serialized.  Note that Firefox currently ignores the title parameter; for more information, see manipulating the browser history.

| Name | Type | Default |
|------|------|---------|
| `data` | [Dynamic](/api-docs/clay-web/Dynamic/) | |
| `title` | [String](/api-docs/clay-web/String/) | |
| `url` | [String](/api-docs/clay-web/String/) | *(optional)* |

