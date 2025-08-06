---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: CryptoKey
target: Clay (Web)
permalink: api-docs/clay-web/js/html/CryptoKey/
---

# CryptoKey

<div class="type-hierarchy"><strong>js.html.CryptoKey</strong> (extern class)</div>

The `CryptoKey` interface represents a cryptographic key derived from a specific key algorithm.

Documentation [CryptoKey](https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey></div>


## Instance Members

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an enumerated value representing the type of the key, a secret key (for symmetric algorithm), a public or a private key (for an asymmetric algorithm)

<hr class="field-separator" />

<div class="signature field-var has-description" id="extractable"><code><span class="field-name">extractable</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#extractable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Boolean` indicating if the raw information may be exported to the application or not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="algorithm"><code><span class="field-name">algorithm</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#algorithm"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an opaque object representing a particular cipher the key has to be used with.

<hr class="field-separator" />

<div class="signature field-var has-description" id="usages"><code><span class="field-name">usages</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#usages"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array of enumerated values indicating what the key can be used for.

