---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Response
target: Headless
permalink: api-docs/headless/js/html/Response/
---

# Response

<div class="type-hierarchy"><strong>js.html.Response</strong> (extern class)</div>

The `Response` interface of the Fetch API represents the response to a request.

Documentation [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Response$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Response></div>


## Static Members

<div class="signature field-method has-description" id="error"><code><span class="field-name">error</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Response</a></code><a class="header-anchor" href="#error"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new `Response` object associated with a network error.
| Returns |
|---------|
| [Response](/api-docs/headless/js/html/Response/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="redirect"><code><span class="field-name">redirect</span><span class="parenthesis">(</span><span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">status</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">302</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Response</a></code><a class="header-anchor" href="#redirect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new response with a different URL.

| Name | Type | Default |
|------|------|---------|
| `url` | [String](/api-docs/headless/String/) | |
| `status` | [Int](/api-docs/headless/Int/) | `302` |

| Returns |
|---------|
| [Response](/api-docs/headless/js/html/Response/) |

## Instance Members

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/js/html/ResponseType/" class="type-link">ResponseType</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Contains the type of the response (e.g., `basic`, `cors`).

<hr class="field-separator" />

<div class="signature field-var has-description" id="url"><code><span class="field-name">url</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#url"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Contains the URL of the response.

<hr class="field-separator" />

<div class="signature field-var has-description" id="redirected"><code><span class="field-name">redirected</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#redirected"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates whether or not the response is the result of a redirect; that is, its URL list has more than one entry.

<hr class="field-separator" />

<div class="signature field-var has-description" id="status"><code><span class="field-name">status</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#status"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Contains the status code of the response (e.g., `200` for a success).

<hr class="field-separator" />

<div class="signature field-var has-description" id="ok"><code><span class="field-name">ok</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ok"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Contains a boolean stating whether the response was successful (status in the range 200-299) or not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="statusText"><code><span class="field-name">statusText</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#statusText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Contains the status message corresponding to the status code (e.g., `OK` for `200`).

<hr class="field-separator" />

<div class="signature field-var has-description" id="headers"><code><span class="field-name">headers</span><span class="operator">:</span> <a href="/api-docs/headless/js/html/Headers/" class="type-link">Headers</a></code><a class="header-anchor" href="#headers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Contains the `Headers` object associated with the response.

<hr class="field-separator" />

<div class="signature field-var no-description" id="bodyUsed"><code><span class="field-name">bodyUsed</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bodyUsed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="clone"><code><span class="field-name">clone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Response</a></code><a class="header-anchor" href="#clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a clone of a `Response` object.
| Returns |
|---------|
| [Response](/api-docs/headless/js/html/Response/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="arrayBuffer"><code><span class="field-name">arrayBuffer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/lib/ArrayBuffer/" class="type-link">js.lib.ArrayBuffer</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#arrayBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [js.lib.Promise](/api-docs/headless/js/lib/Promise/)<[js.lib.ArrayBuffer](/api-docs/headless/js/lib/ArrayBuffer/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="blob"><code><span class="field-name">blob</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/html/Blob/" class="type-link">Blob</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#blob"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [js.lib.Promise](/api-docs/headless/js/lib/Promise/)<[Blob](/api-docs/headless/js/html/Blob/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="formData"><code><span class="field-name">formData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/html/FormData/" class="type-link">FormData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#formData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [js.lib.Promise](/api-docs/headless/js/lib/Promise/)<[FormData](/api-docs/headless/js/html/FormData/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="json"><code><span class="field-name">json</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#json"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [js.lib.Promise](/api-docs/headless/js/lib/Promise/)<[Dynamic](/api-docs/headless/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="text"><code><span class="field-name">text</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#text"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [js.lib.Promise](/api-docs/headless/js/lib/Promise/)<[String](/api-docs/headless/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/headless/js/html/Blob/" class="type-link">Blob</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">init</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/html/ResponseInit/" class="type-link">ResponseInit</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `body` | [Blob](/api-docs/headless/js/html/Blob/) | *(optional)* |
| `init` | [Null](/api-docs/headless/Null/)<[ResponseInit](/api-docs/headless/js/html/ResponseInit/)> | *(optional)* |

