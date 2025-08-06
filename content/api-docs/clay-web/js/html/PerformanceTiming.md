---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: PerformanceTiming
target: Clay (Web)
permalink: api-docs/clay-web/js/html/PerformanceTiming/
---

# PerformanceTiming

<div class="type-hierarchy"><strong>js.html.PerformanceTiming</strong> (extern class)</div>

The `PerformanceTiming` interface is a legacy interface kept for backwards compatibility and contains properties that offer performance timing information for various events which occur during the loading and use of the current page. You get a `PerformanceTiming` object describing your page using the `window.performance.timing` property.

Documentation [PerformanceTiming](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming></div>


## Instance Members

<div class="signature field-var has-description" id="navigationStart"><code><span class="field-name">navigationStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#navigationStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the prompt for unload terminates on the previous document in the same browsing context. If there is no previous document, this value will be the same as `PerformanceTiming.fetchStart`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="unloadEventStart"><code><span class="field-name">unloadEventStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unloadEventStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the `unload` event has been thrown, indicating the time at which the previous document in the window began to unload. If there is no previous document, or if the previous document or one of the needed redirects is not of the same origin, the value returned is `0`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="unloadEventEnd"><code><span class="field-name">unloadEventEnd</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unloadEventEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the `unload` event handler finishes. If there is no previous document, or if the previous document, or one of the needed redirects, is not of the same origin, the value returned is `0`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="redirectStart"><code><span class="field-name">redirectStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#redirectStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the first HTTP redirect starts. If there is no redirect, or if one of the redirects is not of the same origin, the value returned is `0`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="redirectEnd"><code><span class="field-name">redirectEnd</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#redirectEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the last HTTP redirect is completed, that is when the last byte of the HTTP response has been received. If there is no redirect, or if one of the redirects is not of the same origin, the value returned is `0`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="fetchStart"><code><span class="field-name">fetchStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#fetchStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the browser is ready to fetch the document using an HTTP request. This moment is before the check to any application cache.

<hr class="field-separator" />

<div class="signature field-var has-description" id="domainLookupStart"><code><span class="field-name">domainLookupStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#domainLookupStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the domain lookup starts. If a persistent connection is used, or the information is stored in a cache or a local resource, the value will be the same as `PerformanceTiming.fetchStart`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="domainLookupEnd"><code><span class="field-name">domainLookupEnd</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#domainLookupEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the domain lookup is finished. If a persistent connection is used, or the information is stored in a cache or a local resource, the value will be the same as `PerformanceTiming.fetchStart`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="connectStart"><code><span class="field-name">connectStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#connectStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the request to open a connection is sent to the network. If the transport layer reports an error and the connection establishment is started again, the last connection establishment start time is given. If a persistent connection is used, the value will be the same as `PerformanceTiming.fetchStart`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="connectEnd"><code><span class="field-name">connectEnd</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#connectEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the connection is opened network. If the transport layer reports an error and the connection establishment is started again, the last connection establishment end time is given. If a persistent connection is used, the value will be the same as `PerformanceTiming.fetchStart`. A connection is considered as opened when all secure connection handshake, or SOCKS authentication, is terminated.

<hr class="field-separator" />

<div class="signature field-var has-description" id="secureConnectionStart"><code><span class="field-name">secureConnectionStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#secureConnectionStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the secure connection handshake starts. If no such connection is requested, it returns `0`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="requestStart"><code><span class="field-name">requestStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#requestStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the browser sent the request to obtain the actual document, from the server or from a cache. If the transport layer fails after the start of the request and the connection is reopened, this property will be set to the time corresponding to the new request.

<hr class="field-separator" />

<div class="signature field-var has-description" id="responseStart"><code><span class="field-name">responseStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#responseStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the browser received the first byte of the response, from the server from a cache, or from a local resource.

<hr class="field-separator" />

<div class="signature field-var has-description" id="responseEnd"><code><span class="field-name">responseEnd</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#responseEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the browser received the last byte of the response, or when the connection is closed if this happened first, from the server, the cache, or from a local resource.

<hr class="field-separator" />

<div class="signature field-var has-description" id="domLoading"><code><span class="field-name">domLoading</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#domLoading"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the parser started its work, that is when its `Document.readyState` changes to `'loading'` and the corresponding `readystatechange` event is thrown.

<hr class="field-separator" />

<div class="signature field-var has-description" id="domInteractive"><code><span class="field-name">domInteractive</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#domInteractive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the parser finished its work on the main document, that is when its `Document.readyState` changes to `'interactive'` and the corresponding `readystatechange` event is thrown.

<hr class="field-separator" />

<div class="signature field-var has-description" id="domContentLoadedEventStart"><code><span class="field-name">domContentLoadedEventStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#domContentLoadedEventStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Right before the parser sent the `DOMContentLoaded` event, that is right after all the scripts that need to be executed right after parsing have been executed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="domContentLoadedEventEnd"><code><span class="field-name">domContentLoadedEventEnd</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#domContentLoadedEventEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Right after all the scripts that need to be executed as soon as possible, in order or not, have been executed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="domComplete"><code><span class="field-name">domComplete</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#domComplete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the parser finished its work on the main document, that is when its `Document.readyState` changes to `'complete'` and the corresponding `readystatechange` event is thrown.

<hr class="field-separator" />

<div class="signature field-var has-description" id="loadEventStart"><code><span class="field-name">loadEventStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#loadEventStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the `load` event was sent for the current document. If this event has not yet been sent, it returns `0.`

<hr class="field-separator" />

<div class="signature field-var has-description" id="loadEventEnd"><code><span class="field-name">loadEventEnd</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#loadEventEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the `load` event handler terminated, that is when the load event is completed. If this event has not yet been sent, or is not yet completed, it returns `0.`

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJSON"><code><span class="field-name">toJSON</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJSON"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a JSON object representing this `PerformanceTiming` object.
| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:deprecated` | "PerformanceTiming is deprecated, use the PerformanceNavigationTiming interface instead" |

