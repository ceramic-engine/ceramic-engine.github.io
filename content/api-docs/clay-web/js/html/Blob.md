---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Blob
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Blob/
---

# Blob

<div class="type-hierarchy"><strong>js.html.Blob</strong> (extern class) → <a href="/api-docs/clay-web/js/html/File/">File</a></div>

A `Blob` object represents a file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a JavaScript-native format. The `File` interface is based on `Blob`, inheriting blob functionality and expanding it to support files on the user's system.

Documentation [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Blob$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Blob></div>


## Instance Members

<div class="signature field-var has-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The size, in bytes, of the data contained in the `Blob` object.

<hr class="field-separator" />

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A string indicating the MIME type of the data contained in the `Blob`. If the type is unknown, this string is empty.

<hr class="field-separator" />

<div class="signature field-method has-description" id="slice"><code><span class="field-name">slice</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">end</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">contentType</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Blob</a></code><a class="header-anchor" href="#slice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new `Blob` object containing the data in the specified range of bytes of the source `Blob`.

| Name | Type | Default |
|------|------|---------|
| `start` | [Int](/api-docs/clay-web/Int/) | *(optional)* |
| `end` | [Int](/api-docs/clay-web/Int/) | *(optional)* |
| `contentType` | [String](/api-docs/clay-web/String/) | *(optional)* |

| Returns |
|---------|
| [Blob](/api-docs/clay-web/js/html/Blob/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">blobParts</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/ArrayBuffer/" class="type-link">js.lib.ArrayBuffer</a><span class="operator">,</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/ArrayBufferView/" class="type-link">js.lib.ArrayBufferView</a><span class="operator">,</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="#" class="type-link">Blob</a><span class="operator">,</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/BlobPropertyBag/" class="type-link">BlobPropertyBag</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `blobParts` | [Array](/api-docs/clay-web/Array/)<[haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[js.lib.ArrayBuffer](/api-docs/clay-web/js/lib/ArrayBuffer/), [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[js.lib.ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/), [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Blob](/api-docs/clay-web/js/html/Blob/), [String](/api-docs/clay-web/String/)>>>> | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[BlobPropertyBag](/api-docs/clay-web/js/html/BlobPropertyBag/)> | *(optional)* |

