---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk-haxe-api
title: AutoTileSink
target: Clay (Native)
permalink: api-docs/clay-native/ldtk/rules/AutoTileSink/
---

# AutoTileSink

<div class="type-hierarchy"><strong>ldtk.rules.AutoTileSink</strong> (Interface) → <a href="/api-docs/clay-native/ldtk/rules/CellTileBuffer/">CellTileBuffer</a>, <a href="/api-docs/clay-native/ldtk/rules/FlatTileBuffer/">FlatTileBuffer</a>, <a href="/api-docs/clay-native/ldtk/rules/MapAutoTileCache/">MapAutoTileCache</a></div>

Receives the tiles produced by the engine. Implementations must not allocate per tile in hot paths when possible.

## Instance Members

<div class="signature field-method has-description" id="beginRule"><code><span class="field-name">beginRule</span><span class="parenthesis">(</span><span class="arg-name">ruleUid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called before the tiles of a rule are added

| Name | Type |
|------|------|
| `ruleUid` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">coordId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">tid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">flips</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `coordId` | [Int](/api-docs/clay-native/Int/) |
| `x` | [Int](/api-docs/clay-native/Int/) |
| `y` | [Int](/api-docs/clay-native/Int/) |
| `srcX` | [Int](/api-docs/clay-native/Int/) |
| `srcY` | [Int](/api-docs/clay-native/Int/) |
| `tid` | [Int](/api-docs/clay-native/Int/) |
| `flips` | [Int](/api-docs/clay-native/Int/) |
| `a` | [Float](/api-docs/clay-native/Float/) |

