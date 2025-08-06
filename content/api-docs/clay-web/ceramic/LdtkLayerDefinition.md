---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkLayerDefinition
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/LdtkLayerDefinition/
---

# LdtkLayerDefinition

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LdtkLayerDefinition</strong> (Class)</div>

Defines a layer type that can be used in levels.

Layers can be:
- IntGrid: Integer grid for collision maps, zones, etc.
- Entities: Container for entity instances
- Tiles: Manual tile placement
- AutoLayer: Rule-based automatic tile placement

## Instance Members

<div class="signature field-var has-description has-plugin" id="defs"><div class="plugin-name">ldtk</div><code><span class="field-name">defs</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkDefinitions/" class="type-link">LdtkDefinitions</a></code><a class="header-anchor" href="#defs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `LdtkDefinitions` object this layer def belongs to

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="type"><div class="plugin-name">ldtk</div><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkLayerType/" class="type-link">LdtkLayerType</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Type of the layer (IntGrid, Entities, Tiles or AutoLayer)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="autoSourceLayerDefUid"><div class="plugin-name">ldtk</div><code><span class="field-name">autoSourceLayerDefUid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#autoSourceLayerDefUid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Only auto-layers

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="displayOpacity"><div class="plugin-name">ldtk</div><code><span class="field-name">displayOpacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#displayOpacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Opacity of the layer (0 to 1.0)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gridSize"><div class="plugin-name">ldtk</div><code><span class="field-name">gridSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gridSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width and height of the grid in pixels

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="identifier"><div class="plugin-name">ldtk</div><code><span class="field-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#identifier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

User defined unique identifier

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="intGridValues"><div class="plugin-name">ldtk</div><code><span class="field-name">intGridValues</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/LdtkIntGridValue/" class="type-link">LdtkIntGridValue</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#intGridValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array that defines extra optional info for each IntGrid value.
WARNING: the array order is not related to actual IntGrid values!
As user can re-order IntGrid values freely, you may value "2" before value "1" in this array.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="parallaxFactorX"><div class="plugin-name">ldtk</div><code><span class="field-name">parallaxFactorX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#parallaxFactorX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parallax horizontal factor (from -1 to 1, defaults to 0) which affects the scrolling speed of this layer, creating a fake 3D (parallax) effect.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="parallaxFactorY"><div class="plugin-name">ldtk</div><code><span class="field-name">parallaxFactorY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#parallaxFactorY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parallax vertical factor (from -1 to 1, defaults to 0) which affects the scrolling speed of this layer, creating a fake 3D (parallax) effect.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="parallaxScaling"><div class="plugin-name">ldtk</div><code><span class="field-name">parallaxScaling</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#parallaxScaling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If true (default), a layer with a parallax factor will also be scaled up/down accordingly.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pxOffsetX"><div class="plugin-name">ldtk</div><code><span class="field-name">pxOffsetX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pxOffsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

X offset of the layer, in pixels (IMPORTANT: this should be added to the `LdtkLayerInstance` optional offset)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pxOffsetY"><div class="plugin-name">ldtk</div><code><span class="field-name">pxOffsetY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pxOffsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Y offset of the layer, in pixels (IMPORTANT: this should be added to the `LdtkLayerInstance` optional offset)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tilesetDefUid"><div class="plugin-name">ldtk</div><code><span class="field-name">tilesetDefUid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tilesetDefUid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the default Tileset UID being used by this layer definition.
WARNING: some layer instances might use a different tileset. So most of the time, you should probably use the `tilesetDefUid` value found in layer instances.
Note: since version 1.0.0, the old `autoTilesetDefUid` was removed and merged into this value.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="uid"><div class="plugin-name">ldtk</div><code><span class="field-name">uid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#uid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique Int identifier

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="autoRuleGroups"><div class="plugin-name">ldtk</div><code><span class="field-name">autoRuleGroups</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/LdtkAutoRuleGroup/" class="type-link">LdtkAutoRuleGroup</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#autoRuleGroups"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Contains all the auto-layer rule definitions.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tilePivotX"><div class="plugin-name">ldtk</div><code><span class="field-name">tilePivotX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#tilePivotX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If the tiles are smaller or larger than the layer grid,
the pivot value will be used to position the tile relatively its grid cell.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tilePivotY"><div class="plugin-name">ldtk</div><code><span class="field-name">tilePivotY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#tilePivotY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If the tiles are smaller or larger than the layer grid,
the pivot value will be used to position the tile relatively its grid cell.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="autoRuleGroup"><div class="plugin-name">ldtk</div><code><span class="field-name">autoRuleGroup</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkAutoRuleGroup/" class="type-link">LdtkAutoRuleGroup</a></code><a class="header-anchor" href="#autoRuleGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [LdtkAutoRuleGroup](/api-docs/clay-web/ceramic/LdtkAutoRuleGroup/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="findRule"><div class="plugin-name">ldtk</div><code><span class="field-name">findRule</span><span class="parenthesis">(</span><span class="arg-name">uid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkAutoLayerRuleDefinition/" class="type-link">LdtkAutoLayerRuleDefinition</a></code><a class="header-anchor" href="#findRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `uid` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [LdtkAutoLayerRuleDefinition](/api-docs/clay-web/ceramic/LdtkAutoLayerRuleDefinition/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">ldtk</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">defs</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkDefinitions/" class="type-link">LdtkDefinitions</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `defs` | [LdtkDefinitions](/api-docs/clay-web/ceramic/LdtkDefinitions/) | *(optional)* |
| `json` | [haxe.DynamicAccess](/api-docs/clay-web/haxe/DynamicAccess/)<[Dynamic](/api-docs/clay-web/Dynamic/)> | *(optional)* |

