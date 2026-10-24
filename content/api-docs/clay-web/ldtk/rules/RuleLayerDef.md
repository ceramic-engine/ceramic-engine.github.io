---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk-haxe-api
title: RuleLayerDef
target: Clay (Web)
permalink: api-docs/clay-web/ldtk/rules/RuleLayerDef/
---

# RuleLayerDef

<div class="type-hierarchy"><strong>ldtk.rules.RuleLayerDef</strong> (Class)</div>

The layer definition data needed to run rules, built from `ldtk.Json.LayerDefJson`.
Used by runtime consumers and tests; the LDtk editor uses its own layer definition class.

## Static Members

<div class="signature field-method no-description" id="fromJson"><code><span class="field-name">fromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/clay-web/ldtk/LayerDefJson/" class="type-link">ldtk.LayerDefJson</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">RuleLayerDef</a></code><a class="header-anchor" href="#fromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [ldtk.LayerDefJson](/api-docs/clay-web/ldtk/LayerDefJson/) |

| Returns |
|---------|
| [RuleLayerDef](/api-docs/clay-web/ldtk/rules/RuleLayerDef/) |

## Instance Members

<div class="signature field-var no-description" id="uid"><code><span class="field-name">uid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#uid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="identifier"><code><span class="field-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#identifier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="isIntGrid"><code><span class="field-name">isIntGrid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isIntGrid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="isAutoLayer"><code><span class="field-name">isAutoLayer</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isAutoLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="gridSize"><code><span class="field-name">gridSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gridSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tilePivotX"><code><span class="field-name">tilePivotX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#tilePivotX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tilePivotY"><code><span class="field-name">tilePivotY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#tilePivotY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tilesetDefUid"><code><span class="field-name">tilesetDefUid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tilesetDefUid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="autoSourceLayerDefUid"><code><span class="field-name">autoSourceLayerDefUid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#autoSourceLayerDefUid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="biomeFieldUid"><code><span class="field-name">biomeFieldUid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#biomeFieldUid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="autoTilesKilledByOtherLayerUid"><code><span class="field-name">autoTilesKilledByOtherLayerUid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#autoTilesKilledByOtherLayerUid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="groups"><code><span class="field-name">groups</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ldtk/rules/RuleGroupDef/" class="type-link">RuleGroupDef</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#groups"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="valueGroupUids"><code><span class="field-name">valueGroupUids</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#valueGroupUids"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

valueGroupUids[intGridValue] = group uid, or -1

<hr class="field-separator" />

<div class="signature field-method no-description" id="getGroupUidOfValue"><code><span class="field-name">getGroupUidOfValue</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getGroupUidOfValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rulesCanBeUsed"><code><span class="field-name">rulesCanBeUsed</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#rulesCanBeUsed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Same gate as the LDtk editor: rules only run if the layer has a tileset (and a source layer for AutoLayer types)
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rulesInEvalOrder"><code><span class="field-name">rulesInEvalOrder</span><span class="parenthesis">(</span><span class="arg-name">biomeValues</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">optionalRules</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ldtk/rules/RuleDef/" class="type-link">RuleDef</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ldtk/rules/RuleDef/" class="type-link">RuleDef</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#rulesInEvalOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active rules of applied groups, in evaluation order (groups first to last, rules first to last). `out` is reused when given.

| Name | Type | Default |
|------|------|---------|
| `biomeValues` | [Null](/api-docs/clay-web/Null/)<[Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)>> | |
| `optionalRules` | [Map](/api-docs/clay-web/Map/) | |
| `out` | [Array](/api-docs/clay-web/Array/)<[RuleDef](/api-docs/clay-web/ldtk/rules/RuleDef/)> | *(optional)* |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[RuleDef](/api-docs/clay-web/ldtk/rules/RuleDef/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rulesInDisplayOrder"><code><span class="field-name">rulesInDisplayOrder</span><span class="parenthesis">(</span><span class="arg-name">biomeValues</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">optionalRules</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ldtk/rules/RuleDef/" class="type-link">RuleDef</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ldtk/rules/RuleDef/" class="type-link">RuleDef</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#rulesInDisplayOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Same rules in display order: the exact reverse of the evaluation order (first evaluated rule is rendered on top)

| Name | Type | Default |
|------|------|---------|
| `biomeValues` | [Null](/api-docs/clay-web/Null/)<[Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)>> | |
| `optionalRules` | [Map](/api-docs/clay-web/Map/) | |
| `out` | [Array](/api-docs/clay-web/Array/)<[RuleDef](/api-docs/clay-web/ldtk/rules/RuleDef/)> | *(optional)* |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[RuleDef](/api-docs/clay-web/ldtk/rules/RuleDef/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">uid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `uid` | [Int](/api-docs/clay-web/Int/) |

