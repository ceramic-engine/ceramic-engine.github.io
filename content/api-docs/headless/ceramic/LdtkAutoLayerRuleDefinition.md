---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkAutoLayerRuleDefinition
target: Headless
permalink: api-docs/headless/ceramic/LdtkAutoLayerRuleDefinition/
---

# LdtkAutoLayerRuleDefinition

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LdtkAutoLayerRuleDefinition</strong> (Class)</div>

This complex section isn't meant to be used by game devs according to LDtk documentation,
but Ceramic auto-tiling rules can be generated from these so they may still be useful for us
if we want to edit a map in game while still fully working auto-layer rules from LDtk.
The use of this is opt-in. Default map loading is using already resolved tiles.

## Instance Members

<div class="signature field-var has-description has-plugin" id="active"><div class="plugin-name">ldtk</div><code><span class="field-name">active</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#active"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If `false`, the rule effect isn't applied, and no tiles are generated.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="breakOnMatch"><div class="plugin-name">ldtk</div><code><span class="field-name">breakOnMatch</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#breakOnMatch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When `true`, the rule will prevent other rules to be applied in the same cell if it matches (`true` by default).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="chance"><div class="plugin-name">ldtk</div><code><span class="field-name">chance</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#chance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Chances for this rule to be applied (0 to 1)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="checker"><div class="plugin-name">ldtk</div><code><span class="field-name">checker</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/LdtkCheckerMode/" class="type-link">LdtkCheckerMode</a></code><a class="header-anchor" href="#checker"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checker mode

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="flipX"><div class="plugin-name">ldtk</div><code><span class="field-name">flipX</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#flipX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If `true`, allow rule to be matched by flipping its pattern horizontally

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="flipY"><div class="plugin-name">ldtk</div><code><span class="field-name">flipY</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#flipY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If `true`, allow rule to be matched by flipping its pattern vertically

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="outOfBoundsValue"><div class="plugin-name">ldtk</div><code><span class="field-name">outOfBoundsValue</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#outOfBoundsValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default IntGrid value when checking cells outside of level bounds

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pattern"><div class="plugin-name">ldtk</div><code><span class="field-name">pattern</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pattern"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rule pattern (size x size). Each cell holds its first condition:
0 = ignored, +v = IntGrid value v required, -v = value v forbidden (see `patternAlt` for extra conditions).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="patternAlt"><div class="plugin-name">ldtk</div><code><span class="field-name">patternAlt</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#patternAlt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extra conditions per pattern cell (same size and order as `pattern`, same value encoding).
Each entry is an empty array when the cell has a single condition.
A cell matches if (it has no required value, or the cell value is one of the required values)
AND (the cell value is none of the forbidden values).
(added in LDtk 1.5.4)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="perlinActive"><div class="plugin-name">ldtk</div><code><span class="field-name">perlinActive</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#perlinActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If `true`, enable Perlin filtering to only apply rule on specific random area

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="perlinOctaves"><div class="plugin-name">ldtk</div><code><span class="field-name">perlinOctaves</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#perlinOctaves"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="perlinScale"><div class="plugin-name">ldtk</div><code><span class="field-name">perlinScale</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#perlinScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="perlinSeed"><div class="plugin-name">ldtk</div><code><span class="field-name">perlinSeed</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#perlinSeed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pivotX"><div class="plugin-name">ldtk</div><code><span class="field-name">pivotX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pivotX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

X pivot of a tile stamp (0-1)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pivotY"><div class="plugin-name">ldtk</div><code><span class="field-name">pivotY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pivotY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Y pivot of a tile stamp (0-1)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="size"><div class="plugin-name">ldtk</div><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pattern width & height. Should only be 1,3,5 or 7.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileIds"><div class="plugin-name">ldtk</div><code><span class="field-name">tileIds</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tileIds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of all the tile IDs, flattened from `tileRectsIds`.
Deprecated in LDtk 1.5.0 in favor of `tileRectsIds`, but still filled for convenience.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileRectsIds"><div class="plugin-name">ldtk</div><code><span class="field-name">tileRectsIds</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#tileRectsIds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array containing all the possible tile IDs rectangles (picked randomly).
Each entry is a list of tile IDs: a single tile in `Single` tile mode, or a rectangle of tiles in `Stamp` tile mode.
(added in LDtk 1.5.0, replaces `tileIds`)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileRandomFlipX"><div class="plugin-name">ldtk</div><code><span class="field-name">tileRandomFlipX</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#tileRandomFlipX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If `true`, the tile(s) rendered by this rule can be randomly flipped horizontally.
This doesn't affect the pattern matching (see `flipX` for that).
The resulting flips are already baked in the `autoLayerTiles` flip bits.
(added in LDtk 1.5.4)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileRandomFlipY"><div class="plugin-name">ldtk</div><code><span class="field-name">tileRandomFlipY</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#tileRandomFlipY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If `true`, the tile(s) rendered by this rule can be randomly flipped vertically.
This doesn't affect the pattern matching (see `flipY` for that).
The resulting flips are already baked in the `autoLayerTiles` flip bits.
(added in LDtk 1.5.4)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileMode"><div class="plugin-name">ldtk</div><code><span class="field-name">tileMode</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/LdtkTileMode/" class="type-link">LdtkTileMode</a></code><a class="header-anchor" href="#tileMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Defines how `tileRectsIds` array is used

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="uid"><div class="plugin-name">ldtk</div><code><span class="field-name">uid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#uid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique Int identifier

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="xModulo"><div class="plugin-name">ldtk</div><code><span class="field-name">xModulo</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#xModulo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

X cell coord modulo

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="xOffset"><div class="plugin-name">ldtk</div><code><span class="field-name">xOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#xOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

X cell start offset

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="yModulo"><div class="plugin-name">ldtk</div><code><span class="field-name">yModulo</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#yModulo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Y cell coord modulo

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="yOffset"><div class="plugin-name">ldtk</div><code><span class="field-name">yOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#yOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Y cell start offset

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="rule"><div class="plugin-name">ldtk</div><code><span class="field-name">rule</span><span class="operator">:</span> <a href="/api-docs/headless/ldtk/rules/RuleDef/" class="type-link">ldtk.rules.RuleDef</a></code><a class="header-anchor" href="#rule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This rule as used by the LDtk rule engine (`ldtk.rules.RuleEngine`), to recompute auto-layer tiles at runtime.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">ldtk</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `json` | [haxe.DynamicAccess](/api-docs/headless/haxe/DynamicAccess/)<[Dynamic](/api-docs/headless/Dynamic/)> | *(optional)* |

