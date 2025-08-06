---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Crypto
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Crypto/
---

# Crypto

<div class="type-hierarchy"><strong>js.html.Crypto</strong> (extern class)</div>

The `Crypto` interface represents basic cryptography features available in the current context. It allows access to a cryptographically strong random number generator and to cryptographic primitives.

Documentation [Crypto](https://developer.mozilla.org/en-US/docs/Web/API/Crypto) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Crypto$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Crypto></div>


## Instance Members

<div class="signature field-var has-description" id="subtle"><code><span class="field-name">subtle</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/SubtleCrypto/" class="type-link">SubtleCrypto</a></code><a class="header-anchor" href="#subtle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `SubtleCrypto` object providing access to common cryptographic primitives, like hashing, signing, encryption or decryption.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getRandomValues"><code><span class="field-name">getRandomValues</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/ArrayBufferView/" class="type-link">js.lib.ArrayBufferView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/ArrayBufferView/" class="type-link">js.lib.ArrayBufferView</a></code><a class="header-anchor" href="#getRandomValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fills the passed `TypedArray` with cryptographically sound random values.

| Name | Type |
|------|------|
| `array` | [js.lib.ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/) |

| Returns |
|---------|
| [js.lib.ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/) |

