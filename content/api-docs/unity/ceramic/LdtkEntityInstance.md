---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkEntityInstance
target: Unity
permalink: api-docs/unity/ceramic/LdtkEntityInstance/
---

# LdtkEntityInstance

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LdtkEntityInstance</strong> (Class)</div>

An instance of an entity placed in a level.

Contains the entity's position, size, field values, and tile information.
This is the actual game object data as opposed to the entity definition.

## Instance Members

<div class="signature field-var has-description has-plugin" id="def"><div class="plugin-name">ldtk</div><code><span class="field-name">def</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkEntityDefinition/" class="type-link">LdtkEntityDefinition</a></code><a class="header-anchor" href="#def"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The related entity definition

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ldtkData"><div class="plugin-name">ldtk</div><code><span class="field-name">ldtkData</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkData/" class="type-link">LdtkData</a></code><a class="header-anchor" href="#ldtkData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `LdtkData` object this entity instance belongs to

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="layerInstance"><div class="plugin-name">ldtk</div><code><span class="field-name">layerInstance</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a></code><a class="header-anchor" href="#layerInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="layerIid"><div class="plugin-name">ldtk</div><code><span class="field-name">layerIid</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#layerIid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The layer instance id of this entity instance.
When the whole world is not loaded entirely, it's
possible that this is defined but `layerInstance` isn't.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gridX"><div class="plugin-name">ldtk</div><code><span class="field-name">gridX</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gridX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Grid-based X coordinate

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gridY"><div class="plugin-name">ldtk</div><code><span class="field-name">gridY</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gridY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Grid-based Y coordinate

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pxX"><div class="plugin-name">ldtk</div><code><span class="field-name">pxX</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pixel X coordinate

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pxY"><div class="plugin-name">ldtk</div><code><span class="field-name">pxY</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pixel Y coordinate

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="fieldInstances"><div class="plugin-name">ldtk</div><code><span class="field-name">fieldInstances</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/LdtkFieldInstance/" class="type-link">LdtkFieldInstance</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fieldInstances"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array of all custom fields and their values.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="width"><div class="plugin-name">ldtk</div><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Entity width in pixels. For non-resizable entities, it will be the same as Entity definition.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="height"><div class="plugin-name">ldtk</div><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Entity height in pixels. For non-resizable entities, it will be the same as Entity definition.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="iid"><div class="plugin-name">ldtk</div><code><span class="field-name">iid</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#iid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique instance identifier

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="fieldInstance"><div class="plugin-name">ldtk</div><code><span class="field-name">fieldInstance</span><span class="parenthesis">(</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/LdtkFieldInstance/" class="type-link">LdtkFieldInstance</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fieldInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identifier` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<[LdtkFieldInstance](/api-docs/unity/ceramic/LdtkFieldInstance/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">ldtk</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">ldtkData</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkData/" class="type-link">LdtkData</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ldtkWorld</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkWorld/" class="type-link">LdtkWorld</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">register</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `ldtkData` | [LdtkData](/api-docs/unity/ceramic/LdtkData/) | *(optional)* |
| `ldtkWorld` | [LdtkWorld](/api-docs/unity/ceramic/LdtkWorld/) | *(optional)* |
| `json` | [haxe.DynamicAccess](/api-docs/unity/haxe/DynamicAccess/)<[Dynamic](/api-docs/unity/Dynamic/)> | *(optional)* |
| `register` | Function | *(optional)* |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

