---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk-haxe-api
title: RuleRandom
target: Clay (Web)
permalink: api-docs/clay-web/ldtk/rules/RuleRandom/
---

# RuleRandom

<div class="type-hierarchy"><strong>ldtk.rules.RuleRandom</strong> (Class)</div>

Deterministic, target independent random helpers for the rule engine.
All arithmetic is done in 32 bits (`haxe.Int32`) so that JS, C++, C# and every other target produce the same values.

## Static Members

<div class="signature field-method has-description" id="randSeedCoords"><code><span class="field-name">randSeedCoords</span><span class="parenthesis">(</span><span class="arg-name">seed</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">max</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#randSeedCoords"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Seeded random for a x/y coord. Result range: [0, max) for max>0, always 0 for max<=0.

| Name | Type |
|------|------|
| `seed` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Int](/api-docs/clay-web/Int/) |
| `y` | [Int](/api-docs/clay-web/Int/) |
| `max` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deriveLayerSeed"><code><span class="field-name">deriveLayerSeed</span><span class="parenthesis">(</span><span class="arg-name">rootSeed</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">layerDefUid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#deriveLayerSeed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Derive a per-layer random seed from a level root seed

| Name | Type |
|------|------|
| `rootSeed` | [Int](/api-docs/clay-web/Int/) |
| `layerDefUid` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

