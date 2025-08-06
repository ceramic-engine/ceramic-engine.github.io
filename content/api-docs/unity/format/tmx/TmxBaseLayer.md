---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: TmxBaseLayer
target: Unity
permalink: api-docs/unity/format/tmx/TmxBaseLayer/
---

# TmxBaseLayer

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Data.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.TmxBaseLayer</strong> (Class) → <a href="/api-docs/unity/format/tmx/TmxImageLayer/">TmxImageLayer</a>, <a href="/api-docs/unity/format/tmx/TmxObjectGroup/">TmxObjectGroup</a>, <a href="/api-docs/unity/format/tmx/TmxTileLayer/">TmxTileLayer</a></div>

## Instance Members

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique ID of the layer. Each layer that added to a map gets a unique id. Even if a layer is deleted, no layer ever gets the same ID. Can not be changed in Tiled. (since Tiled 1.2)

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the layer.

<hr class="field-separator" />

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x coordinate of the layer in tiles. Defaults to 0 and can no longer be changed in Tiled Qt. (Except ImageLayer)

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y coordinate of the layer in tiles. Defaults to 0 and can no longer be changed in Tiled Qt. (Except ImageLayer)

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the layer in tiles. Traditionally required, but as of Tiled Qt always the same as the map width.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the layer in tiles. Traditionally required, but as of Tiled Qt always the same as the map height.

<hr class="field-separator" />

<div class="signature field-var has-description" id="opacity"><code><span class="field-name">opacity</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#opacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The opacity of the layer as a value from 0 to 1. Defaults to 1.

<hr class="field-separator" />

<div class="signature field-var has-description" id="visible"><code><span class="field-name">visible</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#visible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the layer is shown (1) or hidden (0). Defaults to 1.

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetX"><code><span class="field-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#offsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rendering offset for this layer in pixels. Defaults to 0. (since 0.14)

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetY"><code><span class="field-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#offsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rendering offset for this layer in pixels. Defaults to 0. (since 0.14)

<hr class="field-separator" />

<div class="signature field-var no-description" id="properties"><code><span class="field-name">properties</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxProperties/" class="type-link">TmxProperties</a></code><a class="header-anchor" href="#properties"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">visible</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">properties</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxProperties/" class="type-link">TmxProperties</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
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

