---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: SubtleCrypto
target: Clay (Web)
permalink: api-docs/clay-web/js/html/SubtleCrypto/
---

# SubtleCrypto

<div class="type-hierarchy"><strong>js.html.SubtleCrypto</strong> (extern class)</div>

The `SubtleCrypto` interface represents a set of cryptographic primitives. It is available via the `Crypto.subtle` properties available in a window context (via `Window.crypto`).

Documentation [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto></div>


## Instance Members

<div class="signature field-method has-description" id="encrypt"><code><span class="field-name">encrypt</span><span class="parenthesis">(</span><span class="arg-name">algorithm</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CryptoKey/" class="type-link">CryptoKey</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/ArrayBufferView/" class="type-link">js.lib.ArrayBufferView</a><span class="operator">,</span> <a href="/api-docs/clay-web/js/lib/ArrayBuffer/" class="type-link">js.lib.ArrayBuffer</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#encrypt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` of the encrypted data corresponding to the clear text, algorithm and key given as parameters.

| Name | Type |
|------|------|
| `algorithm` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Dynamic](/api-docs/clay-web/Dynamic/), [String](/api-docs/clay-web/String/)> |
| `key` | [CryptoKey](/api-docs/clay-web/js/html/CryptoKey/) |
| `data` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[js.lib.ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/), [js.lib.ArrayBuffer](/api-docs/clay-web/js/lib/ArrayBuffer/)> |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="decrypt"><code><span class="field-name">decrypt</span><span class="parenthesis">(</span><span class="arg-name">algorithm</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CryptoKey/" class="type-link">CryptoKey</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/ArrayBufferView/" class="type-link">js.lib.ArrayBufferView</a><span class="operator">,</span> <a href="/api-docs/clay-web/js/lib/ArrayBuffer/" class="type-link">js.lib.ArrayBuffer</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#decrypt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` of the clear data corresponding to the encrypted text, algorithm and key given as parameters.

| Name | Type |
|------|------|
| `algorithm` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Dynamic](/api-docs/clay-web/Dynamic/), [String](/api-docs/clay-web/String/)> |
| `key` | [CryptoKey](/api-docs/clay-web/js/html/CryptoKey/) |
| `data` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[js.lib.ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/), [js.lib.ArrayBuffer](/api-docs/clay-web/js/lib/ArrayBuffer/)> |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sign"><code><span class="field-name">sign</span><span class="parenthesis">(</span><span class="arg-name">algorithm</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CryptoKey/" class="type-link">CryptoKey</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/ArrayBufferView/" class="type-link">js.lib.ArrayBufferView</a><span class="operator">,</span> <a href="/api-docs/clay-web/js/lib/ArrayBuffer/" class="type-link">js.lib.ArrayBuffer</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#sign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` of the signature corresponding to the text, algorithm and key given as parameters.

| Name | Type |
|------|------|
| `algorithm` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Dynamic](/api-docs/clay-web/Dynamic/), [String](/api-docs/clay-web/String/)> |
| `key` | [CryptoKey](/api-docs/clay-web/js/html/CryptoKey/) |
| `data` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[js.lib.ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/), [js.lib.ArrayBuffer](/api-docs/clay-web/js/lib/ArrayBuffer/)> |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="verify"><code><span class="field-name">verify</span><span class="parenthesis">(</span><span class="arg-name">algorithm</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CryptoKey/" class="type-link">CryptoKey</a><span class="operator">,</span> <span class="arg-name">signature</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/ArrayBufferView/" class="type-link">js.lib.ArrayBufferView</a><span class="operator">,</span> <a href="/api-docs/clay-web/js/lib/ArrayBuffer/" class="type-link">js.lib.ArrayBuffer</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/ArrayBufferView/" class="type-link">js.lib.ArrayBufferView</a><span class="operator">,</span> <a href="/api-docs/clay-web/js/lib/ArrayBuffer/" class="type-link">js.lib.ArrayBuffer</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#verify"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` of a `Boolean` value indicating if the signature given as parameter matches the text, algorithm and key also given as parameters.

| Name | Type |
|------|------|
| `algorithm` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Dynamic](/api-docs/clay-web/Dynamic/), [String](/api-docs/clay-web/String/)> |
| `key` | [CryptoKey](/api-docs/clay-web/js/html/CryptoKey/) |
| `signature` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[js.lib.ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/), [js.lib.ArrayBuffer](/api-docs/clay-web/js/lib/ArrayBuffer/)> |
| `data` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[js.lib.ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/), [js.lib.ArrayBuffer](/api-docs/clay-web/js/lib/ArrayBuffer/)> |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="digest"><code><span class="field-name">digest</span><span class="parenthesis">(</span><span class="arg-name">algorithm</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/ArrayBufferView/" class="type-link">js.lib.ArrayBufferView</a><span class="operator">,</span> <a href="/api-docs/clay-web/js/lib/ArrayBuffer/" class="type-link">js.lib.ArrayBuffer</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#digest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` of a digest generated from the algorithm and text given as parameters.

| Name | Type |
|------|------|
| `algorithm` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Dynamic](/api-docs/clay-web/Dynamic/), [String](/api-docs/clay-web/String/)> |
| `data` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[js.lib.ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/), [js.lib.ArrayBuffer](/api-docs/clay-web/js/lib/ArrayBuffer/)> |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="generateKey"><code><span class="field-name">generateKey</span><span class="parenthesis">(</span><span class="arg-name">algorithm</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">extractable</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">keyUsages</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#generateKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` of a newly generated `CryptoKey`, for symmetrical algorithms, or a `CryptoKeyPair`, containing two newly generated keys, for asymmetrical algorithm, that matches the algorithm, the usages and the extractability given as parameters.

| Name | Type |
|------|------|
| `algorithm` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `extractable` | [Bool](/api-docs/clay-web/Bool/) |
| `keyUsages` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deriveKey"><code><span class="field-name">deriveKey</span><span class="parenthesis">(</span><span class="arg-name">algorithm</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">baseKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CryptoKey/" class="type-link">CryptoKey</a><span class="operator">,</span> <span class="arg-name">derivedKeyType</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">extractable</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">keyUsages</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#deriveKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` of a newly generated `CryptoKey` derived from a master key and a specific algorithm given as parameters.

| Name | Type |
|------|------|
| `algorithm` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Dynamic](/api-docs/clay-web/Dynamic/), [String](/api-docs/clay-web/String/)> |
| `baseKey` | [CryptoKey](/api-docs/clay-web/js/html/CryptoKey/) |
| `derivedKeyType` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Dynamic](/api-docs/clay-web/Dynamic/), [String](/api-docs/clay-web/String/)> |
| `extractable` | [Bool](/api-docs/clay-web/Bool/) |
| `keyUsages` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deriveBits"><code><span class="field-name">deriveBits</span><span class="parenthesis">(</span><span class="arg-name">algorithm</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">baseKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CryptoKey/" class="type-link">CryptoKey</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#deriveBits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` of a newly generated buffer of pseudo-random bits derived from a master key and a specific algorithm given as parameters.

| Name | Type |
|------|------|
| `algorithm` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `baseKey` | [CryptoKey](/api-docs/clay-web/js/html/CryptoKey/) |
| `length` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="importKey"><code><span class="field-name">importKey</span><span class="parenthesis">(</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">keyData</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">algorithm</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">extractable</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">keyUsages</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#importKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` of a `CryptoKey` corresponding to the format, the algorithm, the raw key data, the usages and the extractability given as parameters.

| Name | Type |
|------|------|
| `format` | [String](/api-docs/clay-web/String/) |
| `keyData` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `algorithm` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `extractable` | [Bool](/api-docs/clay-web/Bool/) |
| `keyUsages` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exportKey"><code><span class="field-name">exportKey</span><span class="parenthesis">(</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CryptoKey/" class="type-link">CryptoKey</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#exportKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` of a buffer containing the key in the format requested.

| Name | Type |
|------|------|
| `format` | [String](/api-docs/clay-web/String/) |
| `key` | [CryptoKey](/api-docs/clay-web/js/html/CryptoKey/) |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="wrapKey"><code><span class="field-name">wrapKey</span><span class="parenthesis">(</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CryptoKey/" class="type-link">CryptoKey</a><span class="operator">,</span> <span class="arg-name">wrappingKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CryptoKey/" class="type-link">CryptoKey</a><span class="operator">,</span> <span class="arg-name">wrapAlgorithm</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#wrapKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` of a wrapped symmetric key for usage (transfer, storage) in insecure environments. The wrapped buffer returned is in the format given in parameters, and contains the key wrapped by the given wrapping key with the given algorithm.

| Name | Type |
|------|------|
| `format` | [String](/api-docs/clay-web/String/) |
| `key` | [CryptoKey](/api-docs/clay-web/js/html/CryptoKey/) |
| `wrappingKey` | [CryptoKey](/api-docs/clay-web/js/html/CryptoKey/) |
| `wrapAlgorithm` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unwrapKey"><code><span class="field-name">unwrapKey</span><span class="parenthesis">(</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">wrappedKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/ArrayBufferView/" class="type-link">js.lib.ArrayBufferView</a><span class="operator">,</span> <a href="/api-docs/clay-web/js/lib/ArrayBuffer/" class="type-link">js.lib.ArrayBuffer</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">unwrappingKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CryptoKey/" class="type-link">CryptoKey</a><span class="operator">,</span> <span class="arg-name">unwrapAlgorithm</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">unwrappedKeyAlgorithm</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">extractable</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">keyUsages</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unwrapKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` of a `CryptoKey` corresponding to the wrapped key given in parameter.

| Name | Type |
|------|------|
| `format` | [String](/api-docs/clay-web/String/) |
| `wrappedKey` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[js.lib.ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/), [js.lib.ArrayBuffer](/api-docs/clay-web/js/lib/ArrayBuffer/)> |
| `unwrappingKey` | [CryptoKey](/api-docs/clay-web/js/html/CryptoKey/) |
| `unwrapAlgorithm` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Dynamic](/api-docs/clay-web/Dynamic/), [String](/api-docs/clay-web/String/)> |
| `unwrappedKeyAlgorithm` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Dynamic](/api-docs/clay-web/Dynamic/), [String](/api-docs/clay-web/String/)> |
| `extractable` | [Bool](/api-docs/clay-web/Bool/) |
| `keyUsages` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

