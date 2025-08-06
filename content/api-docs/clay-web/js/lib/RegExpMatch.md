---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: RegExpMatch
target: Clay (Web)
permalink: api-docs/clay-web/js/lib/RegExpMatch/
---

# RegExpMatch

<div class="type-hierarchy"><a href="/api-docs/clay-web/Array/">Array</a> → <strong>js.lib.RegExpMatch</strong> (extern class)</div>

A return value of the `RegExp.exec` method.

## Instance Members

<div class="signature field-var has-description" id="index"><code><span class="field-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The index of the search at which the result was found.

<hr class="field-separator" />

<div class="signature field-var has-description" id="input"><code><span class="field-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#input"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A copy of the search string.

<hr class="field-separator" />

<div class="signature field-var has-description" id="groups"><code><span class="field-name">groups</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#groups"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Named capturing groups or undefined if no named capturing groups were defined.
See [Groups and Ranges](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges) for more information.

Note: Not all browsers support this feature; refer to the [compatibility table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Browser_compatibility).

