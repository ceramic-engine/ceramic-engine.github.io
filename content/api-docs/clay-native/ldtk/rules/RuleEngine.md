---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk-haxe-api
title: RuleEngine
target: Clay (Native)
permalink: api-docs/clay-native/ldtk/rules/RuleEngine/
---

# RuleEngine

<div class="type-hierarchy"><strong>ldtk.rules.RuleEngine</strong> (Class)</div>

The auto-layer rule engine: matches rule patterns against a `RuleSource` IntGrid and produces tiles for a `RuleTarget` layer.
One engine per target layer instance, reusable. Hot paths never allocate.

Two output paths share the same matching and tile production code:
- the editor path works on an `AutoTileCache` map (per rule, per cell), supports partial recomputes (`applyRulesInRect`) and applies break-on-match as a final pass;
- the runtime path writes into a reusable buffer and applies break-on-match on the fly: `computeAll` fills a
`FlatTileBuffer`, `computeFull` and `computeRect` fill a `CellTileBuffer` which supports partial recomputes.
All produce the same tiles.

## Static Members

<div class="signature field-method no-description" id="clearRect"><code><span class="field-name">clearRect</span><span class="parenthesis">(</span><span class="arg-name">cache</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/AutoTileCache/" class="type-link">AutoTileCache</a><span class="operator">,</span> <span class="arg-name">ruleUid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cy</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">wid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">hei</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `cache` | [AutoTileCache](/api-docs/clay-native/ldtk/rules/AutoTileCache/) |
| `ruleUid` | [Int](/api-docs/clay-native/Int/) |
| `w` | [Int](/api-docs/clay-native/Int/) |
| `cx` | [Int](/api-docs/clay-native/Int/) |
| `cy` | [Int](/api-docs/clay-native/Int/) |
| `wid` | [Int](/api-docs/clay-native/Int/) |
| `hei` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="clearRule"><code><span class="field-name">clearRule</span><span class="parenthesis">(</span><span class="arg-name">cache</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/AutoTileCache/" class="type-link">AutoTileCache</a><span class="operator">,</span> <span class="arg-name">ruleUid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `cache` | [AutoTileCache](/api-docs/clay-native/ldtk/rules/AutoTileCache/) |
| `ruleUid` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="flatten"><code><span class="field-name">flatten</span><span class="parenthesis">(</span><span class="arg-name">cache</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/AutoTileCache/" class="type-link">AutoTileCache</a><span class="operator">,</span> <span class="arg-name">rulesDisplayOrder</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ldtk/rules/RuleDef/" class="type-link">RuleDef</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ldtk/rules/FlatAutoTile/" class="type-link">FlatAutoTile</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#flatten"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tiles of the cache in a deterministic order: rules in display order, cells by ascending coordId

| Name | Type |
|------|------|
| `cache` | [AutoTileCache](/api-docs/clay-native/ldtk/rules/AutoTileCache/) |
| `rulesDisplayOrder` | [Array](/api-docs/clay-native/Array/)<[RuleDef](/api-docs/clay-native/ldtk/rules/RuleDef/)> |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[FlatAutoTile](/api-docs/clay-native/ldtk/rules/FlatAutoTile/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJsonTiles"><code><span class="field-name">toJsonTiles</span><span class="parenthesis">(</span><span class="arg-name">flat</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ldtk/rules/FlatAutoTile/" class="type-link">FlatAutoTile</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ldtk/Tile/" class="type-link">ldtk.Tile</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#toJsonTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert flattened tiles to the `autoLayerTiles` JSON format

| Name | Type |
|------|------|
| `flat` | [Array](/api-docs/clay-native/Array/)<[FlatAutoTile](/api-docs/clay-native/ldtk/rules/FlatAutoTile/)> |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[ldtk.Tile](/api-docs/clay-native/ldtk/Tile/)> |

## Instance Members

<div class="signature field-var no-description" id="source"><code><span class="field-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/RuleSource/" class="type-link">RuleSource</a></code><a class="header-anchor" href="#source"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="target"><code><span class="field-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/RuleTarget/" class="type-link">RuleTarget</a></code><a class="header-anchor" href="#target"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tileset"><code><span class="field-name">tileset</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/RuleTileset/" class="type-link">RuleTileset</a></code><a class="header-anchor" href="#tileset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="matches"><code><span class="field-name">matches</span><span class="parenthesis">(</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/RuleDef/" class="type-link">RuleDef</a><span class="operator">,</span> <span class="arg-name">cx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cy</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">dirX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">dirY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#matches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Does the rule pattern match at given coord? dirX/dirY = -1 test the mirrored pattern.

| Name | Type | Default |
|------|------|---------|
| `r` | [RuleDef](/api-docs/clay-native/ldtk/rules/RuleDef/) | |
| `cx` | [Int](/api-docs/clay-native/Int/) | |
| `cy` | [Int](/api-docs/clay-native/Int/) | |
| `dirX` | [Int](/api-docs/clay-native/Int/) | `1` |
| `dirY` | [Int](/api-docs/clay-native/Int/) | `1` |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="applyRuleAt"><code><span class="field-name">applyRuleAt</span><span class="parenthesis">(</span><span class="arg-name">sink</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/AutoTileSink/" class="type-link">AutoTileSink</a><span class="operator">,</span> <span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/RuleDef/" class="type-link">RuleDef</a><span class="operator">,</span> <span class="arg-name">cx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cy</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#applyRuleAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check and apply a rule at given coord (all flip variants). Returns TRUE if the rule matched.
The sink must already be positioned on this rule (`beginRule`).

| Name | Type |
|------|------|
| `sink` | [AutoTileSink](/api-docs/clay-native/ldtk/rules/AutoTileSink/) |
| `r` | [RuleDef](/api-docs/clay-native/ldtk/rules/RuleDef/) |
| `cx` | [Int](/api-docs/clay-native/Int/) |
| `cy` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addRuleTilesAt"><code><span class="field-name">addRuleTilesAt</span><span class="parenthesis">(</span><span class="arg-name">sink</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/AutoTileSink/" class="type-link">AutoTileSink</a><span class="operator">,</span> <span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/RuleDef/" class="type-link">RuleDef</a><span class="operator">,</span> <span class="arg-name">cx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cy</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">flips</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addRuleTilesAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Produce the tiles of a matched rule at given coord, for given matching flips (bit0=X, bit1=Y)

| Name | Type |
|------|------|
| `sink` | [AutoTileSink](/api-docs/clay-native/ldtk/rules/AutoTileSink/) |
| `r` | [RuleDef](/api-docs/clay-native/ldtk/rules/RuleDef/) |
| `cx` | [Int](/api-docs/clay-native/Int/) |
| `cy` | [Int](/api-docs/clay-native/Int/) |
| `flips` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeAll"><code><span class="field-name">computeAll</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/FlatTileBuffer/" class="type-link">FlatTileBuffer</a><span class="operator">,</span> <span class="arg-name">rulesEvalOrder</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ldtk/rules/RuleDef/" class="type-link">RuleDef</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute every tile of the layer into `buffer` (reset first), with break-on-match applied on the fly.
Tiles are stored rule by rule in evaluation order, cells row by row; iterate the segments backwards to get the display order.

| Name | Type |
|------|------|
| `buffer` | [FlatTileBuffer](/api-docs/clay-native/ldtk/rules/FlatTileBuffer/) |
| `rulesEvalOrder` | [Array](/api-docs/clay-native/Array/)<[RuleDef](/api-docs/clay-native/ldtk/rules/RuleDef/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeFull"><code><span class="field-name">computeFull</span><span class="parenthesis">(</span><span class="arg-name">store</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/CellTileBuffer/" class="type-link">CellTileBuffer</a><span class="operator">,</span> <span class="arg-name">rulesEvalOrder</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ldtk/rules/RuleDef/" class="type-link">RuleDef</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#computeFull"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute every tile of the layer into a cell indexed store (emptied first). Returns the number of computed cells.

| Name | Type |
|------|------|
| `store` | [CellTileBuffer](/api-docs/clay-native/ldtk/rules/CellTileBuffer/) |
| `rulesEvalOrder` | [Array](/api-docs/clay-native/Array/)<[RuleDef](/api-docs/clay-native/ldtk/rules/RuleDef/)> |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeRect"><code><span class="field-name">computeRect</span><span class="parenthesis">(</span><span class="arg-name">store</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/CellTileBuffer/" class="type-link">CellTileBuffer</a><span class="operator">,</span> <span class="arg-name">rulesEvalOrder</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ldtk/rules/RuleDef/" class="type-link">RuleDef</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">cx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cy</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">wid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">hei</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#computeRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recompute the tiles of a rectangle of cells in a store previously filled by `computeFull` (or `computeRect`),
after the source IntGrid changed in that rectangle. The area is expanded by `MAX_RADIUS` so that every pattern
reading a modified cell is re-evaluated; break-on-match locks are reset and recomputed for these cells only.
The result is identical to a full recompute. Falls back to `computeFull` if the store does not match the layer
or if the rule list changed. Returns the number of recomputed cells.

| Name | Type |
|------|------|
| `store` | [CellTileBuffer](/api-docs/clay-native/ldtk/rules/CellTileBuffer/) |
| `rulesEvalOrder` | [Array](/api-docs/clay-native/Array/)<[RuleDef](/api-docs/clay-native/ldtk/rules/RuleDef/)> |
| `cx` | [Int](/api-docs/clay-native/Int/) |
| `cy` | [Int](/api-docs/clay-native/Int/) |
| `wid` | [Int](/api-docs/clay-native/Int/) |
| `hei` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="applyRulesInRect"><code><span class="field-name">applyRulesInRect</span><span class="parenthesis">(</span><span class="arg-name">cache</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/AutoTileCache/" class="type-link">AutoTileCache</a><span class="operator">,</span> <span class="arg-name">rulesEvalOrder</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ldtk/rules/RuleDef/" class="type-link">RuleDef</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">cx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cy</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">wid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">hei</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyRulesInRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recompute all rules in a rectangle (expanded to cover neighbouring patterns), then apply break-on-match on it

| Name | Type |
|------|------|
| `cache` | [AutoTileCache](/api-docs/clay-native/ldtk/rules/AutoTileCache/) |
| `rulesEvalOrder` | [Array](/api-docs/clay-native/Array/)<[RuleDef](/api-docs/clay-native/ldtk/rules/RuleDef/)> |
| `cx` | [Int](/api-docs/clay-native/Int/) |
| `cy` | [Int](/api-docs/clay-native/Int/) |
| `wid` | [Int](/api-docs/clay-native/Int/) |
| `hei` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="applyAll"><code><span class="field-name">applyAll</span><span class="parenthesis">(</span><span class="arg-name">cache</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/AutoTileCache/" class="type-link">AutoTileCache</a><span class="operator">,</span> <span class="arg-name">rulesEvalOrder</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ldtk/rules/RuleDef/" class="type-link">RuleDef</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recompute everything into an emptied cache

| Name | Type |
|------|------|
| `cache` | [AutoTileCache](/api-docs/clay-native/ldtk/rules/AutoTileCache/) |
| `rulesEvalOrder` | [Array](/api-docs/clay-native/Array/)<[RuleDef](/api-docs/clay-native/ldtk/rules/RuleDef/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="applyRuleEverywhere"><code><span class="field-name">applyRuleEverywhere</span><span class="parenthesis">(</span><span class="arg-name">cache</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/AutoTileCache/" class="type-link">AutoTileCache</a><span class="operator">,</span> <span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/RuleDef/" class="type-link">RuleDef</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyRuleEverywhere"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recompute a single rule on the whole layer (break-on-match is NOT applied, the caller decides)

| Name | Type |
|------|------|
| `cache` | [AutoTileCache](/api-docs/clay-native/ldtk/rules/AutoTileCache/) |
| `r` | [RuleDef](/api-docs/clay-native/ldtk/rules/RuleDef/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="applyBreakOnMatchesArea"><code><span class="field-name">applyBreakOnMatchesArea</span><span class="parenthesis">(</span><span class="arg-name">cache</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/AutoTileCache/" class="type-link">AutoTileCache</a><span class="operator">,</span> <span class="arg-name">rulesEvalOrder</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ldtk/rules/RuleDef/" class="type-link">RuleDef</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">cx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cy</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">wid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">hei</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyBreakOnMatchesArea"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Discard the tiles hidden by break-on-match rules (or opaque tiles) in given area

| Name | Type |
|------|------|
| `cache` | [AutoTileCache](/api-docs/clay-native/ldtk/rules/AutoTileCache/) |
| `rulesEvalOrder` | [Array](/api-docs/clay-native/Array/)<[RuleDef](/api-docs/clay-native/ldtk/rules/RuleDef/)> |
| `cx` | [Int](/api-docs/clay-native/Int/) |
| `cy` | [Int](/api-docs/clay-native/Int/) |
| `wid` | [Int](/api-docs/clay-native/Int/) |
| `hei` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/RuleSource/" class="type-link">RuleSource</a><span class="operator">,</span> <span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/RuleTarget/" class="type-link">RuleTarget</a><span class="operator">,</span> <span class="arg-name">tileset</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/RuleTileset/" class="type-link">RuleTileset</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `source` | [RuleSource](/api-docs/clay-native/ldtk/rules/RuleSource/) |
| `target` | [RuleTarget](/api-docs/clay-native/ldtk/rules/RuleTarget/) |
| `tileset` | [RuleTileset](/api-docs/clay-native/ldtk/rules/RuleTileset/) |

## Private Members

<div class="signature field-var no-description" id="mapSink"><code><span class="field-name">mapSink</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/MapAutoTileCache/" class="type-link">MapAutoTileCache</a></code><a class="header-anchor" href="#mapSink"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="locks"><code><span class="field-name">locks</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#locks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="addedTiles"><code><span class="field-name">addedTiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#addedTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="addedOpaque"><code><span class="field-name">addedOpaque</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#addedOpaque"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="trackOpaque"><code><span class="field-name">trackOpaque</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#trackOpaque"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="imin"><code><span class="field-name">imin</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#imin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Int](/api-docs/clay-native/Int/) |
| `b` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="imax"><code><span class="field-name">imax</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#imax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Int](/api-docs/clay-native/Int/) |
| `b` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ensureLocks"><code><span class="field-name">ensureLocks</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensureLocks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="termMatches"><code><span class="field-name">termMatches</span><span class="parenthesis">(</span><span class="arg-name">term</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#termMatches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check a single condition against an IntGrid value: +v = value required, -v = value forbidden, with the "anything" and group special values

| Name | Type |
|------|------|
| `term` | [Int](/api-docs/clay-native/Int/) |
| `value` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emit"><code><span class="field-name">emit</span><span class="parenthesis">(</span><span class="arg-name">sink</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/AutoTileSink/" class="type-link">AutoTileSink</a><span class="operator">,</span> <span class="arg-name">coordId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">tid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">flips</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sink` | [AutoTileSink](/api-docs/clay-native/ldtk/rules/AutoTileSink/) |
| `coordId` | [Int](/api-docs/clay-native/Int/) |
| `x` | [Int](/api-docs/clay-native/Int/) |
| `y` | [Int](/api-docs/clay-native/Int/) |
| `tid` | [Int](/api-docs/clay-native/Int/) |
| `flips` | [Int](/api-docs/clay-native/Int/) |
| `alpha` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="locksCell"><code><span class="field-name">locksCell</span><span class="parenthesis">(</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/RuleDef/" class="type-link">RuleDef</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#locksCell"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

TRUE if a rule that produced tiles in a cell prevents the following rules from rendering there

| Name | Type |
|------|------|
| `r` | [RuleDef](/api-docs/clay-native/ldtk/rules/RuleDef/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeCells"><code><span class="field-name">computeCells</span><span class="parenthesis">(</span><span class="arg-name">sink</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/rules/AutoTileSink/" class="type-link">AutoTileSink</a><span class="operator">,</span> <span class="arg-name">rulesEvalOrder</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ldtk/rules/RuleDef/" class="type-link">RuleDef</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">left</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">top</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">right</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bottom</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeCells"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared runtime loop: rules in evaluation order, cells of the rectangle (inclusive bounds) row by row, locks applied on the fly

| Name | Type |
|------|------|
| `sink` | [AutoTileSink](/api-docs/clay-native/ldtk/rules/AutoTileSink/) |
| `rulesEvalOrder` | [Array](/api-docs/clay-native/Array/)<[RuleDef](/api-docs/clay-native/ldtk/rules/RuleDef/)> |
| `left` | [Int](/api-docs/clay-native/Int/) |
| `top` | [Int](/api-docs/clay-native/Int/) |
| `right` | [Int](/api-docs/clay-native/Int/) |
| `bottom` | [Int](/api-docs/clay-native/Int/) |

