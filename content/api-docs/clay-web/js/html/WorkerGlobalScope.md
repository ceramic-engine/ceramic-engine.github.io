---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: WorkerGlobalScope
target: Clay (Web)
permalink: api-docs/clay-web/js/html/WorkerGlobalScope/
---

# WorkerGlobalScope

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.WorkerGlobalScope</strong> (extern class)</div>

The `WorkerGlobalScope` interface of the Web Workers API is an interface representing the scope of any worker. Workers have no browsing context; this scope contains the information usually conveyed by `Window` objects — in this case event handlers, the console or the associated `WorkerNavigator` object. Each `WorkerGlobalScope` has its own event loop.

Documentation [WorkerGlobalScope](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope></div>


## Instance Members

<div class="signature field-var has-description" id="self"><code><span class="field-name">self</span><span class="operator">:</span> <a href="#" class="type-link">WorkerGlobalScope</a></code><a class="header-anchor" href="#self"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reference to the `WorkerGlobalScope` itself. Most of the time it is a specific scope like `DedicatedWorkerGlobalScope`,  `SharedWorkerGlobalScope` or `ServiceWorkerGlobalScope`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="location"><code><span class="field-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/WorkerLocation/" class="type-link">WorkerLocation</a></code><a class="header-anchor" href="#location"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `WorkerLocation` associated with the worker. It is a specific location object, mostly a subset of the `Location` for browsing scopes, but adapted to workers.

<hr class="field-separator" />

<div class="signature field-var no-description" id="navigator"><code><span class="field-name">navigator</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/WorkerNavigator/" class="type-link">WorkerNavigator</a></code><a class="header-anchor" href="#navigator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="onoffline"><code><span class="field-name">onoffline</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onoffline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an `EventHandler` representing the code to be called when the `offline` event is raised.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ononline"><code><span class="field-name">ononline</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ononline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an `EventHandler` representing the code to be called when the `online` event is raised.

<hr class="field-separator" />

<div class="signature field-var has-description" id="performance"><code><span class="field-name">performance</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Performance/" class="type-link">Performance</a></code><a class="header-anchor" href="#performance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `Performance` associated with the worker. It is a regular performance object, except that only a subset of its property and methods are available to workers.

<hr class="field-separator" />

<div class="signature field-var no-description" id="crypto"><code><span class="field-name">crypto</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Crypto/" class="type-link">Crypto</a></code><a class="header-anchor" href="#crypto"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="origin"><code><span class="field-name">origin</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#origin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="isSecureContext"><code><span class="field-name">isSecureContext</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSecureContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="indexedDB"><code><span class="field-name">indexedDB</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Factory/" class="type-link">js.html.idb.Factory</a></code><a class="header-anchor" href="#indexedDB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="caches"><code><span class="field-name">caches</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CacheStorage/" class="type-link">CacheStorage</a></code><a class="header-anchor" href="#caches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="onerror"><code><span class="field-name">onerror</span><span class="parenthesis">(</span><span class="arg-name"></span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Event/" class="type-link">Event</a><span class="operator">,</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name"></span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name"></span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name"></span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name"></span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#onerror"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an `EventHandler` representing the code to be called when the `error` event is raised.

| Name | Type |
|------|------|
| `` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Event](/api-docs/clay-web/js/html/Event/), [String](/api-docs/clay-web/String/)> |
| `` | [String](/api-docs/clay-web/String/) |
| `` | [Int](/api-docs/clay-web/Int/) |
| `` | [Int](/api-docs/clay-web/Int/) |
| `` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="importScripts"><code><span class="field-name">importScripts</span><span class="parenthesis">(</span><span class="arg-name">urls</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#importScripts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Imports one or more scripts into the worker's scope. You can specify as many as you'd like, separated by commas. For example:` importScripts('foo.js', 'bar.js');`

| Name | Type |
|------|------|
| `urls` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dump"><code><span class="field-name">dump</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dump"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allows you to write a message to stdout — i.e. in your terminal. This is the same as Firefox's `window.dump`, but for workers.

| Name | Type | Default |
|------|------|---------|
| `str` | [String](/api-docs/clay-web/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="structuredClone"><code><span class="field-name">structuredClone</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">structuredClone.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">structuredClone.T</span></code><a class="header-anchor" href="#structuredClone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a deep clone of a given value using the structured clone algorithm.

| Name | Type | Default |
|------|------|---------|
| `value` | structuredClone.T | |
| `options` | AnonStruct | *(optional)* |

| Returns |
|---------|
| structuredClone.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="btoa"><code><span class="field-name">btoa</span><span class="parenthesis">(</span><span class="arg-name">btoa</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#btoa"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `btoa` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="atob"><code><span class="field-name">atob</span><span class="parenthesis">(</span><span class="arg-name">atob</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#atob"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `atob` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTimeout"><code><span class="field-name">setTimeout</span><span class="parenthesis">(</span><span class="arg-name">handler</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">timeout</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="arg-name">unused</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#setTimeout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `handler` | [String](/api-docs/clay-web/String/) | |
| `timeout` | [Int](/api-docs/clay-web/Int/) | `0` |
| `unused` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) | |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="clearTimeout"><code><span class="field-name">clearTimeout</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearTimeout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `handle` | [Int](/api-docs/clay-web/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setInterval"><code><span class="field-name">setInterval</span><span class="parenthesis">(</span><span class="arg-name">handler</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">timeout</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="arg-name">unused</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#setInterval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `handler` | [String](/api-docs/clay-web/String/) | |
| `timeout` | [Int](/api-docs/clay-web/Int/) | `0` |
| `unused` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) | |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="clearInterval"><code><span class="field-name">clearInterval</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearInterval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `handle` | [Int](/api-docs/clay-web/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createImageBitmap"><code><span class="field-name">createImageBitmap</span><span class="parenthesis">(</span><span class="arg-name">aImage</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ImageElement/" class="type-link">ImageElement</a><span class="operator">,</span> <span class="arg-name">aOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">aLength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">aFormat</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ImageBitmapFormat/" class="type-link">ImageBitmapFormat</a><span class="operator">,</span> <span class="arg-name">aLayout</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ChannelPixelLayout/" class="type-link">ChannelPixelLayout</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ImageBitmap/" class="type-link">ImageBitmap</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#createImageBitmap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aImage` | [ImageElement](/api-docs/clay-web/js/html/ImageElement/) |
| `aOffset` | [Int](/api-docs/clay-web/Int/) |
| `aLength` | [Int](/api-docs/clay-web/Int/) |
| `aFormat` | [ImageBitmapFormat](/api-docs/clay-web/js/html/ImageBitmapFormat/) |
| `aLayout` | [Array](/api-docs/clay-web/Array/)<[ChannelPixelLayout](/api-docs/clay-web/js/html/ChannelPixelLayout/)> |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[ImageBitmap](/api-docs/clay-web/js/html/ImageBitmap/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fetch"><code><span class="field-name">fetch</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Request/" class="type-link">Request</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">init</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/RequestInit/" class="type-link">RequestInit</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Response/" class="type-link">Response</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fetch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `input` | [Request](/api-docs/clay-web/js/html/Request/) | |
| `init` | [Null](/api-docs/clay-web/Null/)<[RequestInit](/api-docs/clay-web/js/html/RequestInit/)> | *(optional)* |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Response](/api-docs/clay-web/js/html/Response/)> |

