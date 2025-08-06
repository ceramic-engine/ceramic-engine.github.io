---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ReusableArray
target: Unity
permalink: api-docs/unity/ceramic/ReusableArray/
---

# ReusableArray

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ReusableArray.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ReusableArray</strong> (Class)</div>

A reusable array to use in places that need a temporary array many times.
Changing array size only increases the backing array size but never decreases it.

## Instance Members

<div class="signature field-var no-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">ceramic.ReusableArray.T</span></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| ceramic.ReusableArray.T |

<hr class="field-separator" />

<div class="signature field-method no-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">ceramic.ReusableArray.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/unity/Int/) |
| `value` | ceramic.ReusableArray.T |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `length` | [Int](/api-docs/unity/Int/) |

## Private Members

<div class="signature field-var no-description" id="vector"><code><span class="field-name">vector</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><span class="type-name">ceramic.ReusableArray.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#vector"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

