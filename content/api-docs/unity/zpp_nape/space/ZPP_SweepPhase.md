---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ZPP_SweepPhase
target: Unity
permalink: api-docs/unity/zpp_nape/space/ZPP_SweepPhase/
---

# ZPP_SweepPhase

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/zpp_nape/space/SweepPhase.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/zpp_nape/space/ZPP_Broadphase/">ZPP_Broadphase</a> → <strong>zpp_nape.space.ZPP_SweepPhase</strong> (Class)</div>

## Instance Members

<div class="signature field-var no-description has-plugin" id="list"><div class="plugin-name">nape</div><code><span class="field-name">list</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/space/ZPP_SweepData/" class="type-link">ZPP_SweepData</a></code><a class="header-anchor" href="#list"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="failed"><div class="plugin-name">nape</div><code><span class="field-name">failed</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a></code><a class="header-anchor" href="#failed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="sync_broadphase"><div class="plugin-name">nape</div><code><span class="field-name">sync_broadphase</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sync_broadphase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="sync_broadphase_fast"><div class="plugin-name">nape</div><code><span class="field-name">sync_broadphase_fast</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sync_broadphase_fast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="broadphase"><div class="plugin-name">nape</div><code><span class="field-name">broadphase</span><span class="parenthesis">(</span><span class="arg-name">space</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/space/ZPP_Space/" class="type-link">ZPP_Space</a><span class="operator">,</span> <span class="arg-name">discrete</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#broadphase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `space` | [ZPP_Space](/api-docs/unity/zpp_nape/space/ZPP_Space/) |
| `discrete` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clear"><div class="plugin-name">nape</div><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="shapesUnderPoint"><div class="plugin-name">nape</div><code><span class="field-name">shapesUnderPoint</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/unity/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a></code><a class="header-anchor" href="#shapesUnderPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/) |
| `output` | [nape.shape.ShapeList](/api-docs/unity/nape/shape/ShapeList/) |

| Returns |
|---------|
| [nape.shape.ShapeList](/api-docs/unity/nape/shape/ShapeList/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="bodiesUnderPoint"><div class="plugin-name">nape</div><code><span class="field-name">bodiesUnderPoint</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a></code><a class="header-anchor" href="#bodiesUnderPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/) |
| `output` | [nape.phys.BodyList](/api-docs/unity/nape/phys/BodyList/) |

| Returns |
|---------|
| [nape.phys.BodyList](/api-docs/unity/nape/phys/BodyList/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="shapesInAABB"><div class="plugin-name">nape</div><code><span class="field-name">shapesInAABB</span><span class="parenthesis">(</span><span class="arg-name">aabb</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/geom/ZPP_AABB/" class="type-link">zpp_nape.geom.ZPP_AABB</a><span class="operator">,</span> <span class="arg-name">strict</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">containment</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/unity/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a></code><a class="header-anchor" href="#shapesInAABB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aabb` | [zpp_nape.geom.ZPP_AABB](/api-docs/unity/zpp_nape/geom/ZPP_AABB/) |
| `strict` | [Bool](/api-docs/unity/Bool/) |
| `containment` | [Bool](/api-docs/unity/Bool/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/) |
| `output` | [nape.shape.ShapeList](/api-docs/unity/nape/shape/ShapeList/) |

| Returns |
|---------|
| [nape.shape.ShapeList](/api-docs/unity/nape/shape/ShapeList/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="bodiesInAABB"><div class="plugin-name">nape</div><code><span class="field-name">bodiesInAABB</span><span class="parenthesis">(</span><span class="arg-name">aabb</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/geom/ZPP_AABB/" class="type-link">zpp_nape.geom.ZPP_AABB</a><span class="operator">,</span> <span class="arg-name">strict</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">containment</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a></code><a class="header-anchor" href="#bodiesInAABB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aabb` | [zpp_nape.geom.ZPP_AABB](/api-docs/unity/zpp_nape/geom/ZPP_AABB/) |
| `strict` | [Bool](/api-docs/unity/Bool/) |
| `containment` | [Bool](/api-docs/unity/Bool/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/) |
| `output` | [nape.phys.BodyList](/api-docs/unity/nape/phys/BodyList/) |

| Returns |
|---------|
| [nape.phys.BodyList](/api-docs/unity/nape/phys/BodyList/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="shapesInCircle"><div class="plugin-name">nape</div><code><span class="field-name">shapesInCircle</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">containment</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/unity/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a></code><a class="header-anchor" href="#shapesInCircle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |
| `r` | [Float](/api-docs/unity/Float/) |
| `containment` | [Bool](/api-docs/unity/Bool/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/) |
| `output` | [nape.shape.ShapeList](/api-docs/unity/nape/shape/ShapeList/) |

| Returns |
|---------|
| [nape.shape.ShapeList](/api-docs/unity/nape/shape/ShapeList/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="bodiesInCircle"><div class="plugin-name">nape</div><code><span class="field-name">bodiesInCircle</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">containment</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a></code><a class="header-anchor" href="#bodiesInCircle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |
| `r` | [Float](/api-docs/unity/Float/) |
| `containment` | [Bool](/api-docs/unity/Bool/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/) |
| `output` | [nape.phys.BodyList](/api-docs/unity/nape/phys/BodyList/) |

| Returns |
|---------|
| [nape.phys.BodyList](/api-docs/unity/nape/phys/BodyList/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="shapesInShape"><div class="plugin-name">nape</div><code><span class="field-name">shapesInShape</span><span class="parenthesis">(</span><span class="arg-name">shape</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a><span class="operator">,</span> <span class="arg-name">containment</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/unity/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a></code><a class="header-anchor" href="#shapesInShape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shape` | [zpp_nape.shape.ZPP_Shape](/api-docs/unity/zpp_nape/shape/ZPP_Shape/) |
| `containment` | [Bool](/api-docs/unity/Bool/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/) |
| `output` | [nape.shape.ShapeList](/api-docs/unity/nape/shape/ShapeList/) |

| Returns |
|---------|
| [nape.shape.ShapeList](/api-docs/unity/nape/shape/ShapeList/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="bodiesInShape"><div class="plugin-name">nape</div><code><span class="field-name">bodiesInShape</span><span class="parenthesis">(</span><span class="arg-name">shape</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a><span class="operator">,</span> <span class="arg-name">containment</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a></code><a class="header-anchor" href="#bodiesInShape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shape` | [zpp_nape.shape.ZPP_Shape](/api-docs/unity/zpp_nape/shape/ZPP_Shape/) |
| `containment` | [Bool](/api-docs/unity/Bool/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/) |
| `output` | [nape.phys.BodyList](/api-docs/unity/nape/phys/BodyList/) |

| Returns |
|---------|
| [nape.phys.BodyList](/api-docs/unity/nape/phys/BodyList/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rayCast"><div class="plugin-name">nape</div><code><span class="field-name">rayCast</span><span class="parenthesis">(</span><span class="arg-name">ray</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/geom/ZPP_Ray/" class="type-link">zpp_nape.geom.ZPP_Ray</a><span class="operator">,</span> <span class="arg-name">inner</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/RayResult/" class="type-link">nape.geom.RayResult</a></code><a class="header-anchor" href="#rayCast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ray` | [zpp_nape.geom.ZPP_Ray](/api-docs/unity/zpp_nape/geom/ZPP_Ray/) |
| `inner` | [Bool](/api-docs/unity/Bool/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/) |

| Returns |
|---------|
| [nape.geom.RayResult](/api-docs/unity/nape/geom/RayResult/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rayMultiCast"><div class="plugin-name">nape</div><code><span class="field-name">rayMultiCast</span><span class="parenthesis">(</span><span class="arg-name">ray</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/geom/ZPP_Ray/" class="type-link">zpp_nape.geom.ZPP_Ray</a><span class="operator">,</span> <span class="arg-name">inner</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/RayResultList/" class="type-link">nape.geom.RayResultList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/RayResultList/" class="type-link">nape.geom.RayResultList</a></code><a class="header-anchor" href="#rayMultiCast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ray` | [zpp_nape.geom.ZPP_Ray](/api-docs/unity/zpp_nape/geom/ZPP_Ray/) |
| `inner` | [Bool](/api-docs/unity/Bool/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/) |
| `output` | [nape.geom.RayResultList](/api-docs/unity/nape/geom/RayResultList/) |

| Returns |
|---------|
| [nape.geom.RayResultList](/api-docs/unity/nape/geom/RayResultList/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">space</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/space/ZPP_Space/" class="type-link">ZPP_Space</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `space` | [ZPP_Space](/api-docs/unity/zpp_nape/space/ZPP_Space/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

