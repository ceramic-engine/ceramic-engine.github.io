---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: TmxGroup
target: Clay (Native)
permalink: api-docs/clay-native/format/tmx/TmxGroup/
---

# TmxGroup

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Data.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.TmxGroup</strong> (Class)</div>

A group layer, used to organize the layers of the map in a hierarchy.
Its attributes offsetx, offsety, opacity and visible recursively affect child layers.

## Instance Members

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique ID of the layer. Each layer that added to a map gets a unique id. Even if a layer is deleted, no layer ever gets the same ID. Can not be changed in Tiled. (since Tiled 1.2)

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the group layer.

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetX"><code><span class="field-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rendering offset of the group layer in pixels. Defaults to 0.

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetY"><code><span class="field-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rendering offset of the group layer in pixels. Defaults to 0.

<hr class="field-separator" />

<div class="signature field-var has-description" id="opacity"><code><span class="field-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#opacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The opacity of the layer as a value from 0 to 1. Defaults to 1.

<hr class="field-separator" />

<div class="signature field-var has-description" id="visible"><code><span class="field-name">visible</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the layer is shown (1) or hidden (0). Defaults to 1.

<hr class="field-separator" />

<div class="signature field-var no-description" id="properties"><code><span class="field-name">properties</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxProperties/" class="type-link">TmxProperties</a></code><a class="header-anchor" href="#properties"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="layers"><code><span class="field-name">layers</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#layers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">visible</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">properties</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxProperties/" class="type-link">TmxProperties</a><span class="operator">,</span> <span class="arg-name">layers</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `id` | [Int](/api-docs/clay-native/Int/) | Unique ID of the layer. Each layer that added to a map gets a unique id. Even if a layer is deleted, no layer ever gets the same ID. Can not be changed in Tiled. (since Tiled 1.2) |
| `name` | [String](/api-docs/clay-native/String/) | The name of the group layer. |
| `offsetX` | [Int](/api-docs/clay-native/Int/) | Rendering offset of the group layer in pixels. Defaults to 0. |
| `offsetY` | [Int](/api-docs/clay-native/Int/) | Rendering offset of the group layer in pixels. Defaults to 0. |
| `opacity` | [Float](/api-docs/clay-native/Float/) | The opacity of the layer as a value from 0 to 1. Defaults to 1. |
| `visible` | [Bool](/api-docs/clay-native/Bool/) | Whether the layer is shown (1) or hidden (0). Defaults to 1. |
| `properties` | [TmxProperties](/api-docs/clay-native/format/tmx/TmxProperties/) |  |
| `layers` | [Array](/api-docs/clay-native/Array/)<Anonymous> |  |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

