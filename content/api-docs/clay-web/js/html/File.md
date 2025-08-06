---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: File
target: Clay (Web)
permalink: api-docs/clay-web/js/html/File/
---

# File

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/Blob/">Blob</a> → <strong>js.html.File</strong> (extern class)</div>

The `File` interface provides information about files and allows JavaScript in a web page to access their content.

Documentation [File](https://developer.mozilla.org/en-US/docs/Web/API/File) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/File$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/File></div>


## Instance Members

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the name of the file referenced by the `File` object.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lastModified"><code><span class="field-name">lastModified</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lastModified"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the last modified time of the file, in millisecond since the UNIX epoch (January 1st, 1970 at Midnight).

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">fileBits</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/ArrayBufferView/" class="type-link">js.lib.ArrayBufferView</a><span class="operator">,</span> <a href="/api-docs/clay-web/js/lib/ArrayBuffer/" class="type-link">js.lib.ArrayBuffer</a><span class="operator">&gt;</span><span class="operator">,</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Blob/" class="type-link">Blob</a><span class="operator">,</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">fileName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/FilePropertyBag/" class="type-link">FilePropertyBag</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `fileBits` | [Array](/api-docs/clay-web/Array/)<[haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[js.lib.ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/), [js.lib.ArrayBuffer](/api-docs/clay-web/js/lib/ArrayBuffer/)>, [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Blob](/api-docs/clay-web/js/html/Blob/), [String](/api-docs/clay-web/String/)>>> | |
| `fileName` | [String](/api-docs/clay-web/String/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[FilePropertyBag](/api-docs/clay-web/js/html/FilePropertyBag/)> | *(optional)* |

