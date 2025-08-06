---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: JsonPrinter
target: Unity
permalink: api-docs/unity/haxe/format/JsonPrinter/
---

# JsonPrinter

<div class="type-hierarchy"><strong>haxe.format.JsonPrinter</strong> (Class)</div>

An implementation of JSON printer in Haxe.

This class is used by `haxe.Json` when native JSON implementation
is not available.

<div class="see"><strong>See:</strong> https://haxe.org/manual/std-Json-encoding.html</div>


## Static Members

<div class="signature field-method has-description" id="print"><code><span class="field-name">print</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">replacer</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">space</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#print"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Encodes `o`'s value and returns the resulting JSON string.

If `replacer` is given and is not null, it is used to retrieve
actual object to be encoded. The `replacer` function takes two parameters,
the key and the value being encoded. Initial key value is an empty string.

If `space` is given and is not null, the result will be pretty-printed.
Successive levels will be indented by this string.

| Name | Type | Default |
|------|------|---------|
| `o` | [Dynamic](/api-docs/unity/Dynamic/) | |
| `replacer` | Function | *(optional)* |
| `space` | [String](/api-docs/unity/String/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Private Members

<div class="signature field-var no-description" id="buf"><code><span class="field-name">buf</span><span class="operator">:</span> <a href="/api-docs/unity/StringBuf/" class="type-link">StringBuf</a></code><a class="header-anchor" href="#buf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="indent"><code><span class="field-name">indent</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#indent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pretty"><code><span class="field-name">pretty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pretty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="nind"><code><span class="field-name">nind</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="replacer"><code><span class="field-name">replacer</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#replacer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Dynamic](/api-docs/unity/Dynamic/) |
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ipad"><code><span class="field-name">ipad</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ipad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="newl"><code><span class="field-name">newl</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#newl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="write"><code><span class="field-name">write</span><span class="parenthesis">(</span><span class="arg-name">k</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#write"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `k` | [Dynamic](/api-docs/unity/Dynamic/) |
| `v` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addChar"><code><span class="field-name">addChar</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addChar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="classString"><code><span class="field-name">classString</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#classString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="objString"><code><span class="field-name">objString</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#objString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fieldsString"><code><span class="field-name">fieldsString</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">fields</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fieldsString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [Dynamic](/api-docs/unity/Dynamic/) |
| `fields` | [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="quote"><code><span class="field-name">quote</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#quote"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">replacer</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">space</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `replacer` | Function |
| `space` | [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

