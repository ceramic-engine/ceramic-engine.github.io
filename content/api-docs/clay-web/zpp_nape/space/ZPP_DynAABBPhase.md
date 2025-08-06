---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ZPP_DynAABBPhase
target: Clay (Web)
permalink: api-docs/clay-web/zpp_nape/space/ZPP_DynAABBPhase/
---

# ZPP_DynAABBPhase

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/zpp_nape/space/DynAABBPhase.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/zpp_nape/space/ZPP_Broadphase/">ZPP_Broadphase</a> → <strong>zpp_nape.space.ZPP_DynAABBPhase</strong> (Class)</div>

## Instance Members

<div class="signature field-var no-description has-plugin" id="stree"><div class="plugin-name">nape</div><code><span class="field-name">stree</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/space/ZPP_AABBTree/" class="type-link">ZPP_AABBTree</a></code><a class="header-anchor" href="#stree"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="dtree"><div class="plugin-name">nape</div><code><span class="field-name">dtree</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/space/ZPP_AABBTree/" class="type-link">ZPP_AABBTree</a></code><a class="header-anchor" href="#dtree"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="pairs"><div class="plugin-name">nape</div><code><span class="field-name">pairs</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/space/ZPP_AABBPair/" class="type-link">ZPP_AABBPair</a></code><a class="header-anchor" href="#pairs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="syncs"><div class="plugin-name">nape</div><code><span class="field-name">syncs</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/space/ZPP_AABBNode/" class="type-link">ZPP_AABBNode</a></code><a class="header-anchor" href="#syncs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="moves"><div class="plugin-name">nape</div><code><span class="field-name">moves</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/space/ZPP_AABBNode/" class="type-link">ZPP_AABBNode</a></code><a class="header-anchor" href="#moves"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="treeStack2"><div class="plugin-name">nape</div><code><span class="field-name">treeStack2</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_AABBNode/" class="type-link">zpp_nape.util.ZNPList_ZPP_AABBNode</a></code><a class="header-anchor" href="#treeStack2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="failed"><div class="plugin-name">nape</div><code><span class="field-name">failed</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a></code><a class="header-anchor" href="#failed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="openlist"><div class="plugin-name">nape</div><code><span class="field-name">openlist</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_AABBNode/" class="type-link">zpp_nape.util.ZNPList_ZPP_AABBNode</a></code><a class="header-anchor" href="#openlist"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="dyn"><div class="plugin-name">nape</div><code><span class="field-name">dyn</span><span class="parenthesis">(</span><span class="arg-name">shape</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dyn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shape` | [zpp_nape.shape.ZPP_Shape](/api-docs/clay-web/zpp_nape/shape/ZPP_Shape/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="sync_broadphase"><div class="plugin-name">nape</div><code><span class="field-name">sync_broadphase</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sync_broadphase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="broadphase"><div class="plugin-name">nape</div><code><span class="field-name">broadphase</span><span class="parenthesis">(</span><span class="arg-name">space</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/space/ZPP_Space/" class="type-link">ZPP_Space</a><span class="operator">,</span> <span class="arg-name">discrete</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#broadphase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `space` | [ZPP_Space](/api-docs/clay-web/zpp_nape/space/ZPP_Space/) |
| `discrete` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clear"><div class="plugin-name">nape</div><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="shapesUnderPoint"><div class="plugin-name">nape</div><code><span class="field-name">shapesUnderPoint</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a></code><a class="header-anchor" href="#shapesUnderPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/) |
| `output` | [nape.shape.ShapeList](/api-docs/clay-web/nape/shape/ShapeList/) |

| Returns |
|---------|
| [nape.shape.ShapeList](/api-docs/clay-web/nape/shape/ShapeList/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="bodiesUnderPoint"><div class="plugin-name">nape</div><code><span class="field-name">bodiesUnderPoint</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a></code><a class="header-anchor" href="#bodiesUnderPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/) |
| `output` | [nape.phys.BodyList](/api-docs/clay-web/nape/phys/BodyList/) |

| Returns |
|---------|
| [nape.phys.BodyList](/api-docs/clay-web/nape/phys/BodyList/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="shapesInAABB"><div class="plugin-name">nape</div><code><span class="field-name">shapesInAABB</span><span class="parenthesis">(</span><span class="arg-name">aabb</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_AABB/" class="type-link">zpp_nape.geom.ZPP_AABB</a><span class="operator">,</span> <span class="arg-name">strict</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">containment</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a></code><a class="header-anchor" href="#shapesInAABB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aabb` | [zpp_nape.geom.ZPP_AABB](/api-docs/clay-web/zpp_nape/geom/ZPP_AABB/) |
| `strict` | [Bool](/api-docs/clay-web/Bool/) |
| `containment` | [Bool](/api-docs/clay-web/Bool/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/) |
| `output` | [nape.shape.ShapeList](/api-docs/clay-web/nape/shape/ShapeList/) |

| Returns |
|---------|
| [nape.shape.ShapeList](/api-docs/clay-web/nape/shape/ShapeList/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="bodiesInAABB"><div class="plugin-name">nape</div><code><span class="field-name">bodiesInAABB</span><span class="parenthesis">(</span><span class="arg-name">aabb</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_AABB/" class="type-link">zpp_nape.geom.ZPP_AABB</a><span class="operator">,</span> <span class="arg-name">strict</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">containment</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a></code><a class="header-anchor" href="#bodiesInAABB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aabb` | [zpp_nape.geom.ZPP_AABB](/api-docs/clay-web/zpp_nape/geom/ZPP_AABB/) |
| `strict` | [Bool](/api-docs/clay-web/Bool/) |
| `containment` | [Bool](/api-docs/clay-web/Bool/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/) |
| `output` | [nape.phys.BodyList](/api-docs/clay-web/nape/phys/BodyList/) |

| Returns |
|---------|
| [nape.phys.BodyList](/api-docs/clay-web/nape/phys/BodyList/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="shapesInCircle"><div class="plugin-name">nape</div><code><span class="field-name">shapesInCircle</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">containment</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a></code><a class="header-anchor" href="#shapesInCircle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `r` | [Float](/api-docs/clay-web/Float/) |
| `containment` | [Bool](/api-docs/clay-web/Bool/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/) |
| `output` | [nape.shape.ShapeList](/api-docs/clay-web/nape/shape/ShapeList/) |

| Returns |
|---------|
| [nape.shape.ShapeList](/api-docs/clay-web/nape/shape/ShapeList/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="bodiesInCircle"><div class="plugin-name">nape</div><code><span class="field-name">bodiesInCircle</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">containment</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a></code><a class="header-anchor" href="#bodiesInCircle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `r` | [Float](/api-docs/clay-web/Float/) |
| `containment` | [Bool](/api-docs/clay-web/Bool/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/) |
| `output` | [nape.phys.BodyList](/api-docs/clay-web/nape/phys/BodyList/) |

| Returns |
|---------|
| [nape.phys.BodyList](/api-docs/clay-web/nape/phys/BodyList/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="shapesInShape"><div class="plugin-name">nape</div><code><span class="field-name">shapesInShape</span><span class="parenthesis">(</span><span class="arg-name">shp</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a><span class="operator">,</span> <span class="arg-name">containment</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a></code><a class="header-anchor" href="#shapesInShape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shp` | [zpp_nape.shape.ZPP_Shape](/api-docs/clay-web/zpp_nape/shape/ZPP_Shape/) |
| `containment` | [Bool](/api-docs/clay-web/Bool/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/) |
| `output` | [nape.shape.ShapeList](/api-docs/clay-web/nape/shape/ShapeList/) |

| Returns |
|---------|
| [nape.shape.ShapeList](/api-docs/clay-web/nape/shape/ShapeList/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="bodiesInShape"><div class="plugin-name">nape</div><code><span class="field-name">bodiesInShape</span><span class="parenthesis">(</span><span class="arg-name">shp</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a><span class="operator">,</span> <span class="arg-name">containment</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a></code><a class="header-anchor" href="#bodiesInShape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shp` | [zpp_nape.shape.ZPP_Shape](/api-docs/clay-web/zpp_nape/shape/ZPP_Shape/) |
| `containment` | [Bool](/api-docs/clay-web/Bool/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/) |
| `output` | [nape.phys.BodyList](/api-docs/clay-web/nape/phys/BodyList/) |

| Returns |
|---------|
| [nape.phys.BodyList](/api-docs/clay-web/nape/phys/BodyList/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rayCast"><div class="plugin-name">nape</div><code><span class="field-name">rayCast</span><span class="parenthesis">(</span><span class="arg-name">ray</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_Ray/" class="type-link">zpp_nape.geom.ZPP_Ray</a><span class="operator">,</span> <span class="arg-name">inner</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/geom/RayResult/" class="type-link">nape.geom.RayResult</a></code><a class="header-anchor" href="#rayCast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ray` | [zpp_nape.geom.ZPP_Ray](/api-docs/clay-web/zpp_nape/geom/ZPP_Ray/) |
| `inner` | [Bool](/api-docs/clay-web/Bool/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/) |

| Returns |
|---------|
| [nape.geom.RayResult](/api-docs/clay-web/nape/geom/RayResult/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rayMultiCast"><div class="plugin-name">nape</div><code><span class="field-name">rayMultiCast</span><span class="parenthesis">(</span><span class="arg-name">ray</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_Ray/" class="type-link">zpp_nape.geom.ZPP_Ray</a><span class="operator">,</span> <span class="arg-name">inner</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/geom/RayResultList/" class="type-link">nape.geom.RayResultList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/geom/RayResultList/" class="type-link">nape.geom.RayResultList</a></code><a class="header-anchor" href="#rayMultiCast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ray` | [zpp_nape.geom.ZPP_Ray](/api-docs/clay-web/zpp_nape/geom/ZPP_Ray/) |
| `inner` | [Bool](/api-docs/clay-web/Bool/) |
| `filter` | [zpp_nape.dynamics.ZPP_InteractionFilter](/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/) |
| `output` | [nape.geom.RayResultList](/api-docs/clay-web/nape/geom/RayResultList/) |

| Returns |
|---------|
| [nape.geom.RayResultList](/api-docs/clay-web/nape/geom/RayResultList/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">space</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/space/ZPP_Space/" class="type-link">ZPP_Space</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `space` | [ZPP_Space](/api-docs/clay-web/zpp_nape/space/ZPP_Space/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="FATTEN"><div class="plugin-name">nape</div><code><span class="field-name">FATTEN</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#FATTEN"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="VEL_STEPS"><div class="plugin-name">nape</div><code><span class="field-name">VEL_STEPS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#VEL_STEPS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="treeStack"><div class="plugin-name">nape</div><code><span class="field-name">treeStack</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_AABBNode/" class="type-link">zpp_nape.util.ZNPList_ZPP_AABBNode</a></code><a class="header-anchor" href="#treeStack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

