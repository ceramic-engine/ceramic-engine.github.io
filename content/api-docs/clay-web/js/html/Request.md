---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Request
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Request/
---

# Request

<div class="type-hierarchy"><strong>js.html.Request</strong> (extern class)</div>

The `Request` interface of the Fetch API represents a resource request.

Documentation [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Request$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Request></div>


## Instance Members

<div class="signature field-var has-description" id="method"><code><span class="field-name">method</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#method"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Contains the request's method (`GET`, `POST`, etc.)

<hr class="field-separator" />

<div class="signature field-var has-description" id="url"><code><span class="field-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#url"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Contains the URL of the request.

<hr class="field-separator" />

<div class="signature field-var has-description" id="headers"><code><span class="field-name">headers</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Headers/" class="type-link">Headers</a></code><a class="header-anchor" href="#headers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Contains the associated `Headers` object of the request.

<hr class="field-separator" />

<div class="signature field-var has-description" id="destination"><code><span class="field-name">destination</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/RequestDestination/" class="type-link">RequestDestination</a></code><a class="header-anchor" href="#destination"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string from the `RequestDestination` enum describing the request's destination. This is a string indicating the type of content being requested.

<hr class="field-separator" />

<div class="signature field-var has-description" id="referrer"><code><span class="field-name">referrer</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#referrer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Contains the referrer of the request (e.g., `client`).

<hr class="field-separator" />

<div class="signature field-var has-description" id="referrerPolicy"><code><span class="field-name">referrerPolicy</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ReferrerPolicy/" class="type-link">ReferrerPolicy</a></code><a class="header-anchor" href="#referrerPolicy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Contains the referrer policy of the request (e.g., `no-referrer`).

<hr class="field-separator" />

<div class="signature field-var has-description" id="mode"><code><span class="field-name">mode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/RequestMode/" class="type-link">RequestMode</a></code><a class="header-anchor" href="#mode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Contains the mode of the request (e.g., `cors`, `no-cors`, `same-origin`, `navigate`.)

<hr class="field-separator" />

<div class="signature field-var has-description" id="credentials"><code><span class="field-name">credentials</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/RequestCredentials/" class="type-link">RequestCredentials</a></code><a class="header-anchor" href="#credentials"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Contains the credentials of the request (e.g., `"omit"`, `"same-origin"`, `"include"`). The default is `"same-origin"`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="cache"><code><span class="field-name">cache</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/RequestCache/" class="type-link">RequestCache</a></code><a class="header-anchor" href="#cache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Contains the cache mode of the request (e.g., `default`, `reload`, `no-cache`).

<hr class="field-separator" />

<div class="signature field-var has-description" id="redirect"><code><span class="field-name">redirect</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/RequestRedirect/" class="type-link">RequestRedirect</a></code><a class="header-anchor" href="#redirect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Contains the mode for how redirects are handled. It may be one of `follow`, `error`, or `manual`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="integrity"><code><span class="field-name">integrity</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#integrity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Contains the subresource integrity value of the request (e.g., `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).

<hr class="field-separator" />

<div class="signature field-var no-description" id="signal"><code><span class="field-name">signal</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/AbortSignal/" class="type-link">AbortSignal</a></code><a class="header-anchor" href="#signal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="bodyUsed"><code><span class="field-name">bodyUsed</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bodyUsed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="clone"><code><span class="field-name">clone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Request</a></code><a class="header-anchor" href="#clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a copy of the current `Request` object.
| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/Request/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="arrayBuffer"><code><span class="field-name">arrayBuffer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/ArrayBuffer/" class="type-link">js.lib.ArrayBuffer</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#arrayBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[js.lib.ArrayBuffer](/api-docs/clay-web/js/lib/ArrayBuffer/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="blob"><code><span class="field-name">blob</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Blob/" class="type-link">Blob</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#blob"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Blob](/api-docs/clay-web/js/html/Blob/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="formData"><code><span class="field-name">formData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/FormData/" class="type-link">FormData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#formData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[FormData](/api-docs/clay-web/js/html/FormData/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="json"><code><span class="field-name">json</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#json"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="text"><code><span class="field-name">text</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#text"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[String](/api-docs/clay-web/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="#" class="type-link">Request</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">init</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/RequestInit/" class="type-link">RequestInit</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `input` | [Request](/api-docs/clay-web/js/html/Request/) | |
| `init` | [Null](/api-docs/clay-web/Null/)<[RequestInit](/api-docs/clay-web/js/html/RequestInit/)> | *(optional)* |

