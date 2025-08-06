---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: PushManager
target: Clay (Web)
permalink: api-docs/clay-web/js/html/push/PushManager/
---

# PushManager

<div class="type-hierarchy"><strong>js.html.push.PushManager</strong> (extern class)</div>

The `PushManager` interface of the Push API provides a way to receive notifications from third-party servers as well as request URLs for push notifications.

Documentation [PushManager](https://developer.mozilla.org/en-US/docs/Web/API/PushManager) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/PushManager$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/PushManager></div>


## Instance Members

<div class="signature field-method has-description" id="subscribe"><code><span class="field-name">subscribe</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/push/PushSubscriptionOptionsInit/" class="type-link">PushSubscriptionOptionsInit</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/push/PushSubscription/" class="type-link">PushSubscription</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#subscribe"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Subscribes to a push service. It returns a `Promise` that resolves to a `PushSubscription` object containing details of a push subscription. A new push subscription is created if the current service worker does not have an existing subscription.

| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/clay-web/Null/)<[PushSubscriptionOptionsInit](/api-docs/clay-web/js/html/push/PushSubscriptionOptionsInit/)> | *(optional)* |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[PushSubscription](/api-docs/clay-web/js/html/push/PushSubscription/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getSubscription"><code><span class="field-name">getSubscription</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/push/PushSubscription/" class="type-link">PushSubscription</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getSubscription"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves an existing push subscription. It returns a `Promise` that resolves to a `PushSubscription` object containing details of an existing subscription. If no existing subscription exists, this resolves to a `null` value.
| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[PushSubscription](/api-docs/clay-web/js/html/push/PushSubscription/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="permissionState"><code><span class="field-name">permissionState</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/push/PushSubscriptionOptionsInit/" class="type-link">PushSubscriptionOptionsInit</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/push/PushPermissionState/" class="type-link">PushPermissionState</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#permissionState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` that resolves to the permission state of the current `PushManager`, which will be one of `'granted'`, `'denied'`, or `'prompt'`.

| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/clay-web/Null/)<[PushSubscriptionOptionsInit](/api-docs/clay-web/js/html/push/PushSubscriptionOptionsInit/)> | *(optional)* |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[PushPermissionState](/api-docs/clay-web/js/html/push/PushPermissionState/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">scope</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scope` | [String](/api-docs/clay-web/String/) |

