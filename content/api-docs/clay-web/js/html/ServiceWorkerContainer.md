---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ServiceWorkerContainer
target: Clay (Web)
permalink: api-docs/clay-web/js/html/ServiceWorkerContainer/
---

# ServiceWorkerContainer

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.ServiceWorkerContainer</strong> (extern class)</div>

The `ServiceWorkerContainer` interface of the ServiceWorker API provides an object representing the service worker as an overall unit in the network ecosystem, including facilities to register, unregister and update service workers, and access the state of service workers and their registrations.

Documentation [ServiceWorkerContainer](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer></div>


## Instance Members

<div class="signature field-var has-description" id="controller"><code><span class="field-name">controller</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ServiceWorker/" class="type-link">ServiceWorker</a></code><a class="header-anchor" href="#controller"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `ServiceWorker` object if its state is `activated` (the same object returned by `ServiceWorkerRegistration.active`). This property returns `null` during a force-refresh request (Shift + refresh) or if there is no active worker.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ready"><code><span class="field-name">ready</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ServiceWorkerRegistration/" class="type-link">ServiceWorkerRegistration</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ready"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Provides a way of delaying code execution until a service worker is active. It returns a `Promise` that will never reject, and which waits indefinitely until the `ServiceWorkerRegistration` associated with the current page has an `ServiceWorkerRegistration.active` worker. Once that condition is met, it resolves with the `ServiceWorkerRegistration`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="oncontrollerchange"><code><span class="field-name">oncontrollerchange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#oncontrollerchange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired whenever a `controllerchange` event occurs — when the document's associated `ServiceWorkerRegistration` acquires a new `ServiceWorkerRegistration.active` worker.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onerror"><code><span class="field-name">onerror</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onerror"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired whenever an `error` event occurs in the associated service workers.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onmessage"><code><span class="field-name">onmessage</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onmessage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired whenever a `message` event occurs — when incoming messages are received to the `ServiceWorkerContainer` object (e.g. via a `MessagePort.postMessage()` call.)

<hr class="field-separator" />

<div class="signature field-method no-description" id="register"><code><span class="field-name">register</span><span class="parenthesis">(</span><span class="arg-name">scriptURL</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/RegistrationOptions/" class="type-link">RegistrationOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ServiceWorkerRegistration/" class="type-link">ServiceWorkerRegistration</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#register"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `scriptURL` | [String](/api-docs/clay-web/String/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[RegistrationOptions](/api-docs/clay-web/js/html/RegistrationOptions/)> | *(optional)* |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[ServiceWorkerRegistration](/api-docs/clay-web/js/html/ServiceWorkerRegistration/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getRegistration"><code><span class="field-name">getRegistration</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">documentURL</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">""</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getRegistration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a `ServiceWorkerRegistration` object whose scope matches the provided document URL.  If the method can't return a `ServiceWorkerRegistration`, it returns a `Promise`. 

| Name | Type | Default |
|------|------|---------|
| `documentURL` | [String](/api-docs/clay-web/String/) | `""` |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getRegistrations"><code><span class="field-name">getRegistrations</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ServiceWorkerRegistration/" class="type-link">ServiceWorkerRegistration</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#getRegistrations"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns all `ServiceWorkerRegistration` objects associated with a `ServiceWorkerContainer` in an array.  If the method can't return `ServiceWorkerRegistration` objects, it returns a `Promise`. 
| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Array](/api-docs/clay-web/Array/)<[ServiceWorkerRegistration](/api-docs/clay-web/js/html/ServiceWorkerRegistration/)>> |

