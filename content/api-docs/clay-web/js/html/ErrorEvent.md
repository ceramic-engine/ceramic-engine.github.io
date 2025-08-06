---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ErrorEvent
target: Clay (Web)
permalink: api-docs/clay-web/js/html/ErrorEvent/
---

# ErrorEvent

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/Event/">Event</a> → <strong>js.html.ErrorEvent</strong> (extern class)</div>

The `ErrorEvent` interface represents events providing information related to errors in scripts or in files.

Documentation [ErrorEvent](https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent></div>


## Instance Members

<div class="signature field-var has-description" id="message"><code><span class="field-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#message"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing a human-readable error message describing the problem.

<hr class="field-separator" />

<div class="signature field-var has-description" id="filename"><code><span class="field-name">filename</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#filename"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing the name of the script file in which the error occurred.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lineno"><code><span class="field-name">lineno</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lineno"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an `integer` containing the line number of the script file on which the error occurred.

<hr class="field-separator" />

<div class="signature field-var has-description" id="colno"><code><span class="field-name">colno</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#colno"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an `integer` containing the column number of the script file on which the error occurred.

<hr class="field-separator" />

<div class="signature field-var has-description" id="error"><code><span class="field-name">error</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#error"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a JavaScript `Object` that is concerned by the event.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">eventInitDict</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ErrorEventInit/" class="type-link">ErrorEventInit</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `type` | [String](/api-docs/clay-web/String/) | |
| `eventInitDict` | [Null](/api-docs/clay-web/Null/)<[ErrorEventInit](/api-docs/clay-web/js/html/ErrorEventInit/)> | *(optional)* |

