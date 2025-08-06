---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: TmxObjectGroup
target: Unity
permalink: api-docs/unity/format/tmx/TmxObjectGroup/
---

# TmxObjectGroup

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Data.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/format/tmx/TmxBaseLayer/">TmxBaseLayer</a> → <strong>format.tmx.TmxObjectGroup</strong> (Class)</div>

Layer representing a group of objects.

## Instance Members

<div class="signature field-var has-description" id="color"><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color used to display the objects in this group.

<hr class="field-separator" />

<div class="signature field-var has-description" id="drawOrder"><code><span class="field-name">drawOrder</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#drawOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the objects are drawn according to the order of appearance ("index") or sorted by their y-coordinate ("topdown"). Defaults to "topdown".

<hr class="field-separator" />

<div class="signature field-var has-description" id="objects"><code><span class="field-name">objects</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxObject/" class="type-link">TmxObject</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#objects"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of all objects.

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">drawOrder</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">objects</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxObject/" class="type-link">TmxObject</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">visible</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">properties</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxProperties/" class="type-link">TmxProperties</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `drawOrder` | Anonymous |
| `objects` | [Array](/api-docs/unity/Array/)<[TmxObject](/api-docs/unity/format/tmx/TmxObject/)> |
| `color` | [Null](/api-docs/unity/Null/)<[Int](/api-docs/unity/Int/)> |
| `id` | [Int](/api-docs/unity/Int/) |
| `name` | [String](/api-docs/unity/String/) |
| `x` | [Null](/api-docs/unity/Null/)<[Float](/api-docs/unity/Float/)> |
| `y` | [Null](/api-docs/unity/Null/)<[Float](/api-docs/unity/Float/)> |
| `offsetX` | [Null](/api-docs/unity/Null/)<[Int](/api-docs/unity/Int/)> |
| `offsetY` | [Null](/api-docs/unity/Null/)<[Int](/api-docs/unity/Int/)> |
| `width` | [Null](/api-docs/unity/Null/)<[Int](/api-docs/unity/Int/)> |
| `height` | [Null](/api-docs/unity/Null/)<[Int](/api-docs/unity/Int/)> |
| `opacity` | [Null](/api-docs/unity/Null/)<[Float](/api-docs/unity/Float/)> |
| `visible` | [Bool](/api-docs/unity/Bool/) |
| `properties` | [TmxProperties](/api-docs/unity/format/tmx/TmxProperties/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

