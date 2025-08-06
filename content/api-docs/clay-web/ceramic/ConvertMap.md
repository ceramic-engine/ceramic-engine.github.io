---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ConvertMap
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/ConvertMap/
---

# ConvertMap

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ConvertMap.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ConvertMap</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/ceramic/ConvertField/">ConvertField</a></div>

Converter for Map fields in fragments and data serialization.

This converter handles Map<String,T> instances by converting between
DynamicAccess objects (JavaScript-style objects) and Haxe Map instances.
This allows maps to be serialized as plain objects in JSON and other
serialization formats.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/ConvertField/">ConvertField</a>, <a href="/api-docs/clay-web/ceramic/Fragment/">Fragment</a></div>


## Instance Members

<div class="signature field-method has-description" id="basicToField"><code><span class="field-name">basicToField</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">basic</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><span class="type-name">ceramic.ConvertMap.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#basicToField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert a DynamicAccess object to a Map instance.

Iterates through all keys in the dynamic object and creates
corresponding entries in a new Map instance.



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/clay-web/ceramic/Entity/) | The entity that owns this field  |
| `field` | [String](/api-docs/clay-web/String/) | The name of the field being converted  |
| `assets` | [Assets](/api-docs/clay-web/ceramic/Assets/) | Assets instance for resource loading (unused for maps)  |
| `basic` | [haxe.DynamicAccess](/api-docs/clay-web/haxe/DynamicAccess/)<ceramic.ConvertMap.T> | The DynamicAccess object to convert  |
| `done` | Function | Callback invoked with the converted Map instance |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fieldToBasic"><code><span class="field-name">fieldToBasic</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><span class="type-name">ceramic.ConvertMap.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#fieldToBasic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert a Map instance to a DynamicAccess object for serialization.

Iterates through all entries in the map and creates corresponding
properties in a new DynamicAccess object.



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/clay-web/ceramic/Entity/) | The entity that owns this field  |
| `field` | [String](/api-docs/clay-web/String/) | The name of the field being converted  |
| `value` | [Map](/api-docs/clay-web/Map/) | The Map instance to convert  |

| Returns | Description |
|---------|-------------|
| [haxe.DynamicAccess](/api-docs/clay-web/haxe/DynamicAccess/)<ceramic.ConvertMap.T> | A DynamicAccess object containing all map entries |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new map converter instance.

