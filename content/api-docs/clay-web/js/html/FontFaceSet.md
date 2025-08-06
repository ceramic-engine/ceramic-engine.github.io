---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: FontFaceSet
target: Clay (Web)
permalink: api-docs/clay-web/js/html/FontFaceSet/
---

# FontFaceSet

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.FontFaceSet</strong> (extern class)</div>

The `FontFaceSet` interface of the CSS Font Loading API manages the loading of font-faces and querying of their download status.

Documentation [FontFaceSet](https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet></div>


## Instance Members

<div class="signature field-var no-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="onloading"><code><span class="field-name">onloading</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onloading"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `EventListener` called whenever an event of type `loading` is fired, indicating a font-face set has started loading.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onloadingdone"><code><span class="field-name">onloadingdone</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onloadingdone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `EventListener` called whenever an event of type `loadingdone` is fired, indicating that a font face set has finished loading.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onloadingerror"><code><span class="field-name">onloadingerror</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onloadingerror"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `EventListener` called whenever an event of type `loadingerror` is fired, indicating that an error occurred whilst loading a font-face set.

<hr class="field-separator" />

<div class="signature field-var no-description" id="ready"><code><span class="field-name">ready</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ready"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="status"><code><span class="field-name">status</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FontFaceSetLoadStatus/" class="type-link">FontFaceSetLoadStatus</a></code><a class="header-anchor" href="#status"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates the font-face's loading status. It will be one of `'loading'` or `'loaded'`.

<hr class="field-separator" />

<div class="signature field-method has-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">font</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FontFace/" class="type-link">FontFace</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `font` | [FontFace](/api-docs/clay-web/js/html/FontFace/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="has"><code><span class="field-name">has</span><span class="parenthesis">(</span><span class="arg-name">font</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FontFace/" class="type-link">FontFace</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#has"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `font` | [FontFace](/api-docs/clay-web/js/html/FontFace/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="delete"><code><span class="field-name">delete</span><span class="parenthesis">(</span><span class="arg-name">font</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FontFace/" class="type-link">FontFace</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#delete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `font` | [FontFace](/api-docs/clay-web/js/html/FontFace/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="entries"><code><span class="field-name">entries</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FontFaceSetIterator/" class="type-link">FontFaceSetIterator</a></code><a class="header-anchor" href="#entries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [FontFaceSetIterator](/api-docs/clay-web/js/html/FontFaceSetIterator/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="values"><code><span class="field-name">values</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FontFaceSetIterator/" class="type-link">FontFaceSetIterator</a></code><a class="header-anchor" href="#values"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [FontFaceSetIterator](/api-docs/clay-web/js/html/FontFaceSetIterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="forEach"><code><span class="field-name">forEach</span><span class="parenthesis">(</span><span class="arg-name">cb</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thisArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#forEach"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `cb` | Function | |
| `thisArg` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="arg-name">font</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">" "</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/FontFace/" class="type-link">FontFace</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `font` | [String](/api-docs/clay-web/String/) | |
| `text` | [String](/api-docs/clay-web/String/) | `" "` |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Array](/api-docs/clay-web/Array/)<[FontFace](/api-docs/clay-web/js/html/FontFace/)>> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="check"><code><span class="field-name">check</span><span class="parenthesis">(</span><span class="arg-name">font</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">" "</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#check"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `font` | [String](/api-docs/clay-web/String/) | |
| `text` | [String](/api-docs/clay-web/String/) | `" "` |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

