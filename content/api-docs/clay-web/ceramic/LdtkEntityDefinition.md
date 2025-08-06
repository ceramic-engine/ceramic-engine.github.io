---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkEntityDefinition
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/LdtkEntityDefinition/
---

# LdtkEntityDefinition

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LdtkEntityDefinition</strong> (Class)</div>

Defines an entity type that can be placed in levels.

Entities are game objects like players, enemies, items, triggers, etc.
This definition describes the entity's appearance, fields, and behavior rules.

## Instance Members

<div class="signature field-var has-description has-plugin" id="defs"><div class="plugin-name">ldtk</div><code><span class="field-name">defs</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkDefinitions/" class="type-link">LdtkDefinitions</a></code><a class="header-anchor" href="#defs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `LdtkDefinitions` object this entity def belongs to

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="color"><div class="plugin-name">ldtk</div><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Base entity color

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="width"><div class="plugin-name">ldtk</div><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pixel width

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="height"><div class="plugin-name">ldtk</div><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pixel height

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="identifier"><div class="plugin-name">ldtk</div><code><span class="field-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#identifier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

User defined unique identifier

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="nineSliceBorders"><div class="plugin-name">ldtk</div><code><span class="field-name">nineSliceBorders</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#nineSliceBorders"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array of 4 dimensions for the up/right/down/left borders (in this order) when using 9-slice mode for `tileRenderMode`.
If the tileRenderMode is not NineSlice, then this array is empty.

<div class="see"><strong>See:</strong> https://en.wikipedia.org/wiki/9-slice_scaling</div>


<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pivotX"><div class="plugin-name">ldtk</div><code><span class="field-name">pivotX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pivotX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pivot X coordinate (from 0 to 1.0)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pivotY"><div class="plugin-name">ldtk</div><code><span class="field-name">pivotY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pivotY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pivot Y coordinate (from 0 to 1.0)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="renderMode"><div class="plugin-name">ldtk</div><code><span class="field-name">renderMode</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkRenderMode/" class="type-link">LdtkRenderMode</a></code><a class="header-anchor" href="#renderMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Render mode

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileRect"><div class="plugin-name">ldtk</div><code><span class="field-name">tileRect</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkTilesetRectangle/" class="type-link">LdtkTilesetRectangle</a></code><a class="header-anchor" href="#tileRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An object representing a rectangle from an existing Tileset (can be `null`)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileRenderMode"><div class="plugin-name">ldtk</div><code><span class="field-name">tileRenderMode</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkTileRenderMode/" class="type-link">LdtkTileRenderMode</a></code><a class="header-anchor" href="#tileRenderMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An enum describing how the the Entity tile is rendered inside the Entity bounds.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileset"><div class="plugin-name">ldtk</div><code><span class="field-name">tileset</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkTilesetDefinition/" class="type-link">LdtkTilesetDefinition</a></code><a class="header-anchor" href="#tileset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The corresponding Tileset definition, if any, for optional tile display

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="uid"><div class="plugin-name">ldtk</div><code><span class="field-name">uid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#uid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique Int identifier

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tags"><div class="plugin-name">ldtk</div><code><span class="field-name">tags</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array of strings that classifies this entity

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="fieldDefs"><div class="plugin-name">ldtk</div><code><span class="field-name">fieldDefs</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/LdtkFieldDefinition/" class="type-link">LdtkFieldDefinition</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fieldDefs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array of field definitions that belong to this entity definition

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isRenderable"><div class="plugin-name">ldtk</div><code><span class="field-name">isRenderable</span><span class="parenthesis">(</span><span class="arg-name">renderMode</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkRenderMode/" class="type-link">LdtkRenderMode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isRenderable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if entities instances having this entity definition
can be rendered with the given `renderMode`. Will also check that
the definition is not using internal icons as well, as they should not be rendered anyway.


| Name | Type | Description |
|------|------|-------------|
| `renderMode` | [LdtkRenderMode](/api-docs/clay-web/ceramic/LdtkRenderMode/) | The render mode we want to test  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | Bool |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">ldtk</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="fieldDef"><div class="plugin-name">ldtk</div><code><span class="field-name">fieldDef</span><span class="parenthesis">(</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkFieldDefinition/" class="type-link">LdtkFieldDefinition</a></code><a class="header-anchor" href="#fieldDef"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identifier` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [LdtkFieldDefinition](/api-docs/clay-web/ceramic/LdtkFieldDefinition/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">defs</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkDefinitions/" class="type-link">LdtkDefinitions</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `defs` | [LdtkDefinitions](/api-docs/clay-web/ceramic/LdtkDefinitions/) | *(optional)* |
| `json` | [haxe.DynamicAccess](/api-docs/clay-web/haxe/DynamicAccess/)<[Dynamic](/api-docs/clay-web/Dynamic/)> | *(optional)* |

