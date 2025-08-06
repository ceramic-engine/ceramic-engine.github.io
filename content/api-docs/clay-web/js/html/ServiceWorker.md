---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ServiceWorker
target: Clay (Web)
permalink: api-docs/clay-web/js/html/ServiceWorker/
---

# ServiceWorker

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.ServiceWorker</strong> (extern class)</div>

The `ServiceWorker` interface of the ServiceWorker API provides a reference to a service worker. Multiple browsing contexts (e.g. pages, workers, etc.) can be associated with the same service worker, each through a unique `ServiceWorker` object.

Documentation [ServiceWorker](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker></div>


## Instance Members

<div class="signature field-var has-description" id="scriptURL"><code><span class="field-name">scriptURL</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#scriptURL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `ServiceWorker` serialized script URL defined as part of `ServiceWorkerRegistration`. The URL must be on the same origin as the document that registers the `ServiceWorker`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="state"><code><span class="field-name">state</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ServiceWorkerState/" class="type-link">ServiceWorkerState</a></code><a class="header-anchor" href="#state"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the state of the service worker. It returns one of the following values: `installing`, `installed,` `activating`, `activated`, or `redundant`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onstatechange"><code><span class="field-name">onstatechange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onstatechange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `EventListener` property called whenever an event of type `statechange` is fired; it is basically fired anytime the `ServiceWorker.state` changes.

<hr class="field-separator" />

<div class="signature field-var no-description" id="onerror"><code><span class="field-name">onerror</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onerror"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="postMessage"><code><span class="field-name">postMessage</span><span class="parenthesis">(</span><span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">transferable</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#postMessage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `message` | [Dynamic](/api-docs/clay-web/Dynamic/) | |
| `transferable` | [Array](/api-docs/clay-web/Array/)<[Dynamic](/api-docs/clay-web/Dynamic/)> | *(optional)* |

