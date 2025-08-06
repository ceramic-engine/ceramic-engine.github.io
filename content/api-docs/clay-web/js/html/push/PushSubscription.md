---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: PushSubscription
target: Clay (Web)
permalink: api-docs/clay-web/js/html/push/PushSubscription/
---

# PushSubscription

<div class="type-hierarchy"><strong>js.html.push.PushSubscription</strong> (extern class)</div>

The `PushSubscription` interface of the Push API provides a subcription's URL endpoint and allows unsubscription from a push service.

Documentation [PushSubscription](https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription></div>


## Instance Members

<div class="signature field-var has-description" id="endpoint"><code><span class="field-name">endpoint</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#endpoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `USVString` containing the endpoint associated with the push subscription.

<hr class="field-separator" />

<div class="signature field-var has-description" id="options"><code><span class="field-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/push/PushSubscriptionOptions/" class="type-link">PushSubscriptionOptions</a></code><a class="header-anchor" href="#options"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An object containing the options used to create the subscription.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getKey"><code><span class="field-name">getKey</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/push/PushEncryptionKeyName/" class="type-link">PushEncryptionKeyName</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/ArrayBuffer/" class="type-link">js.lib.ArrayBuffer</a></code><a class="header-anchor" href="#getKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `ArrayBuffer` which contains the client's public key, which can then be sent to a server and used in encrypting push message data.

| Name | Type |
|------|------|
| `name` | [PushEncryptionKeyName](/api-docs/clay-web/js/html/push/PushEncryptionKeyName/) |

| Returns |
|---------|
| [js.lib.ArrayBuffer](/api-docs/clay-web/js/lib/ArrayBuffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unsubscribe"><code><span class="field-name">unsubscribe</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unsubscribe"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starts the asynchronous process of unsubscribing from the push service, returning a `Promise` that resolves to a `Boolean` when the current subscription is successfully unregistered.
| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Bool](/api-docs/clay-web/Bool/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJSON"><code><span class="field-name">toJSON</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/push/PushSubscriptionJSON/" class="type-link">PushSubscriptionJSON</a></code><a class="header-anchor" href="#toJSON"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Standard serializer — returns a JSON representation of the subscription properties.
| Returns |
|---------|
| [PushSubscriptionJSON](/api-docs/clay-web/js/html/push/PushSubscriptionJSON/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">initDict</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/push/PushSubscriptionInit/" class="type-link">PushSubscriptionInit</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `initDict` | [PushSubscriptionInit](/api-docs/clay-web/js/html/push/PushSubscriptionInit/) |

