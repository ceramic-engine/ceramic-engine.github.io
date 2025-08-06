---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Rtti
target: Clay (Web)
permalink: api-docs/clay-web/haxe/rtti/Rtti/
---

# Rtti

<div class="type-hierarchy"><strong>haxe.rtti.Rtti</strong> (Class)</div>

Rtti is a helper class which supplements the `@:rtti` metadata.

<div class="see"><strong>See:</strong> <https://haxe.org/manual/cr-rtti.html></div>


## Static Members

<div class="signature field-method has-description" id="getRtti"><code><span class="field-name">getRtti</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-web/Class/" class="type-link">Class</a><span class="operator">&lt;</span><span class="type-name">getRtti.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/rtti/Classdef/" class="type-link">Classdef</a></code><a class="header-anchor" href="#getRtti"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `haxe.rtti.CType.Classdef` corresponding to class `c`.

If `c` has no runtime type information, e.g. because no `@:rtti` was
added, an exception of type `String` is thrown.

If `c` is `null`, the result is unspecified.

| Name | Type |
|------|------|
| `c` | [Class](/api-docs/clay-web/Class/)<getRtti.T> |

| Returns |
|---------|
| [Classdef](/api-docs/clay-web/haxe/rtti/Classdef/) |

