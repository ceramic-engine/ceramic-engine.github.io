---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ConvertArray
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/ConvertArray/
---

# ConvertArray

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ConvertArray.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ConvertArray</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/ceramic/ConvertField/">ConvertField</a></div>

Converter for array fields in fragments and data serialization.

This converter handles array types by creating deep copies to ensure
data integrity between the original and converted values. Used by the
fragment system to convert between serialized array data and runtime
array instances.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/ConvertField/">ConvertField</a>, <a href="/api-docs/clay-web/ceramic/Fragment/">Fragment</a></div>


## Instance Members

<div class="signature field-method has-description" id="basicToField"><code><span class="field-name">basicToField</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">basic</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">ceramic.ConvertArray.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#basicToField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert a basic array to a field array by creating a deep copy.

This method ensures that the field instance has its own array
that won't be affected by changes to the original basic array.



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/clay-web/ceramic/Entity/) | The entity that owns this field  |
| `field` | [String](/api-docs/clay-web/String/) | The name of the field being converted  |
| `assets` | [Assets](/api-docs/clay-web/ceramic/Assets/) | Assets instance for resource loading (unused for arrays)  |
| `basic` | [Array](/api-docs/clay-web/Array/)<ceramic.ConvertArray.T> | The source array to convert  |
| `done` | Function | Callback invoked with the converted array copy |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fieldToBasic"><code><span class="field-name">fieldToBasic</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">ceramic.ConvertArray.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">ceramic.ConvertArray.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#fieldToBasic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert a field array to a basic array by creating a deep copy.

This method ensures that the serialized data has its own array
that won't be affected by changes to the field array.



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/clay-web/ceramic/Entity/) | The entity that owns this field  |
| `field` | [String](/api-docs/clay-web/String/) | The name of the field being converted  |
| `value` | [Array](/api-docs/clay-web/Array/)<ceramic.ConvertArray.T> | The field array to convert  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<ceramic.ConvertArray.T> | A new array containing copies of all elements |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new array converter instance.

