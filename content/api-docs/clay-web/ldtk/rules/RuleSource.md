---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk-haxe-api
title: RuleSource
target: Clay (Web)
permalink: api-docs/clay-web/ldtk/rules/RuleSource/
---

# RuleSource

<div class="type-hierarchy"><strong>ldtk.rules.RuleSource</strong> (Interface) → <a href="/api-docs/clay-web/ldtk/rules/ArrayRuleSource/">ArrayRuleSource</a></div>

Read access to the IntGrid layer a rule pattern is matched against.
Implemented by the LDtk editor layer instance and by `ArrayRuleSource`.

## Instance Members

<div class="signature field-method no-description" id="getWidth"><code><span class="field-name">getWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getHeight"><code><span class="field-name">getHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getIntGrid"><code><span class="field-name">getIntGrid</span><span class="parenthesis">(</span><span class="arg-name">cx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cy</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getIntGrid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

IntGrid value at given coord (0 = empty). Only called with in-bounds coords.

| Name | Type |
|------|------|
| `cx` | [Int](/api-docs/clay-web/Int/) |
| `cy` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getGroupUidOfValue"><code><span class="field-name">getGroupUidOfValue</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getGroupUidOfValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

IntGrid group uid of given IntGrid value, or -1 if the value is unknown or 0

| Name | Type |
|------|------|
| `v` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="containsIntGridValueOrGroup"><code><span class="field-name">containsIntGridValueOrGroup</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#containsIntGridValueOrGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prefilter: TRUE if given IntGrid value (or group rule value, see RuleConst) exists anywhere in the layer.
May over-approximate (return TRUE when unsure) but must never under-approximate.

| Name | Type |
|------|------|
| `v` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hasIntGridValueInArea"><code><span class="field-name">hasIntGridValueInArea</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cy</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasIntGridValueInArea"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prefilter: TRUE if given IntGrid value (or group rule value) exists in the `RuleConst.AREA_SIZE` square area containing given coord.
Same over-approximation rule as above. Coords may be out of bounds.

| Name | Type |
|------|------|
| `v` | [Int](/api-docs/clay-web/Int/) |
| `cx` | [Int](/api-docs/clay-web/Int/) |
| `cy` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

