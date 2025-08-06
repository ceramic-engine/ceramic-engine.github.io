---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ConvertField
target: Headless
permalink: api-docs/headless/ceramic/ConvertField/
---

# ConvertField

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ConvertField.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ConvertField</strong> (Interface) → <a href="/api-docs/headless/ceramic/ConvertArray/">ConvertArray</a>, <a href="/api-docs/headless/ceramic/ConvertColor/">ConvertColor</a>, <a href="/api-docs/headless/ceramic/ConvertComponentMap/">ConvertComponentMap</a>, <a href="/api-docs/headless/ceramic/ConvertFont/">ConvertFont</a>, <a href="/api-docs/headless/ceramic/ConvertFragmentData/">ConvertFragmentData</a>, <a href="/api-docs/headless/ceramic/ConvertIntBoolMap/">ConvertIntBoolMap</a>, <a href="/api-docs/headless/ceramic/ConvertMap/">ConvertMap</a>, <a href="/api-docs/headless/ceramic/ConvertSpineData/">ConvertSpineData</a>, <a href="/api-docs/headless/ceramic/ConvertSpriteSheet/">ConvertSpriteSheet</a>, <a href="/api-docs/headless/ceramic/ConvertTexture/">ConvertTexture</a>, <a href="/api-docs/headless/ceramic/ConvertTilemapData/">ConvertTilemapData</a></div>

Interface to convert basic type `T` to field type `U` and vice versa.

## Instance Members

<div class="signature field-method has-description" id="basicToField"><code><span class="field-name">basicToField</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">basic</span><span class="operator">:</span> <span class="type-name">ceramic.ConvertField.T</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#basicToField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get field value from basic type. As this may require loading assets,
A usable `Assets` instance must be provided and the result will only be
provided asynchronously by calling `done` callback.

| Name | Type |
|------|------|
| `instance` | [Entity](/api-docs/headless/ceramic/Entity/) |
| `field` | [String](/api-docs/headless/String/) |
| `assets` | [Assets](/api-docs/headless/ceramic/Assets/) |
| `basic` | ceramic.ConvertField.T |
| `done` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fieldToBasic"><code><span class="field-name">fieldToBasic</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">ceramic.ConvertField.U</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">ceramic.ConvertField.T</span></code><a class="header-anchor" href="#fieldToBasic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a basic type from the field value.

| Name | Type |
|------|------|
| `instance` | [Entity](/api-docs/headless/ceramic/Entity/) |
| `field` | [String](/api-docs/headless/String/) |
| `value` | ceramic.ConvertField.U |

| Returns |
|---------|
| ceramic.ConvertField.T |

