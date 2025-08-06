---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ConvertComponentMap
target: Unity
permalink: api-docs/unity/ceramic/ConvertComponentMap/
---

# ConvertComponentMap

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ConvertComponentMap.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ConvertComponentMap</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/ceramic/ConvertField/">ConvertField</a></div>

Converter for component map fields in fragments and data serialization.

This converter handles maps of Component instances by storing and restoring
them using component initializer names. Components are instantiated from
registered initializers during deserialization, allowing fragments to
declaratively specify which components an entity should have.

Note: This system requires the ceramic_use_component_initializers flag to be
enabled for full functionality.

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/ConvertField/">ConvertField</a>, <a href="/api-docs/unity/ceramic/Component/">Component</a>, <a href="/api-docs/unity/ceramic/Fragment/">Fragment</a></div>


## Instance Members

<div class="signature field-method has-description" id="basicToField"><code><span class="field-name">basicToField</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">basic</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#basicToField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert a basic object mapping component names to initializer names
into a map of actual Component instances.

Each entry in the basic object maps a component name (key) to a
component initializer name (value). The initializer is looked up
in the app's component initializers registry and used to create
a new component instance.



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/unity/ceramic/Entity/) | The entity that will own these components  |
| `field` | [String](/api-docs/unity/String/) | The name of the field being converted  |
| `assets` | [Assets](/api-docs/unity/ceramic/Assets/) | Assets instance for resource loading (unused for components)  |
| `basic` | [haxe.DynamicAccess](/api-docs/unity/haxe/DynamicAccess/)<[String](/api-docs/unity/String/)> | Object mapping component names to initializer names  |
| `done` | Function | Callback invoked with the map of instantiated components |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fieldToBasic"><code><span class="field-name">fieldToBasic</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fieldToBasic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert a map of Component instances to a basic object for serialization.

Only components that have an initializer name are included in the
serialized output. The resulting object maps component names to their
initializer names, allowing them to be recreated later.



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/unity/ceramic/Entity/) | The entity that owns these components  |
| `field` | [String](/api-docs/unity/String/) | The name of the field being converted  |
| `value` | [Map](/api-docs/unity/Map/) | Map of component instances to serialize  |

| Returns | Description |
|---------|-------------|
| [haxe.DynamicAccess](/api-docs/unity/haxe/DynamicAccess/)<[String](/api-docs/unity/String/)> | Object mapping component names to initializer names |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new component map converter instance.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

