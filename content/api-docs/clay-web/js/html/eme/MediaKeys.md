---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MediaKeys
target: Clay (Web)
permalink: api-docs/clay-web/js/html/eme/MediaKeys/
---

# MediaKeys

<div class="type-hierarchy"><strong>js.html.eme.MediaKeys</strong> (extern class)</div>

The `MediaKeys` interface of EncryptedMediaExtensions API the represents a set of keys that an associated `HTMLMediaElement` can use for decryption of media data during playback.

Documentation [MediaKeys](https://developer.mozilla.org/en-US/docs/Web/API/MediaKeys) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/MediaKeys$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/MediaKeys></div>


## Instance Members

<div class="signature field-var no-description" id="keySystem"><code><span class="field-name">keySystem</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#keySystem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="createSession"><code><span class="field-name">createSession</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">sessionType</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/eme/MediaKeySessionType/" class="type-link">MediaKeySessionType</a> <span class="operator">=</span> <span class="default-value">TEMPORARY</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/eme/MediaKeySession/" class="type-link">MediaKeySession</a></code><a class="header-anchor" href="#createSession"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new `MediaKeySession` object, which represents a context for message exchange with a content decryption module (CDM).

| Name | Type | Default |
|------|------|---------|
| `sessionType` | [MediaKeySessionType](/api-docs/clay-web/js/html/eme/MediaKeySessionType/) | `TEMPORARY` |

| Returns |
|---------|
| [MediaKeySession](/api-docs/clay-web/js/html/eme/MediaKeySession/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setServerCertificate"><code><span class="field-name">setServerCertificate</span><span class="parenthesis">(</span><span class="arg-name">serverCertificate</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/ArrayBufferView/" class="type-link">js.lib.ArrayBufferView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#setServerCertificate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` to a server certificate to be used to encrypt messages to the license server.

| Name | Type |
|------|------|
| `serverCertificate` | [js.lib.ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/) |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Void](/api-docs/clay-web/Void/)> |

