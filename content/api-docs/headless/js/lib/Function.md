---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Function
target: Headless
permalink: api-docs/headless/js/lib/Function/
---

# Function

<div class="type-hierarchy"><strong>js.lib.Function</strong> (extern class)</div>

## Instance Members

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Specifies the number of arguments expected by the function.

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the function.

<hr class="field-separator" />

<div class="signature field-method has-description" id="apply"><code><span class="field-name">apply</span><span class="parenthesis">(</span><span class="arg-name">thisArg</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">argsArray</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calls a function and sets its this to the provided value, arguments can be passed as an Array object.

| Name | Type |
|------|------|
| `thisArg` | [Dynamic](/api-docs/headless/Dynamic/) |
| `argsArray` | [Array](/api-docs/headless/Array/)<[Dynamic](/api-docs/headless/Dynamic/)> |

| Returns |
|---------|
| [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="call"><code><span class="field-name">call</span><span class="parenthesis">(</span><span class="arg-name">thisArg</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#call"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calls (executes) a function and sets its this to the provided value, arguments can be passed as they are.

| Name | Type |
|------|------|
| `thisArg` | [Dynamic](/api-docs/headless/Dynamic/) |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

| Returns |
|---------|
| [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bind"><code><span class="field-name">bind</span><span class="parenthesis">(</span><span class="arg-name">thisArg</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Function</a></code><a class="header-anchor" href="#bind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new function which, when called, has its this set to the provided value,
with a given sequence of arguments preceding any provided when the new function was called.

| Name | Type |
|------|------|
| `thisArg` | [Dynamic](/api-docs/headless/Dynamic/) |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

| Returns |
|---------|
| [Function](/api-docs/headless/js/lib/Function/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representing the source code of the function.
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">arg</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">rest</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Function object.

| Name | Type |
|------|------|
| `arg` | [String](/api-docs/headless/String/) |
| `rest` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

