---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: DOMTokenList
target: Clay (Web)
permalink: api-docs/clay-web/js/html/DOMTokenList/
---

# DOMTokenList

<div class="type-hierarchy"><strong>js.html.DOMTokenList</strong> (extern class)</div>

The `DOMTokenList` interface represents a set of space-separated tokens. Such a set is returned by `Element.classList`, `HTMLLinkElement.relList`, `HTMLAnchorElement.relList`, `HTMLAreaElement.relList`, `HTMLIframeElement.sandbox`, or `HTMLOutputElement.htmlFor`. It is indexed beginning with `0` as with JavaScript `Array` objects. `DOMTokenList` is always case-sensitive.

Documentation [DOMTokenList](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList></div>


## Instance Members

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an `integer` representing the number of objects stored in the object.

<hr class="field-separator" />

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The value of the list as a `DOMString`.

<hr class="field-separator" />

<div class="signature field-method has-description" id="item"><code><span class="field-name">item</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#item"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an item in the list by its index (returns undefined if the number is greater than or equal to the length of the list).

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="contains"><code><span class="field-name">contains</span><span class="parenthesis">(</span><span class="arg-name">token</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#contains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if the list contains the given token, otherwise `false`.

| Name | Type |
|------|------|
| `token` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">tokens</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds the given token to the list.

| Name | Type |
|------|------|
| `tokens` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">tokens</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the specified token from the list.

| Name | Type |
|------|------|
| `tokens` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="replace"><code><span class="field-name">replace</span><span class="parenthesis">(</span><span class="arg-name">token</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">newToken</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#replace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Replaces an existing token with a new token.

| Name | Type |
|------|------|
| `token` | [String](/api-docs/clay-web/String/) |
| `newToken` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toggle"><code><span class="field-name">toggle</span><span class="parenthesis">(</span><span class="arg-name">token</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">force</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#toggle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a given token from the list and returns false. If token doesn't exist it's added and the function returns `true`.

| Name | Type | Default |
|------|------|---------|
| `token` | [String](/api-docs/clay-web/String/) | |
| `force` | [Bool](/api-docs/clay-web/Bool/) | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="supports"><code><span class="field-name">supports</span><span class="parenthesis">(</span><span class="arg-name">token</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#supports"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if a given token is in the associated attribute's supported tokens.

| Name | Type |
|------|------|
| `token` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

