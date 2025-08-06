---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ZPP_SweepDistance
target: Clay (Web)
permalink: api-docs/clay-web/zpp_nape/geom/ZPP_SweepDistance/
---

# ZPP_SweepDistance

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/zpp_nape/geom/SweepDistance.hx">View source</a></div>

<div class="type-hierarchy"><strong>zpp_nape.geom.ZPP_SweepDistance</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description has-plugin" id="dynamicSweep"><div class="plugin-name">nape</div><code><span class="field-name">dynamicSweep</span><span class="parenthesis">(</span><span class="arg-name">toi</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_ToiEvent/" class="type-link">ZPP_ToiEvent</a><span class="operator">,</span> <span class="arg-name">timeStep</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">lowerBound</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">negRadius</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">userAPI</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dynamicSweep"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `toi` | [ZPP_ToiEvent](/api-docs/clay-web/zpp_nape/geom/ZPP_ToiEvent/) | |
| `timeStep` | [Float](/api-docs/clay-web/Float/) | |
| `lowerBound` | [Float](/api-docs/clay-web/Float/) | |
| `negRadius` | [Float](/api-docs/clay-web/Float/) | |
| `userAPI` | [Bool](/api-docs/clay-web/Bool/) | `false` |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="staticSweep"><div class="plugin-name">nape</div><code><span class="field-name">staticSweep</span><span class="parenthesis">(</span><span class="arg-name">toi</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_ToiEvent/" class="type-link">ZPP_ToiEvent</a><span class="operator">,</span> <span class="arg-name">timeStep</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">lowerBound</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">negRadius</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#staticSweep"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `toi` | [ZPP_ToiEvent](/api-docs/clay-web/zpp_nape/geom/ZPP_ToiEvent/) |
| `timeStep` | [Float](/api-docs/clay-web/Float/) |
| `lowerBound` | [Float](/api-docs/clay-web/Float/) |
| `negRadius` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="distanceBody"><div class="plugin-name">nape</div><code><span class="field-name">distanceBody</span><span class="parenthesis">(</span><span class="arg-name">b1</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/phys/ZPP_Body/" class="type-link">zpp_nape.phys.ZPP_Body</a><span class="operator">,</span> <span class="arg-name">b2</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/phys/ZPP_Body/" class="type-link">zpp_nape.phys.ZPP_Body</a><span class="operator">,</span> <span class="arg-name">w1</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_Vec2/" class="type-link">ZPP_Vec2</a><span class="operator">,</span> <span class="arg-name">w2</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_Vec2/" class="type-link">ZPP_Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#distanceBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b1` | [zpp_nape.phys.ZPP_Body](/api-docs/clay-web/zpp_nape/phys/ZPP_Body/) |
| `b2` | [zpp_nape.phys.ZPP_Body](/api-docs/clay-web/zpp_nape/phys/ZPP_Body/) |
| `w1` | [ZPP_Vec2](/api-docs/clay-web/zpp_nape/geom/ZPP_Vec2/) |
| `w2` | [ZPP_Vec2](/api-docs/clay-web/zpp_nape/geom/ZPP_Vec2/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="distance"><div class="plugin-name">nape</div><code><span class="field-name">distance</span><span class="parenthesis">(</span><span class="arg-name">s1</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a><span class="operator">,</span> <span class="arg-name">s2</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a><span class="operator">,</span> <span class="arg-name">w1</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_Vec2/" class="type-link">ZPP_Vec2</a><span class="operator">,</span> <span class="arg-name">w2</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_Vec2/" class="type-link">ZPP_Vec2</a><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_Vec2/" class="type-link">ZPP_Vec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">upperBound</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1e100</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#distance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `s1` | [zpp_nape.shape.ZPP_Shape](/api-docs/clay-web/zpp_nape/shape/ZPP_Shape/) | |
| `s2` | [zpp_nape.shape.ZPP_Shape](/api-docs/clay-web/zpp_nape/shape/ZPP_Shape/) | |
| `w1` | [ZPP_Vec2](/api-docs/clay-web/zpp_nape/geom/ZPP_Vec2/) | |
| `w2` | [ZPP_Vec2](/api-docs/clay-web/zpp_nape/geom/ZPP_Vec2/) | |
| `axis` | [ZPP_Vec2](/api-docs/clay-web/zpp_nape/geom/ZPP_Vec2/) | |
| `upperBound` | [Float](/api-docs/clay-web/Float/) | `1e100` |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

