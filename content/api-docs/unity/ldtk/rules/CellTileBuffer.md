---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk-haxe-api
title: CellTileBuffer
target: Unity
permalink: api-docs/unity/ldtk/rules/CellTileBuffer/
---

# CellTileBuffer

<div class="type-hierarchy"><strong>ldtk.rules.CellTileBuffer</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/ldtk/rules/AutoTileSink/">AutoTileSink</a></div>

Cell indexed tile store for runtime use, supporting partial recomputes: the tiles of any cell can be cleared and
rewritten in place (`RuleEngine.computeRect`). Records live in a reusable pool of `STRIDE` ints, chained per cell;
the capacity is kept between computes and nothing is allocated once the pool has reached its peak size.
Record layout: ruleIndex (index in the evaluation order), tid, flips, x, y, srcX, srcY, alpha*4096, next record (-1 = end).

## Static Members

<div class="signature field-var no-description" id="STRIDE"><code><span class="field-name">STRIDE</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STRIDE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var no-description" id="records"><code><span class="field-name">records</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#records"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="cellCount"><code><span class="field-name">cellCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cellCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of cells of the layer (set by `reset`)

<hr class="field-separator" />

<div class="signature field-var no-description" id="tileCount"><code><span class="field-name">tileCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tileCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="rulesCount"><code><span class="field-name">rulesCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#rulesCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of rules declared by the last `setRules`

<hr class="field-separator" />

<div class="signature field-method has-description" id="reset"><code><span class="field-name">reset</span><span class="parenthesis">(</span><span class="arg-name">cellCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Size the store for a layer of `cellCount` cells and empty it

| Name | Type |
|------|------|
| `cellCount` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setRules"><code><span class="field-name">setRules</span><span class="parenthesis">(</span><span class="arg-name">rulesEvalOrder</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ldtk/rules/RuleDef/" class="type-link">RuleDef</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#setRules"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Declare the rules of the next compute (evaluation order). Must be called before `beginRule`.
Returns TRUE if the rule list differs from the previous one: the stored rule indexes are then stale
and the store must be fully recomputed.

| Name | Type |
|------|------|
| `rulesEvalOrder` | [Array](/api-docs/unity/Array/)<[RuleDef](/api-docs/unity/ldtk/rules/RuleDef/)> |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginRule"><code><span class="field-name">beginRule</span><span class="parenthesis">(</span><span class="arg-name">ruleUid</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ruleUid` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">coordId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">tid</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">flips</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `coordId` | [Int](/api-docs/unity/Int/) |
| `x` | [Int](/api-docs/unity/Int/) |
| `y` | [Int](/api-docs/unity/Int/) |
| `srcX` | [Int](/api-docs/unity/Int/) |
| `srcY` | [Int](/api-docs/unity/Int/) |
| `tid` | [Int](/api-docs/unity/Int/) |
| `flips` | [Int](/api-docs/unity/Int/) |
| `a` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearCell"><code><span class="field-name">clearCell</span><span class="parenthesis">(</span><span class="arg-name">coordId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearCell"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove the tiles of a cell (the records go back to the free list)

| Name | Type |
|------|------|
| `coordId` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearRect"><code><span class="field-name">clearRect</span><span class="parenthesis">(</span><span class="arg-name">left</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">top</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">right</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bottom</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove the tiles of every cell of a rectangle (inclusive bounds)

| Name | Type |
|------|------|
| `left` | [Int](/api-docs/unity/Int/) |
| `top` | [Int](/api-docs/unity/Int/) |
| `right` | [Int](/api-docs/unity/Int/) |
| `bottom` | [Int](/api-docs/unity/Int/) |
| `w` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeDisplayOrder"><code><span class="field-name">writeDisplayOrder</span><span class="parenthesis">(</span><span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#writeDisplayOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Write every tile in display order (rules from the last evaluated to the first, cells in ascending order,
tiles of a cell in production order) as 7 ints per tile: tid, flips, x, y, srcX, srcY, alpha*4096.
This is the `autoLayerTiles` layout and the exact order produced by `RuleEngine.flatten` in the editor.
`out` is reused and resized; returns the number of ints written.

| Name | Type |
|------|------|
| `out` | [Array](/api-docs/unity/Array/)<[Int](/api-docs/unity/Int/)> |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="cellHead"><code><span class="field-name">cellHead</span><span class="parenthesis">(</span><span class="arg-name">coordId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cellHead"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

First record of a cell, or -1

| Name | Type |
|------|------|
| `coordId` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="recordNext"><code><span class="field-name">recordNext</span><span class="parenthesis">(</span><span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#recordNext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Record following `i`, or -1

| Name | Type |
|------|------|
| `i` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="head"><code><span class="field-name">head</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#head"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tail"><code><span class="field-name">tail</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tail"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="countByRule"><code><span class="field-name">countByRule</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#countByRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ruleIndexByUid"><code><span class="field-name">ruleIndexByUid</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#ruleIndexByUid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="freeHead"><code><span class="field-name">freeHead</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#freeHead"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="used"><code><span class="field-name">used</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#used"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="curRuleIndex"><code><span class="field-name">curRuleIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#curRuleIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

