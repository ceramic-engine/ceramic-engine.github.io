---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: CSSStyleSheet
target: Clay (Web)
permalink: api-docs/clay-web/js/html/CSSStyleSheet/
---

# CSSStyleSheet

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/StyleSheet/">StyleSheet</a> → <strong>js.html.CSSStyleSheet</strong> (extern class)</div>

The `CSSStyleSheet` interface represents a single CSS style sheet. It inherits properties and methods from its parent, `StyleSheet`.

Documentation [CSSStyleSheet](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet></div>


## Instance Members

<div class="signature field-var has-description" id="ownerRule"><code><span class="field-name">ownerRule</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CSSRule/" class="type-link">CSSRule</a></code><a class="header-anchor" href="#ownerRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this style sheet is imported into the document using an `@import` rule, the `ownerRule` property will return that `CSSImportRule`, otherwise it returns `null`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="cssRules"><code><span class="field-name">cssRules</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CSSRuleList/" class="type-link">CSSRuleList</a></code><a class="header-anchor" href="#cssRules"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a live `CSSRuleList`, listing the `CSSRule` objects in the style sheet.

This is normally used to access individual rules like this:

`   styleSheet.cssRules[i] // where i = 0..cssRules.length-1`

To add or remove items in `cssRules`, use the `CSSStyleSheet`'s `deleteRule()` and `insertRule()` methods, described below.

<hr class="field-separator" />

<div class="signature field-method has-description" id="insertRule"><code><span class="field-name">insertRule</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#insertRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Inserts a new rule at the specified position in the style sheet, given the textual representation of the rule.

| Name | Type | Default |
|------|------|---------|
| `rule` | [String](/api-docs/clay-web/String/) | |
| `index` | [Int](/api-docs/clay-web/Int/) | `0` |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteRule"><code><span class="field-name">deleteRule</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes a rule at the specified position from the style sheet.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

