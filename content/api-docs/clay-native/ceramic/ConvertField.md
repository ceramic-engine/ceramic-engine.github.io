---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ConvertField
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/ConvertField/
---

# ConvertField

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ConvertField.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ConvertField</strong> (Interface) → <a href="/api-docs/clay-native/ceramic/ConvertArray/">ConvertArray</a>, <a href="/api-docs/clay-native/ceramic/ConvertColor/">ConvertColor</a>, <a href="/api-docs/clay-native/ceramic/ConvertComponentMap/">ConvertComponentMap</a>, <a href="/api-docs/clay-native/ceramic/ConvertFont/">ConvertFont</a>, <a href="/api-docs/clay-native/ceramic/ConvertFragmentData/">ConvertFragmentData</a>, <a href="/api-docs/clay-native/ceramic/ConvertIntBoolMap/">ConvertIntBoolMap</a>, <a href="/api-docs/clay-native/ceramic/ConvertMap/">ConvertMap</a>, <a href="/api-docs/clay-native/ceramic/ConvertSpineData/">ConvertSpineData</a>, <a href="/api-docs/clay-native/ceramic/ConvertSpriteSheet/">ConvertSpriteSheet</a>, <a href="/api-docs/clay-native/ceramic/ConvertTexture/">ConvertTexture</a>, <a href="/api-docs/clay-native/ceramic/ConvertTilemapData/">ConvertTilemapData</a></div>

Interface to convert basic type `T` to field type `U` and vice versa.

## Instance Members

<div class="signature field-method has-description" id="basicToField"><code><span class="field-name">basicToField</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">basic</span><span class="operator">:</span> <span class="type-name">ceramic.ConvertField.T</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#basicToField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get field value from basic type. As this may require loading assets,
A usable `Assets` instance must be provided and the result will only be
provided asynchronously by calling `done` callback.

| Name | Type |
|------|------|
| `instance` | [Entity](/api-docs/clay-native/ceramic/Entity/) |
| `field` | [String](/api-docs/clay-native/String/) |
| `assets` | [Assets](/api-docs/clay-native/ceramic/Assets/) |
| `basic` | ceramic.ConvertField.T |
| `done` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fieldToBasic"><code><span class="field-name">fieldToBasic</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">ceramic.ConvertField.U</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">ceramic.ConvertField.T</span></code><a class="header-anchor" href="#fieldToBasic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a basic type from the field value.

| Name | Type |
|------|------|
| `instance` | [Entity](/api-docs/clay-native/ceramic/Entity/) |
| `field` | [String](/api-docs/clay-native/String/) |
| `value` | ceramic.ConvertField.U |

| Returns |
|---------|
| ceramic.ConvertField.T |

