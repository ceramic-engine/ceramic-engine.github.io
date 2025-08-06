---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: TmxObject
target: Unity
permalink: api-docs/unity/format/tmx/TmxObject/
---

# TmxObject

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Data.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.TmxObject</strong> (Class)</div>

## Instance Members

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Id of the object. Each object that is placed on map gets unique id. And even if object was deleted no one gets it's id again. Can not be changed in Tiled Qt.

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the object. An arbitrary string.

<hr class="field-separator" />

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The type of the object. An arbitrary string.

<hr class="field-separator" />

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x coordinate of the object in pixels.

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y coordinate of the object in pixels.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the object in pixels (defaults to 0).

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the object in pixels (defaults to 0).

<hr class="field-separator" />

<div class="signature field-var has-description" id="rotation"><code><span class="field-name">rotation</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The rotation of the object in degrees clockwise (defaults to 0). (Since 0.10)

<hr class="field-separator" />

<div class="signature field-var has-description" id="visible"><code><span class="field-name">visible</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the object is shown (1) or hidden (0). Defaults to 1. (since 0.9.0)

<hr class="field-separator" />

<div class="signature field-var has-description" id="objectType"><code><span class="field-name">objectType</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#objectType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Helper type to easily detect what exactly is that object.

<hr class="field-separator" />

<div class="signature field-var has-description" id="properties"><code><span class="field-name">properties</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxProperties/" class="type-link">TmxProperties</a></code><a class="header-anchor" href="#properties"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Object properties.

<hr class="field-separator" />

<div class="signature field-var has-description" id="flippedHorizontally"><code><span class="field-name">flippedHorizontally</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#flippedHorizontally"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is tile flipped horizontally? Default: false

<hr class="field-separator" />

<div class="signature field-var has-description" id="flippedVertically"><code><span class="field-name">flippedVertically</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#flippedVertically"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is tile flipped vertically? Default: false

<hr class="field-separator" />

<div class="signature field-var has-description" id="template"><code><span class="field-name">template</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#template"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A reference to a template file (optional).

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">rotation</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">visible</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">objectType</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">properties</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxProperties/" class="type-link">TmxProperties</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">flippedHorizontally</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">flippedVertically</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">template</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `id` | [Int](/api-docs/unity/Int/) | Id of the object. Each object that is placed on map gets unique id. And even if object was deleted no one gets it's id again. Can not be changed in Tiled Qt. |
| `name` | [Null](/api-docs/unity/Null/)<[String](/api-docs/unity/String/)> | The name of the object. An arbitrary string. |
| `type` | [Null](/api-docs/unity/Null/)<[String](/api-docs/unity/String/)> | The type of the object. An arbitrary string. |
| `x` | [Float](/api-docs/unity/Float/) | The x coordinate of the object in pixels. |
| `y` | [Float](/api-docs/unity/Float/) | The y coordinate of the object in pixels. |
| `width` | [Null](/api-docs/unity/Null/)<[Float](/api-docs/unity/Float/)> | The width of the object in pixels (defaults to 0). |
| `height` | [Null](/api-docs/unity/Null/)<[Float](/api-docs/unity/Float/)> | The height of the object in pixels (defaults to 0). |
| `rotation` | [Null](/api-docs/unity/Null/)<[Float](/api-docs/unity/Float/)> | The rotation of the object in degrees clockwise (defaults to 0). (Since 0.10) |
| `visible` | [Null](/api-docs/unity/Null/)<[Bool](/api-docs/unity/Bool/)> | Whether the object is shown (1) or hidden (0). Defaults to 1. (since 0.9.0) |
| `objectType` | Anonymous | Helper type to easily detect what exactly is that object. |
| `properties` | [Null](/api-docs/unity/Null/)<[TmxProperties](/api-docs/unity/format/tmx/TmxProperties/)> | Object properties. |
| `flippedHorizontally` | [Null](/api-docs/unity/Null/)<[Bool](/api-docs/unity/Bool/)> | Is tile flipped horizontally? Default: false |
| `flippedVertically` | [Null](/api-docs/unity/Null/)<[Bool](/api-docs/unity/Bool/)> | Is tile flipped vertically? Default: false |
| `template` | [Null](/api-docs/unity/Null/)<[String](/api-docs/unity/String/)> | A reference to a template file (optional). |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:structInit` | - |

