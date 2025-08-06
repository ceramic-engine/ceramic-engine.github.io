---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: CharacterData
target: Clay (Web)
permalink: api-docs/clay-web/js/html/CharacterData/
---

# CharacterData

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <strong>js.html.CharacterData</strong> (extern class) → <a href="/api-docs/clay-web/js/html/Comment/">Comment</a>, <a href="/api-docs/clay-web/js/html/ProcessingInstruction/">ProcessingInstruction</a>, <a href="/api-docs/clay-web/js/html/Text/">Text</a></div>

The `CharacterData` abstract interface represents a `Node` object that contains characters. This is an abstract interface, meaning there aren't any object of type `CharacterData`: it is implemented by other interfaces, like `Text`, '. In XML, the character sequence '--' cannot be used within a comment.">`Comment`, or `ProcessingInstruction` which aren't abstract.

Documentation [CharacterData](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/CharacterData></div>


## Instance Members

<div class="signature field-var has-description" id="data"><code><span class="field-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#data"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the textual data contained in this object.

<hr class="field-separator" />

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `unsigned long` representing the size of the string contained in `CharacterData.data`.

<hr class="field-separator" />

<div class="signature field-var no-description" id="previousElementSibling"><code><span class="field-name">previousElementSibling</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#previousElementSibling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="nextElementSibling"><code><span class="field-name">nextElementSibling</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#nextElementSibling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="substringData"><code><span class="field-name">substringData</span><span class="parenthesis">(</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#substringData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` containing the part of `CharacterData.data` of the specified length and starting at the specified offset.

| Name | Type |
|------|------|
| `offset` | [Int](/api-docs/clay-web/Int/) |
| `count` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="appendData"><code><span class="field-name">appendData</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#appendData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Appends the given `DOMString` to the `CharacterData.data` string; when this method returns, `data` contains the concatenated `DOMString`.

| Name | Type |
|------|------|
| `data` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="insertData"><code><span class="field-name">insertData</span><span class="parenthesis">(</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#insertData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Inserts the specified characters, at the specified offset, in the `CharacterData.data` string; when this method returns, `data` contains the modified `DOMString`.

| Name | Type |
|------|------|
| `offset` | [Int](/api-docs/clay-web/Int/) |
| `data` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteData"><code><span class="field-name">deleteData</span><span class="parenthesis">(</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the specified amount of characters, starting at the specified offset, from the `CharacterData.data` string; when this method returns, `data` contains the shortened `DOMString`.

| Name | Type |
|------|------|
| `offset` | [Int](/api-docs/clay-web/Int/) |
| `count` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="replaceData"><code><span class="field-name">replaceData</span><span class="parenthesis">(</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#replaceData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Replaces the specified amount of characters, starting at the specified offset, with the specified `DOMString`; when this method returns, `data` contains the modified `DOMString`.

| Name | Type |
|------|------|
| `offset` | [Int](/api-docs/clay-web/Int/) |
| `count` | [Int](/api-docs/clay-web/Int/) |
| `data` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="before"><code><span class="field-name">before</span><span class="parenthesis">(</span><span class="arg-name">nodes</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#before"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `nodes` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="after"><code><span class="field-name">after</span><span class="parenthesis">(</span><span class="arg-name">nodes</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#after"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `nodes` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="replaceWith"><code><span class="field-name">replaceWith</span><span class="parenthesis">(</span><span class="arg-name">nodes</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#replaceWith"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `nodes` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

