---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: AnimationEffect
target: Headless
permalink: api-docs/headless/js/html/AnimationEffect/
---

# AnimationEffect

<div class="type-hierarchy"><strong>js.html.AnimationEffect</strong> (extern class)</div>

The `AnimationEffect` interface of the Web Animations API defines current and future animation effects like `KeyframeEffect`, which can be passed to `Animation` objects for playing, and `KeyframeEffectReadOnly` (which is used by CSS Animations and Transitions).

Documentation [AnimationEffect](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect></div>


## Instance Members

<div class="signature field-method no-description" id="getTiming"><code><span class="field-name">getTiming</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/html/EffectTiming/" class="type-link">EffectTiming</a></code><a class="header-anchor" href="#getTiming"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [EffectTiming](/api-docs/headless/js/html/EffectTiming/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getComputedTiming"><code><span class="field-name">getComputedTiming</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/html/ComputedEffectTiming/" class="type-link">ComputedEffectTiming</a></code><a class="header-anchor" href="#getComputedTiming"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ComputedEffectTiming](/api-docs/headless/js/html/ComputedEffectTiming/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="updateTiming"><code><span class="field-name">updateTiming</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">timing</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/html/OptionalEffectTiming/" class="type-link">OptionalEffectTiming</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateTiming"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `timing` | [Null](/api-docs/headless/Null/)<[OptionalEffectTiming](/api-docs/headless/js/html/OptionalEffectTiming/)> | *(optional)* |

