---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Log
target: Clay (Native)
permalink: api-docs/clay-native/haxe/Log/
---

# Log

<div class="type-hierarchy"><strong>haxe.Log</strong> (Class)</div>

Log primarily provides the `trace()` method, which is invoked upon a call to
`trace()` in Haxe code.

## Static Members

<div class="signature field-method has-description" id="trace"><code><span class="field-name">trace</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">infos</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/PosInfos/" class="type-link">PosInfos</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#trace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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
| `v` | [Dynamic](/api-docs/clay-native/Dynamic/) | |
| `infos` | [PosInfos](/api-docs/clay-native/haxe/PosInfos/) | *(optional)* |

## Private Members

<div class="signature field-method no-description" id="nativeTrace"><code><span class="field-name">nativeTrace</span><span class="parenthesis">(</span><span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">posInfo</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#nativeTrace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `message` | [String](/api-docs/clay-native/String/) |
| `posInfo` | [Dynamic](/api-docs/clay-native/Dynamic/) |

