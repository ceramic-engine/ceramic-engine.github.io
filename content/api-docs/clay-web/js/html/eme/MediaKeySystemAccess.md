---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MediaKeySystemAccess
target: Clay (Web)
permalink: api-docs/clay-web/js/html/eme/MediaKeySystemAccess/
---

# MediaKeySystemAccess

<div class="type-hierarchy"><strong>js.html.eme.MediaKeySystemAccess</strong> (extern class)</div>

The `MediaKeySystemAccess` interface of the EncryptedMediaExtensions API provides access to a Key System for decryption and/or a content protection provider. You can request an instance of this object using the `Navigator.requestMediaKeySystemAccess` method.

Documentation [MediaKeySystemAccess](https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemAccess) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemAccess$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemAccess></div>


## Instance Members

<div class="signature field-var has-description" id="keySystem"><code><span class="field-name">keySystem</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#keySystem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` identifying the key system being used.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getConfiguration"><code><span class="field-name">getConfiguration</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/eme/MediaKeySystemConfiguration/" class="type-link">MediaKeySystemConfiguration</a></code><a class="header-anchor" href="#getConfiguration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `MediaKeySystemConfiguration` object with the supported combination of configuration options.
| Returns |
|---------|
| [MediaKeySystemConfiguration](/api-docs/clay-web/js/html/eme/MediaKeySystemConfiguration/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createMediaKeys"><code><span class="field-name">createMediaKeys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/eme/MediaKeys/" class="type-link">MediaKeys</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#createMediaKeys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` that resolves to a new `MediaKeys` object.
| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[MediaKeys](/api-docs/clay-web/js/html/eme/MediaKeys/)> |

