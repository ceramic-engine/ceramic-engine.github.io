---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkEntityInstance
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/LdtkEntityInstance/
---

# LdtkEntityInstance

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LdtkEntityInstance</strong> (Class)</div>

An instance of an entity placed in a level.

Contains the entity's position, size, field values, and tile information.
This is the actual game object data as opposed to the entity definition.

## Instance Members

<div class="signature field-var has-description has-plugin" id="def"><div class="plugin-name">ldtk</div><code><span class="field-name">def</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkEntityDefinition/" class="type-link">LdtkEntityDefinition</a></code><a class="header-anchor" href="#def"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The related entity definition

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="layerInstance"><div class="plugin-name">ldtk</div><code><span class="field-name">layerInstance</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a></code><a class="header-anchor" href="#layerInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The layer instance this entity instance belongs to

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gridX"><div class="plugin-name">ldtk</div><code><span class="field-name">gridX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gridX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Grid-based X coordinate

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gridY"><div class="plugin-name">ldtk</div><code><span class="field-name">gridY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gridY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Grid-based Y coordinate

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pxX"><div class="plugin-name">ldtk</div><code><span class="field-name">pxX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pixel X coordinate

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pxY"><div class="plugin-name">ldtk</div><code><span class="field-name">pxY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pixel Y coordinate

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="fieldInstances"><div class="plugin-name">ldtk</div><code><span class="field-name">fieldInstances</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/LdtkFieldInstance/" class="type-link">LdtkFieldInstance</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fieldInstances"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array of all custom fields and their values.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="width"><div class="plugin-name">ldtk</div><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Entity width in pixels. For non-resizable entities, it will be the same as Entity definition.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="height"><div class="plugin-name">ldtk</div><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Entity height in pixels. For non-resizable entities, it will be the same as Entity definition.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="iid"><div class="plugin-name">ldtk</div><code><span class="field-name">iid</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#iid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique instance identifier

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="fieldInstance"><div class="plugin-name">ldtk</div><code><span class="field-name">fieldInstance</span><span class="parenthesis">(</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/LdtkFieldInstance/" class="type-link">LdtkFieldInstance</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fieldInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identifier` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[LdtkFieldInstance](/api-docs/clay-web/ceramic/LdtkFieldInstance/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">ldtk</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">ldtkData</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkData/" class="type-link">LdtkData</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ldtkWorld</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkWorld/" class="type-link">LdtkWorld</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">register</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `ldtkData` | [LdtkData](/api-docs/clay-web/ceramic/LdtkData/) | *(optional)* |
| `ldtkWorld` | [LdtkWorld](/api-docs/clay-web/ceramic/LdtkWorld/) | *(optional)* |
| `json` | [haxe.DynamicAccess](/api-docs/clay-web/haxe/DynamicAccess/)<[Dynamic](/api-docs/clay-web/Dynamic/)> | *(optional)* |
| `register` | Function | *(optional)* |

