---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ZPP_Collide
target: Clay (Native)
permalink: api-docs/clay-native/zpp_nape/geom/ZPP_Collide/
---

# ZPP_Collide

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/zpp_nape/geom/Collide.hx">View source</a></div>

<div class="type-hierarchy"><strong>zpp_nape.geom.ZPP_Collide</strong> (Class)</div>

## Static Members

<div class="signature field-var no-description has-plugin" id="flowpoly"><div class="plugin-name">nape</div><code><span class="field-name">flowpoly</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_Vec2/" class="type-link">zpp_nape.util.ZNPList_ZPP_Vec2</a></code><a class="header-anchor" href="#flowpoly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="flowsegs"><div class="plugin-name">nape</div><code><span class="field-name">flowsegs</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_Vec2/" class="type-link">zpp_nape.util.ZNPList_ZPP_Vec2</a></code><a class="header-anchor" href="#flowsegs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="circleContains"><div class="plugin-name">nape</div><code><span class="field-name">circleContains</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/shape/ZPP_Circle/" class="type-link">zpp_nape.shape.ZPP_Circle</a><span class="operator">,</span> <span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/geom/ZPP_Vec2/" class="type-link">ZPP_Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#circleContains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | [zpp_nape.shape.ZPP_Circle](/api-docs/clay-native/zpp_nape/shape/ZPP_Circle/) |
| `p` | [ZPP_Vec2](/api-docs/clay-native/zpp_nape/geom/ZPP_Vec2/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="polyContains"><div class="plugin-name">nape</div><code><span class="field-name">polyContains</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/shape/ZPP_Polygon/" class="type-link">zpp_nape.shape.ZPP_Polygon</a><span class="operator">,</span> <span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/geom/ZPP_Vec2/" class="type-link">ZPP_Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#polyContains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [zpp_nape.shape.ZPP_Polygon](/api-docs/clay-native/zpp_nape/shape/ZPP_Polygon/) |
| `p` | [ZPP_Vec2](/api-docs/clay-native/zpp_nape/geom/ZPP_Vec2/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="shapeContains"><div class="plugin-name">nape</div><code><span class="field-name">shapeContains</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a><span class="operator">,</span> <span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/geom/ZPP_Vec2/" class="type-link">ZPP_Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#shapeContains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [zpp_nape.shape.ZPP_Shape](/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/) |
| `p` | [ZPP_Vec2](/api-docs/clay-native/zpp_nape/geom/ZPP_Vec2/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="bodyContains"><div class="plugin-name">nape</div><code><span class="field-name">bodyContains</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/phys/ZPP_Body/" class="type-link">zpp_nape.phys.ZPP_Body</a><span class="operator">,</span> <span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/geom/ZPP_Vec2/" class="type-link">ZPP_Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bodyContains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b` | [zpp_nape.phys.ZPP_Body](/api-docs/clay-native/zpp_nape/phys/ZPP_Body/) |
| `p` | [ZPP_Vec2](/api-docs/clay-native/zpp_nape/geom/ZPP_Vec2/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="containTest"><div class="plugin-name">nape</div><code><span class="field-name">containTest</span><span class="parenthesis">(</span><span class="arg-name">s1</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a><span class="operator">,</span> <span class="arg-name">s2</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#containTest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s1` | [zpp_nape.shape.ZPP_Shape](/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/) |
| `s2` | [zpp_nape.shape.ZPP_Shape](/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="contactCollide"><div class="plugin-name">nape</div><code><span class="field-name">contactCollide</span><span class="parenthesis">(</span><span class="arg-name">s1</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a><span class="operator">,</span> <span class="arg-name">s2</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a><span class="operator">,</span> <span class="arg-name">arb</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/dynamics/ZPP_ColArbiter/" class="type-link">zpp_nape.dynamics.ZPP_ColArbiter</a><span class="operator">,</span> <span class="arg-name">rev</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#contactCollide"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s1` | [zpp_nape.shape.ZPP_Shape](/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/) |
| `s2` | [zpp_nape.shape.ZPP_Shape](/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/) |
| `arb` | [zpp_nape.dynamics.ZPP_ColArbiter](/api-docs/clay-native/zpp_nape/dynamics/ZPP_ColArbiter/) |
| `rev` | [Bool](/api-docs/clay-native/Bool/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="testCollide_safe"><div class="plugin-name">nape</div><code><span class="field-name">testCollide_safe</span><span class="parenthesis">(</span><span class="arg-name">s1</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a><span class="operator">,</span> <span class="arg-name">s2</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#testCollide_safe"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s1` | [zpp_nape.shape.ZPP_Shape](/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/) |
| `s2` | [zpp_nape.shape.ZPP_Shape](/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="testCollide"><div class="plugin-name">nape</div><code><span class="field-name">testCollide</span><span class="parenthesis">(</span><span class="arg-name">s1</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a><span class="operator">,</span> <span class="arg-name">s2</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#testCollide"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s1` | [zpp_nape.shape.ZPP_Shape](/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/) |
| `s2` | [zpp_nape.shape.ZPP_Shape](/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="flowCollide"><div class="plugin-name">nape</div><code><span class="field-name">flowCollide</span><span class="parenthesis">(</span><span class="arg-name">s1</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a><span class="operator">,</span> <span class="arg-name">s2</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a><span class="operator">,</span> <span class="arg-name">arb</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/dynamics/ZPP_FluidArbiter/" class="type-link">zpp_nape.dynamics.ZPP_FluidArbiter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#flowCollide"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s1` | [zpp_nape.shape.ZPP_Shape](/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/) |
| `s2` | [zpp_nape.shape.ZPP_Shape](/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/) |
| `arb` | [zpp_nape.dynamics.ZPP_FluidArbiter](/api-docs/clay-native/zpp_nape/dynamics/ZPP_FluidArbiter/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

