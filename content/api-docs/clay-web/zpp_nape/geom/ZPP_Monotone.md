---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ZPP_Monotone
target: Clay (Web)
permalink: api-docs/clay-web/zpp_nape/geom/ZPP_Monotone/
---

# ZPP_Monotone

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/zpp_nape/geom/Monotone.hx">View source</a></div>

<div class="type-hierarchy"><strong>zpp_nape.geom.ZPP_Monotone</strong> (Class)</div>

## Static Members

<div class="signature field-var no-description has-plugin" id="sharedPPoly"><div class="plugin-name">nape</div><code><span class="field-name">sharedPPoly</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionedPoly/" class="type-link">ZPP_PartitionedPoly</a></code><a class="header-anchor" href="#sharedPPoly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="isMonotone"><div class="plugin-name">nape</div><code><span class="field-name">isMonotone</span><span class="parenthesis">(</span><span class="arg-name">P</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_GeomVert/" class="type-link">ZPP_GeomVert</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isMonotone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `P` | [ZPP_GeomVert](/api-docs/clay-web/zpp_nape/geom/ZPP_GeomVert/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getShared"><div class="plugin-name">nape</div><code><span class="field-name">getShared</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionedPoly/" class="type-link">ZPP_PartitionedPoly</a></code><a class="header-anchor" href="#getShared"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ZPP_PartitionedPoly](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionedPoly/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="decompose"><div class="plugin-name">nape</div><code><span class="field-name">decompose</span><span class="parenthesis">(</span><span class="arg-name">P</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_GeomVert/" class="type-link">ZPP_GeomVert</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">poly</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionedPoly/" class="type-link">ZPP_PartitionedPoly</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionedPoly/" class="type-link">ZPP_PartitionedPoly</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#decompose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `P` | [ZPP_GeomVert](/api-docs/clay-web/zpp_nape/geom/ZPP_GeomVert/) | |
| `poly` | [ZPP_PartitionedPoly](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionedPoly/) | *(optional)* |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[ZPP_PartitionedPoly](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionedPoly/)> |

## Private Members

<div class="signature field-var no-description has-plugin" id="queue"><div class="plugin-name">nape</div><code><span class="field-name">queue</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_PartitionVertex/" class="type-link">zpp_nape.util.ZNPList_ZPP_PartitionVertex</a></code><a class="header-anchor" href="#queue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="edges"><div class="plugin-name">nape</div><code><span class="field-name">edges</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/ZPP_Set_ZPP_PartitionVertex/" class="type-link">zpp_nape.util.ZPP_Set_ZPP_PartitionVertex</a></code><a class="header-anchor" href="#edges"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="bisector"><div class="plugin-name">nape</div><code><span class="field-name">bisector</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_Vec2/" class="type-link">ZPP_Vec2</a></code><a class="header-anchor" href="#bisector"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b` | [ZPP_PartitionVertex](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/) |

| Returns |
|---------|
| [ZPP_Vec2](/api-docs/clay-web/zpp_nape/geom/ZPP_Vec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="below"><div class="plugin-name">nape</div><code><span class="field-name">below</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="operator">,</span> <span class="arg-name">q</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#below"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p` | [ZPP_PartitionVertex](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/) |
| `q` | [ZPP_PartitionVertex](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="above"><div class="plugin-name">nape</div><code><span class="field-name">above</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="operator">,</span> <span class="arg-name">q</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#above"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p` | [ZPP_PartitionVertex](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/) |
| `q` | [ZPP_PartitionVertex](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="left_vertex"><div class="plugin-name">nape</div><code><span class="field-name">left_vertex</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#left_vertex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p` | [ZPP_PartitionVertex](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

