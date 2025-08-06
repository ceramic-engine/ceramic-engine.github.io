---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: PosException
target: Clay (Web)
permalink: api-docs/clay-web/haxe/exceptions/PosException/
---

# PosException

<div class="type-hierarchy"><a href="/api-docs/clay-web/haxe/_Exception/NativeException/">haxe._Exception.NativeException</a> → <a href="/api-docs/clay-web/haxe/Exception/">haxe.Exception</a> → <strong>haxe.exceptions.PosException</strong> (Class) → <a href="/api-docs/clay-web/haxe/exceptions/NotImplementedException/">NotImplementedException</a></div>

An exception that carry position information of a place where it was created.

## Instance Members

<div class="signature field-var has-description" id="posInfos"><code><span class="field-name">posInfos</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/PosInfos/" class="type-link">haxe.PosInfos</a></code><a class="header-anchor" href="#posInfos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Position where this exception was created.

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns exception message.
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Exception/" class="type-link">haxe.Exception</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/PosInfos/" class="type-link">haxe.PosInfos</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `message` | [String](/api-docs/clay-web/String/) | |
| `previous` | [haxe.Exception](/api-docs/clay-web/haxe/Exception/) | *(optional)* |
| `pos` | [haxe.PosInfos](/api-docs/clay-web/haxe/PosInfos/) | *(optional)* |

