---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: NumberFormat
target: Clay (Web)
permalink: api-docs/clay-web/js/lib/intl/NumberFormat/
---

# NumberFormat

<div class="type-hierarchy"><strong>js.lib.intl.NumberFormat</strong> (extern class)</div>

The `NumberFormat` object is a constructor for objects that enable language sensitive number formatting.

Documentation [NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

## Static Members

<div class="signature field-method has-description" id="supportedLocalesOf"><code><span class="field-name">supportedLocalesOf</span><span class="parenthesis">(</span><span class="arg-name">locales</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/intl/NumberFormatSupportedLocalesOfOptions/" class="type-link">NumberFormatSupportedLocalesOfOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#supportedLocalesOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array containing those of the provided locales that are supported
without having to fall back to the runtime's default locale.

| Name | Type | Default |
|------|------|---------|
| `locales` | [String](/api-docs/clay-web/String/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[NumberFormatSupportedLocalesOfOptions](/api-docs/clay-web/js/lib/intl/NumberFormatSupportedLocalesOfOptions/)> | *(optional)* |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> |

## Instance Members

<div class="signature field-method has-description" id="format"><code><span class="field-name">format</span><span class="parenthesis">(</span><span class="arg-name">number</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#format"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Getter function that formats a number according to the locale
and formatting options of this `NumberFormat` object.

| Name | Type |
|------|------|
| `number` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="formatToParts"><code><span class="field-name">formatToParts</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">number</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/intl/NumberFormatPart/" class="type-link">NumberFormatPart</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#formatToParts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `Array` of objects representing the number string in parts
that can be used for custom locale-aware formatting.

| Name | Type | Default |
|------|------|---------|
| `number` | [Float](/api-docs/clay-web/Float/) | *(optional)* |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[NumberFormatPart](/api-docs/clay-web/js/lib/intl/NumberFormatPart/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resolvedOptions"><code><span class="field-name">resolvedOptions</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/intl/NumberFormatResolvedOption/" class="type-link">NumberFormatResolvedOption</a></code><a class="header-anchor" href="#resolvedOptions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new object with properties reflecting the locale and collation options
computed during initialization of the object.
| Returns |
|---------|
| [NumberFormatResolvedOption](/api-docs/clay-web/js/lib/intl/NumberFormatResolvedOption/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">locales</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/intl/NumberFormatOptions/" class="type-link">NumberFormatOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `locales` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[NumberFormatOptions](/api-docs/clay-web/js/lib/intl/NumberFormatOptions/)> | *(optional)* |

