---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ServiceWorkerRegistration
target: Clay (Web)
permalink: api-docs/clay-web/js/html/ServiceWorkerRegistration/
---

# ServiceWorkerRegistration

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.ServiceWorkerRegistration</strong> (extern class)</div>

The `ServiceWorkerRegistration` interface of the ServiceWorker API represents the service worker registration. You register a service worker to control one or more pages that share the same origin.

Documentation [ServiceWorkerRegistration](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration></div>


## Instance Members

<div class="signature field-var has-description" id="installing"><code><span class="field-name">installing</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ServiceWorker/" class="type-link">ServiceWorker</a></code><a class="header-anchor" href="#installing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a service worker whose state is `installing`. This is initially set to `null`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="waiting"><code><span class="field-name">waiting</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ServiceWorker/" class="type-link">ServiceWorker</a></code><a class="header-anchor" href="#waiting"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a service worker whose state is `waiting`. This is initially set to `null`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="active"><code><span class="field-name">active</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ServiceWorker/" class="type-link">ServiceWorker</a></code><a class="header-anchor" href="#active"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a service worker whose state is either `activating` or `activated`. This is initially set to `null`. An active worker will control a `ServiceWorkerClient` if the client's URL falls within the scope of the registration (the `scope` option set when `ServiceWorkerContainer.register` is first called.)

<hr class="field-separator" />

<div class="signature field-var has-description" id="scope"><code><span class="field-name">scope</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#scope"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a unique identifier for a service worker registration. This must be on the same origin as the document that registers the `ServiceWorker`.

<hr class="field-separator" />

<div class="signature field-var no-description" id="updateViaCache"><code><span class="field-name">updateViaCache</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ServiceWorkerUpdateViaCache/" class="type-link">ServiceWorkerUpdateViaCache</a></code><a class="header-anchor" href="#updateViaCache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="onupdatefound"><code><span class="field-name">onupdatefound</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onupdatefound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `EventListener` property called whenever an event of type `updatefound` is fired; it is fired any time the `ServiceWorkerRegistration.installing` property acquires a new service worker.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pushManager"><code><span class="field-name">pushManager</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/push/PushManager/" class="type-link">js.html.push.PushManager</a></code><a class="header-anchor" href="#pushManager"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reference to the `PushManager` interface for managing push subscriptions including subscribing, getting an active subscription, and accessing push permission status.

<hr class="field-separator" />

<div class="signature field-method has-description" id="update"><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks the server for an updated version of the service worker without consulting caches.
| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Void](/api-docs/clay-web/Void/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unregister"><code><span class="field-name">unregister</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unregister"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unregisters the service worker registration and returns a `Promise`. The service worker will finish any ongoing operations before it is unregistered.
| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Bool](/api-docs/clay-web/Bool/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="showNotification"><code><span class="field-name">showNotification</span><span class="parenthesis">(</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/NotificationOptions/" class="type-link">NotificationOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#showNotification"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Displays the notification with the requested title.

| Name | Type | Default |
|------|------|---------|
| `title` | [String](/api-docs/clay-web/String/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[NotificationOptions](/api-docs/clay-web/js/html/NotificationOptions/)> | *(optional)* |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Void](/api-docs/clay-web/Void/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getNotifications"><code><span class="field-name">getNotifications</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/GetNotificationOptions/" class="type-link">GetNotificationOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Notification/" class="type-link">Notification</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#getNotifications"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` that resolves to an array of `Notification` objects.

| Name | Type | Default |
|------|------|---------|
| `filter` | [Null](/api-docs/clay-web/Null/)<[GetNotificationOptions](/api-docs/clay-web/js/html/GetNotificationOptions/)> | *(optional)* |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Array](/api-docs/clay-web/Array/)<[Notification](/api-docs/clay-web/js/html/Notification/)>> |

