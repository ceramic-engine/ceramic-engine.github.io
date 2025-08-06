---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ZPP_ConvexRayResult
target: Headless
permalink: api-docs/headless/zpp_nape/geom/ZPP_ConvexRayResult/
---

# ZPP_ConvexRayResult

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/zpp_nape/geom/ConvexRayResult.hx">View source</a></div>

<div class="type-hierarchy"><strong>zpp_nape.geom.ZPP_ConvexRayResult</strong> (Class)</div>

## Static Members

<div class="signature field-var no-description has-plugin" id="internal"><div class="plugin-name">nape</div><code><span class="field-name">internal</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#internal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getRay"><div class="plugin-name">nape</div><code><span class="field-name">getRay</span><span class="parenthesis">(</span><span class="arg-name">normal</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">inner</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">shape</span><span class="operator">:</span> <a href="/api-docs/headless/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/RayResult/" class="type-link">nape.geom.RayResult</a></code><a class="header-anchor" href="#getRay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `normal` | [nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/) |
| `time` | [Float](/api-docs/headless/Float/) |
| `inner` | [Bool](/api-docs/headless/Bool/) |
| `shape` | [nape.shape.Shape](/api-docs/headless/nape/shape/Shape/) |

| Returns |
|---------|
| [nape.geom.RayResult](/api-docs/headless/nape/geom/RayResult/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getConvex"><div class="plugin-name">nape</div><code><span class="field-name">getConvex</span><span class="parenthesis">(</span><span class="arg-name">normal</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">,</span> <span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">,</span> <span class="arg-name">toiDistance</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">shape</span><span class="operator">:</span> <a href="/api-docs/headless/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/ConvexResult/" class="type-link">nape.geom.ConvexResult</a></code><a class="header-anchor" href="#getConvex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `normal` | [nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/) |
| `position` | [nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/) |
| `toiDistance` | [Float](/api-docs/headless/Float/) |
| `shape` | [nape.shape.Shape](/api-docs/headless/nape/shape/Shape/) |

| Returns |
|---------|
| [nape.geom.ConvexResult](/api-docs/headless/nape/geom/ConvexResult/) |

## Instance Members

<div class="signature field-var no-description has-plugin" id="normal"><div class="plugin-name">nape</div><code><span class="field-name">normal</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#normal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="shape"><div class="plugin-name">nape</div><code><span class="field-name">shape</span><span class="operator">:</span> <a href="/api-docs/headless/nape/shape/Shape/" class="type-link">nape.shape.Shape</a></code><a class="header-anchor" href="#shape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="convex"><div class="plugin-name">nape</div><code><span class="field-name">convex</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/ConvexResult/" class="type-link">nape.geom.ConvexResult</a></code><a class="header-anchor" href="#convex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="position"><div class="plugin-name">nape</div><code><span class="field-name">position</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="ray"><div class="plugin-name">nape</div><code><span class="field-name">ray</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/RayResult/" class="type-link">nape.geom.RayResult</a></code><a class="header-anchor" href="#ray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="inner"><div class="plugin-name">nape</div><code><span class="field-name">inner</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="next"><div class="plugin-name">nape</div><code><span class="field-name">next</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_ConvexRayResult</a></code><a class="header-anchor" href="#next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="toiDistance"><div class="plugin-name">nape</div><code><span class="field-name">toiDistance</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#toiDistance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="disposed"><div class="plugin-name">nape</div><code><span class="field-name">disposed</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#disposed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="free"><div class="plugin-name">nape</div><code><span class="field-name">free</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#free"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="convexPool"><div class="plugin-name">nape</div><code><span class="field-name">convexPool</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_ConvexRayResult</a></code><a class="header-anchor" href="#convexPool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="rayPool"><div class="plugin-name">nape</div><code><span class="field-name">rayPool</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_ConvexRayResult</a></code><a class="header-anchor" href="#rayPool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

