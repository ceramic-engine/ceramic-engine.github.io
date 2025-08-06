---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Log
target: Clay (Web)
permalink: api-docs/clay-web/haxe/Log/
---

# Log

<div class="type-hierarchy"><strong>haxe.Log</strong> (Class)</div>

Log primarily provides the `trace()` method, which is invoked upon a call to
`trace()` in Haxe code.

## Static Members

<div class="signature field-method has-description" id="formatOutput"><code><span class="field-name">formatOutput</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">infos</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/PosInfos/" class="type-link">PosInfos</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#formatOutput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Format the output of `trace` before printing it.

| Name | Type |
|------|------|
| `v` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `infos` | [PosInfos](/api-docs/clay-web/haxe/PosInfos/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="trace"><code><span class="field-name">trace</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">infos</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/PosInfos/" class="type-link">PosInfos</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#trace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Outputs `v` in a platform-dependent way.

The second parameter `infos` is injected by the compiler and contains
information about the position where the `trace()` call was made.

This method can be rebound to a custom function:

var oldTrace = haxe.Log.trace; // store old function
haxe.Log.trace = function(v, ?infos) {
// handle trace
}
...
haxe.Log.trace = oldTrace;

If it is bound to null, subsequent calls to `trace()` will cause an
exception.

| Name | Type | Default |
|------|------|---------|
| `v` | [Dynamic](/api-docs/clay-web/Dynamic/) | |
| `infos` | [PosInfos](/api-docs/clay-web/haxe/PosInfos/) | *(optional)* |

