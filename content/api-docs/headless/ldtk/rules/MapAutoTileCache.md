---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk-haxe-api
title: MapAutoTileCache
target: Headless
permalink: api-docs/headless/ldtk/rules/MapAutoTileCache/
---

# MapAutoTileCache

<div class="type-hierarchy"><strong>ldtk.rules.MapAutoTileCache</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/ldtk/rules/AutoTileSink/">AutoTileSink</a></div>

Sink writing into an editor style `AutoTileCache` (one object per tile, editable per rule and per cell)

## Instance Members

<div class="signature field-var no-description" id="cache"><code><span class="field-name">cache</span><span class="operator">:</span> <a href="/api-docs/headless/ldtk/rules/AutoTileCache/" class="type-link">AutoTileCache</a></code><a class="header-anchor" href="#cache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginRule"><code><span class="field-name">beginRule</span><span class="parenthesis">(</span><span class="arg-name">ruleUid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ruleUid` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">coordId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">tid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">flips</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `coordId` | [Int](/api-docs/headless/Int/) |
| `x` | [Int](/api-docs/headless/Int/) |
| `y` | [Int](/api-docs/headless/Int/) |
| `srcX` | [Int](/api-docs/headless/Int/) |
| `srcY` | [Int](/api-docs/headless/Int/) |
| `tid` | [Int](/api-docs/headless/Int/) |
| `flips` | [Int](/api-docs/headless/Int/) |
| `a` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">cache</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ldtk/rules/AutoTileCache/" class="type-link">AutoTileCache</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `cache` | [Null](/api-docs/headless/Null/)<[AutoTileCache](/api-docs/headless/ldtk/rules/AutoTileCache/)> | *(optional)* |

## Private Members

<div class="signature field-var no-description" id="cur"><code><span class="field-name">cur</span><span class="operator">:</span> <a href="/api-docs/headless/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#cur"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

