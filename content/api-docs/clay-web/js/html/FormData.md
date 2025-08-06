---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: FormData
target: Clay (Web)
permalink: api-docs/clay-web/js/html/FormData/
---

# FormData

<div class="type-hierarchy"><strong>js.html.FormData</strong> (extern class)</div>

The `FormData` interface provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the `XMLHttpRequest.send()` method. It uses the same format a form would use if the encoding type were set to `"multipart/form-data"`.

Documentation [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/FormData$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/FormData></div>


## Instance Members

<div class="signature field-method has-description" id="append"><code><span class="field-name">append</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#append"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Appends a new value onto an existing key inside a `FormData` object, or adds the key if it does not already exist.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |
| `value` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="delete"><code><span class="field-name">delete</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#delete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes a key/value pair from a `FormData` object.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Blob/" class="type-link">Blob</a><span class="operator">,</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Directory/" class="type-link">Directory</a><span class="operator">,</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the first value associated with a given key from within a `FormData` object.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Blob](/api-docs/clay-web/js/html/Blob/), [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Directory](/api-docs/clay-web/js/html/Directory/), [String](/api-docs/clay-web/String/)>> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAll"><code><span class="field-name">getAll</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Blob/" class="type-link">Blob</a><span class="operator">,</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Directory/" class="type-link">Directory</a><span class="operator">,</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#getAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array of all the values associated with a given key from within a `FormData`.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Blob](/api-docs/clay-web/js/html/Blob/), [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Directory](/api-docs/clay-web/js/html/Directory/), [String](/api-docs/clay-web/String/)>>> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="has"><code><span class="field-name">has</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#has"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a boolean stating whether a `FormData` object contains a certain key/value pair.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a new value for an existing key inside a `FormData `object, or adds the key/value if it does not already exist.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |
| `value` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="entries"><code><span class="field-name">entries</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FormDataIterator/" class="type-link">FormDataIterator</a></code><a class="header-anchor" href="#entries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `Iteration_protocols` allowing to go through all key/value pairs contained in this object.
| Returns |
|---------|
| [FormDataIterator](/api-docs/clay-web/js/html/FormDataIterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FormDataIterator/" class="type-link">FormDataIterator</a></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `Iteration_protocols` allowing to go through all keys of the key/value pairs contained in this object.
| Returns |
|---------|
| [FormDataIterator](/api-docs/clay-web/js/html/FormDataIterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="values"><code><span class="field-name">values</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FormDataIterator/" class="type-link">FormDataIterator</a></code><a class="header-anchor" href="#values"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `Iteration_protocols` allowing to go through all values of the key/value pairs contained in this object.
| Returns |
|---------|
| [FormDataIterator](/api-docs/clay-web/js/html/FormDataIterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="forEach"><code><span class="field-name">forEach</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thisArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#forEach"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `callback` | [Dynamic](/api-docs/clay-web/Dynamic/) | |
| `thisArg` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">form</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FormElement/" class="type-link">FormElement</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `form` | [FormElement](/api-docs/clay-web/js/html/FormElement/) | *(optional)* |

