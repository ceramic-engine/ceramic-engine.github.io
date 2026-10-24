---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkRuleRunner
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/LdtkRuleRunner/
---

# LdtkRuleRunner

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkRuleRunner.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LdtkRuleRunner</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/ldtk/rules/RuleTarget/">ldtk.rules.RuleTarget</a></div>

Recomputes the auto tiles of an LDtk layer instance at runtime, with the same rule engine as the LDtk editor
(`ldtk.rules`), so that a modified IntGrid produces exactly the tiles the editor would produce.

One runner per layer instance, kept on `LdtkLayerInstance.ruleRunner`. The engine, the IntGrid source,
the tile store and the rule list are created once and reused: recomputing does not allocate.

When `incremental` is `true` (default), `compute()` only recomputes the cells around the IntGrid changes
made since the previous compute (the dirty rect tracked by `LdtkLayerInstance.setIntGrid()`, expanded by the
maximum rule radius), which gives exactly the same tiles as a full recompute. A full recompute happens when the
rules, the seed or the killing layer changed, or when the dirty rect cannot be trusted: several runners may read
the same IntGrid, so the rect is only cleared by `refreshAutoLayersUsingSource()` once every reader was refreshed.

Typical use:
```haxe
intGridLayer.setIntGrid(cx, cy, 1);
LdtkRuleRunner.refreshAutoLayersUsingSource(level, intGridLayer, tilemapVisual);
```

## Static Members

<div class="signature field-method has-description has-plugin" id="get"><div class="plugin-name">ldtk</div><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">layer</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">LdtkRuleRunner</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get (or create) the runner of a layer

| Name | Type |
|------|------|
| `layer` | [LdtkLayerInstance](/api-docs/clay-native/ceramic/LdtkLayerInstance/) |

| Returns |
|---------|
| [LdtkRuleRunner](/api-docs/clay-native/ceramic/LdtkRuleRunner/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="canRun"><div class="plugin-name">ldtk</div><code><span class="field-name">canRun</span><span class="parenthesis">(</span><span class="arg-name">layer</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canRun"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`true` if this layer has rules that can be computed at runtime

| Name | Type |
|------|------|
| `layer` | [LdtkLayerInstance](/api-docs/clay-native/ceramic/LdtkLayerInstance/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="refreshAutoLayer"><div class="plugin-name">ldtk</div><code><span class="field-name">refreshAutoLayer</span><span class="parenthesis">(</span><span class="arg-name">layer</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">tilemap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Tilemap/" class="type-link">Tilemap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#refreshAutoLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recompute the auto tiles of a layer from its current IntGrid, update `autoLayerTiles`, refresh the
`TilemapLayerData` and mark the layers of `tilemap` displaying it as dirty.
Returns `false` if the layer has no usable rules.

| Name | Type | Default |
|------|------|---------|
| `layer` | [LdtkLayerInstance](/api-docs/clay-native/ceramic/LdtkLayerInstance/) | |
| `tilemap` | [Tilemap](/api-docs/clay-native/ceramic/Tilemap/) | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="refreshAutoLayersUsingSource"><div class="plugin-name">ldtk</div><code><span class="field-name">refreshAutoLayersUsingSource</span><span class="parenthesis">(</span><span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLevel/" class="type-link">LdtkLevel</a><span class="operator">,</span> <span class="arg-name">intGridLayer</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">tilemap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Tilemap/" class="type-link">Tilemap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#refreshAutoLayersUsingSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Refresh every auto layer of `level` that reads the IntGrid of `intGridLayer` (including itself if it is an auto layer),
then forget the pending IntGrid changes of `intGridLayer` (every reader has seen them).
Returns the number of refreshed layers.

| Name | Type | Default |
|------|------|---------|
| `level` | [LdtkLevel](/api-docs/clay-native/ceramic/LdtkLevel/) | |
| `intGridLayer` | [LdtkLayerInstance](/api-docs/clay-native/ceramic/LdtkLayerInstance/) | |
| `tilemap` | [Tilemap](/api-docs/clay-native/ceramic/Tilemap/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

## Instance Members

<div class="signature field-var has-description has-plugin" id="layer"><div class="plugin-name">ldtk</div><code><span class="field-name">layer</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a></code><a class="header-anchor" href="#layer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The auto layer computed by this runner

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="sourceLayer"><div class="plugin-name">ldtk</div><code><span class="field-name">sourceLayer</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a></code><a class="header-anchor" href="#sourceLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The layer providing the IntGrid values (the layer itself, or its auto source layer)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="store"><div class="plugin-name">ldtk</div><code><span class="field-name">store</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/CellTileBuffer/" class="type-link">ldtk.rules.CellTileBuffer</a></code><a class="header-anchor" href="#store"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Last computed tiles, indexed by cell (`ldtk.rules.CellTileBuffer`)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="incremental"><div class="plugin-name">ldtk</div><code><span class="field-name">incremental</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#incremental"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When `true`, `compute()` recomputes only the area of the IntGrid modified since the previous compute when possible

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="lastComputeWasPartial"><div class="plugin-name">ldtk</div><code><span class="field-name">lastComputeWasPartial</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#lastComputeWasPartial"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`true` if the last `compute()` was a partial recompute (`false` after a full one)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="lastComputeCells"><div class="plugin-name">ldtk</div><code><span class="field-name">lastComputeCells</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lastComputeCells"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of cells evaluated by the last `compute()` (0 when nothing had changed)

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="invalidateRules"><div class="plugin-name">ldtk</div><code><span class="field-name">invalidateRules</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateRules"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Call this when the optional rule groups of the layer or the level biome field changed

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateKilledCells"><div class="plugin-name">ldtk</div><code><span class="field-name">updateKilledCells</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateKilledCells"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Call this when the tiles of the layer killing auto tiles changed

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="compute"><div class="plugin-name">ldtk</div><code><span class="field-name">compute</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/CellTileBuffer/" class="type-link">ldtk.rules.CellTileBuffer</a></code><a class="header-anchor" href="#compute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute the tiles of the layer into `store`: everything, or only the cells around the IntGrid changes made
since the previous compute when `incremental` is `true` and the dirty rect of the source layer can be used.
Does nothing if nothing changed since the previous compute.
| Returns |
|---------|
| [ldtk.rules.CellTileBuffer](/api-docs/clay-native/ldtk/rules/CellTileBuffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="writeAutoLayerTiles"><div class="plugin-name">ldtk</div><code><span class="field-name">writeAutoLayerTiles</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#writeAutoLayerTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Write the last computed tiles into `layer.autoLayerTiles` (same stride 7 layout as when loaded from LDtk:
tile id, flip bits, x, y, source x, source y, alpha * 4096), reusing the existing array.
| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getSeed"><div class="plugin-name">ldtk</div><code><span class="field-name">getSeed</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getSeed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getGridSize"><div class="plugin-name">ldtk</div><code><span class="field-name">getGridSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getGridSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getTilePivotX"><div class="plugin-name">ldtk</div><code><span class="field-name">getTilePivotX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTilePivotX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getTilePivotY"><div class="plugin-name">ldtk</div><code><span class="field-name">getTilePivotY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTilePivotY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getWidth"><div class="plugin-name">ldtk</div><code><span class="field-name">getWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getHeight"><div class="plugin-name">ldtk</div><code><span class="field-name">getHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="isCellKilled"><div class="plugin-name">ldtk</div><code><span class="field-name">isCellKilled</span><span class="parenthesis">(</span><span class="arg-name">cx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cy</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isCellKilled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `cx` | [Int](/api-docs/clay-native/Int/) |
| `cy` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="engine"><div class="plugin-name">ldtk</div><code><span class="field-name">engine</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/RuleEngine/" class="type-link">ldtk.rules.RuleEngine</a></code><a class="header-anchor" href="#engine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="source"><div class="plugin-name">ldtk</div><code><span class="field-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/ArrayRuleSource/" class="type-link">ldtk.rules.ArrayRuleSource</a></code><a class="header-anchor" href="#source"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="tileset"><div class="plugin-name">ldtk</div><code><span class="field-name">tileset</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkRuleTileset/" class="type-link">LdtkRuleTileset</a></code><a class="header-anchor" href="#tileset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="rulesEval"><div class="plugin-name">ldtk</div><code><span class="field-name">rulesEval</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ldtk/rules/RuleDef/" class="type-link">ldtk.rules.RuleDef</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#rulesEval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="rulesDirty"><div class="plugin-name">ldtk</div><code><span class="field-name">rulesDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#rulesDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="optionalRules"><div class="plugin-name">ldtk</div><code><span class="field-name">optionalRules</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#optionalRules"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="lastIntGridVersion"><div class="plugin-name">ldtk</div><code><span class="field-name">lastIntGridVersion</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lastIntGridVersion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="lastSeed"><div class="plugin-name">ldtk</div><code><span class="field-name">lastSeed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lastSeed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="killedDirty"><div class="plugin-name">ldtk</div><code><span class="field-name">killedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#killedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="computedOnce"><div class="plugin-name">ldtk</div><code><span class="field-name">computedOnce</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#computedOnce"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="killerLayer"><div class="plugin-name">ldtk</div><code><span class="field-name">killerLayer</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a></code><a class="header-anchor" href="#killerLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="killed"><div class="plugin-name">ldtk</div><code><span class="field-name">killed</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#killed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="resolveSourceLayer"><div class="plugin-name">ldtk</div><code><span class="field-name">resolveSourceLayer</span><span class="parenthesis">(</span><span class="arg-name">layer</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a></code><a class="header-anchor" href="#resolveSourceLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `layer` | [LdtkLayerInstance](/api-docs/clay-native/ceramic/LdtkLayerInstance/) |

| Returns |
|---------|
| [LdtkLayerInstance](/api-docs/clay-native/ceramic/LdtkLayerInstance/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="findLayerByDefUid"><div class="plugin-name">ldtk</div><code><span class="field-name">findLayerByDefUid</span><span class="parenthesis">(</span><span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLevel/" class="type-link">LdtkLevel</a><span class="operator">,</span> <span class="arg-name">defUid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a></code><a class="header-anchor" href="#findLayerByDefUid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `level` | [LdtkLevel](/api-docs/clay-native/ceramic/LdtkLevel/) |
| `defUid` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [LdtkLayerInstance](/api-docs/clay-native/ceramic/LdtkLayerInstance/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateRules"><div class="plugin-name">ldtk</div><code><span class="field-name">updateRules</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateRules"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="biomeValues"><div class="plugin-name">ldtk</div><code><span class="field-name">biomeValues</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#biomeValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Null](/api-docs/clay-native/Null/)<[Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)>> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">layer</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `layer` | [LdtkLayerInstance](/api-docs/clay-native/ceramic/LdtkLayerInstance/) |

